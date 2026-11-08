---
title: "Compiled artifact scanning with Local Scanner"
source: https://help.aikido.dev/container-image-scanning/local-image-scanning/file-system-scanning-with-local-scanner
section: Container Image Scanning
fetched: 2026-11-08
generated: ingest_docs
---
# Compiled artifact scanning with Local Scanner

Use Aikido Local Scanner's image mode to directly scan compiled artifacts on a filesystem. Simply direct the scanning command to the desired folder.

```shellscript
aikido-local-scanner image-scan /path/to/directory --image-name my-image-name --apikey AIK-xxx
```
