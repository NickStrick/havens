"use client";
import { useForge } from "@/lib/forge";
import { Empty, Panel } from "./Panel";

const time = (ts: number) =>
  new Date(ts * 1000).toLocaleString([], { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" });

export function LiveFeed() {
  const events = useForge((s) => s.events);
  const benders = useForge((s) => s.benders);

  return (
    <Panel title="Live feed" className="lg:col-span-2">
      {events.length === 0 ? <Empty>No events yet. Drop a task in Agents/Queue/ or press Run now.</Empty> : (
        <ol className="tabular max-h-96 overflow-y-auto text-xs">
          {events.slice(0, 200).map((e, i) => (
            <li key={`${e.ts}-${i}`} className="grid grid-cols-[6.5rem_4.5rem_1fr] gap-2 border-t border-line py-1.5 first:border-t-0 sm:grid-cols-[7.5rem_7rem_4.5rem_1fr]">
              <span className="text-muted">{time(e.ts)}</span>
              <span className="truncate font-medium">{benders[e.agent]?.name.split(" ")[0] ?? e.agent}</span>
              <span className={`hidden sm:block ${e.type === "failed" ? "text-critical" : e.type === "done" ? "text-up" : "text-ink-2"}`}>
                {e.type === "failed" ? "! " : ""}{e.type}
              </span>
              <span className="truncate text-ink-2" title={e.detail}>
                {e.detail}{e.cost != null ? ` · $${e.cost.toFixed(2)}` : ""}
              </span>
            </li>
          ))}
        </ol>
      )}
    </Panel>
  );
}
