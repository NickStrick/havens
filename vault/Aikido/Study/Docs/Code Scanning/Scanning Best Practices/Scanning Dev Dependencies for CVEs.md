---
title: "Scanning Dev Dependencies for CVEs"
source: https://help.aikido.dev/code-scanning/scanning-practices/scanning-dev-dependencies-for-cves
section: Code Scanning
fetched: 2026-11-08
generated: ingest_docs
---
# Scanning Dev Dependencies for CVEs

> [!warning]
> Aikido **always** scans dev dependencies for malware. The following article relates to CVE scanning and how to enable.

**By default**, Aikido will **not** report vulnerabilities for dependencies that are only installed on the developer machine (devdeps). The assumption here is that they will not ship to production and won't impact the security of your live product.

However, there are some cases in which scanning for dev dependencies might be a valuable addition to the other scans:

* Compliance reasons, including the software that is only available on the developer machines
* SvelteKit: packages are often marked as dev dependency although they make it into production.

We support **JavaScript, Java and Python.**

### Enabling Dev Dependencies Per Repository <a href="#enabling-dev-dependencies-per-repository" id="enabling-dev-dependencies-per-repository"></a>

It is possible to enable dev dependency scanning on per repo basis.

**Step 1.** Contact Aikido to enable the functionality. Quickest way to do this is contact us via chat.

**Step 2.** Go to the detail page of a specific repository and click '**Configure**'.

![Security scan dashboard showing critical PHP issues with statuses and recommended fix times.](https://help.aikido.dev/_assets/9a2a65b55def/ucarecdn-b68f0f11-f4e3-4c53-aa1e-60949980d75e.png)

**Step 3.** Scroll down in the modal to enable dev dependency scanning

![Option to enable or disable scanning of developer dependencies with warning about false positives.](https://help.aikido.dev/_assets/6ae2d7c4d7b6/ucarecdn-4c91b233-fb86-4085-b110-18ebc8a54155.png)

**Step 4.** Trigger a manual rescan to see results immediately, or wait for the next scheduled scan.&#x20;

> [!info]
> Dev dependency findings will also surface on the next push to the default branch via PR gating.
