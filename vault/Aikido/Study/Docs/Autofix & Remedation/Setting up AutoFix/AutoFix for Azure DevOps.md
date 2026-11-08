---
title: "AutoFix for Azure DevOps"
source: https://help.aikido.dev/autofix-and-remediation/configure/autofix-for-azure-devops
section: Autofix & Remedation
fetched: 2026-11-08
generated: ingest_docs
---
# AutoFix for Azure DevOps

Aikdo Autofix is a tool you can use to have Aikido fix vulnerabilities in 3rd party dependencies in your projects. It will do this by creating pull requests that remove the vulnerability via package updates or by other means. In some cases an Aikido Autofix can remove a whole class of vulnerabilities instead of just 1 issue.

**Setup Autofix for Azure DevOps**

> All users within your workspace will need to setup Autofix individually.

By default, Aikido only has read access on your Azure DevOps instance. To use Aikido Autofix, a separate access token with write access is required. Please make sure that "Third-party application access via Oauth" is enabled for your organization, by going to "Organization settings" and then clicking "Policies".

![Organization security policies for application access, public projects, and user invitations.](https://help.aikido.dev/_assets/e882db4577c9/ucarecdn-de2304d7-85d2-4b8b-8d71-24259117f59d.png)

**Step 1. Enable Autofix on the** [**Autofix Settings**](https://app.aikido.dev/settings/integrations/autofix) **page or go to** [**Autofix Page**](https://app.aikido.dev/issues/fix) **and click on Enable Autofix.**

![](https://help.aikido.dev/_assets/deabe3c44c4a/ucarecdn-9ac87091-7eef-4f05-86a1-a137f2ddf68c.png)

**Step 2.** Click **Authorize**

![](https://help.aikido.dev/_assets/8602dd433297/ucarecdn-8a0e9ba1-c135-4e5f-a37b-3de7ddee86d0.png)

**Step 3.** Grant Aikido permissions to **Write**

![](https://help.aikido.dev/_assets/ca344b922654/ucarecdn-ad9f2ecc-7a4f-4c78-8e74-2429a4b8e7a8.png)

**Step 4.** Click save and you are all set. You will now be able to execute autofix PRs from the [Autofix page](https://app.aikido.dev/issues/fix) or from the action menu for subissues in the sidebar ([read more here](https://help.aikido.dev/autofix-and-remediation/scope/autofix-for-open-source-dependencies)).
