"use client";
import { districtImage, tierFor } from "@/lib/sprites";
import { Emblem } from "./Emblem";

const WALL = "#ece0c2", WALL_SIDE = "#c4b38c", WALL_DARK = "#a89670";

/** District building. Uses public/assets/districts/<agent>-<tier>.png when present,
 *  otherwise a placeholder with visible depth. Tier grows with finished tasks. */
export function DistrictSprite({ agent, label, color, element, done, selected, night }:
  { agent: string; label: string; color: string; element: string; done: number; selected: boolean; night: boolean }) {
  const tier = tierFor(done);
  const img = districtImage(agent, tier);
  return (
    <g>
      <ellipse cy={6} rx={46} ry={16} fill="#00000026" />
      {img ? (
        <image href={img} x={-60} y={-104} width={120} height={120} />
      ) : (
        <g transform="translate(-6 6)">
          <Building tier={tier} color={color} element={element} night={night} />
        </g>
      )}
      <text y={36} textAnchor="middle" fontSize={13} fontWeight={600} fill="#fff"
        stroke="#000" strokeWidth={3} paintOrder="stroke"
        style={{ textDecoration: selected ? "underline" : undefined }}>{label}</text>
    </g>
  );
}

/** Box with a front face, a shaded side face and a gabled roof. (x, y) = front-left-bottom corner. */
function Block({ x, y, w, floors, color, night, door = false }:
  { x: number; y: number; w: number; floors: number; color: string; night: boolean; door?: boolean }) {
  const fh = 13, h = floors * fh, dx = 14, dy = -8, ridge = 15;
  const top = y - h, mid = x + w / 2;
  const win = night ? "#ffd27a" : "#3d3a3466";
  return (
    <g>
      {/* side wall */}
      <polygon points={`${x + w},${y} ${x + w + dx},${y + dy} ${x + w + dx},${top + dy} ${x + w},${top}`} fill={WALL_SIDE} stroke="#00000055" strokeWidth={0.8} />
      {/* front wall */}
      <rect x={x} y={top} width={w} height={h} fill={WALL} stroke="#00000055" strokeWidth={0.8} />
      {Array.from({ length: floors }, (_, f) => (
        <g key={f}>
          {Array.from({ length: Math.max(1, Math.floor(w / 13)) }, (_, i) => (
            <rect key={i} x={x + 5 + i * 13} y={y - (f + 1) * fh + 3} width={5} height={6} rx={1} fill={win} />
          ))}
          {(() => {
            const sx = x + w + 5, sy = y - (f + 1) * fh + 3 + (5 * dy) / dx, s = (4 * dy) / dx;
            return <polygon points={`${sx},${sy} ${sx + 4},${sy + s} ${sx + 4},${sy + s + 6} ${sx},${sy + 6}`} fill={night ? "#e7b75d" : "#00000033"} />;
          })()}
        </g>
      ))}
      {door && <path d={`M${mid - 4},${y} L${mid - 4},${y - 9} Q${mid},${y - 13} ${mid + 4},${y - 9} L${mid + 4},${y}Z`} fill="#5a3d26" />}
      {/* roof: side plane, then front gable */}
      <polygon points={`${mid},${top - ridge} ${x + w + 3},${top} ${x + w + dx + 3},${top + dy} ${mid + dx},${top + dy - ridge}`} fill={color} stroke="#00000066" strokeWidth={0.8} />
      <polygon points={`${x - 3},${top} ${mid},${top - ridge} ${x + w + 3},${top}`} fill={WALL_DARK} stroke="#00000066" strokeWidth={0.8} />
      <polygon points={`${x - 3},${top} ${mid},${top - ridge} ${mid + 2},${top - ridge + 2} ${x},${top + 1}`} fill={color} opacity={0.65} />
    </g>
  );
}

function Building({ tier, color, element, night }: { tier: number; color: string; element: string; night: boolean }) {
  const main = { x: -22, y: 0, w: 40, floors: tier };
  const top = -main.floors * 13 - 15;
  return (
    <g>
      {tier >= 2 && <Block x={-44} y={6} w={22} floors={1} color={color} night={night} />}
      {tier >= 3 && <Block x={22} y={8} w={20} floors={2} color={color} night={night} />}
      <Block {...main} color={color} night={night} door />
      <Landmark element={element} color={color} tier={tier} top={top} night={night} />
      {/* banner */}
      <g transform={`translate(-26 ${top - 2})`}>
        <line x1={0} y1={-14} x2={0} y2={12} stroke="#3b2f22" strokeWidth={1.4} />
        <path d="M0,-14 L13,-10 L0,-5Z" fill={color} stroke="#00000055" />
      </g>
      <g transform={`translate(-2 ${-main.floors * 13 + 6})`}><circle r={5.5} fill={color} stroke="#00000066" /><Emblem element={element} size={0.6} /></g>
    </g>
  );
}

