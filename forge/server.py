"""The forge: runs benders from the queue, on schedules, and streams events.

Run:  uv run uvicorn server:app --port 8787   (8000 is taken by Splunk on this machine)
"""
import asyncio, json, os, sqlite3, time
from contextlib import asynccontextmanager
from datetime import datetime, date, timedelta
from pathlib import Path
import yaml
from fastapi import FastAPI, WebSocket, WebSocketDisconnect
from fastapi.middleware.cors import CORSMiddleware
from apscheduler.schedulers.asyncio import AsyncIOScheduler
import run_queue, settings
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
        await run_queue.process(emit, gate)


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


# ---------- budget: spend, cap, saver mode (all computed by code) ----------

def month_start() -> float:
    return datetime.now().replace(day=1, hour=0, minute=0, second=0, microsecond=0).timestamp()


def month_spend() -> float:
    q = "select coalesce(sum(cost), 0) from events where cost is not null and ts >= ?"
    return round(db.execute(q, (month_start(),)).fetchone()[0], 4)


def saver_active(s=None, spend=None) -> bool:
    s = s or settings.load()
    spend = month_spend() if spend is None else spend
    return s["saver"] or (s["auto_saver"] and spend >= s["auto_saver_at"] * s["monthly_cap_usd"])


def gate():
    """Hold the queue once the month's spend reaches the cap."""
    s = settings.load()
    spend = month_spend()
    if spend >= s["monthly_cap_usd"]:
        return f"monthly cap reached (${spend:.2f} of ${s['monthly_cap_usd']:.2f})"
    return None


# ---------- scheduled jobs (they only queue tasks; code decides when) ----------

def today():
    return datetime.now().strftime("%Y-%m-%d")


def queue_task(agent, slug, body, profile=None):
    path = run_queue.QUEUE / f"{today()}-{slug}.md"
    if path.exists() or (run_queue.DONE / path.name).exists():
        print(f"[forge] {path.name} already queued today, skipping")
        return False
    fm = {"agent": agent, "status": "todo", "created": today()}
    if profile:
        fm.update({k: profile[k] for k in ("model", "effort", "max_usd")})
    path.write_text(f"---\n{yaml.safe_dump(fm, sort_keys=False)}---\n{body}\n", encoding="utf-8")
    print(f"[forge] queued {path.name}")
    return True


def read_vault(rel, limit=6000):
    p = VAULT / rel
    return p.read_text(encoding="utf-8", errors="ignore")[:limit] if p.exists() else None


def this_week_bucket():
    weeks = compute_metrics("week")
    iso = datetime.now().isocalendar()
    return weeks[-1] if weeks and weeks[-1]["period"] == f"{iso.year}-W{iso.week:02d}" else None


def morning_brief(profile):
    wk = this_week_bucket()
    data = json.dumps(wk, indent=2) if wk else "null  (no logs yet this week)"
    return queue_task("foreman", "daily-brief",
        f"Write today's brief to Log/Briefs/{today()}.md, following your role's format. "
        "Week-to-date numbers, computed by code. Use them as given, never recount:\n"
        f"```json\n{data}\n```", profile)


def nightly_outline(profile):
    tomorrow = datetime.now() + timedelta(days=1)
    return queue_task("herald", "outline",
        f"Write the outline for tomorrow, {tomorrow:%A %Y-%m-%d}, to "
        f"Content/Outlines/{tomorrow:%Y-%m-%d}.md. Use the {tomorrow:%A} row of the weekly "
        "pillar rotation in Content/Content Plan.md.", profile)


def weekly_scout(profile):
    if not os.environ.get("YOUTUBE_API_KEY"):
        print("[forge] no YOUTUBE_API_KEY in forge/.env, skipping scout")
        return False
    import scout  # YouTube stats and outlier scores, all computed in Python
    try:
        data = json.dumps(scout.run(), indent=2)
    except Exception as e:
        print(f"[forge] scout data pull failed: {e}")
        return False
    return queue_task("scout", "scout",
        "Weekly research. YouTube data and outlier scores computed by code. Use them exactly "
        f"as given, never estimate:\n```json\n{data}\n```\n"
        f"Write Content/Research/{today()}-scout.md and 5 idea files, following your role.", profile)


def untriaged_inbox():
    out = []
    for p in sorted((VAULT / "Inbox").glob("*.md")):
        head = p.read_text(encoding="utf-8", errors="ignore")[:600]
        if "triaged: true" not in head:
            out.append(p.name)
    return out


