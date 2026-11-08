---
title: "Refine AutoFixes with Aikido AI"
source: https://help.aikido.dev/autofix-and-remediation/automation-and-merging/refine-autofixes-with-aikido-ai
section: Autofix & Remedation
fetched: 2026-11-08
generated: ingest_docs
---
# Refine AutoFixes with Aikido AI

Aikido allows to automatically fix different types of findings. The **Refine with Aikido AI** chat panel lets you iteratively adjust AutoFixes using natural language, without leaving the diff view. This is powered by [Aikido Agent](https://help.aikido.dev/aikido-agent/aikido-agent), the same intelligence behind [Ask Aikido](https://help.aikido.dev/aikido-agent/ask-aikido).

#### Use Cases

AutoFix gets you most of the way there. Refinement is useful when:

* The fix is correct but doesn't match your codebase's naming conventions or patterns
* You want to add explanatory comments
* You want to include unit tests
* You want to introduce specific logic, like error handling or logging calls
* The fix needs to account for context not available to the AI
* You want to tighten scope, for example limiting what gets sanitized or validated

#### How to Refine a Fix

**Step 1.** Open the diff modal via the `View Fix` action and click `Refine with Aikido AI` in the bottom left.

<figure><img src="https://help.aikido.dev/_assets/cde90e499725/image-252.png" alt=""><figcaption></figcaption></figure>

**Step 2.** Type your instruction in the text field.

<figure><img src="https://help.aikido.dev/_assets/c1f0ef13fda9/image-249.png" alt=""><figcaption></figcaption></figure>

**Step 3.** The diff view updates automatically when the refined fix is ready.

<figure><img src="https://help.aikido.dev/_assets/8da34a865fcd/image-250.png" alt=""><figcaption></figcaption></figure>

> [!info]
> Each instruction you send is retained as context for subsequent refinements, so the AI builds on prior instructions rather than starting fresh.

#### Tips for Writing Instructions

Be specific about intent, not just the symptom:

* "Thrown an exception instead of returning an empty object"
* "Rename the sanitized variable from `safe_input` to `safeInput` "
* "Add a log when the regex matches"

## Persisting the context

If you want Aikido to always take into account your prefences while creating an AutoFix, use [Custom Context for AutoFixes](https://help.aikido.dev/autofix-and-remediation/automation-and-merging/custom-context-for-autofixes).
