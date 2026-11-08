---
title: "Code Quality Repository Scans"
source: https://help.aikido.dev/code-quality/repository-scans
section: Code Quality
fetched: 2026-11-08
generated: ingest_docs
---
# Code Quality Repository Scans

Repository scans show the code quality issues that already exist across your entire repository. Use them to find and prioritize technical debt, then keep the results up to date as your code changes.

Unlike [Code Quality in PRs](https://help.aikido.dev/code-quality/code-quality-setup), which checks only new code before you merge it, repository scans analyze **existing code**. Use both to stop new quality debt from entering your repository while working through what is already there.

## What it does

After Aikido scans a repository, you can:

* See open findings grouped into **maintainability**, **readability**, **performance**, and **reliability**
* Prioritize the categories and files that need attention first
* Track how open findings change over time
* Fix findings yourself, open an [AutoFix](https://help.aikido.dev/autofix-and-remediation/overview-aikido-autofix) pull request, or [create pull requests automatically](https://help.aikido.dev/autofix-and-remediation/automation-and-merging/automatic-creation-of-pull-requests) each day for critical and high findings

<figure><img src="https://help.aikido.dev/_assets/66ed94ebb5e2/code-quality-repositories-tab.png" alt="Code Quality Repositories tab showing category ratings and PR checks for each repository"><figcaption></figcaption></figure>

## Start a scan

To set up a repository scan, see [Start a Repository Scan](https://help.aikido.dev/code-quality/repository-scans/start-a-repository-scan). It explains the prerequisites, yearly credit cost, and how to start tracking a repository.

## Explore your results

The **Repositories** tab gives each scanned repository a rating and finding count for the four quality categories. Open a repository to review the underlying findings, affected files, severity, and estimated fix time.

### See how quality changes

Open the **Trend Over Time** tab to see how the repository's open findings change from week to week. The chart splits findings by severity, so you can tell whether critical, high, medium, or low-priority quality debt is growing or shrinking.

<figure><img src="https://help.aikido.dev/_assets/285240c9886c/code-quality-trend-over-time.png" alt="Trend Over Time chart showing open code quality findings by severity"><figcaption></figcaption></figure>

Use it to measure the impact of cleanup work and spot regressions that need attention.

### Find file hotspots

The **File Scatter Plot** helps you prioritize cleanup work. Files in the top-right are your hotspots: they change frequently and have many open code quality findings.

<figure><img src="https://help.aikido.dev/_assets/c60e22359af4/code-quality-file-scatter-plot-current.png" alt="File scatter plot showing PR activity and open code quality findings per file"><figcaption></figcaption></figure>

> [!info]
> The File Scatter Plot requires both repository scans and [Code Quality in PRs](https://help.aikido.dev/code-quality/code-quality-setup) for the same repository. Repository scans provide the finding count, while PR checks provide the activity data.

For details about ratings, findings, and the scatter plot, see [Understand Repository Scan Results](https://help.aikido.dev/code-quality/repository-scans/understand-repository-scan-results).
