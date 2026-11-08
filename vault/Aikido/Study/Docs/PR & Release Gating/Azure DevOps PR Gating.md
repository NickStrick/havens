---
title: "Azure DevOps PR Gating"
source: https://help.aikido.dev/pr-and-release-gating/azure-pipelines-ci-pr-gating-via-aikido-dashboard-with-a-personal-access-token
section: PR & Release Gating
fetched: 2026-11-08
generated: ingest_docs
---
# Azure DevOps PR Gating

Azure DevOps PR gating lets you block newly introduced issues before merge and see which existing issues a pull request solves.

> [!info]
> We recommend setting up this integration with a **newly created user** in Azure (e.g. called Aikido). The commenting feature uses the name of the user who has set up the integration.

> [!warning]
> Please note that for the integration to work properly, you must be able to manage service hooks in all projects within your organization. This is usually a reserved permission for Azure workspace admins.

> [!warning]
> Azure DevOps PR gating via Aikido supports Azure Repos Git repositories only. Team Foundation Version Control (TFVC) repositories aren't supported for PR gating or Code Quality gates.

If your organization is connected to Microsoft Entra, you can use a service principal that never expires and stores no secret instead of a PAT. See [Azure DevOps PR Gating with an Entra Service Principal](https://help.aikido.dev/pr-and-release-gating/azure-devops-pr-gating-with-an-entra-service-principal).

**First**, go to the PAT management page in Aikido, which can be [found here](https://app.aikido.dev/settings/integrations/azure-devops/checks/personal-access-token).

**Next**, follow the instructions below to generate a PAT in Azure DevOps.

## Generating a PAT <a href="#generating-a-pat" id="generating-a-pat"></a>

1.  Navigate to '**User Settings**' > '**Personal Access Tokens**', via the header icon shown here

    ![User settings menu highlighted near search and profile options.](https://help.aikido.dev/_assets/25bfe92e15d0/ucarecdn-6a98aaa9-d4dd-439c-8523-1243b85bccd2.png)

    Or use the shortcut link '**Generate Access Token here**' on the personal access token management page in Aikido.

    ![Input field for personal access token with option to generate or update token.](https://help.aikido.dev/_assets/cab7a162c716/ucarecdn-1cf64447-e410-41ee-90d3-f54530e55d9b.png)
2.  You should end up on a page similar to this

    ![Azure DevOps: No personal access tokens created; option to generate a new token available.](https://help.aikido.dev/_assets/f1dadc6e4034/ucarecdn-9e46833a-3d8c-484d-a9fe-d444b6b6da34.png)
3. Make sure you have selected the same organization as the one in your Aikido workspace via the '**Access scope**' button on the top right
4. Click on "**New token**"
5.  Next you need to select the following permissions for the token: **Work Items (Read & Write)**, **Code (Read & Write)**, **Code (Status)** and **Build (Read)**

    ![Creating a custom personal access token with specific security and repository permissions.](https://help.aikido.dev/_assets/0f7c44bad20f/ucarecdn-33865be9-0c62-4642-8ae7-b47280f0f4be.png)
6. For the expiration, use custom defined and set it to 1 year from now, this is the maximum duration that Azure DevOps allows the token to be valid for.
7. Click on '**Create**' to create the access token
8. Copy the token on the next screen and insert it on the personal access token management page in Aikido.

> [!info]
> If you've added new repositories after the initial setup, you'll need to configure those repos as well.
> 
> To apply a default configuration automatically, see [Default PR/MR gating configuration for new repositories](https://help.aikido.dev/pr-and-release-gating/aikido-ci-gating-functionality/default-pr-mr-gating-configuration-for-new-repositories).

## Ignore issues directly from PR comments <a href="#ignore-issues-directly-from-pr-comments" id="ignore-issues-directly-from-pr-comments"></a>

When Aikido posts an inline PR comment for a finding, you can ignore that issue directly from Azure DevOps by replying to the comment with:

`@AikidoSec ignore: [your reason to ignore]`

Example:

`@AikidoSec ignore: This secret is used for tests only.`

This performs the same action as manually ignoring the issue in the Aikido platform:

* The issue is marked as ignored in Aikido.
* The ignore reason is stored.
* PR gating can turn green once all blocking issues are resolved or ignored.

> [!info]
> This reply ignores the finding only when you have the **Can ignore issues** permission. Without that permission, Aikido replies that the ignore is not allowed, and the finding stays open.
