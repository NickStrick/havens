# Ellora art brief (for Claude Design)

How to use this file: paste the **Style block** at the top of every Claude Design
request, then one prompt from below. Export each result as a PNG with a transparent
background, name it exactly as shown, and drop it in the folder listed. Restart
`npm run dev` (or run `npm run assets`) and Ellora picks it up. Anything missing
keeps its placeholder, so you can add art one piece at a time.

## How Ellora animates (read this first)

Each character pose is **one still image**. The code adds the life: benders walk
between spots, bob, sway, float while meditating, and the bending effects (water
ribbons, flames, floating rocks, sparks) are animated on top of the pose. So you
only need clean, consistent stills.

If Claude Design can keep a character identical across frames, you can also export
a horizontal strip of frames and name it `pose@8.png` (8 frames). Optional.

## Style block (paste at the top of every request)

```
Art style for "Ellora", a small fantasy town in a strategy game.
- Semi-realistic painted miniature look, like a premium strategy game. Soft painterly
  shading, crisp readable silhouettes, warm late-afternoon light.
- Camera: three-quarter top-down view, looking down at about 45 degrees, the same
  angle for every asset. Light comes from the top-left; shadows fall bottom-right.
- Transparent background. No ground tile, no text, no logos, no frame.
- A soft contact shadow under feet or buildings only.
- Must read clearly when shown small (64 px tall for people, 120 px for buildings).
- Original designs only. Not based on any existing film, show, game or real person.
```

## Original characters only (important for a public build)

Keep the benders your own. Never use: arrow tattoos, nation insignia or emblems from
any franchise, shaved monk heads with markings, topknot crowns, sky bison or flying
lemurs, or any copied outfit. Don't name a franchise in prompts. The benders are
fictional people, not likenesses of anyone real.

## The seven benders

Element colors (keep these consistent): water #2f74c9, air #e3a72f, metal #8a9099,
earth #6b8f3a, fire #d4442a, sand #c2a25e, lightning #8d5ad6.

| Key | Name | Look |
|---|---|---|
| scholar | Mirelle Tidecall (water, Scholar) | Woman, early 30s, dark brown skin, close-cropped curls, round reading glasses. Long teal scholar's coat with sand-colored trim, sleeves rolled, leather satchel of scrolls. Calm, curious. Water bends as a clear ribbon that circles her hands. |
| coach | Suri Windquill (air, Coach) | Woman, mid 40s, warm brown skin, long silver-streaked braid. Layered cream and saffron wrap with a wide sash, light sandals. Serene posture. Air shows as pale swirl lines and a few drifting leaves. |
| ledger | Brannoc Ironvein (metal, Scorekeeper) | Man, mid 50s, fair skin, broad build, short grey beard, brass spectacles. Charcoal tunic under a leather apron, ledger book tucked under one arm. Metal shows as a slow ring of iron coins or filings orbiting a hand. |
| foreman | Tovan Stoneward (earth, Foreman) | Man, mid 30s, tan skin, stocky, short black hair. Moss-green work jacket, stone-plated forearm guards, slate clipboard. Steady stance. Earth shows as chunks of rock lifting from the ground. |
| herald | Kael Emberline (fire, Herald) | Man, mid 20s, olive skin, short wavy dark hair, expressive. Crimson herald's cloak over a cream shirt, rolled proclamation scroll. Fire shows as a bright ribbon of flame from one palm. |
| scout | Dara Sandseer (sand, Scout) | Woman, late 20s, light brown skin, ochre headwrap. Layered sand-colored travel clothes, brass spyglass at the hip. Watchful. Sand shows as a spiraling stream of grains. |
| runner | Zeph Sparkrun (lightning, Runner) | Young adult, around 20, light skin, black hair with violet tips, lean. Light violet courier jacket, satchel of letters, running shoes. Lightning shows as small white-violet arcs between the fingers. |

### Step 1: a character sheet for each bender (do these first)

Lock each character's look before making poses. Keep the sheet for reference and
attach it to every later request for that bender.

```
Character sheet for <NAME>, <LOOK from the table>.
Full body, front three-quarter view, standing relaxed, plus a close-up of the face.
Same art style as described. Transparent background.
```

Save the face close-up, cropped square, as the portrait:
`haven-app/public/assets/benders/<key>/portrait.png` (512 × 512).

### Step 2: poses

Size: **256 × 256 PNG**, character about 200 px tall, **feet at the bottom center**
(about 16 px above the bottom edge), facing **right**. The code mirrors it to face left.
Save as `haven-app/public/assets/benders/<key>/<pose>.png`.

