---
title: "Local Code Scanning"
source: https://help.aikido.dev/code-scanning/local-code-scanning
section: Code Scanning
fetched: 2026-11-08
generated: ingest_docs
---
# Local Code Scanning

Local code scanning lets you analyze your source code directly on your own machines without sending any code to Aikido. It is useful when you want to test changes during development, work in isolated environments, or keep sensitive repositories fully local.

> [!tip]
> For most workflows we still recommend using the [standard Aikido integrations](https://help.aikido.dev/code-scanning/connect-your-source-code) as they give faster results and better coverage.

Before you start, make sure you have an Aikido account/workspace that supports local scanning. Follow [Account Creation for Local Scanning](https://help.aikido.dev/code-scanning/local-code-scanning/account-creation-for-local-scanning-on-aikido).

To send Aikido a zip of a repository instead, follow [Upload a Repository as a Zip](https://help.aikido.dev/code-scanning/connect-your-source-code/upload-a-repository-as-a-zip). That upload sends the archive to Aikido, and Aikido stores it. Local scanning keeps the code on your machines.

If you are looking to scan container images instead, check the [container image scanning docs](https://help.aikido.dev/container-image-scanning/local-image-scanning).

## General

[account-creation-for-local-scanning-on-aikido.md](https://help.aikido.dev/code-scanning/local-code-scanning/account-creation-for-local-scanning-on-aikido)

[pr-gating-for-code-using-local-scanner.md](https://help.aikido.dev/code-scanning/local-code-scanning/pr-gating-for-code-using-local-scanner)

[release-gating-for-code-using-local-scanner.md](https://help.aikido.dev/code-scanning/local-code-scanning/release-gating-for-code-using-local-scanner)

[performing-nightly-scans-using-the-aikido-local-scanner.md](https://help.aikido.dev/code-scanning/local-code-scanning/performing-nightly-scans-using-the-aikido-local-scanner)

[cli-options-for-local-scanner.md](https://help.aikido.dev/code-scanning/local-code-scanning/cli-options-for-local-scanner)

## CI/CD Integrations

[azure-devops-server-setup-for-local-code-scanning.md](https://help.aikido.dev/code-scanning/local-code-scanning/azure-devops-server-setup-for-local-code-scanning)

[bitbucket-pipeline-setup-for-local-code-scanning.md](https://help.aikido.dev/code-scanning/local-code-scanning/bitbucket-pipeline-setup-for-local-code-scanning)

[bamboo-setup-for-local-code-scanning.md](https://help.aikido.dev/code-scanning/local-code-scanning/bamboo-setup-for-local-code-scanning)

[circleci-setup-for-local-code-scanning.md](https://help.aikido.dev/code-scanning/local-code-scanning/circleci-setup-for-local-code-scanning)

[github-action-setup-for-local-code-scanning.md](https://help.aikido.dev/code-scanning/local-code-scanning/github-action-setup-for-local-code-scanning)

[gitlab-self-managed-setup-for-local-code-scanning.md](https://help.aikido.dev/code-scanning/local-code-scanning/gitlab-self-managed-setup-for-local-code-scanning)

[jenkins-setup-for-local-code-scanning.md](https://help.aikido.dev/code-scanning/local-code-scanning/jenkins-setup-for-local-code-scanning)

[teamcity-pipeline-setup-for-local-code-scanning.md](https://help.aikido.dev/code-scanning/local-code-scanning/teamcity-pipeline-setup-for-local-code-scanning)

## Operating Systems

[linux-setup-for-local-code-scanning.md](https://help.aikido.dev/code-scanning/local-code-scanning/linux-setup-for-local-code-scanning)

[mac-setup-for-local-code-scanning.md](https://help.aikido.dev/code-scanning/local-code-scanning/mac-setup-for-local-code-scanning)

[windows-setup-for-local-code-scanning.md](https://help.aikido.dev/code-scanning/local-code-scanning/windows-setup-for-local-code-scanning)

## Other

[local-scanning-in-existing-scm-integrated-workspaces.md](https://help.aikido.dev/code-scanning/local-code-scanning/local-scanning-in-existing-scm-integrated-workspaces)
