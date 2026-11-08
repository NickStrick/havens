---
title: "DigitalOcean Container Registry"
source: https://help.aikido.dev/container-image-scanning/cloud-provider-registries/image-scanning-for-digitalocean-container-registry
section: Container Image Scanning
fetched: 2026-11-08
generated: ingest_docs
---
# DigitalOcean Container Registry

You can integrate your DigitalOcean Container Registry with Aikido to scan your containers for known vulnerabilities.

Follow the simple steps below to activate this feature:

**Step 1:** Log into your DigitalOcean account to gather some data.

We'll have to gather only a Personal Access Token (PAT). Direct URL: [https://cloud.digitalocean.com/account/api/tokens](https://cloud.digitalocean.com/account/api/tokens) (see screenshot below)

![Form to create a new personal access token with scope and expiration options.](https://help.aikido.dev/_assets/b46f9a655e33/ucarecdn-34100e62-59be-4a33-902d-20c0ebbd4418.png)

**Step 2:** Enter the collected data in Aikido (direct link: [https://app.aikido.dev/settings/container-image-registry/add/digitalocean](https://app.aikido.dev/settings/container-image-registry/add/digitalocean))

![Form to connect DigitalOcean container image registry with nickname and access token.](https://help.aikido.dev/_assets/512c03b83658/ucarecdn-937e0175-88c2-4c79-94f8-d015e01bdf18.png)

**Step 3:** Aikido will now find all container repositories you can access and list them.

**Step 4:** Repositories can be linked to a code repository in order to perform better deduplication of findings. This step is optional!

**Step 5:** In the action menu next to the registry, click 'scan repos in registry' to get started. Results will appear in the Feed!

***
