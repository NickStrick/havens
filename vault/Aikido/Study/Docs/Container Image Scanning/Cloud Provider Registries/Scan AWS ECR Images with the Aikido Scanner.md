---
title: "Scan AWS ECR Images with the Aikido Scanner"
source: https://help.aikido.dev/container-image-scanning/cloud-provider-registries/aikido-scanner-for-aws-ecr
section: Container Image Scanning
fetched: 2026-11-08
generated: ingest_docs
---
# Scan AWS ECR Images with the Aikido Scanner

Aikido supports scanning Elastic Container Registry (ECR) images through both **AWS Inspector** and the **Aikido Scanner**. <mark style="color:green;">**Opting for the Aikido Scanner provides several benefits:**</mark>

* **Extended Scanning Capabilities**: Scans for licenses and end-of-life (EOL) runtimes for comprehensive security insights.
* **Quicker Results**: Delivers scan results promptly to accelerate development and deployment processes.
* **Targeted Scanning Efficiency**: Allows scanning based on specific tags, enhancing relevance and efficiency.
* **Continuous Scanning:** Unlike AWS Inspector, which scans once at the moment of push, Aikido performs daily scans, even if your image hasn't been updated in 100 days. This means Aikido can identify new Common Vulnerabilities and Exposures (CVEs) in the meantime, which AWS Inspector might miss.
* **Inclusive Pricing**: Included in every paid plan, offering unlimited scans without the additional costs associated with AWS Inspector's pay-per-push model.

## Installing the Aikido Scanner <a href="#installing-the-aikido-scanner" id="installing-the-aikido-scanner"></a>

1. **Navigate to** [**Containers Page**](https://app.aikido.dev/containers)
2. **Connect Registry**: Click on 'Connect registry' and select the first option: _'AWS Elastic Container Registry'_.
3.  **Select Aikido Scanner**.

    ![Choose a scanner for AWS ECR: Aikido (recommended) or AWS Inspector.](https://help.aikido.dev/_assets/1a17298b8924/ucarecdn-18e955f3-6e54-4def-af72-a453301d42e2.png)
4.  **Fill in the Details**: Follow the instructions to create an IAM Role and Policy for the necessary permissions, then enter a name of your registry name (you can choose this yourself) and the AWS Role Amazon Resource Name (ARN). This step encompasses setting up the IAM role and policy, as well as providing registry specifics for a complete setup.

    ![Instructions and form to connect AWS Elastic Container Registry to Aikido using IAM Role.](https://help.aikido.dev/_assets/3f9a623f27cc/ucarecdn-73c33666-3f7c-4dd8-824e-dad07bafc5d0.png)
5. **Completion**: Once the setup is complete, Aikido will scan the connected registry with the Aikido scanner on a daily basis.

> [!tip]
> _Note._ If AWS Inspector was previously enabled during the AWS Cloud setup, Aikido will notify you to switch to Aikido scanning without any problems after filling in all the details in Step 4.

![AWS account prompt: Switch from AWS Inspector to unlimited Aikido Scanner for cost savings.](https://help.aikido.dev/_assets/bb3c1dbbbfc3/ucarecdn-5378222c-fcd5-4470-aeef-c3f39c83e140.png)

***