def inbox_triage(profile):
    notes = untriaged_inbox()
    if not notes:
        return False  # nothing new: no run, no cost
    stamp = datetime.now().strftime("%H%M")
    return queue_task("runner", f"inbox-{stamp}",
        "Triage these Inbox/ notes, following your role:\n"
        + "\n".join(f"- Inbox/{n}" for n in notes), profile)


def daily_lesson(profile):
    # Code gathers the context, so Mirelle spends turns teaching, not searching.
    done = sorted(p.stem for p in (VAULT / "Aikido/Study/Notes").glob("*.md"))
    targets = read_vault("Log/Targets.md") or ""
    plan = targets.split("## Study plan", 1)[1].strip() if "## Study plan" in targets else "(none)"
    return queue_task("scholar", "lesson",
        "Teach today's lesson, following your role.\n\n"
        f"Study plan from Log/Targets.md:\n{plan}\n\n"
        f"Lessons already written (don't repeat these topics): {', '.join(done) or 'none'}\n\n"
        "Pick the first study-plan topic without a lesson. Find its pages via the matching "
        "Aikido/Study/Docs/<Section>/_Index.md and read only the top-level pages you need. "
        "If Suri's latest Log/Reviews/ note has a `variable:`, add a 10-minute drill for it.",
        profile)


def nightly_coach(profile):
    log = read_vault(f"Log/Daily/{today()}.md")
    if not log:
        print("[forge] no daily log today, skipping coach")
        return False
    journal = read_vault(f"Journal/{today()}.md") or "(no journal entry today)"
    return queue_task("coach", "daily-coach",
        f"Nightly coaching. Today's log and journal are pasted below; don't re-read them.\n\n"
        f"## Log/Daily/{today()}.md\n{log}\n\n## Journal/{today()}.md\n{journal}\n\n"
        f"Read your last 2 notes in Log/Reviews/, then write Log/Reviews/{today()}-daily.md: "
        "one pattern you see, the ONE variable to isolate tomorrow, one question for me, and "
        "tomorrow's journal prompt drawn from today's win or miss.", profile)


def weekly_review(profile):
    weeks = compute_metrics("week")
    if not this_week_bucket():
        print("[forge] no daily logs this week, skipping rep review")
        return False
    data = json.dumps(weeks[-8:], indent=2)
    return queue_task("coach", "rep-review",
        "Sunday Rep Review. My last 8 weeks of numbers, computed by code. Use them as given, "
        f"never recount:\n```json\n{data}\n```\n"
        "Read this week's Log/Daily/ and Log/Reviews/ notes. Write "
        f"Log/Reviews/{today()}-week.md: trends, best rep, recurring miss, the ONE variable "
        "for next week, and 2 generic video ideas.", profile)


def monthly_ledger(profile):
    months = compute_metrics("month")
    if not months:
        print("[forge] no daily logs yet, skipping ledger")
        return False
    data = json.dumps(months, indent=2)
    return queue_task("ledger", "impact-ledger",
        "Monthly ledger. Numbers computed by code. Use them as given, never recount:\n"
        f"```json\n{data}\n```\n"
        "Update Log/Ledger/Impact Ledger.md (a month table, totals, growth since month 1), "
        "Log/Ledger/Resume Bullets.md (action, metric, result) and Log/Ledger/Negotiation Brief.md.",
        profile)


def monthly_themes(profile):
    return queue_task("coach", "journal-themes",
        "Read last month's Journal/ entries. For each theme in their frontmatter, update "
        "Journal/Themes/<theme>.md: a [[wikilink]] to each entry, a one-line summary, and the "
        "strongest line quoted exactly. Never edit or rewrite my entries. Then add up to 3 "
        "chapter ideas to Journal/Themes/_Chapter Seeds.md, each citing the entries behind it.",
        profile)


S, H = settings.SONNET, settings.HAIKU


def P(model, effort, max_usd, est):
    """Run profile: model, effort, hard cost cap per run, and estimated cost per run."""
    return {"model": model, "effort": effort, "max_usd": max_usd, "est": est}


