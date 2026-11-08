// Scans public/assets/ and writes lib/asset-manifest.json, so dropping a PNG in
// the right folder is all it takes for Ellora to use it. Runs before dev and build.
//
//   public/assets/benders/<agent>/<pose>.png        one still pose (code animates it)
//   public/assets/benders/<agent>/<pose>@8.png      optional 8-frame horizontal strip
//   public/assets/benders/<agent>/portrait.png      side panel portrait
//   public/assets/districts/<agent>-<tier>.png      tier 1, 2 or 3
//   public/assets/terrain/<type>.png                seamless texture: grass, forest, hills, sand, plaza, water, shallows
//   public/assets/emblems/<element>.svg|png
import fs from "node:fs";
import path from "node:path";

const root = path.resolve("public/assets");
const out = { benders: {}, districts: {}, terrain: [], emblems: [] };
const list = (dir) => (fs.existsSync(dir) ? fs.readdirSync(dir) : []);

for (const agent of list(path.join(root, "benders"))) {
  const dir = path.join(root, "benders", agent);
  if (!fs.statSync(dir).isDirectory()) continue;
  out.benders[agent] = {};
  for (const f of list(dir)) {
    const m = f.match(/^([a-z]+)(?:@(\d+))?\.(png|webp)$/i);
    if (m) out.benders[agent][m[1].toLowerCase()] = { src: `/assets/benders/${agent}/${f}`, frames: Number(m[2] ?? 1) };
  }
}
for (const f of list(path.join(root, "districts"))) {
  const m = f.match(/^([a-z]+)-([123])\.(png|webp)$/i);
  if (m) (out.districts[m[1]] ??= {})[m[2]] = `/assets/districts/${f}`;
}
for (const f of list(path.join(root, "terrain"))) {
  const m = f.match(/^([a-z]+)\.(png|webp|jpg)$/i);
  if (m) out.terrain.push({ type: m[1].toLowerCase(), src: `/assets/terrain/${f}` });
}
for (const f of list(path.join(root, "emblems"))) {
  const m = f.match(/^([a-z]+)\.(svg|png)$/i);
  if (m) out.emblems.push({ element: m[1].toLowerCase(), src: `/assets/emblems/${f}` });
}

fs.writeFileSync(path.resolve("lib/asset-manifest.json"), JSON.stringify(out, null, 2) + "\n");
const poses = Object.values(out.benders).reduce((n, b) => n + Object.keys(b).length, 0);
console.log(`[assets] ${poses} bender images, ${Object.keys(out.districts).length} districts, ${out.terrain.length} terrain`);
