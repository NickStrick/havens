"use client";
import { Emblem } from "./Emblem";

/** Placeholder building: one floor per finished task (max 6), roof and banner in element color. */
export function DistrictSprite({ label, color, element, done, selected }:
  { label: string; color: string; element: string; done: number; selected: boolean }) {
  const floors = Math.min(6, 1 + done);
  const top = -10 - floors * 12;
  return (
    <g>
      <g transform="translate(-4 4) scale(1.35)">
      {/* plaza ring */}
      <ellipse cy={2} rx={34} ry={13} fill="#00000022" />
      {Array.from({ length: floors }, (_, i) => (
        <g key={i}>
          <rect x={-22} y={-10 - (i + 1) * 12} width={44} height={11} rx={2}
            fill={i === 0 ? "#d9cba8" : "#e8dcc0"} stroke="#00000055" />
          {/* windows */}
          {[-13, -3, 7].map((x) => (
            <rect key={x} x={x} y={-10 - (i + 1) * 12 + 3} width={5} height={5} rx={1} fill="#00000030" />
          ))}
        </g>
      ))}
      {/* roof */}
      <path d={`M-26,${top + 1} L0,${top - 14} L26,${top + 1}Z`} fill={color} stroke="#00000066" />
      {/* banner */}
      <g transform={`translate(0 ${top - 24})`}>
        <line x1={0} y1={-10} x2={0} y2={12} stroke="#3b2f22" strokeWidth={1.5} />
        <path d="M0,-10 L16,-6 L0,-1Z" fill={color} stroke="#00000055" />
      </g>
      {/* emblem on the facade */}
      <g transform="translate(0 -16)"><circle r={6.5} fill={color} stroke="#00000055" /><Emblem element={element} size={0.75} /></g>
      {/* later: <image href={`/assets/districts/${agent}.png`} x={-60} y={-110} width={120} /> */}
      </g>
      <text y={34} textAnchor="middle" fontSize={13} fontWeight={600} fill="#fff"
        stroke="#000" strokeWidth={3} paintOrder="stroke"
        style={{ textDecoration: selected ? "underline" : undefined }}>{label}</text>
    </g>
  );
}
