---
title: "Aikido Expansion Packs"
source: https://help.aikido.dev/ai-and-dev-tools/ide-plugins-overview/features/aikido-expansion-packs
section: AI & Dev Tools
fetched: 2026-11-08
generated: ingest_docs
---
# Aikido Expansion Packs

Aikido Expansion Packs allows you to add extra security tooling that runs on your machine from inside your IDE. You can enable or disable these add-ons from the Expansion Packs screen. Each pack improves a different part of your workflow and helps keep your code and device secure without slowing you down.

<figure><img src="https://help.aikido.dev/_assets/4314ab4d87b4/Screenshot-2025-12-18-at-10.06.22.png" alt=""><figcaption></figcaption></figure>

## How to use

Open the Aikido sidebar, toggle open `Getting Started` if not already and click on the `Configure Aikido Expansion Packs` link.

Alternatively use the [Command Palette](https://code.visualstudio.com/docs/getstarted/userinterface) and run `Aikido: Expansion Packs`

<figure><img src="https://help.aikido.dev/_assets/ac37e0eec6d9/Screenshot-2025-11-27-at-11.54.02.png" alt="" width="375"><figcaption></figcaption></figure>

## Features

### Pre-commit Hook

The secrets pre-commit hook checks your code for hardcoded secrets before you commit. It prevents accidental leaks and runs locally without configuration. Read more on [aikido-secrets-pre-commit-hook.md](https://help.aikido.dev/ai-and-dev-tools/aikido-secrets-pre-commit-hook "mention")

### Safe Chain

Safe Chain protects your environment from malicious packages. It adds a safety layer around your package manager and prevents installation of known malware. Read more on [aikido-malware-scanning.md](https://help.aikido.dev/code-scanning/aikido-malware-scanning "mention")

### Aikido MCP

The Aikido MCP Server brings Aikido's security scanning capabilities directly into your AI coding workflow. Read more on [aikido-mcp](https://help.aikido.dev/ai-and-dev-tools/aikido-mcp "mention")
