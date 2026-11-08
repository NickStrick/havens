---
title: "GitLab Issues Self-Managed"
source: https://help.aikido.dev/getting-started/task-management-systems/all-supported-task-trackers/gitlab-issues-self-managed
section: Getting started
fetched: 2026-11-08
generated: ingest_docs
---
# GitLab Issues Self-Managed

Aikido can connect to GitLab Self-Managed (On-prem) so that you can create issues for security findings found through Aikido. For each of the findings in the 'Feed' of Aikido, a GitLab issue can be created, and linked.

You will be able to follow along in the Feed, to whom the ticket is assigned.

### 1. Set up integration <a href="#id-1-set-up-integration" id="id-1-set-up-integration"></a>

**Step 1.** Go to [https://app.aikido.dev/settings/integrations](https://app.aikido.dev/settings/integrations) and scroll down to the 'Task trackers' section.

<figure><img src="https://help.aikido.dev/_assets/7db99b956f00/image-107.png" alt="" width="375"><figcaption></figcaption></figure>

**Step 2.** Click on 'Connect' and fill in the serve base URL, the PAT and Group ID

<figure><img src="https://help.aikido.dev/_assets/dbfad6ca55aa/image-109.png" alt="" width="373"><figcaption></figcaption></figure>

**Step 3.** Click 'Save' and you're connected. Close the modal and you will redirected to the settings page.

### 2. Create a GitLab issue for a finding, inside Aikido <a href="#id-2-create-a-gitlab-issue-for-a-finding-inside-aikido" id="id-2-create-a-gitlab-issue-for-a-finding-inside-aikido"></a>

Go to the [Feed](https://app.aikido.dev/queue), and go to the security finding of choice. In the column 'Assignee', you will find the ability to assign a GitLab Issue to someone.

![Assign a new task owner by clicking the plus icon.](https://help.aikido.dev/_assets/fe9c545a4699/ucarecdn-cd3756a0-ebf2-4903-9d80-6f172e7d880d.png)

When you click on it, a popup will open.

![Task creation form for assigning and summarizing a security fix in GitLab.](https://help.aikido.dev/_assets/5192b010b216/ucarecdn-2d25f8b3-11d3-4b4a-b25f-100095e4966a.png)

When creating the Issue Task, this will be made clear in the UI of Aikido

![Open task assigned to user "roelanddel" displayed in a project management dashboard.](https://help.aikido.dev/_assets/d4cf3ca3c86e/ucarecdn-a34498f0-206a-444d-ae0b-2a8992cb8ab7.png)

You're done!

***
