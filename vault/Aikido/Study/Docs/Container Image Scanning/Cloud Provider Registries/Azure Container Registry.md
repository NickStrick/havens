---
title: "Azure Container Registry"
source: https://help.aikido.dev/container-image-scanning/cloud-provider-registries/image-scanning-for-azure-container-registry
section: Container Image Scanning
fetched: 2026-11-08
generated: ingest_docs
---
# Azure Container Registry

You can integrate your Azure Container Registry with Aikido to scan your containers for known vulnerabilities.

Follow the simple steps below to activate this feature:

**Step 1:** Log into your Azure account and navigate to the container registry you wish to link. We'll have to gather the registry name (login server), a secret token and the token username. The registry name can be found at the top of the detail page of the registry (see screenshot)

![Azure resource details: group, location, login server, and creation date displayed.](https://help.aikido.dev/_assets/846fa2712dc1/ucarecdn-9226ffcc-0273-435c-8839-a7fa71085dc0.png)

**Step 2:** To create a secret token that can pull the containers, scroll down in the left-hand menu to the 'Repository permission' section and click 'Tokens'. Name the token 'aikido' and create a new scope map. Aikido will need the 'content/read' scope to pull the images and the 'metadata/read' scope to list the images and tags available in your registry.

You can give Aikido access to all the images in the registry by using the '\*' wildcard character in the repository field. Alternatively, you can only give Aikido access to certain images by adding the permissions for each one.

![Creating a token with custom scope map and read-only repository permissions.](https://help.aikido.dev/_assets/9700d5aa1b79/ucarecdn-a6f3bfb9-bdd6-4b1b-beab-5be10b4f5ce5.png)

After creating the token you have to click it again to generate a password. That screen should look like the one below:

![Password generation screen prompting user to securely save new password and Docker login command.](https://help.aikido.dev/_assets/fbca1a00ca5c/ucarecdn-495a03ec-5d3e-4d89-b606-f9dd954cb206.png)

**Step 3:** Back in Aikido, go to settings, then [containers](https://app.aikido.dev/settings/container-image-registry). Click 'Connect registry' and pick

Azure Container Registry. Enter the data from the previous steps. Username being the Token name.

![Login form for accessing a private Azure container registry.](https://help.aikido.dev/_assets/3f6a203299dc/ucarecdn-0c692895-bdd8-4ea7-acdf-ca6256b5d566.png)

**Step 4:** Aikido will now find all container repositories you can access and list them.

**Step 5:** Repositories can be linked to a code repository in order to perform better deduplication of findings. This step is optional!

**Step 6:** In the action menu next to the registry, click 'Scan containers in registry' to get started. Results will appear in the Feed!

### &#x20;<a href="#set-up-azure-container-registry-scanning" id="set-up-azure-container-registry-scanning"></a>
