---
title: "Composer - plugin-api-version changes"
source: https://help.aikido.dev/autofix-and-remediation/faq/composer-plugin-api-version-changes
section: Autofix & Remedation
fetched: 2026-11-08
generated: ingest_docs
---
# Composer - plugin-api-version changes

By default AutoFix is using Composer 2.6, when you're using a different composer version this can lead to unwanted updates of the `plugin-api-version` field in the lockfile:

<figure><img src="https://help.aikido.dev/_assets/ef59042db6be/image-385.png" alt=""><figcaption></figcaption></figure>

To avoid these changes, you can specify the composer version that should be used by AutoFix. The composer version can be configured in `composer.json` by adding the following configuration:

```
{
    "config": {
        "platform": {
            "composer": "2.9.0"
        }
    }
}
```
