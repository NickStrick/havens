---
title: "Harbor Container Registry"
source: https://help.aikido.dev/container-image-scanning/standalone-registries/harbor-container-registry
section: Container Image Scanning
fetched: 2026-11-08
generated: ingest_docs
---
# Harbor Container Registry

You can now integrate your Harbor Container Registry with Aikido, to scan your images for known vulnerabilities.

Follow the simple steps below to activate this feature:

#### Start in Harbor

**Step 1:** In Harbor, under Administration, then 'Robot Accounts', create a new Robot Account for Aikido. Give it a name and set `expiration time` to `never.`

<figure><img src="https://help.aikido.dev/_assets/89361cc7101f/image-382.png" alt=""><figcaption></figcaption></figure>

**Step 2:** Select System Permissions. Make sure to set `Catalog` to `Read`

<figure><img src="https://help.aikido.dev/_assets/6bc00b135c43/image-383.png" alt=""><figcaption></figcaption></figure>

**Step 3.** Select Project Permissions. Set `Artifact` to `List`, and `Repository` to `List,Pull` .

<figure><img src="https://help.aikido.dev/_assets/7fb40e0a3f66/image-384.png" alt=""><figcaption></figcaption></figure>

#### **Continue in Aikido**

**Step 1:** Enter the collected data in Aikido (direct link: [https://app.aikido.dev/settings/container-image-registry/add/harbor](https://app.aikido.dev/settings/container-image-registry/add/harbor))

![Form to connect and authenticate with a Harbor container image registry.](https://help.aikido.dev/_assets/0c1bda81c5c1/ucarecdn-22c23924-d0cf-4564-8a8c-97cc8173fcc1.png)

**Step 2:** Aikido will now find all container repositories you can access and list them.

**Step 3:** Repositories can be linked to a code repository in order to perform better deduplication of findings. This step is optional!

**Step 4:** In the action menu next to the registry, click 'scan repos in registry' to get started. Results will appear in the Feed!

***
