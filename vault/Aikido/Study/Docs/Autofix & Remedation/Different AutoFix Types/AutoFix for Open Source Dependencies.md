---
title: "AutoFix for Open Source Dependencies"
source: https://help.aikido.dev/autofix-and-remediation/scope/autofix-for-open-source-dependencies
section: Autofix & Remedation
fetched: 2026-11-08
generated: ingest_docs
---
# AutoFix for Open Source Dependencies

> [!info]
> Aikido Local Scan accounts DO NOT have access to AutoFix within the UI. If you want to use AutoFix locally, we suggest using our IDE plugins.

Aikido AutoFix creates pull requests that fix vulnerabilities in your open source dependencies by upgrading affected packages. Upgrades always target the minimum version needed to resolve the issue. Minor and patch bumps are preferred over major ones, keeping breaking changes to a minimum. AutoFix groups fixes per repo and lockfile, so each PR stays focused and mergeable. In some cases, a single upgrade removes an entire class of vulnerabilities rather than just one.

If a major version upgrade is proposed, no minor or patch version exists that resolves the vulnerability.

<figure><img src="https://help.aikido.dev/_assets/44214a00bfb3/image-241.png" alt=""><figcaption></figcaption></figure>

### Autofix options <a href="#autofix-options" id="autofix-options"></a>

AutoFix can fix vulnerabilities in two ways:

* **Update Direct Dependencies** identifies and upgrades the top-level dependencies responsible for introducing the vulnerability. The package manager resolves the correct version of the vulnerable sub-dependency automatically. This is the default and recommended strategy, supported for JavaScript, .NET, Java, Kotlin, and Python.
* **Update Dependencies** pins the vulnerable sub-dependency to a specific patched version. This is useful when the top-level dependency can't be upgraded yet, for example because a major version bump would be breaking.

> [!info]
> There is a third option, by using **Aikido Libraries** drop-in replacements. [More info here](https://help.aikido.dev/autofix-and-remediation/aikido-libraries-overview).

<figure><img src="https://help.aikido.dev/_assets/cc860fae6d3c/image-428.png" alt=""><figcaption></figcaption></figure>

When using **Update Dependencies** to fix multiple vulnerabilities at once, the **All available fixes** dropdown lets you control which packages are included:

1. **All available fixes:** Fixes everything, including major version bumps
2. **Minor and patch versions only:** Skips any fix that requires a major version bump
3. **Critical issues only:** Only fixes issues with a Critical Aikido priority

<figure><img src="https://help.aikido.dev/_assets/d4e249a403fe/image-429.png" alt=""><figcaption></figcaption></figure>

After you will be shown with a progress window (bottom right) on the state of the PR creation. You will receive an update once the PR is ready.

![](https://help.aikido.dev/_assets/f1d809f4ba69/ucarecdn-16361918-0a43-4db3-b7ff-f250361d5fae.png)

### Example video of setting up AutoFix and creating your first PR <a href="#example-of-setting-up-autofix-and-creating-your-first-pr" id="example-of-setting-up-autofix-and-creating-your-first-pr"></a>

[Video](https://ucarecdn.com/4d1a26c8-3ccf-4762-818c-e3430058f9a9/)
