---
title: "MCP Permissions"
source: https://help.aikido.dev/ai-and-dev-tools/aikido-mcp/mcp-permissions
section: AI & Dev Tools
fetched: 2026-11-08
generated: ingest_docs
---
# MCP Permissions

> [!info]
> This page is only accessible to workspace admins.

MCP permissions let you control what actions all users in your workspace can perform through any MCP-connected tool (such as Claude Code, Cursor, or Copilot). Changes here apply to every user in the workspace, regardless of which MCP tool they use.

To access MCP permissions, go to [Integrations → AI Code Generators → MCP → Permissions](https://app.aikido.dev/settings/integrations/ide/mcp/permissions).

![](https://help.aikido.dev/_assets/5fe2f2688c30/mcp-permissions_screenshot.png)

## Available permissions

| Permission                                                               | Description                                                                                      |
| ------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------ |
| Users can list issues they have access to in the Aikido platform via MCP | Allows users to retrieve their Aikido issues directly from an MCP-connected tool.                |
| Users can ignore issues via MCP if their role allows it                  | Allows users to ignore issues through MCP, subject to their existing role permissions in Aikido. |
| Users can scan code locally via MCP **(always ON)**                      | Allows users to trigger a local code scan from an MCP-connected tool.                            |

Enable or disable each permission using the checkboxes, then click **Save permissions**.
