import manifest from "./asset-manifest.json";

// Poses each bender can be drawn in. Each is one still image; code adds the motion.
export type Pose =
  | "stand" | "walk" | "work" | "practice" | "read" | "meditate"
  | "guard" | "talk" | "celebrate" | "slump" | "sleep";

type Sheet = { src: string; frames: number };
const M = manifest as {
  benders: Record<string, Record<string, Sheet>>;
  districts: Record<string, Record<string, string>>;
  terrain: { type: string; src: string }[];
  emblems: { element: string; src: string }[];
};

// If a pose image is missing, fall back along this chain before using the placeholder.
const FALLBACK: Partial<Record<Pose, Pose[]>> = {
  read: ["practice", "stand"], meditate: ["stand"], guard: ["stand"], talk: ["stand"],
  practice: ["work", "stand"], celebrate: ["stand"], slump: ["stand"], sleep: [],
  walk: ["stand"], work: ["practice", "stand"],
};

export function benderSheet(agent: string, pose: Pose): Sheet | null {
  const set = M.benders[agent];
  if (!set) return null;
  for (const p of [pose, ...(FALLBACK[pose] ?? [])]) if (set[p]) return set[p];
  return null;
}

export const portrait = (agent: string) => M.benders[agent]?.portrait?.src ?? null;

/** Building tier from finished tasks: 1 (new), 2 (5+), 3 (20+). Falls back to a lower tier image. */
export const tierFor = (done: number) => (done >= 20 ? 3 : done >= 5 ? 2 : 1);
export function districtImage(agent: string, tier: number): string | null {
  const set = M.districts[agent];
  if (!set) return null;
  for (let t = tier; t >= 1; t--) if (set[t]) return set[t];
  return null;
}

export const terrainImages = () => M.terrain;
