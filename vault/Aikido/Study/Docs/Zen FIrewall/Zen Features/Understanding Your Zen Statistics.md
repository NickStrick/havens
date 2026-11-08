---
title: "Understanding Your Zen Statistics"
source: https://help.aikido.dev/zen-firewall/zen-features/understanding-your-zen-statistics
section: Zen FIrewall
fetched: 2026-11-08
generated: ingest_docs
---
# Understanding Your Zen Statistics

Zen gather statistics to offer a clear, at-a-glance view of your application's traffic and Zen's protective actions.

### Stats tab <a href="#stats-tab" id="stats-tab"></a>

At the top of the page, you'll find two key graphs. The **Requests** graph shows the "Amount requests seen" by your application over time, helping you understand typical traffic patterns and spot unusual spikes. Below it, the **Attacks** graph displays the number of "Attacks blocked" and "Attacks detected" by Zen, visually confirming active protection and showing when attacks occur.

![App statistics dashboard showing request volume and detected attacks over time.](https://help.aikido.dev/_assets/03e0efc77527/Screenshot-2025-10-30-at-12.09.14.png)

### Invocation Details: Understanding Attack Paths (Sinks) <a href="#invocation-details-understanding-attack-paths-sinks" id="invocation-details-understanding-attack-paths-sinks"></a>

The **Invocation Details** section, also known as "Sinks," provides a detailed breakdown of the different attack vectors Zen monitors within your application. Use this to identify frequently targeted or potentially vulnerable parts of your application. These differ per language.

![Invocation statistics for HTTP, SQL, shell, and I/O operations over the past week.](https://help.aikido.dev/_assets/d9e1eddeb0e2/understanding-your-zen-statistics_b219f4b1-5b25-435d-95fd-43.png)

### Route-Specific Statistics <a href="#route-specific-statistics" id="route-specific-statistics"></a>

For granular insights, the **Routes** table details traffic and protection for each of your application's paths.

![API routes dashboard showing request rates, rate limits, and detection status for each endpoint.](https://help.aikido.dev/_assets/0d8ce4dbda74/understanding-your-zen-statistics_913f50b7-85c2-4457-8087-8f.png)

### Outbound-Specific Statistics <a href="#outbound-specific-statistics" id="outbound-specific-statistics"></a>

Finally, the **Outbound** section summarises all outbound calls & services Zen is currently monitoring. This view helps you quickly verify that all intended services are monitored and check their recent activity.

![Outbound network activity summary for My App, showing requests by hostname and last seen times.](https://help.aikido.dev/_assets/fedde77ade69/understanding-your-zen-statistics_33bc48f6-a234-4475-b25b-6b.png)
