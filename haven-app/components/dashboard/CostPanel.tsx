"use client";
import { useEffect, useState } from "react";
import { forgeGet, forgePost, useForge } from "@/lib/forge";
import { Panel } from "./Panel";

type Costs = {
  today: number; week: number; month: number; total: number;
  by_agent: Record<string, { usd: number; runs: number; avg: number }>;
};
const usd = (n: number) => `$${n.toFixed(2)}`;
const CREDITS = 20; // prepaid API credits, auto-reload off

export function CostPanel() {
  const [costs, setCosts] = useState<Costs | null>(null);
  const [running, setRunning] = useState(false);
  const [note, setNote] = useState<string | null>(null);
  const lastCost = useForge((s) => s.events.find((e) => e.cost != null)?.ts);
  const benders = useForge((s) => s.benders);

  useEffect(() => {
    forgeGet<Costs>("/costs").then(setCosts).catch(() => {});
  }, [lastCost]);

  const runNow = async () => {
    setRunning(true);
    try {
      const r = await forgePost("/run");
      const { pending, busy, held } = (await r.json()) as
        { pending: { task: string }[]; busy: boolean; held: string | null };
      setNote(
        pending.length === 0
          ? "Queue is empty. Drop a task file in vault/Agents/Queue/ first."
          : held
          ? `Held: ${held}. Raise the cap in Budget & schedule, or add force: true to a task.`
          : `${busy ? "Forge is busy; queued after the current run" : "Running"}: ${pending.map((t) => t.task).join(", ")}`,
      );
    } catch {
      setNote("Can't reach the forge.");
    }
    setRunning(false);
    setTimeout(() => setNote(null), 8000);
  };

  return (
    <Panel title="Cost" action={
      <button onClick={runNow} disabled={running}
        className="rounded-md bg-ink px-3 py-1 text-xs font-medium text-page disabled:opacity-50">
        {running ? "Checking…" : "Run now"}
      </button>
    }>
      {note && <p className="mb-3 rounded-md bg-grid px-2 py-1.5 text-xs text-ink-2" role="status">{note}</p>}
      {!costs ?<p className="text-sm text-muted">Can&apos;t reach the forge.</p> : (
        <>
          <div className="grid grid-cols-3 gap-3">
            {([["Today", costs.today], ["This week", costs.week], ["This month", costs.month]] as const).map(([l, v]) => (
              <div key={l}>
                <div className="text-xs text-muted">{l}</div>
                <div className="text-xl font-semibold">{usd(v)}</div>
              </div>
            ))}
          </div>
          <div className="mt-3 text-xs text-muted">
            {usd(costs.total)} of ${CREDITS} prepaid credits used (as logged by the forge).
          </div>
          <ul className="tabular mt-3 space-y-1 text-xs">
            {Object.entries(costs.by_agent).sort((a, b) => b[1].usd - a[1].usd).map(([k, v]) => (
              <li key={k} className="flex justify-between text-ink-2">
                <span>{benders[k]?.name ?? k}</span>
                <span>{usd(v.usd)} · {v.runs} run{v.runs === 1 ? "" : "s"} · avg {usd(v.avg)}</span>
              </li>
            ))}
          </ul>
        </>
      )}
    </Panel>
  );
}
