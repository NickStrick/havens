---
title: "Jira Cloud"
source: https://help.aikido.dev/getting-started/task-management-systems/all-supported-task-trackers/jira-cloud
section: Getting started
fetched: 2026-11-08
generated: ingest_docs
---
# Jira Cloud

This one-time setup _per workspace_ allows everyone in your Aikido organization to create issues directly in Jira Cloud.

Following use cases are supported :

* **Automated Ticket Creation**: Automatically create and push tickets to specified Jira projects for seamless tracking of security issues.
* **Manual Ticket Addition**: Manually add security issue tickets to Jira, ensuring targeted attention for critical vulnerabilities.

> [!warning]
> Note: the ticket creation is linked to the user who has set up the integration. We recommend creating an extra 'Aikido' user inside Jira with write access to all projects.

## Connecting the Aikido App to Jira <a href="#connecting-the-aikido-app-to-jira" id="connecting-the-aikido-app-to-jira"></a>

1. Navigate to [Integration Settings](https://app.aikido.dev/settings/integrations) within the Aikido app.
2. In the 'Task Trackers' section, select 'Jira Issues'
3.  A prompt will request authorization for Jira.\
    ​

    ![Jira access unauthorized; prompt to authorize account for issue-tracking integration.](https://help.aikido.dev/_assets/9b724b992587/ucarecdn-7f02a7ff-2d6a-4fd2-859a-690ec2503847.png)
4. Login into your Jira account
5.  Grant Aikido permission to access your Jira workspace

    ![Aikido Security requests permission to access and manage your Atlassian Jira account.](https://help.aikido.dev/_assets/de2d04b6e665/ucarecdn-a052e293-4386-42ea-a4ae-4fa3661b2fad.png)
6. Once authorized, Aikido is successfully connected to Jira, enhancing your task management capabilities 🚀<br>

<figure><img src="https://help.aikido.dev/_assets/b05b5ddc737f/image-97.png" alt="" width="563"><figcaption></figcaption></figure>

## ​Options for Task Creation in Jira via Aikido <a href="#options-for-task-creation-in-jira-via-aikido" id="options-for-task-creation-in-jira-via-aikido"></a>

There are two different options to create new tasks from Aikido into Jira.

1. Manually create tasks from the Aikido interface
2. Automatically create new tasks via Aikido's auto creation functionality.

## 1. Manual Task Creation <a href="#id-1-manual-task-creation" id="id-1-manual-task-creation"></a>

1.  Hover over any issue in your feed and click the _**+**_ in the **assign column.**

    ![Task management table with “Assignee” column and options to add or edit entries.](https://help.aikido.dev/_assets/cf2cd1ea323f/asana_a6b1ac3d-ef37-454a-a531-b366d190f292.png)

    Alternatively, you can click the triple dots in the last columns to open up the action menu. If you have grouped issues, the triple dot action menu is available on every subissue.

    ![Menu of task management actions: create, snooze, ignore, copy link, adjust severity.](https://help.aikido.dev/_assets/ecd711fdde8d/ucarecdn-38576e60-ea82-4442-88d3-db09a3bbd539.png)
2.  Fill in the required details in the popup modal.\
    ​

    ![Jira task creation form detailing a critical security vulnerability.](https://help.aikido.dev/_assets/38afe1296760/ucarecdn-2601869d-3437-4823-b410-264c9eb9f8fb.png)
3. The newly created task in Jira will be linked in the Aikido Issue Detail under the 'Tasks' tab (sidepanel).

![Critical security task: var\_dump() may expose sensitive user information; action required.](https://help.aikido.dev/_assets/253bf97fa73c/ucarecdn-294591ba-6d3d-4cfc-9cee-0fc1b6c880cd.png)

## 2. Automated Task Creation <a href="#id-2-automated-task-creation" id="id-2-automated-task-creation"></a>

> [!info]
> Aikido will automatically create tasks **every hour in bulk.** There is at the moment no option to trigger this manually.

1. Go to the [Jira Integration](https://app.aikido.dev/settings/integrations/tasktracker) settings
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

4. Aikido will autonomously generate Jira tickets hourly until the configured daily limit of tasks is reached

### Jira Sync Information <a href="#jira-sync-information" id="jira-sync-information"></a>

Aikido automatically syncs a couple of fields to Jira

* Severity is mapped to the 'Priority field' in Jira (one way)
* Assignees are synced both ways (so updates in Jira will be reflected in Aikido too

***
