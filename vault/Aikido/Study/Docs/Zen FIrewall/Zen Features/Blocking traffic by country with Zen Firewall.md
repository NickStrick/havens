---
title: "Blocking traffic by country with Zen Firewall"
source: https://help.aikido.dev/zen-firewall/zen-features/blocking-traffic-by-country-with-zen-firewall
section: Zen FIrewall
fetched: 2026-11-08
generated: ingest_docs
---
# Blocking traffic by country with Zen Firewall

Zen Firewall by Aikido helps you control access to your application based on geographic location. This feature enhances your security measures by providing precise control over which countries can access your application.

> **Important**: Country blocking operates independently of the global "[Blocking/Detection Mode](https://help.aikido.dev/zen-firewall/zen-features/blocking-vs-detection-mode-in-zen-firewall)" setting. When you enable country blocks, they will always be enforced, even if Zen is in Detection Mode.

## Use Cases <a href="#use-cases" id="use-cases"></a>

* 🛡️ **Comply with Regulations**: Restrict access from countries based on compliance requirements
* 💰 **Reduce Fraud**: Block traffic from high-risk regions known for malicious activities
* 🔒 **Data Protection**: Limit access to specific geographic regions for data sovereignty
* ⚡ **Focus Resources**: Optimize performance by serving only your target markets

## How to monitor or block country traffic <a href="#how-to-block-country-traffic" id="how-to-block-country-traffic"></a>

Select a specific app and continue to the **Firewall** tab. Click the "**Manage Countries**" next to "**Block Traffic by Countries**" to configure Country blocking.

![Firewall settings interface for blocking attacks, bots, Tor traffic, threat IPs, and countries.](https://help.aikido.dev/_assets/080b88ee69e1/Screenshot-2025-10-30-at-12.03.07.png)

You can either **select the countries to allow**, or **select the ones to block** using the blocking mode. Use the **Countries** dropdown to select the lists you want to enable and click on "**Save Changes**".&#x20;

![Interface for selecting and blocking IPs from specific countries.](https://help.aikido.dev/_assets/c8bd78a01337/Screenshot-2025-08-13-at-17.26.42.png)

> [!info]
> Note that country blocking is not immediate; it takes up to a minute for the block to take effect.
