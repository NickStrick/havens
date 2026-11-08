---
title: "GitLab Container Registry"
source: https://help.aikido.dev/container-image-scanning/standalone-registries/gitlab-container-registry
section: Container Image Scanning
fetched: 2026-11-08
generated: ingest_docs
---
# GitLab Container Registry

You can now integrate your (cloud) GitLab Container Registry with Aikido to scan your containers for known vulnerabilities.

Follow the simple steps below to activate this feature:

**Step 1:** Log into your GitLab account to gather some data.

We'll have to gather your username (see screenshot)

![User profile dropdown displaying name, username, and status option in a web application.](https://help.aikido.dev/_assets/5f47e080c18d/ucarecdn-7a56ad48-6f3c-4291-97c1-b36896ef0de0.png)

**Step 2:** Copy the group ID where the container registry resides (see screenshot)

![Organization profile showing group name, privacy status, plan type, and group ID.](https://help.aikido.dev/_assets/d6f5fd1508fc/ucarecdn-9c7c898a-dc4e-4169-82c2-708df1c479f1.png)

**Step 3:** Under personal preferences, Access tokens, create a new token for Aikido (direct link: [https://gitlab.com/-/user\_settings/personal\_access\_tokens](https://gitlab.com/-/user_settings/personal_access_tokens)).

The scopes included must be: read\_api, read\_registry

See screenshot:

![Form for creating a new personal access token with selectable API access scopes.](https://help.aikido.dev/_assets/97ead855a9bb/ucarecdn-167e7af9-436c-43f9-a585-a6bd0d693234.png)

**Step 4:** Enter the collected data in Aikido (direct link: [https://app.aikido.dev/settings/container-image-registry/add/gitlab](https://app.aikido.dev/settings/container-image-registry/add/gitlab))

![GitLab container registry connection form: enter username, access token, and group ID.](https://help.aikido.dev/_assets/f5f6b346484d/ucarecdn-88cde87d-a1da-4a9a-9443-f1befbf61c9f.png)

**Step 5:** Aikido will now find all container repositories you can access and list them.

**Step 6:** Repositories can be linked to a code repository in order to perform better deduplication of findings. This step is optional!

**Step 7:** In the action menu next to the registry, click 'scan repos in registry' to get started. Results will appear in the Feed!

***
