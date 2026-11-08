---
title: "ClickUp"
source: https://help.aikido.dev/getting-started/task-management-systems/all-supported-task-trackers/clickup
section: Getting started
fetched: 2026-11-08
generated: ingest_docs
---
# ClickUp

This one-time setup _per workspace_ allows everyone in your Aikido organization to create issues directly in ClickUp.

Following use cases are supported :

* **Automated Ticket Creation**: Automatically create and push tickets to specified ClickUp projects for seamless tracking of security issues.
* **Manual Ticket Addition**: Manually add security issue tickets to ClickUp, ensuring targeted attention for critical vulnerabilities.

## Connecting the Aikido App to ClickUp <a href="#connecting-the-aikido-app-to-clickup" id="connecting-the-aikido-app-to-clickup"></a>

1. Navigate to [Integration Settings](https://app.aikido.dev/settings/integrations) within the Aikido app.
2. In the 'Task Trackers' section, select 'ClickUp'
3.  A prompt will request authorization for ClickUp.\
    ​

    ![ClickUp authorization prompt for issue-tracking; user currently unauthorized.](https://help.aikido.dev/_assets/98d61375a45f/clickup_795b1392-e60d-4492-8853-d2b4251f9fef.png)
4. Login into your ClickUp account
5.  Grant Aikido permission to access your ClickUp workspace

    ![ClickUp workspace selection screen for connecting with Aikido Security integration.](https://help.aikido.dev/_assets/d0bd3037a983/clickup_72bc2856-bacd-4204-a446-7984aa1e9f38.png)
6. Once authorized, Aikido is successfully connected to ClickUp, enhancing your task management capabilities 🚀

![Map repositories to ClickUp projects and enable automatic task creation with Aikido.](https://help.aikido.dev/_assets/45b3e1ce894c/clickup_e419f1df-e108-4d00-ba4d-3057129c8133.png)

## ​Options for Task Creation in ClickUp via Aikido <a href="#options-for-task-creation-in-clickup-via-aikido" id="options-for-task-creation-in-clickup-via-aikido"></a>

There are two different options to create new tasks from Aikido into ClickUp.

1. Manually create tasks from the Aikido interface
2. Automatically create new tasks via Aikido's auto creation functionality.

## 1. Manual Task Creation <a href="#id-1-manual-task-creation" id="id-1-manual-task-creation"></a>

1.  Hover over any issue in your feed and click the _**+**_ in the **assignee column.**\
    ​

    ![Assignee section with options to add or manage task assignments.](https://help.aikido.dev/_assets/cf2cd1ea323f/asana_a6b1ac3d-ef37-454a-a531-b366d190f292.png)

    Alternatively, you can click the triple dots in the last columns to open up the action menu. If you have grouped issues, the triple dot action menu is available on every subissue.\
    ​

    ![Action menu with options: create task, snooze, ignore, copy link, adjust severity.](https://help.aikido.dev/_assets/46ef5d4d174a/clickup_b05ddc73-2393-4d76-97b5-29f663068d65.png)
2.  Fill in the required details in the popup modal.\
    ​

    ![ClickUp task creation form for reporting high-severity XSS vulnerability findings.](https://help.aikido.dev/_assets/312d5d59d839/asana_22b79ff6-7c72-4889-9897-766cbe39516b.png)
3. The newly created task in ClickUp will be linked in the Aikido Issue Detail under the 'Tasks' tab (sidepanel).

![Task warning about high-risk XSS attacks from unescaped input, labeled as open.](https://help.aikido.dev/_assets/43dcfd8af3e3/asana_eca9cd6d-11f2-495c-88c4-db292078ec4c.png)

## 2. Automated Task Creation <a href="#id-2-automated-task-creation" id="id-2-automated-task-creation"></a>

> [!info]
> Aikido will automatically create tasks **every hour in bulk.** There is at the moment no option to trigger this manually.

1. Go to the [ClickUp Integration](https://app.aikido.dev/settings/integrations/tasktracker) settings
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

4. Aikido will then autonomously generate ClickUp tickets based on these settings 🚀

## Map Aikido data to custom fields

Aikido can fill ClickUp custom fields on every task it creates. Use it to send severity, SLA dates, links, and other Aikido data straight into your ClickUp fields.

### Supported field types

| ClickUp field type | Example value |
| --- | --- |
| Text | `Severity: $SEVERITY` |
| Text area (long text) | `$TLDR` |
| Website | `$AIKIDO_LINK` |
| Number | `$SEVERITY_SCORE` |
| Dropdown | `$SEVERITY` |
| Labels | `label 2, label 3` |
| Date | `$SLA_DATE` |
| Checkbox | `true` |

For **Dropdown** and **Labels** fields, enter the option names exactly as they appear in ClickUp. You don't need option IDs.

### Configure field mappings

1. Go to [**Integrations** → **ClickUp** → **Field Mapping**](https://app.aikido.dev/settings/integrations/tasktracker/fields/custom) and click **Add Field**.
2. Enter the ClickUp custom field name in **Custom Field**, exactly as it appears in ClickUp.
3. Enter an Aikido shortcode (e.g. `$SEVERITY`) or a fixed text value in **Aikido Value**.
4. Click **Save Changes**.

The **Preview** column shows the value Aikido will send to ClickUp.

### Fixed values and shortcodes

**Fixed values:** Enter plain text to set the same value on every task. For example, `Security` fills that field with "Security" on every task Aikido creates.

**Shortcodes:** Aikido replaces shortcodes with data from the issue when it creates the task. You can combine them with fixed text, such as `Issue: $TLDR` or `Detected on $FIRST_DETECTED_DATE`. For the full list of shortcodes, see [Map Aikido Data to Jira Custom Fields](https://help.aikido.dev/getting-started/task-management-systems/map-aikido-data-to-jira-custom-fields). The same shortcodes work for ClickUp.

For ClickUp **Date** fields, use the `YYYY-MM-DD` format (e.g. `2024-10-23`) or the `_DATE` shortcodes, such as `$SLA_DATE`.

***
