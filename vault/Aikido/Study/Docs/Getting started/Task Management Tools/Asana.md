---
title: "Asana"
source: https://help.aikido.dev/getting-started/task-management-systems/all-supported-task-trackers/asana
section: Getting started
fetched: 2026-11-08
generated: ingest_docs
---
# Asana

This one-time setup _per workspace_ allows everyone in your Aikido organization to create issues directly in Asana.

Following use cases are supported :

* **Automated Ticket Creation**: Automatically create and push tickets to specified Asana projects for seamless tracking of security issues.
* **Manual Ticket Addition**: Manually add security issue tickets to Asana, ensuring targeted attention for critical vulnerabilities.

## Connecting the Aikido App to Asana <a href="#connecting-the-aikido-app-to-asana" id="connecting-the-aikido-app-to-asana"></a>

1. Navigate to [Integration Settings](https://app.aikido.dev/settings/integrations) within the Aikido app.
2. In the 'Task Trackers' section, select 'Asana'
3.  A prompt will request authorization for Asana.

    ![Asana integration unauthorized; prompt to authorize access for issue-tracking.](https://help.aikido.dev/_assets/d87922052c80/asana_98d9b2b9-76e9-4a91-8726-6468e0239bf0.png)

    ​
4. Login into your Asana account
5.  Grant Aikido permission to access your Asana workspace

    ![Asana permission request for Aikido Security to access and modify your account data.](https://help.aikido.dev/_assets/bd8c25a69f82/asana_c08d4b3c-4754-43f3-b511-a0cb2dc3865d.png)
6. Once authorized, Aikido is successfully connected to Asana, enhancing your task management capabilities 🚀

![Configure Asana integration to map repositories and enable automatic task creation.](https://help.aikido.dev/_assets/e72218b67887/asana_bbbaa91c-c6ce-4001-9052-308b490bc384.png)

## ​Options for Task Creation in Asana via Aikido <a href="#options-for-task-creation-in-asana-via-aikido" id="options-for-task-creation-in-asana-via-aikido"></a>

There are two different options to create new tasks from Aikido into Asana.

1. Manually create tasks from the Aikido interface
2. Automatically create new tasks via Aikido's auto creation functionality.

## 1. Manual Task Creation <a href="#id-1-manual-task-creation" id="id-1-manual-task-creation"></a>

1.  Hover over any issue in your feed and click the _**+**_ in the **assignee column.**\
    ​

    ![Task assignee section with add and options buttons visible.](https://help.aikido.dev/_assets/cf2cd1ea323f/asana_a6b1ac3d-ef37-454a-a531-b366d190f292.png)

    Alternatively, you can click the triple dots in the last columns to open up the action menu. If you have grouped issues, the triple dot action menu is available on every subissue.

    ![Action menu with options to manage, snooze, ignore, share, or adjust task severity.](https://help.aikido.dev/_assets/7e2cca5565db/asana_487046b9-543c-4f1f-bcfc-f00f9b9edf71.png)

    ​
2.  Fill in the required details in the popup modal.\
    ​

    ![Create a ClickUp task reporting a high-severity XSS vulnerability with details and link.](https://help.aikido.dev/_assets/312d5d59d839/asana_22b79ff6-7c72-4889-9897-766cbe39516b.png)
3. The newly created task in Asana will be linked in the Aikido Issue Detail under the 'Tasks' tab (sidepanel).

![High-priority task warning: Unescaped input may cause XSS attacks.](https://help.aikido.dev/_assets/43dcfd8af3e3/asana_eca9cd6d-11f2-495c-88c4-db292078ec4c.png)

## 2. Automated Task Creation <a href="#id-2-automated-task-creation" id="id-2-automated-task-creation"></a>

> [!info]
> Aikido will automatically create tasks **every hour in bulk.** There is at the moment no option to trigger this manually.

1. Go to the [Asana Integration](https://app.aikido.dev/settings/integrations/tasktracker) settings
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

4. Aikido will then autonomously generate Asana tickets based on these settings 🚀
