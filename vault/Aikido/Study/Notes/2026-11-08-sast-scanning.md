---
date: 2026-11-08
topic: SAST scanning across Aikido, and how it differs from traditional SAST
author: Mirelle Tidecall (Scholar)
sources:
  - https://help.aikido.dev/code-scanning/scanning-practices/sast-by-aikido-supported-languages-and-security-focus
  - https://help.aikido.dev/code-scanning/scanning-practices/multifile-vulnerability-tracing
  - https://help.aikido.dev/getting-started/reachability-analysis/introduction-to-reachability-analysis
  - https://help.aikido.dev/aikido-agent/sast-autotriage
  - https://help.aikido.dev/code-scanning/scanning-practices/custom-code-context-for-sast-rules
  - https://help.aikido.dev/code-scanning/scanning-practices/add-custom-sast-iac-rules
  - https://help.aikido.dev/autofix-and-remediation/scope/ai-autofix-for-sast-and-iac-issues
  - https://help.aikido.dev/pr-and-release-gating/aikido-ci-gating-functionality
  - https://help.aikido.dev/ai-and-dev-tools/ide-plugins-overview/features/real-time-code-scanning-in-ide
  - https://help.aikido.dev/getting-started/which-aikido-product-should-i-use
  - https://help.aikido.dev/getting-started/setting-up-your-account/aikido-never-stores-your-code
  - https://help.aikido.dev/workflows-and-guides/migrating-from-sonarqube-to-aikido
  - https://help.aikido.dev/code-scanning/scanning-practices/excluding-sast-findings-using-comments
---
# SAST in Aikido, and how it differs from traditional SAST

## Warm-up (answer out loud before reading on)
1. In your own words: what does SAST look at, and what does it need in order to run?
2. If a scanner flags a SQL injection in a function that no request can ever reach, is that a true positive?
3. Your interview note says "SAST is just the net." What do you think comes after the net?

## Where your notes already land well
Your net-and-fish picture is a good start. The docs back the idea that the scan is only the first step and that triage decides what matters. Two gentle corrections are below.

