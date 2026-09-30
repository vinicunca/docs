# Vinicunca documentation hub: layout and navigation plan

## Implementation checkpoint (2026-09-30)

The site remains on Nuxt. The seven package routes and package-specific navigation are implemented. Taman imports its public `docs/public/**` tree and three selected package READMEs from `docs-v*` tags; internal plans are excluded. Akar and Pohon own Vue metadata generation in their source repositories, and the hub commits their generated metadata and Markdown only when that package is dispatched. Perkakas TypeDoc runs only on Perkakas imports. The combined static generation still runs after each import.

The current build succeeds and emits 1,409 prerendered routes, including 520 JSON API files, raw Markdown, and the agent indexes. The 1,631 output files can be served without a Nuxt runtime. A [Cloudflare Workers Static Assets proposal](../docs/cloudflare-migration.md) and `wrangler.jsonc` are prepared for review; the current Firebase workflow has not been switched or deployed to Cloudflare.

## Goal and scope

Make `vinicunca.dev` the shared documentation entry point for Akar, ESLint Config, Perkakas, Pohon UI, Taman, UnoCSS Preset, and UnoCSS Variants. This plan covers the site shell, package routes, navigation, and the content contract needed by later CI imports. It assumes the current Nuxt 4, Nuxt Content, and Pohon UI stack. Component documentation migration and release automation follow the shell work.

## Findings that affect the design

- The repos are siblings of this docs repo under `~/Dev/@vinicunca`, although the proposed path was `~/Dev/vinicunca`. CI must use remote repositories and tagged artifacts rather than either local path.
- The current site hardcodes four packages and Windows Dev separately in the home page, desktop/mobile header, search links, navigation mapper, Content schema, and `nuxt-llms` configuration. The docs layout already has a left navigation and right table of contents.
- Current public paths include `/eslint`, `/perkakas`, `/unocss-preset`, `/unocss-variants`, and `/windows-dev`. The Markdown route uses `/raw<page-path>.md`.
- Pohon has about 180 Markdown pages under `docs/content/docs`, plus custom MDC components, interactive examples, API metadata, and an MCP endpoint. Its `nuxt-component-meta` data feeds the rendered props/slots/events tables; `transformMDC()` expands those blocks and examples into plain Markdown for agent/raw routes. Copying its Markdown alone would not preserve those pages.
- Akar's current checkout and `v2.0.18` tag have no docs directory. The local Reka UI checkout at `~/Dev/libraries/vue/radix-vue` has 60 component guides and 74 component directories in common with Akar's 75. It is a useful one-time seed, but its VitePress syntax, `reka-ui` imports, generated API includes, and newer upstream behavior need adaptation and review against Akar's tagged source. Preserve the Reka license and attribution with adapted content. Older `v2.10.5` tags in Akar's git history belong to its Reka UI ancestry; selecting the highest version-shaped tag would import the wrong product.
- Pohon has `v2.0.0-rc*` tags. Taman's current tags are scoped to individual packages. Release selection must be configured per project, and Taman needs a policy for its WIP docs.
- The present package READMEs are not complete substitutes for this site's content: ESLint Config's README is a short pointer to another docs URL while this site has an 844-line guide; UnoCSS Preset has no root README; UnoCSS Variants has a README but this site has eight long pages. The package repos need selected Markdown promoted or added before the hub can import equivalent documentation from their release tags.
- Perkakas already uses TypeDoc JSON in `server/data/metadata.json`, transformed by `server/perkakas.transform.ts` and served at `/api/perkakas.json`. Remeda's TypeDoc loader shows the desired function-per-entry content model, but it is Astro-specific; the Nuxt hub can use the same data model with a versioned TypeDoc artifact and its existing transform.

## Site structure

Use one domain and keep existing short, established paths:

