---
title: "Azure DevOps Boards"
source: https://help.aikido.dev/getting-started/task-management-systems/all-supported-task-trackers/azure-devops-boards
section: Getting started
fetched: 2026-11-08
generated: ingest_docs
---
# Azure DevOps Boards

This one-time setup _per workspace_ allows everyone in your Aikido organization to create issues directly in Azure DevOps Boards.

Following use cases are supported :

* **Automated Ticket Creation**: Automatically create and push tickets to specified Boards projects for seamless tracking of security issues.
* **Manual Ticket Addition**: Manually add security issue tickets to Boards, ensuring targeted attention for critical vulnerabilities.

## Connecting the Aikido App to Boards <a href="#connecting-the-aikido-app-to-boards" id="connecting-the-aikido-app-to-boards"></a>

1. Navigate to [Integration Settings](https://app.aikido.dev/settings/integrations) within the Aikido app.
2.  In the 'Task Trackers' section, select 'Azure DevOps Boards'\
    A modal will request some more information to authenticate:

    * **UserID**​: this is your **email**
    * **Access Token**: Can be found inside Azure DevOps. As scope, under '**Work Items**', you can select '**Read & write**'.
    * **Organisation** _**Name**_**:** name of the organisation, can be found in the URL <mark style="color:red;">Make sure to include the organisation name ONLY, without the prefix of the url https://...</mark>\
      <br>

    ![Azure DevOps integration setup screen prompting for user ID, token, and organization.](https://help.aikido.dev/_assets/963dc25af008/ucarecdn-d8185da7-4270-4757-983c-2f49135d8433.png)
3. After filling in the credentials correctly, press save and Close the modal.\
   ​
4.  Open the Azure DevOps Boards Integration page to manage the auto creation settings.\
    ​

    ![Azure DevOps Boards integration setup: map repos, enable autocreation, set default task type.](https://help.aikido.dev/_assets/25ec8d1a68dc/azure-devops-boards_6ca66041-0504-4364-9a0c-281eee90ffa3.png)

## Options for Task Creation in Azure DevOps Boards via Aikido <a href="#options-for-task-creation-in-azure-devops-boards-via-aikido" id="options-for-task-creation-in-azure-devops-boards-via-aikido"></a>

There are two different options to create new tasks from Aikido into Boards

1. Manually create tasks from the Aikido interface
2. Automatically create new tasks via Aikido's auto creation functionality.

## 1. Manual Task Creation <a href="#id-1-manual-task-creation" id="id-1-manual-task-creation"></a>

1.  Hover over any issue in your feed and click the _**+**_ in the **assignee column.**\
    ​

    ![Task assignment table section with add and options buttons.](https://help.aikido.dev/_assets/cf2cd1ea323f/asana_a6b1ac3d-ef37-454a-a531-b366d190f292.png)

    Alternatively, you can click the triple dots in the last columns to open up the action menu. If you have grouped issues, the triple dot action menu is available on every subissue.\
    ​

    ![Actions dropdown menu with options for task management and severity adjustment.](https://help.aikido.dev/_assets/afbae3479a22/ucarecdn-a9b48cf3-8614-447c-b1dd-252ae08967c8.png)
2.  Fill in the required details in the popup modal.\
    ​

    ![Azure DevOps Boards task creation form with fields for project, assignee, scope, summary, and description.](https://help.aikido.dev/_assets/3fbc7af7ca9a/ucarecdn-636e8271-d106-4556-9e2f-fb9c1cc51345.png)

    ​
3. The newly created task in Boards will be linked in the Aikido Issue Detail under the 'Tasks' tab (sidepanel).

![High-priority task: Minor upgrade for @babel/traverse, assigned to aaron aikidodev.](https://help.aikido.dev/_assets/9dc4546ea61e/ucarecdn-803ed3f1-1548-49b0-ba58-64e153b91f1a.png)

## 2. Automated Task Creation <a href="#id-2-automated-task-creation" id="id-2-automated-task-creation"></a>

> [!info]
> Aikido will automatically create tasks **every hour in bulk.** There is at the moment no option to trigger this manually.

1. Go to the [Azure DevOps Boards Integration](https://app.aikido.dev/settings/integrations/tasktracker) settings page
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

4. Aikido will then autonomously generate Boards tickets based on these settings 🚀

***
