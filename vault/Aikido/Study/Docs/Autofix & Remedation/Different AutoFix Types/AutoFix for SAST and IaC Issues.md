---
title: "AutoFix for SAST and IaC Issues"
source: https://help.aikido.dev/autofix-and-remediation/scope/ai-autofix-for-sast-and-iac-issues
section: Autofix & Remedation
fetched: 2026-11-08
generated: ingest_docs
---
# AutoFix for SAST and IaC Issues

> [!info]
> Aikido Local Scan accounts DO NOT have access to AutoFix within the UI, but it is available for the IDE plugins.

The goal of Aikido has always been to save you time by reducing noise, focusing on the issues that truly matter. With the introduction of the **AI Autofix** feature, Aikido takes this one step further.

### Key Features of AI Autofix <a href="#key-features-of-ai-autofix" id="key-features-of-ai-autofix"></a>

* **Preview Changes:** Review detailed previews of AI-generated fixes before implementing them to ensure alignment with your standards.
* **Create Pull Requests (PRs):** Generate pull requests directly in your Source Control Management (SCM) system from the Autofix interface.
*   **Direct IDE Integration:** Apply fixes instantly to your codebase via the VS Code integration, saving even more time.

    ![AI-generated patch enhances JSONP security by escaping callback, mitigating XSS vulnerabilities in PHP code.](https://help.aikido.dev/_assets/d5c415f696cb/ucarecdn-859a9d47-c060-4244-8c32-89fff802c11e.png)

***

### Important Info <a href="#important-info" id="important-info"></a>

* **We do not use your code for training / fine-tuning**
  * Code snippets required for generating fixes are securely transmitted to **AWS Bedrock** over encrypted channels. Aikido **nor** [AWS Bedrock](https://aws.amazon.com/bedrock/security-compliance/) use your code for training or fine-tuning AI models.
* **Speed**
  * Simple fixes are typically generated in under 5 seconds. Larger or more complex fixes may take up to 30 seconds, depending on file size and issue complexity.
* **Confidence Levels**
  *   Fixes are categorized into confidence levels: **High**, **Medium**, and **Low**. Manual reviews before merging are recommended.

      ![Low confidence warning: Further validation of similar fixes needed.](https://help.aikido.dev/_assets/d9c8c53d8fa4/ucarecdn-2c623f8c-0bb2-444c-8071-d957e38e3f99.png)

***

### How to use the AI Autofix functionality <a href="#how-to-use-the-ai-autofix-functionality" id="how-to-use-the-ai-autofix-functionality"></a>

*   **Step 1**. Navigate to the SAST or IaC [Autofix Page. ](https://app.aikido.dev/issues/fix/sast)All potential fixes are grouped by type and location.

    ![Aikido Autofix dashboard showing critical SAST issues and options to fix or preview autofix.](https://help.aikido.dev/_assets/06c9b253fd61/ucarecdn-2b801f85-4354-421b-b93d-7ff66d316815.png)
*   **Step 2.** Select one or multiple fixes to preview or create a PR for.

    ![Security scan identifies path traversal vulnerabilities in two PHP files, both with medium severity.](https://help.aikido.dev/_assets/803acd57c70f/ucarecdn-b9f2fa3e-053f-492c-8a1d-3f0ed3b90a2c.png)
* **Step 3.** Preview and Apply.
  * **Create a PR**: Automatically generate a pull request in your SCM.
  * **Apply Directly**: Instantly implement the fix in your codebase via VS Code integration.

![Code patch preview adding file path validation to prevent path traversal vulnerabilities in PHP files.](https://help.aikido.dev/_assets/a53799b05509/ucarecdn-f6ac142a-2711-4ce2-b4d4-db6ae64938b2.png)

***
