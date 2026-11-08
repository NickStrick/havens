---
title: "Drata Integration"
source: https://help.aikido.dev/compliance-and-reporting/iso-27001-and-soc-2-compliance-overview/drata-compliance-integration
section: Compliance and reporting
fetched: 2026-11-08
generated: ingest_docs
---
# Drata Integration

### API Key <a href="#api-key" id="api-key"></a>

You'll need to create a Drata API Key. You can generate such key in Drata via [Username > Settings > API Keys > Create API Key](https://app.drata.com/account-settings/api-keys/add).

#### Details <a href="#details" id="details"></a>

Make sure the Expiration is set to 'Never Expires'.

![API key setup screen with fields for name, expiration, and allowed IP addresses.](https://help.aikido.dev/_assets/b02f91be153d/ucarecdn-434c3577-6525-4dd7-bd05-3d8542874506.png)

#### Scopes <a href="#scopes" id="scopes"></a>

The access for the scopes can be set to 'Custom' with at least following scopes.

**Controls:**

* **List controls:** _Read_
* **Create control:** _Write_
* **Map external evidence:** _Read, Write_
* **Delete mapped external evidence:** _Write_

**Workspaces:**

* **List workspaces:** _Read_

**Frameworks:**

* **List frameworks:** _Read_
* **List framework requirements:** _Read_

![User permissions matrix for controls, workspaces, and frameworks management.](https://help.aikido.dev/_assets/47fd89981942/image-4.png)

#### Save <a href="#save" id="save"></a>

Next, click 'Save' and copy your generated API Key.

Back in Aikido, paste the API Key and click 'Next'. After that, choose your Drata workspace and click 'Save'.

![Enter your Drata API Key to integrate data and proceed to the next step.](https://help.aikido.dev/_assets/03511286a78d/ucarecdn-650bf49f-49d4-4848-8513-f93aaa9f8a47.png)

### Done <a href="#done" id="done"></a>

Aikido will now daily create a PDF report and sync this as 'external evidence' to Drata. We'll create a control with code 'AIKIDO' and link the relevant SOC2 and ISO27001 requirements. You can search for this control [here](https://app.drata.com/compliance/controls/inscope?q=Aikido).

Under 'Control evidence', the Aikido PDF will be attached every month

#### &#x20;<a href="#set-up-drata-integration" id="set-up-drata-integration"></a>
