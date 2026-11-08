---
title: "Control Which AWS Regions Are Scanned"
source: https://help.aikido.dev/cloud-scanning/connect-your-cloud/aws/connect-aws-account-to-aikido/control-which-aws-regions-are-scanned
section: Cloud scanning
fetched: 2026-11-08
generated: ingest_docs
---
# Control Which AWS Regions Are Scanned

If you want to exclude specific regions from being scanned by Aikido, you can adjust the IAM policies attached to the Aikido IAM roles. See the examples below, adjusting the AWS account ID and region(s) according to your scenario:

### ECR Container Scanning

#### Scanning images only from specific regions

> [!info]
> The standard policy grants access to ECR repositories from all regions. This example limits access to `us-east-2` and `eu-west-1`. Note that `ecr:GetAuthorizationToken` must still be granted for all regions.

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "AllowECRActions",
      "Effect": "Allow",
      "Action": [
        "ecr:BatchCheckLayerAvailability",
        "ecr:BatchGetImage",
        "ecr:DescribeImages",
        "ecr:DescribeRegistry",
        "ecr:DescribeRepositories",
        "ecr:GetDownloadUrlForLayer",
        "ecr:ListImages",
        "ecr:GetAuthorizationToken",
        "ecr:ListTagsForResource"
      ],
      "Resource": "*"
    },
    {
      "Sid": "DenyAllRegionsExcept",
      "Effect": "Deny",
      "Action": [
        "ecr:BatchCheckLayerAvailability",
        "ecr:BatchGetImage",
        "ecr:DescribeImages",
        "ecr:DescribeRegistry",
        "ecr:DescribeRepositories",
        "ecr:GetDownloadUrlForLayer",
        "ecr:ListImages",
        "ecr:ListTagsForResource"
      ],
      "Resource": "*",
      "Condition": {
        "StringNotEquals": {
          "aws:RequestedRegion": ["us-east-2", "eu-west-1"]
        }
      }
    }
  ]
}
```
