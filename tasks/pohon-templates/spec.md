# Pohon UI templates: sub-project 1 design

Status: approved in conversation on 2026-10-12, awaiting review of this written spec.

## Goal

Give Pohon UI clone-and-go starter templates, the way Nuxt UI has `nuxt-ui-templates`. Sub-project 1 sets up the shared repo and ships the two Starter templates, a templates page on `vinicunca.dev`, and a pohon README that lists only templates that exist.

Success means:

- The pohon README and the docs list only templates that exist, and none of their links are dead.
- Each listed template can be scaffolded with one command and passes install, lint, typecheck and build.

## Decisions

| Topic | Decision |
|---|---|
| Purpose | Clone-and-go starters people build on, not showcase-only demos |
| Location | One monorepo, `vinicunca/pohon-templates`, one folder per template |
| Frameworks | Every template on Nuxt, plus a plain Vue (Vite) Starter |
| Sourcing | Port each matching Nuxt UI template (MIT), one template per cycle |
| Visual reference | The Theme Studio views in `app/components/theme-studio/view/` |
| Dashboard | Standalone template, no cross-link to Taman |
| Order after sub-project 1 | Landing, Docs, SaaS, Dashboard, Portfolio, Changelog, Chat, Editor |

## In scope

1. The `pohon-templates` repo: root files, CI, Renovate.
2. `starter/` (Nuxt) and `starter-vue/` (Vite).
3. The templates page in this docs repo, plus cross-links.
4. The Templates section of `~/Dev/@vinicunca/pohon/README.md`.

## Out of scope

- Live demo deployments.
- The other eight templates. Each gets its own spec and plan cycle later.
- Commits and pushes in any repo, unless the user asks during the run.

## 1. The templates repo

Local path: `~/Dev/@vinicunca/pohon-templates`. GitHub: `vinicunca/pohon-templates`. Creating the GitHub repo and pushing to it are outward-facing steps and need the user's go-ahead (or the user creates the empty repo first).

### Every template folder is self-contained

People scaffold one folder out of the repo, so a template must not depend on anything outside its folder.

- No pnpm workspace at the root. No `catalog:` or `workspace:` versions.
- Each `package.json` pins real published versions of `pohon-ui`, `nuxt` (or `vite` and `vue`), `unocss` and `@vinicunca/unocss-preset`.
- Each folder has its own `pnpm-lock.yaml`, `eslint.config`, `uno.config.ts`, `tsconfig`, `.gitignore` and `README.md`.
- Duplicated config across folders is accepted. Renovate keeps versions in step.

### Root contents

- `README.md`: the template list with scaffold commands, the Nuxt UI credit, and an "Adding a template" section: folder layout, pinned versions, the CI matrix entry, the docs page section, and the pohon README entry.
- `LICENSE`: MIT, crediting Nuxt UI's templates alongside Vinicunca.
- `renovate.json`: one config covering every template folder. Group `pohon-ui`, `unocss` and `@vinicunca/*` bumps into a single PR.
- `.github/workflows/ci.yml`: a matrix over the template folders. Each job runs `pnpm install --frozen-lockfile`, lint, build, then typecheck inside its folder, on every PR and on Renovate PRs. Build runs before typecheck because the Vue template's `auto-imports.d.ts` and `components.d.ts` only exist after Vite has run (see the warning in the Vue install guide).
- `GAPS.md`: the Pohon gaps found while porting (see section 2).

### Scaffolding

The documented command is giget:

```bash
npx giget@latest gh:vinicunca/pohon-templates/starter my-app
```

For Nuxt templates, also list `npm create nuxt@latest -- -t gh:vinicunca/pohon-templates/starter`, but only if a dry run confirms that nuxi accepts a subfolder path. Otherwise document giget only.

## 2. The Starter templates

Ports of `nuxt-ui-templates/starter` and `nuxt-ui-templates/starter-vue`. Port file by file from the fetched upstream source, not from memory.

### Porting rules (apply to every template)

- `U*` components become `P*`.
- `@nuxt/ui` becomes `pohon-ui` (module, Vite plugin `pohon-ui/vite`, Vue plugin `pohon-ui/vue-plugin`).
- Tailwind utilities become UnoCSS or the semantic utilities from `presetVinicunca`.
- `reka-ui` imports become `akar`.
- Tailwind's `main.css` content (`@import "tailwindcss"; @import "@nuxt/ui";` and `@theme static`) is dropped. Upstream's custom font and palette move into a `:root` block in a small `main.css`, the way Pohon's design-system docs set them. The Vue setup also imports `virtual:uno.css`.
- `uno.config.ts` follows the install guide unless a build check shows that setup is incomplete. In that case, templates use the playground's fuller config and the gap goes in `GAPS.md` (decided 2026-10-12).
- Upstream's `TemplateMenu` (a switcher between live demos) is not ported while there are no demos. Upstream's Nuxt logo is replaced with the Vinicunca mark and "Pohon UI".
- `app.config.ts` keeps upstream's color choices under Pohon's `ui.colors` keys.
- Lint setup: keep whatever upstream uses (for example `@nuxt/eslint`), not `@vinicunca/eslint-config`, so a template stays a neutral starting point and diffs against upstream stay small.
- Setup follows the docs install guides (`content/pohon/1.getting-started/2.installation/`), which are the source of truth for Pohon configuration.

