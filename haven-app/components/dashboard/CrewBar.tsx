"use client";
import { useForge, type BenderState } from "@/lib/forge";
import { ELEMENT_COLOR } from "@/lib/elements";
import { Empty, Panel } from "./Panel";

const STATE: Record<BenderState, { label: string; icon: string; color: string }> = {
  working: { label: "Working", icon: "⚒", color: "var(--series-1)" },
  done: { label: "Done", icon: "✓", color: "var(--good)" },
  failed: { label: "Failed", icon: "!", color: "var(--critical)" },
  idle: { label: "Idle", icon: "·", color: "var(--muted)" },
};

export function CrewBar() {
  const benders = useForge((s) => s.benders);
  const status = useForge((s) => s.status);
  const events = useForge((s) => s.events);
  const keys = Object.keys(benders);

  return (
    <Panel title="Crew" className="lg:col-span-3">
      {keys.length === 0 ? <Empty>No benders loaded. Is the forge running?</Empty> : (
        <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-3">
          {keys.map((k) => {
            const b = benders[k];
            const st = STATE[status[k] ?? "idle"];
            const last = events.find((e) => e.agent === k);
            return (
              <div key={k} className="rounded-lg border border-line p-3"
                style={{ borderLeft: `4px solid ${ELEMENT_COLOR[b.bends] ?? "var(--muted)"}` }}>
                <div className="flex items-center justify-between gap-2">
                  <span className="truncate text-sm font-semibold">{b.name}</span>
                  <span className="flex shrink-0 items-center gap-1 text-xs text-ink-2">
                    <span className="inline-block h-2 w-2 rounded-full" style={{ background: st.color }} />
                    {st.icon} {st.label}
                  </span>
                </div>
                <div className="text-xs text-muted">{b.role} · {b.bends} · {b.model.replace("claude-", "")} · {b.turns} turns</div>
                <div className="mt-2 truncate text-xs text-ink-2" title={last?.detail}>
                  {last ? `${last.type}: ${last.detail}` : "No runs yet"}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </Panel>
  );
}
