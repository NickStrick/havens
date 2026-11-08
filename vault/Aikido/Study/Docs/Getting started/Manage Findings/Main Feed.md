---
title: "Main Feed"
source: https://help.aikido.dev/getting-started/core-functionalities/main-feed
section: Getting started
fetched: 2026-11-08
generated: ingest_docs
---
# Main Feed

Aikido's Feed is meticulously designed to streamline security management: it groups similar issues for clarity, allows for customizable views to highlight what's currently important. The main feed focusses on open issues only. Snoozed and ignored issues are accessible on a separate page for a clean giving a focused and clean overview.

### Aikido's Main Feed <a href="#aikidos-main-feed" id="aikidos-main-feed"></a>

The **Feed** is the central hub for monitoring and managing security issues. A similar view can be found all over Aikido when going into details of repositories, clouds and domains.

By default, Aikido enables the **Focus** view, containing all issues that are important to follow-up. By toggling to **All** we will also show issues that have been auto-triaged and ignored.

_Status Column_

Shows the status of the particular issue.

* _New_: issues that have been around for less than 7 days
* _To Do:_ all other issues that are still unresolved
* _Task Open:_ only when a task manager is linked
*   _PR Open:_ clicking will take you to PR / branch scan overview.<br>

    <figure><img src="https://help.aikido.dev/_assets/2c47d8d5e11e/image-258.png" alt=""><figcaption></figcaption></figure>

### Sidebar <a href="#sidebar" id="sidebar"></a>

Aikido's Feed is equipped with a detailed sidebar, designed to provide users with comprehensive information and actionable options for each security issue. The image below shows the main important actions one can take.

**#1 Group Actions:** these are actions that can be taken on group level of an issue.

**#2 Subissue Actions:** you can also take actions on a subissue separately. This can be important when certain subissues want to be snoozed or ignored, but the overall issue group should remain in the main feed.

**#3 Reachability Analysis:** visualizes accessible code paths for that specific issue.

**#4 Detail Screen**: Separate detail screen with even more information (e.g., CVE information).

![Security dashboard showing a critical vulnerability in the 'bson' package with actionable steps.](https://help.aikido.dev/_assets/e41a969b1ddc/ucarecdn-7d0dadc8-a23e-4f23-b207-c1710b0ce1df.png)

**Reachability Analysis**

![](https://help.aikido.dev/_assets/68f0356f0c93/ucarecdn-1aabe4cf-b6b9-44e5-b953-41f35c7ef824.png)

### Filter Issues <a href="#filter-issues" id="filter-issues"></a>

You can easily adjust the view in order to filter on those issues that are most important to you in the moment. These filters can be found above the issue table in every feed view. You can filter on

* **Issue Type**
* **Predefined filtered views**
  * If you are using the [**SLA functionality**](https://help.aikido.dev/getting-started/core-functionalities/enable-slas-in-aikido), you will be able to see all upcoming and out of SLA issues

![](https://help.aikido.dev/_assets/95d5cf611584/ucarecdn-ac998c65-834e-4bad-b76b-550ca0c2db6b.png)

### Export Issues to CSV or PDF <a href="#export-issues-to-csv-or-pdf" id="export-issues-to-csv-or-pdf"></a>

You can export a CSV or PDF of issues. You can configure which issues to export exactly. This can be triggered from the Actions menu in the top right.

![Export issues: Filter by status, type, team, and format for CSV or PDF download.](https://help.aikido.dev/_assets/ba9f1977e7fa/ucarecdn-fc64121c-f6e4-4e98-87b9-e2c0cedcdf20.png)

### Show issues per team or project <a href="#show-issues-per-team-or-project" id="show-issues-per-team-or-project"></a>

**Aikido's Feed** features a **team filter** at the top of the page. This filter allows users to tailor the feed to display only the issues relevant to selected teams ([📖 Set Up Teams](https://help.aikido.dev/getting-started/manage-teams-and-applications/managing-user-access-with-teams)).

![Team selector dropdown with search and statistics on solved and new issues.](https://help.aikido.dev/_assets/5a30b7b1838e/ucarecdn-1c6dccbd-d42b-46d0-afb8-741ac1a85163.png)
