---
title: "AI Code Analysis"
source: https://help.aikido.dev/ai-code-analysis/ai-code-analysis
section: Ai Code Analysis
fetched: 2026-11-08
generated: ingest_docs
---
# AI Code Analysis

AI Code Analysis uses agents to find security, data-exposure, cloud, and smart-contract risks that need context across files, services, repositories, or a connected cloud account.

Choose the audit type that matches your goal:

- **Code Security Audit**: AI SAST: Find real attack paths and validated security risks in code with AI.
- **Data Exposure Audit**: DSPM: Find sensitive data flows and data exposure risks in code with AI.
- **Cloud Security Audit**: CSPM: Audit connected clouds for misconfigurations and correlate them with optional IaC.
- **Smart Contract Audit**: Blockchain: Find exploitable vulnerabilities in on-chain smart contracts with AI.

## How it works

Code Security, Data Exposure, and Smart Contract audits read connected repositories. They don't need a staging environment or a live target. Data Exposure Audit doesn't access your data stores.

Cloud Security Audit reads the inventory of clouds you already connected. You can add infrastructure as code (IaC) repositories so a finding can point at the template that defines a live setting.

Findings include evidence and remediation guidance.

* **Agentic analysis:** Aikido uses multiple agents to investigate the selected code or cloud inventory, follow relevant context, and validate potential findings.
* **Repository instructions:** Commit `AGENTS.md` at the repository root for architecture, trust boundaries, and accepted risks. Aikido also reads `CLAUDE.md`, `.claude/`, and `.cursor/`. See [Guide Agents with Repository Files](https://help.aikido.dev/ai-and-dev-tools/guide-an-audit-with-repository-files).
* **Models and harnesses matched to the task:** Aikido selects the models and analysis harness that best fit each stage of the analysis, balancing the depth of analysis with the resources it uses.
* **Confirmed cost before you start:** The pricing step shows the credit total before you launch. **Configure** can change that total before you start. Once you click **Start Audit**, the total is fixed for the analysis.

For testing a running application, use [Aikido Pentest](https://help.aikido.dev/pentests/aikido-pentest). For fast, continuous checks of known vulnerability patterns, use [SAST](https://help.aikido.dev/code-scanning/scanning-practices/sast-by-aikido-supported-languages-and-security-focus). For continuous rule-based cloud checks, use [Cloud Scanning](https://help.aikido.dev/cloud-scanning/cloud-scanning-overview).
