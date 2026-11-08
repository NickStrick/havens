---
title: "Connect Bitbucket Data Center"
source: https://help.aikido.dev/code-scanning/connect-your-source-code/connect-bitbucket-data-center
section: Code Scanning
fetched: 2026-11-08
generated: ingest_docs
---
# Connect Bitbucket Data Center

Aikido lets you connect Bitbucket Data Center to scan your repositories.

#### Step 1. Sign in to Aikido

Log in to Aikido with **Google** or **Microsoft**.

#### Step 2. Choose Bitbucket Data Center

On the SCM selection screen, choose **Bitbucket Data Center**.

<figure><img src="https://help.aikido.dev/_assets/adf452d10334/image-399.png" alt=""><figcaption></figcaption></figure>

#### Step 3. Add your Bitbucket details

Enter your `Bitbucket Data Center URL` and `HTTP access token`.

<figure><img src="https://help.aikido.dev/_assets/bf18962317f6/image-400.png" alt=""><figcaption></figcaption></figure>

You can find the `HTTP access token` under **Profile** → **Manage account** → **HTTP access tokens** → **Create token**.

**Required token permissions**

Aikido requests the following token permissions for your Bitbucket on-premises instance:

* **Project:** Write
* **Repository:** Write

**Why Write access?**

Write access is required to support the full Aikido feature set, including AutoFix (creating merge-ready PRs) and PR checks (posting status checks and comments on pull requests).

**If you only need scanning**

If your team only uses Aikido for repository scanning and AI Pentesting, **Read permissions** are sufficient. You can configure a token with Read-only access and all scanning functionality will work as expected.

<figure><img src="https://help.aikido.dev/_assets/b23900d7c4fe/image-335.png" alt=""><figcaption></figcaption></figure>

#### Step 4. Select a project

Choose the Bitbucket project you want to connect.

<figure><img src="https://help.aikido.dev/_assets/210a74a11dab/image-401.png" alt=""><figcaption></figcaption></figure>

#### Step 5. Select repositories and finish

Choose the repositories you want Aikido to scan.

<figure><img src="https://help.aikido.dev/_assets/283bf1f06c1d/image-402.png" alt=""><figcaption></figcaption></figure>

Finish the setup to start scanning.
