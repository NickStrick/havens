"use client";
import { useState } from "react";
import {
  CartesianGrid, Legend, Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis,
} from "recharts";
import { ACTIVITY, SCORES, useMetrics, type Bucket } from "@/lib/metrics";
import { Empty, Panel } from "./Panel";

const axis = { stroke: "var(--axis)", tick: { fill: "var(--muted)", fontSize: 11 }, tickLine: false };
const tooltipStyle = {
  contentStyle: { background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 8, fontSize: 12 },
  labelStyle: { color: "var(--ink-2)" },
  itemStyle: { color: "var(--ink)" },
  cursor: { stroke: "var(--axis)", strokeWidth: 1 },
};

export function Scoreboard() {
  const [period, setPeriod] = useState<"week" | "month">("week");
  const [table, setTable] = useState(false);
  const { data, error } = useMetrics(period);

  const toggle = (
    <div className="flex items-center gap-2 text-xs">
      {(["week", "month"] as const).map((p) => (
        <button key={p} onClick={() => setPeriod(p)}
          className={`rounded-md px-2 py-1 ${period === p ? "bg-ink text-page" : "text-ink-2 hover:bg-grid"}`}>
          {p === "week" ? "Weekly" : "Monthly"}
        </button>
      ))}
      <button onClick={() => setTable((t) => !t)} className="rounded-md px-2 py-1 text-ink-2 hover:bg-grid">
        {table ? "Charts" : "Table"}
      </button>
    </div>
  );

  return (
    <Panel title="Scoreboard" action={toggle} className="lg:col-span-2">
      {error && <Empty>Can&apos;t reach the forge for metrics.</Empty>}
      {data && data.length === 0 && <Empty>No daily logs yet. Log today in Obsidian and the trend lines appear here.</Empty>}
      {data && data.length > 0 && (table ? <MetricsTable data={data} /> : (
        <>
          <div className="grid grid-cols-2 gap-x-4 gap-y-5 md:grid-cols-4">
            {ACTIVITY.map(({ key, label }) => (
              <Small key={key} data={data} dataKey={key} label={label} />
            ))}
          </div>
          <Scores data={data} />
        </>
      ))}
    </Panel>
  );
}

/** One small chart per activity metric: same form, own scale, no legend needed. */
function Small({ data, dataKey, label }: { data: Bucket[]; dataKey: keyof Bucket; label: string }) {
  const last = data[data.length - 1][dataKey] as number;
  return (
    <div>
      <div className="flex items-baseline justify-between">
        <span className="text-xs text-ink-2">{label}</span>
        <span className="text-sm font-semibold">{last}</span>
      </div>
      <div className="h-24">
        <ResponsiveContainer>
          <LineChart data={data} margin={{ top: 8, right: 6, bottom: 4, left: 0 }}>
            <CartesianGrid stroke="var(--grid)" vertical={false} />
            <XAxis dataKey="period" {...axis} hide />
            <YAxis {...axis} allowDecimals={false} width={34} tickCount={3} domain={[0, "auto"]} />
            <Tooltip {...tooltipStyle} formatter={(v) => [v, label]} />
            <Line dataKey={dataKey} stroke="var(--series-1)" strokeWidth={2}
              dot={{ r: 3, strokeWidth: 2, fill: "var(--surface)" }} activeDot={{ r: 5 }} isAnimationActive={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

/** Self-scores share one fixed 1 to 5 axis, so they get their own chart. */
function Scores({ data }: { data: Bucket[] }) {
  const lastIdx = data.length - 1;
  // End labels: when two series end close together, stack the labels 13px apart.
  const ends = SCORES.map((s) => ({ key: s.key, v: data[lastIdx][s.key] }))
    .filter((e) => e.v != null).sort((a, b) => (b.v as number) - (a.v as number));
  const dy: Record<string, number> = {};
  ends.forEach((e, i) => {
    const prev = ends[i - 1];
    dy[e.key] = prev && Math.abs((prev.v as number) - (e.v as number)) < 0.35 ? dy[prev.key] + 13 : 0;
  });
  return (
    <div className="mt-6">
      <div className="mb-1 text-xs text-ink-2">Self-scores (average, 1 to 5)</div>
      <div className="h-56">
        <ResponsiveContainer>
          <LineChart data={data} margin={{ top: 8, right: 72, bottom: 0, left: -20 }}>
            <CartesianGrid stroke="var(--grid)" vertical={false} />
            <XAxis dataKey="period" {...axis} />
            <YAxis {...axis} domain={[1, 5]} ticks={[1, 2, 3, 4, 5]} width={44} />
            <Tooltip {...tooltipStyle} />
            <Legend wrapperStyle={{ fontSize: 12, color: "var(--ink-2)" }} iconType="plainline" />
            {SCORES.map((s) => (
              <Line key={s.key} dataKey={s.key} name={s.label} stroke={s.color} strokeWidth={2} connectNulls
                dot={{ r: 4, strokeWidth: 2, fill: "var(--surface)" }} activeDot={{ r: 5 }} isAnimationActive={false}
                label={(p: { index?: number; x?: number | string; y?: number | string; value?: unknown }) =>
                  p.index === lastIdx && p.value != null ? (
                    <text x={Number(p.x) + 8} y={Number(p.y) + 4 + (dy[s.key] ?? 0)} fontSize={11} fill="var(--ink-2)">{s.label}</text>
                  ) : <g />} />
            ))}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

function MetricsTable({ data }: { data: Bucket[] }) {
  const cols: { key: keyof Bucket; label: string }[] = [
    { key: "period", label: "Period" }, { key: "days", label: "Days" },
    ...ACTIVITY, ...SCORES.map((s) => ({ key: s.key, label: s.label })),
  ];
  return (
    <div className="overflow-x-auto">
      <table className="tabular w-full text-right text-xs">
        <thead className="text-muted">
          <tr>{cols.map((c) => <th key={c.key} className="px-2 py-1 font-medium first:text-left">{c.label}</th>)}</tr>
        </thead>
        <tbody>
          {[...data].reverse().map((b) => (
            <tr key={b.period} className="border-t border-line">
              {cols.map((c) => <td key={c.key} className="px-2 py-1 first:text-left">{b[c.key] ?? "–"}</td>)}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
