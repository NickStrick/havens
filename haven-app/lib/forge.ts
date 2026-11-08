"use client";
import { create } from "zustand";

// The forge runs on 8787 (Splunk owns 8000 on this machine).
export const FORGE_HTTP = process.env.NEXT_PUBLIC_FORGE_URL ?? "http://localhost:8787";
export const FORGE_WS = FORGE_HTTP.replace(/^http/, "ws") + "/ws";

export type ForgeEvent = { ts: number; agent: string; type: string; detail: string; cost: number | null };
export type BenderState = "idle" | "working" | "done" | "failed";
export type Bender = {
  name: string; bends: string; role: string; model: string; turns: number; writes: string[];
};

type Store = {
  connected: boolean;
  events: ForgeEvent[];                  // newest first
  status: Record<string, BenderState>;
  benders: Record<string, Bender>;
  push: (e: ForgeEvent) => void;
  load: (rows: ForgeEvent[]) => void;     // replace history (rows newest first)
};

const nextState = (prev: BenderState | undefined, type: string): BenderState | undefined =>
  type === "started" || type === "tool" || type === "thinking" ? "working"
    : type === "failed" ? "failed"
    : type === "done" ? "done"
    : prev;

export const useForge = create<Store>((set) => ({
  connected: false,
  events: [],
  status: {},
  benders: {},
  push: (e) =>
    set((s) => ({
      events: [e, ...s.events].slice(0, 500),
      status: { ...s.status, [e.agent]: nextState(s.status[e.agent], e.type) ?? "idle" },
    })),
  load: (rows) => {
    const status: Record<string, BenderState> = {};
    for (const e of [...rows].reverse()) status[e.agent] = nextState(status[e.agent], e.type) ?? "idle";
    set({ events: rows.slice(0, 500), status });
  },
}));

let started = false;

/** Call once on the client. Loads history, then streams live events with auto-reconnect. */
export function connectForge() {
  if (started) return; // React StrictMode runs effects twice in dev
  started = true;
  const { load, push } = useForge.getState();

  const loadHistory = () =>
    Promise.all([
      fetch(`${FORGE_HTTP}/events?limit=500`).then((r) => r.json()),
      fetch(`${FORGE_HTTP}/benders`).then((r) => r.json()),
    ])
      .then(([rows, benders]: [ForgeEvent[], Record<string, Bender>]) => {
        load(rows);
        useForge.setState({ benders });
      })
      .catch(() => {});

  const open = () => {
    const ws = new WebSocket(FORGE_WS);
    ws.onopen = () => {
      useForge.setState({ connected: true });
      loadHistory(); // refetch on every (re)connect so nothing is missed or doubled
    };
    ws.onmessage = (m) => push(JSON.parse(m.data));
    ws.onclose = () => {
      useForge.setState({ connected: false });
      setTimeout(open, 2000);
    };
  };
  open();
}

export async function forgeGet<T>(path: string): Promise<T> {
  const r = await fetch(`${FORGE_HTTP}${path}`);
  if (!r.ok) throw new Error(`${path}: ${r.status}`);
  return r.json();
}

export const forgePost = (path: string) => fetch(`${FORGE_HTTP}${path}`, { method: "POST" });
