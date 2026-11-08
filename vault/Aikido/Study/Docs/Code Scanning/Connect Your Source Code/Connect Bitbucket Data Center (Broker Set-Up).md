---
title: "Connect Bitbucket Data Center (Broker Set-Up)"
source: https://help.aikido.dev/code-scanning/connect-your-source-code/connect-bitbucket-data-center/connect-bitbucket-data-center-broker-set-up
section: Code Scanning
fetched: 2026-11-08
generated: ingest_docs
---
# Connect Bitbucket Data Center (Broker Set-Up)

Aikido lets you connect a self-managed Bitbucket instance to scan and secure your code. Follow the steps below to connect your Bitbucket Data Center instance to Aikido.

### Before you start

* The person setting this up needs access to both the Bitbucket Data Center instance **and** the Bitbucket project you want to connect.

## Configuration

**Create an Aikido account**

To connect your Bitbucket Data Center instance, first sign up or log in to Aikido using Google or Microsoft. On the [signup screen](https://app.aikido.dev/login), click **Google / Microsoft**.

**Start the Bitbucket Data Center setup**

Once you’re authenticated, create a new workspace by clicking **Bitbucket Data Center** in the Bitbucket section.

<figure><img src="https://help.aikido.dev/_assets/6160939f6f36/image-413.png" alt=""><figcaption></figcaption></figure>

**Enable Broker access**

Enable the **Aikido broker** by clicking the toggle in the "Advanced Connection Options" section. Click **Create Group** to continue.

<figure><img src="https://help.aikido.dev/_assets/2ac32d3cb01d/image-344.png" alt=""><figcaption></figcaption></figure>

**Configure the Broker**

Configure the Broker using the guide below. After you deploy it, return here to finish the GitLab setup.

[aikido-broker-for-internal-applications.md](https://help.aikido.dev/miscellaneous-info/aikido-broker-for-internal-applications)

<figure><img src="https://help.aikido.dev/_assets/ed3cfb1c2f6d/Scherm-afbeelding-2026-07-07-om-12.58.18.png" alt=""><figcaption></figcaption></figure>

**Complete Bitbucket Data Center setup**

After you create the broker and deploy it in your environment, you can complete the Bitbucket Data Center setup.

First, copy the **Broker URL**. It looks similar to this:

```
https://55673-355dsfwea68cb.aikidobroker.com
```

Then click **Complete Bitbucket Server Setup**.

<figure><img src="https://help.aikido.dev/_assets/db054f201dd5/Scherm-afbeelding-2026-07-07-om-13.00.01.png" alt=""><figcaption></figcaption></figure>

**Enter the Broker URL**

Paste the Broker resource URL from the previous step in the input field for the "server URL".

<figure><img src="https://help.aikido.dev/_assets/2e67c0ba3d39/Scherm-afbeelding-2026-07-07-om-12.59.35.png" alt=""><figcaption></figcaption></figure>

**Create a HTTP Access Token**

You can find the `HTTP access token` under **Profile** → **Manage account** → **HTTP access tokens** → **Create token**.

**Required token permissions**

Aikido requests the following token permissions for your Bitbucket on-premises instance:

* **Project:** Write
* **Repository:** Write

**Why Write access?**

Write access is required to support the full Aikido feature set, including AutoFix (creating merge-ready PRs) and PR checks (posting status checks and comments on pull requests).

**If you only need scanning**

If your team only uses Aikido for repository scanning and AI Pentesting, **Read permissions** are sufficient. You can configure a token with Read-only access and all scanning functionality will work as expected.

**Complete the installation**

After you click **Next, Connect Group**, select the group you want to start with. You can always connect more groups later.

In the final step, select the repositories you want Aikido to monitor.