| Project           | Canonical hub path | Initial state                                                                          |
| ----------------- | ------------------ | -------------------------------------------------------------------------------------- |
| Akar              | `/akar`            | Landing page; document source and example/metadata migration required                  |
| ESLint Config     | `/eslint`          | Import an expanded package README and any selected package Markdown                    |
| Perkakas          | `/perkakas`        | Import README; render function reference from tagged TypeDoc data                       |
| Pohon UI          | `/pohon`           | Landing page first; migrate docs, examples, and component metadata in a separate slice  |
| Taman             | `/taman`           | Import an allowlisted set of WIP Markdown; show a work-in-progress status                |
| UnoCSS Preset     | `/unocss-preset`   | Import selected package Markdown once it covers the current site pages                  |
| UnoCSS Variants   | `/unocss-variants` | Import README and selected Markdown once equivalent to the current site pages          |
| Windows Dev guide | `/windows-dev`     | Move visually under “Guides”; preserve URL                                             |

The package's repository name, npm name, display name, and URL slug are separate fields. This avoids rewriting established URLs to match folder names. Deep links from `akar.vinicunca.dev` and `pohon.vinicunca.dev` need an explicit mapping before any redirects are activated.

## Layout and navigation contract

1. The global header contains the Vinicunca home link, a single “Packages” menu, a “Guides” link, search, theme control, and GitHub. Seven permanent header tabs would crowd smaller screens. The mobile header exposes the same destinations. This level selects a package or guide.
2. The home page introduces the hub and presents seven package cards with a short description and release/status label. Taman shows “Work in progress.” Windows Dev sits in a separate Guides group.
3. A secondary header row shows the **active package's top-level sections** as tabs. For example, Pohon could expose Getting Started, Components, Composables, and Typography; Perkakas could expose Overview and Functions. Each package defines its own section labels and order from its navigation tree or explicit section configuration. A package with only one meaningful section may hide this row. On the home page, no package tabs appear; Guides uses its own navigation context.
4. Every package has an overview at its root path. Package pages use the current three-column docs layout. The left sidebar shows only the **active section of the active package**, including that section's nested pages; the content and right table of contents follow the selected page. The package name and version/status appear at the top of the sidebar. Changing a secondary tab replaces the sidebar tree; switching packages opens the new package's overview or configured default section.
5. Resolve active package and section from the current route with segment-aware matching, including direct deep links, browser back/forward, and client-side navigation. The mobile menu shows the same active package tabs followed by that tab's page tree. Keep the selected tab and sidebar in sync; neither navigation surface should display another package's pages.
6. Breadcrumbs begin with the package name, then section, then page. Previous/next page links stay within the active section unless a deliberate cross-section order is configured. Search includes package labels and can narrow results to the active package; external GitHub and package links are distinct from content results.
7. Define a single typed package registry containing ID, repo/npm names, display label, route base, icon, description, status, docs source, release selector, source URL, and public version. Use it to populate the home page, header, mobile menu, search shortcuts, breadcrumb labels, repository links, and agent indexes. Nuxt Content remains the source of each package's page tree; the registry supplies package identity and metadata. Derive the secondary tabs and sidebar from one normalized package navigation tree so desktop and mobile agree.
8. Content records use the registry's package ID. Allow package-specific frontmatter such as categories and framework without forcing all packages into one narrow enum. Avoid coupling navigation order to source folder names where imported docs have their own numbering.
9. Keep `/raw<page-path>.md` for every published page. Give each page and search result a package, version, source commit, canonical URL, and source URL when available. The public agent index lists the seven package roots and their raw Markdown entry points. The existing Pohon MCP stays available while its docs and metadata are moved or given a deliberate integration path.

## Content and release boundary

The hub consumes a versioned documentation bundle per project: selected Markdown source, required assets, page/asset manifest, version, source commit, and generated API metadata where applicable. Keep hub-specific overview and cross-project guidance in this repo. Existing local docs can seed the first migration, but each page needs one authoritative home thereafter.

### Source readiness audit (2026-09-30)

