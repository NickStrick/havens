---
title: "Manually Link Repository to Container"
source: https://help.aikido.dev/container-image-scanning/configuration/link-repository-to-container
section: Container Image Scanning
fetched: 2026-11-08
generated: ingest_docs
---
# Manually Link Repository to Container

Linking your container images to their corresponding code repositories centralizes related vulnerabilities, so you can view, triage, and fix them in the right context. Once linked:

* Container issues will appear directly within the relevant repo.
* You'll unlock Container Autofix, which updates Dockerfiles automatically with available fixes.

#### Ways to Link Containers

You can link containers to repositories in two ways:

* **Manual Linking** – Link specific repos to containers one by one.
* **Smart Suggestions** – Automatically link multiple containers using intelligent repo suggestions. [Learn more here →](https://help.aikido.dev/container-image-scanning/configuration/automatically-link-repository-to-container-via-smart-suggestions)

## Manually link a repository to a container <a href="#how-to-link-a-repository-to-a-container" id="how-to-link-a-repository-to-a-container"></a>

**Step 1**: Navigate to [Settings > Containers](https://app.aikido.dev/settings/container-image-registry) via the top right corner of the Aikido interface.

**Step 2:** Click the 🔗 **Link** button next to the container you want to connect.\
Use the search bar to find and select the correct repository.

![Docker image "openscurity/mobsfscan:latest" prompts to link an unlinked code repository.](https://help.aikido.dev/_assets/170818366bac/link-repository-to-container_74ab9881-0f6d-4c05-a475-281c18b.png)

![Dialog for linking a cloud image to the "Spoon-Knife" code repository.](https://help.aikido.dev/_assets/72dcab9e1a4b/link-repository-to-container_49a82ebf-5f16-4aa5-8044-fc7036e.png)

**Step 3**: To see all repositories linked to a container, go to in [Settings > Containers](https://app.aikido.dev/settings/container-image-registry). Use the `⋮` **three-dot menu** next to any linked repo to unlink it.
