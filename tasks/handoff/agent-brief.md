# Shared brief for docs-hub content agents

You are one of several agents working IN PARALLEL in the same working tree:
`/Users/praburangki/Dev/@vinicunca/docs` (Nuxt 4 + Nuxt Content v3 + pohon-ui 2.0.1, branch `feat/unify-docs-v2`).
The hub's shell is a port of Pohon UI's own docs app (itself a port of ui.nuxt.com). The hub OWNS all docs content;
package repos only keep code, JSDoc and a short README pointing to `https://vinicunca.dev/<package>`.

## Site conventions
- Content lives in `content/<package>/<n>.<section>/<n>.<page>.md`. Number prefixes only order things; URL is `/<package>/<section>/<page>`.
- Each package root and each section dir has a `.navigation.yml` with `title:` and `icon:` (lucide/simple-icons names, e.g. `i-lucide-square-play`).
- **Every section dir MUST have an index page** (`1.index.md`, or `0.index.md` for a list page) because the header tabs link to `/<package>/<section>`.
- The package registry is `app/utils/packages.ts` (id, title, `to` landing URL, optional per-section sidebar `categories`). Pages can set `category: <id>` frontmatter to group them in the sidebar.
- Frontmatter: `title`, `description` (one sentence, required), optional `navigation: { title, badge }`, `links: [{ label, icon, to, target }]` (header buttons, e.g. GitHub source / npm), `category`.
- Page H1 is rendered from `title` — do not write a `# Title` heading in the body. Start body sections at `##`.
- MDC components available (Pohon prose, see examples in `content/pohon/**`): `::note`, `::tip`, `::warning`, `::caution`, `::callout{icon to}`, `::code-group` (fences with `[filename]` labels), `::code-tree`, `::steps{level="3"}` (each `###` is a step), `::tabs` / `:::tabs-item{label icon}`, `::card-group` / `:::card{title icon to}`, `::field-group` / `:::field{name type required}` (great for option/param references), `::collapsible`, `::accordion`, `::code-preview`, `:badge`, `:kbd`, inline `:icon{name}`. Code fences support `ts [file.ts]` filenames and `{2,4-5}` line highlights.
- Custom Vue components for MDC go in `app/components/content/` (Nuxt Content registers them globally). Prefix yours with your package folder, e.g. `app/components/content/akar/AkarPropsTable.vue` → used as `:akar-props-table{...}`. Nuxt auto-imports are ON (composables, utils, `queryCollection`).
- Raw markdown for agents: every page is also served at `/raw/<path>.md` (and `<path>.md`) via `nuxt-agent-discovery`. If you add a custom MDC component whose output is data-driven (tables, function lists), you MUST also make it expand to plain Markdown in raw output: add a Nitro plugin `server/plugins/<package>-markdown.ts` that hooks `agent-discovery:document` (`nitroApp.hooks.hook('agent-discovery:document', async (event, page) => { ... })`) and rewrites your nodes with the exported helpers in `server/utils/transformMDC.ts`: `visitAndReplace(doc, 'your-tag', node => ...)`, `replaceNodeWithMarkdown(node, md)`, `replaceNodeWithPre(node, lang, code)`. The minimark tree is `page.body` (nodes are `[tag, attrs, ...children]`). See how `component-props` is handled there.
- Agent skill: write `skills/<package>/SKILL.md` (frontmatter `name`, `description`; concise conventions + "when to use" + key APIs + links to `https://vinicunca.dev/raw/<package>/...md` pages). Model it on `skills/pohon-ui/SKILL.md`. It is served at `/.well-known/skills/<package>/SKILL.md`.
- Writing style: match the tone of `content/pohon/**` (Nuxt UI style): concise, second person, task-oriented, code-first. Every API name, option, default and command MUST be verified against the actual package source — never copy claims from forks without checking. American English.

## Guardrails (important — other agents are working at the same time)
- Only create/edit files inside the paths your task assigns you. **Do NOT edit**: `nuxt.config.ts`, `content.config.ts`, `app/utils/packages.ts`, `package.json`, `pnpm-workspace.yaml`, `pnpm-lock.yaml`, `server/utils/transformMDC.ts`, `app/composables/**`, `app/layouts/**`, `app/pages/**`, `app/app.vue`. If you need a change there (a dependency, a registry `to`/`categories` change, a prerender route), put the exact change in your final report and the coordinator will apply it.
- Do not run `pnpm install`, `nuxt build` or `nuxt generate`. A dev server is ALREADY running at `http://localhost:3311` with HMR — verify your pages with `curl -s http://localhost:3311/<path>` (HTTP 200, expected text present; use `/usr/bin/grep -a` because the default `grep` is ugrep and treats HTML as binary) and `curl -s http://localhost:3311/raw/<path>.md` (raw markdown readable, custom components expanded). First request of a new page can take ~30–60s. Do not restart or kill the dev server. Check `/private/tmp/vinicunca-docs-scratch/dev.log` for errors caused by your files. If the server stops responding entirely, report it rather than restarting it.
- Do not commit, push, or delete anything outside your assigned paths. In package repos (`/Users/praburangki/Dev/@vinicunca/<repo>`) only edit the files your task names, never commit; other uncommitted changes there belong to the user — leave them untouched.
- Scratch/temporary files go in `/private/tmp/vinicunca-docs-scratch/<your-package>/` ($SCRATCHPAD below). The dev server log is `/private/tmp/vinicunca-docs-scratch/dev.log`.
- A previous attempt at this task was cut off before writing any hub files. Its scratch work (clones, partial drafts) may exist in `/private/tmp/claude-501/-Users-praburangki-Dev--vinicunca-docs/893b19b5-6551-4310-a51e-011f305afb41/scratchpad/<your-package>/` — reuse it if useful, but verify it.

## Final report (keep under ~400 words)
1. Pages created/changed (paths) and what each covers.
2. Custom components / plugins / scripts added.
3. Exact changes you need the coordinator to make in the protected files.
4. Verification you did (URLs checked, status) and anything that does not work yet.
5. Problems found in the package itself (bugs, wrong JSDoc, inconsistencies) — with file:line — that the user should know about.
