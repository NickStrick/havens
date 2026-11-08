"use client";
import type { Actor } from "@/lib/life";
import { BADGE, type TownState } from "@/lib/ellora";
import { benderSheet, type Pose } from "@/lib/sprites";
import { ElementFx } from "./ElementFx";

// Look of each placeholder person (matches the character brief for Claude Design).
const LOOK: Record<string, { skin: string; hair: string; robe: string; trim: string; long?: boolean; wrap?: boolean; beard?: boolean }> = {
  scholar: { skin: "#6b4430", hair: "#1d1410", robe: "#2a8a8f", trim: "#e9d9b0" },
  coach: { skin: "#b07a52", hair: "#c9c4bb", robe: "#f1dca7", trim: "#e3a72f", long: true },
  ledger: { skin: "#e3b896", hair: "#8f8a84", robe: "#4b4f57", trim: "#a5793c", beard: true },
  foreman: { skin: "#a0704c", hair: "#1b1714", robe: "#5f7d36", trim: "#7c6a52" },
  herald: { skin: "#d39a6f", hair: "#3b2416", robe: "#b8321e", trim: "#f2e6c9" },
  scout: { skin: "#b9805a", hair: "#2a1c14", robe: "#c79a4f", trim: "#7a5a32", wrap: true },
  runner: { skin: "#e2b48c", hair: "#22202a", robe: "#5d3fa3", trim: "#d6c9ff" },
};

const POSE_ANIM: Partial<Record<Pose, string>> = {
  walk: "anim-bob", work: "anim-sway", practice: "anim-sway", meditate: "anim-float",
  guard: "anim-breathe", talk: "anim-nod", celebrate: "anim-jump", sleep: "anim-breathe-slow", read: "anim-breathe",
};
const FX_POSES = new Set<Pose>(["work", "practice"]);
const ICON: Partial<Record<Pose, string>> = { read: "📖", guard: "🛡", meditate: "☯", talk: "💬", sleep: "z", celebrate: "✓" };

/** A bender on the map: real sprite if one exists in public/assets, otherwise a placeholder person. */
export function BenderActor({ agent, actor, element, color, state, detail, selected }:
  { agent: string; actor: Actor; element: string; color: string; state: TownState; detail?: string; selected: boolean }) {
  const sheet = benderSheet(agent, actor.pose);
  // "done" only shows while they celebrate; afterwards they go back to their routine
  const badge = state === "done" && actor.pose !== "celebrate" ? undefined : BADGE[state];
  const showFx = FX_POSES.has(actor.pose) || (actor.pose === "meditate" && element === "air");

  return (
    <g style={{ transform: `translate(${actor.x}px, ${actor.y}px)`, transition: `transform ${actor.moveMs}ms linear` }}
      opacity={state === "asleep" ? 0.55 : 1}>
      <ellipse cy={1} rx={11} ry={3.5} fill="#00000059" />
      {selected && <ellipse cy={1} rx={16} ry={6} fill="none" stroke="#fff" strokeWidth={2} className="sel-pulse" />}
      <g className={POSE_ANIM[actor.pose] ?? ""} style={{ transformBox: "fill-box", transformOrigin: "bottom" }}>
        <g transform={`scale(${actor.facing} 1)`}>
          {sheet ? <SpriteImage src={sheet.src} frames={sheet.frames} /> : <Person look={LOOK[agent]} pose={actor.pose} />}
          {showFx && <ElementFx element={element} color={color} strong={actor.pose === "work"} />}
        </g>
      </g>
      {state === "failed" && <circle cy={-22} r={20} fill="none" stroke="#ff3b3b" strokeWidth={2} strokeDasharray="4 3" />}
      {/* activity icon for the placeholder (real art shows it in the pose) */}
      {!sheet && ICON[actor.pose] && !badge && (
        <text x={10} y={-46} fontSize={11} fill="#fff" stroke="#000" strokeWidth={2.5} paintOrder="stroke">{ICON[actor.pose]}</text>
      )}
      {badge && (
        <g transform="translate(0 -56)">
          <rect x={-66} y={-12} width={132} height={20} rx={6} fill="#000000bb" />
          <text y={3} textAnchor="middle" fontSize={11} fill={state === "failed" ? "#ff8080" : "#fff"}>
            {badge} {detail ? (detail.length > 20 ? detail.slice(0, 19) + "…" : detail) : state}
          </text>
        </g>
      )}
    </g>
  );
}

