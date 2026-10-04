# Vinicunca docs hub — implementation plan

Supersedes the previous plan (tag-synced docs, flattened Pohon/Akar pages). Brief: `tasks/plan-2.md`.

## Decisions (2026-10-01)

| Topic | Decision |
| --- | --- |
| Content ownership | The hub owns every authored page. Package repos keep code, JSDoc and a short README pointing here. |
| API metadata | Generated from the versions pinned in `pnpm-workspace.yaml` → bumping a package bumps its docs. Pohon: `nuxt-component-meta` over `node_modules/pohon-ui` `.vue` files. Perkakas: TypeDoc over `@vinicunca/perkakas` dist `.d.ts` at build. Akar: npm ships no `.vue`, so `scripts/akar-meta.mjs` runs a Reka-style generator on Akar's source at tag `v<version>` and commits JSON. |
| Foundation | Pohon's own docs app (`pohon/docs`, a port of Nuxt UI docs) becomes the hub's shell: command palette, header theme picker, `/theme` builder, ComponentCode/Example/Props/Slots/Emits/Theme, raw markdown + llms. |
| Server features | None at runtime except MCP. Ask AI, `/api/ai`, chat & completion APIs are removed; their examples use static data. GitHub/fonts data are fetched at build time. `/theme` prerenders and reads `?doc=` on the client. |
| Hosting | Static `nuxt generate` → Cloudflare Workers Static Assets (`wrangler.jsonc`). |
| MCP | Last phase. One Worker route `/mcp` reading prerendered JSON/markdown only; free plan (quota exhaustion fails closed, never bills) + a WAF rate-limit rule. |
| Perkakas | Remeda model: TypeDoc → per-function records → one functions page grouped by category. Copy Remeda's lodash/ramda/just mapping pages + new "Coming from Remeda" page; skip Remeda v1→v2. |
| Taman | In scope: write complete user/agent docs in the hub. |

## Route map

| Package | Base | Sections (header tabs) |
| --- | --- | --- |
| Pohon UI | `/pohon` | Getting Started · Components · Composables · Typography |
| Akar | `/akar` | Overview · Guides · Components · Utilities |
| Perkakas | `/perkakas` | Getting Started · Functions · Migrate |
| ESLint Config | `/eslint` | single section |
| UnoCSS Preset | `/unocss-preset` | Getting Started · Presets (fluid, animations, scrollbar, magic-css) |
| UnoCSS Variants | `/unocss-variants` | Getting Started · Concepts · API |
| Taman | `/taman` | Getting Started · Guides · Packages · CLI |
| Windows Dev | `/windows-dev` | Guide |

Header: logo · package switcher · section tabs (bottom row) · search · theme picker · color mode · GitHub. The Pohon framework (Nuxt/Vue) toggle shows only under `/pohon`.

## Phases

### 0. Clean slate
- Delete the tag-sync pipeline: `scripts/{sync-docs,render-pohon-docs,render-akar-reference}.mjs`, `docs/sources*.json`, `docs/README.md`, sync steps in `.github/workflows/release.yml`.
- Delete generated content: `content/pohon/**`, `content/akar/**` (except anything hand-written worth keeping), `server/data/{pohon,akar}-components.json`, `server/api/{pohon,akar}`.
- Package repos: back up then remove the previous model's docs-only, uncommitted work (`docs/` folders, `notify-docs` workflow jobs, Akar `scripts/docs-meta.mjs`, ESLint README rewrite, Taman staged docs). Never touch their uncommitted source changes. Nothing is committed in package repos without asking.

### 1. Foundation — port Pohon docs app
1. Copy `pohon/docs/{app,server,modules,uno.config.ts,public}` into the hub; merge `nuxt.config.ts` and `package.json` deps into the hub catalog; `pohon-ui` from npm instead of `../src/module`.
2. Fix leftover `U`-prefix lookups (ComponentCode/Props/Slots/Emits, `normalizeComponentName`).
3. Multi-package shell: package registry → header switcher, section tabs, sidebar, search groups, home page; route Pohon content under `/pohon/**`.
4. Remove AI/chat/completion/analytics; static fallbacks; build-time GitHub data or drop releases page.
5. Port the hub's existing UnoCSS-preset/variants demo components into the new shell.
6. Port Pohon's `content/docs/**` to `content/pohon/**` with link rewrites.
7. **Verify:** `pnpm generate` passes; browser check of home, a Pohon component page (live example, props table, theme), `/theme`, theme picker persistence, command palette, `/raw/pohon/components/button.md`, `/llms.txt`.

