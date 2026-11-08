"use client";
import Link from "next/link";
import { useForge } from "@/lib/forge";
import { StatTiles } from "@/components/dashboard/StatTiles";
import { Scoreboard } from "@/components/dashboard/Scoreboard";
import { CoachingPanel } from "@/components/dashboard/CoachingPanel";
import { CrewBar } from "@/components/dashboard/CrewBar";
import { LiveFeed } from "@/components/dashboard/LiveFeed";
import { CostPanel } from "@/components/dashboard/CostPanel";

export default function Dashboard() {
  const connected = useForge((s) => s.connected);

  return (
    <main className="mx-auto max-w-7xl space-y-4 px-4 py-6">
      <header className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <h1 className="text-xl font-semibold">Havens Command Center</h1>
          <p className="text-sm text-muted">Log, reflect, drill, repeat.</p>
        </div>
        <div className="flex items-center gap-4 text-sm">
          <span className="flex items-center gap-2 text-ink-2">
            <span className="inline-block h-2 w-2 rounded-full"
              style={{ background: connected ? "var(--good)" : "var(--critical)" }} />
            Forge {connected ? "online" : "offline"}
          </span>
          <Link href="/ellora" className="text-ink-2 underline-offset-4 hover:underline">Ellora →</Link>
        </div>
      </header>

      {!connected && (
        <div className="rounded-lg border border-line bg-surface p-3 text-sm text-ink-2">
          The forge isn&apos;t running. In PowerShell:{" "}
          <code className="rounded bg-grid px-1.5 py-0.5 text-xs">cd C:\_Agents\havens\forge; uv run uvicorn server:app --port 8787</code>
        </div>
      )}

      <StatTiles />
      <div className="grid gap-4 lg:grid-cols-3">
        <Scoreboard />
        <CoachingPanel />
        <CrewBar />
        <LiveFeed />
        <CostPanel />
      </div>
    </main>
  );
}
