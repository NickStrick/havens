"use client";
import { BADGE, type TownState } from "@/lib/ellora";
import { Emblem } from "./Emblem";

const PARTICLE_ANIM: Record<string, string> = {
  water: "p-rise", fire: "p-rise", air: "p-swirl", earth: "p-drift",
  sand: "p-drift", metal: "p-spark", lightning: "p-spark",
};

/** Element-colored token next to its district. Bounces and throws particles while working. */
export function BenderSprite({ color, element, state, detail }:
  { color: string; element: string; state: TownState; detail?: string }) {
  const working = state === "working";
  const badge = BADGE[state];
  return (
    <g transform="translate(38 -2)" opacity={state === "asleep" ? 0.5 : 1}>
      <ellipse cy={14} rx={12} ry={4} fill="#00000066" />
      {working && (
        <g aria-hidden>
          {[0, 1, 2, 3, 4].map((i) => (
            <circle key={i} className={`particle ${PARTICLE_ANIM[element] ?? "p-rise"}`}
              cx={(i - 2) * 6} cy={-4} r={element === "lightning" || element === "metal" ? 1.6 : 2.2}
              fill={element === "lightning" ? "#fff6a8" : color}
              style={{ animationDelay: `${i * 0.28}s` }} />
          ))}
        </g>
      )}
      <g className={working ? "animate-bounce" : ""} style={{ transformBox: "fill-box", transformOrigin: "center" }}>
        <circle r={13} fill={color} stroke={state === "failed" ? "#ff3b3b" : "#fff"} strokeWidth={2.5} />
        <Emblem element={element} size={1.15} />
        {/* later: <image href={`/assets/benders/${agent}-${state}.png`} x={-24} y={-40} width={48} /> */}
      </g>
      {state === "asleep" && <text x={12} y={-12} fontSize={11} fill="#fff" stroke="#000" strokeWidth={2.5} paintOrder="stroke">z</text>}
      {badge && (
        <g transform="translate(0 -32)">
          <rect x={-66} y={-12} width={132} height={20} rx={6} fill="#000000bb" />
          <text y={3} textAnchor="middle" fontSize={11} fill={state === "failed" ? "#ff8080" : "#fff"}>
            {badge} {detail ? (detail.length > 20 ? detail.slice(0, 19) + "…" : detail) : state}
          </text>
        </g>
      )}
    </g>
  );
}
