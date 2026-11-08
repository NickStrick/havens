---
title: "JFrog Artifactory"
source: https://help.aikido.dev/miscellaneous-integrations/private-registries/jfrog-artifactory
section: Integrations & Workflows
fetched: 2026-11-08
generated: ingest_docs
---
# JFrog Artifactory

Use Aikido Registry Proxy as the default upstream for Artifactory. The proxy blocks malware and enforces a minimum package age on every package your team installs.

The same Artifactory setup also lets you install [Aikido Libraries](https://help.aikido.dev/autofix-and-remediation/aikido-libraries-overview).

### Get your Aikido proxy URL

Go to [Settings > Registry Proxy](https://app.aikido.dev/issues/aikido-libraries/setup-instructions), select your ecosystem and copy the upstream proxy URL

<figure><img src="https://help.aikido.dev/_assets/b07282b87198/Screenshot-2026-08-11-at-09.34.58.png" alt=""><figcaption></figcaption></figure>

### Create a Remote Repository in Artifactory

1. In Artifactory, go to **Administration > Repositories**.
2. Click **New Repository** and select **Remote**.
3. Set **Package Type**
4. Give the repository a key, for example `aikido`.
5. Set the **URL** field to your Aikido proxy URL from step 1.
6. Save the repository.

> [!info]
> If packages don't reflect the latest data from Aikido, set the **Metadata Cache Lifetime** to `0` in the remote repository settings. This forces Artifactory to always fetch fresh metadata from the Aikido proxy instead of serving a cached version.

### (Optional) Create a Virtual Repository

If you also have internal packages stored in a local Artifactory repository, create a Virtual Repository that aggregates both:

1. Go to **Administration > Repositories > New Repository > Virtual**.
2. Set **Package Type** to match your remote repository
3. Add your local repository and the remote repository as members.
4. Point your package manager at the virtual repository URL instead.

This gives your team a single registry endpoint that serves both internal packages and externally proxied packages through Aikido.

### Configure Developer Machines to use Artifactory

Point each developer's package manager at the Artifactory repository. See JFrog's documentation for the exact steps:

**npm**
[npm repositories - connect your client](https://docs.jfrog.com/artifactory/docs/npm-repositories#connect-your-npm-client-to-artifactory)

**PyPI**
[PyPI repositories - connect your client](https://docs.jfrog.com/artifactory/docs/pypi-repositories#connect-your-pypi-client-to-artifactory)

**Maven**
[Maven repositories - connect your client](https://docs.jfrog.com/artifactory/docs/maven-repositories#connect-your-maven-client-to-artifactory)

**NuGet**
[NuGet repositories - connect your client](https://docs.jfrog.com/artifactory/docs/nuget-repositories#connect-your-nuget-client-to-artifactory)

### (Optional) Block the public registry with Device Protection

Once Artifactory is in place, developers can still bypass it by pointing their package manager directly at the public registry. Deploy Aikido Device Protection to enforce that all traffic goes through your private registry.

[block-public-package-registries.md](https://help.aikido.dev/aikido-device-protection/using-aikido-endpoint/block-public-package-registries)
