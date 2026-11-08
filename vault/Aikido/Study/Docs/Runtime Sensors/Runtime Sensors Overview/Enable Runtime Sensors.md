---
title: "Enable Runtime Sensors"
source: https://help.aikido.dev/runtime-sensors/runtime-sensors-overview/enable-runtime-sensors
section: Runtime Sensors
fetched: 2026-11-08
generated: ingest_docs
---
# Enable Runtime Sensors

Turn on Runtime Sensors for a Kubernetes cluster or a Linux virtual machine (VM).

## Prerequisites

* A Kubernetes cluster or VM connected to Aikido, or permission to connect a new one.
* For Kubernetes: the [Helm CLI](https://helm.sh/docs/intro/install/) and permission to upgrade the Aikido Helm release in your cluster.
* For VMs: permission to install the VM scanner, and a Linux VM that uses systemd and runs kernel 5.8 or later. Windows VMs aren't supported.

## Enable threat detection on a Kubernetes cluster

Turn on threat detection in the cluster's edit settings.

> [!warning]
> The toggle alone doesn't start threat detection. After you turn it on, run a Helm upgrade on the cluster. Until you run the upgrade, the sensor isn't active.

### Turn on the toggle

Open the cluster's edit settings and turn on the threat detection toggle. Hover over the toggle to see a reminder that a Helm upgrade is required.

### Upgrade the Helm release

Run `helm upgrade` against your cluster and set `runtimeDetection.enabled=true`. Reuse your existing values so the rest of your configuration stays the same.

```shell
helm upgrade aikido -n aikido \
  aikido/kubernetes-agent \
  --reset-then-reuse-values \
  --set runtimeDetection.enabled=true
```

To turn threat detection off again, turn off the toggle and run the same command with `runtimeDetection.enabled=false`.

To connect a cluster, see [Kubernetes Cluster Scanning](https://help.aikido.dev/cloud-scanning/kubernetes-cluster-scanning).

## Enable threat detection on a VM

Set `RUNTIME_DETECTION_ENABLED=true` on the install command, next to `AIKIDO_TOKEN` and `VM_TYPE`:

```shell
AIKIDO_TOKEN=REPLACE_ME VM_TYPE=production RUNTIME_DETECTION_ENABLED=true dnf install -y https://aikido-vm-agent.s3.eu-west-1.amazonaws.com/v1.5.0/aikido-vm-scanner.x86_64.rpm
```

Commands for each distribution are in [Setting Up the Local VM Scanner on Linux](https://help.aikido.dev/virtual-machine-scanning/local-vm-scanning/setting-up-the-local-vm-scanner-linux#enable-threat-detection).

When the scanner is already installed, run:

```shell
sudo systemctl enable --now aikido-runtime-agent
```

> [!warning]
> Agentless scanning of AWS EC2, Azure, and Google Cloud VMs doesn't install the scanner, so it doesn't provide runtime detection.

## Related

[.](https://help.aikido.dev/runtime-sensors/runtime-sensors-overview)

[kubernetes-cluster-scanning](https://help.aikido.dev/cloud-scanning/kubernetes-cluster-scanning)

[virtual-machines-overview.md](https://help.aikido.dev/virtual-machine-scanning/virtual-machines-overview)
