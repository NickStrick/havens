---
title: "Support for Multi-Branch Scanning"
source: https://help.aikido.dev/code-scanning/miscellaneous/support-for-multi-branch-scanning
section: Code Scanning
fetched: 2026-11-08
generated: ingest_docs
---
# Support for Multi-Branch Scanning

**Table of contents:**

* [Use Cases](https://help.aikido.dev/code-scanning/miscellaneous/support-for-multi-branch-scanning#use-cases)
* [Adding multiple branches](https://help.aikido.dev/code-scanning/miscellaneous/support-for-multi-branch-scanning#adding-multiple-branches)

## Support for Multi-Branch Scanning

Multi-branch scanning in Aikido allows developers to scan multiple legacy branches at the same time or is useful when you want to scan both your staging and production environment at the same time. You can add as many branches as you want. This is typically used when branches exist for months and continuous scanning is needed.

#### Use Cases <a href="#use-cases" id="use-cases"></a>

* You have old legacy branches that needs daily scanning (eg branch V3, branch V4), that live in parallel, and you want to scan both as separate projects, even though they are in the same repository.
* You want to continuously monitor your staging and production environments

> In case you are looking to scan feature branches that get merged within a couple of days or weeks, we suggest looking into our [CI gating functionality](https://help.aikido.dev/pr-and-release-gating/aikido-ci-gating-functionality).

### Adding multiple branches <a href="#adding-multiple-branches" id="adding-multiple-branches"></a>

**Step 1:** Navigate to your repository's detail page and click on the current branch name (often tagged master). This action will open a modal window.

![NodeGoat GitHub repository showing the master branch and total issues count.](https://help.aikido.dev/_assets/3ae63d33c4d2/ucarecdn-fa3fe901-f8fd-44ea-8489-e354dcebf016.png)

**Step 2:** Click 'Scan multiple branches.’\
​

![Branch selection dialog with options to scan single or multiple branches.](https://help.aikido.dev/_assets/22566adfa17f/ucarecdn-f32721ac-7cc7-469a-af70-1a47866fcd5a.png)

**Step 3:** Enter the name of the branch you wish to add to the scanning process.\
​

![Form to select and update branches for scanning in a repository.](https://help.aikido.dev/_assets/49bea2942ca1/ucarecdn-15130a0a-8e38-41fd-b271-ac0803c98b65.png)

**Result:** Aikido clones the specified repo and scans the repository nightly, or you can trigger a scan manually for instant results. A label will appear next to the cloned repo so you know which repo contains which branch that is being scanned.

**Looking to scan more than 2 branches?** You can go into any of the repositories and go through this process again.

![Repository list with configuration options and a master copy label for one repo.](https://help.aikido.dev/_assets/7df43ab69f01/ucarecdn-3b2e2e4c-407b-46e4-b4f7-96ba226eb282.png)

> Note: It's important to note that secret scanning is conducted only on the initial repository. This is because the secret scanning feature is designed to automatically cover all branches by default.

***
