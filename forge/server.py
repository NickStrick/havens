"""The forge: runs benders from the queue, on schedules, and streams events.

Run:  uv run uvicorn server:app --port 8787   (8000 is taken by Splunk on this machine)
"""
import asyncio, json, sqlite3, time
from contextlib import asynccontextmanager
from datetime import datetime, date
from pathlib import Path
import yaml
from fastapi import FastAPI, WebSocket, WebSocketDisconnect
from fastapi.middleware.cors import CORSMiddleware
from apscheduler.schedulers.asyncio import AsyncIOScheduler
import run_queue
from benders import BENDERS, VAULT

# ---------- events: SQLite log + WebSocket fan-out ----------

db = sqlite3.connect(Path(__file__).parent / "events.db", check_same_thread=False)
db.execute("create table if not exists events "
           "(ts real, agent text, type text, detail text, cost real)")
clients: set[WebSocket] = set()
lock = asyncio.Lock()


async def emit(agent, type, detail="", cost=None):
    ev = {"ts": time.time(), "agent": agent, "type": type, "detail": detail, "cost": cost}
    db.execute("insert into events values (?,?,?,?,?)", tuple(ev.values()))
    db.commit()
    print(f"[{agent}] {type} {detail[:100]}")
    for ws in list(clients):
        try:
            await ws.send_json(ev)
        except Exception:
            clients.discard(ws)


async def drain():
    async with lock:  # never run the queue twice at once
        await run_queue.process(emit)


async def poller():
    while True:
        try:
            await drain()
        except Exception as e:  # one bad task must not kill the loop
            print(f"[forge] queue error: {e}")
        await asyncio.sleep(30)


# ---------- 3d: logs -> numbers (code, not a model) ----------

LOG = VAULT / "Log/Daily"
COUNTS = ["demos", "discovery_calls", "outreach", "follow_ups", "deals_won",
          "study_minutes", "practice_reps"]
LEVELS = ["active_relationships", "pocs_active"]
SCORES = ["demo_score", "discovery_score", "energy"]


def num(v):
    try:
        return float(v)
    except (TypeError, ValueError):
        return None


def read_logs():
    rows = []
    for p in sorted(LOG.glob("20*.md")):
        text = p.read_text(encoding="utf-8")
        if not text.startswith("---"):
            continue
        try:
            meta = yaml.safe_load(text.split("---", 2)[1]) or {}
            meta["date"] = str(meta.get("date") or p.stem)
            date.fromisoformat(meta["date"])
        except Exception as e:
            print(f"[metrics] skipping {p.name}: {e}")
            continue
        rows.append(meta)
    return rows


def compute_metrics(period="week"):
    buckets = {}
    for r in read_logs():
        d = date.fromisoformat(r["date"])
        iso = d.isocalendar()
        key = f"{iso.year}-W{iso.week:02d}" if period == "week" else d.strftime("%Y-%m")
        b = buckets.setdefault(key, {"period": key, "days": 0, "videos": 0,
                                     **{k: 0 for k in COUNTS + LEVELS},
                                     "_s": {s: [] for s in SCORES}})
        b["days"] += 1
        b["videos"] += 1 if r.get("video_posted") is True else 0
        for k in COUNTS:
            b[k] += int(num(r.get(k)) or 0)
        for k in LEVELS:
            b[k] = max(b[k], int(num(r.get(k)) or 0))
        for s in SCORES:
            if num(r.get(s)) is not None:
                b["_s"][s].append(num(r[s]))
    out = []
    for b in buckets.values():
        scores = b.pop("_s")
        b.update({s: round(sum(v) / len(v), 2) if v else None for s, v in scores.items()})
        out.append(b)
    return sorted(out, key=lambda b: b["period"])


# ---------- 3e: scheduled jobs (they only queue tasks) ----------

def today():
    return datetime.now().strftime("%Y-%m-%d")


def queue_task(agent, slug, body):
    path = run_queue.QUEUE / f"{today()}-{slug}.md"
    if path.exists() or (run_queue.DONE / path.name).exists():
        print(f"[forge] {path.name} already queued today, skipping")
        return
    path.write_text(f"---\nagent: {agent}\nstatus: todo\ncreated: {today()}\n---\n{body}\n",
                    encoding="utf-8")
    print(f"[forge] queued {path.name}")


def morning_brief():
    queue_task("foreman", "daily-brief",
        f"Write today's brief to Log/Briefs/{today()}.md: yesterday's log, my targets, "
        "today's study topic, Suri's variable to isolate, and today's video idea.")


def daily_lesson():
    queue_task("scholar", "lesson",
        "Pick the next topic in Aikido/Study/ I haven't had a lesson on. "
        "If my latest Log/Reviews/ note names a variable to isolate, add a drill for it.")


