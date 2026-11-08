---
title: "Deep Review Memory"
source: https://help.aikido.dev/deep-review/memory
section: Deep Review
fetched: 2026-11-08
generated: ingest_docs
---
# Deep Review Memory

Deep Review keeps a memory for each repository. When you explain that a finding is intentional, or that it does not apply, Aikido remembers that and avoids repeating the same feedback on later pull requests.

Memory is read only. Aikido writes it from replies on pull requests. You view it from the repository's settings. Importing memory from other tools is coming soon.

## How it works

Reply to a Deep Review comment in the pull request, in plain language. You don't need a special command or to tag Aikido.

Aikido adds the reply to memory when it describes a lasting choice, such as "This is intentional because we validate on the server." A reply that only closes this one finding, or that says you will fix it later, stays on that pull request.

Ignoring a finding still closes that finding. See [reply in natural language](https://help.aikido.dev/deep-review/how-deep-review-works#reply-in-natural-language).

On later pull requests, Deep Review uses this memory so it does not repeat feedback your team already answered. A new or different issue is still reported.

Memory belongs to one repository. [Linked repositories](https://help.aikido.dev/deep-review/link-repositories) add context for a review. Each repository keeps its own memory.

To write guidance yourself, put it in `AGENTS.md`. See [Guide Agents with Repository Files](https://help.aikido.dev/ai-and-dev-tools/guide-an-audit-with-repository-files).

## View memory

**View Memory** is available when Deep Review is on for the repository and memory already exists.

1. Open [**Repositories**](https://app.aikido.dev/repositories) and select the repository.
2. Open its **Repository Settings**.
3. On the **Deep PR Review** card, click **View Memory**.

<div data-with-frame="true"><figure><img src="https://help.aikido.dev/_assets/0475e7b44da1/deep-review-memory.png" alt="Deep PR Review card with Memory last updated 2 hours ago and a View Memory button."><figcaption></figcaption></figure></div>

The dialog is titled **Deep Review Memory** and marked **Read Only**. It shows the repository name, when memory was last updated, and the entries Aikido is using.

The card shows one of these:

| What the card shows | What it means |
| --- | --- |
| Deep Review is off for this repository. | Turn on Deep Review in [PR Checks](https://help.aikido.dev/deep-review/configure-deep-review) first. |
| No memory yet. Check back after a few reviews. | No reply has been stored yet. |
| Last updated 2 hours ago. | Memory exists. The time is when Aikido last changed it. Click **View Memory**. |

## FAQ

### Can I edit or delete an entry?

No. Memory is read only in the Aikido app. Reply on a pull request to add context. Aikido keeps memory up to date as the repository changes.

### Will the same finding come back on the next pull request?

Deep Review uses memory so it does not repeat feedback your team already answered. A different issue is still reported.

## Related

[How Deep Review Works](https://help.aikido.dev/deep-review/how-deep-review-works)

[Configure Deep Review](https://help.aikido.dev/deep-review/configure-deep-review)

[Link Repositories for Deep Review](https://help.aikido.dev/deep-review/link-repositories)

[Guide Agents with Repository Files](https://help.aikido.dev/ai-and-dev-tools/guide-an-audit-with-repository-files)
