---
title: "Cloudsmith Container Registry"
source: https://help.aikido.dev/container-image-scanning/standalone-registries/cloudsmith-container-registry
section: Container Image Scanning
fetched: 2026-11-08
generated: ingest_docs
---
# Cloudsmith Container Registry

You can integrate your Cloudsmith's Container Registry with Aikido, to scan your images for known vulnerabilities.

Follow the simple steps below to activate this feature:

**Step 1:** Log into your Cloudsmith account and navigate to API Settings.

See screenshot below.

We'll have to gather an API Key. Direct URL: [https://cloudsmith.io/user/settings/api/](https://cloudsmith.io/user/settings/api/)

![User account dropdown menu displaying settings, documentation links, and logout option.](https://help.aikido.dev/_assets/69724972e213/ucarecdn-bb3a1b86-d787-4566-8712-e3ff29a8f9ed.png)

You can copy the API key directly from this screen:

![API key management and restriction settings for Cloudsmith account integration and security.](https://help.aikido.dev/_assets/62d7b7be189c/ucarecdn-bd01d550-c677-423f-9ebd-e9260b2833a2.png)

**Step 2:** Enter the collected data in Aikido (direct link: [https://app.aikido.dev/settings/container-image-registry/add/cloudsmith](https://app.aikido.dev/settings/container-image-registry/add/cloudsmith))

![Form to connect and authenticate a Cloudsmith container image registry account.](https://help.aikido.dev/_assets/77e1c108e713/ucarecdn-794eaef4-1fac-4a30-a710-c00889f12a8f.png)

* **Username** can be found in your user account on top (see first screenshot above)
* **Organization Namespace** can be found here:

![Organization membership management dashboard showing user role and organization options.](https://help.aikido.dev/_assets/cb4116dba907/ucarecdn-9043f1ca-03bc-472a-a2b9-51763d085696.png)

**Step 3:** Aikido will now find all container repositories you can access and list them.

**Step 4:** Repositories can be linked to a code repository in order to perform better deduplication of findings. This step is optional!

**Step 5:** In the action menu next to the registry, click 'scan repos in registry' to get started. Results will appear in the Feed!

***
