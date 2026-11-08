---
title: "Full Workspace Scan in IDE"
source: https://help.aikido.dev/ai-and-dev-tools/ide-plugins-overview/features/full-workspace-scan-in-ide
section: AI & Dev Tools
fetched: 2026-11-08
generated: ingest_docs
---
# Full Workspace Scan in IDE

The Aikido Workspace Scan lets you analyze your entire project at once, so you can quickly review security issues across all files, not just the ones you have open.

<figure><img src="https://help.aikido.dev/_assets/782b32a9bf5c/ide_full_scan.gif" alt=""><figcaption></figcaption></figure>

#### When to Use a Full Scan

Use full scans when:

* You want a security baseline for your repository.
* You’re about to push significant code changes.

For regular development, open/save scans continue to provide instant feedback as you write code.

#### Run a Full Scan

You can start a full scan directly from the Aikido panel in VS Code:

1. Open the Aikido sidebar.
2. Click Workspace Scan at the top of the view.
3. Select whether you want to scan:
   * **Entire workspace** – runs a complete analysis of all source files in your project.
   * **Changed files only** – scans only files that have been modified since your last Git commit.

<figure><img src="https://help.aikido.dev/_assets/151905f44526/Screenshot-2025-11-06-at-10.14.00.png" alt=""><figcaption></figcaption></figure>

During the scan, Aikido checks for:

* Code issues (SAST): insecure coding patterns and misconfigurations.
* Secrets: exposed tokens, passwords, and API keys.

Results appear inline in your editor and in the Scan Results panel, grouped by category. You can hover over each finding for more details or open it in Aikido for deeper triage.

> [!warning]
> The workspace scan does not run automatically. You’ll need to start a new scan manually whenever you want updated results.&#x20;
