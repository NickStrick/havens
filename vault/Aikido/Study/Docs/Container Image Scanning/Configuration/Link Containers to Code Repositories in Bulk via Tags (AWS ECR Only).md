---
title: "Link Containers to Code Repositories in Bulk via Tags (AWS ECR Only)"
source: https://help.aikido.dev/container-image-scanning/configuration/link-containers-to-code-repositories-in-bulk-via-tags-aws-ecr-only
section: Container Image Scanning
fetched: 2026-11-08
generated: ingest_docs
---
# Link Containers to Code Repositories in Bulk via Tags (AWS ECR Only)

Linking containers to code repositories keeps related vulnerabilities in one place. This is useful when you manage many repositories and images.

Aikido can link containers automatically by reading a specific tag on the AWS ECR repository during scanning.

> [!warning]
> This only works for AWS ECR repositories.

### Required tag

You must add an AWS ECR repository tag with this exact key: `aik:repository`

Set the tag value to the full URL of the code repository you want to link.

Example:

<table><thead><tr><th width="177.1796875">Key</th><th>Value</th></tr></thead><tbody><tr><td><code>aik:repository</code></td><td> <code>https://github.com/AikidoSec/demo-app-1</code></td></tr></tbody></table>

> [!info]
> This must be a tag on the **ECR repository**. It is not an image tag.

### How it works

On the next scan, Aikido reads the `aik:repository` tag. It then links the scanned container images to that repository automatically.

### Required AWS permission

If you use the Aikido scanner for containers, the scanner role also needs: `ecr:ListTagsForResource`

Without this permission, Aikido cannot read the repository tags.

***
