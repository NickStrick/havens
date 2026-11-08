---
title: "Send Alerts to Private Microsoft Teams Channels"
source: https://help.aikido.dev/getting-started/chat-and-alerts/send-alerts-to-private-microsoft-teams-channels
section: Getting started
fetched: 2026-11-08
generated: ingest_docs
---
# Send Alerts to Private Microsoft Teams Channels

Because Microsoft Teams apps can't be member of a private Teams channel, additional setup is required to send alerts to a private channel. The reason for this is a technical limitation in Microsoft Teams that exists since several years and was not solved until now. In some cases it might be easier to create a new MS Team instead, and only allow authorized people access to this team. Please note that alerts in private channels will be sent as the user who has performed the setup steps and not as Aikido.

***

Follow these steps to send alerts to a private Microsoft Teams channel:

**Install the Aikido app**

If not already done, follow the steps described on this page: [ms-teams-notifications.md](https://help.aikido.dev/getting-started/chat-and-alerts/ms-teams-notifications "mention")

**Create the Workflow**

Select the private channel that should receive the alerts, click on "More Options" (the three dots) and select "Workflows".

Search for and select **"Send webhook alerts to a channel"**. After that select the Microsoft Team and the private channel where the alerts should be sent. Finish the creation by clicking on "Save".

<figure><img src="https://help.aikido.dev/_assets/eef9b706e1b2/Screenshot-2026-06-24-at-16.15.01.png" alt=""><figcaption><p>Select Microsoft Team and private channel</p></figcaption></figure>

Copy and save the workflow URL using the copy button. You need this URL later.

<figure><img src="https://help.aikido.dev/_assets/bc8925aced45/Screenshot-2026-06-24-at-16.16.07.png" alt=""><figcaption></figcaption></figure>

**Finish setup**

Open the Microsoft Teams integration page in the Aikido dashboard and click on "Create alert". Inside the channel select input, click on "Link a different private channel". After that the following dialog is opened. Select the Microsoft Team and enter the channel name and the workflow URL. Click on "Add Channel" to finish the setup.

<figure><img src="https://help.aikido.dev/_assets/eefe7627ec32/image-134.png" alt="" width="563"><figcaption><p>Finish the connection</p></figcaption></figure>

**Confirm successful setup**

After clicking on "Add Channel", you should receive the message "This channel has been successfully added to Aikido." in your private Microsoft Teams channel. If you did not receive any message, please check the following step.

**Edit the Workflow (Not always needed)**

> [!info]
> This step is only required if you did not receive the success message in your private channel.

The workflow is sometimes configured to send messages as the Power Automate bot, but this bot cannot send messages to private channels either.

Click on "Workflows Home" in the right bottom corner of the dialog and then on "Edit in Power Automate". Expand the "Attachment is null" section by clicking on it. Modify the "Post card in a chat or channel" action and select "User" for the "Post as" setting as shown in the following screenshot. Make sure to save your changes after that.

<figure><img src="https://help.aikido.dev/_assets/67f5b2a6c154/Screenshot-2026-01-28-at-13.18.23.png" alt=""><figcaption><p>Modify Workflow</p></figcaption></figure>
