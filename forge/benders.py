from pathlib import Path

VAULT = Path(r"C:\_Agents\havens\vault")

# Power = model, Stamina = turns, Territory = writes
BENDERS = {
    "scholar": {"name": "Mirelle Tidecall", "bends": "water", "role": "Scholar",
                "model": "claude-sonnet-5-5", "turns": 30,
                "writes": ["Aikido/Study/Notes", "Aikido/Practice", "Aikido/Playbook"]},
    # add the rest in Step 6 by uncommenting:
    "coach":   {"name": "Suri Windquill", "bends": "air", "role": "Coach",
                "model": "claude-sonnet-5-5", "turns": 25, "writes": ["Log/Reviews", "Journal/Themes"]},
    # "ledger":  {"name": "Brannoc Ironvein", "bends": "metal", "role": "Scorekeeper",
    #             "model": "claude-sonnet-5-5", "turns": 15, "writes": ["Log/Ledger"]},
    # "foreman": {"name": "Tovan Stoneward", "bends": "earth", "role": "Foreman",
    #             "model": "claude-sonnet-5-5", "turns": 20, "writes": ["Log/Briefs"]},
    # "herald":  {"name": "Kael Emberline", "bends": "fire", "role": "Herald",
    #             "model": "claude-sonnet-5-5", "turns": 20, "writes": ["Content/Outlines"]},
    # "scout":   {"name": "Dara Sandseer", "bends": "sand", "role": "Scout",
    #             "model": "claude-sonnet-5-5", "turns": 20, "writes": ["Content/Research", "Content/Ideas"]},
    # "runner":  {"name": "Zeph Sparkrun", "bends": "lightning", "role": "Runner",
    #             "model": "claude-haiku-5-5", "turns": 10, "writes": ["Inbox"]},
}