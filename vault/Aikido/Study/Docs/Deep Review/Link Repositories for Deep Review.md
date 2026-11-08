---
title: "Link Repositories for Deep Review"
source: https://help.aikido.dev/deep-review/link-repositories
section: Deep Review
fetched: 2026-11-08
generated: ingest_docs
---
# Link Repositories for Deep Review

Link related repositories when Deep Review needs context that lives outside the pull request's repository. This is useful when your services, shared libraries, or APIs are split across repositories.

### Open the repository

Open [**Repositories**](https://app.aikido.dev/repositories) and select the repository you want to configure.

### Open the Deep Review settings

Open **Repository Settings**, find the **Deep PR Review** card, and click **"Edit"** next to **Linked Repositories**.

### Add a repository

In the **Linked Repositories** dialog, click **"Link Repository"**.

<div data-with-frame="true"><figure><img src="https://help.aikido.dev/_assets/bc35a485fc8d/deep-review-linked-repositories.png" alt="Linked Repositories dialog listing one linked repository and a Link Repository button."><figcaption></figcaption></figure></div>

### Select the repository and add context

Search for the repository Deep Review should use as additional context. Optionally use the **Instruction** field to explain how the repository is related, for example that it holds the backend API your frontend calls. Then click **"Link Repository"**.

<div data-with-frame="true"><figure><img src="https://help.aikido.dev/_assets/a21db69325b5/deep-review-link-repository.png" alt="Link Repository dialog with a repository search field and an optional instruction field."><figcaption></figcaption></figure></div>

Each repository can link the following number of repositories, depending on your Aikido plan:

| Plan       | Linked repositories per repository |
| ---------- | ---------------------------------- |
| Developer  | 0                                  |
| Basic      | 1                                  |
| Pro        | 1                                  |
| Advanced   | 5                                  |
| Enterprise | 10                                 |
