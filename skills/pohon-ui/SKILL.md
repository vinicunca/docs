---
name: pohon-ui
description: Build UIs with Pohon UI — accessible Vue components with UnoCSS theming. Use when creating interfaces, customizing themes to match a brand, building forms, or composing layouts like dashboards, docs sites, and chat interfaces.
---

# Pohon UI

Vue component library built on [Akar](/akar/overview/introduction) + [UnoCSS](https://unocss.dev/) + [UnoCSS Variants](https://vinicunca.dev/unocss-variants/). Works with Nuxt, Vue (Vite), Laravel (Vite + Inertia), and AdonisJS (Vite + Inertia).

## MCP Server

For component API details (props, slots, events, full documentation, examples), use the [Pohon UI MCP server](https://vinicunca.dev/pohon/getting-started/ai/mcp). If not already configured, add it:

**Cursor** — `.cursor/mcp.json`:

```json
{ "mcpServers": { "pohon-ui": { "type": "http", "url": "https://vinicunca.dev/mcp" } } }
```

**Claude Code**:

```bash
claude mcp add --transport http pohon-ui https://vinicunca.dev/mcp
```

Key MCP tools:
- `search-components` — find components by name, category, or intent (no params = list all)
- `search-composables` — find composables by name or description (no params = list all)
- `search-icons` — search Iconify icons (defaults to `lucide`), returns `i-{prefix}-{name}` names
- `get-component` — full component documentation with usage examples
- `get-component-metadata` — props, slots, events (lightweight, no docs content)
- `get-example` — real-world code examples

When you need to know **what a component accepts** or **how its API works**, use the MCP. This skill teaches you **when to use which component** and **how to build well**.

## Core rules (always apply)

1. **Always wrap the app in `PApp`** — required for toasts, tooltips, and programmatic overlays. Accepts a `locale` prop for i18n.
2. **Always use semantic colors** — `color-text`, `bg-background-elevated`, `border-border-muted`, etc. Never use raw UnoCSS palette colors like `text-gray-500`.
3. **Read generated theme files for slot names** — Nuxt: `.nuxt/ui/<component>.ts`, Vue: `node_modules/.pohon-ui/ui/<component>.ts`. These show every slot, variant, and default class for any component.
4. **Override priority** (highest wins): `ui` prop / `class` prop → global config → theme defaults.
5. **Icons use `i-{collection}-{name}` format** — `lucide` is the default collection. Use the MCP `search-icons` tool to find icons, or browse at [icones.js.org](https://icones.js.org).

## How to use this skill

Based on the task, load the relevant reference files **before writing any code**. Don't load everything — only what's needed.

### Reference files

**Guidelines** — design decisions and conventions:
- [design-system](references/guidelines/design-system.md) — semantic colors, theming, brand customization, variants, the `ui` prop
- [component-selection](references/guidelines/component-selection.md) — decision matrices: when to use Modal vs Slideover, Select vs SelectMenu, Toast vs Alert, etc.
- [conventions](references/guidelines/conventions.md) — coding patterns, slot naming, items arrays, composables, keyboard shortcuts
- [forms](references/guidelines/forms.md) — form validation, field layout, error handling, Standard Schema

**Layouts** — full page structure patterns:
- [landing](references/layouts/landing.md) — landing pages, blog, changelog, pricing
- [dashboard](references/layouts/dashboard.md) — admin UI with sidebar and panels
- [docs](references/layouts/docs.md) — documentation sites with navigation and TOC
- [chat](references/layouts/chat.md) — AI chat with Vercel AI SDK
- [editor](references/layouts/editor.md) — rich text editor with toolbars

**Recipes** — complete patterns for common tasks:
- [data-tables](references/recipes/data-tables.md) — tables with filters, pagination, sorting, selection
- [auth](references/recipes/auth.md) — login, signup, forgot password forms
- [overlays](references/recipes/overlays.md) — modals, slideovers, drawers, command palette
- [navigation](references/recipes/navigation.md) — headers, sidebars, breadcrumbs, tabs

**Quick reference:**
- [components](references/components.md) — categorized component index for finding the right component name

### Routing table

| Task | Load these references |
|---|---|
| Build a landing page | design-system, conventions, landing |
| Build a dashboard / admin UI | conventions, component-selection, dashboard |
| Add a settings page | conventions, forms |
| Create a login / signup form | conventions, forms, auth |
| Display data in a table | conventions, component-selection, data-tables |
| Customize theme / brand colors | design-system |
| Add a chat interface | conventions, chat |
| Add a modal, slideover, or drawer | conventions, component-selection, overlays |
| Build site navigation | conventions, component-selection, navigation |
| Build a documentation site | conventions, docs |
| Render markdown | component-selection, components, docs |
| Add a rich text editor | conventions, editor |
| General UI work | conventions, component-selection |

## Installation

### Nuxt

Install `pohon-ui`, `unocss`, and `@vinicunca/unocss-preset`. The Pohon module registers `@unocss/nuxt` and its other Nuxt dependencies. Configure the preset in `uno.config.ts`:

```ts
import { presetVinicunca } from '@vinicunca/unocss-preset'
import { defineConfig } from 'unocss'

export default defineConfig({ presets: [presetVinicunca()] })
```

```ts
// nuxt.config.ts
export default defineNuxtConfig({ modules: ['pohon-ui'] })
```

Wrap the application in `<PApp><NuxtPage /></PApp>`.

### Vue (Vite)

Install `pohon-ui`, `unocss`, and `@vinicunca/unocss-preset`. Add `UnoCSS()` and `ui()` to the Vite plugins, as in `playgrounds/vue/vite.config.ts`. Use the same `uno.config.ts` preset shown above, and import `virtual:uno.css` in `src/main.ts`. Install `pohon-ui/vue-plugin` on the Vue app and wrap its root view in `<PApp>`.

The repository's [Nuxt playground](../../playgrounds/nuxt/uno.config.ts) and [Vue playground](../../playgrounds/vue/vite.config.ts) show the complete configurations.
