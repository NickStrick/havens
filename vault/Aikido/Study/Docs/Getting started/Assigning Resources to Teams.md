---
title: "Assigning Resources to Teams"
source: https://help.aikido.dev/getting-started/manage-teams-and-applications/assigning-resources-to-teams
section: Getting started
fetched: 2026-11-08
generated: ingest_docs
---
# Assigning Resources to Teams

Assigning resources to teams defines ownership inside Aikido. It ensures that findings are routed to the right people, dashboards stay relevant, and teams only see what they are responsible for.

This page explains all available ways to assign resources, including individual and bulk options.

### Assign from the Team Page

1. Go to [Settings → Teams](https://app.aikido.dev/settings/teams)
2. Select a team
3.  Open the Responsibility tab

    <figure><img src="https://help.aikido.dev/_assets/68ce964493aa/Screenshot-2026-02-23-at-11.45.39.png" alt=""><figcaption></figcaption></figure>
4. Click "Link Resource"
5.  Select resource type, and search and add resources<br>

    <figure><img src="https://help.aikido.dev/_assets/1e08c40c54f5/Screenshot-2026-03-10-at-11.38.31.png" alt="" width="563"><figcaption></figcaption></figure>

### Assign from the Resource Page

You can also assign a team while viewing the resource itself.

#### Repositories

Open a Repository → Configure → Teams responsible

<figure><img src="https://help.aikido.dev/_assets/9688db093cc6/LanguageTool_Overlay-1.png" alt=""><figcaption></figcaption></figure>

#### Cloud Accounts

Open a Cloud Connection → Configure → Teams responsible

<figure><img src="https://help.aikido.dev/_assets/36b1ed37487b/LanguageTool_Overlay-2.png" alt=""><figcaption></figcaption></figure>

### Domains & API's

Open the Front-end, REST, or GraphQL scan configuration from the Settings page (or the action menu in the list view) and link the domain to an asset.

You can link it to either a repository or a container. Once linked, the scan inherits the team permissions from that asset.

<figure><img src="https://help.aikido.dev/_assets/0bc04342f35b/Screenshot-2026-02-25-at-19.05.11.png" alt=""><figcaption></figcaption></figure>

### Bulk Assignment

Bulk actions are available on resource list pages in [settings](https://app.aikido.dev/settings/account).

> [!info]
> If bulk actions are not visible, assignment must be done individually.

**Repositories**

[Settings → Repositories](https://app.aikido.dev/settings/integrations/repositories) → Select multiple → Bulk Actions → Assign to team

<figure><img src="https://help.aikido.dev/_assets/1297d0d34033/LanguageTool_Overlay-3.png" alt=""><figcaption></figcaption></figure>

**Containers**

[Settings → Containers](https://app.aikido.dev/settings/container-image-registry) → Select multiple → Bulk Actions → Assign to team

<figure><img src="https://help.aikido.dev/_assets/b0ed67ce280c/Screenshot_23_02_2026__11_57.png" alt=""><figcaption></figcaption></figure>

**Cloud**

[Settings -> Clouds](https://app.aikido.dev/settings/integrations/clouds) -> Select multiple -> Bulk Actions -> Assign to team

<figure><img src="https://help.aikido.dev/_assets/5ccf653a469d/image-363.png" alt=""><figcaption></figcaption></figure>
