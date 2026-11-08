---
title: "Code Scanning with a Service Account Access Token"
source: https://help.aikido.dev/code-scanning/connect-your-source-code/connect-gitlab-account-to-aikido/code-scanning-with-a-service-account-access-token
section: Code Scanning
fetched: 2026-11-08
generated: ingest_docs
---
# Code Scanning with a Service Account Access Token

### ⚠️ Disclaimer

This guide is only available for **Gitlab Premium &** **Gitlab Ultimate** users. Check out our the setup with [personal access tokens](https://help.aikido.dev/code-scanning/connect-your-source-code/connect-gitlab-account-to-aikido/code-scanning-with-a-personal-access-token) for **Gitlab Free** users

### Introduction

You can use service account tokens which Aikido uses to perform the code scanning. You can update this token on the [update workspace access token](https://app.aikido.dev/onboarding/gitlab/update-workspace-access-token) page.

### Creating a Service Account and Access Token <a href="#creating-a-personal-access-token" id="creating-a-personal-access-token"></a>

1.  Navigate to the "Service Accounts" settings page. Group > Settings > Service accounts

    <figure><img src="https://help.aikido.dev/_assets/c63fef707a16/image-76.png" alt="Gitlab group sidebar: highlighting &#x22;Service accounts&#x22; under the &#x22;Settings&#x22; option"><figcaption></figcaption></figure>
2. Click on "**Add service account**"
3. Give a **Name** and **Username** to the Service Account and click **Create**
4.  Click the options of the newly created service account and select **Manage access tokens**

    <figure><img src="https://help.aikido.dev/_assets/99f10090ce6e/image-77.png" alt="Gitlab Service Accounts overview"><figcaption></figcaption></figure>
5. Click on "**Add new token**"
6.  Enter a name for the token, remove the expiration date or set it to the max value and select the **api** scope

    <figure><img src="https://help.aikido.dev/_assets/4aa57343564f/Scherm-afbeelding-2025-12-11-om-12.11.34.png" alt=""><figcaption></figcaption></figure>
7.  Click on "**Create token**"

    <figure><img src="https://help.aikido.dev/_assets/42231958c2ca/Scherm-afbeelding-2025-12-11-om-12.15.09.png" alt=""><figcaption></figcaption></figure>
8. Copy the token and keep it for the "[update workspace access token](https://app.aikido.dev/onboarding/gitlab/update-workspace-access-token)" page
9.  Go to the members page: **Group** > **Manage** > **Members**

    <figure><img src="https://help.aikido.dev/_assets/8eadaf12d574/image-80.png" alt="Gitlab Group sidebar; showing members under the manage option"><figcaption></figcaption></figure>
10. Click "**Invite Members**"
11. Search for your new Service account created earlier and set role to "**Maintainer**"

    <figure><img src="https://help.aikido.dev/_assets/b132aced0d02/image-81.png" alt=""><figcaption></figcaption></figure>
