"use client";
import { ACTIVITY, useMetrics, type Bucket } from "@/lib/metrics";
import { Empty, Panel } from "./Panel";

const fmt = (n: number) => (Number.isInteger(n) ? String(n) : n.toFixed(1));

/** This week vs the average of the 4 weeks before it. */
export function StatTiles() {
  const { data } = useMetrics("week");
  if (!data) return null;
  if (data.length === 0)
    return (
      <Panel title="This week vs 4-week average">
        <Empty>No daily logs yet. Your first Log/Daily note starts the trend lines.</Empty>
      </Panel>
    );

  const current = data[data.length - 1];
  const prior = data.slice(-5, -1);

  return (
    <Panel title={`This week (${current.period}) vs ${prior.length ? `${prior.length}-week average` : "no earlier weeks yet"}`}>
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-8">
        {ACTIVITY.map(({ key, label }) => {
          const value = current[key] as number;
          const avg = prior.length ? prior.reduce((s, b) => s + (b[key] as number), 0) / prior.length : null;
          const delta = avg === null ? null : value - avg;
          return (
            <div key={key} className="rounded-lg border border-line p-3">
              <div className="text-xs text-muted">{label}</div>
              <div className="mt-1 text-2xl font-semibold">{fmt(value)}</div>
              <Delta delta={delta} avg={avg} />
            </div>
          );
        })}
      </div>
    </Panel>
  );
}

function Delta({ delta, avg }: { delta: number | null; avg: number | null }) {
  if (delta === null || avg === null) return <div className="text-xs text-muted">no baseline</div>;
  const up = delta > 0, flat = Math.abs(delta) < 0.05;
  return (
    <div className={`text-xs ${up ? "text-up" : "text-ink-2"}`}>
      {flat ? "= " : up ? "▲ +" : "▼ "}{flat ? "" : fmt(delta)}
      <span className="text-muted"> vs {fmt(avg)}</span>
    </div>
  );
}

export type { Bucket };
