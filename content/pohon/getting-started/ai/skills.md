---
title: "Skills"
description: "Install Pohon UI skills to give AI coding agents deep knowledge of components, theming, and best practices."
package: pohon
sourceTag: "v2.0.1"
sourceCommit: "ee987babf834bae617d75a9c6b9347bba1a494df"
sourceUrl: "https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/docs/content/docs/1.getting-started/7.ai/3.skills.md"
---
## What are Skills?

Skills are structured knowledge files that give AI coding agents context about a library, framework, or codebase. Unlike MCP servers that provide real-time tool access, skills are loaded directly into the agent's context so it can reference them throughout the conversation.

Pohon UI provides a **usage skill** that teaches AI agents how to build UIs with Pohon UI: installation, theming, components, composables, forms, overlays, and layouts.

## Usage

The usage skill gives AI agents comprehensive knowledge about building with Pohon UI. It covers:

- Installation for Nuxt, Vue, Laravel, and AdonisJS
- Theming and branding with semantic colors and CSS variables
- All 125+ components with props and usage patterns
- Composables (`useToast`, `useOverlay`, `defineShortcuts`)
- Form validation with Standard Schema
- Layout composition (Dashboard, Docs, Chat, Editor)

The skill includes additional references that the AI agent loads on demand based on the task, keeping responses focused and context-efficient.

> [!NOTE]
> 
> Once installed, you can invoke the skill by typing `/pohon-ui` in your agent's chat.

### Skills CLI

The [`skills`](https://skills.sh) CLI is the easiest way to install the Pohon UI skill. It supports 35+ agents including Cursor, Claude Code, Codex, Windsurf, Cline, and more.

```bash
npx skills add vinicunca/pohon
```

You can target specific agents with the `--agent` flag:

```bash
npx skills add vinicunca/pohon --agent cursor
npx skills add vinicunca/pohon --agent claude-code
```

Or install globally so the skill is available across all your projects:

```bash
npx skills add vinicunca/pohon --global
```

If cloning from GitHub is slow on your network, you can install directly from the website instead:

```bash
npx skills add https://pohon.vinicunca.dev
```

> [!TIP]
> 
> Visit [skills.sh](https://skills.sh) to learn more about the skills ecosystem and browse available skills.

### Cursor

#### Quick Install

Click the button below to install the Pohon UI skill directly in Cursor:

:p-button{color="neutral" icon="i-simple-icons-cursor" label="Install Skill" to="cursor://anysphere.cursor-deeplink/install-skill?url=https://github.com/vinicunca/pohon/tree/ee987babf834bae617d75a9c6b9347bba1a494df/skills/pohon-ui"}#### Manual Setup

1. Open Cursor and go to "Settings" > "Skills"
2. Click "Add skill" and enter the following URL:

```text
https://github.com/vinicunca/pohon/tree/ee987babf834bae617d75a9c6b9347bba1a494df/skills/pohon-ui
```

### Claude Code

> [!NOTE]
> 
> **Ensure Claude Code is installed.** Visit [Anthropic's documentation](https://docs.anthropic.com/en/docs/claude-code/quickstart) for installation instructions.

Add the skill using the CLI command:

```bash
claude skill add https://github.com/vinicunca/pohon/tree/ee987babf834bae617d75a9c6b9347bba1a494df/skills/pohon-ui
```

### Other AI Tools

The skill files are publicly available on GitHub. You can reference them directly in any AI tool that supports custom context or instructions:

- **Skill entry point**: [`skills/pohon-ui/SKILL.md`](https://github.com/vinicunca/pohon/tree/ee987babf834bae617d75a9c6b9347bba1a494df/skills/pohon-ui/SKILL.md)
- **Full skill directory**: [`skills/pohon-ui/`](https://github.com/vinicunca/pohon/tree/ee987babf834bae617d75a9c6b9347bba1a494df/skills/pohon-ui)


## Sitemap

See the full [sitemap](https://pohon.vinicunca.dev/sitemap.md) for all pages.
