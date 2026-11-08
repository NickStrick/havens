---
title: "Bitbucket Premium- PR Gating Setup"
source: https://help.aikido.dev/pr-and-release-gating/bitbucket-pr-gating/bitbucket-ci-pr-gating-via-aikido-dashboard-with-a-workspace-access-token
section: PR & Release Gating
fetched: 2026-11-08
generated: ingest_docs
---
# Bitbucket Premium: PR Gating Setup

> [!warning]
> This setup is for **Bitbucket Premium**.
> 
> Use it when you want to authenticate via a **Workspace Access Token**. It also supports required checks before merge (PR gating).
> 
> If you’re on **Bitbucket Free or Standard**, use the [**user-based setup**](https://help.aikido.dev/pr-and-release-gating/bitbucket-pr-gating/bitbucket-ci-pr-gating-via-aikido-dashboard) instead.

## Set up Bitbucket PR Scanning <a href="#setting-up-bitbucket-ci" id="setting-up-bitbucket-ci"></a>

**Create a Workspace Access Token**

In Bitbucket, go to `Workspace settings > Access tokens`.

Select **Create access token**.

<div data-with-frame="true"><figure><img src="https://help.aikido.dev/_assets/eea2698ecec1/Screenshot-2026-02-27-at-11.50.37.png" alt=""><figcaption></figcaption></figure></div>

**Give it the right access**

Name the token (for example, `AikidoSec`). Set an expiry date that matches your rotation policy.

Enable these scopes:

* **Repositories:** Read & Write
* **Pull Requests:** Read & Write
* **Webhooks:** Read & Write
* **Pipelines:** Read & Write

<div data-with-frame="true"><figure><img src="https://help.aikido.dev/_assets/914ca036e390/Screenshot-2026-02-27-at-12.25.21.png" alt=""><figcaption></figcaption></figure></div>

**Copy the access token**

Copy the generated token. Paste it in step 5.

The token is only shown once. You can’t retrieve it later.

<div data-with-frame="true"><figure><img src="https://help.aikido.dev/_assets/5f8b48a49a6d/Screenshot-2026-02-27-at-12.06.22.png" alt=""><figcaption></figcaption></figure></div>

**Enable the integration**

In Aikido, open the [Integrations](https://app.aikido.dev/settings/integrations?section=ci) page. Then select **Bitbucket** under **PR Quality Gating**.

<div data-with-frame="true"><figure><img src="https://help.aikido.dev/_assets/219759fae373/Screenshot-2026-02-26-at-16.57.41.png" alt=""><figcaption></figcaption></figure></div>

**Add the token to Aikido**

Paste the Workspace Access Token in Aikido. Aikido will validate the token and its permissions.

<div data-with-frame="true"><figure><img src="https://help.aikido.dev/_assets/01f806d9906e/Screenshot-2026-02-27-at-12.07.45.png" alt=""><figcaption></figcaption></figure></div>

**Configure your first repository**

After authorization, Aikido opens the [Bitbucket PR Checks](https://app.aikido.dev/settings/integrations/bitbucket/checks) page.

Start with **one repository** first. Confirm everything works before rolling out broadly.

<div data-with-frame="true"><figure><img src="https://help.aikido.dev/_assets/66a4bbd364db/Screenshot-2026-02-26-at-17.02.36.png" alt=""><figcaption></figcaption></figure></div>

**Verify with a new PR**

Open a new PR in the repo you configured. Then confirm the checks run.

<div data-with-frame="true"><figure><img src="https://help.aikido.dev/_assets/3d84077d0b74/Screenshot-2026-02-26-at-18.04.55.png" alt=""><figcaption></figcaption></figure></div>

Comments and check updates should appear as the Workspace Access Token identity (for example, `AikidoSec`).

<figure><img src="https://help.aikido.dev/_assets/d13349ff06d5/Screenshot-2026-02-26-at-18.09.19.png" alt=""><figcaption></figcaption></figure>

**Require the scan as a Merge Check**

If you want to block merging until the scan succeeds, configure **required checks** in Bitbucket.

In Bitbucket, go to `Repository settings > Workflow > Branch restrictions`. Add or update a restriction for your target branch (for example, `main`).

Atlassian reference: [Suggest or require checks before a merge](https://support.atlassian.com/bitbucket-cloud/docs/suggest-or-require-checks-before-a-merge/).

**Enable for all repositories**

Once you’re happy with the results, go back to the [Bitbucket PR Checks](https://app.aikido.dev/settings/integrations/bitbucket/checks) page and enable checks for the rest of your repositories.

<div data-with-frame="true"><figure><img src="https://help.aikido.dev/_assets/879185d4678a/Screenshot-2026-02-26-at-18.13.59.png" alt=""><figcaption></figcaption></figure></div>

**Set the default for new repositories**

In the top-right, open `Actions` and select `Set Default for New Repos`.

See [Default PR/MR gating configuration for new repositories](https://help.aikido.dev/pr-and-release-gating/aikido-ci-gating-functionality/default-pr-mr-gating-configuration-for-new-repositories) for UI guidance.
