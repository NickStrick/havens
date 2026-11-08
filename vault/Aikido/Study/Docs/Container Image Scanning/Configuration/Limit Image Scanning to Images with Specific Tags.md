---
title: "Limit Image Scanning to Images with Specific Tags"
source: https://help.aikido.dev/container-image-scanning/configuration/limit-image-scanning-to-images-with-specific-tags
section: Container Image Scanning
fetched: 2026-11-08
generated: ingest_docs
---
# Limit Image Scanning to Images with Specific Tags

By default, Aikido will always scan **the last image that was uploaded** in your docker repository.

In some cases it might be interesting to make sure only an image tagged with a specific tag (such as 'production-') is scanned.

Aikido allows you to set a tag filter per image. Go to [container settings ](https://app.aikido.dev/settings/container-image-registry)and click the triple dots action menu to enable this

![Docker repo management interface with options to add, scan, or edit tag filters.](https://help.aikido.dev/_assets/3f4b93b32d4b/ucarecdn-ff0ba934-e45e-48d7-97fb-6ee210259479.png)

It's possible to scan only images that start with specific words such as 'production-12345678'. To do this, enter the tag production-\* using \* as a wildcard.

***
