---
title: "Shortcut"
source: https://help.aikido.dev/getting-started/task-management-systems/all-supported-task-trackers/shortcut
section: Getting started
fetched: 2026-11-08
generated: ingest_docs
---
# Shortcut

This one-time setup _per workspace_ allows everyone in your Aikido organization to create issues directly in Shortcut.

Following use cases are supported :

* **Automated Ticket Creation**: Automatically create and push tickets to specified Shortcut projects for seamless tracking of security issues.
* **Manual Ticket Addition**: Manually add security issue tickets to Shortcut, ensuring targeted attention for critical vulnerabilities.

## Connecting the Aikido App to Shortcut <a href="#connecting-the-aikido-app-to-shortcut" id="connecting-the-aikido-app-to-shortcut"></a>

1. Navigate to [Integration Settings](https://app.aikido.dev/settings/integrations) within the Aikido app.
2. In the 'Task Trackers' section, select 'Shortcut'
3.  A prompt will request authorization for Shortcut.\
    ​

    ![Shortcut issue-tracking setup screen prompting for API key configuration.](https://help.aikido.dev/_assets/42045066caf3/shortcut_47c4c8f3-3a8c-4029-ade4-7aae235f0cf1.png)

    ​
4. Login into your Shortcut account
5. Grant Aikido permission to access your Shortcut workspace
6. Once authorized, Aikido is successfully connected to Shortcut, enhancing your task management capabilities 🚀

![Map repositories to Shortcut teams and enable or disable task autocreation.](https://help.aikido.dev/_assets/4c2e3d1441e3/shortcut_509f1035-d5ae-49e2-9213-912ca5ffda52.png)

## Options for Task Creation in Shortcut via Aikido <a href="#options-for-task-creation-in-shortcut-via-aikido" id="options-for-task-creation-in-shortcut-via-aikido"></a>

There are two different options to create new tasks from Aikido into Shortcut.

1. Manually create tasks from the Aikido interface
2. Automatically create new tasks via Aikido's auto creation functionality.

## 1. Manual Task Creation <a href="#id-1-manual-task-creation" id="id-1-manual-task-creation"></a>

1.  Hover over any issue in your feed and click the _**+**_ in the **assignee column.**\
    ​

    ![Task table section showing "Assignee" field with add and options buttons.](https://help.aikido.dev/_assets/cf2cd1ea323f/asana_a6b1ac3d-ef37-454a-a531-b366d190f292.png)

    Alternatively, you can click the triple dots in the last columns to open up the action menu. If you have grouped issues, the triple dot action menu is available on every subissue.\
    ​

    ![Dropdown menu with task management actions: create, snooze, ignore, copy link, adjust severity.](https://help.aikido.dev/_assets/b98b81257c4d/shortcut_357ca834-144e-425d-80c3-e125c3b7ccd7.png)
2. Fill in the required details in the popup modal.\
   ​
3. The newly created task in ClickUp will be linked in the Aikido Issue Detail under the 'Tasks' tab (sidepanel).

![High-priority tzinfo upgrade task, currently unassigned and open for action.](https://help.aikido.dev/_assets/d437540ded0a/shortcut_ad2fc758-eca3-4e95-94e4-7fb186aca52b.png)

## 2. Automated Task Creation <a href="#id-2-automated-task-creation" id="id-2-automated-task-creation"></a>

> [!info]
> Aikido will automatically create tasks **every hour in bulk.** There is at the moment no option to trigger this manually.

1. Go to the [Shortcut Integration](https://app.aikido.dev/settings/integrations/tasktracker) settings
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

4. Aikido will then autonomously generate Shortcut tickets based on these settings 🚀

***
