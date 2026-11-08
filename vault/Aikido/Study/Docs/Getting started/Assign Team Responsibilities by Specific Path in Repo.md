---
title: "Assign Team Responsibilities by Specific Path in Repo"
source: https://help.aikido.dev/getting-started/manage-teams-and-applications/assign-team-responsibilities-by-specific-path-in-repo
section: Getting started
fetched: 2026-11-08
generated: ingest_docs
---
# Assign Team Responsibilities by Specific Path in Repo

Assigning **specific repo paths** to teams in Aikido can help to streamline issue management in **large monorepos** and enabling **more granular reporting**.

### Use Cases <a href="#use-cases" id="use-cases"></a>

* **Monorepo management:** Assign specific paths to teams instead of the full monorepo. This allows you to filter your feed in a more granular way.
* **Specific reporting:** Allows reports to be generated based on service-level/path-level rather than at the repo level.

### Assigning Specific Paths <a href="#assigning-specific-paths" id="assigning-specific-paths"></a>

**Step 1:** Create a Team and Link Repositories (see [article](https://help.aikido.dev/getting-started/manage-teams-and-applications/managing-user-access-with-teams))

* Create a new team or select an existing one, then link the relevant repositories to this team.

**Step 2:** Click Limit Access By Path in the dropdown menu

![](https://help.aikido.dev/_assets/1a8c1c96e607/ucarecdn-e373539b-fc2c-4566-bd1a-49ea280c5386.png)

**Step 3:** Enter the paths within the repo that you want the team to have access to.

![](https://help.aikido.dev/_assets/923005f67aaf/ucarecdn-fe715668-3cdc-4ff9-8dee-953f92ad64f8.png)

**Wildcard support**

`**` means anything in any subdirectory (including slashes)\
`*` means anything in the current directory (excluding slashes)\
`?` means any single character

**Step 4:** Filter Issues in Feed/Reports

Go to the **Feed** or **Reports** section. Apply a filter based on the team, and you will see only the issues related to the paths assigned to that team.

![Dashboard showing security findings, severity levels, and issue statuses for the "devs" team workspace.](https://help.aikido.dev/_assets/72c59657284a/ucarecdn-12583652-fb59-4830-a140-36996db6ff3d.png)