/** One signature feature per district, bigger at higher tiers. */
function Landmark({ element, color, tier, top, night }: { element: string; color: string; tier: number; top: number; night: boolean }) {
  const k = 0.8 + tier * 0.2;
  switch (element) {
    case "water": // library dome and a fountain
      return (
        <g>
          <g transform={`translate(4 ${top + 6}) scale(${k})`}>
            <rect x={-8} y={-4} width={16} height={5} fill="#d9cfb2" stroke="#00000055" />
            <path d="M-9,-4 A9,9 0 0 1 9,-4Z" fill={color} stroke="#00000066" />
            <line x1={0} y1={-13} x2={0} y2={-17} stroke="#e9d9b0" strokeWidth={1.4} />
          </g>
          <g transform="translate(30 8)">
            <ellipse rx={9} ry={4} fill="#9c8f74" /><ellipse rx={7} ry={2.8} fill="#5fb3d9" />
            <path d="M0,-1 Q0,-9 3,-6" stroke="#cfeeff" strokeWidth={1.2} fill="none" className="fx-float" />
          </g>
        </g>
      );
    case "air": // stacked flared roofs and wind chimes
      return (
        <g transform={`translate(-2 ${top + 2})`}>
          {Array.from({ length: tier }, (_, i) => (
            <g key={i} transform={`translate(0 ${-i * 9}) scale(${1 - i * 0.18})`}>
              <path d="M-16,0 Q0,-9 16,0 L12,-2 Q0,-8 -12,-2Z" fill={color} stroke="#00000066" />
              <rect x={-7} y={-8} width={14} height={6} fill="#ece0c2" stroke="#00000044" />
            </g>
          ))}
          <path d={`M14,${-2} L14,6 M16,-2 L16,8`} stroke="#d8c690" strokeWidth={0.8} className="fx-drift" />
        </g>
      );
    case "metal": // columns and a copper vault door
      return (
        <g>
          {[-18, -10, 10].map((x) => <rect key={x} x={x} y={-tier * 13} width={3} height={tier * 13} fill="#f5efe0" stroke="#00000033" />)}
          <circle cx={-2} cy={-5} r={4.5} fill="#7aa38f" stroke="#2e3b36" />
        </g>
      );
    case "earth": // clock tower
      return (
        <g transform={`translate(14 ${top + 18})`}>
          <rect x={-5} y={-18 - tier * 6} width={10} height={18 + tier * 6} fill="#d9cba8" stroke="#00000055" />
          <circle cx={0} cy={-12 - tier * 6} r={3.5} fill="#fffbea" stroke="#3b2f22" strokeWidth={0.8} />
          <path d={`M-7,${-18 - tier * 6} L0,${-30 - tier * 6} L7,${-18 - tier * 6}Z`} fill={color} stroke="#00000066" />
        </g>
      );
    case "fire": // stage and a brazier
      return (
        <g transform="translate(28 10)">
          <path d="M-5,0 L5,0 L3,-7 L-3,-7Z" fill="#4a4038" />
          <path className="fx-flicker" d="M0,-20 C4,-14 5,-10 4,-8 C2,-5 -2,-5 -4,-8 C-5,-11 -2,-13 0,-20Z" fill="#ffb347" stroke="#a3361a" strokeWidth={0.6} />
          {tier >= 2 && <rect x={-30} y={-4} width={18} height={4} fill="#8c5a36" />}
        </g>
      );
    case "sand": // watchtower with an awning
      return (
        <g transform={`translate(20 ${top + 20})`}>
          <path d={`M-4,0 L-6,${-22 - tier * 8} L6,${-22 - tier * 8} L4,0Z`} fill="#dcc08a" stroke="#00000055" />
          <path d={`M-9,${-22 - tier * 8} L9,${-22 - tier * 8} L6,${-28 - tier * 8} L-6,${-28 - tier * 8}Z`} fill={color} stroke="#00000066" />
          {night && <circle cx={0} cy={-25 - tier * 8} r={1.6} fill="#ffd27a" />}
        </g>
      );
    case "lightning": // spire with a lightning rod
      return (
        <g transform={`translate(4 ${top + 4})`}>
          <path d={`M-4,0 L0,${-14 - tier * 6} L4,0Z`} fill={color} stroke="#00000066" />
          <path className="fx-flash" d={`M0,${-14 - tier * 6} l-3,-5 l4,0 l-3,-6`} stroke="#fff6a8" strokeWidth={1.4} fill="none" />
        </g>
      );
    default:
      return null;
  }
}
