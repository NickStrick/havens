---
title: "Attack Wave Protection"
source: https://help.aikido.dev/zen-firewall/zen-features/attack-wave-protection
section: Zen FIrewall
fetched: 2026-11-08
generated: ingest_docs
---
# Attack Wave Protection

The internet is constantly being scanned by automated tools. Security scanners like Nuclei, ZAP, Wapiti, and SQLMap probe applications for weaknesses, looking for sensitive files, testing hidden directories, and injecting malicious payloads. These reconnaissance attempts flood your servers with requests that waste CPU cycles and generate endless 404 errors.

## How It Works

Zen automatically detects these attack waves in real time by spotting probing patterns. For example:

* An IP making 15 suspicious requests within a minute.
* Attempts to access files like .env or wp-config.php.
* Requests for hidden directories like .git/config.
* Payloads designed to trigger SQL injection errors.<br>

When this behavior is detected, Zen flags it as an attack wave. This shifts your security posture from reactive to proactive, giving you instant visibility into who is systematically probing your applications.<br>

## What You’ll See

A live feed in your Aikido dashboard showing which IPs are targeting your applications.

<figure><img src="https://help.aikido.dev/_assets/e26a99287637/Screenshot-2025-09-03-at-17.54.04.png" alt=""><figcaption></figcaption></figure>

<figure><img src="https://help.aikido.dev/_assets/1e9f18bcb660/Screenshot-2026-01-05-at-12.36.30.png" alt=""><figcaption></figcaption></figure>

### Try It Yourself

You can easily simulate an attack wave to confirm Zen is working. Just click Simulate Attack in your dashboard and watch the events appear.

<figure><img src="https://help.aikido.dev/_assets/7ca18777be2d/Screenshot-2025-09-03-at-16.19.25.png" alt=""><figcaption></figcaption></figure>

## Block attack waves automatically

Use a [playbook](https://help.aikido.dev/zen-firewall/zen-features/playbooks) to block the IP behind an attack wave for a set period, without waiting for someone to act on the alert.
