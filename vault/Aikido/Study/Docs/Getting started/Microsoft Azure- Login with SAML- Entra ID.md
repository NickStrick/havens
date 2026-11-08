---
title: "Microsoft Azure- Login with SAML- Entra ID"
source: https://help.aikido.dev/getting-started/automated-user-management/saml-login/microsoft-azure-login-with-saml-entra-id
section: Getting started
fetched: 2026-11-08
generated: ingest_docs
---
# Microsoft Azure: Login with SAML/ Entra ID

> [!info]
> This feature is only available on a **paying** plan and is not enabled by default. **Pro plans and up** can enable SAML [via this link](https://app.aikido.dev/settings/saml/enable).

> If you switch to SAML Login instead of auto-onboarding via your Git provider, team import from GitHub, Bitbucket, or Azure DevOps will no longer work. You will need to manage your teams manually moving forward, either through the Aikido UI or [Access Profiles.](https://help.aikido.dev/getting-started/automated-user-management/saml-login/saml-user-rights-access-profiles-recommended)

## Setting up SAML in your account <a href="#setting-up-saml-in-your-account" id="setting-up-saml-in-your-account"></a>

**Step 1.** Go to [**General Settings**](https://app.aikido.dev/settings/account) and click '**Enable SAML Authentication'**

![Workspace info screen with option to enable SAML authentication for GitHub account.](https://help.aikido.dev/_assets/b3fa1945a39a/ucarecdn-226233e4-b7ed-4614-a3c7-2316aa00830e.png)

**Step 2.** Copy **all details** to your identity provider. See steps below.

![SAML Authentication setup screen showing required URLs and Name ID format for configuration.](https://help.aikido.dev/_assets/f812c17e0fb1/ucarecdn-09a7d874-2d07-4f24-b41c-83eb4ae62a50.png)

### Continue in Azure <a href="#continue-in-azure" id="continue-in-azure"></a>

**Step 1.** Go to **Microsoft Entra ID**.

**Step 2.** Click the **Add** dropdown and select **Enterprise application**.

![Adding a new enterprise application in Microsoft Azure Active Directory.](https://help.aikido.dev/_assets/21df21bf05fa/ucarecdn-e2b0c97b-cd57-473d-a88b-ae86bae5f17e.jpeg)

**Step 3.** Click **Create your own application**, choose a name for your app and select 'Non-gallery'.

![Creating a custom non-gallery application named "Aikido-SSO" for integration purposes.](https://help.aikido.dev/_assets/63d33f19c1f7/ucarecdn-34300cbc-6836-46d3-bcda-326d3726eaac.jpeg)

**Step 4.** Select **Set up single sign on**.

![Aikido-SSO application setup: Assign users and configure single sign-on in Microsoft Entra.](https://help.aikido.dev/_assets/a61926c49dab/ucarecdn-041ab86f-83f5-4f7d-b318-3a5e4b8a4fdb.jpeg)

**Step 5.** Click the **SAML** option.

![Enable SAML single sign-on for secure application authentication in Aikido-SSO.](https://help.aikido.dev/_assets/b57c88861452/ucarecdn-1659ec2c-7283-426d-894c-48ef502505ec.jpeg)

**Step 6.** On **step 1**, click **Edit.**

![Basic SAML Configuration: Edit required Identifier and Reply URL fields.](https://help.aikido.dev/_assets/608b95f6d726/ucarecdn-62185eb3-6a97-427b-b914-3a1ec840b54c.jpeg)

**Step 7.** Fill in the **Entity ID** and **ACS URL** as shown in Aikido.

![Configuration screen for SAML SSO with Entity ID and Reply URL fields specified.](https://help.aikido.dev/_assets/ce2b8029859b/ucarecdn-b29695e0-9d2a-4f64-9a88-e30172e85348.jpeg)

**Step 8.** At **step 2**, click **Edit.**

![User attributes and claims mapping with editable options highlighted.](https://help.aikido.dev/_assets/f16bd9ea5b57/ucarecdn-0cc0859a-2fbd-4ca9-9442-c8114c034d3b.jpeg)

**Step 9.** Click the **Unique User Identifier (Name ID)**.\
Optional: clicking 'Add new claim' at the top of this page allows you to add [custom attributes](https://help.aikido.dev/getting-started/automated-user-management/saml-login/saml-user-rights-using-custom-attributes-advanced) to SAML. More info [here](https://help.aikido.dev/doc/microsoft-azure-custom-attributes-with-saml--entra-id/docFaysVwVZy).

![Highlighted SAML claim: Unique User Identifier (Name ID) for user identification.](https://help.aikido.dev/_assets/dc985cfa496f/ucarecdn-c58d21d6-7556-43db-96eb-3f2b81663b8d.jpeg)

**Step 10.** Make sure to set **Source attribute** to `user.mail` here.

![Configuring a SAML claim for user email as the name identifier in Azure AD.](https://help.aikido.dev/_assets/202d5722f976/ucarecdn-7359629d-6b9b-4c7a-822a-46ddb14ae30e.jpeg)

**Step 11.** At step 3 you can download the **Certificate (Base64)** & at step 4 you'll see the **Login URL** and **Mircosoft Entra Identifier**. These should be copy and pasted to Aikido.

### Go back to Aikido <a href="#go-back-to-aikido" id="go-back-to-aikido"></a>

* Fill in the **Entity ID / Issuer** using Azure's **Microsoft Entra Identifier**, and the **Single Sign-On URL** using Azure's **Login URL** (both from Step 11), plus the **X.509 Certificate** as shown in Azure.
* Also fill out the **Company Domain** to make sure people can log in without the need of a Single Sign-On URL.

![SAML Authentication setup form for configuring Single Sign-On (SSO) credentials.](https://help.aikido.dev/_assets/1acc81347648/ucarecdn-282cde57-79ed-4aab-bddb-bd4073327ee6.png)

> Success! People having access to your Azure SAML app will now be able to auto-onboard to your Aikido workspace.

### 2 options for users to login using your SAML client <a href="#id-2-options-for-users-to-login-using-your-saml-client" id="id-2-options-for-users-to-login-using-your-saml-client"></a>

**Option 1. Using SSO Link Directly**

Copy the Login Link and share this internally with other users.

![SAML Authentication settings with options to manage or copy the login link.](https://help.aikido.dev/_assets/35258271cad0/ucarecdn-13d717d7-9d5e-4dd1-ab34-4d5b6455f475.png)

**Option 2.** Going to the Aikido login screen, selecting **Login Via SSO** and filling in the email address **Important**: the email needs to contain the company domain that has been set up.

![One-click login and sign-up with Google, Microsoft, or SSO; no credit card needed.](https://help.aikido.dev/_assets/4ddaccfd09ee/ucarecdn-a72d4e17-3465-4a72-bd1b-5b15115eb4da.png)

![Login screen offering Google, Microsoft, or email sign-in options.](https://help.aikido.dev/_assets/057d29061835/ucarecdn-2ec57086-151e-48f9-ab55-0c1ac60cafb1.png)
