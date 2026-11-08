---
title: "Sprinto Integration"
source: https://help.aikido.dev/compliance-and-reporting/iso-27001-and-soc-2-compliance-overview/sprinto-compliance-integration
section: Compliance and reporting
fetched: 2026-11-08
generated: ingest_docs
---
# Sprinto Integration

The Sprinto integration automatically pushes vulnerabilities to Sprinto for SOC2 and ISO27001:2022.

> [!info]
> Aikido syncs repositories and vulnerabilities to Sprinto every 24 hours.

### Set up the Sprinto integration <a href="#set-up-the-sprinto-integration" id="set-up-the-sprinto-integration"></a>

**Add the integration**

To activate the Sprinto integration, in Aikido: Go to [Settings > Integrations > Sprinto](https://app.aikido.dev/settings/integrations/compliance/sprinto) and click 'Add Sprinto integration'.

**Create an API key**

You'll need to create a Sprinto API Key. You can generate such key in Sprinto via [Settings > Developer API > Generate API Key](https://app.sprinto.com/app/admin/developerApi)

**Save the API key**

Next, copy your generated API Key.

Back in Aikido, paste the API Key, select your region and click 'Save'.

![Paste your Sprinto API key in Aikido, select the region, and save the integration.](https://help.aikido.dev/_assets/588285352a32/image-146.png)

**Done**

Aikido will now sync repositories and vulnerabilities to Sprinto every 24 hours.

![Sprinto integration connected and ready to sync vulnerability data from Aikido.](https://help.aikido.dev/_assets/aeccd8dae1a7/image-1-4.png)
