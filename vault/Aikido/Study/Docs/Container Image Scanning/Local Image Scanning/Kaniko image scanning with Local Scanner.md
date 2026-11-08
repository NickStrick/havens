---
title: "Kaniko image scanning with Local Scanner"
source: https://help.aikido.dev/container-image-scanning/local-image-scanning/setting-up-kaniko-image-scanning-with-local-scanner
section: Container Image Scanning
fetched: 2026-11-08
generated: ingest_docs
---
# Kaniko image scanning with Local Scanner

When performing image scans using the Aikido Local Scanner, the Docker daemon is used to find the image to perform the scan on. Since [Kaniko](https://github.com/GoogleContainerTools/kaniko) does not depend on a Docker daemon, an alternative approach is needed. That approach is to create a tarball and perform the scan on that tarball.

You can create a tarball from your image using the `--tar-path` flag in your kaniko build command. Alternatively, you can download a tar version of the image from the repository.

Once the tarball is available, use this command to perform the scan.

```shellscript
aikido-local-scanner image-scan /my-image.tar --image-name my-image-name --apikey AIK-xxx
```
