---
title: "Google Workspaces- Login with SAML"
source: https://help.aikido.dev/getting-started/automated-user-management/saml-login/google-workspaces-login-with-saml
section: Getting started
fetched: 2026-11-08
generated: ingest_docs
---
# Google Workspaces: Login with SAML

> [!info]
> This feature is only available on a **paying** plan and is not enabled by default. **Pro plans and up** can enable SAML [via this link](https://app.aikido.dev/settings/saml/enable).

> If you switch to SAML Login instead of auto-onboarding via your Git provider, team import from GitHub, Bitbucket, or Azure DevOps will no longer work. You will need to manage your teams manually moving forward, either through the Aikido UI or [Access Profiles.](https://help.aikido.dev/getting-started/automated-user-management/saml-login/saml-user-rights-access-profiles-recommended)

### Setting up SAML in your account <a href="#setting-up-saml-in-your-account" id="setting-up-saml-in-your-account"></a>

**Step 1.** Go to [**General Settings**](https://app.aikido.dev/settings/account) and click '**Enable SAML Authentication'**

![Workspace info page showing option to enable SAML authentication.](https://help.aikido.dev/_assets/b3fa1945a39a/ucarecdn-226233e4-b7ed-4614-a3c7-2316aa00830e.png)

**Step 2.** Copy **all details** to your identity provider. See steps below.

![SAML Authentication setup screen with required URLs and Name ID format fields.](https://help.aikido.dev/_assets/f812c17e0fb1/ucarecdn-09a7d874-2d07-4f24-b41c-83eb4ae62a50.png)

### Continue in Google <a href="#continue-in-google" id="continue-in-google"></a>

**Step 1.** Go to **Apps** > **Web and mobile apps** in the Google Admin Console.

**Step 2.** Click the **Add app** dropdown and select **Add custom SAML app**.

**Step 3.** Choose an **App name** and click **Continue**.

**Step 4.** Ignore the metadata page for now, we'll get this information later on. Click **Continue**.

**Step 5.** Fill the fields **ACS URL**, **Entity ID** and **Name ID format** with the fields visible in Aikido (see above) and click **Continue** and click **Finish**.

**Step 6.** Now you should be on the detail page of your newly created app. Click **Download Metadata**.

### Go back to Aikido <a href="#go-back-to-aikido" id="go-back-to-aikido"></a>

* Fill in the **Entity ID / Issuer**, **Single Sign-On URL** and **X.509 Certificate** as shown in the modal in Google.
* Also fill out the **Company Domain** to make sure people can log in without the need of a Single Sign-On URL.

![SAML authentication setup form requiring identity provider and company domain details.](https://help.aikido.dev/_assets/1acc81347648/ucarecdn-282cde57-79ed-4aab-bddb-bd4073327ee6.png)

> Success! People having access to your Google SAML app will now be able to auto-onboard to your Aikido workspace.

### 2 options for users to login using your SAML client <a href="#id-2-options-for-users-to-login-using-your-saml-client" id="id-2-options-for-users-to-login-using-your-saml-client"></a>

**Option 1. Using SSO Link Directly**

Copy the Login Link and share this internally with other users.

![SAML Authentication settings with options to manage or copy the login link.](https://help.aikido.dev/_assets/35258271cad0/ucarecdn-13d717d7-9d5e-4dd1-ab34-4d5b6455f475.png)

**Option 2.** Going to the Aikido login screen, selecting **Login Via SSO** and filling in the email address **Important**: the email needs to contain the company domain that has been set up.

![One-click login and sign-up with Google, Microsoft, or SSO, with no credit card needed.](https://help.aikido.dev/_assets/4ddaccfd09ee/ucarecdn-a72d4e17-3465-4a72-bd1b-5b15115eb4da.png)

![Login options: Google, Microsoft, or email for account access.](https://help.aikido.dev/_assets/057d29061835/ucarecdn-2ec57086-151e-48f9-ab55-0c1ac60cafb1.png)
