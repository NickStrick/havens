---
title: "Bitbucket Free & Standard- PR Scans Setup"
source: https://help.aikido.dev/pr-and-release-gating/bitbucket-pr-gating/bitbucket-ci-pr-gating-via-aikido-dashboard
section: PR & Release Gating
fetched: 2026-11-08
generated: ingest_docs
---
# Bitbucket Free & Standard: PR Scans Setup

> [!warning]
> This setup is meant for **Bitbucket Free and Standard** plans, where Workspace Access Tokens aren’t available and a dedicated user is used instead.
> 
> If you’re on **Bitbucket Premium**, use a [**Workspace Access Token**](https://help.aikido.dev/pr-and-release-gating/bitbucket-pr-gating/bitbucket-ci-pr-gating-via-aikido-dashboard-with-a-workspace-access-token) instead of a user-based setup.

## Set up Bitbucket PR Scanning <a href="#setting-up-bitbucket-ci" id="setting-up-bitbucket-ci"></a>

**Create a dedicated Bitbucket user**

Create a dedicated user like `AikidoSec`. Use it only for Aikido.

Give this user admin access on the repositories you want to gate. Aikido needs it to create and manage repository webhooks.

**Enable the integration**

Log in to Bitbucket as the new user.

In Aikido, open the [Integrations](https://app.aikido.dev/settings/integrations?section=ci) page. Then select **Bitbucket** under **PR Quality Gating**.

<div data-with-frame="true"><figure><img src="https://help.aikido.dev/_assets/219759fae373/Screenshot-2026-02-26-at-16.57.41.png" alt=""><figcaption></figcaption></figure></div>

**Grant access**

You’ll be redirected to Bitbucket. Approve the requested access.

<div data-with-frame="true"><figure><img src="https://help.aikido.dev/_assets/34ba1c630400/Screenshot-2026-02-26-at-16.35.57.png" alt=""><figcaption></figcaption></figure></div>

**Configure your first repository**

After authorization, Aikido opens the [Bitbucket PR Checks](https://app.aikido.dev/settings/integrations/bitbucket/checks) page.

Start with **one repository** first. Confirm everything works before rolling out broadly.

<div data-with-frame="true"><figure><img src="https://help.aikido.dev/_assets/66a4bbd364db/Screenshot-2026-02-26-at-17.02.36.png" alt=""><figcaption></figcaption></figure></div>

**Verify with a new PR**

Open a new PR in the repo you configured. Then confirm the checks run.

<div data-with-frame="true"><figure><img src="https://help.aikido.dev/_assets/3d84077d0b74/Screenshot-2026-02-26-at-18.04.55.png" alt=""><figcaption></figcaption></figure></div>

Comments should appear as the user you created in step 1 (for example, `AikidoSec`).

<figure><img src="https://help.aikido.dev/_assets/d13349ff06d5/Screenshot-2026-02-26-at-18.09.19.png" alt=""><figcaption></figcaption></figure>

**Enable for all repositories**

Once you’re happy with the results, go back to the [Bitbucket PR Checks](https://app.aikido.dev/settings/integrations/bitbucket/checks) page and enable checks for the rest of your repositories.

<div data-with-frame="true"><figure><img src="https://help.aikido.dev/_assets/879185d4678a/Screenshot-2026-02-26-at-18.13.59.png" alt=""><figcaption></figcaption></figure></div>

**Set the default for new repositories**

In the top-right, open `Actions` and select `Set Default for New Repos` and enable automatic configuration for newly added repositories in the future.

Need the UI walkthrough? See [Default PR/MR gating configuration for new repositories](https://help.aikido.dev/pr-and-release-gating/aikido-ci-gating-functionality/default-pr-mr-gating-configuration-for-new-repositories).

> [!info]
> On **Bitbucket Free and Standard**, you **can’t require** the Aikido scan to be successful to prevent merges. This requires **Bitbucket Premium**.
> 
> See Atlassian: [Suggest or require checks before a merge](https://support.atlassian.com/bitbucket-cloud/docs/suggest-or-require-checks-before-a-merge/).
