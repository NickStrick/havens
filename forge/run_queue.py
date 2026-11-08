import asyncio, shutil
from datetime import datetime
import yaml
from dotenv import load_dotenv
from claude_agent_sdk import (query, ClaudeAgentOptions, AssistantMessage,
                              TextBlock, ToolUseBlock, ResultMessage)
from benders import BENDERS, VAULT

load_dotenv()
QUEUE, DONE = VAULT / "Agents/Queue", VAULT / "Agents/Done"
MAX_USD_PER_RUN = 0.60  # default hard stop for a single task (jobs set their own)
TOOLS = ["Read", "Glob", "Grep", "Write", "Edit"]  # only these are loaded: smaller prompt, lower cost


# Windows defaults to cp1252, which breaks on emoji and smart quotes, so always use UTF-8.
def read_task(path):
    text = path.read_text(encoding="utf-8")
    if not text.lstrip().startswith("---") or text.count("---") < 2:
        return {}, text.strip()  # no frontmatter: process() reports and skips it
    _, fm, body = text.split("---", 2)
    return yaml.safe_load(fm) or {}, body.strip()


def write_task(path, meta, body):
    path.write_text(f"---\n{yaml.safe_dump(meta, sort_keys=False)}---\n{body}\n",
                    encoding="utf-8")


async def run(task_path, emit):
    meta, body = read_task(task_path)
    name = meta["agent"]
    bender = BENDERS[name]
    role = (VAULT / "Agents/Roles" / f"{name}.md").read_text(encoding="utf-8")
    meta["status"] = "working"
    meta.pop("error", None)
    write_task(task_path, meta, body)
    await emit(name, "started", task_path.stem)

    # The task's own frontmatter wins (scheduled jobs set it), then the bender's defaults.
    model = meta.get("model") or bender["model"]
    effort = meta.get("effort") or bender.get("effort", "medium")
    max_usd = float(meta.get("max_usd") or bender.get("max_usd", MAX_USD_PER_RUN))
    options = ClaudeAgentOptions(
        system_prompt=(f"{role}\n\nYou may read anything in the vault. "
                       f"Only create or edit files inside: {', '.join(bender['writes'])}. "
                       "Be efficient: read only the files you need, and don't re-read files "
                       "already pasted into the task. "
                       f"Today is {datetime.now():%A %Y-%m-%d}."),
        cwd=str(VAULT),
        tools=TOOLS,
        allowed_tools=TOOLS,
        permission_mode="acceptEdits",
        model=model,
        effort=effort,
        max_turns=bender["turns"],
        max_budget_usd=max_usd,
    )
    try:
        result = None
        async for msg in query(prompt=body, options=options):
            if isinstance(msg, AssistantMessage):
                for block in msg.content:
                    if isinstance(block, ToolUseBlock):
                        target = block.input.get("file_path") or block.input.get("pattern", "")
                        await emit(name, "tool", f"{block.name} {target}")
                    elif isinstance(block, TextBlock):
                        await emit(name, "thinking", block.text[:200])
            elif isinstance(msg, ResultMessage):
                result = msg
                meta["cost_usd"] = round(msg.total_cost_usd or 0, 4)
        if result is None:
            meta["status"], meta["error"] = "failed", "no result message"
        elif result.is_error:  # e.g. ran out of turns (stamina) or budget
            meta["status"], meta["error"] = "failed", result.subtype
        else:
            meta["status"] = "done"
    except Exception as e:
        meta["status"], meta["error"] = "failed", str(e)
    meta["finished"] = datetime.now().isoformat(timespec="minutes")
    write_task(task_path, meta, body)
    if meta["status"] == "done":
        shutil.move(task_path, DONE / task_path.name)
    await emit(name, meta["status"], meta.get("error") or task_path.stem, meta.get("cost_usd"))


def reset_stuck():
    """A task left at 'working' means the server stopped mid-run. Put it back to todo."""
    for path in QUEUE.glob("*.md"):
        meta, body = read_task(path)
        if meta.get("status") == "working":
            meta["status"] = "todo"
            write_task(path, meta, body)
            print(f"[queue] reset stuck task {path.name}")


_last_block = None


async def process(emit, gate=None):
    """Run every todo task. `gate()` returns None to allow, or a reason to hold the queue
    (the monthly cap). A task with `force: true` in its frontmatter skips the gate."""
    global _last_block
    for path in sorted(QUEUE.glob("*.md")):
        meta, _ = read_task(path)
        if not meta.get("agent"):
            print(f"[queue] skipping {path.name}: no frontmatter with agent/status")
            continue
        if meta.get("status") != "todo" or meta.get("agent") not in BENDERS:
            continue
        reason = gate() if gate else None
        if reason and not meta.get("force"):
            if reason != _last_block:  # announce once, not every 30 s
                await emit(meta["agent"], "held", f"{path.stem}: {reason}")
                _last_block = reason
            continue
        _last_block = None
        await run(path, emit)


async def print_emit(agent, type, detail="", cost=None):
    print(f"[{agent}] {type} {detail}" + (f" (${cost})" if cost is not None else ""))


if __name__ == "__main__":
    # CLI mode: run the queue once and print events
    reset_stuck()
    asyncio.run(process(print_emit))
