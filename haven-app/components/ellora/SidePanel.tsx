"use client";
import { DISTRICTS } from "@/lib/districts";
import { useForge } from "@/lib/forge";
import { useBudget } from "@/lib/budget";
import { BADGE, type TownState } from "@/lib/ellora";
import { portrait } from "@/lib/sprites";

const STATE_LABEL: Record<TownState, string> = {
  failed: "Failed", working: "Working", done: "Done", review: "Waiting on you", asleep: "Asleep (3+ days quiet)", idle: "Idle",
};
const STATE_DOT: Record<TownState, string> = {
  failed: "#d03b3b", working: "#3987e5", done: "#0ca30c", review: "#eda100", asleep: "#6b6a64", idle: "#898781",
};
const time = (ts: number) => new Date(ts * 1000).toLocaleString([], { month: "short", day: "numeric", hour: "2-digit", minute: "2-digit" });

/** Selected district details, or the town roster when nothing is selected. Read-only. */
export function SidePanel({ selected, onSelect, states, doneCounts, activity }:
  { selected: string | null; onSelect: (k: string | null) => void;
    states: Record<string, TownState>; doneCounts: Record<string, number>; activity: Record<string, string> }) {
  const benders = useForge((s) => s.benders);
  const events = useForge((s) => s.events);
  const { jobs } = useBudget();

  if (!selected || !DISTRICTS[selected]) {
    return (
      <aside className="space-y-3 p-4 text-sm text-[#e8e2d0]">
        <h2 className="text-xs font-semibold uppercase tracking-wider text-[#a9a28e]">Districts</h2>
        <ul className="space-y-1">
          {Object.entries(DISTRICTS).map(([k, d]) => (
            <li key={k}>
              <button onClick={() => onSelect(k)} className="flex w-full items-center gap-2 rounded px-2 py-1.5 text-left hover:bg-white/5">
                <span className="inline-block h-3 w-3 rounded-sm" style={{ background: d.color }} />
                <span className="flex-1">{d.label}
                  <span className="block text-xs text-[#a9a28e]">{(benders[k]?.name ?? d.name).split(" ")[0]} · {activity[k] ?? "…"}</span>
                </span>
                <span className="flex items-center gap-1 text-xs text-[#cfc8b2]">
                  <span className="inline-block h-2 w-2 rounded-full" style={{ background: STATE_DOT[states[k]] }} />
                  {BADGE[states[k]] ?? ""} {states[k]}
                </span>
              </button>
            </li>
          ))}
        </ul>
        <p className="text-xs text-[#8f8977]">Click a district to inspect its bender. Buildings grow a floor per finished task. Ellora only shows events; settings live on the dashboard.</p>
      </aside>
    );
  }

  const d = DISTRICTS[selected];
  const b = benders[selected];
  const st = states[selected];
  const mine = events.filter((e) => e.agent === selected).slice(0, 10);
  const myJobs = jobs.filter((j) => j.agent === selected);

  return (
    <aside className="space-y-4 p-4 text-sm text-[#e8e2d0]">
      <button onClick={() => onSelect(null)} className="text-xs text-[#a9a28e] hover:underline">← All districts</button>
      <div className="flex items-start gap-3">
        {portrait(selected) ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={portrait(selected)!} alt="" className="h-16 w-16 shrink-0 rounded-lg border-2 object-cover" style={{ borderColor: d.color }} />
        ) : (
          <span className="mt-1 inline-block h-8 w-8 shrink-0 rounded-full border-2 border-white" style={{ background: d.color }} />
        )}
        <div>
          <div className="text-xs uppercase tracking-wider text-[#a9a28e]">{d.label}</div>
          <div className="text-lg font-semibold">{b?.name ?? d.name}</div>
          <div className="text-xs text-[#cfc8b2]">{b?.role ?? d.role} · {d.element}bender</div>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <span className="inline-block h-2.5 w-2.5 rounded-full" style={{ background: STATE_DOT[st] }} />
        <span>{BADGE[st] ?? ""} {STATE_LABEL[st]}</span>
      </div>
      {activity[selected] && <p className="text-xs italic text-[#cfc8b2]">Now: {activity[selected]}</p>}
      <dl className="grid grid-cols-2 gap-x-3 gap-y-1 text-xs">
        <dt className="text-[#a9a28e]">Power (model)</dt><dd>{b?.model?.replace("claude-", "") ?? "–"}</dd>
        <dt className="text-[#a9a28e]">Stamina (turns)</dt><dd>{b?.turns ?? "–"}</dd>
        <dt className="text-[#a9a28e]">Tasks finished</dt><dd>{doneCounts[selected] ?? 0}</dd>
        <dt className="text-[#a9a28e]">Territory</dt><dd className="wrap-break-word">{b?.writes?.join(", ") || "–"}</dd>
      </dl>
      {myJobs.length > 0 && (
        <div>
          <h3 className="mb-1 text-xs font-semibold uppercase tracking-wider text-[#a9a28e]">Shifts</h3>
          <ul className="space-y-1 text-xs">
            {myJobs.map((j) => (
              <li key={j.job} className={j.enabled ? "" : "opacity-50"}>
                {j.label} · {j.when} · {j.enabled ? `${j.model.replace("claude-", "")}` : "off"}
              </li>
            ))}
          </ul>
        </div>
      )}
      <div>
        <h3 className="mb-1 text-xs font-semibold uppercase tracking-wider text-[#a9a28e]">Recent actions</h3>
        {mine.length === 0 ? <p className="text-xs text-[#8f8977]">No events yet.</p> : (
          <ol className="space-y-1 text-xs">
            {mine.map((e, i) => (
              <li key={`${e.ts}-${i}`} className="grid grid-cols-[5.5rem_1fr] gap-2">
                <span className="text-[#8f8977]">{time(e.ts)}</span>
                <span className="truncate" title={e.detail}>
                  <span className={e.type === "failed" ? "text-[#ff8080]" : e.type === "done" ? "text-[#7fd67f]" : "text-[#cfc8b2]"}>{e.type}</span>{" "}
                  {e.detail}{e.cost != null ? ` · $${e.cost.toFixed(2)}` : ""}
                </span>
              </li>
            ))}
          </ol>
        )}
      </div>
    </aside>
  );
}
