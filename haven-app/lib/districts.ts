import { ELEMENT_COLOR } from "./elements";

export type District = {
  label: string; q: number; r: number; element: string; color: string;
  name: string; role: string; // fallback when the forge is offline
};

type Base = Omit<District, "color">;

// One district tile per bender. Tide Library sits at the center of town.
const BASE: Record<string, Base> = {
  scholar: { label: "Tide Library", q: 0, r: 0, element: "water", name: "Mirelle Tidecall", role: "Scholar" },
  coach: { label: "Wind Temple", q: 2, r: -2, element: "air", name: "Suri Windquill", role: "Coach" },
  ledger: { label: "Hall of Records", q: -2, r: 0, element: "metal", name: "Brannoc Ironvein", role: "Scorekeeper" },
  foreman: { label: "Town Hall", q: 0, r: -2, element: "earth", name: "Tovan Stoneward", role: "Foreman" },
  herald: { label: "Herald's Square", q: 2, r: 0, element: "fire", name: "Kael Emberline", role: "Herald" },
  scout: { label: "Dune Watch", q: 1, r: 2, element: "sand", name: "Dara Sandseer", role: "Scout" },
  runner: { label: "Post House", q: -2, r: 2, element: "lightning", name: "Zeph Sparkrun", role: "Runner" },
};

export const DISTRICTS: Record<string, District> = Object.fromEntries(
  Object.entries(BASE).map(([k, d]) => [k, { ...d, color: ELEMENT_COLOR[d.element] }]),
);
