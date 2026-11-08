---
title: "Scanning IBM Cloud with Aikido"
source: https://help.aikido.dev/workflows-and-guides/additional-cloud-providers/scanning-ibm-cloud-with-aikido
section: Integrations & Workflows
fetched: 2026-11-08
generated: ingest_docs
---
# Scanning IBM Cloud with Aikido

Aikido fully supports protecting workloads on IBM Cloud through specific integrations. A native integration may be added in the future, but you can already achieve full coverage by combining:<br>

* [**Container image scanning**](https://help.aikido.dev/workflows-and-guides/additional-cloud-providers/scanning-ibm-cloud-with-aikido#container-image-scanning) for IBM Cloud registry or any other OCI-compatible registry
* [**Kubernetes cluster scanning**](https://help.aikido.dev/workflows-and-guides/additional-cloud-providers/scanning-ibm-cloud-with-aikido#kubernetes-cluster-scanning) for IBM Cloud Managed Kubernetes or self-managed clusters
* [**Kubernetes cluster image scanning**](https://help.aikido.dev/workflows-and-guides/additional-cloud-providers/scanning-ibm-cloud-with-aikido#kubernetes-cluster-image-scanning) for IBM Cloud Managed Kubernetes or self-managed clusters
* [**Virtual machine scanning**](https://help.aikido.dev/workflows-and-guides/additional-cloud-providers/scanning-ibm-cloud-with-aikido#virtual-machine-scanning) via the Local VM Scanner on IBM Cloud instances

## Features

### Container image scanning

IBM Cloud’s container registry and most third-party registries you use from IBM Cloud are OCI-compatible, so they can be scanned using Aikido.

Create a read-only or pull-only user in IBM Cloud registry: [https://cloud.ibm.com/docs/Registry?topic=Registry-registry\_access\&interface=ui](https://cloud.ibm.com/docs/Registry?topic=Registry-registry_access\&interface=ui)

Follow the OCI guide below to configure container image scanning

[generic-oci-compatible-registry.md](https://help.aikido.dev/container-image-scanning/standalone-registries/generic-oci-compatible-registry)

### Kubernetes cluster scanning

If you use IBM Cloud Managed Kubernetes or run your own Kubernetes clusters on IBM Cloud VMs, you can connect them as generic Kubernetes clusters.

[kubernetes-cluster-scanning](https://help.aikido.dev/cloud-scanning/kubernetes-cluster-scanning)

### Kubernetes cluster image scanning&#x20;

If you use IBM Cloud Managed Kubernetes or run your own Kubernetes clusters on IBM Cloud VMs, you can scan the images of running containers with Kubernetes image scanning.

[kubernetes-in-cluster-image-scanning.md](https://help.aikido.dev/cloud-scanning/kubernetes-cluster-scanning/kubernetes-in-cluster-image-scanning)

### Virtual Machine scanning

To scan Virtual Machines on IBM Cloud, use the Local VM Scanner. It inspects packages, system dependencies and configuration directly on the instance.

[local-vm-scanning](https://help.aikido.dev/virtual-machine-scanning/local-vm-scanning)

You can roll this out centrally using your usual automation tooling (e.g. Ansible, Terraform-provisioned scripts, or cloud-init) so that new IBM Cloud instances are automatically enrolled.