The current package tags establish release selectors, but they are not yet equivalent documentation sources. This is the concrete order for the next implementation work:

1. Keep the existing hub pages live while moving the authored ESLint Config guide, UnoCSS Preset pages, and UnoCSS Variants pages into their owning repositories. At the inspected tags, their root READMEs are 9 lines, absent, and 1 line respectively. Importing those files now would remove useful documentation.
2. Define a per-package manifest with an exact tag and resolved commit, an explicit Markdown and asset allowlist, public route mapping, and optional metadata artifact. Reject missing paths and duplicate routes. Taman has only package-scoped tags, so its docs source remains WIP until an explicit public allowlist and release ref are chosen.
3. Implement one tagged Markdown import against the completed ESLint Config source, preserving `/eslint` and `/raw/eslint.md`. Generalize that importer to UnoCSS Preset, UnoCSS Variants, and selected Taman pages after their source content is ready.
4. Publish TypeDoc JSON from Perkakas releases; publish component metadata from Pohon and Akar releases. The hub imports these artifacts instead of regenerating them. Wire tag-triggered CI to update one package's resolved bundle and rebuild the combined Nuxt site.

Observed tag pins for contract development: Akar `v2.0.18`, ESLint Config `v5.7.1`, Perkakas `v1.17.1`, Pohon `v2.0.0-rc7.9`, UnoCSS Preset `v2.4.0`, and UnoCSS Variants `v1.5.0`. These are examples to resolve to immutable commits in the bundle lock, not instructions to select the lexicographically highest tag. Pohon's inspected tag contains 183 Markdown guides; Akar's inspected tag has no `docs/` tree.

| Project | Tagged documentation input | Generated input | Hub treatment |
| --- | --- | --- | --- |
| ESLint Config | Expanded root README plus explicitly selected Markdown files | None initially | README becomes `/eslint`; other files become child pages |
| UnoCSS Preset | New root README or selected package docs, including the current fluid README | None initially | Preserve `/unocss-preset/**` paths through an explicit page map |
| UnoCSS Variants | README plus explicitly selected Markdown files | None initially | Preserve current eight-page structure until tagged source has equivalent coverage |
| Taman | Explicit public-docs allowlist, such as package READMEs and a future `docs/public/**` tree | Optional, later | Group by Taman package/topic; exclude internal plans, tests, generated output, and agent instructions |
| Perkakas | README and any authored guides | TypeDoc reflection JSON for a tagged source commit | Transform into one function entry per export, with categories, signatures, examples, source links, and a Markdown representation for agents |
| Pohon UI | `docs/content/docs/**` plus assets and example source | Component metadata from `nuxt-component-meta`/`vue-component-meta`, plus example/source index | Render interactive docs and expand API blocks into complete raw Markdown |
| Akar | Adapt selected Reka UI guides from one pinned upstream revision into an Akar-owned docs tree, then consume that tree from Akar release tags | Vue component metadata and example/source index generated from Akar's tagged source using the same published contract as Pohon | Render props/slots/events in pages and expand them into complete raw Markdown |

Import only explicitly configured README/docs paths. Resolve relative links and assets against the tagged source, rewrite internal package links to hub URLs, add package/version/source metadata, and reject duplicate or missing destinations. Source-specific filenames do not have to become public URL slugs.

For Perkakas, publish TypeDoc JSON once for each package release, then let the docs importer convert that reflection into stable function records. The existing `transformProject()` is a starting point; the Remeda example suggests a function-per-entry collection for filtering, navigation, and direct URLs. Keep the existing `/perkakas/functions` URL as an index or redirect to the new reference structure. The raw Markdown endpoint must contain the generated function reference itself, not only the current `:docs-perkakas-page` placeholder.

