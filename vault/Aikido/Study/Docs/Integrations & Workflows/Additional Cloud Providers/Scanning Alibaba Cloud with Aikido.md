---
title: "Scanning Alibaba Cloud with Aikido"
source: https://help.aikido.dev/workflows-and-guides/additional-cloud-providers/scanning-alibaba-cloud-with-aikido
section: Integrations & Workflows
fetched: 2026-11-08
generated: ingest_docs
---
# Scanning Alibaba Cloud with Aikido

Aikido fully supports protecting workloads on Alibaba Cloud through specific integrations. A native integration may be added in the future, but you can already achieve full coverage by combining:<br>

* [**Container image scanning**](https://help.aikido.dev/workflows-and-guides/additional-cloud-providers/scanning-alibaba-cloud-with-aikido#container-image-scanning) for Alibaba Cloud registry or any other OCI-compatible registry
* [**Kubernetes cluster scanning**](https://help.aikido.dev/workflows-and-guides/additional-cloud-providers/scanning-alibaba-cloud-with-aikido#kubernetes-cluster-scanning) for Alibaba Cloud Managed Kubernetes or self-managed clusters
* [**Kubernetes cluster image scanning**](https://help.aikido.dev/workflows-and-guides/additional-cloud-providers/scanning-alibaba-cloud-with-aikido#kubernetes-cluster-image-scanning) for Alibaba Cloud Managed Kubernetes or self-managed clusters
* [**Virtual machine scanning**](https://help.aikido.dev/workflows-and-guides/additional-cloud-providers/scanning-alibaba-cloud-with-aikido#virtual-machine-scanning) via the Local VM Scanner on Alibaba Cloud instances

## Features

### Container image scanning

Alibaba Cloud’s container registry and most third-party registries you use from Alibaba Cloud are OCI-compatible, so they can be scanned using Aikido.

Create a read-only or pull-only user in Alibaba Cloud registry: [https://www.alibabacloud.com/help/en/acr/user-guide/configure-access-credentials?spm=a2c63.p38356.0.i1#task617](https://www.alibabacloud.com/help/en/acr/user-guide/configure-access-credentials?spm=a2c63.p38356.0.i1#task617)

Follow the OCI guide below to configure container image scanning

[generic-oci-compatible-registry.md](https://help.aikido.dev/container-image-scanning/standalone-registries/generic-oci-compatible-registry)

### Kubernetes cluster scanning

If you use Alibaba Cloud Managed Kubernetes or run your own Kubernetes clusters on Alibaba Cloud VMs, you can connect them as generic Kubernetes clusters.

[kubernetes-cluster-scanning](https://help.aikido.dev/cloud-scanning/kubernetes-cluster-scanning)

### Kubernetes cluster image scanning

If you use Alibaba Cloud Managed Kubernetes or run your own Kubernetes clusters on Alibaba Cloud VMs, you can scan the images of running containers with Kubernetes image scanning.

[kubernetes-in-cluster-image-scanning.md](https://help.aikido.dev/cloud-scanning/kubernetes-cluster-scanning/kubernetes-in-cluster-image-scanning)

### Virtual Machine scanning

To scan Virtual Machines on Alibaba Cloud, use the Local VM Scanner. It inspects packages, system dependencies and configuration directly on the instance.

[local-vm-scanning](https://help.aikido.dev/virtual-machine-scanning/local-vm-scanning)

You can roll this out centrally using your usual automation tooling (e.g. Ansible, Terraform-provisioned scripts, or cloud-init) so that new Alibaba Cloud instances are automatically enrolled.
