---
title: "Deploy Local Scanner with Jamf"
source: https://help.aikido.dev/code-scanning/local-code-scanning/mdm-for-macos/deploy-aikido-endpoint-with-jamf
section: Code Scanning
fetched: 2026-11-08
generated: ingest_docs
---
# Deploy Local Scanner with Jamf

Use Jamf Pro to deploy Aikido Local Scanner across your managed macOS fleet with the required permissions in place.

> [!info]
> These steps use Jamf Pro. If you use Jamf School, the menus and payload names can differ.

## Installation

**What you'll need**

Make sure you've [setup an Aikido Local Scan account](https://help.aikido.dev/code-scanning/local-code-scanning/account-creation-for-local-scanning-on-aikido).

**Upload the Aikido Local Scanner installer**

1. Get the installer from the [Local Scanner Setup Page](https://app.aikido.dev/settings/integrations/localscan).
2. In Jamf Pro, go to **Settings** → **Packages**.
3. Upload the Local Scanner `.pkg`.
4. Confirm the package finishes processing before you use it in a policy.

**Create the install policy**

1. In Jamf Pro, go to **Computers** → **Policies**.
2. Create a new policy scoped to the same devices.
3. Add the uploaded package to the policy.
4. Set the policy's **Execution Frequency** to **Once per computer**.

**Deploy the policy**

1. Deploy the **Aikido Local Scanner** install policy.
