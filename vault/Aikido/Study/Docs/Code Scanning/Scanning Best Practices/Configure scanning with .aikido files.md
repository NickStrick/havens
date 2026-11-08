---
title: "Configure scanning with .aikido files"
source: https://help.aikido.dev/code-scanning/scanning-practices/ignore-via-code-with-aikido-files
section: Code Scanning
fetched: 2026-11-08
generated: ingest_docs
---
# Configure scanning with .aikido files

The `.aikido` file lets you fine-tune how Aikido handles a specific repository. Aikido reads it automatically for every scan.

## Default behavior and customization

Aikido already excludes many irrelevant files and directories by default, including dependency folders, build output, generated files, lock files, binaries, and media. In most repositories, you do not need extra configuration.

Use `.aikido` when you need repository-specific exceptions or behavior. Common use cases include excluding specific paths, ignoring accepted CVEs with a reason, and giving custom context for AutoFix behavior for that repository.

## Setting up the .aikido file <a href="#setting-up-the-aikido-file" id="setting-up-the-aikido-file"></a>

Create the `.aikido` file **within the root of your repository**.

<div data-with-frame="true"><img src="https://help.aikido.dev/_assets/e6d56d03d38b/ucarecdn-9b2a4a59-3404-4012-be7a-dd43a6374104.png" alt="Project directory with .aikido config file." width="375"></div>

### Exclude specific paths or files <a href="#exclude-specific-paths" id="exclude-specific-paths"></a>

The `exclude` key and `paths` subkey allow you to hide specific files and directories from being scanned by Aikido code scanning. This automatically **excludes scans for secrets, SAST issues, lockfiles, code quality, and Deep Review.**

> [!info]
> **Note:** Path matching in `.aikido` is based on **simple string inclusion**.
> 
> If a configured value appears anywhere in the full file path, it will be excluded.\
> Wildcards and regular expressions are **not supported**.

```yaml
exclude:
  paths:
    - src/useless-folder
    - docs/example.js
    - .gen.ts
```

### Ignore CVEs <a href="#ignore-cves" id="ignore-cves"></a>

To ignore CVE's, add them to the `.aikido` yaml file with a reason. The Aikido UI will also show that these specific CVEs are ignored with reference to the `.aikido` file.

```yaml
ignore:
  cves:
    CVE-2020-8203:
      reason: We do not care about this CVE
    CVE-2025-22869:
      reason: We handle this
```

<div data-with-frame="true"><img src="https://help.aikido.dev/_assets/bc98ab828e01/ucarecdn-97662102-7431-4590-b26a-53572f1ae18e.png" alt="High severity CVE downgraded via .aikido  config file." width="375"></div>

## Ignore Alternatives <a href="#excluding-sast-findings-using-comments" id="excluding-sast-findings-using-comments"></a>

**Ignore SAST via code comments**

It's also possible to ignore [SAST findings using comments within your code](https://help.aikido.dev/code-scanning/scanning-practices/excluding-sast-findings-using-comments).

### Other .aikido use cases

The `.aikido` file can also configure repository-specific AutoFix behavior.

Use this to define settings like a custom branch prefix or a single AutoFix PR for the whole repository.

See [AutoFix PR Configuration](https://help.aikido.dev/autofix-and-remediation/configure/autofix-pr-configuration) for the supported `autofix` settings and examples.
