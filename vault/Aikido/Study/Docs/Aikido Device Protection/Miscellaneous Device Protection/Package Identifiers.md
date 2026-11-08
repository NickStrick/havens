---
title: "Package Identifiers"
source: https://help.aikido.dev/aikido-device-protection/miscellaneous-aikido-endpoint/package-identifiers
section: Aikido Device Protection
fetched: 2026-11-08
generated: ingest_docs
---
# Package Identifiers

Find the correct package identifiers and signing details needed to allow or block apps in Aikido Device Protection. Each operating system and app ecosystem uses different identifiers and metadata.

## VSCode Marketplace / VSIX

Open the plugin you want to allow or block in the Marketplace and use the Identifier under installation.

<figure><img src="https://help.aikido.dev/_assets/89951eafd5c1/LanguageTool_Overlay.png" alt=""><figcaption></figcaption></figure>

## Chrome extensions

You can find the identifier in the URL of the extension:

```
https://chromewebstore.google.com/detail/name-of-extension/identifier
```

For example in the case of [Lighthouse](https://chromewebstore.google.com/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk):

```
url: https://chromewebstore.google.com/detail/lighthouse/blipmdconlkpinefehnmjammfjpmpbjk
identifier: blipmdconlkpinefehnmjammfjpmpbjk
```
