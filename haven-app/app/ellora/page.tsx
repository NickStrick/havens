"use client";
import { useEffect, useMemo, useState } from "react";
import Ellora from "@/components/ellora/Ellora";
import { Hud } from "@/components/ellora/Hud";
import { SidePanel } from "@/components/ellora/SidePanel";
import { forgeGet, useForge } from "@/lib/forge";
import { DISTRICTS } from "@/lib/districts";
import { townState, useNow } from "@/lib/ellora";
import { startDemo } from "@/lib/demo";
import { useTownLife } from "@/lib/life";

export default function ElloraPage() {
  const [selected, setSelected] = useState<string | null>(null);
  const [demo, setDemo] = useState(false);
  const [serverDone, setServerDone] = useState<Record<string, number>>({});
  const now = useNow(30_000);
  const events = useForge((s) => s.events);
  const lastDone = events.find((e) => e.type === "done")?.ts;

  // ?demo=1 plays simulated events into the local store. Nothing reaches the forge.
  useEffect(() => {
    if (new URLSearchParams(window.location.search).has("demo")) {
      startDemo();
      setDemo(true); // eslint-disable-line react-hooks/set-state-in-effect
    }
  }, []);

  // all-time finished tasks per bender, so buildings keep their height across reloads
  useEffect(() => {
    forgeGet<{ done?: Record<string, number> }>("/costs").then((c) => setServerDone(c.done ?? {})).catch(() => {});
  }, [lastDone]);

  const states = useMemo(
    () => Object.fromEntries(Object.keys(DISTRICTS).map((k) => [k, townState(k, events, now)])),
    [events, now],
  );
  const doneCounts = useMemo(() => {
    const out: Record<string, number> = {};
    for (const k of Object.keys(DISTRICTS))
      out[k] = Math.max(serverDone[k] ?? 0, events.filter((e) => e.agent === k && e.type === "done").length);
    return out;
  }, [serverDone, events]);
  const actors = useTownLife(states, now);
  const working = Object.values(states).filter((s) => s === "working").length;
  const ticker = events.slice(0, 4);

  return (
    <main className="flex min-h-screen flex-col bg-[#0d2633]">
      <Hud now={now} demo={demo} working={working} />
      <div className="grid flex-1 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div className="relative min-h-[60vh]">
          <div className="absolute inset-0">
            <Ellora selected={selected} onSelect={setSelected} now={now} doneCounts={doneCounts}
              states={states} actors={actors} />
          </div>
          {/* event ticker */}
          <ol className="pointer-events-none absolute bottom-2 left-2 space-y-0.5 text-xs text-[#e8e2d0]" aria-live="polite">
            {ticker.map((e, i) => (
              <li key={`${e.ts}-${i}`} className="rounded bg-black/55 px-2 py-0.5" style={{ opacity: 1 - i * 0.2 }}>
                <span style={{ color: DISTRICTS[e.agent]?.color }}>●</span>{" "}
                {DISTRICTS[e.agent]?.name.split(" ")[0] ?? e.agent} · {e.type} · {e.detail.slice(0, 48)}
              </li>
            ))}
          </ol>
        </div>
        <div className="border-t border-white/10 bg-[#0a1820] lg:border-l lg:border-t-0">
          <SidePanel selected={selected} onSelect={setSelected} states={states} doneCounts={doneCounts}
            activity={Object.fromEntries(Object.entries(actors).map(([k, a]) => [k, a.label]))} />
        </div>
      </div>
    </main>
  );
}
