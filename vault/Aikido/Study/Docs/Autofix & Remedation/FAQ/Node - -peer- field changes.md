---
title: "Node - -peer- field changes"
source: https://help.aikido.dev/autofix-and-remediation/faq/node-peer-field-changes
section: Autofix & Remedation
fetched: 2026-11-08
generated: ingest_docs
---
# Node - "peer" field changes

The default settings for the "peer" field in `package-lock.json` files depend on the version of node & npm you're using. This can cause AutoFix to change remove all "peer" fields or change the value from false to true.

AutoFix uses the node & npm version specified in the [engines section](https://docs.npmjs.com/cli/v11/configuring-npm/package-json#engines) of your `package.json` file. Make sure the node version and npm version in your `package.json` match the version you're using locally and in your CI/CD. By algining the versions, you will avoid changes to the `package-lock.json` files by AutoFix.

For example:

```
{
  "engines": {
    "node": "22",
    "npm": "11.14.1"
  }
}
```
