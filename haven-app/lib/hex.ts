// Pointy-top hexes, axial coordinates (q, r). TILT squashes the grid vertically
// for the Civ-style angled look without any 3D.
export const HEX = 62; // hex radius in px
export const TILT = 0.72; // vertical squash: lower = flatter angle
const SQ3 = Math.sqrt(3);

export const hexToPixel = (q: number, r: number) => ({
  x: HEX * SQ3 * (q + r / 2),
  y: HEX * 1.5 * r * TILT,
});

export const hexPoints = (cx: number, cy: number, s = HEX) =>
  Array.from({ length: 6 }, (_, i) => {
    const a = (Math.PI / 180) * (60 * i - 30);
    return `${(cx + s * Math.cos(a)).toFixed(1)},${(cy + s * Math.sin(a) * TILT).toFixed(1)}`;
  }).join(" ");

// every hex within `radius` steps of the center
export const hexDisk = (radius: number) => {
  const out: { q: number; r: number }[] = [];
  for (let q = -radius; q <= radius; q++)
    for (let r = Math.max(-radius, -q - radius); r <= Math.min(radius, -q + radius); r++)
      out.push({ q, r });
  return out;
};

export const ring = (q: number, r: number) => Math.max(Math.abs(q), Math.abs(r), Math.abs(-q - r));

/** Deterministic 0..1 noise per tile, so terrain is the same on every render. */
export const tileNoise = (q: number, r: number) => {
  const s = Math.sin(q * 127.1 + r * 311.7) * 43758.5453;
  return s - Math.floor(s);
};
