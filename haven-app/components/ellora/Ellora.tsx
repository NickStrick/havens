"use client";
import { useMemo } from "react";
import { DISTRICTS } from "@/lib/districts";
import { hexDisk, hexPoints, hexToPixel, ring, tileNoise, HEX } from "@/lib/hex";
import { skyTint, type TownState } from "@/lib/ellora";
import { useForge, type ForgeEvent } from "@/lib/forge";
import type { Actor } from "@/lib/life";
import { terrainImages } from "@/lib/sprites";
import { DistrictSprite } from "./DistrictSprite";
import { BenderActor } from "./BenderActor";

const RADIUS = 4;
type Terrain = "water" | "shallows" | "plaza" | "market" | "grass" | "forest" | "hills" | "sand";
const FILL: Record<Terrain, string> = {
  water: "#2c6e8f", shallows: "#3f8ea8", plaza: "#c9b27c", market: "#cdb685", grass: "#6f9a4b",
  forest: "#557e3a", hills: "#8a9a5b", sand: "#d8c08a",
};
const SIDE: Record<Terrain, string> = {
  water: "#1d4e66", shallows: "#2a6b80", plaza: "#8f7c52", market: "#8f7c52", grass: "#4b6b31",
  forest: "#3a5927", hills: "#62703f", sand: "#a48f5f",
};

const taken = new Map(Object.entries(DISTRICTS).map(([k, d]) => [`${d.q},${d.r}`, k]));
// Tiles the benders walk to (see lib/life.ts) stay open land.
const FORCED: Record<string, Terrain> = {
  "1,-1": "market", "3,-3": "hills", "-1,-2": "hills", "0,-3": "grass", "0,3": "grass",
  "-3,1": "grass", "3,0": "grass", "-2,1": "grass", "-1,1": "grass", "2,1": "sand",
};
const GATES = [[0, -3], [0, 3]];

function terrainAt(q: number, r: number): Terrain {
  const rg = ring(q, r);
  if (rg === RADIUS) return "water";
  if (taken.has(`${q},${r}`)) return "plaza";
  if (FORCED[`${q},${r}`]) return FORCED[`${q},${r}`];
  const n = tileNoise(q, r);
  if (rg === RADIUS - 1 && n < 0.18) return "shallows";
  if (Math.abs(q - 1) + Math.abs(r - 2) <= 1 && n < 0.7) return "sand"; // dunes by Dune Watch
  if (n < 0.3) return "forest";
  if (n < 0.42) return "hills";
  return "grass";
}

