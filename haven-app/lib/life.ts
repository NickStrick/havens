"use client";
import { useEffect, useRef, useState } from "react";
import { DISTRICTS } from "./districts";
import { hexToPixel } from "./hex";
import type { TownState } from "./ellora";
import type { Pose } from "./sprites";

// Town life: where each bender stands and what they're doing.
// Work state always wins (working, done, failed, asleep). When idle, each bender
// follows a small routine that depends on the time of day. Purely visual.

type Pt = { x: number; y: number };
export type Actor = {
  x: number; y: number; pose: Pose; facing: 1 | -1;
  moveMs: number;            // CSS transition time to reach (x, y)
  label: string;             // what they're doing, for the bubble and screen readers
  partner?: string;          // talking with
};

const px = (q: number, r: number, dx = 0, dy = 0): Pt => {
  const p = hexToPixel(q, r);
  return { x: p.x + dx, y: p.y + dy };
};
const home = (k: string) => px(DISTRICTS[k].q, DISTRICTS[k].r, 40, 4);

// Activity spots on the map (open land and shore tiles).
const SPOTS = {
  market: px(1, -1),                      // the square between the districts
  library_steps: px(0, 0, -6, 26),
  temple_rock: px(3, -3, -6, 4),
  shore_west: px(-3, 1, 10, 4),
  shore_east: px(3, 0, -10, 6),
  north_gate: px(0, -3, 0, 8),
  south_gate: px(0, 3, 0, -2),
  dune_tower: px(2, 1, 6, 6),
  hills: px(-1, -2, 0, 6),
  forge_yard: px(-2, 1, 8, 2),
  crossroads: px(-1, 1, 0, 4),
};

type Act = { pose: Pose; label: string; at: (k: string) => Pt; w: number; night?: boolean; day?: boolean; talk?: boolean };
const near = (p: Pt, dx: number, dy = 0) => () => ({ x: p.x + dx, y: p.y + dy });

// Each bender's idle routine. `w` is the weight; night/day restrict the hours.
const ROUTINES: Record<string, Act[]> = {
  scholar: [
    { pose: "read", label: "reading on the library steps", at: near(SPOTS.library_steps, 0), w: 4, day: true },
    { pose: "practice", label: "shaping water at the shore", at: near(SPOTS.shore_east, 0), w: 3 },
    { pose: "talk", label: "talking", at: () => SPOTS.market, w: 1, talk: true, day: true },
  ],
  coach: [
    { pose: "meditate", label: "meditating on the temple rock", at: near(SPOTS.temple_rock, 0), w: 4 },
    { pose: "practice", label: "practicing airbending", at: near(SPOTS.temple_rock, -30, 14), w: 2 },
    { pose: "talk", label: "talking", at: () => SPOTS.market, w: 2, talk: true, day: true },
  ],
  ledger: [
    { pose: "read", label: "checking the ledgers", at: (k) => ({ x: home(k).x - 10, y: home(k).y + 16 }), w: 3, day: true },
    { pose: "practice", label: "working iron in the yard", at: near(SPOTS.forge_yard, 0), w: 2 },
    { pose: "talk", label: "talking", at: () => SPOTS.market, w: 1, talk: true, day: true },
  ],
  foreman: [
    { pose: "guard", label: "on guard at the north gate", at: near(SPOTS.north_gate, 0), w: 4 },
    { pose: "practice", label: "raising stone in the hills", at: near(SPOTS.hills, 0), w: 2, day: true },
    { pose: "talk", label: "talking", at: () => SPOTS.market, w: 1, talk: true, day: true },
  ],
  herald: [
    { pose: "talk", label: "rehearsing in the square", at: (k) => ({ x: home(k).x - 20, y: home(k).y + 18 }), w: 2, day: true },
    { pose: "practice", label: "juggling flame", at: (k) => ({ x: home(k).x + 4, y: home(k).y + 30 }), w: 2 },
    { pose: "talk", label: "talking", at: () => SPOTS.market, w: 2, talk: true, day: true },
  ],
  scout: [
    { pose: "guard", label: "watching from the dunes", at: near(SPOTS.dune_tower, 0), w: 4 },
    { pose: "practice", label: "spinning sand", at: near(SPOTS.south_gate, 26), w: 2, day: true },
    { pose: "talk", label: "talking", at: () => SPOTS.market, w: 1, talk: true, day: true },
  ],
  runner: [
    { pose: "walk", label: "running errands", at: near(SPOTS.crossroads, 0), w: 2 },
    { pose: "walk", label: "running errands", at: near(SPOTS.shore_west, 0), w: 2, day: true },
    { pose: "practice", label: "throwing sparks", at: near(SPOTS.crossroads, 20, 14), w: 2 },
    { pose: "talk", label: "talking", at: () => SPOTS.market, w: 2, talk: true, day: true },
  ],
};
const GUARDS = new Set(["foreman", "scout"]); // they keep watch through the night

const isNight = (now: number) => { const h = new Date(now).getHours(); return h >= 22 || h < 6; };
const dist = (a: Pt, b: Pt) => Math.hypot(a.x - b.x, a.y - b.y);
const WALK_SPEED = 45; // map units per second

