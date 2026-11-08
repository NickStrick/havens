---
title: "GitHub Issues"
source: https://help.aikido.dev/getting-started/task-management-systems/all-supported-task-trackers/github-issues
section: Getting started
fetched: 2026-11-08
generated: ingest_docs
---
# GitHub Issues

This one-time setup _per workspace_ allows everyone in your Aikido organization to create issues directly in GitHub Issues

Following use cases are supported :

* **Manual Ticket Addition**: Manually sync security issue tickets to GitHub Issues.
* **Automated Ticket Creation**: Automatically create and push tickets to specified GitHub Issue projects/repos.

> [!warning]
> All issues will be automatically created in the respective repo. If you wish to disable this functionality, contact us.

> [!info]
> This integration is for GitHub.com. If you are on a GitHub Enterprise Cloud with data residency tenant (`SUBDOMAIN.ghe.com`), use the [GitHub Enterprise Cloud Issues](https://help.aikido.dev/getting-started/task-management-systems/all-supported-task-trackers/github-enterprise-cloud-issues) integration instead.

### Prerequisites <a href="#prerequisites" id="prerequisites"></a>

* GitHub account needs to be an organisation account
* Issues need to be enabled inside GitHub

### Connecting the Aikido App to GitHub Issues <a href="#connecting-the-aikido-app-to-github-issues" id="connecting-the-aikido-app-to-github-issues"></a>

1. Navigate to [Integration Settings](https://app.aikido.dev/settings/integrations) within the Aikido app.
2. In the 'Task Trackers' section, select 'GitHub Issues'
3.  **Install the Issues App inside your organisation** ([Install Link](https://github.com/apps/aikido-issues/installations/new)). This is needed in order to select your organisation.\
    ​

    <img src="https://help.aikido.dev/_assets/5627287260b3/ucarecdn-bb36cac9-b2e2-49f3-9efc-eccad640cb18.png" alt="GitHub issue-tracking integration setup requires authorization and organization configuration." width="375">
4.  Select your organisation and repos\
    ​

    ![Aikido Issues installation prompt with user selection interface.](https://help.aikido.dev/_assets/f2babe2d273e/ucarecdn-4563a93d-56a5-4793-9297-dd32eadc05b5.png)
5.  When installed succesfully, you will get a notification on top of the page in GitHub. **Return to Aikido.**\
    ​

    ![Notification confirming "Aikido Issues" was updated for the specified user account.](https://help.aikido.dev/_assets/264795628caa/ucarecdn-6f174321-dada-40f3-938e-635ce3e1a691.png)
6.  **Select your organisation** in the modal.\
    ​

    <img src="https://help.aikido.dev/_assets/3c0c05b6a3ee/ucarecdn-869211a2-7d05-499d-95b1-76188d6f4518.png" alt="Dropdown menu for selecting an organization in settings." width="375">
7.  **Click Save.** The status will now change to **Connected.**

    <img src="https://help.aikido.dev/_assets/7813e25068be/ucarecdn-1816d0df-29de-4d8e-9d64-da3851964f10.png" alt="GitHub issue-tracking integration successfully connected and ready for use." width="375">
8. Close the modal & open the GitHub Issues Integration page. By default all issues will be synced to the 'Default Repo'. **Contact us** if you'd like to have autosyncing issues to the respective repo.

![](https://help.aikido.dev/_assets/eab9d3473c03/github-issues_62e79607-05a8-4f84-b7f3-77a7009eeb62.png)

You can set a Default Label that will be send for all Aikido Issues. These will be synced and appear in GitHub.​\
​

![Open GitHub issue for minor aws/aws-sdk-php upgrade, labeled low priority security fix.](https://help.aikido.dev/_assets/8372fb797fbf/ucarecdn-39e93b13-3513-4384-b079-1b9cba20563e.png)

#### Options for Task Creation in GitHub Issues via Aikido <a href="#options-for-task-creation-in-github-issues-via-aikido" id="options-for-task-creation-in-github-issues-via-aikido"></a>

There are two different options to create new tasks from Aikido into GitHub Issues

1. Manually create tasks from the Aikido interface
2. Automatically create new tasks via Aikido's auto creation functionality.

### Manual Task Creation <a href="#manual-task-creation" id="manual-task-creation"></a>

1.  Hover over any issue in your feed and click the _**+**_ in the **assignee column.**\
    ​

    <img src="https://help.aikido.dev/_assets/cf2cd1ea323f/asana_a6b1ac3d-ef37-454a-a531-b366d190f292.png" alt="Task management interface showing &#x22;Assignee&#x22; column with add and options buttons." width="327">

    Alternatively, you can click the triple dots in the last columns to open up the action menu. If you have grouped issues, the triple dot action menu is available on every subissue.\
    ​

    <img src="https://help.aikido.dev/_assets/201350618f90/ucarecdn-7e71f2c8-d4a3-4214-9fc0-26341486d030.png" alt="Dropdown menu with task management actions: create, snooze, ignore, copy link, adjust severity." width="221">
2.  Fill in the required details in the popup modal.\
    ​

    <img src="https://help.aikido.dev/_assets/dadf2d74ffd7/ucarecdn-c876d6f9-e42b-4d14-9e16-6d8f0474d73d.png" alt="Form for creating a new GitHub issue task with project, assignee, and description fields." width="375">

    ​
3. The newly created task in GitHub Issues will be linked in the Aikido Issue Detail under the 'Tasks' tab (sidepanel).

![Task management dashboard showing a low-priority AWS SDK PHP upgrade task.](https://help.aikido.dev/_assets/4a7bc4c9a5bc/ucarecdn-8160a9aa-cc40-4bab-9d96-e0f9f7b3f4c6.png)

### Automated Task Creation <a href="#automated-task-creation" id="automated-task-creation"></a>

> [!info]
> Aikido will automatically create tasks **every hour in bulk.** There is at the moment no option to trigger this manually.

1. Go to the [GitHub Integration](https://app.aikido.dev/settings/integrations/tasktracker) settings page
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

4. Aikido will then autonomously generate GitHub Issues based on these settings 🚀

### Automatically Close Issues in GitHub

Aikido can automatically close linked GitHub issues once the related vulnerability is resolved in Aikido, for example after a successful scan no longer reports it, or when you manually mark it solved. The GitHub issue is only closed when there are no remaining open or snoozed Aikido issues for that link (ignored issues do not block closing). You need a GitHub issue linked to the Aikido finding for this to apply.

<figure><img src="https://help.aikido.dev/_assets/f2b4329e4d64/image-309.png" alt=""><figcaption></figcaption></figure>

***
