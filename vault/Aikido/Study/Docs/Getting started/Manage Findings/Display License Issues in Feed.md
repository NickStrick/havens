---
title: "Display License Issues in Feed"
source: https://help.aikido.dev/getting-started/core-functionalities/display-license-issues-in-feed
section: Getting started
fetched: 2026-11-08
generated: ingest_docs
---
# Display License Issues in Feed

In addition to the license report, Aikido allows you to display licenses directly in the feed. These issues are grouped by license type and show all locations where a specific license is used. This feature helps you stay informed and take immediate action on license-related issues.

### Benefits <a href="#benefits" id="benefits"></a>

* Directly act licenses: snooze, ignore, or create tasks.
* Receive alerts for new critical and high severity license issues.

### How to enable Licenses in feed <a href="#how-to-enable-licenses-in-feed" id="how-to-enable-licenses-in-feed"></a>

**Step 1:** Navigate to the [License & SBOM Reports page](https://app.aikido.dev/licenses)

**Step 2:** Click the Action dropdown menu and select 'Display Licenses in Feed'

![Dropdown menu with option to display licenses in the feed.](https://help.aikido.dev/_assets/1de95dfc4b83/ucarecdn-1b911e0a-9234-471b-8012-fb2db9f5bf3e.png)

**Step 3:** Select one of the three options. You have the option to show only the critical licenses issues, or also including the high severity ones.

> **Note:** all issues in the feed are reflected in the trends over time report. This means that by enabling this functionality, there might be a bump in the number of open issues.

![License issue feed settings with options for filtering severity and reporting.](https://help.aikido.dev/_assets/0f7de49226e7/ucarecdn-ec0a687f-41f4-4660-ba8d-66423429f333.png)

**Step 4:** Go back to Feed and select License Issues in the filter. All open critical and/or high severity license issues will be displayed. **Aikido will run a scan in the background to start showing licenses - this can take a minute.**

![Security dashboard menu highlighting resolved License Issues.](https://help.aikido.dev/_assets/84896d4699d9/ucarecdn-d4b4064c-882a-40b5-b9c4-3b61ef5780ea.png)
