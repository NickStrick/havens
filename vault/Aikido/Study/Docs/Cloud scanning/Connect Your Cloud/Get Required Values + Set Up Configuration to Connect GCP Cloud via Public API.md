---
title: "Get Required Values + Set Up Configuration to Connect GCP Cloud via Public API"
source: https://help.aikido.dev/cloud-scanning/connect-your-cloud/gcp/get-required-values-+-set-up-configuration-to-connect-gcp-cloud-via-public-api
section: Cloud scanning
fetched: 2026-11-08
generated: ingest_docs
---
# Get Required Values + Set Up Configuration to Connect GCP Cloud via Public API

Login to your [Google Cloud](https://console.cloud.google.com/) and click your **project name** in the header to open the resource selection modal.

Select the project you want to add and save your **project id**

<figure><img src="https://help.aikido.dev/_assets/a35c49adb8c8/image-149.png" alt=""><figcaption></figcaption></figure>

Activate a cloud shell

<figure><img src="https://help.aikido.dev/_assets/00082e0b0d5a/image-150.png" alt=""><figcaption></figcaption></figure>

Paste and execute following command. A success message should be visible.

```
gcloud services enable compute.googleapis.com storage-component.googleapis.com iam.googleapis.com container.googleapis.com logging.googleapis.com monitoring.googleapis.com cloudresourcemanager.googleapis.com cloudkms.googleapis.com bigquery-json.googleapis.com dns.googleapis.com sqladmin.googleapis.com
```

Create a [service account](https://console.cloud.google.com/iam-admin/serviceaccounts/create). You can freely name the account but we recommend having **aikido** in it.

<figure><img src="https://help.aikido.dev/_assets/a3ac45bf0d9f/image-151.png" alt="" width="375"><figcaption></figcaption></figure>

Add both **Security Reviewer** and **Viewer** roles

<figure><img src="https://help.aikido.dev/_assets/c80f5f56abb9/image-152.png" alt="" width="375"><figcaption></figcaption></figure>

Click **done**, step 3 of the create service account can be skipped

Navigate to the detail page of the newly created service account

Go to the **Keys** tab and **create a new key**

<figure><img src="https://help.aikido.dev/_assets/96a87d2c979a/image-153.png" alt="" width="375"><figcaption></figcaption></figure>

Select the **JSON** option. A json-file should be downloaded. Save this file.

You can now connect this cloud to Aikido using the public API.
