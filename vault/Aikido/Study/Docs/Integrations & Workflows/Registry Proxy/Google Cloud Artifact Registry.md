---
title: "Google Cloud Artifact Registry"
source: https://help.aikido.dev/miscellaneous-integrations/private-registries/gcp-artifact-registry
section: Integrations & Workflows
fetched: 2026-11-08
generated: ingest_docs
---
# Google Cloud Artifact Registry

Route your registry traffic through Aikido's registry proxy by configuring Google Cloud Artifact Registry as an intermediary. Artifact Registry pulls packages from Aikido instead of the public registries, so every package your team installs is checked for malware, age restrictions, and known vulnerabilities.

> [!warning]
> Artifact Registry does not support NuGet, so NuGet packages cannot be routed through Aikido this way.

### Get your Aikido proxy URL

Go to [Settings > Registry Proxy](https://app.aikido.dev/issues/aikido-libraries/setup-instructions), select your ecosystem and copy the upstream proxy URL

<figure><img src="https://help.aikido.dev/_assets/b07282b87198/Screenshot-2026-08-11-at-09.34.58.png" alt=""><figcaption></figcaption></figure>

### Create a Remote Repository in Artifact Registry

1. In the Google Cloud Console, go to **Artifact Registry > Repositories**.
2. Click **Create Repository**.
3. Give the repository a name, for example `aikido`.
4. Set **Format** to match your ecosystem (npm, Python, or Maven).
5. Set **Repository mode** to **Remote**.
6. Under **Remote repository source**, select **Custom**.
7. In the **Custom repository** field, paste your Aikido proxy URL from step 1.
8. Set **Remote repository authentication mode** to **Unauthenticated**.
9. Choose a **Region** and click **Create**.

> [!warning]
> The **Custom repository URL** is immutable after creation. If you need to change it, delete the repository and create a new one.

### (Optional) Create a Virtual Repository

If you also publish internal packages to a Standard repository in Artifact Registry, create a Virtual Repository that aggregates both:

1. Go to **Artifact Registry > Repositories > Create Repository**.
2. Set **Format** to match your remote repository and **Repository mode** to **Virtual**.
3. Add your Standard repository and the Remote repository from step 2 as upstream repositories.
4. Assign a priority to each upstream: higher priority is preferred when a package exists in multiple upstreams.
5. Point your package manager at the Virtual Repository URL instead.

This gives your team a single registry endpoint that serves both internal packages and externally proxied packages through Aikido.

### Configure Developer Machines to use Artifact Registry

Point each developer's package manager at the Artifact Registry repository (the Virtual Repository, if you created one). See Google Cloud's documentation for the exact steps:

**npm**
[Configure authentication for npm](https://cloud.google.com/artifact-registry/docs/nodejs/authentication)

**Python**
[Configure authentication for Python](https://cloud.google.com/artifact-registry/docs/python/authentication)

**Maven**
[Configure authentication for Maven](https://cloud.google.com/artifact-registry/docs/java/authentication)

### (Optional) Block the public registry with Device Protection

Once Artifact Registry is in place, developers can still bypass it by pointing their package manager directly at the public registry. Deploy Aikido Device Protection to enforce that all traffic goes through your private registry.

[block-public-package-registries.md](https://help.aikido.dev/aikido-device-protection/using-aikido-endpoint/block-public-package-registries)