# Priority 1 = SE track core, 2 = brand track, 3 = support.
# `saver` is the profile in saver mode; `saver_days` limits which days it runs then.
# `runs` = expected runs per month. Estimates are per run and get replaced by real
# averages on the dashboard once runs happen.
JOBS = [
    dict(fn=daily_lesson, agent="scholar", label="Daily lesson", priority=1,
         when="Weekdays 12:00", cron=dict(day_of_week="mon-fri", hour=12),
         runs=22, normal=P(S, "medium", 0.60, 0.25),
         saver=P(S, "low", 0.40, 0.18), saver_days="mon,wed,fri", saver_runs=13),
    dict(fn=nightly_coach, agent="coach", label="Nightly coaching", priority=1,
         when="Weekdays 21:00 (if you logged)", cron=dict(day_of_week="mon-fri", hour=21),
         runs=22, normal=P(S, "medium", 0.50, 0.20), saver=P(H, "medium", 0.10, 0.03)),
    dict(fn=weekly_review, agent="coach", label="Sunday Rep Review", priority=1,
         when="Sundays 09:00", cron=dict(day_of_week="sun", hour=9),
         runs=4, normal=P(S, "medium", 0.60, 0.30), saver=P(S, "medium", 0.60, 0.30)),
    dict(fn=monthly_ledger, agent="ledger", label="Impact Ledger", priority=1,
         when="1st of the month 08:00", cron=dict(day=1, hour=8),
         runs=1, normal=P(S, "medium", 0.80, 0.40), saver=P(S, "medium", 0.80, 0.40)),
    dict(fn=nightly_outline, agent="herald", label="Video outline", priority=2,
         when="Sun-Fri 20:00", cron=dict(day_of_week="mon-fri,sun", hour=20),
         runs=26, normal=P(S, "low", 0.40, 0.15), saver=P(H, "medium", 0.10, 0.02)),
    dict(fn=weekly_scout, agent="scout", label="YouTube research", priority=2,
         when="Mondays 07:00", cron=dict(day_of_week="mon", hour=7),
         runs=4, normal=P(H, "medium", 0.15, 0.04), saver=P(H, "medium", 0.15, 0.04)),
    dict(fn=morning_brief, agent="foreman", label="Morning brief", priority=3,
         when="Weekdays 06:45", cron=dict(day_of_week="mon-fri", hour=6, minute=45),
         runs=22, normal=P(H, "low", 0.10, 0.02), saver=P(H, "low", 0.10, 0.02)),
    dict(fn=monthly_themes, agent="coach", label="Journal themes", priority=3,
         when="1st of the month 09:00", cron=dict(day=1, hour=9),
         runs=1, normal=P(S, "medium", 0.60, 0.30), saver=P(H, "medium", 0.10, 0.03)),
    dict(fn=inbox_triage, agent="runner", label="Inbox triage", priority=3,
         when="Hourly 8-20, only if new notes", cron=dict(hour="8-20", minute=5),
         runs=20, normal=P(H, "low", 0.05, 0.01), saver=P(H, "low", 0.05, 0.01)),
]
JOB_BY_NAME = {j["fn"].__name__: j for j in JOBS}
DOW = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"]


def job_monthly(j, saver: bool) -> float:
    prof = j["saver"] if saver else j["normal"]
    runs = j.get("saver_runs", j["runs"]) if saver else j["runs"]
    return round(prof["est"] * runs, 2)


async def fire(name: str, manual=False):
    """Every scheduled job goes through here: on/off switch, cap, saver mode."""
    j = JOB_BY_NAME[name]
    s = settings.load()
    if not manual and not s["jobs"].get(name, True):
        print(f"[forge] {name} is switched off")
        return {"ok": False, "reason": "switched off"}
    spend = month_spend()
    if spend >= s["monthly_cap_usd"]:
        await emit(j["agent"], "held", f"{j['label']}: monthly cap reached")
        return {"ok": False, "reason": "monthly cap reached"}
    saver = saver_active(s, spend)
    if saver and not manual and j.get("saver_days") and DOW[datetime.now().weekday()] not in j["saver_days"]:
        print(f"[forge] {name} skipped today (saver mode runs it {j['saver_days']})")
        return {"ok": False, "reason": f"saver mode: runs {j['saver_days']} only"}
    profile = j["saver"] if saver else j["normal"]
    queued = await asyncio.to_thread(j["fn"], profile)
    if queued:
        asyncio.create_task(drain())
    return {"ok": bool(queued), "reason": None if queued else "nothing to do",
            "model": profile["model"], "effort": profile["effort"]}


# ---------- app ----------

sched: AsyncIOScheduler | None = None


@asynccontextmanager
async def lifespan(app):
    global sched
    run_queue.reset_stuck()
    sched = AsyncIOScheduler()
    for name, j in JOB_BY_NAME.items():
        if j["agent"] in BENDERS:
            sched.add_job(fire, "cron", args=[name], id=name, misfire_grace_time=3600, **j["cron"])
    sched.start()
    for jb in sched.get_jobs():
        print(f"[forge] scheduled {jb.id}: next run {jb.next_run_time:%a %Y-%m-%d %H:%M}")
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


