---
title: "Mistral Vibe MCP"
source: https://help.aikido.dev/ai-and-dev-tools/aikido-mcp/mistral-vibe-mcp
section: AI & Dev Tools
fetched: 2026-11-08
generated: ingest_docs
---
# Mistral Vibe MCP

The Aikido MCP Plugin connects Aikido’s security engine to AI coding tools. It automatically scans AI generated code for vulnerabilities and hardcoded secrets as soon as it is created.

AI assistants can review their own output, but that review is not perfect. Aikido adds a reliable and consistent security layer that checks every generated snippet with proven scanning rules.

**Why use Aikido MCP**

* Deterministic, independent security checks on every AI generated snippet before it is committed
* Immediate detection and remediation of vulnerabilities and hardcoded secrets in AI assisted workflows
* Real time feedback, making AI driven development safer by default

For the full list of tools the MCP server exposes, see [Available tools](https://help.aikido.dev/ai-and-dev-tools/aikido-mcp/using-aikido-mcp#available-tools).

## Installation

**Add Aikido MCP server to your Mistral config**

Open or create `~/.vibe/config.toml` and add the following at the bottom of the file.

> [!warning]
> Remove the `mcp_servers = []` line from the default configuration before continuing.

```shellscript
[[mcp_servers]]
name = "aikido"
transport = "stdio"
command = "npx"
args = ["-y", "@aikidosec/mcp@latest"]
```

**Authenticate**

On first use, the MCP server will detect no authentication is set. Ask the agent to run `aikido_login`. It will return a browser link. Follow the link to log in to Aikido. Your token is stored securely once login is complete.

**Add the Aikido rule to Global AGENTS file**

Create the vibe prompts directory if it doesn't exist yet.

```shellscript
mkdir -p ~/.vibe/prompts/
```

Download the Aikido rule and add it to `~/.vibe/prompts/aikido-rule.txt`.

```shellscript
curl -fsSL "https://gist.githubusercontent.com/kidk/aa48cad6db80ba4a38493016aae67712/raw/3644397b7df43423e3da06434491b40bbb79dd47/aikido-rule.txt" \
  -o ~/.vibe/prompts/aikido-rule.txt
```

**Finished**

Aikido MCP is now available in Mistral Vibe.

> [!info]
> Restart Mistral Vibe if it was open.

> [!info]
> For CI/CD or headless setups where browser login is not possible, see [Token Authentication](https://help.aikido.dev/ai-and-dev-tools/aikido-mcp/token-authentication).

For ways to ask your agent to use Aikido, see [Example prompts](https://help.aikido.dev/ai-and-dev-tools/aikido-mcp/using-aikido-mcp#example-prompts).
