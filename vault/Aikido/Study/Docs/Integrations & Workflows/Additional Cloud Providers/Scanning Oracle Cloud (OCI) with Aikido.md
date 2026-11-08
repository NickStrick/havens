---
title: "Scanning Oracle Cloud (OCI) with Aikido"
source: https://help.aikido.dev/workflows-and-guides/additional-cloud-providers/scanning-oracle-cloud-oci-with-aikido
section: Integrations & Workflows
fetched: 2026-11-08
generated: ingest_docs
---
# Scanning Oracle Cloud (OCI) with Aikido

Aikido fully supports protecting workloads on Oracle Cloud through specific integrations. A native integration may be added in the future, but you can already achieve full coverage by combining:<br>

* [**Container image scanning**](https://help.aikido.dev/workflows-and-guides/additional-cloud-providers/scanning-oracle-cloud-oci-with-aikido#container-image-scanning) for Oracle Cloud registry or any other OCI-compatible registry
* [**Kubernetes cluster scanning**](https://help.aikido.dev/workflows-and-guides/additional-cloud-providers/scanning-oracle-cloud-oci-with-aikido#kubernetes-cluster-scanning) for Oracle Cloud Managed Kubernetes or self-managed clusters
* [**Kubernetes cluster image scanning**](https://help.aikido.dev/workflows-and-guides/additional-cloud-providers/scanning-oracle-cloud-oci-with-aikido#kubernetes-cluster-image-scanning) for Oracle Cloud Managed Kubernetes or self-managed clusters
* [**Virtual machine scanning**](https://help.aikido.dev/workflows-and-guides/additional-cloud-providers/scanning-oracle-cloud-oci-with-aikido#virtual-machine-scanning) via the Local VM Scanner on Oracle Cloud instances

## Features

### Container image scanning

Oracle Cloud’s container registry and most third-party registries you use from Oracle Cloud are OCI-compatible, so they can be scanned using Aikido.

Create a read-only or pull-only user in Oracle Cloud registry: [https://docs.oracle.com/en-us/iaas/Content/Registry/Tasks/registrypullingimagesusingthedockercli.htm](https://docs.oracle.com/en-us/iaas/Content/Registry/Tasks/registrypullingimagesusingthedockercli.htm)

Follow the OCI guide below to configure container image scanning

[generic-oci-compatible-registry.md](https://help.aikido.dev/container-image-scanning/standalone-registries/generic-oci-compatible-registry)

### Kubernetes cluster scanning

If you use Oracle Cloud Managed Kubernetes or run your own Kubernetes clusters on Oracle Cloud VMs, you can connect them as generic Kubernetes clusters.

[kubernetes-cluster-scanning](https://help.aikido.dev/cloud-scanning/kubernetes-cluster-scanning)

### Kubernetes cluster image scanning&#x20;

If you use Oracle Cloud Managed Kubernetes or run your own Kubernetes clusters on Oracle Cloud VMs, you can scan the images of running containers with Kubernetes image scanning.

[kubernetes-in-cluster-image-scanning.md](https://help.aikido.dev/cloud-scanning/kubernetes-cluster-scanning/kubernetes-in-cluster-image-scanning)

### Virtual Machine scanning

To scan Virtual Machines on Oracle Cloud, use the Local VM Scanner. It inspects packages, system dependencies and configuration directly on the instance.

[local-vm-scanning](https://help.aikido.dev/virtual-machine-scanning/local-vm-scanning)

You can roll this out centrally using your usual automation tooling (e.g. Ansible, Terraform-provisioned scripts, or cloud-init) so that new Oracle Cloud instances are automatically enrolled.
