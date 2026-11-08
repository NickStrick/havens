---
title: "Auto-Close Linear Tasks When Aikido Issues Are Resolved - Ignored"
source: https://help.aikido.dev/getting-started/task-management-systems/advanced-functionalities/auto-close-linear-tasks-when-aikido-issues-are-resolved
section: Getting started
fetched: 2026-11-08
generated: ingest_docs
---
# Auto-Close Linear Tasks When Aikido Issues Are Resolved / Ignored

### Use Case

When Aikido marks issues as **resolved** or **ignored**, you can sync this status with Linear to keep tasks automatically updated.

> [!info]
> Aikido checks every **8 hours** to detect and update resolved issues. Updates are **not instantaneous**, so some delay is expected between resolution and task closure.

### **Setup**

**Step 1.** Go to your [**Task Tracker Integration Settings**](https://app.aikido.dev/settings/integrations/tasktracker) in the Aikido dashboard.

**Step 2.** In the **Advanced** section, enable **Autoclose Tasks**.<br>

<figure><img src="https://help.aikido.dev/_assets/c6e391a20b4a/image-116.png" alt=""><figcaption></figcaption></figure>

**Step 3.** Set the corresponding **completion status** that you are using in Linear (e.g., “Done”).

<figure><img src="https://help.aikido.dev/_assets/c9ace868db9e/image-117.png" alt=""><figcaption></figcaption></figure>

**Step 4**. Hit Save in the top right

### **Troubleshoot**

*   For **Linear**: if tasks don't move to “Done”, you may need to reauthorise the integration.

    * Go to **Manage Integration**
    * Click the **three dots**
    * Select **Re-authorize**

    <figure><img src="https://help.aikido.dev/_assets/c48810b25956/image-64.png" alt="" width="375"><figcaption></figcaption></figure>
