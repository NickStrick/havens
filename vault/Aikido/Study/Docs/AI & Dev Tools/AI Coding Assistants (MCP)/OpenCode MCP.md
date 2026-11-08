---
title: "OpenCode MCP"
source: https://help.aikido.dev/ai-and-dev-tools/aikido-mcp/opencode-mcp
section: AI & Dev Tools
fetched: 2026-11-08
generated: ingest_docs
---
# OpenCode MCP

The Aikido MCP Plugin connects Aikido’s security engine to AI coding tools. It automatically scans AI generated code for vulnerabilities and hardcoded secrets as soon as it is created.

AI assistants can review their own output, but that review is not perfect. Aikido adds a reliable and consistent security layer that checks every generated snippet with proven scanning rules.

**Why use Aikido MCP**

* Deterministic, independent security checks on every AI generated snippet before it is committed
* Immediate detection and remediation of vulnerabilities and hardcoded secrets in AI assisted workflows
* Real time feedback, making AI driven development safer by default

For the full list of tools the MCP server exposes, see [Available tools](https://help.aikido.dev/ai-and-dev-tools/aikido-mcp/using-aikido-mcp#available-tools).

## Installation

**Add Aikido MCP server to your OpenCode config**

Open or create `~/.config/opencode/opencode.json` and add the following to the file under `mcp`

```shellscript
{
  "$schema": "https://opencode.ai/config.json",
  "mcp": {
    "aikido": {
      "type": "local",
      "command": ["npx", "-y", "@aikidosec/mcp@latest"],
      "enabled": true
    }
  }
}
```

**Authenticate**

On first use, the MCP server will detect no authentication is set. Ask the agent to run `aikido_login`. It will return a browser link. Follow the link to log in to Aikido. Your token is stored securely once login is complete.

**Add the Aikido rule to Global AGENTS file**

Create the vibe prompts directory if it doesn't exist yet.

```shellscript
mkdir -p ~/.config/opencode/skills/aikido/
```

Download the Aikido rule and add it to `~/.config/opencode/skills/aikido/SKILL.md`.

```shellscript
curl -fsSL "https://gist.githubusercontent.com/kidk/1d2c1e754d5a5ddd05c9966d2507ae42/raw/ea8183c0ae1af5ec9bcb8b93275145adbe936c20/aikido-skill.txt" \
  -o ~/.config/opencode/skills/aikido/SKILL.md
```

**Finished**

Aikido MCP is now available in OpenCode.

> [!info]
> Restart OpenCode if it was open.

> [!info]
> For CI/CD or headless setups where browser login is not possible, see [Token Authentication](https://help.aikido.dev/ai-and-dev-tools/aikido-mcp/token-authentication).

For ways to ask your agent to use Aikido, see [Example prompts](https://help.aikido.dev/ai-and-dev-tools/aikido-mcp/using-aikido-mcp#example-prompts).
