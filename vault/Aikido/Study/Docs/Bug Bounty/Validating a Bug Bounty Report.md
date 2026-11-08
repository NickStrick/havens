---
title: "Validating a Bug Bounty Report"
source: https://help.aikido.dev/bug-bounty/submitting-a-bug-bounty-report
section: Bug Bounty
fetched: 2026-11-08
generated: ingest_docs
---
# Validating a Bug Bounty Report

You can submit vulnerability reports directly from the Aikido UI. Each report triggers a couple of AI agents that will evaluate the described vulnerability against your program's configured scope.

## Submitting a report via the UI

1. Navigate to your program's detail page.
2. Click **Add Report**.
3. Enter a **Bug Bounty Report** in the text area. This should describe the vulnerability the researcher found. Provide as much details as possible, the AI agents use this description as their primary context for the analysis.
4. Optionally attach **files like screenshots or code snippets** for additional context.
5. Click **Test Report** to start the AI analysis.

## Submit via API

If you need to submit reports programmatically, for example, to integrate with an external bug bounty platform, check out our [Public API](https://apidocs.aikido.dev/reference/addbugbountyreport).

After a report is submitted, an assessment is created and AI agents begin analyzing the vulnerability. You can monitor the entire process in real time from the assessment detail page.

## Reviewing the Results

After the analysis finishes, open the assessment to see one thing first:

### **Was the report valid or not?**

If the agents could confirm the reported issue, Aikido creates one or more validated issues.

If the agents could not confirm it, no issue is created. You can still review what was tested and why the report was not valid.

When a report is valid, the **Issues** tab shows the confirmed findings.

Each issue includes:

* **Severity**
* **Attack type**
* **Evidence**, including example request and response data
* **Remediation guidance** for developers

Validated bug bounty issues also appear in the main Aikido issue queue with your other findings.

If no issue appears, the agents could not reproduce or confirm the reported problem.

## AutoFix

Bug Bounty issues support **AutoFix** when your repositories have been linked. Aikido can automatically generate fix pull requests for discovered vulnerabilities. When a fix is available, you can trigger it directly from the issue detail page.
