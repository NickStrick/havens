// Simple element emblems (placeholders until the Claude Design art).
const PATHS: Record<string, { d: string; stroke?: boolean }> = {
  water: { d: "M0,-6 C3,-2 5,1 5,3 A5,5 0 0 1 -5,3 C-5,1 -3,-2 0,-6Z" },
  fire: { d: "M0,-7 C3,-3 5,0 4,3 C3,6 -3,6 -4,3 C-5,0 -2,-2 -1,-5 C0,-3 1,-2 0,-7Z" },
  air: { d: "M-5,-2 Q0,-7 5,-2 M-5,2.5 Q0,-2.5 5,2.5 M-3,6 Q0,3 3,6", stroke: true },
  earth: { d: "M-6,4 L-1,-5 L2,0 L3,-2 L6,4Z" },
  metal: { d: "M0,-6 L5,-3 L5,3 L0,6 L-5,3 L-5,-3Z M0,-2 A2,2 0 1 0 0.01,-2Z" },
  lightning: { d: "M1,-7 L-4,1 L0,1 L-1,7 L4,-1 L0,-1Z" },
  sand: { d: "M-6,3 Q-2,-4 2,1 Q4,-1 6,3Z" },
};

export function Emblem({ element, size = 1, color = "#fff" }: { element: string; size?: number; color?: string }) {
  const p = PATHS[element];
  if (!p) return null;
  return (
    <path d={p.d} transform={`scale(${size})`} fill={p.stroke ? "none" : color} fillRule="evenodd"
      stroke={p.stroke ? color : "none"} strokeWidth={p.stroke ? 1.6 : 0} strokeLinecap="round" />
  );
}
