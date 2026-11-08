---
title: "Code Scanning with a Workspace Access Token"
source: https://help.aikido.dev/code-scanning/connect-your-source-code/connect-bitbucket-account-to-aikido/code-scanning-with-a-workspace-access-token
section: Code Scanning
fetched: 2026-11-08
generated: ingest_docs
---
# Code Scanning with a Workspace Access Token

> [!warning]
> Bitbucket only supports the creation of Workspace Access Tokens for their premium plan.

### Introduction <a href="#introduction" id="introduction"></a>

You can easily configure Bitbucket Code Scanning via the Aikido interface via the account settings page, or by navigating directly to [this link](https://app.aikido.dev/onboarding/bitbucket/update-workspace-access-token).

### Creating a Workspace Access Token <a href="#creating-a-personal-access-token" id="creating-a-personal-access-token"></a>

**Navigate to the workspace settings**

<figure><img src="https://help.aikido.dev/_assets/de436ecf6aba/11.jpg" alt=""><figcaption></figcaption></figure>

**Create access token**

Click on the "Create access token" button to start creating a workspace access token.

**Select the required scopes**

Choose a descriptive name for the token like "**Aikido Security Code Scanning**", and select the following scopes: **Account:Read** & **Repsitories:Read**

**Copy the token**

After clicking "**Create**", you can copy the token and enter it in the input field on [this page](https://app.aikido.dev/onboarding/bitbucket/update-workspace-access-token)
