---
title: "Scanned Branches in Aikido"
source: https://help.aikido.dev/code-scanning/miscellaneous/scanned-branches-in-aikido
section: Code Scanning
fetched: 2026-11-08
generated: ingest_docs
---
# Scanned Branches in Aikido

### Single-Branch Scanning <a href="#single-branch-scanning" id="single-branch-scanning"></a>

By default, Aikido will scan the default branch in your repository for dependency and code issues. The default branch is usually main/master. Aikido scans that branch on a schedule: daily on paid plans, and every 3 days on the free plan.

If you update the default branch, Aikido will pick up this change during its nightly sync, so no changes are needed on Aikido's end.

In some cases, it might be interesting to scan another branch instead of the default branch. This could be the case if you are developing on another branch for an extended period of time. You can overwrite the branch being scanned on the repository detail page in Aikido by clicking the branch button at the top.

![GitHub admin-panel repository showing master branch and issue status.](https://help.aikido.dev/_assets/2ddd923b92e1/ucarecdn-769bdbd4-5ab6-4248-a382-b6e56af0438e.png)

A modal will appear that will allow you to change the branch that is scanned on the scheduled sync.

![Dialog box to update and save the branch name for scanning.](https://help.aikido.dev/_assets/63ca59e2ea9b/ucarecdn-b460fe90-cd2f-41b8-bb40-b54fb7f7aaa1.png)

## Multi-Branch Scanning <a href="#multi-branch-scanning" id="multi-branch-scanning"></a>

If you are looking to scan multiple branches of the same repo on a regular basis, you can contact us to enable Multi-Branch Scanning for you. This is only available for Paid Plans. Please check whether multi-branch scanning is right for you [by checking the use cases in this article](https://help.aikido.dev/code-scanning/miscellaneous/support-for-multi-branch-scanning).
