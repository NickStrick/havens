---
title: "JetBrains YouTrack"
source: https://help.aikido.dev/getting-started/task-management-systems/all-supported-task-trackers/jetbrains-youtrack
section: Getting started
fetched: 2026-11-08
generated: ingest_docs
---
# JetBrains YouTrack

This one-time setup _per workspace_ allows everyone in your Aikido organization to create issues directly in YouTrack.

Following use cases are supported :

* **Automated Ticket Creation**: Automatically create and push tickets to specified YouTrack projects for seamless tracking of security issues.
* **Manual Ticket Addition**: Manually add security issue tickets to YouTrack, ensuring targeted attention for critical vulnerabilities.

## Connecting the Aikido App to YouTrack <a href="#connecting-the-aikido-app-to-youtrack" id="connecting-the-aikido-app-to-youtrack"></a>

1. Navigate to [Integration Settings](https://app.aikido.dev/settings/integrations) within the Aikido app.
2.  In the 'Task Trackers' section, select 'YouTrack'\
    A modal will request the **Service URL** (of your YouTrack space) and the **Permanent Token**. The permanent token can be generated inside Profile -> Account Security in YouTrack.\
    ​

    ![JetBrains YouTrack integration setup screen requiring configuration for Service URL and token.](https://help.aikido.dev/_assets/7e13cf04744d/ucarecdn-4b2cd46d-fffe-4903-8c91-3b2f596a08d0.png)
3.  When you have filled in the credentials correctly, the 'Connected' status will appear.\
    ​

    ![JetBrains YouTrack issue-tracking integration is successfully connected.](https://help.aikido.dev/_assets/8e7cf57ad9d7/ucarecdn-6e0c61d5-f127-47e0-b0ba-79421e6a7dc6.png)
4. Close the modal & open the YouTrack Integration page.\
   ​

![Map Git repositories to YouTrack projects and enable automatic task creation.](https://help.aikido.dev/_assets/0b1d8aa74a38/jetbrains-youtrack_32e98656-e17b-4e42-9d5e-ad2611ed3541.png)

## Options for Task Creation in YouTrack via Aikido <a href="#options-for-task-creation-in-youtrack-via-aikido" id="options-for-task-creation-in-youtrack-via-aikido"></a>

There are two different options to create new tasks from Aikido into YouTrack.

1. Manually create tasks from the Aikido interface
2. Automatically create new tasks via Aikido's auto creation functionality.

### 1. Manual Task Creation <a href="#id-1-manual-task-creation" id="id-1-manual-task-creation"></a>

1.  Hover over any issue in your feed and click the _**+**_ in the **assignee column.**\
    ​

    ![Task assignment table section with options to add or manage assignees.](https://help.aikido.dev/_assets/cf2cd1ea323f/asana_a6b1ac3d-ef37-454a-a531-b366d190f292.png)

    Alternatively, you can click the triple dots in the last columns to open up the action menu. If you have grouped issues, the triple dot action menu is available on every subissue.\
    ​

    ![Action menu with options: create task, snooze, ignore, copy link, adjust severity.](https://help.aikido.dev/_assets/48e5605c5b32/ucarecdn-8642287d-0d10-46bf-9d0d-d25cf159d51d.png)

    ​
2.  Fill in the required details in the popup modal.\
    ​

    ![Form for creating a security task in JetBrains YouTrack with summary and details.](https://help.aikido.dev/_assets/695be91b5709/ucarecdn-98ce3ad1-5aca-4912-b986-17f2e2dc385c.png)
3.  The newly created task in YouTrack will be linked in the Aikido Issue Detail under the 'Tasks' tab (sidepanel).\
    ​

    ![Security alert: HSTS header missing, high severity, reported by admin.](https://help.aikido.dev/_assets/d54b0889fea1/ucarecdn-df00a756-237c-4b53-949c-a66b981c5a56.png)

### 2. Automated Task Creation <a href="#id-2-automated-task-creation" id="id-2-automated-task-creation"></a>

> [!info]
> Aikido will automatically create tasks **every hour in bulk.** There is at the moment no option to trigger this manually.

1. Go to the [YouTrack Integration](https://app.aikido.dev/settings/integrations/tasktracker) settings page
2. Make sure to enable '**Autocreation**' by clicking the toggle to **On.**
3. Define the criteria for automatic task creation.

You can configure all of these settings in the autocreation modal:

* **On/Off:** Enable or disable autocreation. When off, the threshold is effectively set to `None`.
* **Severity threshold:** Create tickets for issues at `Critical`, `High`, `Medium`, or `Low` and above. For example, `High` creates tickets for `High` and `Critical`.
* **Issue types:** Create tickets for all issue types, or limit them to specific types like `SCA`, `SAST`, `Secrets`, `Cloud`, `IaC`, `Malware`, or `License`.
* **Daily limit:** Set the maximum number of tickets created per day. The default is `25`. Some plans support higher limits.
* **Ticket creation mode:** Create one ticket per issue group, or create separate tickets per location or scope. Per-location mode can create more tickets.
* **Scope:** Available only in per-location mode. Target all repos or clouds, only mapped repos or teams, or specific repos or clouds with include and exclude lists.

<figure><img src="https://help.aikido.dev/_assets/0f792496e2b2/image.png" alt=""><figcaption></figcaption></figure>

4. Aikido will then autonomously generate YouTrack tickets based on these settings 🚀\
   ​
