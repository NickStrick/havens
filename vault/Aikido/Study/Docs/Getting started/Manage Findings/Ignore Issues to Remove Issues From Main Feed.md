---
title: "Ignore Issues to Remove Issues From Main Feed"
source: https://help.aikido.dev/getting-started/core-functionalities/ignore-issues-to-remove-issues-from-main-feed
section: Getting started
fetched: 2026-11-08
generated: ingest_docs
---
# Ignore Issues to Remove Issues From Main Feed

#### Use Cases <a href="#introduction" id="introduction"></a>

While Aikido boasts advanced detection capabilities with auto-ignore (see the [ignore criteria](https://app.aikido.dev/issues/ignored/criteria)), the occasional false positive may slip through, or an issue may be irrelevant to your specific context. The ignore functionality is designed to address this, ensuring your security overview remains accurate.

Users without ignore permissions submit requests instead of ignoring directly. Reviewers with ignore permissions review those in the [Approval Inbox for Ignored Issues](https://help.aikido.dev/getting-started/core-functionalities/approval-inbox-for-ignored-issues).

#### How to ignore an issue group or subissue <a href="#how-to-ignore-an-issue-group-or-subissue" id="how-to-ignore-an-issue-group-or-subissue"></a>

**Step 1:** Navigate to the **issue group**, or **subissue** in Aikido you wish to ignore and select the "Ignore" option in the actions menu (triple dots).

![Action menu options for task management and issue handling in a software interface.](https://help.aikido.dev/_assets/2b258f0fec72/ucarecdn-ff7d2590-2d08-42c5-b7a1-464dac520f01.png)

**Step 2:** For subissues, you will be asked about how Aikido should treat this subissue and potential similar detections in the future.

![](https://help.aikido.dev/_assets/bc9a82f5c898/ucarecdn-b8de9c2c-c625-4a45-9c92-09c72c786b24.png)

You have a few options available to ignore the current and future issues. The options available depend on the context in which you are ignoring an issue (single issue or issue group), but also on the issue type (e.g., Surface Monitoring and Cloud Issues show different options).

Below are all the ignore options listed that you might see

* **Only this issue/only this issue group**\
  This option will only ignore this subissue, or this issue group and all its sub issues, depending on the context. _Note. If you ignore an issue group, new future subissues will not be auto-ignored and will re-open the group containing this specific subissue._\
  ​
*   **Ignore by path**\
    When choosing this option, you create an issue rule which will ignore all current and future file based issues (open source, SAST, IAC and exposed secrets) under a certain path. You can edit the path there for convenience to make the rule as specific as you'd like.\
    ​\
    This can be helpful when there are testing frameworks in a specific path that you do not want Aikido to scan.

    ![](https://help.aikido.dev/_assets/36e04ac51943/ucarecdn-fe887c2a-204b-412b-9854-dbe96beff936.png)

    ​
* **Ignore all findings related to CVE**\
  This option creates an issue rule which ignores all current and future open source dependencies linked to that CVE. This ignore rule is global and is applied to all repositories.\
  ​
* **Ignore all findings related to rule**\
  Most issues in Aikido are related to a specific rule code such as SAST, IAC and Cloud issues. When selecting this option, you create an issue rule which ignores all current and future issues related to that specific rule. This ignore rule is global and is applied to all repositories.

**Step 3:** Confirm your choice to ignore the issue, effectively removing it from your main feed in Aikido.

#### View all (auto-) ignored issues <a href="#check-out-all-auto--ignored-issues" id="check-out-all-auto--ignored-issues"></a>

The [ignore view](https://app.aikido.dev/issues/ignored) consolidates all issues ignored by Aikido's triaging algorithm, as well as those manually ignored by users. Here, you can review the rationale behind each automatically ignored issue (see the [ignore criteria](https://app.aikido.dev/issues/ignored/criteria)). Your manually ignored issues will also be displayed here, providing a comprehensive overview of all exclusions made within Aikido.

![](https://help.aikido.dev/_assets/51cbb7a4b911/ucarecdn-65ba19ef-aa73-4a9f-aa79-50f391560e04.png)
