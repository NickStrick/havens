---
title: "GitLab Self Managed Container Registry"
source: https://help.aikido.dev/container-image-scanning/standalone-registries/gitlab-self-managed-container-registry
section: Container Image Scanning
fetched: 2026-11-08
generated: ingest_docs
---
# GitLab Self Managed Container Registry

You can integrate your GitLab Self Managed Container Registry with Aikido to scan your containers for known vulnerabilities.

Follow the simple steps below to activate this feature:

**Step 1:** Log into your GitLab account to gather some data.

We'll have to gather your username (see screenshot)

![](https://help.aikido.dev/_assets/5f47e080c18d/ucarecdn-7a56ad48-6f3c-4291-97c1-b36896ef0de0.png)

**Step 2:** Copy the group ID where the container registry resides (see screenshot)

![](https://help.aikido.dev/_assets/d6f5fd1508fc/ucarecdn-9c7c898a-dc4e-4169-82c2-708df1c479f1.png)

**Step 3:** Go to **Personal Preferences** >> **Access tokens**, and create a new personal access token for Aikido ([direct link](https://gitlab.com/-/user_settings/personal_access_tokens)). Make sure to set the correct scopes: `read_api`, `read_registry`

> [!warning]
> Make sure to create a **Personal Access Token**, and not an **Impersonation Token**.

![](https://help.aikido.dev/_assets/97ead855a9bb/ucarecdn-167e7af9-436c-43f9-a585-a6bd0d693234.png)

**Step 4:** Enter the collected data in Aikido (direct link: [https://app.aikido.dev/settings/container-image-registry/add/gitlab-self](https://app.aikido.dev/settings/container-image-registry/add/gitlab-self))

![Form to connect GitLab self-hosted container image registry with required credentials.](https://help.aikido.dev/_assets/52a1486fa611/ucarecdn-1d74b1b9-dacb-49e5-840f-1d3e7e38ab6e.png)

**Step 5:** Aikido will now find all container repositories you can access and list them.

**Step 6:** Repositories can be linked to a code repository in order to perform better deduplication of findings. This step is optional!

**Step 7:** In the action menu next to the registry, click 'scan repos in registry' to get started. Results will appear in the Feed!

## Connect a registry on an internal network (Broker)

If your GitLab instance or its container registry is not reachable from the internet, connect them through the [Aikido Broker](https://help.aikido.dev/miscellaneous-info/aikido-broker-for-internal-applications).

> [!warning]
> GitLab usually serves the container registry on a different host than the GitLab instance. Add **both** as Broker resources:
> 
> 1. The GitLab instance URL, for example `https://gitlab.example.com`
> 2. The registry URL, for example `https://registry.example.com`
> 
> You can find the registry URL in GitLab under **Deploy > Container Registry**, or in the `registry_external_url` setting of your `gitlab.rb`.

**Add both resources to the Broker**

On the [Broker Clients page](https://app.aikido.dev/settings/integrations/broker/clients), add the GitLab instance URL and the registry URL as resources on your broker client.

**Use the GitLab instance's Broker URL**

In the Aikido registry form (Step 4), enter the Broker URL of the **GitLab instance** resource in the **Instance Url** field. You don't need to paste the registry's Broker URL anywhere.

**Scan the registry**

Start the scan as described in Step 7. If you see `unable to login to registry ... Client.Timeout exceeded`, the registry host is missing from your Broker resources, or the Broker can't reach it. Check the `ALLOWED_INTERNAL_SUBNETS` and `DNS_SERVERS` settings of your broker.

***