@app.get("/costs")
def costs():
    """Spend from the event log, summed by code: today, this ISO week, month, all time, per bender."""
    now = datetime.now()
    day0 = now.replace(hour=0, minute=0, second=0, microsecond=0)
    week0 = day0.timestamp() - day0.weekday() * 86400
    q = "select coalesce(sum(cost), 0) from events where cost is not null and ts >= ?"
    per = db.execute("select agent, sum(cost), count(*) from events where cost is not null "
                     "group by agent").fetchall()
    return {
        "today": round(db.execute(q, (day0.timestamp(),)).fetchone()[0], 4),
        "week": round(db.execute(q, (week0,)).fetchone()[0], 4),
        "month": month_spend(),
        "total": round(db.execute(q, (0,)).fetchone()[0], 4),
        "by_agent": {a: {"usd": round(c, 4), "runs": n, "avg": round(c / n, 4)} for a, c, n in per},
    }


@app.get("/settings")
def get_settings():
    s = settings.load()
    spend = month_spend()
    saver = saver_active(s, spend)
    now = datetime.now()
    next_month = (now.replace(day=28) + timedelta(days=4)).replace(day=1)
    days_in_month = (next_month - now.replace(day=1)).days
    left = (days_in_month - now.day + 1) / days_in_month
    enabled = [j for n, j in JOB_BY_NAME.items() if s["jobs"].get(n, True) and j["agent"] in BENDERS]
    return {
        **s,
        "month_spend": spend,
        "saver_active": saver,
        "saver_reason": "on" if s["saver"] else ("auto" if saver else None),
        "plan_normal": round(sum(job_monthly(j, False) for j in enabled), 2),
        "plan_saver": round(sum(job_monthly(j, True) for j in enabled), 2),
        "projected": round(spend + left * sum(job_monthly(j, saver) for j in enabled), 2),
        "capped": spend >= s["monthly_cap_usd"],
    }


@app.post("/settings")
async def post_settings(patch: dict):
    settings.update(patch)
    return get_settings()


@app.get("/metrics")
def metrics(period: str = "week"):
    return compute_metrics(period)


@app.get("/reviews/latest")
def latest_review():
    files = sorted((VAULT / "Log/Reviews").glob("*.md"), key=lambda p: p.stat().st_mtime)
    if not files:
        return {"name": None, "content": ""}
    return {"name": files[-1].stem, "content": files[-1].read_text(encoding="utf-8")}


def pending():
    """Tasks the queue would run now: status todo, for a recruited bender."""
    out = []
    for p in sorted(run_queue.QUEUE.glob("*.md")):
        meta, _ = run_queue.read_task(p)
        if meta.get("status") == "todo" and meta.get("agent") in BENDERS:
            out.append({"task": p.stem, "agent": meta["agent"]})
    return out


@app.get("/queue")
def queue():
    return {"busy": lock.locked(), "pending": pending(), "held": gate()}


@app.post("/run")
async def run_now():
    tasks, busy, held = pending(), lock.locked(), gate()
    if tasks and not held:
        asyncio.create_task(drain())
    return {"ok": True, "busy": busy, "pending": tasks, "held": held}


@app.get("/jobs")
def list_jobs():
    s = settings.load()
    saver = saver_active(s)
    out = []
    for name, j in JOB_BY_NAME.items():
        jb = sched.get_job(name) if sched else None
        prof = j["saver"] if saver else j["normal"]
        out.append({
            "job": name, "label": j["label"], "agent": j["agent"], "priority": j["priority"],
            "when": j["when"], "recruited": j["agent"] in BENDERS,
            "enabled": s["jobs"].get(name, True),
            "next_run": jb.next_run_time.isoformat() if jb and jb.next_run_time else None,
            "model": prof["model"], "effort": prof["effort"],
            "saver_days": j.get("saver_days") if saver else None,
            "est_month": job_monthly(j, False), "est_month_saver": job_monthly(j, True),
        })
    return out


@app.post("/jobs/{name}")
async def trigger_job(name: str):
    """Fire a job now (switch ignored, cap still applies)."""
    if name not in JOB_BY_NAME:
        return {"ok": False, "reason": f"no job named {name}"}
    if JOB_BY_NAME[name]["agent"] not in BENDERS:
        return {"ok": False, "reason": "bender not recruited"}
    return await fire(name, manual=True)


@app.websocket("/ws")
async def ws(socket: WebSocket):
    await socket.accept()
    clients.add(socket)
    try:
        while True:
            await socket.receive_text()  # keep the connection open
    except WebSocketDisconnect:
        clients.discard(socket)
