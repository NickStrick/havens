"use client";
import { useForge, type ForgeEvent } from "./forge";
import { DISTRICTS } from "./districts";

// Demo mode: simulated events pushed into the local store only.
// Nothing is sent to the forge, so no agent runs and nothing is spent.
const SCRIPTS: Record<string, { tools: string[]; think: string[] }> = {
  scholar: { tools: ["Glob Aikido/Study/Docs/Code Scanning/*.md", "Read Aikido/Study/Docs/Code Scanning/_Index.md", "Write Aikido/Study/Notes/demo-secrets.md"], think: ["Secrets detection: plain words first, then the scan flow."] },
  coach: { tools: ["Read Log/Reviews/2026-11-06-daily.md", "Write Log/Reviews/demo-daily.md"], think: ["Pattern: rushing past pricing questions."] },
  ledger: { tools: ["Read Log/Ledger/Impact Ledger.md", "Edit Log/Ledger/Impact Ledger.md"], think: ["Month table from the given JSON."] },
  foreman: { tools: ["Read Log/Targets.md", "Write Log/Briefs/demo.md"], think: ["Today: study block, one practice rep, video."] },
  herald: { tools: ["Read Content/Content Plan.md", "Write Content/Outlines/demo.md"], think: ["Hook first: the 2,500 cold calls."] },
  scout: { tools: ["Write Content/Research/demo-scout.md", "Write Content/Ideas/demo-idea.md"], think: ["Outliers share a contrarian first line."] },
  runner: { tools: ["Edit Inbox/demo-note.md"], think: ["Routed to Content/Ideas/."] },
};

let timer: ReturnType<typeof setTimeout> | null = null;

function push(agent: string, type: string, detail: string, cost: number | null = null) {
  const e: ForgeEvent = { ts: Date.now() / 1000, agent, type, detail, cost };
  useForge.getState().push(e);
}

export function startDemo() {
  if (timer) return;
  const st = useForge.getState();
  if (Object.keys(st.benders).length === 0) {
    useForge.setState({
      benders: Object.fromEntries(Object.entries(DISTRICTS).map(([k, d]) => [k, {
        name: d.name, bends: d.element, role: d.role, model: "demo", turns: 0, writes: [],
      }])),
    });
  }
  const keys = Object.keys(DISTRICTS);
  const runOne = () => {
    const agent = keys[Math.floor(Math.random() * keys.length)];
    const s = SCRIPTS[agent];
    const steps: [number, () => void][] = [
      [0, () => push(agent, "started", "demo-task")],
      [1200, () => push(agent, "thinking", s.think[0])],
      ...s.tools.map((t, i) => [2400 + i * 1500, () => push(agent, "tool", t)] as [number, () => void]),
      [2400 + s.tools.length * 1500 + 800, () =>
        Math.random() < 0.12 ? push(agent, "failed", "error_max_turns (demo)", 0.05)
          : push(agent, "done", "demo-task", +(0.02 + Math.random() * 0.2).toFixed(4))],
    ];
    steps.forEach(([ms, fn]) => setTimeout(fn, ms));
  };
  const loop = () => { runOne(); timer = setTimeout(loop, 2500 + Math.random() * 3500); };
  loop();
}