type Plan = { act: Act; until: number; target: Pt; partner?: string };
type Pos = Pt & { arrive: number; moveMs: number; facing: 1 | -1 };

/** Keeps each bender's position and plan between ticks. */
class Town {
  pos: Record<string, Pos> = {};
  plans: Record<string, Plan | null> = {};
  doneAt: Record<string, number> = {};
  prev: Record<string, TownState> = {};

  private moveTo(k: string, target: Pt, t: number): Pos {
    const cur = this.pos[k] ?? { ...home(k), arrive: 0, moveMs: 0, facing: 1 as const };
    if (dist(cur, target) < 2) return (this.pos[k] = cur);
    const moveMs = Math.round((dist(cur, target) / WALK_SPEED) * 1000);
    const facing: 1 | -1 = target.x < cur.x ? -1 : 1;
    return (this.pos[k] = { ...target, arrive: t + moveMs, moveMs, facing });
  }

  step(states: Record<string, TownState>, now: number | null): Record<string, Actor> {
    const t = Date.now();
    const night = now ? isNight(now) : false;
    const out: Record<string, Actor> = {};

    for (const k of Object.keys(DISTRICTS)) {
      const st = states[k] ?? "idle";
      if (this.prev[k] !== "done" && st === "done") this.doneAt[k] = t;
      this.prev[k] = st;

      // 1. Work state wins.
      let forced: { pose: Pose; label: string } | null = null;
      if (st === "working") forced = { pose: "work", label: "working on a task" };
      else if (st === "failed") forced = { pose: "slump", label: "task failed" };
      else if (st === "asleep") forced = { pose: "sleep", label: "asleep (3+ days quiet)" };
      else if (st === "done" && t - (this.doneAt[k] ?? 0) < 8000) forced = { pose: "celebrate", label: "finished a task" };
      else if (night && !GUARDS.has(k)) forced = { pose: "sleep", label: "resting for the night" };

      if (forced) {
        const partner = this.plans[k]?.partner;
        if (partner && this.plans[partner]?.partner === k) this.plans[partner] = null; // release the partner
        this.plans[k] = null;
        const p = this.moveTo(k, forced.pose === "sleep" ? { x: home(k).x - 4, y: home(k).y + 6 } : home(k), t);
        const moving = t < p.arrive;
        out[k] = { x: p.x, y: p.y, pose: moving ? "walk" : forced.pose, facing: p.facing, moveMs: p.moveMs,
          label: moving ? "heading home" : forced.label };
        continue;
      }

      // 2. Idle routine: keep the current plan until it runs out, then pick a new one.
      let plan = this.plans[k];
      if (!plan || t > plan.until || (plan.partner && this.plans[plan.partner]?.partner !== k)) {
        const options = ROUTINES[k].filter((a) => (!a.day || !night) && (!a.night || night));
        let pick = weighted(options);
        let partner: string | undefined;
        if (pick.talk) {
          partner = Object.keys(DISTRICTS).find((o) => o !== k && (states[o] ?? "idle") === "idle"
            && !this.plans[o]?.partner && !(night && !GUARDS.has(o)));
          if (!partner) pick = options.find((a) => !a.talk) ?? pick;
        }
        const until = t + 25_000 + Math.random() * 25_000;
        const base = pick.at(k);
        if (partner) {
          this.plans[partner] = { act: { ...pick, label: "talking" }, until, target: { x: base.x + 16, y: base.y }, partner: k };
          plan = { act: pick, until, target: { x: base.x - 16, y: base.y }, partner };
        } else {
          plan = { act: pick, until, target: base };
        }
        this.plans[k] = plan;
      }
      const p = this.moveTo(k, plan.target, t);
      const moving = t < p.arrive;
      const partnerPos = plan.partner ? this.pos[plan.partner] : null;
      const facing: 1 | -1 = !moving && partnerPos ? (partnerPos.x < p.x ? -1 : 1) : p.facing;
      const partnerName = plan.partner ? DISTRICTS[plan.partner].name.split(" ")[0] : "";
      out[k] = {
        x: p.x, y: p.y, facing, moveMs: p.moveMs, partner: plan.partner,
        pose: moving ? "walk" : plan.act.pose,
        label: moving ? "walking" : plan.partner ? `talking with ${partnerName}` : plan.act.label,
      };
    }
    return out;
  }
}

/** Position, pose and activity for every bender, stepped twice a second. */
export function useTownLife(states: Record<string, TownState>, now: number | null): Record<string, Actor> {
  const [actors, setActors] = useState<Record<string, Actor>>({});
  const latest = useRef({ states, now });
  useEffect(() => { latest.current = { states, now }; }, [states, now]);
  useEffect(() => {
    const town = new Town();
    const tick = () => setActors(town.step(latest.current.states, latest.current.now));
    const first = setTimeout(tick, 0);
    const iv = setInterval(tick, 500);
    return () => { clearTimeout(first); clearInterval(iv); };
  }, []);
  return actors;
}

function weighted<T extends { w: number }>(xs: T[]): T {
  const total = xs.reduce((s, x) => s + x.w, 0);
  let r = Math.random() * total;
  for (const x of xs) { r -= x.w; if (r <= 0) return x; }
  return xs[xs.length - 1];
}