> [!warning] Check these against the docs
> - **"AI based detection" in SAST.** The docs describe AutoTriage as *not a scanner*. It sits downstream of the scan and judges exploitability and severity. Detection comes from rules and engines. AI comes in at triage (and in separate products, see below). Source: [SAST AutoTriage](https://help.aikido.dev/aikido-agent/sast-autotriage).
> - **"85% noise reduction" and "PR scans under 2 minutes".** I could not find either number in the docs I have. The docs say "significant" or "substantially" reduce noise. Before you say a number on a call, look it up in Aikido's internal sales or marketing material, or leave it out.
> - Small note: the SonarQube migration page mentions `NOAIKIDO` comments, but the dedicated page shows `// nosec`. Look up which is current before demoing suppression.

## 1. The concept in plain words
SAST reads your source code without running it. It looks for dangerous patterns, like user input flowing into a database query. Aikido's version also asks a second question: could an attacker actually reach this? That second question is the main difference from a traditional scanner. Source: [SAST/IaC: Supported Languages and Security Focus](https://help.aikido.dev/code-scanning/scanning-practices/sast-by-aikido-supported-languages-and-security-focus).

## 2. The technical detail

### Stage 1: Detect
- **Engine.** Aikido's own engine plus Opengrep for all the listed languages. IaC uses Aikido's engine plus Checkov. Secrets use Aikido's engine with liveness checks plus Gitleaks. The docs say the open-source engines are "significantly customized and fine-tuned".
- **Language versions.** Aikido supports all versions by default.
- **Taint analysis.** It follows untrusted input (a "source") to a dangerous function (a "sink") and checks whether it is sanitized on the way.
  - **Across files:** JavaScript, TypeScript, PHP, .NET/C#, Java, Rust, Go, Ruby, Python. The language table also lists Scala, C/C++ and Visual Basic as cross-file, but the dedicated tracing page lists them as within-file. The two pages disagree, so look up the current state before you promise it.
  - **Within a file only:** Swift, Android, Kotlin, Dart, Elixir, and others per the table.
- Open a finding and click **View code analysis** to see the source and a call graph. Source: [Cross-File Vulnerability Tracing](https://help.aikido.dev/code-scanning/scanning-practices/multifile-vulnerability-tracing).

### Stage 2: Prioritize with a custom risk model
Aikido's SAST is built on a custom risk categorisation model:
- Non-security findings (opinionated style rules) are removed.
- Findings in repos the user marked sensitive are upgraded.
- Findings in non-production files, such as unit tests, may be downgraded.

### Stage 3: Reachability
Aikido builds a graph of modules, functions and data flows. Entry points (HTTP handlers, CLI commands, background jobs) are checked for a path to the sink. For SAST this is *function-level* reachability: can untrusted input flow into a dangerous sink?
- No reachable path means the finding is removed or heavily downgraded.
- If the call graph is unclear (reflection, dynamic imports, metaprogramming), Aikido uses a *conservative under-approximation*. It only calls code unreachable when confident, otherwise it keeps the finding or lowers its severity.

Source: [Introduction to Reachability Analysis](https://help.aikido.dev/getting-started/reachability-analysis/introduction-to-reachability-analysis).

### Stage 4: AutoTriage (Aikido Agent)
- Runs after reachability and rules out exploitability where it can. Checks include sanitization, trusted origins, and build/test code versus production.
- If exploitability is not ruled out, it adjusts the 0-100 Aikido severity score up or down. The docs' examples: a SQL injection from an already validated database source can go down, and a NoSQL injection on a login endpoint can go up.
- Most issues are triaged with Aikido-defined rules. Complex cases use reasoning models over a code snippet built from the call tree. The docs cite Aikido's internal evaluations: roughly twice as many false positives caught on those complex cases versus non-reasoning approaches. Say "per Aikido's internal evaluations".
- True positives can go to **AutoFix**.

Source: [SAST AutoTriage](https://help.aikido.dev/aikido-agent/sast-autotriage).

### Stage 5: Fix
AutoFix previews a patch and can open a PR in your SCM, or apply it in VS Code. Simple fixes are typically under 5 seconds and complex ones up to 30 seconds. Fixes carry High, Medium or Low confidence, and the docs recommend manual review. Source: [AutoFix for SAST and IaC Issues](https://help.aikido.dev/autofix-and-remediation/scope/ai-autofix-for-sast-and-iac-issues).

### Where SAST runs across Aikido
| Surface | What happens | Source |
|---|---|---|
| Connected repos | Scans on connected repositories, with daily rescans and push/PR activity once the SCM is connected | [Migrating from SonarQube](https://help.aikido.dev/workflows-and-guides/migrating-from-sonarqube-to-aikido) |
| PR gating | Scans the branch **diff**, separates fixed issues from new ones, fails on a severity threshold (or Always Pass). 1-click setup does not use your CI minutes | [PR Gating Overview](https://help.aikido.dev/pr-and-release-gating/aikido-ci-gating-functionality) |
| Release gating / CLI | Runs through the Aikido CLI in your pipeline | same page |
| IDE plugin | Quick scan on open/save, runs locally, same analysis engine as the platform. IaC is not in Visual Studio or Eclipse | [Real-time scanning in IDE](https://help.aikido.dev/ai-and-dev-tools/ide-plugins-overview/features/real-time-code-scanning-in-ide) |
| Local Scanner | For customers who want code to stay on-prem. Results still appear in the platform | [Never Stores Your Code](https://help.aikido.dev/getting-started/setting-up-your-account/aikido-never-stores-your-code) |

Data handling: SAST needs a git clone. Aikido clones into a fresh container per repo and wipes it after analysis. Exceptions: AutoFix diffs, and the calltree for each AutoTriaged SAST finding is kept for up to 2 weeks.

### Tuning (two different levers)
- **Custom SAST rules** (Opengrep) *expand detection*. Not on by default, so contact Aikido to enable. Source: [Add Custom SAST & IaC Rules](https://help.aikido.dev/code-scanning/scanning-practices/add-custom-sast-iac-rules).
- **Custom Code Context** *refines interpretation* of an existing rule, in plain language (for example, "values from `buildSafeQuery()` are trusted"). It does not change what the rule detects. It needs a manual rescan. Source: [Custom Code Context](https://help.aikido.dev/code-scanning/scanning-practices/custom-code-context-for-sast-rules).

### What SAST will not catch, and what covers it
SAST will not catch a logic or authorization bug that does not look like a known pattern. Aikido points to **Deep Review** (impact of a PR, security and quality, with context beyond the diff) and **AI Code Analysis** (existing source). Example from the docs: a PR that lets users see each other's orders. Source: [Which Aikido product for what?](https://help.aikido.dev/getting-started/which-aikido-product-should-i-use).

## 3. How it differs from traditional SAST
The docs do not give a full competitor teardown, so I only list contrasts the docs support. Anything beyond this, look up first.

| Topic | Traditional pattern-matching scanner (as the docs frame it) | Aikido SAST |
|---|---|---|
| Alert logic | Flags the pattern wherever it appears | Adds reachability, so no path from entry point to sink means removed or downgraded |
| Noise from non-security rules | Style and quality rules mixed in | Non-security findings removed. Quality lives in Code Quality |
| Test and non-prod code | Treated like production | May be downgraded |
| Severity | A property of the rule | Rule plus context (sensitive repo, data sensitivity, sanitization, trusted source) |
| Review of "is this real?" | Manual | AutoTriage judges exploitability, with an explanation via Ask Aikido |
| Next step | A ticket | AutoFix preview or PR |
| Tuning | Rule profiles | Custom rules **and** plain-language Code Context |

**Look up before claiming:** specific competitor behaviour (Sonar, Snyk, Semgrep and others). The only competitor source in your vault is the SonarQube migration guide. It says Security Hotspots are not a one-to-one mapping and that Aikido "removes non-security styling noise from SAST".

## 4. Demo: 60 seconds, what to click
1. **Repositories > SAST checks** ("View SAST Rules"): "Here are the active rules per language."
2. Open one **SAST issue** from the feed and click **View code analysis**. Show the source and call graph. Say: "It traced untrusted input across files to the sink."
3. Point at the AutoTriage result in the Recommendation panel, then click **Ask Aikido**: "Ask why it was flagged."
4. Show **AutoFix**: preview the patch, then **Create PR**.
5. Open the **PR gating** settings and show the failure threshold.

## 5. 60-second explanation for a call (draft, say it in your own voice)
"SAST reads your code without running it and looks for dangerous patterns, like user input reaching a database query. Most scanners stop there, so developers get a long list and have to work out which ones are real. Aikido does the extra work. It traces the input across files to the risky spot. It checks whether any real entry point can reach it, and drops findings that cannot. It removes style-only noise and downgrades test code. Then an AI triage step decides how exploitable each remaining issue is, and for real ones AutoFix proposes a patch as a pull request. That runs in the IDE, on every PR, and across your connected repos. What developers see is a short, ranked list with a fix attached."

Caveat to say if pressed: reachability is conservative, so when the call graph is unclear, Aikido keeps the finding rather than hiding it.

## 6. Analogy for a non-technical buyer
A traditional scanner is a smoke detector that beeps at every toaster. Aikido is a detector that checks whether the toaster is actually plugged in next to something flammable, then hands you a fire extinguisher.

(Your net-and-fish analogy works too for technical buyers. Add: "after the net, a sorter decides which fish are worth keeping.")

## 7. Quiz (try each aloud first)
1. What is taint analysis, and what are a "source" and a "sink"?
2. Name three things Aikido does to a raw SAST finding before a developer sees it.
3. Is AutoTriage a scanner? What does it decide?
4. Custom SAST rule or Custom Code Context: which one would you use when your team has an internal `safeRedirect()` wrapper that triggers false positives?
5. A PR lets users see each other's orders. Why might SAST miss it, and which Aikido product is meant to catch it?

> [!question]- Answers
> 1. Following untrusted input (a "source", like a web request) through the program to see if it reaches a dangerous operation (a "sink", like SQL or command execution) without being sanitized. Aikido does this within files and, for many languages, across files.
> 2. Any three: removes non-security findings, upgrades findings in sensitive repos, downgrades non-production files, filters out unreachable paths (reachability), AutoTriage rules out exploitability or adjusts priority.
> 3. No. It sits downstream of scans and determines exploitability and severity. It mostly uses Aikido-defined rules, and reasoning models for complex cases.
> 4. Custom Code Context. It refines how an existing rule is interpreted. Custom SAST rules are for detecting new patterns.
> 5. It is an authorization or logic bug that does not look like a known dangerous pattern. Deep Review is meant to read the change in context. AI Code Analysis covers existing source.

## 8. Spaced repetition
No earlier lessons exist yet (this is lesson 1), so nothing to re-ask. The next lesson will re-ask 2 questions from this one tomorrow, then again on days 3 and 7.

## 9. Open items for you to look up
- Where "85% noise reduction" and "under 2 minutes" come from, and whether you can say them to customers.
- Whether C/C++, Scala and Visual Basic taint tracking is cross-file or within-file today.
- Whether the current suppression comment is `// nosec` or `NOAIKIDO`.
- Any competitor-specific claims (Sonar, Snyk, Semgrep and others). Nothing in the vault covers them beyond the Sonar migration guide.

## 10. Next lesson (suggested)
Reachability in depth (SCA versus SAST), or Deep Review versus SAST. Which would help your next call most?