/** One still image (frames = 1) or a horizontal strip of frames, feet at (0, 0). */
function SpriteImage({ src, frames }: { src: string; frames: number }) {
  const w = 64, h = 64;
  if (frames <= 1) return <image href={src} x={-w / 2} y={-h + 4} width={w} height={h} />;
  return (
    <svg x={-w / 2} y={-h + 4} width={w} height={h} viewBox={`0 0 ${w} ${h}`} overflow="hidden">
      <image href={src} width={w * frames} height={h} className="strip"
        style={{ ["--n" as string]: frames, ["--shift" as string]: `${-w * frames}px`, animationDuration: `${frames * 0.12}s` }} />
    </svg>
  );
}

/** Placeholder person, about 44 units tall, feet at (0, 0). */
function Person({ look, pose }: { look: (typeof LOOK)[string]; pose: Pose }) {
  if (pose === "sleep") {
    return (
      <g>
        <rect x={-16} y={-8} width={30} height={8} rx={3} fill="#7a5a3a" />
        <rect x={-12} y={-12} width={22} height={7} rx={3} fill={look.robe} stroke="#00000055" />
        <circle cx={-14} cy={-11} r={5} fill={look.skin} stroke="#00000055" />
        <text x={-4} y={-20} fontSize={10} fill="#fff" stroke="#000" strokeWidth={2} paintOrder="stroke" className="anim-zz">z</text>
      </g>
    );
  }
  const sit = pose === "meditate";
  const slump = pose === "slump";
  const lift = sit ? 10 : 0;
  const tilt = slump ? 12 : 0;
  // arms: [shoulder to hand] for left and right, by pose
  const arms: Record<string, [number, number, number, number]> = {
    stand: [-6, -12, 6, -12], walk: [-8, -14, 7, -12], work: [-12, -34, 13, -30], practice: [-5, -14, 14, -28],
    read: [-3, -22, 5, -22], meditate: [-9, -14, 9, -14], guard: [-6, -12, 10, -26], talk: [-6, -12, 13, -26],
    celebrate: [-12, -40, 12, -40], slump: [-4, -8, 6, -8],
  };
  const [lx, ly, rx, ry] = arms[pose] ?? arms.stand;
  return (
    <g transform={`translate(0 ${lift}) rotate(${tilt})`}>
      {/* legs */}
      {sit ? (
        <ellipse cx={0} cy={-6} rx={11} ry={4} fill={look.trim} stroke="#00000055" />
      ) : (
        <g className={pose === "walk" ? "anim-legs" : ""}>
          <rect x={-5} y={-12} width={4} height={12} rx={1.5} fill="#3a2e24" />
          <rect x={1} y={-12} width={4} height={12} rx={1.5} fill="#3a2e24" />
        </g>
      )}
      {/* robe */}
      <path d="M-9,-10 L-7,-30 Q0,-34 7,-30 L9,-10 Q0,-7 -9,-10Z" fill={look.robe} stroke="#00000066" strokeWidth={0.8} />
      <path d="M-7,-20 L7,-20" stroke={look.trim} strokeWidth={2.2} />
      {/* arms */}
      <path d={`M-6,-28 L${lx},${ly}`} stroke={look.robe} strokeWidth={3.6} strokeLinecap="round" />
      <path d={`M6,-28 L${rx},${ry}`} stroke={look.robe} strokeWidth={3.6} strokeLinecap="round" />
      <circle cx={lx} cy={ly} r={1.9} fill={look.skin} />
      <circle cx={rx} cy={ry} r={1.9} fill={look.skin} />
      {/* props */}
      {pose === "read" && <rect x={-4} y={-26} width={10} height={7} rx={1} fill="#7c3b22" stroke="#2b140b" strokeWidth={0.6} />}
      {pose === "guard" && <path d="M12,-4 L12,-46 M12,-46 L10,-41 M12,-46 L14,-41" stroke="#5a4632" strokeWidth={1.6} />}
      {/* head */}
      <g transform={slump ? "translate(2 3)" : undefined}>
        <circle cx={0} cy={-36} r={6} fill={look.skin} stroke="#00000055" strokeWidth={0.8} />
        {look.wrap ? (
          <path d="M-6.5,-37 Q0,-46 6.5,-37 L6,-33 Q0,-35 -6,-33Z" fill={look.trim} />
        ) : (
          <path d={look.long ? "M-6.5,-36 Q0,-46 6.5,-36 L7,-26 L4,-30 L4,-37 Q0,-40 -4,-37 Z" : "M-6.2,-37 Q0,-45 6.2,-37 Q3,-39.5 0,-39 Q-3,-39.5 -6.2,-37Z"} fill={look.hair} />
        )}
        {look.beard && <path d="M-4,-33 Q0,-27 4,-33 Q0,-31 -4,-33Z" fill={look.hair} />}
      </g>
    </g>
  );
}
