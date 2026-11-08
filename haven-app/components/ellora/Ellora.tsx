"use client";
import { useMemo } from "react";
import { DISTRICTS } from "@/lib/districts";
import { hexDisk, hexPoints, hexToPixel, ring, tileNoise, HEX } from "@/lib/hex";
import { townState, skyTint, type TownState } from "@/lib/ellora";
import { useForge, type ForgeEvent } from "@/lib/forge";
import { DistrictSprite } from "./DistrictSprite";
import { BenderSprite } from "./BenderSprite";

const RADIUS = 4;
type Terrain = "water" | "shallows" | "plaza" | "grass" | "forest" | "hills" | "sand";
const FILL: Record<Terrain, string> = {
  water: "#2c6e8f", shallows: "#3f8ea8", plaza: "#c9b27c", grass: "#6f9a4b",
  forest: "#557e3a", hills: "#8a9a5b", sand: "#d8c08a",
};
const SIDE: Record<Terrain, string> = {
  water: "#1d4e66", shallows: "#2a6b80", plaza: "#8f7c52", grass: "#4b6b31",
  forest: "#3a5927", hills: "#62703f", sand: "#a48f5f",
};

const taken = new Map(Object.entries(DISTRICTS).map(([k, d]) => [`${d.q},${d.r}`, k]));

function terrainAt(q: number, r: number): Terrain {
  const rg = ring(q, r);
  if (rg === RADIUS) return "water";
  if (taken.has(`${q},${r}`)) return "plaza";
  const n = tileNoise(q, r);
  if (rg === RADIUS - 1 && n < 0.18) return "shallows";
  if (Math.abs(q - 1) + Math.abs(r - 2) <= 1 && n < 0.7) return "sand"; // dunes by Dune Watch
  if (n < 0.3) return "forest";
  if (n < 0.42) return "hills";
  return "grass";
}

export default function Ellora({ selected, onSelect, now, doneCounts }:
  { selected: string | null; onSelect: (k: string | null) => void; now: number | null; doneCounts: Record<string, number> }) {
  const events = useForge((s) => s.events);
  const tiles = useMemo(() => hexDisk(RADIUS).sort((a, b) => a.r - b.r || a.q - b.q), []);
  const tint = skyTint(now);
  const center = hexToPixel(0, 0);

  const states = useMemo(() => {
    const out: Record<string, { state: TownState; last?: ForgeEvent; done: number }> = {};
    for (const k of Object.keys(DISTRICTS)) {
      const last = events.find((e) => e.agent === k && e.type !== "held");
      const localDone = events.filter((e) => e.agent === k && e.type === "done").length;
      out[k] = { state: townState(k, events, now), last, done: Math.max(doneCounts[k] ?? 0, localDone) };
    }
    return out;
  }, [events, now, doneCounts]);

  return (
    <svg viewBox="-560 -330 1120 660" className="h-full w-full" role="img"
      aria-label="Ellora: a hex map town with one district per bender"
      onClick={() => onSelect(null)}>
      <defs>
        <pattern id="waves" width="28" height="10" patternUnits="userSpaceOnUse">
          <path d="M0,6 Q7,2 14,6 T28,6" fill="none" stroke="#ffffff30" strokeWidth="1.2" />
        </pattern>
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
        return (
          <g key={`${q},${r}`}>
            <polygon points={hexPoints(x, y + 10)} fill={SIDE[t]} />
            <polygon points={hexPoints(x, y)} fill={FILL[t]} stroke="#00000033" strokeWidth={1.5} />
            {t === "water" && <polygon points={hexPoints(x, y)} fill="url(#waves)" />}
            {t === "forest" && [[-18, -4], [6, -10], [16, 6], [-6, 8]].slice(0, 2 + Math.floor(n * 3)).map(([dx, dy], i) => (
              <g key={i} transform={`translate(${x + dx} ${y + dy})`}>
                <rect x={-1.5} y={0} width={3} height={6} fill="#4a3624" />
                <path d="M0,-14 L9,2 L-9,2Z" fill="#2f5e2a" stroke="#00000040" />
              </g>
            ))}
            {t === "hills" && <path d={`M${x - 26},${y + 8} Q${x - 10},${y - 16} ${x + 4},${y + 6} Q${x + 16},${y - 8} ${x + 28},${y + 8}Z`} fill="#77874c" stroke="#00000030" />}
            {t === "sand" && <path d={`M${x - 24},${y + 6} Q${x - 6},${y - 6} ${x + 10},${y + 4} M${x - 8},${y + 14} Q${x + 8},${y + 4} ${x + 22},${y + 12}`} stroke="#b89f68" strokeWidth={2} fill="none" />}
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

      {/* selection ring */}
      {selected && DISTRICTS[selected] && (() => {
        const p = hexToPixel(DISTRICTS[selected].q, DISTRICTS[selected].r);
        return <polygon points={hexPoints(p.x, p.y, HEX - 3)} fill="none" stroke="#fff" strokeWidth={3} className="sel-pulse" />;
      })()}

      {/* districts and benders, front rows drawn last */}
      {Object.entries(DISTRICTS).sort(([, a], [, b]) => a.r - b.r).map(([key, d]) => {
        const { x, y } = hexToPixel(d.q, d.r);
        const st = states[key];
        const choose = (e: React.SyntheticEvent) => { e.stopPropagation(); onSelect(key === selected ? null : key); };
        return (
          <g key={key} transform={`translate(${x} ${y})`} className="cursor-pointer outline-none"
            role="button" tabIndex={0} aria-label={`${d.label}: ${d.name}, ${st.state}`} aria-pressed={key === selected}
            onClick={choose} onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && choose(e)}>
            <polygon points={hexPoints(0, 0, HEX)} fill="transparent" />
            <DistrictSprite label={d.label} color={d.color} element={d.element} done={st.done} selected={key === selected} />
            <BenderSprite color={d.color} element={d.element} state={st.state} detail={st.last?.detail} />
          </g>
        );
      })}

      {/* time of day and vignette */}
      <rect x={-3000} y={-3000} width={6000} height={6000} fill={tint.color} opacity={tint.opacity} pointerEvents="none"
        style={{ transition: "opacity 2s" }} />
      <rect x={-3000} y={-3000} width={6000} height={6000} fill="url(#vignette)" pointerEvents="none" />
      <text x={-548} y={318} fontSize={11} fill="#ffffff80">{tint.label}</text>
      {/* compass */}
      <g transform="translate(520 -290)" opacity={0.7} aria-hidden>
        <circle r={16} fill="#00000055" stroke="#ffffff60" />
        <path d="M0,-12 L4,0 L0,12 L-4,0Z" fill="#fff" opacity={0.85} />
        <text y={-19} textAnchor="middle" fontSize={9} fill="#fff">N</text>
      </g>
    </svg>
  );
}
