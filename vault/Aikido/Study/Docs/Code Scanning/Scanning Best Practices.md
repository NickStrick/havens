---
title: "Scanning Best Practices"
source: https://help.aikido.dev/code-scanning/scanning-practices
section: Code Scanning
fetched: 2026-11-08
generated: ingest_docs
---
# Scanning Best Practices

This section covers how Aikido's static application security testing (SAST), software composition analysis (SCA), and secret detection work under the hood, and how to configure them for your setup.

For automatic SAST noise reduction powered by [Aikido Agent](https://help.aikido.dev/aikido-agent/aikido-agent), see [SAST AutoTriage](https://help.aikido.dev/aikido-agent/sast-autotriage).

## SAST and custom rules

[sast-by-aikido-supported-languages-and-security-focus.md](https://help.aikido.dev/code-scanning/scanning-practices/sast-by-aikido-supported-languages-and-security-focus)

[multifile-vulnerability-tracing.md](https://help.aikido.dev/code-scanning/scanning-practices/multifile-vulnerability-tracing)

[enhancing-security-with-access-control-checks.md](https://help.aikido.dev/code-scanning/scanning-practices/enhancing-security-with-access-control-checks)

[custom-rules.md](https://help.aikido.dev/code-scanning/scanning-practices/custom-rules)

[add-custom-sast-iac-rules.md](https://help.aikido.dev/code-scanning/scanning-practices/add-custom-sast-iac-rules)

[custom-code-context-for-sast-rules.md](https://help.aikido.dev/code-scanning/scanning-practices/custom-code-context-for-sast-rules)

[excluding-sast-findings-using-comments.md](https://help.aikido.dev/code-scanning/scanning-practices/excluding-sast-findings-using-comments)

## Secret detection

[live-secret-detection.md](https://help.aikido.dev/code-scanning/scanning-practices/live-secret-detection)

[denoise-via-secret-keyword-filter.md](https://help.aikido.dev/code-scanning/scanning-practices/denoise-via-secret-keyword-filter)

[ignoring-secrets-via-code-comments.md](https://help.aikido.dev/code-scanning/scanning-practices/ignoring-secrets-via-code-comments)

## Dependency scanning (SCA)

[support-for-dependency-scanning-by-language.md](https://help.aikido.dev/code-scanning/scanning-practices/support-for-dependency-scanning-by-language)

[external-vulnerability-databases-used-in-our-sca-engine.md](https://help.aikido.dev/code-scanning/scanning-practices/external-vulnerability-databases-used-in-our-sca-engine)

[scanning-dev-dependencies-for-cves.md](https://help.aikido.dev/code-scanning/scanning-practices/scanning-dev-dependencies-for-cves)

[custom-vulnerabilities.md](https://help.aikido.dev/code-scanning/scanning-practices/custom-vulnerabilities)

[use-epss-values-to-further-reduce-noise.md](https://help.aikido.dev/code-scanning/miscellaneous/use-epss-values-to-further-reduce-noise)

[malware-detection-in-open-source-dependencies.md](https://help.aikido.dev/code-scanning/scanning-practices/malware-detection-in-open-source-dependencies)

[vulnerability-scanning-on-private-packages-maven.md](https://help.aikido.dev/code-scanning/scanning-practices/vulnerability-scanning-on-private-packages-maven)

[c-c-lockfile-less-scanning.md](https://help.aikido.dev/code-scanning/scanning-practices/c-c-lockfile-less-scanning)

[dependency-scanning-for-bazel.md](https://help.aikido.dev/code-scanning/scanning-practices/dependency-scanning-for-bazel)

[scala-dependency-management-and-scanning-for-buildsbt.md](https://help.aikido.dev/code-scanning/scanning-practices/scala-dependency-management-and-scanning-for-buildsbt)

[java-scala-kotlin-projects-using-gradle-security-scanning-best-practices.md](https://help.aikido.dev/code-scanning/scanning-practices/java-scala-kotlin-projects-using-gradle-security-scanning-best-practices)

[net-projects-security-scanning-best-practices.md](https://help.aikido.dev/code-scanning/scanning-practices/net-projects-security-scanning-best-practices)

[python-projects-security-scanning-best-practices.md](https://help.aikido.dev/code-scanning/scanning-practices/python-projects-security-scanning-best-practices)

## Branches and repositories

[scanned-branches-in-aikido.md](https://help.aikido.dev/code-scanning/miscellaneous/scanned-branches-in-aikido)

[support-for-multi-branch-scanning.md](https://help.aikido.dev/code-scanning/miscellaneous/support-for-multi-branch-scanning)

[support-for-specific-branch-scanning.md](https://help.aikido.dev/code-scanning/miscellaneous/support-for-specific-branch-scanning)

[ensuring-aikido-scans-new-repositories.md](https://help.aikido.dev/code-scanning/miscellaneous/ensuring-aikido-scans-new-repositories)

[split-your-monorepo-per-path.md](https://help.aikido.dev/code-scanning/miscellaneous/split-your-monorepo-per-path)

## Other

[ignore-via-code-with-aikido-files.md](https://help.aikido.dev/code-scanning/scanning-practices/ignore-via-code-with-aikido-files)
