---
title: "AutoFix for Azure DevOps with Personal Access Token"
source: https://help.aikido.dev/autofix-and-remediation/configure/autofix-for-azure-devops-with-personal-access-token
section: Autofix & Remedation
fetched: 2026-11-08
generated: ingest_docs
---
# AutoFix for Azure DevOps with Personal Access Token

> When the installation of the Azure DevOps Autofix integration does not work via the OAuth flow, you can also configure it to work with a Personal Access Token (PAT).

> Please note that for the integration to work properly, you need to be able to have write access in all of the projects in your organization. This is usually a reserved permission for workspace admins.

**First**, go to the PAT management page in Aikido, which can be [found here](https://app.aikido.dev/settings/integrations/azure-devops/autofix/personal-access-token).

**Next**, follow the instructions below to generate a PAT in Azure DevOps.

## Generating a PAT <a href="#generating-a-pat" id="generating-a-pat"></a>

1.  Navigate to '**User Settings**' > '**Personal Access Tokens**', via the header icon shown here

    ![](https://help.aikido.dev/_assets/25bfe92e15d0/ucarecdn-6a98aaa9-d4dd-439c-8523-1243b85bccd2.png)

    Or use the shortcut link '**Generate Access Token here**' on the personal access token management page in Aikido.

    ![](https://help.aikido.dev/_assets/cab7a162c716/ucarecdn-1cf64447-e410-41ee-90d3-f54530e55d9b.png)
2.  You should end up on a page similar to this

    ![](https://help.aikido.dev/_assets/f1dadc6e4034/ucarecdn-9e46833a-3d8c-484d-a9fe-d444b6b6da34.png)
3. Make sure you have selected the same organization as the one in your Aikido workspace via the '**Access scope**' button on the top right
4. Click on "**New token**"
5.  Next you need to select the following permissions for the token: **Code (Read & Write)** and **Graph (Read).**\
    If you don't see the **Graph** scope appear, you will have to click the blue link at the bottom "Show more scopes"

    ![](https://help.aikido.dev/_assets/f805d9bdf239/ucarecdn-49b6487f-4d4f-4e45-8609-17959ec311dc.png)
6. For the expiration, use custom defined and set it to 1 year from now, this is the maximum duration that Azure DevOps allows the token to be valid for.
7. Click on '**Create**' to create the access token
8. Copy the token on the next screen and insert it on the personal access token management page in Aikido.
