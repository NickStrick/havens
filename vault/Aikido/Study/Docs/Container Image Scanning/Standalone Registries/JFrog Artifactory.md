---
title: "JFrog Artifactory"
source: https://help.aikido.dev/container-image-scanning/standalone-registries/jfrog-artifactory
section: Container Image Scanning
fetched: 2026-11-08
generated: ingest_docs
---
# JFrog Artifactory

You can integrate your JFrog Artifactory with Aikido to scan your images for known vulnerabilities.

Follow the simple steps below to activate this feature:

**Step 1:** In JFrog, we have to collect some data including your username and a JWT access token. The username is the value displayed in the Users table. To start, click 'User Management' on the top right.

![Platform configuration menu with options for projects, user management, and security settings.](https://help.aikido.dev/_assets/6bc1e9e39e6a/ucarecdn-60292b5b-d3ea-419e-bd9a-de1ae813979d.png)

Then, click 'Access Tokens' on the left menu:

![Platform configurations sidebar showing user management and security access token options.](https://help.aikido.dev/_assets/d029f87eb734/ucarecdn-b129e49d-ddcd-4d3c-91a0-e8a6985bb250.png)

In the top-right corner, click 'Generate token' and fill out the settings as below:

![Generate Token window for creating a scoped user access token with custom settings.](https://help.aikido.dev/_assets/4ec3c577b6b4/ucarecdn-4b6a8174-27ee-4951-b337-d07c26e15f32.png)

**Step 2:** Enter the collected data in Aikido (direct link: [https://app.aikido.dev/settings/container-image-registry/add/artifactory](https://app.aikido.dev/settings/container-image-registry/add/artifactory))

![Form for connecting to JFrog Artifactory container image registry using credentials and URL.](https://help.aikido.dev/_assets/7d9f16bc8439/ucarecdn-8e0d84ce-752d-41b6-9d68-7767d65d4f2d.png)

**Step 3:** Aikido will now find all container repositories you can access and list them.

**Step 4:** Repositories can be linked to a code repository in order to perform better deduplication of findings. This step is optional!

**Step 5:** In the action menu next to the registry, click 'scan repos in registry' to get started. Results will appear in the Feed!

***
