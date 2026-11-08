---
title: "Default PR-MR gating configuration for new repositories"
source: https://help.aikido.dev/pr-and-release-gating/aikido-ci-gating-functionality/default-pr-mr-gating-configuration-for-new-repositories
section: PR & Release Gating
fetched: 2026-11-08
generated: ingest_docs
---
# Default PR/MR gating configuration for new repositories

If you frequently add repositories to Aikido, you can set a single default PR/MR gating configuration once, and Aikido will automatically apply it to every newly added repository in the future.

### Prerequisite <a href="#prerequisite" id="prerequisite"></a>

Make sure Aikido automatically **activates new repositories**.

If Aikido doesn’t activate the repository, it can’t apply the default configuration.

1. Go to [Repository Settings](https://app.aikido.dev/settings/integrations/repositories).
2. Enable **Automatically activate new repos**.

Need the UI walkthrough? See [Ensuring Aikido Scans New Repositories](https://help.aikido.dev/code-scanning/miscellaneous/ensuring-aikido-scans-new-repositories).

### Steps <a href="#steps" id="steps"></a>

**Go to the configuration page**

Open [Repositories](https://app.aikido.dev/repositories) → [Pull/Merge Requests](https://app.aikido.dev/repositories/prs) → `Manage PR/MR Checks`.

<div data-with-frame="true"><figure><img src="https://help.aikido.dev/_assets/eafadec1a6d9/Screenshot-2026-02-27-at-14.56.43.png" alt=""><figcaption></figcaption></figure></div>

In the top-right, open `Actions` and select `Set Default for New Repos`.

<div data-with-frame="true"><figure><img src="https://help.aikido.dev/_assets/ac310112e158/image-90.png" alt=""><figcaption></figcaption></figure></div>

**Turn on auto-apply for new repositories**

Enable **Automatically activate scan configuration for new repos**.

This makes Aikido apply your default PR/MR gating settings to new repositories.

<div data-with-frame="true"><figure><img src="https://help.aikido.dev/_assets/9198e604cbaf/image-91.png" alt=""><figcaption></figcaption></figure></div>

**Choose the default settings**

Set the configuration you want Aikido to apply by default.

This includes:

* Which scans run on PRs/MRs
* The failure threshold or **Always Pass**
* When comments are added

<div data-with-frame="true"><figure><img src="https://help.aikido.dev/_assets/05de0f2bca57/Screenshot-2026-02-27-at-14.40.40.png" alt=""><figcaption></figcaption></figure></div>

**Save your settings**

Click **Save Settings**.

Going forward repositories that are added will have this new configuration applied.

Existing repositories will not be affected by this change.