export default function Ellora({ selected, onSelect, now, doneCounts, states, actors }: {
  selected: string | null; onSelect: (k: string | null) => void; now: number | null;
  doneCounts: Record<string, number>; states: Record<string, TownState>; actors: Record<string, Actor>;
}) {
  const events = useForge((s) => s.events);
  const tiles = useMemo(() => hexDisk(RADIUS).sort((a, b) => a.r - b.r || a.q - b.q), []);
  const textures = useMemo(() => new Map(terrainImages().map((t) => [t.type, t.src])), []);
  const tint = skyTint(now);
  const night = tint.label === "Night";
  const center = hexToPixel(0, 0);

  const last = useMemo(() => {
    const out: Record<string, ForgeEvent | undefined> = {};
    for (const k of Object.keys(DISTRICTS)) out[k] = events.find((e) => e.agent === k && e.type !== "held");
    return out;
  }, [events]);

  // Buildings and people share one depth order: whatever is lower on screen draws on top.
  const things = useMemo(() => {
    const list: { y: number; kind: "district" | "actor"; key: string }[] = [];
    for (const [k, d] of Object.entries(DISTRICTS)) list.push({ y: hexToPixel(d.q, d.r).y, kind: "district", key: k });
    for (const [k, a] of Object.entries(actors)) list.push({ y: a.y, kind: "actor", key: k });
    return list.sort((a, b) => a.y - b.y);
  }, [actors]);

  const choose = (key: string) => (e: React.SyntheticEvent) => { e.stopPropagation(); onSelect(key === selected ? null : key); };

  return (
    <svg viewBox="-560 -330 1120 660" className="h-full w-full" role="img"
      aria-label="Ellora: a hex map town with one district per bender" onClick={() => onSelect(null)}>
      <defs>
        <pattern id="waves" width="28" height="10" patternUnits="userSpaceOnUse">
          <path d="M0,6 Q7,2 14,6 T28,6" fill="none" stroke="#ffffff30" strokeWidth="1.2" />
        </pattern>
        {[...textures].map(([type, src]) => (
          <pattern key={type} id={`tex-${type}`} width="128" height="128" patternUnits="userSpaceOnUse">
            <image href={src} width="128" height="128" />
          </pattern>
        ))}
        <radialGradient id="vignette" gradientUnits="userSpaceOnUse" cx={0} cy={0} r={720}>
          <stop offset="60%" stopColor="#000" stopOpacity="0" />
          <stop offset="100%" stopColor="#000" stopOpacity="0.55" />
        </radialGradient>
      </defs>
      {/* open sea, oversized so it fills any screen shape around the board */}
      <rect x={-3000} y={-3000} width={6000} height={6000} fill="#0d2633" />
      <rect x={-3000} y={-3000} width={6000} height={6000} fill="url(#waves)" opacity={0.5} />

      {/* terrain, back rows first, each tile with a darker side for the raised edge */}
      {tiles.map(({ q, r }) => {
        const { x, y } = hexToPixel(q, r);
        const t = terrainAt(q, r);
        const n = tileNoise(q, r);
        const tex = textures.has(t === "market" ? "plaza" : t) ? `url(#tex-${t === "market" ? "plaza" : t})` : FILL[t];
        return (
          <g key={`${q},${r}`}>
            <polygon points={hexPoints(x, y + 10)} fill={SIDE[t]} />
            <polygon points={hexPoints(x, y)} fill={tex} stroke="#00000033" strokeWidth={1.5} />
            {t === "water" && <polygon points={hexPoints(x, y)} fill="url(#waves)" />}
            {t === "forest" && [[-18, -4], [6, -10], [16, 6], [-6, 8]].slice(0, 2 + Math.floor(n * 3)).map(([dx, dy], i) => (
              <g key={i} transform={`translate(${x + dx} ${y + dy})`}>
                <rect x={-1.5} y={0} width={3} height={6} fill="#4a3624" />
                <path d="M0,-14 L9,2 L-9,2Z" fill="#2f5e2a" stroke="#00000040" />
                <path d="M0,-14 L9,2 L3,2Z" fill="#244a20" />
              </g>
            ))}
            {t === "hills" && <path d={`M${x - 26},${y + 8} Q${x - 10},${y - 16} ${x + 4},${y + 6} Q${x + 16},${y - 8} ${x + 28},${y + 8}Z`} fill="#77874c" stroke="#00000030" />}
            {t === "sand" && <path d={`M${x - 24},${y + 6} Q${x - 6},${y - 6} ${x + 10},${y + 4} M${x - 8},${y + 14} Q${x + 8},${y + 4} ${x + 22},${y + 12}`} stroke="#b89f68" strokeWidth={2} fill="none" />}
            {t === "market" && <Market x={x} y={y} night={night} />}
          </g>
        );
      })}

      {/* roads from every district to the Tide Library */}
      <g stroke="#e6d3a1" strokeWidth={5} strokeLinecap="round" strokeDasharray="1 9" opacity={0.85}>
        {Object.entries(DISTRICTS).filter(([k]) => k !== "scholar").map(([k, d]) => {
          const p = hexToPixel(d.q, d.r);
          return <line key={k} x1={center.x} y1={center.y + 6} x2={p.x} y2={p.y + 6} />;
        })}
      </g>
      {GATES.map(([q, r]) => <Gate key={`${q},${r}`} {...hexToPixel(q, r)} night={night} />)}

      {/* selection ring */}
      {selected && DISTRICTS[selected] && (() => {
        const p = hexToPixel(DISTRICTS[selected].q, DISTRICTS[selected].r);
        return <polygon points={hexPoints(p.x, p.y, HEX - 3)} fill="none" stroke="#fff" strokeWidth={3} className="sel-pulse" />;
      })()}

      {/* buildings and benders in depth order */}
      {things.map(({ kind, key }) => {
        const d = DISTRICTS[key];
        if (kind === "district") {
          const { x, y } = hexToPixel(d.q, d.r);
          return (
            <g key={`d-${key}`} transform={`translate(${x} ${y})`} className="cursor-pointer outline-none"
              role="button" tabIndex={0} aria-label={`${d.label}: ${d.name}, ${states[key]}`} aria-pressed={key === selected}
              onClick={choose(key)} onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && choose(key)(e)}>
              <polygon points={hexPoints(0, 0, HEX)} fill="transparent" />
              <DistrictSprite agent={key} label={d.label} color={d.color} element={d.element}
                done={doneCounts[key] ?? 0} selected={key === selected} night={night} />
            </g>
          );
        }
        const a = actors[key];
        return (
          <g key={`a-${key}`} className="cursor-pointer" onClick={choose(key)}>
            <title>{`${d.name}: ${a.label}`}</title>
            <BenderActor agent={key} actor={a} element={d.element} color={d.color} state={states[key]}
              detail={last[key]?.detail} selected={key === selected} />
          </g>
        );
      })}

      {/* time of day and vignette */}
      <rect x={-3000} y={-3000} width={6000} height={6000} fill={tint.color} opacity={tint.opacity} pointerEvents="none"
        style={{ transition: "opacity 2s" }} />
      <rect x={-3000} y={-3000} width={6000} height={6000} fill="url(#vignette)" pointerEvents="none" />
      <text x={-548} y={318} fontSize={11} fill="#ffffff80">{tint.label}</text>
      <g transform="translate(520 -290)" opacity={0.7} aria-hidden>
        <circle r={16} fill="#00000055" stroke="#ffffff60" />
        <path d="M0,-12 L4,0 L0,12 L-4,0Z" fill="#fff" opacity={0.85} />
        <text y={-19} textAnchor="middle" fontSize={9} fill="#fff">N</text>
      </g>
    </svg>
  );
}

