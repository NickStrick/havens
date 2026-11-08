---
title: "Account Creation for Local Scanning"
source: https://help.aikido.dev/code-scanning/local-code-scanning/account-creation-for-local-scanning-on-aikido
section: Code Scanning
fetched: 2026-11-08
generated: ingest_docs
---
# Account Creation for Local Scanning

> [!warning]
> Aikido Local Scan accounts DO NOT have access to AutoFix within the UI. If you want to use AutoFix locally, install our IDE plugins (Visual Studio Code, Jetbrains etc) where AutoFix is available too.

### Introduction <a href="#introduction" id="introduction"></a>

This article explains the basic steps to take when you want to run Aikido's Local Scanner on your machine. Before you can install the Local Scanner, you need to make sure you have created the correct account type.

### System Requirements <a href="#system-requirements" id="system-requirements"></a>

Aikido recommends running the local scanner on a machine with 2-4 core CPUs with 8-16GB of RAM. Outbound traffic over HTTPS (443) should be allowed.

## How to Create a Local Scanning Account <a href="#how-to-create-a-local-scanning-account" id="how-to-create-a-local-scanning-account"></a>

> There are 2 ways of setting up a Local Scanning Account. The setup is different for users that have already authenticated with Google/O365.

### Local Scanning for Users Authenticated with Git (GitHub, GitLab, Bitbucket or Azure) <a href="#local-scanning-for-users-authenticated-with-git-github-gitlab-bitbucket-or-azure" id="local-scanning-for-users-authenticated-with-git-github-gitlab-bitbucket-or-azure"></a>

**Step 1:** Ensure you are **logged out** of any existing Aikido accounts to start fresh for Local Scanning setup.

**Step 2:** Navigate to the [Login Screen](https://app.aikido.dev/login) website and select 'Other Options'. Select your preferred login method (Microsoft or Google).<br>

<figure><img src="https://help.aikido.dev/_assets/ee69f5641173/image-393.png" alt=""><figcaption></figcaption></figure>

**Step 3:** Select Setup Local Scan on the Workspace Selection Page

<figure><img src="https://help.aikido.dev/_assets/0a08e1e1dcc4/image-394.png" alt=""><figcaption></figcaption></figure>

**Step 4:** Go through the flow and enter the necessary information. Once the T\&Cs are also accepted, you will land on an empty screen that will guide you to setup.\
​

![Dashboard overview for starting local security scanning with zero detected issues.](https://help.aikido.dev/_assets/cc35444b7f29/ucarecdn-6c626d54-ea42-4acc-aa3a-040e3be1b798.png)

### Local Scanning for Users Already Authenticated with Gmail/O365. <a href="#local-scanning-for-users-already-authenticated-with-gmailo365" id="local-scanning-for-users-already-authenticated-with-gmailo365"></a>

If you have already created a workspace with Gmail/O365 (e.g. GitLab Self Managed, Azure DevOps or another Local Scnner), the steps for setup slightly differ.

**Step 1.** When logged in with Gmail/O365, click the profile icon in the top right and select **Add Another Workspace**

![Profile and workspace management options in a user account menu.](https://help.aikido.dev/_assets/775ce7b15ddd/ucarecdn-7d93d969-b68c-4627-86af-afd4d16defe8.png)

**Step 2.** Select **Setup Local Scanning** on the setup page

<figure><img src="https://help.aikido.dev/_assets/0a08e1e1dcc4/image-394.png" alt=""><figcaption></figcaption></figure>

**Step 4:** Go through the flow and enter the necessary information. Once the T\&Cs are also accepted, you will land on an empty screen that will guide you to setup.\
​

### Installing Local Scanner on your Machine <a href="#installing-local-scanner-on-your-machine" id="installing-local-scanner-on-your-machine"></a>

Once the setup is complete, you're all set to install Aikido's Local Scanner on your machine. Follow one of the links provided to access additional help articles for installation and setup.

* [**Aikido Local Scanning for Mac**](https://help.aikido.dev/code-scanning/local-code-scanning/mac-setup-for-local-code-scanning)
* [**Aikido Local Scanning for Windows**](https://help.aikido.dev/code-scanning/local-code-scanning/windows-setup-for-local-code-scanning)
* [**Aikido Local Scanning for Linux**](https://help.aikido.dev/code-scanning/local-code-scanning/linux-setup-for-local-code-scanning)
* [**Aikido Local Scanning in a Self-Managed GitLab Project**](https://help.aikido.dev/code-scanning/local-code-scanning/gitlab-self-managed-setup-for-local-code-scanning)
* [**Aikido Local Scanning in Azure DevOps Server**](https://help.aikido.dev/code-scanning/local-code-scanning/azure-devops-server-setup-for-local-code-scanning)
* [**Aikido Local Scanning for Jenkins**](https://help.aikido.dev/code-scanning/local-code-scanning/jenkins-setup-for-local-code-scanning)
* [**Aikido Local Scanning for Circle CI**](https://help.aikido.dev/code-scanning/local-code-scanning/circleci-setup-for-local-code-scanning)
* [**Aikido Local Scanning for GitHub Actions**](https://help.aikido.dev/code-scanning/local-code-scanning/github-action-setup-for-local-code-scanning)
* [**Aikido Local Scanning for Bitbucket Pipelines**](https://help.aikido.dev/code-scanning/local-code-scanning/bitbucket-pipeline-setup-for-local-code-scanning)
