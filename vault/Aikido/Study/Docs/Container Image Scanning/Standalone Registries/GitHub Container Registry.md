---
title: "GitHub Container Registry"
source: https://help.aikido.dev/container-image-scanning/standalone-registries/github-container-registry
section: Container Image Scanning
fetched: 2026-11-08
generated: ingest_docs
---
# GitHub Container Registry

You can integrate your GitHub Container Registry with Aikido to scan your containers for known vulnerabilities.

> [!info]
> When connecting, make sure the `Inherit access from source repository` setting is **enabled** for all the containers you want to scan. Otherwise Aikido won't be able to read those.

Follow the simple steps below to activate this feature:

**Step 1:** Log into your GitHub account to gather some data.

We'll have to gather your username (see screenshot)

![GitHub user profile overview with avatar, username, followers, and edit profile option.](https://help.aikido.dev/_assets/b43c53c3f8f6/ucarecdn-bcdcbd95-3e97-4fa5-823a-23e54cc5005d.png)

**Step 2:** Copy the organisation name where the container registry resides. This is visible in the github-url (see screenshot)

![URL input field displaying "https://github.com/Organization" for organization link entry.](https://help.aikido.dev/_assets/df6c4a3e6a92/ucarecdn-42637ec3-0ed2-4016-9418-29470dee6e88.png)

**Step 3:** Under profile settings, developer settings, Personal access tokens, Tokens (classic), generate a new classic token for Aikido

(direct link: [https://github.com/settings/tokens](https://github.com/settings/tokens)).

the scope includes: `read:packages`

![GitHub token creation: No expiration, read package access scope selected.](https://help.aikido.dev/_assets/74e0b0a7d8da/ucarecdn-65b9dd8b-d552-46cc-b265-c9e0da804f01.png)

**Step 4:** Enter the collected data in Aikido (direct link: [https://app.aikido.dev/settings/container-image-registry/add/github](https://app.aikido.dev/settings/container-image-registry/add/github))

![Form to connect and authenticate a GitHub container image registry.](https://help.aikido.dev/_assets/93b72aa3611b/ucarecdn-1030004f-c2f0-436e-9e0b-e1af4dbaa814.png)

**Step 5:** Aikido will now find all container repositories you can access and list them.

**Step 6:** Repositories can be linked to a code repository in order to perform better deduplication of findings. This step is optional!

**Step 7:** In the action menu next to the registry, click 'scan repos in registry' to get started. Results will appear in the Feed!

### &#x20;<a href="#set-up-github-container-registry-scanning" id="set-up-github-container-registry-scanning"></a>
