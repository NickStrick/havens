---
title: "Get Required Values + Set Up Configuration to Connect Azure Cloud via Public API"
source: https://help.aikido.dev/cloud-scanning/connect-your-cloud/azure/get-required-values-set-up-configuration-to-connect-azure-cloud-via-public-api
section: Cloud scanning
fetched: 2026-11-08
generated: ingest_docs
---
# Get Required Values + Set Up Configuration to Connect Azure Cloud via Public API

Log into your [**Azure Portal**](https://portal.azure.com/) and navigate to the **Microsoft Entra ID service** (Formerly known as Azure Active Directory).

Select **App registration**

![](https://help.aikido.dev/_assets/5656b732482f/ucarecdn-7272798b-6ece-4bc5-9e40-df364a5e7a1f.png)

Give the application a meaningful name, we need this name later.

Leave the "Supported account types" default: "Accounts in this organizational directory only".

Click "Register"

![](https://help.aikido.dev/_assets/fb6a60b3d246/ucarecdn-4690d5db-e42d-4d8d-93a0-b978333c1364.png)

You get redirected to the detail page of the newly created application. Here you can find and copy the **Application (client) ID** and the **Directory (tenant) ID**

![](https://help.aikido.dev/_assets/00352549f3b0/ucarecdn-f919c8fa-39ae-4cb0-9bec-2d25b03306b4.png)

At the client credentials field, click "Add a certificate or secret"

![](https://help.aikido.dev/_assets/32881ca907b6/ucarecdn-5d15f5a3-597a-473f-87d0-733e9859afaa.png)

Click the "New client secret"-button, give a description for the secret and set the expiration date to 2 years (730 days / 24 months)

![](https://help.aikido.dev/_assets/daeb8b0fe497/ucarecdn-121cb5f1-e88a-4223-b42d-a4c8333dc37c.png)

Copy the **Secret's Value**

![](https://help.aikido.dev/_assets/573f68cf5ced/ucarecdn-04e75758-4d58-4f1f-bacd-bac394368b76.png)

Navigate to Subscriptions, Copy the **Subscription ID** of the relevant subscription.

![](https://help.aikido.dev/_assets/476c95d77aba/ucarecdn-ba21e769-470f-45ac-8943-e91e79e38637.png)

You now have all the required values to add the Azure Cloud via the Public API once the application setup is complete in Azure Portal.

Go to the subscription detail page. Now we need to make sure we grant access to the roles we need.

Click on **"Access Control (IAM)"**.

![](https://help.aikido.dev/_assets/5cc670c8a815/ucarecdn-4b484f3d-1809-4a49-aab8-73b3c23cdcbd.png)

Go to the Role assignments tab & Click on **"Add"**, then **"Add role assignment"**.

![](https://help.aikido.dev/_assets/aba2099e54ec/ucarecdn-0d132105-5281-4e43-a5df-068e79afe0d1.png)

In the **"Role"**-list, search and select **"Security Reader"** & Click **"Next"**.

![](https://help.aikido.dev/_assets/8a57d5402592/ucarecdn-2db28119-d664-4080-9e28-5871d87b0111.png)

Leave the **"Assign access to"** default value.

Click on **"Select Members"**, search for the name of the app registration (e.g. "AikidoSecurity") you created and select it.

Click **"Select"**

Click **"Review + assign"** twice

![](https://help.aikido.dev/_assets/6cc23f3ab68d/ucarecdn-c423fb1d-21e0-43ed-b243-f26cf556418a.png)

Repeat the role assignment process for the role **"Log Analytics Reader"**.

Now the application has the required roles to do the security scanning. You can now add this cloud using the public API.
