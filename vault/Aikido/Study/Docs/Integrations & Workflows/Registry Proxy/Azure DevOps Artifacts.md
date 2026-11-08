---
title: "Azure DevOps Artifacts"
source: https://help.aikido.dev/miscellaneous-integrations/private-registries/azure-devops-artifacts
section: Integrations & Workflows
fetched: 2026-11-08
generated: ingest_docs
---
# Azure DevOps Artifacts

Route your registry traffic through Aikido's registry proxy by configuring Azure DevOps Artifacts as an intermediary. Artifacts pulls packages from Aikido instead of the public registries, so every package your team installs is checked for malware, age restrictions, and known vulnerabilities.

> [!warning]
> Azure DevOps Artifacts only supports custom upstream sources for **NPM**.

### Get your Aikido proxy URL

Go to [Settings > Registry Proxy](https://app.aikido.dev/issues/aikido-libraries/setup-instructions), select **NPM**, and copy the upstream proxy URL.

<figure><img src="https://help.aikido.dev/_assets/b07282b87198/Screenshot-2026-08-11-at-09.34.58.png" alt=""><figcaption></figcaption></figure>

### Add Aikido as an upstream source

1. In Azure DevOps Project, go to **Artifacts** and open your feed.
2. Click **Feed settings** (the gear icon).
3. Go to the **Upstream sources** tab and click **Add upstream**.
4. Select **Public source** as the source type
5. Fill in the configuration:
   * **Public source**: `Custom registry`
   * **Public source URL**: paste your Aikido proxy URL from step 1
   * **Package type**: `npm`
   * **Upstream source name**: `aikido`
6. Enter `@aikidosec/mcp` in the **Validation** field and click **Validate** to confirm the connection works.
7. Click **Validate**, and then **Add**.
8. Click **Save**

### Remove the default npm upstream source

To ensure all npm traffic goes through Aikido instead of the public registry directly:

1. In the same **Upstream sources** tab, find the existing `npmjs` upstream source.
2. Click the delete icon next to it and confirm removal.

### Configure Developer Machines to use Azure Artifacts

Point each developer's npm client at the Artifacts feed. See Microsoft's documentation for the exact steps:

[Connect to a feed as a developer (npm)](https://learn.microsoft.com/en-us/azure/devops/artifacts/npm/npmrc)

### (Optional) Block the public registry with Device Protection

Once Artifacts is in place, developers can still bypass it by pointing npm directly at the public registry. Deploy Aikido Device Protection to enforce that all traffic goes through your private registry.

[block-public-package-registries.md](https://help.aikido.dev/aikido-device-protection/using-aikido-endpoint/block-public-package-registries)
