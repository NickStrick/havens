---
title: "Scheduled Scan Frequencies"
source: https://help.aikido.dev/code-scanning/miscellaneous/scanning-frequencies
section: Code Scanning
fetched: 2026-11-08
generated: ingest_docs
---
# Scheduled Scan Frequencies

Aikido provides default scanning frequencies for various components to ensure security and performance. Here, you'll learn about these scanning defaults and how to change them.

> [!info]
> Aikido also runs in real time in the IDE on every save, and on every push or pull request via PR gating. The settings below control the scheduled re-scan that runs in addition.

### Scanning Frequencies <a href="#scanning-frequencies" id="scanning-frequencies"></a>

* By default, for all paid plans, Aikido does **daily** scans for open-source dependencies, SAST, IaC, secrets, cloud, containers, and Front-End Domains.
* Domains scanned with Hosted Domains and APIs are by default done **twice a week** as this has a higher load on your system.
*   In case you quickly want to verify whether a fix was implemented correctly, you can trigger a **manual scan** by clicking 'Start Scan' in the UI.

    ![Repositories page showing 9 active repos and a prominent "Start Scan" button.](https://help.aikido.dev/_assets/271b892e831f/ucarecdn-e678ed08-9cb8-4f4f-a651-7ca041202b17.png)

> Workspaces on a free plan are scanned every 3 days, and users cannot trigger scans manually. Hosted domains are scanned once a week.

### Changing Scanning Frequency <a href="#changing-scanning-frequency" id="changing-scanning-frequency"></a>

In case you want to change your scanning frequency, you can do this by going to [General Settings](https://app.aikido.dev/settings/account) (admins only) and click **Change Scanning Frequency**.

![Set automated scan frequency: daily, every 3 days, weekly, or monthly.](https://help.aikido.dev/_assets/3c4ae4372479/ucarecdn-e91e1100-9205-4824-af06-f00bf304e481.png)
