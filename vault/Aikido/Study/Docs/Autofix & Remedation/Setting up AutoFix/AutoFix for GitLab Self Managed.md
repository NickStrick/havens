---
title: "AutoFix for GitLab Self Managed"
source: https://help.aikido.dev/autofix-and-remediation/configure/autofix-for-gitlab-self-managed
section: Autofix & Remedation
fetched: 2026-11-08
generated: ingest_docs
---
# AutoFix for GitLab Self Managed

## Introduction

Aikido AutoFix is a tool designed to resolve vulnerabilities in third-party dependencies within your projects. It achieves this by generating pull requests that update packages or implement other solutions to eliminate vulnerabilities. In certain situations, Aikido AutoFix can address an entire class of vulnerabilities rather than just a single issue.

## Setup Autofix for GitLab Self Managed

By default, Aikido only has read access on your Gitlab Self Managed instance. To use Aikido AutoFix a separate access token with write access is required.

**Step 1.** Enable write access on the [AutoFix Settings](https://app.aikido.dev/settings/integrations/autofix) page.

**Step 2.** Click **Authorize**, and you will see this modal:

![](https://help.aikido.dev/_assets/324099b33e70/ucarecdn-847dce22-b557-4a36-8592-c8b97e558f46.png)

**Step 3.** Head over to your Self Managed Gitlab account. Click on your personal account icon top left and go to preferences.

![](https://help.aikido.dev/_assets/188474d14f04/ucarecdn-1aa79b23-ea0e-473c-beb6-e60b3ff03d73.png)

**Step 4.** In the sidebar, select Access Token. Then click the "Add new token"-button

![](https://help.aikido.dev/_assets/6e54502336d9/ucarecdn-696b35be-f6ea-4bce-978d-0bede8b663ee.png)

**Step 5.** Name the token 'Aikido Autofix' and add the following permissions: `api` & `write_repository`

![](https://help.aikido.dev/_assets/ea5f1bd844d0/ucarecdn-0a39f5aa-0e23-4e69-91a3-c94163f81db7.png)

**Step 6.** Copy the newly created token and paste it into the modal in Aikido.

![](https://help.aikido.dev/_assets/b096aff55644/ucarecdn-75bb003e-2ebf-4687-8b8c-3c6049717027.png)

![](https://help.aikido.dev/_assets/bdd15c5f156c/ucarecdn-c1669df1-17da-4e97-b521-c71fc46b8e5d.png)

**Step 7.** Click save and you are all set. You will now be able to execute autofix PRs from the [Autofix page](https://app.aikido.dev/issues/fix) or from the action menu for subissues in the sidebar.

## Using a service account

If you setup Autofix with a PAT for your Gitlab user, you will be the author of the Merge Requests created by AutoFix, which can be confusing.

For premium Gitlab self managed users, we recommend setting up a service account for Aikido AutoFix. This will make it easy to see which PRs are coming from Aikido.&#x20;

**Step 1. Setup a service account**

In Gitlab, navigate to Group > `Your group` > Settings > Service accounts to setup a service account.

**Step 2. Create a PAT for the service account**

Click `Manage access tokens` in the 3 dots menu on the service account page in Gitlab to create a new access token. Create a PAT with `api` and `write_repository` permissions.

**Step 3. Add the service account as a member of the Gitlab group**

In Gitlab, navigate to Group > `Your Group` > Manage > Members > Invite Members and add the newly created service account as a member of the Gitlab group.

**Step 4. Paste the PAT into the Aikido UI**

Copy the newly created token from Gitlab and paste it into the modal in Aikido.
