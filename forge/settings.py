"""Budget, saver mode and job on/off switches.

Changed from the dashboard (POST /settings), stored in forge/state/settings.json.
Delete that file to go back to the defaults below.
"""
import json, threading
from pathlib import Path

SONNET, HAIKU = "claude-sonnet-5-5", "claude-haiku-5-5"
PATH = Path(__file__).parent / "state" / "settings.json"
DEFAULTS = {
    "monthly_cap_usd": 18.0,  # hard stop: no scheduled or queued runs past this
    "saver": True,            # cheaper models / fewer runs for lower-priority jobs (default plan)
    "auto_saver": True,       # switch to saver automatically once spend passes...
    "auto_saver_at": 0.7,     # ...this share of the cap
    "jobs": {},               # job name -> False to turn a recurring job off
}
_lock = threading.Lock()


def load() -> dict:
    try:
        data = json.loads(PATH.read_text(encoding="utf-8"))
    except Exception:
        data = {}
    return {**DEFAULTS, **data, "jobs": {**DEFAULTS["jobs"], **data.get("jobs", {})}}


def update(patch: dict) -> dict:
    with _lock:
        s = load()
        if "monthly_cap_usd" in patch:
            s["monthly_cap_usd"] = round(min(500.0, max(1.0, float(patch["monthly_cap_usd"]))), 2)
        if "auto_saver_at" in patch:
            s["auto_saver_at"] = min(1.0, max(0.1, float(patch["auto_saver_at"])))
        for k in ("saver", "auto_saver"):
            if k in patch:
                s[k] = bool(patch[k])
        if isinstance(patch.get("jobs"), dict):
            s["jobs"].update({k: bool(v) for k, v in patch["jobs"].items()})
        PATH.parent.mkdir(exist_ok=True)
        PATH.write_text(json.dumps(s, indent=2), encoding="utf-8")
        return s
