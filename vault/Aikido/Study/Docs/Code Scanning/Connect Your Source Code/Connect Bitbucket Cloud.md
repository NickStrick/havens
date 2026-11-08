---
title: "Connect Bitbucket Cloud"
source: https://help.aikido.dev/code-scanning/connect-your-source-code/connect-bitbucket-account-to-aikido
section: Code Scanning
fetched: 2026-11-08
generated: ingest_docs
---
# Connect Bitbucket Cloud

## Connect Bitbucket Account to Aikido

Aikido requests read-only access to your Bitbucket organization to analyze your repositories. After analysis, your code is always wiped from the system.

### 1. Logging in using Bitbucket <a href="#id-1-logging-in-using-bitbucket" id="id-1-logging-in-using-bitbucket"></a>

To get started, navigate to [https://app.aikido.dev/](https://app.aikido.dev/) and log in with Bitbucket. This will look like the screenshot below. Here, Aikido only requests access to your identity on Bitbucket and the associated email address.

![Access request screen for account information by Aikido User Authentication, with grant or cancel options.](https://help.aikido.dev/_assets/f4ed2ae5e040/ucarecdn-10401885-4c52-4133-894a-48f9d2736781.png)

### 2. Authorizing access to an organization <a href="#id-2-authorizing-access-to-an-organization" id="id-2-authorizing-access-to-an-organization"></a>

On the next screen, you can choose to connect a real organization or a sample workspace. If you choose a real organization you will be redirected back to Bitbucket. Once there, pick the organization you would like to authorize.

![Aikido requests account and repository access; user must approve or deny.](https://help.aikido.dev/_assets/3b741c165160/ucarecdn-76533a25-f878-4c97-a437-e35e38c780ea.png)

### 3. Select your repos <a href="#id-3-select-your-repos" id="id-3-select-your-repos"></a>

You can optionally grant access to 1 or 2 repositories instead of all repositories as seen below:<br>

<figure><img src="https://help.aikido.dev/_assets/2bb54cace4b6/image-391.png" alt=""><figcaption></figcaption></figure>

### 4. Checking results <a href="#id-4-checking-results" id="id-4-checking-results"></a>

After granting access and validating the repositories you want to scan, Aikido will automatically start scanning. After about 1 minute, you should see the first results come in!
