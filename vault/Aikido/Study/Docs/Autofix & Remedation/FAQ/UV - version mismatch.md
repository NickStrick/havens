---
title: "UV - version mismatch"
source: https://help.aikido.dev/autofix-and-remediation/faq/uv-version-mismatch
section: Autofix & Remedation
fetched: 2026-11-08
generated: ingest_docs
---
# UV - version mismatch

AutoFix uses UV version **0.11.19** when `required-version` is not set in your `pyproject.toml`.

If your project needs a different UV version, set it in `pyproject.toml`. For example, add the following to make AutoFix use UV version **0.10.3**:

```toml

[tool.uv]
required-version = "==0.10.3"

```

For more information see [https://docs.astral.sh/uv/reference/settings/#required-version](https://docs.astral.sh/uv/reference/settings/#required-version)