For Pohon and Akar, generate component metadata from the tagged Vue sources in their release pipelines. The hub consumes that JSON so its Nuxt build does not re-analyze both component libraries. Preserve Pohon's markdown directive behavior: rendered props, slots, and events for people, plus expanded code/API text in `/raw/**.md` for agents. Akar uses the same pipeline with its own component names and default-prop rules. Use Reka's existing guides and examples to seed Akar's authored docs, but compare each component/API against Akar before publishing; the Reka revision is provenance for the migration, not the ongoing release source. Preserve or deliberately remap Pohon's existing MCP endpoint during this migration.

Do not use an unconstrained “latest Git tag” query. The registry must specify accepted tag patterns and exact resolved refs for published builds. Pohon should use its active `v2.0.0-rc*` line until its version policy changes; Akar should use its `v2.0.*` line; Taman should remain marked WIP until a documentation release source/tag is chosen. These are starting selectors to confirm against release workflows before CI implementation. A docs build can consume all seven bundles yet only the changed package needs to regenerate its source metadata. A standard Nuxt site build may still regenerate the combined output.

## Ordered implementation slices

1. **Registry and URL contract.** Add the typed package registry and route map; specify legacy URL behavior and Taman's status. No visual change yet.
2. **Shared shell.** Replace hardcoded header, mobile menu, home cards, and search shortcuts with registry data. Expose Packages and Guides in the global header, then add a secondary row driven by the active package's sections.
3. **Package roots and docs navigation.** Add Akar, Pohon, and Taman overview pages; update Content schema, active-section sidebars, breadcrumbs, page links, and section boundaries. Retain all existing page URLs. Mobile tabs and page tree use the same navigation model.
4. **Agent-facing links.** Include new package roots in `nuxt-llms`, search, and raw Markdown discovery; expose version/source metadata. Confirm every package root has a valid raw Markdown page.
5. **Source contract.** Define the bundle manifest, Markdown allowlists, public path maps, and per-project tag rules. Validate it with one tagged package before generalizing.
6. **Markdown ingestion.** Import ESLint Config, UnoCSS Preset, UnoCSS Variants, and Taman. Move or expand current site content into the package repos where tagged Markdown is too thin; preserve old URLs and agent-readable raw pages.
7. **Perkakas function reference.** Generate TypeDoc JSON at release, import function entries in the hub, and render both human pages and complete raw Markdown from the same records.
8. **CI orchestration.** Add tagged bundle fetching, resolved-ref locking, and metadata artifact consumption. A release for one package only regenerates that package's input; the combined Nuxt output can still rebuild.
9. **Component documentation migrations.** Port Pohon's custom MDC components/examples and API metadata as a focused project. Seed Akar's docs from a pinned Reka revision, adapt them to Akar, and give Akar equivalent metadata generation. Migrate deep links and existing subdomains only after equivalent routes work on the hub.

## Review points and risks

- Before slice 2: review the route/menu mock structure and package labels.
- After slice 3: inspect desktop/mobile navigation, cross-package switching, secondary tabs, sidebar replacement, deep links, browser history, breadcrumbs, 404 behavior, and old URLs in a browser. Build and typecheck the changed Nuxt app; do not run linting.
- Before CI work: audit actual tag and artifact behavior in each repo, especially Akar, Pohon, and Taman. Compare imported Markdown coverage against current public pages to avoid silently shrinking the docs.
- Before replacing Pohon/Akar docs deployments: map external/internal links, interactive examples, generated API data, and MCP URLs; use redirects only after equivalent pages exist.

## Decisions to settle during review

1. Should Taman's WIP landing be publicly prominent, or visible with a “Work in progress” badge lower in the package menu? The current plan makes it visible with a badge.
2. Should Windows Dev stay as a guide on this site? The current plan keeps it under Guides to preserve its URL.
3. Which pinned Reka revision should seed Akar? Record the chosen commit and attribution when adapting the guides; the local checkout is a candidate, not an implicit moving source.
4. Which Taman package READMEs and future Markdown tree are public? The import needs an allowlist because the repo also contains internal plans and agent files.
