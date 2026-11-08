---
title: "AWS EC2 Virtual Machine Scanning Setup"
source: https://help.aikido.dev/virtual-machine-scanning/aws/aws-ec2-virtual-machine-scanning-setup
section: Virtual Machine Scanning
fetched: 2026-11-08
generated: ingest_docs
---
# AWS EC2 Virtual Machine Scanning Setup

> [!info]
> This functionality is available for **Pro** and **Advanced** plans only. [Contact us](https://www.aikido.dev/contact) for more information.

### Why should I scan my virtual machines? <a href="#why-should-i-scan-my-virtual-machines" id="why-should-i-scan-my-virtual-machines"></a>

With virtual machine scanning, Aikido scans the disks of your virtual machines for vulnerable packages and outdated runtimes.

### Getting started <a href="#getting-started" id="getting-started"></a>

To enable the scanning of your Amazon EC2 instances, you should first start by connecting your AWS account to Aikido. To do this you can follow the steps outlined in [this article](https://help.aikido.dev/cloud-scanning/connect-your-cloud/aws/connect-aws-account-to-aikido).

Once your cloud is connected, you'll see a tab appear on the detail page called 'Virtual Machines'.

![Activate VM scanning for AWS EC2 instances to detect open-source dependency issues.](https://help.aikido.dev/_assets/542ffe4e621a/ucarecdn-5009bb66-9945-408a-a7c5-37fd3c8bc531.png)

When you click on 'Set Up VM Scanning' we'll take you to the following page:

![AWS EC2 volume scanning setup with IAM role and policy creation instructions.](https://help.aikido.dev/_assets/5c677687a869/ucarecdn-c0f27d23-d8bc-4379-85d1-d6b3ac77d3ab.png)

On this page, you can set up the virtual machine scanning via an AWS CloudFormation template that should be applied in the account of the virtual machines that you'd like to have scanned. The CloudFormation template will create a role with limited access to your AWS account. It's important to **KEEP** any permissions from the role as this is the absolute minimum that Aikido needs to perform the scans.

Once the CloudFormation resources have been created, you'll see the ARN of the role in AWS that was created. Copy it and add into the input field on the set up screen. Once you click 'save', Aikido will immediately start to discover any virtual machines in your account and scan them.

### VM Grouping <a href="#vm-grouping" id="vm-grouping"></a>

To optimize scanning efficiency, Aikido groups certain EC2 instances and scans only one instance from each group. Grouping works as follows:

* **Auto Scaling Groups (ASG)**: All EC2 instances in the same AWS Auto Scaling Group are shown as a single VM group in Aikido. The VM group's name matches the ASG name.
* **Karpenter Node Pools**: All EC2 instances that belong to the same Karpenter node pool within an EKS cluster are grouped together. The VM group's name matches the instance name pattern used by Karpenter.
* **No grouping**: EC2 instances that are not part of an ASG or Karpenter node pool are treated as standalone VMs and scanned individually.

### How it works <a href="#how-it-works" id="how-it-works"></a>

At a high level, the flow is:

Aikido creates a snapshot of each volume attached to the scanned instance.

> [!info]
> Aikido tags these snapshots so the delete permission you grant applies only to Aikido-created snapshots.

Aikido reads the snapshot's data directly through the EBS direct APIs, without attaching it to a volume or instance.

Once the scan is done, Aikido keeps the most recent snapshot, one per VM group (for example, one per Auto Scaling Group), and deletes older ones.

> [!info]
> EBS snapshots are incremental, so keeping the last snapshot makes the next scan's snapshot much faster to create, since AWS only copies the blocks that changed.

### Custom snapshot tags <a href="#custom-snapshot-tags" id="custom-snapshot-tags"></a>

On top of the tags Aikido adds automatically, you can configure your own custom tags to apply to the EBS snapshots Aikido creates during scanning. This is useful for cost allocation, compliance, or any other tagging policy your organization needs to enforce.

To manage these, go to the [**Virtual Machines** settings page](https://app.aikido.dev/virtual-machines/settings), then click **Edit** under **AWS snapshot tags** to add, update, or remove key-value pairs. New tags apply to snapshots created from that point onward.

### Managing which VMs are scanned <a href="#managing-which-vms-are-scanned" id="managing-which-vms-are-scanned"></a>

Aikido supports [an inclusion and exclusion model for VM scanning](https://help.aikido.dev/virtual-machine-scanning/aws/managing-which-vms-are-scanned).

### Scanning Frequency

Each day, 10% of all VMs enabled for scanning are rescanned, so on average, every VM is scanned once every 10 days.