/** Market square: two stalls with awnings and a well. */
function Market({ x, y, night }: { x: number; y: number; night: boolean }) {
  return (
    <g transform={`translate(${x} ${y})`}>
      {[[-26, -8, "#c8553d"], [18, -12, "#3e7cb1"]].map(([sx, sy, c], i) => (
        <g key={i} transform={`translate(${sx} ${sy})`}>
          <rect x={-8} y={-6} width={16} height={8} fill="#a07a4f" stroke="#00000055" />
          <path d="M-10,-6 L10,-6 L8,-13 L-8,-13Z" fill={c as string} stroke="#00000055" />
          <path d="M-10,-6 L-6,-6 M-2,-6 L2,-6 M6,-6 L10,-6" stroke="#fff" strokeWidth={1.4} />
        </g>
      ))}
      <ellipse cx={0} cy={14} rx={7} ry={3.5} fill="#8a8170" stroke="#00000055" />
      <ellipse cx={0} cy={13} rx={4.5} ry={2} fill={night ? "#1b3a52" : "#3f86b0"} />
    </g>
  );
}

/** Town gate where the guards stand watch: two posts and a lantern. */
function Gate({ x, y, night }: { x: number; y: number; night: boolean }) {
  return (
    <g transform={`translate(${x - 22} ${y})`}>
      {[-8, 8].map((dx) => <rect key={dx} x={dx - 2} y={-22} width={4} height={22} fill="#7a6a52" stroke="#00000055" />)}
      <rect x={-11} y={-25} width={22} height={4} fill="#5a4a36" />
      <circle cx={0} cy={-18} r={2.2} fill={night ? "#ffd27a" : "#c9b27c"} />
      {night && <circle cx={0} cy={-18} r={9} fill="#ffd27a" opacity={0.18} />}
    </g>
  );
}
