---
title: "Connect GitHub Enterprise (Cloud & Server) (Broker Set-Up)"
source: https://help.aikido.dev/code-scanning/connect-your-source-code/connect-github-enterprise/connect-github-enterprise-cloud-and-server-broker-set-up
section: Code Scanning
fetched: 2026-11-08
generated: ingest_docs
---
# Connect GitHub Enterprise (Cloud & Server) (Broker Set-Up)

Aikido integrates with [Github Enterprise Cloud](https://docs.github.com/en/get-started/onboarding/getting-started-with-github-enterprise-cloud) and [GitHub Enterprise Server](https://docs.github.com/en/enterprise-server@3.19/admin/overview/about-github-enterprise-server) through a secure, app-based connection. This allows Aikido to access the repositories you choose while keeping full control. The connection can be established also through a broker which this guide covers.

> [!danger]
> Please read the following requirements carefully before setting up the workspace:
> 
> 1. **GitHub Organization permissions**: Ensure that the user setting up the workspace has sufficient permissions in the GitHub organization to install the Aikido application. In most cases, this requires Organization Owner or Organization Administrator privileges.
> 2. **Matching email addresses**: when signing up with Google or Microsoft (see step 1 below), ensure that the email address used for sign-in matches the email address associated with the user's GitHub account.&#x20;

### Installation

Aikido connects to your GitHub Enterprise setup by creating a GitHub App on your server. The app includes the permissions and callbacks needed for Aikido to work. After it is created, you can install it in any organisation on your GitHub Server instance that you want to link to Aikido.\
\
To create the GitHub app on your instance, follow the steps below.

**Create your account**

To connect your GitHub Enterprise, first sign up or log in to Aikido using Google or Microsoft. On the [signup screen](https://app.aikido.dev/login), click **Google / Microsoft**.

**Start the GitHub Enterprise setup**

Once you're authenticated, create a new workspace by clicking GitHub Server in the GitHub section.

<figure><img src="https://help.aikido.dev/_assets/82202c737240/Screenshot-2026-06-19-at-17.03.44.png" alt=""><figcaption></figcaption></figure>

**Enable Broker access**

Enable the **Aikido broker** by clicking the toggle in the "Advanced Connection Options" section.

Click **Next, Install App** and then switch to [https://app.aikido.dev](https://app.aikido.dev/) where a Local Scan workspace will be created.

<figure><img src="https://help.aikido.dev/_assets/b46509509e4a/Screenshot-2026-06-19-at-17.06.22.png" alt="Aikido onboarding: Enter GitHub Enterprise URL to authenticate"><figcaption><p>Aikido onboarding: Enter GitHub Enterprise URL to authenticate</p></figcaption></figure>

**Configure the broker**

Configure the Broker using the guide below through the Local Scan workspace. After you deploy it, return here to finish the GitHub Enterprise setup.

[aikido-broker-for-internal-applications.md](https://help.aikido.dev/miscellaneous-info/aikido-broker-for-internal-applications)

<figure><img src="https://help.aikido.dev/_assets/34f0f8d0485b/Screenshot-2026-06-19-at-17.14.31.png" alt=""><figcaption></figcaption></figure>

**Install Aikido Github App on your Github Enterprise**

After you create the broker and deploy it in your environment, you can complete the GitHub Enterprise setup.

First, copy the **Broker URL**. It looks similar to this:

```
https://55673-355dsfwea68cb.aikidobroker.com
```

Then click **Complete GitHub Server Setup**.

<figure><img src="https://help.aikido.dev/_assets/c2eb07e260fa/Screenshot-2026-06-18-at-11.36.06.png" alt=""><figcaption></figcaption></figure>

A file named `install.html` is downloaded to your machine. It contains an HTML page with a form that sends a JSON payload to your GitHub Enterprise to create the GitHub App.

Open the file in your browser and select Install to continue the setup process.

<figure><img src="https://help.aikido.dev/_assets/b6c7385d9da4/Screenshot-2025-11-25-at-17.41.41.png" alt="" width="375"><figcaption></figcaption></figure>

After clicking "Install" you are redirected to a page on your GitHub Enterprise that prompts you to install the app. Choose `Create GitHub App for User` to create the app on your server.

<figure><img src="https://help.aikido.dev/_assets/0f00911abde1/Scherm-afbeelding-2025-11-25-om-16.12.59.png" alt="" width="563"><figcaption></figcaption></figure>

**Authorize Aikido Github app**

Now you need to authorize the new GitHub App with your user account through OAuth. This step confirms that the app was created correctly and that you have permission to use it. The screen you see will be similar to the example below.

<figure><img src="https://help.aikido.dev/_assets/e9bffcdecdf2/test-1.png" alt="" width="375"><figcaption></figcaption></figure>

**Connect Github organization**

Choose the GitHub organisation where you want to install the application and link it to Aikido. You can add more organisations later. After selecting the organisation, confirm the authorization for the GitHub App.

<figure><img src="https://help.aikido.dev/_assets/d209db1309f3/tester.webp" alt="" width="375"><figcaption></figcaption></figure>

You are now redirected back to Aikido where you can choose which repositories should be scanned. Select the repositories you want and continue. Aikido will start scanning the chosen applications.

**Explore Aikido**

After granting access and validating the repositories you want to scan, your workspace will be converted and Aikido will automatically start scanning. After about 1 minute, you should see the first results come in
