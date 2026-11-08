"use client";
import { useEffect, useState } from "react";
import { forgeGet } from "./forge";

export type Bucket = {
  period: string; days: number; videos: number;
  demos: number; discovery_calls: number; outreach: number; follow_ups: number; deals_won: number;
  study_minutes: number; practice_reps: number; active_relationships: number; pocs_active: number;
  demo_score: number | null; discovery_score: number | null; energy: number | null;
};

export const ACTIVITY: { key: keyof Bucket; label: string }[] = [
  { key: "demos", label: "Demos" },
  { key: "discovery_calls", label: "Discovery calls" },
  { key: "outreach", label: "Outreach" },
  { key: "follow_ups", label: "Follow-ups" },
  { key: "practice_reps", label: "Practice reps" },
  { key: "study_minutes", label: "Study minutes" },
  { key: "active_relationships", label: "Active relationships" },
  { key: "videos", label: "Videos posted" },
];

export const SCORES: { key: "demo_score" | "discovery_score" | "energy"; label: string; color: string }[] = [
  { key: "demo_score", label: "Demo", color: "var(--series-1)" },
  { key: "discovery_score", label: "Discovery", color: "var(--series-2)" },
  { key: "energy", label: "Energy", color: "var(--series-3)" },
];

/** Metrics are computed by the forge from Log/Daily. Refetch on focus and every minute. */
export function useMetrics(period: "week" | "month") {
  const [data, setData] = useState<Bucket[] | null>(null);
  const [error, setError] = useState(false);
  useEffect(() => {
    let alive = true;
    const load = () =>
      forgeGet<Bucket[]>(`/metrics?period=${period}`)
        .then((d) => { if (alive) { setData(d); setError(false); } })
        .catch(() => alive && setError(true));
    load();
    const t = setInterval(load, 60_000);
    window.addEventListener("focus", load);
    return () => { alive = false; clearInterval(t); window.removeEventListener("focus", load); };
  }, [period]);
  return { data, error };
}
