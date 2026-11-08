---
title: "REST API & Web App Scanning"
source: https://help.aikido.dev/dast-surface-monitoring/api-scanning/rest-api-scanning
section: DAST&Surface Monitoring
fetched: 2026-11-08
generated: ingest_docs
---
# REST API & Web App Scanning

> [!warning]
> **Agentic Scan is the recommended option for testing REST APIs and web apps.** It covers the same OWASP risks as the REST scanner (SQL injection, path traversal, shell injection) plus business-logic flaws, IDOR and cross-tenant data leaks that fuzzing cannot find. See [Aikido Pentest](https://help.aikido.dev/pentests/aikido-pentest).

Aikido can scan your REST API and Web App endpoints to uncover critical endpoint vulnerabilities, such as SQL injection or path traversal. Aikido uses API fuzzing, which essentially includes spamming dangerous payloads to each field in your API.

> [!danger]
> NEVER run on a production environment, always on staging to avoid potential downtime

### Main Use Cases <a href="#main-use-cases" id="main-use-cases"></a>

**Critical Vulnerability Detection**:

* SQL injection
* NoSQL injection
* Path traversal
* Shell injection

You can see all checks in the [Aikido app here](https://app.aikido.dev/domains/checks?scanner=rest).

### Setting up REST API Scanning <a href="#setting-up-rest-api-scanning" id="setting-up-rest-api-scanning"></a>

**Step 1:** Click **Add Domain** in the [Domain Overview](https://app.aikido.dev/domains), expand **Advanced** in the scan-type chooser and select **REST API**

![Choose scan type modal with the Advanced section expanded showing REST API and GraphQL options.](https://help.aikido.dev/_assets/7bcef72c2b99/Screenshot-2026-06-26-at-11.20.03.png)

**Step 2.** Enter the domain name of your **staging environment**. Ensure this is the base URL for your REST APIs (e.g., `https://example.io/api`)

![API domain name input field for application configuration.](https://help.aikido.dev/_assets/3d6c8c7e2e8d/ucarecdn-ba74a958-2462-4a6c-88b5-40f2fe05d53d.png)

**Step 3:** Add your OpenAPI specification using one of these options:

* [**Connect to Zen App (recommended)**](https://help.aikido.dev/zen-firewall/getting-started-with-zen-firewall): Integrate with Zen to automatically discover and update API endpoints for continuous scanning. More info about Zen [can be found here](https://help.aikido.dev/section/zen-by-aikido/sgIt4HRxlrFr). No manual work or maintenance needed!
* [**Generate via Aikido AI (in beta)**](https://help.aikido.dev/dast-surface-monitoring/api-scanning/autogenerate-openapi-via-aikido-ai-code2swagger)**:** Using your codebase Aikido will generate an OpenAPI spec. No manual work is needed. Regular rescans keep everything current.
* **Fetch from URL:** Provide a URL that has the latest version of your OpenAPI spec. Aikido will fetch the spec before each scan.
* **Manual Upload**: Upload a OpenAPI file to define your API endpoints. You will be required to manually update and upload your spec each time new API endpoints are added or changed.

![Add or upload an OpenAPI spec to scan for security risks; staging use only.](https://help.aikido.dev/_assets/64b39df48419/Screenshot-2025-07-02-at-16.22.50.png)

**Step 4:** Add authorization information to your API to make sure Aikido can access endpoints that require login. You can do this by clicking the triple dots action menu on the domain, and then '**Authenticate Domain**'

![Domain action menu with options: Start scan, Edit, Authenticate, and Delete domain.](https://help.aikido.dev/_assets/e5ee7225452f/ucarecdn-93e28303-bdd8-43f4-ad11-ed62a73d5cc7.png)

This will trigger the modal where you can fill in the authentication details. For the full list of supported authentication methods, see [Authenticated API Scanning for REST/GraphQL](https://help.aikido.dev/dast-surface-monitoring/api-scanning/authenticated-api-scanning-for-rest-graphql).

![Domain authentication setup form with input fields for API URL, email, and password.](https://help.aikido.dev/_assets/3c5ab0eba214/ucarecdn-42a1f3d3-08d5-4a6b-a142-aeaaeda72705.png)

### Identifying Aikido traffic

All requests coming from Aikido REST and GraphQL scans will have:

* the `User-Agent` set to `aikido-scan-agent/1.0`
* the following header `aikido-api-test` set to value `1` in the request
* [will come from the IP's documented here](https://help.aikido.dev/dast-surface-monitoring/miscellaneous/allowing-ip-addresses-for-dast-surface-monitoring)
