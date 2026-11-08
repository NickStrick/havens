---
title: "How Is Fix Time Calculated"
source: https://help.aikido.dev/getting-started/core-functionalities/how-is-fix-time-calculated
section: Getting started
fetched: 2026-11-08
generated: ingest_docs
---
# How Is Fix Time Calculated

### What Is Fix Time?

Fix time is a rough estimate of how long it may take to remediate a security issue. It’s not exact, but it can help you prioritize and plan based on the relative effort required.

### How It’s Calculated

Aikido uses a custom algorithm per issue type. Here’s how it works:

#### 🧬 Dependency (SCA) Issues

Fix time depends on the type of version upgrade:

* Minor upgrade (e.g. 4.5.1 → 4.5.2) → 5–15 minutes
* Major upgrade (e.g. 1.0 → 3.0, or across EOL boundaries) → at least 1 hour

#### 🔍 SAST (Code Issues)

Calculated as: Issue count × static time per issue type

Examples:

* SQL Injection ≈ 30 min/issue
* Secrets ≈ 10 min/issue

#### ☁️ Cloud Issues

Similar logic as SAST: static values per issue type, multiplied by count.

#### 🔑 Secrets

One fixed estimate per issue (e.g., rotate a key = 5–10 minutes).

> [!tip]
> When there's an [Aikido AutoFix ](https://help.aikido.dev/autofix-and-remediation/overview-aikido-autofix)available, the actual fix time will be lower
