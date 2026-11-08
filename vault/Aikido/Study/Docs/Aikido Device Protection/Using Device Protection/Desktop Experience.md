---
title: "Desktop Experience"
source: https://help.aikido.dev/aikido-device-protection/using-aikido-endpoint/end-user-experience
section: Aikido Device Protection
fetched: 2026-11-08
generated: ingest_docs
---
# Desktop Experience

The Aikido Device Protection agent runs silently in the background. For most installs, nothing happens and the package installs as normal. You only see a notification when something is blocked.

## Dashboard

<figure><img src="https://help.aikido.dev/_assets/24e3cdb5bcb5/Screenshot-2026-06-04-at-14.05.58.png" alt=""><figcaption></figcaption></figure>

You can access the Device Protection Dashboard by clicking on the Aikido icon in your taskbar and selecting "Open Dashboard"

The dashboard will show any recent **events like Malware or Policy blocks**. The **Logs tab** has additional information about **package age restriction blocks**.

You can click on each item for more information.

<figure><img src="https://help.aikido.dev/_assets/59c3b86ac2f5/Screenshot-2026-06-04-at-14.15.31.png" alt=""><figcaption></figcaption></figure>

## Notifications / Events

<div align="left"><figure><img src="https://help.aikido.dev/_assets/788fa7e47641/Screenshot-2026-06-04-at-14.29.37.png" alt="" width="351"><figcaption></figcaption></figure></div>

<figure><img src="https://help.aikido.dev/_assets/98a0c43d34d3/Screenshot-2026-06-04-at-14.14.40.png" alt="" width="347"><figcaption></figcaption></figure>

Notifications will show up whenever a package contains malware or is blocked by your policy.

Types of notifications:

* **Malware** means the package has been identified as malicious. This block is final and cannot be appealed.
* **Policy** means your organization has restricted installs from this ecosystem or blocked this specific package.

You can **Dismiss** the notification or click **Open Dashboard** to view more details in the Aikido app.

## Event details

The events page shows you the details of a package, when it was blocked and the reason. With policy blocks you sometimes have the option to **Request Access**. This allows you to send a request to your workspace admins for an exception.

> [!info]
> No desktop on the machine, such as a Linux server or a remote shell? Run `aikidoctl request` to send the same request. See [Request a Blocked Install from the Command Line](https://help.aikido.dev/aikido-device-protection/miscellaneous-aikido-endpoint/aikidoctl-cli/request-a-blocked-install).

<figure><img src="https://help.aikido.dev/_assets/2dc4db1441db/Screenshot-2026-06-11-at-13.16.51.png" alt="" width="563"><figcaption></figcaption></figure>

Once a package has been approved or denied you will see a message within your dashboard with the result.

<figure><img src="https://help.aikido.dev/_assets/7dfd30f25844/dashboard_rejectallow.png" alt="" width="563"><figcaption></figcaption></figure>
