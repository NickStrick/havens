---
title: "Monday.com"
source: https://help.aikido.dev/getting-started/task-management-systems/all-supported-task-trackers/mondaycom
section: Getting started
fetched: 2026-11-08
generated: ingest_docs
---
# Monday.com

This one-time setup _per workspace_ allows everyone in your Aikido organization to create issues directly in the Monday app.

Following use cases are supported :

* **Automated Ticket Creation**: Automatically create and push tickets to specified Monday.com projects for seamless tracking of security issues.
* **Manual Ticket Addition**: Manually add security issue tickets to Monday.com, ensuring targeted attention for critical vulnerabilities.

## Connecting the Aikido App to Monday.com <a href="#connecting-the-aikido-app-to-mondaycom" id="connecting-the-aikido-app-to-mondaycom"></a>

1. Navigate to [Integration Settings](https://app.aikido.dev/settings/integrations) within the Aikido app.
2.  In the 'Task Trackers' section, select 'Monday.com'\
    A modal will request an **API Key** (of your Monday workspace). This API key can be found in Administration -> Connections -> API.\
    ​

    ![Monday.com integration setup screen requesting API key for issue tracking configuration.](https://help.aikido.dev/_assets/b2b2357a3bc0/ucarecdn-4398b70e-28ca-4e9b-9b40-bf3788b6b1d9.png)
3.  When you have filled in the credentials correctly, the 'Connected' status will appear.\
    ​

    ![Monday.com issue-tracking integration successfully connected.](https://help.aikido.dev/_assets/9c071703cfbb/ucarecdn-4661f824-7819-4aff-b74b-b7dd04a0c42c.png)

Close the modal & open the Monday.com Integration page.

![Map repositories to monday.com projects and enable automated task creation with Aikido.](https://help.aikido.dev/_assets/10ea38aadc67/mondaycom_dc426a4a-3d15-46dc-aad4-998e028ffa9f.png)

## Options for Task Creation in Monday.com via Aikido <a href="#options-for-task-creation-in-mondaycom-via-aikido" id="options-for-task-creation-in-mondaycom-via-aikido"></a>

There are two different options to create new tasks from Aikido into Monday.com.

1. Manually create tasks from the Aikido interface
2. Automatically create new tasks via Aikido's auto creation functionality.

## 1. Manual Task Creation <a href="#id-1-manual-task-creation" id="id-1-manual-task-creation"></a>

1.  Hover over any issue in your feed and click the _**+**_ in the **assignee column.**\
    ​

    ![Task assignment interface with options to add or manage an assignee.](https://help.aikido.dev/_assets/cf2cd1ea323f/asana_a6b1ac3d-ef37-454a-a531-b366d190f292.png)

    Alternatively, you can click the triple dots in the last columns to open up the action menu. If you have grouped issues, the triple dot action menu is available on every subissue.\
    ​

    ![Action menu with options to create task, snooze, ignore, copy link, or adjust severity.](https://help.aikido.dev/_assets/eb410529c5c1/ucarecdn-466636e8-15d6-4a23-abb5-27f748884ebe.png)
2.  Fill in the required details in the popup modal.\
    ​

    ![Task creation form for project management in monday.com, detailing a critical upgrade issue.](https://help.aikido.dev/_assets/dfe5a8c7024f/ucarecdn-7ed10212-15ca-4d68-afd4-6510ac747e14.png)

    ​
3. The newly created task in Monday.com will be linked in the Aikido Issue Detail under the 'Tasks' tab (sidepanel).

![Critical Log4j upgrade task assigned to Maarten De Schuymer.](https://help.aikido.dev/_assets/793ec9ca6a37/ucarecdn-e8b64e9e-3feb-471c-9ac9-a1c89c5fba00.png)

## 2. Automated Task Creation <a href="#id-2-automated-task-creation" id="id-2-automated-task-creation"></a>

> [!info]
> Aikido will automatically create tasks **every hour in bulk.** There is at the moment no option to trigger this manually.

1. Go to the [Monday.com Integration](https://app.aikido.dev/settings/integrations/tasktracker) settings page
2. Select '**Change auto creation**'
3. Define the criteria for automatic task creation.

You can configure all of these settings in the autocreation modal:

* **On/Off:** Enable or disable autocreation. When off, the threshold is effectively set to `None`.
* **Severity threshold:** Create tickets for issues at `Critical`, `High`, `Medium`, or `Low` and above. For example, `High` creates tickets for `High` and `Critical`.
* **Issue types:** Create tickets for all issue types, or limit them to specific types like `SCA`, `SAST`, `Secrets`, `Cloud`, `IaC`, `Malware`, or `License`.
* **Daily limit:** Set the maximum number of tickets created per day. The default is `25`. Some plans support higher limits.
* **Ticket creation mode:** Create one ticket per issue group, or create separate tickets per location or scope. Per-location mode can create more tickets.
* **Scope:** Available only in per-location mode. Target all repos or clouds, only mapped repos or teams, or specific repos or clouds with include and exclude lists.

<figure><img src="https://help.aikido.dev/_assets/0f792496e2b2/image.png" alt=""><figcaption></figcaption></figure>

4. Aikido will then autonomously generate Monday.com tickets based on these settings 🚀

***

***
