---
title: "Jira Data Center"
source: https://help.aikido.dev/getting-started/task-management-systems/all-supported-task-trackers/jira-data-center
section: Getting started
fetched: 2026-11-08
generated: ingest_docs
---
# Jira Data Center

This article focuses on those companies that have Jira Data Center running (i.e., Jira on premise, different from [Jira Cloud](https://help.aikido.dev/getting-started/task-management-systems/all-supported-task-trackers/jira-cloud)). The following one-time setup _per workspace_ allows everyone in your Aikido organization to create issues directly in Jira On Prem.

Following use cases are supported :

* Automated Ticket Creation: Automatically create and push tickets to specified Jira projects for seamless tracking of security issues.
* Manual Ticket Addition: Manually add security issue tickets to Jira, ensuring targeted attention for critical vulnerabilities.

### Prerequisites <a href="#prerequisites" id="prerequisites"></a>

In order to make the connection to JIRA Data Center, you'll need to create a personal access token. This token will then be used to carry out all requests to your instance.\
​\
Please note that the level of access the integration has will be equal to the person who created the personal access token (PAT). It's therefore advised to let a person with sufficient access rights in the environment to create the PAT.

To create a PAT, you can follow the steps below:

1. Navigate to your JIRA Data Center environment
2. Click on your avatar in the navigation bar on top and navigate to "Profile"
3.  Click on "Personal Access Tokens", you should end up on a screen similar to the one below**​**

    ![Jira Software personal access tokens page prompting user to create their first token.](https://help.aikido.dev/_assets/3b6603a4d2a4/ucarecdn-bd8df7ef-3798-4bdb-acac-65a30ef15823.png)
4. Click on "Create token" and give it an appropriate name
5. We advise to not set an expiry date, but if you do, you'll have to remind yourself to update the token in Aikido periodically
6. Once the token is created, you'll get to copy it momentarily, copy the token and keep it for the next step

### Connecting the Aikido App to Jira <a href="#connecting-the-aikido-app-to-jira" id="connecting-the-aikido-app-to-jira"></a>

1. Navigate to [Integration Settings](https://app.aikido.dev/settings/integrations) within the Aikido app.
2. In the 'Task Trackers' section, select 'Jira Data Center'
3. Enter the url of your environment
4.  Enter the PAT from the previous step and hit "Save"**​**

    ![Jira Data Center integration setup: enter server URL and personal access token.](https://help.aikido.dev/_assets/27ed6c5d6fcc/ucarecdn-f6f0b160-29a8-4940-8cd2-0a53e76f1741.png)
5.  Once authorized, Aikido is successfully connected to Jira, enhancing your task management capabilities 🚀

    ![Jira Data Center integration settings for repo mapping, task autocreation, and default labels.](https://help.aikido.dev/_assets/8e6ccea5dd31/ucarecdn-3d9b5e8e-600d-467a-9683-1c80aa0e556f.png)

### Options for Task Creation in Jira via Aikido <a href="#options-for-task-creation-in-jira-via-aikido" id="options-for-task-creation-in-jira-via-aikido"></a>

There are two different options to create new tasks from Aikido into Jira.

1. Manually create tasks from the Aikido interface
2. Automatically create new tasks via Aikido's auto creation functionality.

### 1. Manual Task Creation <a href="#id-1-manual-task-creation" id="id-1-manual-task-creation"></a>

1.  Hover over any issue in your feed and click the _+_ in the assign column.**​**

    ![Task assignment table with add and options buttons under "Assignee" column.](https://help.aikido.dev/_assets/cf2cd1ea323f/asana_a6b1ac3d-ef37-454a-a531-b366d190f292.png)

    Alternatively, you can click the triple dots in the last columns to open up the action menu. If you have grouped issues, the triple dot action menu is available on every subissue.\
    ​

    ![Action menu with options to manage, share, or adjust task settings.](https://help.aikido.dev/_assets/ecd711fdde8d/ucarecdn-38576e60-ea82-4442-88d3-db09a3bbd539.png)
2.  Fill in the required details in the popup modal.\
    ​

    ![Jira task creation form with project, assignee, scope, summary, and description fields.](https://help.aikido.dev/_assets/38afe1296760/ucarecdn-2601869d-3437-4823-b410-264c9eb9f8fb.png)
3. The newly created task in Jira will be linked in the Aikido Issue Detail under the 'Tasks' tab (sidepanel).

![Critical task: var\_dump() exposes sensitive info, needs attention and assignment.](https://help.aikido.dev/_assets/253bf97fa73c/ucarecdn-294591ba-6d3d-4cfc-9cee-0fc1b6c880cd.png)

### 2. Automated Task Creation <a href="#id-2-automated-task-creation" id="id-2-automated-task-creation"></a>

> [!info]
> Aikido will automatically create tasks **every hour in bulk.** There is at the moment no option to trigger this manually.

1. Go to the [Jira Integration](https://app.aikido.dev/settings/integrations/tasktracker) settings
2. Make sure to enable 'Autocreation' by clicking the toggle to On.
3. Define the criteria for automatic task creation.

You can configure all of these settings in the autocreation modal:

* **On/Off:** Enable or disable autocreation. When off, the threshold is effectively set to `None`.
* **Severity threshold:** Create tickets for issues at `Critical`, `High`, `Medium`, or `Low` and above. For example, `High` creates tickets for `High` and `Critical`.
* **Issue types:** Create tickets for all issue types, or limit them to specific types like `SCA`, `SAST`, `Secrets`, `Cloud`, `IaC`, `Malware`, or `License`.
* **Daily limit:** Set the maximum number of tickets created per day. The default is `25`. Some plans support higher limits.
* **Ticket creation mode:** Create one ticket per issue group, or create separate tickets per location or scope. Per-location mode can create more tickets.
* **Scope:** Available only in per-location mode. Target all repos or clouds, only mapped repos or teams, or specific repos or clouds with include and exclude lists.

<figure><img src="https://help.aikido.dev/_assets/0f792496e2b2/image.png" alt=""><figcaption></figcaption></figure>

4. Aikido will then autonomously generate Jira tickets based on these settings 🚀

***
