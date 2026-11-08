"use client";
import Link from "next/link";
import { useForge } from "@/lib/forge";
import { useBudget } from "@/lib/budget";
import { DISTRICTS } from "@/lib/districts";

/** Top bar: time, forge link, treasury (spend vs cap), crew at work. Read-only. */
export function Hud({ now, demo, working }: { now: number | null; demo: boolean; working: number }) {
  const connected = useForge((s) => s.connected);
  const { settings: s } = useBudget();
  const clock = now ? new Date(now).toLocaleString([], { weekday: "short", hour: "2-digit", minute: "2-digit" }) : "";
  const pct = s ? Math.min(1, s.month_spend / s.monthly_cap_usd) : 0;

  return (
    <header className="flex flex-wrap items-center gap-x-5 gap-y-2 border-b border-white/10 bg-[#0a1820] px-4 py-2 text-sm text-[#e8e2d0]">
      <span className="font-semibold tracking-wide">ELLORA</span>
      <span className="text-[#a9a28e]">{clock}</span>
      <span className="flex items-center gap-1.5">
        <span className="inline-block h-2 w-2 rounded-full" style={{ background: connected ? "#0ca30c" : "#d03b3b" }} />
        Forge {connected ? "online" : "offline"}
      </span>
      {demo && <span className="rounded bg-[#eda100] px-1.5 py-0.5 text-xs font-semibold text-black">DEMO · simulated events, no runs</span>}
      <span className="flex items-center gap-2" title="Spend this month against the cap">
        <span className="text-[#a9a28e]">Treasury</span>
        <span className="tabular">{s ? `$${s.month_spend.toFixed(2)} / $${s.monthly_cap_usd.toFixed(0)}` : "–"}</span>
        <span className="h-1.5 w-20 overflow-hidden rounded-full bg-white/15">
          <span className="block h-full" style={{ width: `${pct * 100}%`, background: s?.capped ? "#d03b3b" : s?.saver_active ? "#eb6834" : "#3987e5" }} />
        </span>
        {s?.saver_active && <span className="rounded bg-[#eb6834]/20 px-1.5 text-xs text-[#ffb08a]">saver</span>}
        {s?.capped && <span className="rounded bg-[#d03b3b]/25 px-1.5 text-xs text-[#ff9a9a]">! capped</span>}
      </span>
      <span className="text-[#a9a28e]">⚒ {working} of {Object.keys(DISTRICTS).length} at work</span>
      <Link href="/" className="ml-auto text-[#cfc8b2] underline-offset-4 hover:underline">← Dashboard</Link>
    </header>
  );
}
