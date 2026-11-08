"use client";
import { useEffect, useState } from "react";
import type { ForgeEvent } from "./forge";

// Status precedence from the guide: failed, working, done, review, asleep, idle.
export type TownState = "failed" | "working" | "done" | "review" | "asleep" | "idle";
export const ASLEEP_AFTER_S = 3 * 24 * 3600;

export const BADGE: Partial<Record<TownState, string>> = { failed: "!", working: "⚒", done: "✓", review: "?" };

export function townState(agent: string, events: ForgeEvent[], now: number | null): TownState {
  const mine = events.filter((e) => e.agent === agent && e.type !== "held");
  const last = mine[0];
  if (!last) return "idle";
  if (last.type === "failed") return "failed";
  if (["started", "tool", "thinking"].includes(last.type)) return "working";
  if (now && now / 1000 - last.ts > ASLEEP_AFTER_S) return "asleep";
  if (last.type === "done") return "done";
  return "idle";
}

/** Current time, only after mount (avoids server/client mismatch). Ticks each minute. */
export function useNow(intervalMs = 60_000) {
  const [now, setNow] = useState<number | null>(null);
  useEffect(() => {
    const tick = () => setNow(Date.now());
    tick();
    const t = setInterval(tick, intervalMs);
    return () => clearInterval(t);
  }, [intervalMs]);
  return now;
}

/** Map tint for the hour: night blue, dawn and dusk warm, clear by day. */
export function skyTint(now: number | null): { color: string; opacity: number; label: string } {
  if (now === null) return { color: "#000", opacity: 0, label: "" };
  const h = new Date(now).getHours() + new Date(now).getMinutes() / 60;
  if (h < 5 || h >= 21) return { color: "#0b1d4a", opacity: 0.42, label: "Night" };
  if (h < 7) return { color: "#f08a4b", opacity: 0.18, label: "Dawn" };
  if (h < 18) return { color: "#000", opacity: 0, label: "Day" };
  return { color: "#d9603b", opacity: 0.16, label: "Dusk" };
}
