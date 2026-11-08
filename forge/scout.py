"""Scout data pull: YouTube stats and outlier scores, computed by code.

The Scout agent never counts or estimates. It only reads the JSON this file
produces and writes the analysis.

Run on its own to test:  uv run scout.py
"""
import json
import os
import re
import statistics
from datetime import datetime, timedelta, timezone
from pathlib import Path

import requests
import yaml
from dotenv import load_dotenv

load_dotenv()
API = "https://www.googleapis.com/youtube/v3"
CONFIG = yaml.safe_load(Path(__file__).with_name("creators.yaml").read_text(encoding="utf-8"))
SHORT_MAX_SECONDS = 180  # YouTube Shorts can run up to 3 minutes


def get(endpoint: str, **params) -> dict:
    params["key"] = os.environ["YOUTUBE_API_KEY"]
    r = requests.get(f"{API}/{endpoint}", params=params, timeout=30)
    r.raise_for_status()
    return r.json()


def seconds(iso_duration: str) -> int:
    m = re.match(r"PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?", iso_duration or "")
    h, mi, s = (int(x or 0) for x in m.groups()) if m else (0, 0, 0)
    return h * 3600 + mi * 60 + s


def video_rows(ids: list[str]) -> list[dict]:
    """Stats for up to 50 videos per call (1 quota unit per call)."""
    now = datetime.now(timezone.utc)
    rows = []
    for i in range(0, len(ids), 50):
        data = get("videos", part="snippet,statistics,contentDetails", id=",".join(ids[i:i + 50]))
        for v in data.get("items", []):
            stats, snip = v.get("statistics", {}), v["snippet"]
            published = datetime.fromisoformat(snip["publishedAt"].replace("Z", "+00:00"))
            secs = seconds(v["contentDetails"].get("duration", ""))
            views = int(stats.get("viewCount", 0))
            age = max(1, (now - published).days)
            rows.append({
                "channel": snip["channelTitle"],
                "title": snip["title"],
                "url": f"https://youtu.be/{v['id']}",
                "format": "short" if secs <= SHORT_MAX_SECONDS else "long",
                "seconds": secs,
                "views": views,
                "likes": int(stats.get("likeCount", 0)),
                "comments": int(stats.get("commentCount", 0)),
                "age_days": age,
                "views_per_day": round(views / age),
            })
    return rows


def score_outliers(rows: list[dict]) -> None:
    """outlier = views / the channel's median views for the same format."""
    for fmt in ("short", "long"):
        group = [r for r in rows if r["format"] == fmt]
        if not group:
            continue
        median = statistics.median(r["views"] for r in group) or 1
        for r in group:
            r["outlier"] = round(r["views"] / median, 2)


def creator_report(handle: str, n: int) -> dict:
    ch = get("channels", part="snippet,contentDetails,statistics", forHandle=handle)
    if not ch.get("items"):
        return {"handle": handle, "error": "handle not found, check creators.yaml"}
    item = ch["items"][0]
    uploads = item["contentDetails"]["relatedPlaylists"]["uploads"]
    pl = get("playlistItems", part="contentDetails", playlistId=uploads, maxResults=n)
    rows = video_rows([i["contentDetails"]["videoId"] for i in pl.get("items", [])])
    score_outliers(rows)
    rows.sort(key=lambda r: r.get("outlier", 0), reverse=True)
    return {
        "handle": handle,
        "channel": item["snippet"]["title"],
        "subscribers": int(item["statistics"].get("subscriberCount", 0)),
        "videos_checked": len(rows),
        "top_outliers": rows[:5],
    }


def keyword_report(query: str, days: int, n: int) -> dict:
    """search.list costs 100 quota units per call, so keep keywords few."""
    after = (datetime.now(timezone.utc) - timedelta(days=days)).strftime("%Y-%m-%dT%H:%M:%SZ")
    data = get("search", part="id", q=query, type="video", order="viewCount",
               publishedAfter=after, maxResults=n)
    rows = video_rows([i["id"]["videoId"] for i in data.get("items", [])])
    rows.sort(key=lambda r: r["views_per_day"], reverse=True)
    return {"query": query, "days": days, "top": rows[:5]}


def run() -> dict:
    settings = CONFIG.get("settings", {})
    n = settings.get("videos_per_creator", 50)
    days = settings.get("keyword_days", 30)
    return {
        "generated": datetime.now(timezone.utc).isoformat(timespec="minutes"),
        "creators": [creator_report(h, n) for h in CONFIG["creators"]],
        "keywords": [keyword_report(q, days, 15) for q in CONFIG.get("keywords", [])],
    }


if __name__ == "__main__":
    print(json.dumps(run(), indent=2))
