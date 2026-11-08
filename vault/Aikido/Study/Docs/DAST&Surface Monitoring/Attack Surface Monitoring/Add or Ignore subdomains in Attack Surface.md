---
title: "Add or Ignore subdomains in Attack Surface"
source: https://help.aikido.dev/dast-surface-monitoring/attack-surface-scanning/add-or-ignore-subdomains-in-attack-surface
section: DAST&Surface Monitoring
fetched: 2026-11-08
generated: ingest_docs
---
# Add or Ignore subdomains in Attack Surface

By default, Aikido automatically discovers subdomains related to your domain. In some cases, you may want to manually add a subdomain (for assets that aren’t detected automatically) or exclude a subdomain (for assets that fall outside of your scope or don’t need scanning).

## Why manage subdomains?

* Add subdomains: Ensure important assets (like api.example.com) are included in your security scans.
* Exclude subdomains: Reduce noise and avoid scanning third-party or out-of-scope services (like a test environment or marketing site hosted elsewhere).

## Adding a subdomain

1. Navigate to your domain overview page.
2. Go to the Subdomains tab.
3.  Click Add Subdomain in the top right.<br>

    <figure><img src="https://help.aikido.dev/_assets/2bc7bf14940a/Screenshot-2025-09-19-at-11.00.48.png" alt=""><figcaption></figcaption></figure>
4.  Enter the subdomain you want to monitor.<br>

    <figure><img src="https://help.aikido.dev/_assets/02e895f34a27/Screenshot-2025-09-19-at-11.00.36.png" alt=""><figcaption></figcaption></figure>
5. Confirm to include it in future scans.

## Excluding a subdomain

1. From the Subdomains tab, find the subdomain in the list.
2.  Open the Actions menu (three dots on the right).<br>

    <figure><img src="https://help.aikido.dev/_assets/01897320e07f/Screenshot-2025-09-19-at-11.00.30.png" alt=""><figcaption></figcaption></figure>
3. Select Exclude Subdomain.
4. The subdomain will no longer be scanned.
