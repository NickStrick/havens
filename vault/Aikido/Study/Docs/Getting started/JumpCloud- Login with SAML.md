---
title: "JumpCloud- Login with SAML"
source: https://help.aikido.dev/getting-started/automated-user-management/saml-login/jumpcloud-login-with-saml
section: Getting started
fetched: 2026-11-08
generated: ingest_docs
---
# JumpCloud: Login with SAML

> [!info]
> This feature is only available on a **paying** plan and is not enabled by default. **Pro plans and up** can enable SAML [via this link](https://app.aikido.dev/settings/saml/enable).

> If you switch to SAML Login instead of auto-onboarding via your Git provider, team import from GitHub, Bitbucket, or Azure DevOps will no longer work. You will need to manage your teams manually moving forward, either through the Aikido UI or [Access Profiles.](https://help.aikido.dev/getting-started/automated-user-management/saml-login/saml-user-rights-access-profiles-recommended)

## Setting up SAML in your account <a href="#setting-up-saml-in-your-account" id="setting-up-saml-in-your-account"></a>

**Step 1.** Go to [**General Settings**](https://app.aikido.dev/settings/account) and click '**Enable SAML Authentication'**

![Workspace info page with option to enable SAML authentication.](https://help.aikido.dev/_assets/b3fa1945a39a/ucarecdn-226233e4-b7ed-4614-a3c7-2316aa00830e.png)

**Step 2.** Copy **all details** to your identity provider. See steps below.

![SAML authentication setup screen with required URLs and Name ID format.](https://help.aikido.dev/_assets/f812c17e0fb1/ucarecdn-09a7d874-2d07-4f24-b41c-83eb4ae62a50.png)

### Continue in JumpCloud <a href="#continue-in-jumpcloud" id="continue-in-jumpcloud"></a>

**Step 1.** Go to **User Authentication** > **SSO Applications** in the JumpCloud Admin Portal navigation.

**Step 2.** Click the **Add New Application** and search for **SAML 2.0**. Click **Next**.

**Step 3.** Choose a **Display Label** and click **Save Application**.

**Step 4.** Click **Configure Application**.

**Step 5.** Click on the **SSO** tab and fill following fields:

* **Idp Entity ID:** `https://console.jumpcloud.com/<appname>`
* **SP Entity ID:** `https://app.aikido.dev/saml`
* **ACS URLs** - **Default URL:** `https://app.aikido.dev/api/saml/saml_auth?samlClientId=...` (As shown in Aikido)
* **SAMLSubject NameID:** `email`
* **SAMLSubject NameID Format:** `urn:oasis:names:tc:SAML:1.1:nameid-format:emailAddress`
* **Signature Algorithm:** `RSA-SHA256`
* **Default RelayState:** You can leave this empty

![SAML 2.0 single sign-on configuration settings for secure identity management integration.](https://help.aikido.dev/_assets/4ed268f73b25/ucarecdn-05b8da4a-cc77-4099-856c-70e00b369a45.png)

**Step 6.** We'll continue in Aikido, but you might as well click **Save** and come back to this screen.

### Go back to Aikido <a href="#go-back-to-aikido" id="go-back-to-aikido"></a>

* Fill in the:
  * **Entity ID / Issuer:** `https://console.jumpcloud.com/<appname>` (Make sure this matches what you've entered as **Idp Entity ID** in JumpCloud. If you're having issues with this, see the Troubleshooting section at the bottom)
  * **Single Sign-On URL:** as shown in JumpCloud under **IDP URL**. (looks like `https://sso.jumpcloud.com/saml2/<appname>`)
  * **X.509 Certificate**: This can be fetched in different ways. One way is to click **Export Metadata** in JumpCloud the config and open the downloaded xml. You'll find your certificate between the `ds:X509Certificate` tags.
* Also fill out the **Company Domain** to make sure people can log in without the need of a Single Sign-On URL.

![SAML Authentication setup form for configuring identity provider details.](https://help.aikido.dev/_assets/1acc81347648/ucarecdn-282cde57-79ed-4aab-bddb-bd4073327ee6.png)

> Success! People having access to your JumpCloud SAML app will now be able to auto-onboard to your Aikido workspace.

### 2 options for users to login using your SAML client <a href="#id-2-options-for-users-to-login-using-your-saml-client" id="id-2-options-for-users-to-login-using-your-saml-client"></a>

**Option 1. Using SSO Link Directly**

Copy the Login Link and share this internally with other users.

![SAML Authentication settings with options to manage or copy the login link.](https://help.aikido.dev/_assets/35258271cad0/ucarecdn-13d717d7-9d5e-4dd1-ab34-4d5b6455f475.png)

**Option 2.** Going to the Aikido login screen, selecting **Login Via SSO** and filling in the email address **Important**: the email needs to contain the company domain that has been set up.

![One-click login and sign-up with Google, Microsoft, or SSO, with no credit card needed.](https://help.aikido.dev/_assets/4ddaccfd09ee/ucarecdn-a72d4e17-3465-4a72-bd1b-5b15115eb4da.png)

![Login screen with Google, Microsoft, and email login options.](https://help.aikido.dev/_assets/057d29061835/ucarecdn-2ec57086-151e-48f9-ab55-0c1ac60cafb1.png)

### Troubleshooting <a href="#troubleshooting" id="troubleshooting"></a>

**Error**

![SAML client already exists error; prompts user to contact support for linking organization.](https://help.aikido.dev/_assets/3f8bb4215183/ucarecdn-5f7761f9-08db-4072-8559-0567d1bfc719.png)

**Solution**

Make sure the **Idp Entity ID** is unique. Perhaps you could change it to `https://console.jumpcloud.com/<samlClientId>`. Note that you'll also need to change it in Aikido in **Entity ID / Issuer** as these should match.
