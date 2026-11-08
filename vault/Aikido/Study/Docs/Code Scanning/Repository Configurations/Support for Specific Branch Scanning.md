---
title: "Support for Specific Branch Scanning"
source: https://help.aikido.dev/code-scanning/miscellaneous/support-for-specific-branch-scanning
section: Code Scanning
fetched: 2026-11-08
generated: ingest_docs
---
# Support for Specific Branch Scanning

### Introduction <a href="#introduction" id="introduction"></a>

Utilize Aikido's manual scanning feature to directly compare a branch with your current project state/main branch, ideal for situations where you have not integrated your CI with Aikido yet.

This functionality allows you compare a specific branch / pull request / tag with the current state in Aikido, highlighting the changes with the main branch. Scanning takes typically **1-2mins** so no need to leave the UI.

**Note.** In case you have old legacy branches that needs daily scanning (eg branch V3, branch V4), check out our [Multi-Branch Scanning Feature](https://help.aikido.dev/code-scanning/miscellaneous/support-for-multi-branch-scanning).

### How to scan a specific branch <a href="#how-to-scan-a-specific-branch" id="how-to-scan-a-specific-branch"></a>

**Step 1**: Navigate to a specific repository detail page within Aikido

**Step 2**: Click on the Scan Branch button.\
​

![Repository dashboard showing critical security issues and scan options for the "terragoat" project.](https://help.aikido.dev/_assets/191b4ac3e655/ucarecdn-ca647507-fde6-4251-b500-75c661626bff.png)

**Step 3:** In the prompted field, enter the **name of the branch or tag** you wish to scan. Make sure to type the exact name of the branch / tag to avoid any errors. You can select which types of scans to execute.

![Initiate a security scan for a specified code branch with scan type options.](https://help.aikido.dev/_assets/b39b68566ceb/ucarecdn-0e7d4328-0929-42f6-ade1-92a9343d9cc0.png)

**Step 4.** In the bottom right corner, you will be able to follow the progress of the scanning. Once the scanning is done, click 'View Diffs'\
​

![Scan completed notification with "View Diffs" button displayed for a demo application.](https://help.aikido.dev/_assets/d1b10862a176/ucarecdn-48a505a7-62a0-46fb-8a65-2f09bf3bbca8.png)

**Step 5.** Check which new issues are introduced and resolved on the comparison page.\
​

![Branch security scan summary showing newly introduced critical and high severity vulnerabilities.](https://help.aikido.dev/_assets/a7fb5cfa6139/ucarecdn-6c609701-289b-423a-92d7-49f4b8756e16.png)

By following these steps, you can effectively conduct a manual scan of your branch/tag in Aikido, which will allow you to review changes, identify new or resolved issues, and make informed decisions about integrating the branch into your main codebase.

***
