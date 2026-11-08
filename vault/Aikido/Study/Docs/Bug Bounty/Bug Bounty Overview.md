---
title: "Bug Bounty Overview"
source: https://help.aikido.dev/bug-bounty/bug-bounty-overview
section: Bug Bounty
fetched: 2026-11-08
generated: ingest_docs
---
# Bug Bounty Overview

## What is Bug Bounty?

Aikido Bug Bounty is a feature that lets you create programs to submit vulnerability reports and automatically analyze them using AI pentest agents. Your team or an integration can submit reports describing potential vulnerabilities, and Aikido's agents validate each one, producing confirmed findings with severity, proof-of-concept data, and remediation guidance.

> [!info]
> Bug Bounty is currently in **closed beta**. Open the **Intercom chat** in the bottom-right corner of Aikido to request access.

Bug Bounty is built on the same engine that powers [Pentests](https://help.aikido.dev/pentests/aikido-pentest "mention"). While a regular pentest proactively scans your application for vulnerabilities, Bug Bounty is purpose-built for processing researcher-submitted reports. Every submitted report triggers an automated AI analysis that produces validated findings.

## Submitting reports

There are two ways to submit vulnerability reports to a Bug Bounty program:

**Via the Aikido UI**

Navigate to your program and submit a report directly from the dashboard. See [#submitting-a-report-via-the-ui](https://help.aikido.dev/bug-bounty/submitting-a-bug-bounty-report#submitting-a-report-via-the-ui "mention") for details.

**Via the Public REST API**

Submit reports programmatically, enabling integration with external bug bounty platforms or custom researcher portals. See [#submit-via-api](https://help.aikido.dev/bug-bounty/submitting-a-bug-bounty-report#submit-via-api "mention") for details.

## What happens after submission

Every submitted report triggers an automated AI analysis. Aikido's agents use the report description (and any attached files) as context to investigate the reported vulnerability against your pre-configured scope. The result is a set of validated findings, each with severity, attack type, CWE references, example request/response data, and remediation steps.

You can monitor the analysis in real time from the assessment detail page. See [#reviewing-the-results](https://help.aikido.dev/bug-bounty/submitting-a-bug-bounty-report#reviewing-the-results "mention") for a full walkthrough.
