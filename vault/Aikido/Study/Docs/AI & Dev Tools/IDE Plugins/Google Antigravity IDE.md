---
title: "Google Antigravity IDE"
source: https://help.aikido.dev/ai-and-dev-tools/ide-plugins-overview/google-antigravity
section: AI & Dev Tools
fetched: 2026-11-08
generated: ingest_docs
---
# Google Antigravity IDE

Aikido automatically scans your projects for hardcoded secrets (API keys, tokens) and insecure code patterns (SQL injections, path traversal, ..) so you can catch issues early and keep your codebase safe.

Scans run automatically whenever you open a file or save changes, making it easy to catch issues early in development.

When security issues are found, they're highlighted directly in your code and listed in the Aikido window.

## Open Extensions and Install "Aikido Security"

<figure><img src="https://help.aikido.dev/_assets/0495d232605b/Screenshot-2025-11-25-at-14.33.47.png" alt=""><figcaption></figcaption></figure>

Alternatively use these links to go to the Marketplaces

* [VS Code](https://marketplace.visualstudio.com/items?itemName=AikidoSecurity.aikido)
* [Windsurf](https://open-vsx.org/extension/AikidoSecurity/aikido) / [Cursor](https://open-vsx.org/extension/AikidoSecurity/aikido) / [Kiro](https://open-vsx.org/extension/AikidoSecurity/aikido) / [Google Antigravity](https://open-vsx.org/extension/AikidoSecurity/aikido)

## Authenticate with Aikido

<img src="https://help.aikido.dev/_assets/228d2787301e/Screenshot-2025-11-25-at-14.52.14.png" alt="" data-size="line"> Open the Aikido plugin by clicking on the sidebar icon and click on "Connect to Aikido" to authenticate with Aikido platform.

<figure><img src="https://help.aikido.dev/_assets/f40c3c516615/Screenshot-2026-01-07-at-13.50.27.png" alt=""><figcaption></figcaption></figure>

Alternatively you can open up the Command Palette and run `Aikido: Log In`

If the automated authentication does not work you can manually create a personal access within Aikido by going to the [Integrations page and following the instructions](https://app.aikido.dev/settings/integrations?section=ide).

## Try out our examples

Below you can find an example `index.js` file that can be used to verify if the extension is working correctly, it should detect one SAST issue (SQL injection) and one exposed secret (SQL Server connection string).

```javascript
const app = {}

app.get("/user", (req, res) => {
    const connStr = "Server=tcp:myserver.database.windows.net,1433;Initial Catalog=mydb;Persist Security Info=False;User ID=myuser;Password=$uperSecret123!@#";
    const username = req.query.username
    const unsafeQuery = `SELECT * FROM users WHERE username = '${username}'`
    sql.connect(connStr).query(unsafeQuery, (err, result) => {
        res.status(200).send(result)
    })
})
```

## Turn on Additional Security Tooling

Extend Aikido in your IDE with Expansion Packs like [MCP for AI agents](https://help.aikido.dev/ai-and-dev-tools/aikido-mcp), [pre-commit hooks](https://help.aikido.dev/ai-and-dev-tools/aikido-secrets-pre-commit-hook), and [Safe Chain](https://help.aikido.dev/code-scanning/aikido-malware-scanning). For more details, see the documentation below.

[aikido-expansion-packs.md](https://help.aikido.dev/ai-and-dev-tools/ide-plugins-overview/features/aikido-expansion-packs)

Now that the plugin is installed, you can dive into the features that help you spot security issues while you work:

[real-time-code-scanning-in-ide.md](https://help.aikido.dev/ai-and-dev-tools/ide-plugins-overview/features/real-time-code-scanning-in-ide)

[code-quality-in-ide.md](https://help.aikido.dev/ai-and-dev-tools/ide-plugins-overview/features/code-quality-in-ide)

[open-source-dependency-scanning-sca-in-ide.md](https://help.aikido.dev/ai-and-dev-tools/ide-plugins-overview/features/open-source-dependency-scanning-sca-in-ide)

[full-workspace-scan-in-ide.md](https://help.aikido.dev/ai-and-dev-tools/ide-plugins-overview/features/full-workspace-scan-in-ide)

[aikido-ai-in-ide.md](https://help.aikido.dev/ai-and-dev-tools/ide-plugins-overview/features/aikido-ai-in-ide)

[vs-code-extension-keeps-disconnecting.md](https://help.aikido.dev/ai-and-dev-tools/ide-plugins-overview/troubleshooting/vs-code-extension-keeps-disconnecting)

[vs-code-information-for-support.md](https://help.aikido.dev/ai-and-dev-tools/ide-plugins-overview/troubleshooting/vs-code-information-for-support)
