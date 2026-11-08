"use client";
import { useCallback, useEffect, useState } from "react";
import { FORGE_HTTP, forgeGet, useForge } from "./forge";

export type Settings = {
  monthly_cap_usd: number; saver: boolean; auto_saver: boolean; auto_saver_at: number;
  jobs: Record<string, boolean>;
  month_spend: number; saver_active: boolean; saver_reason: "on" | "auto" | null;
  plan_normal: number; plan_saver: number; projected: number; capped: boolean;
};

export type Job = {
  job: string; label: string; agent: string; priority: 1 | 2 | 3; when: string;
  recruited: boolean; enabled: boolean; next_run: string | null;
  model: string; effort: string; saver_days: string | null;
  est_month: number; est_month_saver: number;
};

/** Settings + jobs from the forge. Refetches every 30 s and after any finished run. */
export function useBudget() {
  const [settings, setSettings] = useState<Settings | null>(null);
  const [jobs, setJobs] = useState<Job[]>([]);
  const lastCost = useForge((s) => s.events.find((e) => e.cost != null || e.type === "held")?.ts);

  const refresh = useCallback(() => {
    forgeGet<Settings>("/settings").then(setSettings).catch(() => {});
    forgeGet<Job[]>("/jobs").then(setJobs).catch(() => {});
  }, []);

  useEffect(() => {
    refresh();
    const t = setInterval(refresh, 30_000);
    return () => clearInterval(t);
  }, [refresh, lastCost]);

  const save = useCallback(async (patch: Partial<Pick<Settings, "monthly_cap_usd" | "saver" | "auto_saver">> & { jobs?: Record<string, boolean> }) => {
    const r = await fetch(`${FORGE_HTTP}/settings`, {
      method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(patch),
    });
    if (r.ok) setSettings(await r.json());
    forgeGet<Job[]>("/jobs").then(setJobs).catch(() => {});
  }, []);

  return { settings, jobs, save, refresh };
}