def nightly_coach():
    if not (LOG / f"{today()}.md").exists():
        print("[forge] no daily log today, skipping coach")
        return
    queue_task("coach", "daily-coach",
        f"Read today's Log/Daily/ note. Write Log/Reviews/{today()}-daily.md with: one pattern "
        "you see, the ONE variable to isolate tomorrow, one question for me, and tomorrow's "
        "journal prompt, drawn from today's win or miss. Read today's Journal/ entry too.")


def weekly_review():
    data = json.dumps(compute_metrics("week")[-8:], indent=2)
    queue_task("coach", "rep-review",
        "Sunday Rep Review. My last 8 weeks of numbers, computed by code. Use them as given, "
        f"never recount:\n```json\n{data}\n```\n"
        "Read this week's Log/Daily/ and Log/Reviews/ notes. Write "
        f"Log/Reviews/{today()}-week.md: trends, best rep, recurring miss, the ONE variable "
        "for next week, and 2 generic video ideas.")


def monthly_ledger():
    data = json.dumps(compute_metrics("month"), indent=2)
    queue_task("ledger", "impact-ledger",
        "Monthly ledger. Numbers computed by code. Use them as given, never recount:\n"
        f"```json\n{data}\n```\n"
        "Update Log/Ledger/Impact Ledger.md (a month table, totals, growth since month 1), "
        "Log/Ledger/Resume Bullets.md (action, metric, result) and Log/Ledger/Negotiation Brief.md.")


def monthly_themes():
    queue_task("coach", "journal-themes",
        "Read last month's Journal/ entries. For each theme in their frontmatter, update "
        "Journal/Themes/<theme>.md: a [[wikilink]] to each entry, a one-line summary, and the "
        "strongest line quoted exactly. Never edit or rewrite my entries. Then add up to 3 "
        "chapter ideas to Journal/Themes/_Chapter Seeds.md, each citing the entries behind it.")


# (job, agent it feeds, cron trigger). Jobs for unrecruited benders are not scheduled.
JOBS = [
    (morning_brief,  "foreman", dict(day_of_week="mon-fri", hour=6, minute=45)),
    (daily_lesson,   "scholar", dict(day_of_week="mon-fri", hour=12)),
    (nightly_coach,  "coach",   dict(day_of_week="mon-fri", hour=21)),
    (weekly_review,  "coach",   dict(day_of_week="sun", hour=9)),
    (monthly_ledger, "ledger",  dict(day=1, hour=8)),
    (monthly_themes, "coach",   dict(day=1, hour=9)),
]


# ---------- app ----------

@asynccontextmanager
async def lifespan(app):
    run_queue.reset_stuck()
    sched = AsyncIOScheduler()
    for job, agent, cron in JOBS:
        if agent in BENDERS:
            sched.add_job(job, "cron", id=job.__name__, misfire_grace_time=3600, **cron)
    sched.start()
    for j in sched.get_jobs():
        print(f"[forge] scheduled {j.id}: next run {j.next_run_time:%a %Y-%m-%d %H:%M}")
    loop_task = asyncio.create_task(poller())
    yield
    loop_task.cancel()
    sched.shutdown()


app = FastAPI(lifespan=lifespan)
app.add_middleware(CORSMiddleware, allow_origins=["http://localhost:3000"],
                   allow_methods=["*"], allow_headers=["*"])


@app.get("/benders")
def benders():
    return BENDERS


@app.get("/events")
def events(limit: int = 200):
    rows = db.execute("select * from events order by ts desc limit ?", (limit,)).fetchall()
    return [dict(zip(["ts", "agent", "type", "detail", "cost"], r)) for r in rows]


@app.get("/metrics")
def metrics(period: str = "week"):
    return compute_metrics(period)


@app.get("/reviews/latest")
def latest_review():
    files = sorted((VAULT / "Log/Reviews").glob("*.md"), key=lambda p: p.stat().st_mtime)
    if not files:
        return {"name": None, "content": ""}
    return {"name": files[-1].stem, "content": files[-1].read_text(encoding="utf-8")}


@app.post("/run")
async def run_now():
    asyncio.create_task(drain())
    return {"ok": True}


@app.get("/jobs")
def list_jobs():
    return [{"job": j.__name__, "agent": a, "active": a in BENDERS, "cron": c} for j, a, c in JOBS]


@app.post("/jobs/{name}")
async def trigger_job(name: str):
    """Fire a scheduled job now (queues its task), then drain the queue."""
    for job, agent, _ in JOBS:
        if job.__name__ == name:
            if agent not in BENDERS:
                return {"ok": False, "error": f"{agent} is not recruited yet"}
            job()
            asyncio.create_task(drain())
            return {"ok": True, "queued_for": agent}
    return {"ok": False, "error": f"no job named {name}"}


@app.websocket("/ws")
async def ws(socket: WebSocket):
    await socket.accept()
    clients.add(socket)
    try:
        while True:
            await socket.receive_text()  # keep the connection open
    except WebSocketDisconnect:
        clients.discard(socket)
