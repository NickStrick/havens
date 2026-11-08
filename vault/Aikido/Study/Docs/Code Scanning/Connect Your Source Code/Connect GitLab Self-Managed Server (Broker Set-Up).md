---
title: "Connect GitLab Self-Managed Server (Broker Set-Up)"
source: https://help.aikido.dev/code-scanning/connect-your-source-code/connect-gitlab-self-managed-server-to-aikido/connect-gitlab-self-managed-server-broker-set-up
section: Code Scanning
fetched: 2026-11-08
generated: ingest_docs
---
# Connect GitLab Self-Managed Server (Broker Set-Up)

Aikido lets you connect a self-managed GitLab instance to scan and secure your code. Follow the steps below to connect your GitLab server to Aikido.

### Before you start

* The person setting this up needs access to both the GitLab instance **and** the GitLab group you want to connect.

> [!warning]
> An Aikido workspace always maps to a single GitLab group.
> 
> We recommend connecting Aikido to a top-level (root) group that contains all subgroups. If you don’t have a root group, create one workspace per GitLab group. You can do this after creating your first workspace via the top-left dropdown: “Add another workspace”.

## Configuration

**Create an Aikido account**

To connect your GitLab server, first sign up or log in to Aikido using Google or Microsoft. On the [signup screen](https://app.aikido.dev/login), click **Google / Microsoft**.

**Start the GitLab setup**

Once you’re authenticated, create a new workspace by clicking **Self-Managed** in the GitLab section.

<figure><img src="https://help.aikido.dev/_assets/bc4b25ebacf6/image-411.png" alt=""><figcaption></figcaption></figure>

**Enable Broker access**

Enable the **Aikido broker** by clicking the toggle in the "Advanced Connection Options" section.

Click **Create Group** to continue.

<figure><img src="https://help.aikido.dev/_assets/75700246ec89/image-412.png" alt=""><figcaption></figcaption></figure>

**Configure the Broker**

Configure the Broker using the guide below. After you deploy it, return here to finish the GitLab setup.

[aikido-broker-for-internal-applications.md](https://help.aikido.dev/miscellaneous-info/aikido-broker-for-internal-applications)

<figure><img src="https://help.aikido.dev/_assets/a6f4a50ab13b/Screenshot-2025-12-22-at-10.48.21.png" alt=""><figcaption></figcaption></figure>

**Complete GitLab server setup**

After you create the broker and deploy it in your environment, you can complete the GitLab setup.

First, copy the **Broker URL**. It looks similar to this:

```
https://55673-355dsfwea68cb.aikidobroker.com
```

Then click **Complete GitLab Server Setup**.

<figure><img src="https://help.aikido.dev/_assets/1f86ec5d7c84/Broker_Clients_-_Gitlab_Server_EVAfKobo3u_-_Aikido_Security_.png" alt=""><figcaption></figcaption></figure>

**Enter the Broker URL**

Paste the Broker resource URL from the previous step in the input field for the "server URL".

<figure><img src="https://help.aikido.dev/_assets/b591c3dccfbc/Scherm-afbeelding-2026-01-27-om-15.16.49.png" alt=""><figcaption></figcaption></figure>

**Create a GitLab personal access token (PAT)**

Next, create a personal access token (PAT). We recommend using a dedicated service account

* Log in to your GitLab server
* Go to the admin area (`/admin`)
* Go to **Settings** → **Service accounts**
* Click **Add service account**, enter a name, then save

> [!warning]
> Add the service account to the GitLab group you want to connect, like any other user. See GitLab’s docs on [group members](https://docs.gitlab.com/ee/user/group/members/).

Now that the service account is created, you can create a PAT for it by clicking the three dots and select "**Manage access tokens**"

* Click on "**Add new token**"
* Enter a name for the token, for example: `Aikido Security Access Token`
* Set an expiration date that matches your internal policy. Rotate the token before it expires.
* We need the following scopes to be selected:
  * **read\_user**
  * **read\_api**
  * **read\_repository**
* Click the **Create token** button at the bottom of the form.

<figure><img src="https://help.aikido.dev/_assets/41a984a98deb/Scherm-afbeelding-2025-08-11-om-15.00.51.png" alt=""><figcaption></figcaption></figure>

* Copy the token being shown on the screen and enter it in the input field.

**Important:** You won’t be able to see the token again after you leave this screen. Copy it before you continue.

Aikido will now check the connection to your GitLab server. If it fails, double-check the server URL and the token.

**Complete the installation**

After you click **Next, Connect Group**, select the group you want to start with. You can always connect more groups later.

In the final step, select the repositories you want Aikido to monitor.

> [!info]
> Also scanning your GitLab container registry through the Broker? The registry usually runs on its own host that needs a separate Broker resource. See [GitLab Self Managed Container Registry](https://help.aikido.dev/container-image-scanning/standalone-registries/gitlab-self-managed-container-registry#connect-a-registry-on-an-internal-network-broker).
