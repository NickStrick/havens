---
title: "GitLab Issues"
source: https://help.aikido.dev/getting-started/task-management-systems/all-supported-task-trackers/gitlab-issues
section: Getting started
fetched: 2026-11-08
generated: ingest_docs
---
# GitLab Issues

Aikido can connect to GitLab so that you can create issues for security findings found through Aikido. For each of the findings in the 'Feed' of Aikido, a GitLab issue can be created, and linked.

You will be able to follow along in the Feed, to whom the ticket is assigned.

### 1. Set up integration <a href="#id-1-set-up-integration" id="id-1-set-up-integration"></a>

Go to [https://app.aikido.dev/settings/integrations](https://app.aikido.dev/settings/integrations) and scroll down to the 'Task trackers' section.

![GitLab integration for tracking and managing security issues; connect to create GitLab issues.](https://help.aikido.dev/_assets/1928bf112d6a/ucarecdn-315ed60c-bb33-46de-8437-b67458cb6851.png)

Click on 'Connect'

![GitLab authorization prompt for issue-tracking, awaiting user permission to proceed.](https://help.aikido.dev/_assets/0720de81ac40/ucarecdn-bd90ccd9-fdd9-46b8-b552-d28145c3f0d7.png)

Click on 'Authorize GitLab'

![Authorization prompt for Aikido Issues to access GitLab user's API and account data.](https://help.aikido.dev/_assets/2c5984218baa/ucarecdn-febb5b75-7e73-4a47-8d71-e576826a89d8.png)

And select a 'Group' for which you want to activate the integration.

Click 'Save' and you're connected.

![GitLab issue-tracking integration status: Connected.](https://help.aikido.dev/_assets/95548bcdbb9c/ucarecdn-902c3217-4139-4079-9490-3f2059fbbdab.png)

### 2. Create a GitLab issue for a finding, inside Aikido <a href="#id-2-create-a-gitlab-issue-for-a-finding-inside-aikido" id="id-2-create-a-gitlab-issue-for-a-finding-inside-aikido"></a>

Go to the [Feed](https://app.aikido.dev/queue), and go to the security finding of choice. In the column 'Assignee', you will find the ability to assign a GitLab Issue to someone.

![Assign a new task owner by clicking the plus icon.](https://help.aikido.dev/_assets/fe9c545a4699/ucarecdn-cd3756a0-ebf2-4903-9d80-6f172e7d880d.png)

When you click on it, a popup will open.

![Task creation form for assigning and summarizing a security fix in GitLab.](https://help.aikido.dev/_assets/5192b010b216/ucarecdn-2d25f8b3-11d3-4b4a-b25f-100095e4966a.png)

When creating the Issue Task, this will be made clear in the UI of Aikido

![Open task assigned to user "roelanddel" displayed in a project management dashboard.](https://help.aikido.dev/_assets/d4cf3ca3c86e/ucarecdn-a34498f0-206a-444d-ae0b-2a8992cb8ab7.png)

You're done!

### &#x20;<a href="#set-up-gitlab-issues-integration" id="set-up-gitlab-issues-integration"></a>

***
