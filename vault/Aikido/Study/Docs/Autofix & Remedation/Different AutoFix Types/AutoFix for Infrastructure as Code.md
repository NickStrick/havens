---
title: "AutoFix for Infrastructure as Code"
source: https://help.aikido.dev/autofix-and-remediation/scope/autofix-for-infrastructure-as-code
section: Autofix & Remedation
fetched: 2026-11-08
generated: ingest_docs
---
# AutoFix for Infrastructure as Code

AutoFix for Infrastructure as Code supports the following IaC tools:

* Terraform
* CloudFormation
* Serverless framework
* Docker
* Kubernetes
* Helm

AutoFix creates the patch for the IaC files, it **does not automatically apply** the changes to your cloud. The execution of the changes needs to be executed by the user.

On the [AutoFix > IaC](https://app.aikido.dev/issues/fix/iac) page in the Aikido UI, you will find the detected IaC issues. AutoFix can generate a preview of the change or create a Pull Request.

<figure><img src="https://help.aikido.dev/_assets/e853a8f65c6c/image-439.png" alt=""><figcaption></figcaption></figure>

Clicking AutoFix will generate a preview of the change required to remediate the issue.

<figure><img src="https://help.aikido.dev/_assets/656ef2f2358f/image-440.png" alt=""><figcaption></figcaption></figure>

From here you can

* Create a Pull Request
* Apply the patch directly in your IDE
* Refine the solution with Aikido AI
