import asyncio, shutil
from datetime import datetime
import yaml
from dotenv import load_dotenv
from claude_agent_sdk import (query, ClaudeAgentOptions, AssistantMessage,
                              TextBlock, ToolUseBlock, ResultMessage)
from benders import BENDERS, VAULT

load_dotenv()
QUEUE, DONE = VAULT / "Agents/Queue", VAULT / "Agents/Done"


# Windows defaults to cp1252, which breaks on emoji and smart quotes, so always use UTF-8.
def read_task(path):
    text = path.read_text(encoding="utf-8")
    if not text.lstrip().startswith("---") or text.count("---") < 2:
        return {}, text.strip()  # no frontmatter: main() reports and skips it
    _, fm, body = text.split("---", 2)
    return yaml.safe_load(fm) or {}, body.strip()


def write_task(path, meta, body):
    path.write_text(f"---\n{yaml.safe_dump(meta, sort_keys=False)}---\n{body}\n",
                    encoding="utf-8")


async def run(task_path):
    meta, body = read_task(task_path)
    name = meta["agent"]
    bender = BENDERS[name]
    role = (VAULT / "Agents/Roles" / f"{name}.md").read_text(encoding="utf-8")
    meta["status"] = "working"
    write_task(task_path, meta, body)
    print(f"[{name}] started {task_path.stem}")

    options = ClaudeAgentOptions(
        system_prompt=(f"{role}\n\nYou may read anything in the vault. "
                       f"Only create or edit files inside: {', '.join(bender['writes'])}. "
                       f"Today is {datetime.now():%A %Y-%m-%d}."),
        cwd=str(VAULT),
        allowed_tools=["Read", "Glob", "Grep", "Write", "Edit"],
        permission_mode="acceptEdits",
        model=bender["model"],
        max_turns=bender["turns"],
    )
    try:
        async for msg in query(prompt=body, options=options):
            if isinstance(msg, AssistantMessage):
                for block in msg.content:
                    if isinstance(block, ToolUseBlock):
                        target = block.input.get("file_path") or block.input.get("pattern", "")
                        print(f"[{name}] {block.name} {target}")
                    elif isinstance(block, TextBlock):
                        print(f"[{name}] {block.text[:120]}")
            elif isinstance(msg, ResultMessage):
                meta["cost_usd"] = round(msg.total_cost_usd or 0, 4)
        meta["status"] = "done"
    except Exception as e:
        meta["status"], meta["error"] = "failed", str(e)
    meta["finished"] = datetime.now().isoformat(timespec="minutes")
    write_task(task_path, meta, body)
    print(f"[{name}] {meta['status']} (${meta.get('cost_usd', 0)})")
    if meta["status"] == "done":
        shutil.move(task_path, DONE / task_path.name)


async def main():
    for path in sorted(QUEUE.glob("*.md")):
        meta, _ = read_task(path)
        if not meta.get("agent"):
            print(f"[queue] skipping {path.name}: no frontmatter with agent/status")
            continue
        if meta.get("status") == "todo" and meta.get("agent") in BENDERS:
            await run(path)


if __name__ == "__main__":
    asyncio.run(main())
