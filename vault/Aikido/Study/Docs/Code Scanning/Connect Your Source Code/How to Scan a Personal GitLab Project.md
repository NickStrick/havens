---
title: "How to Scan a Personal GitLab Project"
source: https://help.aikido.dev/code-scanning/connect-your-source-code/how-to-scan-a-personal-gitlab-project
section: Code Scanning
fetched: 2026-11-08
generated: ingest_docs
---
# How to Scan a Personal GitLab Project

**Table of contents:**

* [Step 1. Create a new group in GitLab](https://help.aikido.dev/code-scanning/connect-your-source-code/how-to-scan-a-personal-gitlab-project#step-1-create-a-new-group-in-gitlab)
* [Step 2. Transfer your personal projects to the newly created group](https://help.aikido.dev/code-scanning/connect-your-source-code/how-to-scan-a-personal-gitlab-project#step-2-transfer-your-personal-projects-to-the-newly-created-group)
* [Step 3. Connect the group to Aikido](https://help.aikido.dev/code-scanning/connect-your-source-code/how-to-scan-a-personal-gitlab-project#step-3-connect-the-group-to-aikido)

## How to scan a personal GitLab project

At this moment, Aikido only allows to scan projects which are linked to a group. Projects linked to your GitLab user are currently not supported.\
​\
If you'd like to enable code scanning on your personal GitLab projects, we recommend you create a personal group and transfer the projects there. To accomplish this, we recommend you follow the steps below.

#### Step 1. Create a new group in GitLab <a href="#step-1-create-a-new-group-in-gitlab" id="step-1-create-a-new-group-in-gitlab"></a>

Login to your GitLab account, navigate to "Groups" in the left-hand side navigation and click on "New group". Follow the steps to create a group.

![GitLab Groups dashboard with options to explore, create, and search for groups.](https://help.aikido.dev/_assets/43c1cf8627e7/ucarecdn-6f7e4107-4a83-44b6-ae5c-f858a3b4ac78.png)

#### Step 2. Transfer your personal projects to the newly created group <a href="#step-2-transfer-your-personal-projects-to-the-newly-created-group" id="step-2-transfer-your-personal-projects-to-the-newly-created-group"></a>

Now, you can transfer your personal projects to the newly created group. To do this, navigate to the project's detail page and go to it's "General settings", which you can see in the left-hand side navigation. At the bottom you can expand the "Advanced" settings section.

![GitLab project general settings page showing configuration options for visibility, badges, and advanced features.](https://help.aikido.dev/_assets/8ed25b8cb6e9/ucarecdn-12819150-cf77-456d-95fc-21fcad9de857.png)

At the bottom of this section, you can transfer this project to a different namespace.\
​

![GitLab project settings for changing repository path and transferring project namespace.](https://help.aikido.dev/_assets/26103ad43075/ucarecdn-968e99ba-c1be-4ccd-ac56-e243c658c35f.png)

#### Step 3. Connect the group to Aikido <a href="#step-3-connect-the-group-to-aikido" id="step-3-connect-the-group-to-aikido"></a>

Now that you transferred your new project to the new namespace aka "group", you can connect Aikido to that group and allow read-only acces to start scanning for vulnerabilities.\
​\
In Aikido, select the Group dropdown picker in the left-hand side navigation, and click on "Add another workspace".

![Workspace menu showing "aikido-dev" on Pro plan with team and settings options.](https://help.aikido.dev/_assets/f88ae54c4708/ucarecdn-75339182-b6b1-4078-a9d1-e7d549c7bdc2.png)

You will now go through the flow of connecting your newly created GitLab group to Aikido to grant read-only access to your personal projects.
