# Ellora: project context for Claude Code

## What this is
Nick's personal AI agent system. Python agents ("benders") read and write an
Obsidian vault, a FastAPI server ("the forge") runs them on schedules and
streams events, and a Next.js app shows a scoreboard dashboard plus Ellora,
a 2D hex-map town where each bender has a district.

Full step-by-step build guide: docs/BUILD_GUIDE.md (exported from the Claude
doc "Seven Havens Agent Command Center: Build Guide"). Follow its steps and
code unless this file says otherwise.

## Purpose (why decisions are made the way they are)
1. Make Nick the best Solutions Engineer at Aikido Security: study, practice,
   daily logging, reflection, and numbers for salary talks and his resume.
2. Build his personal brand on YouTube (The Shifu Builder): daily videos on
   skill acquisition, communication and technical leadership.
Books and his business (Stricker Digital) are parked in vault/Someday/.

## Machine and paths
- Windows, PowerShell 7 (not Windows PowerShell 5.1). No WSL.
- Project root: C:\_Agents\havens
  - vault\      Obsidian vault (agents' memory and task queue)
  - forge\      Python agent server (uv project, Python 3.12)
  - haven-app\  Next.js app (dashboard + /ellora)
- forge\benders.py has VAULT = Path(r"C:\_Agents\havens\vault")
- API key lives in forge\.env (gitignored). Never print it or commit it.
- The project vault is separate from Nick's personal vault on purpose.
  Never point any agent at C:\Users\stric\Documents\Obsidian Vault.

## Hard rules
- NO customer data, ever. No company names, contacts, call notes,
  transcripts, findings or calendar titles in the vault or in prompts.
  Nick logs counts, self-scores and generic lessons only. No calendar
  integration for this reason.
- Code counts, agents write. All numbers (metrics, YouTube stats, outlier
  scores) are computed in Python and passed to agents as JSON with
  "use as given, never recount".
- Agents never edit Journal/ entries. Suri only writes Journal/Themes/.
- Each bender writes only to its own folders (its "territory" in BENDERS).
  Planned: a PreToolUse hook that enforces this in code.
- The vault is in git. Commit before agent runs so changes can be diffed
  and reverted.

## Decisions already made (don't revisit unless Nick asks)
- Build our own Next.js app. Bot Crossing (github.com/Station-Sciences/
  bot-crossing, MIT) is only a design reference. Don't copy its crew
  character (reserved by its trademark policy).
- Ellora v1 is 2D: one fixed view, SVG hex grid in a Civ VI / classic
  StarCraft style. No camera controls, no game engine. 3D is version 2.0.
- Art comes later from Claude Design as transparent PNGs in
  haven-app/public/assets/ (same camera angle and light for every asset).
  Placeholders until then. Bender designs are original, element-inspired,
  never copied from the Avatar franchise.
- Story assets live in vault/Stories/ (Story Bank/Star, Full, Raw Stories;
  Origin/Master Origin). There is no separate Story Bank.md.
- Anthropic API is prepaid ($20 credits, auto-reload off) as the spend cap.

## The brigade (keys used in code)
| key | name | bends | job |
| scholar | Mirelle Tidecall | water | daily Aikido/AppSec lessons, quizzes, drills (build first) |
| coach | Suri Windquill | air | nightly reflection coaching, Sunday Rep Review, journal themes |
| ledger | Brannoc Ironvein | metal | monthly Impact Ledger, resume bullets, negotiation brief |
| foreman | Tovan Stoneward | earth | morning brief from Nick's own plan |
| herald | Kael Emberline | fire | tomorrow's video outline |
| scout | Dara Sandseer | sand | weekly YouTube research via forge/scout.py |
| runner | Zeph Sparkrun | lightning | inbox triage (Haiku) |
Models: claude-sonnet-5-5 by default, claude-haiku-5-5 for runner.

## Current status (Nov 8, 2026)
- Done: Step 0 installs, vault folder structure, Stories imported,
  forge\benders.py created. Context files added: vault/Content/Brand.md,
  Content Plan.md, Someday/Stricker Digital.md, Agents/Roles/herald.md,
  scout.md, plus forge/scout.py and forge/creators.yaml.
- Next: finish Step 2 (Mirelle's role file, run_queue.py, first run).
- Open items:
  - Nick's Aikido interview notes still need turning into vault/Aikido/Study/.
  - The Alexanderthecreate YouTube handle in creators.yaml is unconfirmed.
  - The claude_agent_sdk usage in the guide (query, ClaudeAgentOptions,
    message classes, total_cost_usd) was written from memory. Check it
    against the installed package version and fix any mismatches.

## How to work with Nick
- Senior full-stack dev (was dev for 6 years, now solutions engineer at Aikido Security) (React, Next.js, TS, Node, Postgres, AWS), new to
  agents, Python tooling and Windows dev setup. Give step-by-step
  instructions with exact PowerShell commands and full file contents.
- Busy schedule: keep steps small and weekend-sized.
- Writing rules for any content he'll publish: short declarative
  sentences, no em dashes, no "genuinely"/"truly", no "it's not just",
  no "not X but Y". Outlines, never full scripts.