### 2. Perkakas
TypeDoc at build (`server/` loader or prebuild script) → `perkakas-functions.json` records (category, lazy/strict/indexed tags, data-first/last signatures, params, returns, examples, source link). Functions page with category sidebar and per-function anchors; functions in search and raw markdown/llms. Pages: Getting Started, Installation, Coming from Remeda, Mapping (lodash, ramda, just). Restore docs link in the Perkakas README.

### 3. Akar
`scripts/akar-meta.mjs` (port of Reka `docs/scripts/autogen.ts`: schema-flattened props, Babel emits JSDoc, slot props, exposed methods). MDC: `api-table`, `data-attributes-table`, `keyboard-table`, `css-variables-table`, `highlights`, `component-preview` (demo + source tabs). Convert Reka's 60 components, 11 guides, 5 overview and 16 utilities pages (reka-ui→akar, `@include`→`:api-table`, Vue-bound arrays→YAML props). Port demos (CSS variants) under `app/components/content/akar-demo/`. Keep MIT attribution to the pinned Reka commit.

### 4. ESLint Config
Fix `content/eslint/**` (split into pages): `vinicuncaESLint` factory, semicolons on, no CLI wizard, no Angular, rename table incl. `react/*`, document every option in `src/types.ts` (antislop, pnpm, e18e, perfectionist, typescript, formatters, …), a "Differences from antfu" page. Replace the copied antfu README in the package repo with a short accurate README linking here.

### 5. UnoCSS Preset
Remove Akar preset & `wind3` docs, fix wrong defaults (icons), reset CSS, theme types, animation duration, scrollbar output; document `unColor`, alias transformer, scrollbar variants, missing fluid utilities/modifiers. Note the matching wrong JSDoc in the package's `src/types.ts`.

### 6. UnoCSS Variants
Follow tailwind-variants-docs structure. Fix `uv(options)` signature, `cn`, `UvReturnType`, `tv`→`uv`, results that assume class merging (uv never merges), broken MDC/YAML/images. Add: Layers & conflict resolution (`uno-layer-uv`), `cn`, Migrating from tailwind-variants, Benchmark, framework usage.

### 7. Windows Dev
Add an overview; reorder (Terminal → winget/Chocolatey → WSL → zsh → Git → Node/pnpm → VS Code); update WSL (`\\wsl.localhost`, `.wslconfig`, systemd), GCM path/repo, winget, Node install page (fnm), pnpm install, VS Code extensions consistent with the ESLint guide; replace copied Conventional Commits spec with a short attributed summary.

### 8. Taman
Complete docs written from the Taman source: Getting Started (create-taman, structure, env, running), Architecture, Guides, Package reference, CLI reference. Exclude internal plans.

### 9. Agent surface
`llms.txt`/`llms-full.txt` sections per package, raw markdown for every page with MDC expanded (component code/props/examples, Perkakas functions, Akar API tables), agent-discovery index, JSON metadata endpoints.

### 10. MCP
Worker route `/mcp` (Workers Static Assets + `run_worker_first: ["/mcp"]`), tools: `list-packages`, `search-docs`, `get-page`, `get-component` / `get-component-metadata` (Pohon, Akar), `get-example`, `get-function` (Perkakas). Backed by prerendered static JSON. WAF rate-limit rule documented.

### 11. Deploy
Switch CI from Firebase to `wrangler deploy` (needs Cloudflare token — user action). Redirects from `pohon.vinicunca.dev`/`akar.vinicunca.dev`/`perkakas.vinicunca.dev` once parity is confirmed.

## Verification
Each phase ends with `pnpm generate` and a browser check of its pages. No commits in package repos and no deploys without the user's go-ahead.
