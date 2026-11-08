---
title: "GraphQL API Scanning"
source: https://help.aikido.dev/dast-surface-monitoring/api-scanning/graphql-api-scanning
section: DAST&Surface Monitoring
fetched: 2026-11-08
generated: ingest_docs
---
# GraphQL API Scanning

> [!warning]
> **Agentic Scan is the recommended option for testing GraphQL APIs.** It covers fuzzing-style checks plus business-logic flaws, IDOR and cross-tenant data leaks that the GraphQL scanner cannot find. See [Aikido Pentest](https://help.aikido.dev/pentests/aikido-pentest).

Aikido can scan your GraphQL API endpoints to uncover endpoint vulnerabilities specifically related to GraphQL. One of the methods we use is API fuzzing, which essentially includes spamming dangerous payloads to each field in your API.

> [!danger]
> NEVER run on a production environment, always on staging to avoid potential downtime

### Main Use Cases <a href="#main-use-cases" id="main-use-cases"></a>

You can see all checks in the [Aikido app here](https://app.aikido.dev/domains/checks?scanner=graphql).

### Setting up GraphQL API Scanning <a href="#setting-up-graphql-api-scanning" id="setting-up-graphql-api-scanning"></a>

**Step 1:** Click **Add Domain** in the [Domain Overview](https://app.aikido.dev/domains), expand **Advanced** in the scan-type chooser and select **GraphQL**

![Choose scan type modal with the Advanced section expanded showing REST API and GraphQL options.](https://help.aikido.dev/_assets/7bcef72c2b99/Screenshot-2026-06-26-at-11.20.03.png)

**Step 2.** Enter the domain name of your **staging environment**. Ensure this is the base URL for your GraphQL APIs (e.g., `https://example.io/graphql`)

![Input field for entering a GraphQL endpoint domain name.](https://help.aikido.dev/_assets/eef60791f21a/ucarecdn-7d9ed9dd-97d3-4063-8a12-d15534fa4430.png)

**Step 3:** Click save, Aikido will now scan your GraphQL API.

**Step 4. Authorization:** Note that you can also add authorization information if this is required to talk to your API. You can do this by clicking the triple dots action menu on the domain, and then '**Authenticate Domain**'

![Domain action menu offering scan, configuration, authentication, and delete options.](https://help.aikido.dev/_assets/e5ee7225452f/ucarecdn-93e28303-bdd8-43f4-ad11-ed62a73d5cc7.png)

This will trigger the modal where you can fill in the authentication details. For the full list of supported authentication methods, see [Authenticated API Scanning for REST/GraphQL](https://help.aikido.dev/dast-surface-monitoring/api-scanning/authenticated-api-scanning-for-rest-graphql).

![Domain authentication setup form for enabling form-based login credentials.](https://help.aikido.dev/_assets/3c5ab0eba214/ucarecdn-42a1f3d3-08d5-4a6b-a142-aeaaeda72705.png)

### Identifying Aikido traffic

All requests coming from Aikido REST and GraphQL scans will have:

* the `User-Agent` set to `aikido-scan-agent/1.0`
* the following header `aikido-api-test` set to value `1` in the request
* [will come from the IP's documented here](https://help.aikido.dev/dast-surface-monitoring/miscellaneous/allowing-ip-addresses-for-dast-surface-monitoring)
