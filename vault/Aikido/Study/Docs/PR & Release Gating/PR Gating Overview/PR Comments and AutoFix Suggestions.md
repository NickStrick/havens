---
title: "PR Comments and AutoFix Suggestions"
source: https://help.aikido.dev/pr-and-release-gating/aikido-ci-gating-functionality/autofix-suggestions-and-inline-commenting-for-pr-checks
section: PR & Release Gating
fetched: 2026-11-08
generated: ingest_docs
---
# PR Comments and AutoFix Suggestions

Aikido posts inline feedback on your pull requests, so you can resolve issues without leaving your review workflow.

PR Checks can comment on SAST, Secrets, IaC, open-source dependencies (SCA), Code Quality, and Deep Review findings.

Inline comments work on GitHub, GitLab Cloud and Server, Bitbucket Cloud, Bitbucket Data Center, and Azure DevOps.

Configure comments for each repository in the PR Check settings modal. When available, Aikido also provides AutoFix suggestions that let you apply the fixes directly from the pull request.

### Prerequisites <a href="#prerequisities" id="prerequisities"></a>

* Make sure to have your CI Checks enabled (via the Aikido Dashboard)
* You are an admin within Aikido

## Enabling Inline Commenting <a href="#enabling-inline-commenting" id="enabling-inline-commenting"></a>

**Step 1:** Go to the settings page via **Repositories > Pull/Merge Requests > Manage PR/MR Checks**

<div data-with-frame="true"><figure><img src="https://help.aikido.dev/_assets/98c4eed972c2/Screenshot-2026-01-14-at-17.37.08.png" alt=""><figcaption></figcaption></figure></div>

**Step 2:** **Select the repo(s)** for which you want to enable it and click **Setup PR Scans**

**Step 3:** **Enable the toggle for&#x20;**<mark style="color:purple;">**Add comments**</mark>. Make sure at least SAST or Secrets scan is enabled.

<div data-with-frame="true"><figure><img src="https://help.aikido.dev/_assets/83955a19e35c/Screenshot-2026-03-04-at-11.50.00.png" alt=""><figcaption></figcaption></figure></div>

**Step 4:** When a new issue is introduced (based on the scan failure severity), a new comment will be added in your SCM.

<div data-with-frame="true"><img src="https://help.aikido.dev/_assets/f72e7c61b44c/ucarecdn-c879fc1f-6a0b-4142-ade4-9c6e0bc8f952.png" alt="Security bot flags script from malicious domain, recommends its immediate removal from code." width="563"></div>

**Step 5.** When available, Aikido will make AutoFix suggestions. Review the diff and commit the suggestion to fix the newly introduced vulnerability all at once.

<div data-with-frame="true"><img src="https://help.aikido.dev/_assets/447c8098d5ab/autofix-suggestions-and-inline-commenting-for-pr-checks_d540.png" alt="Suggested code change to add &#x22;drop_invalid_header_fields&#x22; to AWS ALB resource configuration." width="563"></div>

## What happens to comments after you fix an issue

When a later scan or review confirms that you fixed an issue, Aikido resolves the related inline comment.

> [!info]
> ### GitHub permission exception
> With [AutoFix](https://help.aikido.dev/autofix-and-remediation/overview-aikido-autofix) enabled, Aikido resolves the comment thread. It remains in GitHub as a resolved conversation, preserving the discussion history. GitHub requires **Contents** write permission for this, even when an app already has Pull requests write permission. [GitHub has confirmed this requirement publicly](https://github.com/github/gh-aw/issues/35726).
> 
> Without AutoFix, Aikido follows the principle of least privilege and doesn't request **Contents** write permission solely to resolve comments. GitHub then prevents Aikido from resolving the thread, so Aikido deletes the comment after confirming the issue is fixed.
