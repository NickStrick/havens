"use client";
// Animated bending effects, drawn around the bender's hands. Layered over the
// placeholder or the real sprite, so even still art looks like it's bending.

export function ElementFx({ element, color, strong = false }: { element: string; color: string; strong?: boolean }) {
  const s = strong ? 1.25 : 1;
  switch (element) {
    case "water":
      return (
        <g transform={`translate(10 -30) scale(${s})`}>
          <g className="fx-spin" style={{ animationDuration: "2.4s" }}>
            <ellipse rx={15} ry={6} fill="none" stroke={color} strokeWidth={3} strokeDasharray="22 12" strokeLinecap="round" opacity={0.95} />
          </g>
          <g className="fx-spin-rev" style={{ animationDuration: "3.2s" }}>
            <ellipse rx={10} ry={13} fill="none" stroke="#bfe6ff" strokeWidth={1.6} strokeDasharray="10 14" strokeLinecap="round" />
          </g>
          <circle cx={0} cy={-2} r={3} fill="#cfeeff" className="fx-float" />
        </g>
      );
    case "fire":
      return (
        <g transform={`translate(13 -30) scale(${s})`}>
          {[[-5, 0, 0.9], [0, -3, 1.2], [5, 0, 0.85]].map(([x, y, k], i) => (
            <path key={i} className="fx-flicker" style={{ animationDelay: `${i * 0.15}s` }}
              transform={`translate(${x} ${y}) scale(${k})`}
              d="M0,-12 C4,-6 6,-2 5,2 C4,6 -4,6 -5,2 C-6,-2 -2,-5 -1,-9 C0,-6 1,-5 0,-12Z"
              fill={i === 1 ? "#ffd166" : color} stroke="#7a1d0c" strokeWidth={0.6} />
          ))}
        </g>
      );
    case "air":
      return (
        <g transform={`translate(4 -26) scale(${s})`}>
          <g className="fx-spin" style={{ animationDuration: "1.6s" }}>
            <path d="M-14,0 A14,14 0 0 1 14,0 M-9,4 A9,9 0 0 0 9,4 M-4,-1 A4,4 0 0 1 4,-1"
              fill="none" stroke="#f4f1e6" strokeWidth={2} strokeLinecap="round" opacity={0.9} />
          </g>
          <path d="M-18,8 Q-8,2 2,8 T20,6" fill="none" stroke={color} strokeWidth={1.5} className="fx-drift" />
        </g>
      );
    case "earth":
      return (
        <g transform={`translate(12 -22) scale(${s})`}>
          {[[-9, -6, 5], [2, -14, 6.5], [10, -4, 4]].map(([x, y, r], i) => (
            <polygon key={i} className="fx-float" style={{ animationDelay: `${i * 0.35}s` }}
              points={`${x - r},${y} ${x - r / 3},${y - r} ${x + r},${y - r / 2} ${x + r / 2},${y + r / 1.5} ${x - r / 2},${y + r / 1.2}`}
              fill={i === 1 ? "#8a6a43" : "#6f5536"} stroke="#3b2a17" strokeWidth={0.8} />
          ))}
        </g>
      );
    case "metal":
      return (
        <g transform={`translate(10 -30) scale(${s})`}>
          <g className="fx-spin" style={{ animationDuration: "2.8s" }}>
            {Array.from({ length: 6 }, (_, i) => {
              const a = (i / 6) * Math.PI * 2;
              return <ellipse key={i} cx={Math.cos(a) * 12} cy={Math.sin(a) * 5} rx={2.6} ry={1.6} fill="#d6dbe2" stroke="#5b6270" strokeWidth={0.6} />;
            })}
          </g>
          <path d="M-3,0 L0,-4 L3,0 L0,4Z" fill="#fff" className="fx-flash" />
        </g>
      );
    case "lightning":
      return (
        <g transform={`translate(12 -30) scale(${s})`}>
          <path className="fx-flash" d="M-10,-6 L-3,-2 L-6,2 L3,4 L0,8 L10,6" fill="none" stroke="#fff6a8" strokeWidth={2} strokeLinejoin="bevel" />
          <path className="fx-flash" style={{ animationDelay: "0.22s" }} d="M-8,6 L-2,3 L-4,-2 L6,-4" fill="none" stroke={color} strokeWidth={1.6} />
        </g>
      );
    case "sand":
      return (
        <g transform={`translate(8 -24) scale(${s})`}>
          <g className="fx-spin" style={{ animationDuration: "2s" }}>
            {Array.from({ length: 14 }, (_, i) => {
              const a = i * 0.9, r = 3 + i * 1;
              return <circle key={i} cx={Math.cos(a) * r} cy={Math.sin(a) * r * 0.5 - i * 0.6} r={1.3} fill={i % 3 ? color : "#f3e3b5"} />;
            })}
          </g>
        </g>
      );
    default:
      return null;
  }
}
