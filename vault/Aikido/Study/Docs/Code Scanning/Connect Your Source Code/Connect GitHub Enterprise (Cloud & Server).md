---
title: "Connect GitHub Enterprise (Cloud & Server)"
source: https://help.aikido.dev/code-scanning/connect-your-source-code/connect-github-enterprise
section: Code Scanning
fetched: 2026-11-08
generated: ingest_docs
---
# Connect GitHub Enterprise (Cloud & Server)

Aikido integrates with [Github Enterprise Cloud](https://docs.github.com/en/get-started/onboarding/getting-started-with-github-enterprise-cloud) and [GitHub Enterprise Server](https://docs.github.com/en/enterprise-server@3.19/admin/overview/about-github-enterprise-server) through a secure, app-based connection. This allows Aikido to access the repositories you choose while keeping full control.

> [!warning]
> Please make sure that you have sufficient permissions in the GitHub Server Organizations to install apps. This can usually only be done by organization admin and owners.

### Installation

Aikido connects to your GitHub Enterprise setup by creating a GitHub App on your server. The app includes the permissions and callbacks needed for Aikido to work. After it is created, you can install it in any organisation on your GitHub Server instance that you want to link to Aikido.\
\
To create the GitHub app on your instance, follow the steps below.

**Create your account**

If you don’t have an Aikido account yet, create one through Google or Microsoft first. This is required before you can connect your GitHub Enterprise Server.

Open the [onboarding page](https://app.aikido.dev/onboarding/self-managed/select-onboarding-type) and select "GitHub Enterprise", this should bring you to the installation page. Enter the URL of your GitHub Enterprise and click `Next, Install App`.

> [!warning]
> If your GitHub Enterprise Server is not reachable from the internet, enable the Broker setting.
> 
> For details about how the Aikido Broker works, [see the documentation.](https://help.aikido.dev/miscellaneous-info/aikido-broker-for-internal-applications)

<figure><img src="https://help.aikido.dev/_assets/b8d7a36c818f/image-414.png" alt=""><figcaption></figcaption></figure>

**Install Aikido Github App on your Github Enterprise**

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

After granting access and validating the repositories you want to scan, Aikido will automatically start scanning. After about 1 minute, you should see the first results come in

#### Managing the GitHub Enterprise App

[connect-additional-organizations-to-aikido.md](https://help.aikido.dev/code-scanning/connect-your-source-code/connect-github-enterprise/connect-additional-organizations-to-aikido)

[transferring-ownership-of-the-aikido-app-in-github-enterprise.md](https://help.aikido.dev/code-scanning/connect-your-source-code/connect-github-enterprise/transferring-ownership-of-the-aikido-app-in-github-enterprise)
