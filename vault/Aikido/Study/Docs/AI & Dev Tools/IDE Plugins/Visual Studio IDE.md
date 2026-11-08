---
title: "Visual Studio IDE"
source: https://help.aikido.dev/ai-and-dev-tools/ide-plugins-overview/visual-studio-plugin
section: AI & Dev Tools
fetched: 2026-11-08
generated: ingest_docs
---
# Visual Studio IDE

Aikido automatically scans your projects for hardcoded secrets (API keys, tokens) and insecure code patterns (SQL injections, path traversal, ..) so you can catch issues early and keep your codebase safe.

Scans run automatically whenever you open a file or save changes, making it easy to catch issues early in development.

When security issues are found, they're highlighted directly in your code and listed in the Aikido window.

![C# code editor showing SQL query function, warnings, and security/code scan panels.](https://help.aikido.dev/_assets/c6cf77d8350c/visual-studio-plugin_336ff95d-dea0-4f72-bd63-520c4757d664.gif)

## How to Install and Use <a href="#how-to-install-and-use" id="how-to-install-and-use"></a>

**Step 1.** Head over to the [Visual Studio Marketplace](https://marketplace.visualstudio.com/items?itemName=AikidoSecurity.aikido-visualstudio) and click **Install.** After installation, you will be asked to add your personal access token (step 2).

**Step 2.** In Aikido, go to the [Visual Studio Integration Screen](https://app.aikido.dev/settings/integrations/ide/visualstudio) and create your token.

![Visual Studio IDE Plugin page showing no registered tokens and option to generate a new PAT.](https://help.aikido.dev/_assets/a59395104368/visual-studio-plugin_a3d6e40c-39f7-44b5-bfea-94361c90384b.png)

**Step 3.** Check out the examples in our docs on the [Visual Studio Marketplace to test](https://marketplace.visualstudio.com/items?itemName=AikidoSecurity.aikido-visualstudio)[ ](https://marketplace.visualstudio.com/items?itemName=AikidoSecurity.aikido)whether everything works well.

## Supported Visual Studio Versions <a href="#supported-visual-studio-versions" id="supported-visual-studio-versions"></a>

The Aikido Extension can be installed on Visual Studio Community Edition, Visual Studio Professional and Visual Studio Enterprise. It adheres to [Visual Studio’s support lifecycle](https://learn.microsoft.com/en-us/visualstudio/productinfo/vs-servicing), remaining compatible with officially supported versions.

## Troubleshooting

[visual-studio-information-for-support.md](https://help.aikido.dev/ai-and-dev-tools/ide-plugins-overview/troubleshooting/visual-studio-information-for-support)
