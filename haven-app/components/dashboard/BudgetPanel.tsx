"use client";
import { useState } from "react";
import { useBudget, type Job } from "@/lib/budget";
import { useForge } from "@/lib/forge";
import { ELEMENT_COLOR } from "@/lib/elements";
import { Empty, Panel } from "./Panel";
import { Switch } from "./Switch";

const usd = (n: number) => `$${n.toFixed(2)}`;
const PRIORITY = { 1: "SE core", 2: "Brand", 3: "Support" } as const;

/** Monthly cap, saver mode and an on/off switch for every recurring job. */
export function BudgetPanel() {
  const { settings: s, jobs, save } = useBudget();
  const benders = useForge((st) => st.benders);
  const [draft, setDraft] = useState<string | null>(null); // null = show the saved cap

  if (!s) return <Panel title="Budget & schedule" className="lg:col-span-3"><Empty>Can&apos;t reach the forge.</Empty></Panel>;

  const pct = Math.min(1, s.month_spend / s.monthly_cap_usd);
  const projPct = Math.min(1, s.projected / s.monthly_cap_usd);
  const autoMark = s.auto_saver_at;
  const cap = draft ?? String(s.monthly_cap_usd);
  const barColor =s.capped ? "var(--critical)" : s.saver_active ? "var(--series-2)" : "var(--series-1)";

  return (
    <Panel title="Budget & schedule" className="lg:col-span-3">
      <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)]">
        {/* Budget */}
        <div className="space-y-4">
          <div>
            <div className="flex items-baseline justify-between">
              <span className="text-xs text-muted">This month</span>
              <span className="text-xs text-muted">cap {usd(s.monthly_cap_usd)}</span>
            </div>
            <div className="mt-1 text-2xl font-semibold">{usd(s.month_spend)}</div>
            <div className="relative mt-2 h-2 rounded-full bg-grid" role="meter"
              aria-valuemin={0} aria-valuemax={s.monthly_cap_usd} aria-valuenow={s.month_spend}
              aria-label="Spend this month against the cap">
              <div className="absolute inset-y-0 left-0 rounded-full opacity-30" style={{ width: `${projPct * 100}%`, background: barColor }} />
              <div className="absolute inset-y-0 left-0 rounded-full" style={{ width: `${pct * 100}%`, background: barColor }} />
              {s.auto_saver && <div className="absolute -top-1 h-4 w-px bg-ink-2" style={{ left: `${autoMark * 100}%` }} title="Auto-saver kicks in here" />}
            </div>
            <div className="mt-1.5 text-xs text-ink-2">
              Projected {usd(s.projected)} by month end
              {s.capped && <span className="text-critical"> · ! Cap reached: runs are held</span>}
            </div>
          </div>

          <label className="flex items-center justify-between gap-3 text-sm">
            <span>
              Saver mode
              <span className="block text-xs text-muted">
                {usd(s.plan_saver)}/mo vs {usd(s.plan_normal)}/mo. SE core stays on Sonnet; outlines and
                coaching nights move to Haiku; lessons Mon/Wed/Fri.
              </span>
            </span>
            <Switch checked={s.saver} onChange={(v) => save({ saver: v })} label="Saver mode" />
          </label>
          {s.saver_reason === "auto" && (
            <p className="rounded-md bg-grid px-2 py-1.5 text-xs text-ink-2" role="status">
              Saver is on automatically: spend passed {Math.round(s.auto_saver_at * 100)}% of the cap.
            </p>
          )}

          <label className="flex items-center justify-between gap-3 text-sm">
            <span>
              Auto-saver
              <span className="block text-xs text-muted">Switch to saver at {Math.round(s.auto_saver_at * 100)}% of the cap</span>
            </span>
            <Switch checked={s.auto_saver} onChange={(v) => save({ auto_saver: v })} label="Auto-saver" />
          </label>

          <form className="flex items-center justify-between gap-3 text-sm"
            onSubmit={(e) => {
              e.preventDefault();
              const v = parseFloat(cap);
              if (v > 0) save({ monthly_cap_usd: v }).then(() => setDraft(null));
            }}>
            <label htmlFor="cap">Monthly cap</label>
            <span className="flex items-center gap-2">
              <span className="text-muted">$</span>
              <input id="cap" type="number" min={1} step={1} value={cap} onChange={(e) => setDraft(e.target.value)}
                className="tabular w-20 rounded-md border border-line bg-page px-2 py-1 text-right" />
              <button type="submit" disabled={parseFloat(cap) === s.monthly_cap_usd}
                className="rounded-md bg-ink px-2 py-1 text-xs text-page disabled:opacity-40">Save</button>
            </span>
          </form>
        </div>

        {/* Jobs */}
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs">
            <thead className="text-muted">
              <tr>
                <th className="py-1 pr-2 font-medium">On</th>
                <th className="py-1 pr-2 font-medium">Job</th>
                <th className="hidden py-1 pr-2 font-medium sm:table-cell">When</th>
                <th className="hidden py-1 pr-2 font-medium md:table-cell">Runs on</th>
                <th className="tabular py-1 text-right font-medium">Est./mo</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((j) => <JobRow key={j.job} j={j} saver={s.saver_active}
                name={benders[j.agent]?.name ?? j.agent}
                color={ELEMENT_COLOR[benders[j.agent]?.bends ?? ""]}
                onToggle={(v) => save({ jobs: { [j.job]: v } })} />)}
            </tbody>
          </table>
          <p className="mt-2 text-xs text-muted">
            Estimates per run are starting guesses; the Cost panel shows real averages once runs happen.
          </p>
        </div>
      </div>
    </Panel>
  );
}

function JobRow({ j, saver, name, color, onToggle }:
  { j: Job; saver: boolean; name: string; color?: string; onToggle: (v: boolean) => void }) {
  const est = saver ? j.est_month_saver : j.est_month;
  const next = j.next_run ? new Date(j.next_run).toLocaleString([], { weekday: "short", hour: "2-digit", minute: "2-digit" }) : null;
  return (
    <tr className={`border-t border-line ${j.enabled ? "" : "opacity-50"}`}>
      <td className="py-1.5 pr-2"><Switch checked={j.enabled} onChange={onToggle} label={`${j.label} on or off`} disabled={!j.recruited} /></td>
      <td className="py-1.5 pr-2">
        <div className="font-medium text-ink">{j.label}</div>
        <div className="flex items-center gap-1 text-muted">
          <span className="inline-block h-2 w-2 rounded-full" style={{ background: color ?? "var(--muted)" }} />
          {name.split(" ")[0]} · {PRIORITY[j.priority]}
        </div>
      </td>
      <td className="hidden py-1.5 pr-2 text-ink-2 sm:table-cell">
        {j.when}{saver && j.saver_days ? ` · saver: ${j.saver_days}` : ""}
        {j.enabled && next && <div className="text-muted">next {next}</div>}
      </td>
      <td className="hidden py-1.5 pr-2 text-ink-2 md:table-cell">{j.model.replace("claude-", "")} · {j.effort}</td>
      <td className="tabular py-1.5 text-right">{j.enabled ? `$${est.toFixed(2)}` : "off"}</td>
    </tr>
  );
}
