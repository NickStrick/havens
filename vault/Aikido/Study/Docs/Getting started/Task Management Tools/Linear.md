---
title: "Linear"
source: https://help.aikido.dev/getting-started/task-management-systems/all-supported-task-trackers/linear
section: Getting started
fetched: 2026-11-08
generated: ingest_docs
---
# Linear

This one-time setup _per workspace_ allows everyone in your Aikido organization to create issues directly in Linear.

Following use cases are supported :

* **Automated Ticket Creation**: Automatically create and push tickets to specified Linear projects for seamless tracking of security issues.
* **Manual Ticket Addition**: Manually add security issue tickets to Linear, ensuring targeted attention for critical vulnerabilities.

## Connecting the Aikido App to Linear <a href="#connecting-the-aikido-app-to-linear" id="connecting-the-aikido-app-to-linear"></a>

1. Navigate to [Integration Settings](https://app.aikido.dev/settings/integrations) within the Aikido app.
2. In the 'Task Trackers' section, select 'Linear Issues'
3.  A prompt will request authorization for Linear.\
    ​

    ![Authorization prompt for Linear issue-tracking; user currently unauthorized.](https://help.aikido.dev/_assets/b104487f584c/linear_3620920b-3f02-43c8-a768-08cd22401356.png)
4. Login into your Linear account
5.  Grant Aikido permission to access your Linear workspace

    ![Aikido Security requests access to manage and comment on issues in your Linear workspace.](https://help.aikido.dev/_assets/03c5bd746a24/linear_5b96e403-1657-482b-b760-19f73d2bd463.png)
6. Once authorized, Aikido is successfully connected to Linear, enhancing your task management capabilities 🚀

## ​Options for Task Creation in Linear via Aikido <a href="#options-for-task-creation-in-linear-via-aikido" id="options-for-task-creation-in-linear-via-aikido"></a>

There are two different options to create new tasks from Aikido into Linear.

1. Manually create tasks from the Aikido interface
2. Automatically create new tasks via Aikido's auto creation functionality.

### 1. Manual Task Creation <a href="#id-1-manual-task-creation" id="id-1-manual-task-creation"></a>

1.  Hover over any issue in your feed and click the _**+**_ in the **assign column.**\
    ​

    ![Task management interface showing the "Assignee" column with add and options buttons.](https://help.aikido.dev/_assets/cf2cd1ea323f/asana_a6b1ac3d-ef37-454a-a531-b366d190f292.png)

    Alternatively, you can click the triple dots in the last columns to open up the action menu. If you have grouped issues, the triple dot action menu is available on every subissue.\
    ​

    ![Dropdown menu offering task creation and additional action options.](https://help.aikido.dev/_assets/d7219f20e767/linear_cedd6e79-044b-42d9-a646-bd611ee50265.png)
2.  Fill in the required details in the popup modal.\
    ​

    ![Task creation form for reporting a critical Content Security Policy issue in Aikido.](https://help.aikido.dev/_assets/42ff06e79d9f/linear_10e057ec-646a-497c-bef2-24c7353c91ba.png)
3. The newly created task in Linear will be linked in the Aikido Issue Detail under the 'Tasks' tab (sidepanel).

![Critical task: CSP header missing, issue unassigned and currently open for resolution.](https://help.aikido.dev/_assets/4c775e5c1e1e/linear_dae76f1e-7db0-4ff3-b011-52631c0175d5.png)

### 2. Automated Task Creation <a href="#id-2-automated-task-creation" id="id-2-automated-task-creation"></a>

> [!info]
> Aikido will automatically create tasks **every hour in bulk.** There is at the moment no option to trigger this manually.

1. Go to the [Linear Integration](https://app.aikido.dev/settings/integrations/tasktracker) settings
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

4. Aikido will then autonomously generate Linear tickets based on these settings 🚀

***
