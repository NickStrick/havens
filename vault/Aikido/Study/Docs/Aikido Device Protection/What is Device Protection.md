---
title: "What is Device Protection"
source: https://help.aikido.dev/aikido-device-protection/endpoint-protection
section: Aikido Device Protection
fetched: 2026-11-08
generated: ingest_docs
---
# What is Device Protection

Device Protection gives you visibility and control over the software packages installed on your team's devices. It covers browser extensions, code libraries, IDE plugins, and build dependencies, all in one place.

> [!info]
> Your Device Protection covers the same number of devices as users in your plan. Need more? Contact us to add extra devices.

[supported-ecosystems.md](https://help.aikido.dev/aikido-device-protection/miscellaneous-aikido-endpoint/supported-ecosystems)

https://www.youtube.com/watch?t=5s&v=uN2QVB_lPYM

## Use cases

* Stop malware before it gets installed: Aikido automatically identifies known malicious packages and blocks them.
* Catch typosquatting out of the box: Every new package is scanned on first request, so typosquatting packages that carry malware are caught and stopped, no configuration required.
* Get full visibility into your software supply chain: See every browser extension, code library, IDE plugin, and build dependency installed across your team's devices.
* Lock down specific ecosystems: Block all installs from sources like Chrome or NPM when your team doesn't need them.
* Require approval for new packages: Let team members request installs while keeping admins in control of what gets approved.

## Getting started

Ready to start securing your devices from malware and malicious packages? Follow the steps below to deploy and configure Device Protection for your environment.

**Deploy the agent across your environment**

Deploy Aikido Device Protection across your organization using MDM or a manual installation. If you need different configurations for different teams or devices, you can create multiple groups.

[deploying-aikido-endpoint](https://help.aikido.dev/aikido-device-protection/deploying-aikido-endpoint)

**Configure ecosystems**

Configure your package protection settings, including supported ecosystems, allowlists, blocklists, minimum package age, and group-specific exceptions.

[configuring-installation-policies.md](https://help.aikido.dev/aikido-device-protection/using-aikido-endpoint/configuring-installation-policies)

**Learn more**

[browsing-packages.md](https://help.aikido.dev/aikido-device-protection/using-aikido-endpoint/browsing-packages)

[reviewing-install-requests.md](https://help.aikido.dev/aikido-device-protection/using-aikido-endpoint/reviewing-install-requests)
