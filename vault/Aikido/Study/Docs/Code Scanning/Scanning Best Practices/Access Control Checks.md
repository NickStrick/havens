---
title: "Access Control Checks"
source: https://help.aikido.dev/code-scanning/scanning-practices/enhancing-security-with-access-control-checks
section: Code Scanning
fetched: 2026-11-08
generated: ingest_docs
---
# Access Control Checks

Aikido's checks on Access Controls offers robust security by informing about critical access control practices. This way, you can ensure that only authorized and verified changes are made to your codebase. Some examples of checks are multi-factor authentication, restricting default access rights, and requiring mandatory code reviews.

> All Access Controls checks [can be found here](https://app.aikido.dev/repositories/access_control).

### Prerequisite <a href="#prerequisite" id="prerequisite"></a>

* Only available for GitHub Cloud & GitLab Cloud connected workspaces.

### Access Control Setup for GitHub <a href="#access-control-setup-for-github" id="access-control-setup-for-github"></a>

> For GitLab, no extra authorisation steps need to be taken.

**Step 1.** In the Main Feed, filter on **Access Controls.** Click **Authorise on GitHub** in order to allow Aikido scan for configurations related the access controls.

![Access controls filter active; Aikido requests extra GitHub permissions for analysis.](https://help.aikido.dev/_assets/03036b58d6ac/ucarecdn-a13fd024-3a98-4ee5-9e3f-9f4c50f66760.png)

**Step 2.** In GitHub, grant permissions to **install** the Aikido GitHub Config Scanner. It is recommended to select **All Repositories**.

![Installing Aikido GitHub Config Scanner with repository and organization read access.](https://help.aikido.dev/_assets/84aa264452e8/ucarecdn-f8ad227e-3483-4118-9dcd-a32af3acf7ca.png)

**Step 3.** After connecting, Aikido will do a scan for [checks mentioned here. ](https://app.aikido.dev/repositories/access_control)After a couple of minutes, you will be able to view them in the Aikido feed. The sidebar will give more information about which repos need configuration adjustments.

![Access control security issues listed by severity and estimated fix time.](https://help.aikido.dev/_assets/e639703b932c/ucarecdn-6b6bed8d-ee13-4d87-b0bb-47e2ac5dfe74.png)