Prompt template:
```
<NAME> from the attached character sheet, same face, outfit and colors.
Pose: <POSE DESCRIPTION>. Full body, facing right in three-quarter view,
feet at the bottom center. Transparent background.
```

| File | Pose description | Who |
|---|---|---|
| `stand.png` | standing relaxed, weight on one leg | everyone (**phase 1**) |
| `walk.png` | mid-stride walking, arms swinging | everyone (**phase 1**) |
| `work.png` | actively bending their element with both hands, focused, the element clearly visible and strong | everyone (**phase 1**) |
| `practice.png` | playfully practicing their element with one hand, a small amount of it in the air | everyone |
| `celebrate.png` | arms raised, happy, just finished something | everyone |
| `slump.png` | shoulders down, head lowered, frustrated | everyone |
| `sleep.png` | lying on a bedroll, asleep, seen from the same angle | everyone |
| `talk.png` | mid-conversation, one hand gesturing, friendly | everyone |
| `read.png` | standing or sitting on steps reading an open book or ledger | scholar, ledger |
| `meditate.png` | sitting cross-legged, floating slightly above the ground, eyes closed, a gentle swirl of air | coach |
| `guard.png` | standing watch holding a tall staff, alert | foreman, scout |

Where each pose shows up on the map:

| Bender | Idle routine (day) | Night |
|---|---|---|
| Mirelle | reads on the library steps, shapes water at the shore | sleeps |
| Suri | meditates on the temple rock, practices air | sleeps |
| Brannoc | checks the ledgers, works iron in the yard | sleeps |
| Tovan | guards the north gate, raises stone in the hills | **keeps guard** |
| Kael | rehearses in the square, juggles flame | sleeps |
| Dara | watches from the dunes, spins sand | **keeps guard** |
| Zeph | runs errands around town, throws sparks | sleeps |

Any two idle benders also meet in the market square to talk.

## Buildings

Size: **512 × 512 PNG**, building centered, base about 60 px above the bottom edge,
same 45° view and top-left light. Three tiers per district: the town grows as
benders finish tasks (tier 2 at 5 tasks, tier 3 at 20).
Save as `haven-app/public/assets/districts/<key>-<tier>.png`.

Prompt template:
```
A fantasy town building: <DESCRIPTION>, tier <N> of 3
(<tier 1: a modest single building | tier 2: larger, two storeys with an annex |
tier 3: a grand landmark with towers and details>). Accent color <HEX>.
Same art style, three-quarter top-down view, light from the top-left.
Transparent background, no ground tile.
```

| Key | District | Description |
|---|---|---|
| scholar | Tide Library | A domed stone library with teal tiles, water channels and a small fountain out front, scroll shelves visible through arched windows |
| coach | Wind Temple | An open hilltop pavilion with stacked, upturned saffron roofs, wind chimes and long fluttering banners |
| ledger | Hall of Records | A solid stone and iron hall with columns, a copper-green roof and a round vault door |
| foreman | Town Hall | A timber and stone hall with a clock tower and a notice board by the door |
| herald | Herald's Square | A small plaza building with a raised speaking stage, a large brazier and crimson banners |
| scout | Dune Watch | A sandstone watchtower with canvas awnings and a spyglass platform at the top |
| runner | Post House | A courier station with a pigeon loft, mail sacks and a tall violet spire with a lightning rod |

## Terrain (optional)

Seamless square textures, 256 × 256, viewed from above with the same light.
Save as `haven-app/public/assets/terrain/<type>.png`:
`grass`, `forest` (grass with leaf litter, no trees), `hills` (rocky grass),
`sand`, `plaza` (worn cobblestone), `shallows`, `water`.

```
Seamless tiling texture of <TYPE> for a strategy game map, seen from above,
soft painted style, light from the top-left, no objects, no shadows from objects.
```

## Phases

| Phase | What | Count |
|---|---|---|
| 1 | Character sheets + portraits, `stand`, `walk`, `work` for all 7, tier 1 of every building | 7 sheets, 7 portraits, 21 poses, 7 buildings |
| 2 | The rest of the poses, tiers 2 and 3 | about 45 poses, 14 buildings |
| 3 | Terrain textures, optional frame strips | 7 textures |

Phase 1 alone replaces every placeholder you see on the map most of the time.

## Checklist for every image

- Same camera angle and top-left light as the rest.
- Transparent background, nothing cropped, feet or base where specified.
- Character matches their sheet (face, hair, colors).
- Named exactly as listed, in the right folder.
