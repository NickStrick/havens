---
title: "How to test if Device Protection is working"
source: https://help.aikido.dev/aikido-device-protection/miscellaneous-aikido-endpoint/how-to-test-device-protection
section: Aikido Device Protection
fetched: 2026-11-08
generated: ingest_docs
---
# How to test if Device Protection is working

Use one of the methods below to verify that Aikido Device Protection is active on your machine.

## Quick check (recommended)

Open the link below in your browser. The page will immediately show whether your device is protected or not.

https://device-protection.aikido.help/

<figure><img src="https://help.aikido.dev/_assets/652f35f0089b/Screenshot-2026-05-21-at-13.04.24.png" alt="" width="563"><figcaption></figcaption></figure>

## Package-based test

Install a safe test package in your preferred language. These packages are harmless and exist solely to trigger a detection.

**npm**
```bash
npm install aikido-endpoint-test
```

**pip**
```bash
pip install safe-chain-pi-test
```

**NuGet**
[https://www.nuget.org/packages/AikidoEndpointTest](https://www.nuget.org/packages/AikidoEndpointTest)

**Go**
```
go install github.com/Aikido-demo-apps/endpoint-golang-test@latest
```

## IDE extension test

Install the test extension in your editor. It will trigger a detection if Device Protection is running.

* **VS Code:** [Aikido Endpoint Test](https://marketplace.visualstudio.com/items?itemName=AikidoSecurity.aikido-endpoint-test)
* **Open VSX (e.g. Cursor, Windsurf):** [Aikido Endpoint Test](https://open-vsx.org/extension/AikidoSecurity/aikido-endpoint-test)

Test package or extension not blocked? See [Why is a Package Not Blocked?](https://help.aikido.dev/aikido-device-protection/using-aikido-endpoint/why-is-a-package-not-blocked)

## Automated test

```shellscript
#!/bin/bash
curl -s https://device-protection.aikido.help/ | grep -q "Device Protection Active"
```

This script will return exit code `0` when Device Protection is active, and exit code `1` when it's not.