### Pohon gaps

If upstream uses a component, prop or composable that Pohon lacks, don't build a workaround. Record it in `GAPS.md` (template, file, what's missing, what was simplified), simplify that spot, and keep going. `GAPS.md` entries become pohon issues later.

### `starter/` (Nuxt)

- `nuxt.config.ts`: `modules: ['pohon-ui', ...]`, keeping any other modules upstream registers.
- `uno.config.ts`: `defineConfig({ presets: [presetVinicunca()] })`.
- `app.vue` and `pages/index.vue`: the upstream layout and content, ported (`PApp`, `PHeader` with logo, color-mode toggle and GitHub link, `PMain`, `PPageHero`, `PPageSection`, `PFooter`, as upstream uses them).

### `starter-vue/` (Vite)

- `vite.config.ts`: `plugins: [UnoCSS(), vue(), ui()]`.
- `src/main.ts`: `import 'virtual:uno.css'`, `vue-router`, `app.use(router)`, `app.use(ui)`.
- The remaining Vue install-guide steps: the `isolate` root class, and the `auto-imports.d.ts` / `components.d.ts` entries in `.gitignore` and `tsconfig`.
- The same UI as `starter/`, with a `vue-router` page instead of `pages/`.

### Done when (each starter)

1. Install, lint, build and typecheck pass with pinned published versions.
2. `dev` renders the page with no console errors and no hydration warnings.
3. The color-mode toggle works.
4. Scaffolding it with giget into an empty folder, then running check 1 there, passes. Before the GitHub repo exists, test against the local folder (giget supports local paths) and note that.

## 3. The templates page on vinicunca.dev

### Page

- File: `content/pohon/1.getting-started/3.templates.md`, served at `/pohon/getting-started/templates`.
- Why there: Pohon's top tabs only appear for folders that contain pages, so a standalone page can't be its own tab. Getting Started's `3.` slot is free, between Installation (`2.`) and Contribution (`4.`).
- Plain Markdown, no custom component, so the `.md` copy served to agents reads correctly.
- Content:
  - A short intro: clone-and-go starters, ported from Nuxt UI's templates, all in `vinicunca/pohon-templates`.
  - One section per template: heading, one-line description, screenshot, the giget command in a `code-group`, a link to the source folder, and a link to the upstream Nuxt UI template.
  - Starts with **Starter (Nuxt)** and **Starter (Vue)**. Each later port adds its section in the same change that adds the template.

### Screenshots

- `public/images/templates/starter.webp` and `starter-vue.webp`, captured in light mode from the running starters.
- If the two look identical, both sections share one image.

### Cross-links

- A `::tip{to="/pohon/getting-started/templates"}` on both install pages (`1.nuxt.md`, `2.vue.md`), placed under the existing Nuxt UI tip, reading: "Prefer to start from a working project? Scaffold one of the **Pohon UI templates**."
- The Introduction's "Working examples" section (`1.index.md`) mentions the templates next to the playgrounds.

### Checks

Eslint and `nuxt typecheck` show no new errors in the changed files. The project has many existing typecheck errors, so filter to the changed files.

## 4. The pohon README

Rewrite the Templates section of `~/Dev/@vinicunca/pohon/README.md`:

- One sentence: templates are clone-and-go starters ported from Nuxt UI's.
- List only **Starter** and **Starter (Vue)**, each with its giget command.
- Link to `https://vinicunca.dev/pohon/getting-started/templates`.
- Remove every `pohon-ui-templates` org link and the `pohon.vinicunca.dev/templates` link.

## Execution order

1. Templates repo setup: root files, CI matrix, Renovate.
2. `starter/`: fetch upstream, port, all done checks, giget scaffold test.
3. `starter-vue/`: the same.
4. Screenshots.
5. Docs: templates page, install-page tips, Introduction mention. Lint and typecheck.
6. pohon README Templates section.
7. Report: what passed, the contents of `GAPS.md`, anything skipped.

Steps that need the user: creating the GitHub repo and pushing (ask first, or the user creates the empty repo beforehand).
