# Pohon UI Templates (Sub-project 1) Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Create the `pohon-templates` monorepo with two working, scaffoldable Starter templates (Nuxt and Vue), a templates page on vinicunca.dev, and a pohon README that lists only templates that exist.

**Architecture:** One local repo at `~/Dev/@vinicunca/pohon-templates`, with one fully self-contained folder per template (own lockfile and config, pinned published versions, no workspace). Each template is a file-by-file port of the matching Nuxt UI template. The docs page is plain Markdown in this repo. The README edit is in `~/Dev/@vinicunca/pohon`.

**Tech Stack:** Nuxt 4, Vue 3 + Vite, `pohon-ui`, UnoCSS + `@vinicunca/unocss-preset`, pnpm 12, giget, GitHub Actions, Renovate.

**Spec:** `tasks/pohon-templates/spec.md` (read it first, the plan argues from it).

## Global Constraints

- No commits, no pushes, no GitHub repo creation in any repo unless the user says so during the run. `git init` in the new local repo is allowed.
- Template folders are self-contained: no `catalog:`, no `workspace:`, no root pnpm workspace.
- Pin exact published versions (resolved in Task 0), not ranges copied from upstream.
- Porting rules: `U*` → `P*`; `@nuxt/ui` → `pohon-ui` (`pohon-ui/vite`, `pohon-ui/vue-plugin`); Tailwind utilities → UnoCSS / `presetVinicunca` semantic utilities; `reka-ui` → `akar`.
- Pohon config follows the docs install guides in `content/pohon/1.getting-started/2.installation/`.
- Lint: keep upstream's setup (`@nuxt/eslint`; `typescript-eslint` + `eslint-plugin-vue`). Drop `eslint-plugin-better-tailwindcss`, it only applies to Tailwind.
- Pohon gaps: never build workarounds. Log in `GAPS.md` (template, file, missing thing, what was simplified) and simplify.
- Docs base URL: `https://vinicunca.dev`. Templates page URL: `https://vinicunca.dev/pohon/getting-started/templates`.
- Shell: in this environment `grep` is a wrapper function that silently missed matches during planning. Use `/usr/bin/grep` for every check in this plan, and quote glob flags (`'--include=*.md'`), because zsh fails on unquoted globs that match nothing.
- `<scratchpad>` means the session's scratchpad directory (given in the system prompt). Throwaway apps and scaffold tests go there, never in a repo.
- Upstream source for porting is already downloaded at `/private/tmp/claude-501/-Users-polengmini-Dev--vinicunca-docs/be9aaf91-e9fb-4302-9ef2-eb1fe888d1e6/scratchpad/upstream/{starter,starter-vue}`. If that scratchpad is gone (new session), re-fetch with the command in Task 0 Step 3.

## Review Focus

1. A user scaffolds a template and runs `pnpm install` with no lockfile-related flags: it must install and build with no `catalog:`/`workspace:` errors. Pinned in Task 5.
2. Dark mode on first load with OS dark preference: no flash of light background in the Vue starter, and the color-mode button toggles in both. Pinned in Tasks 3 and 4 done checks.
3. The install-guide UnoCSS setup is silently incomplete (missing `pohon:` classes, keyframes, semantic colors), so components look subtly wrong. Pinned by Task 1.
4. Icons render offline in the Vue starter (no runtime fetch to the Iconify API needed for `i-lucide-*` / `i-simple-icons-*`). Pinned in Task 4 done check.
5. A link on the docs page or in the READMEs points at the dead `pohon-ui-templates` org or `pohon.vinicunca.dev`. Pinned in Task 8 grep.

---

### Task 0: Preflight

**Files:** none (prints values later tasks use).

**Interfaces:**
- Produces: `$VERSIONS`, the exact versions for `pohon-ui`, `@vinicunca/unocss-preset`, `unocss`, `nuxt`, `@nuxt/eslint`, `eslint`, `typescript`, `vue-tsc`, `vue`, `vue-router`, `vite`, `@vitejs/plugin-vue`, `@unhead/vue`, `@vueuse/core`, `typescript-eslint`, `eslint-plugin-vue`, `@iconify-json/lucide`, `@iconify-json/simple-icons`. Write them into `~/Dev/@vinicunca/pohon-templates/.versions.txt` (deleted in Task 9) so later tasks copy from one place.

- [ ] **Step 1: Resolve published versions**

```bash
mkdir -p ~/Dev/@vinicunca/pohon-templates
cd ~/Dev/@vinicunca/pohon-templates
for p in pohon-ui @vinicunca/unocss-preset unocss nuxt @nuxt/eslint eslint typescript vue-tsc vue vue-router vite @vitejs/plugin-vue @unhead/vue @vueuse/core typescript-eslint eslint-plugin-vue @iconify-json/lucide @iconify-json/simple-icons; do
  echo "$p $(pnpm view "$p" version)"
done | tee .versions.txt
```

Expected: one `name version` line per package, no errors. Check `pohon-ui`'s peer deps for compatible ranges: `pnpm view pohon-ui peerDependencies`. If a resolved latest version is outside a peer range, use the newest version inside the range instead and note it in `.versions.txt`.

- [ ] **Step 2: Check the GitHub repo**

```bash
gh repo view vinicunca/pohon-templates --json name 2>&1 | head -1
```

If it says "Could not resolve", the repo doesn't exist. Do not create it. Note it for the final report and continue locally.

- [ ] **Step 3: Confirm upstream source is present**

```bash
ls /private/tmp/claude-501/-Users-polengmini-Dev--vinicunca-docs/be9aaf91-e9fb-4302-9ef2-eb1fe888d1e6/scratchpad/upstream/starter/app/pages/index.vue
```

If it exists, set `UP=/private/tmp/claude-501/-Users-polengmini-Dev--vinicunca-docs/be9aaf91-e9fb-4302-9ef2-eb1fe888d1e6/scratchpad/upstream`. Later tasks read upstream files from `$UP`. If it's missing (a reboot clears `/private/tmp`), re-fetch into your own scratchpad:

```bash
UP=<your scratchpad>/upstream
for r in starter starter-vue; do
  for f in $(gh api "repos/nuxt-ui-templates/$r/git/trees/HEAD?recursive=1" --jq '.tree[] | select(.type=="blob") | .path' | grep -v -e pnpm-lock -e LICENSE); do
    mkdir -p "$UP/$r/$(dirname "$f")"
    gh api "repos/nuxt-ui-templates/$r/contents/$f" --jq .content | base64 -d > "$UP/$r/$f"
  done
done
```

---

### Task 1: Check the install-guide UnoCSS setup (decides `uno.config.ts`)

Throwaway. Nothing from this task ships except the decision.

**Files:**
- Create (throwaway): `<scratchpad>/uno-check/` (a minimal Nuxt app)

**Interfaces:**
- Produces: `UNO_MODE` = `minimal` or `full`, plus, if `full`, the list of what was missing. Record both in `~/Dev/@vinicunca/pohon-templates/GAPS.md` (Task 2 creates it; append here if it exists, else hold the note until Task 2).

- [ ] **Step 1: Create a minimal Nuxt app following the install guide exactly**

`<scratchpad>/uno-check/package.json`:

```json
{
  "name": "uno-check",
  "private": true,
  "type": "module",
  "scripts": { "dev": "nuxt dev", "build": "nuxt build", "postinstall": "nuxt prepare" },
  "dependencies": {
    "nuxt": "<nuxt from .versions.txt>",
    "pohon-ui": "<pohon-ui from .versions.txt>",
    "unocss": "<unocss from .versions.txt>",
    "@vinicunca/unocss-preset": "<@vinicunca/unocss-preset from .versions.txt>"
  }
}
```

`nuxt.config.ts`:

```ts
export default defineNuxtConfig({
  modules: ['pohon-ui'],
  compatibilityDate: '2026-06-30',
});
```

`uno.config.ts`:

```ts
import { presetVinicunca } from '@vinicunca/unocss-preset';
import { defineConfig } from 'unocss';

export default defineConfig({ presets: [presetVinicunca()] });
```

`app/app.vue`:

```vue
<template>
  <PApp>
    <PButton label="Button" />
    <PInput placeholder="Input" />
    <PAccordion :items="[{ label: 'One', content: 'Body' }]" />
    <PNavigationMenu
      content-orientation="vertical"
      :items="[{ label: 'Menu', children: [{ label: 'Child', description: 'Desc' }] }]"
    />
    <p class="color-text-muted">
      muted
    </p>
  </PApp>
</template>
```

- [ ] **Step 2: Build and collect the generated CSS**

```bash
cd <scratchpad>/uno-check && pnpm install && pnpm build
cat .output/public/_nuxt/*.css > all.css
```

- [ ] **Step 3: Run the four checks**

```bash
grep -c 'keyframes accordion-down' all.css        # keyframes the accordion theme needs
grep -c 'pohon\\:' all.css                          # classes using the pohon: variant (e.g. pohon:w-60)
grep -c 'color-text-muted' all.css                  # semantic color utilities
grep -c '\.bg-primary' all.css                      # brand color utilities
```

Expected for `UNO_MODE=minimal`: every count ≥ 1. If any count is 0, `UNO_MODE=full`. Write in `GAPS.md` which checks failed, under the heading "Install guide: uno.config.ts". This is a docs/library gap to fix in pohon later, not in this run.

- [ ] **Step 4: Define the `full` config (only if `UNO_MODE=full`)**

The full config is pohon's playground config with the playground-only import removed:
- Nuxt templates: copy `~/Dev/@vinicunca/pohon/playgrounds/nuxt/uno.config.ts`.
- Vue templates: copy `~/Dev/@vinicunca/pohon/playgrounds/vue/uno.config.ts`.

In both copies, replace `import { BRANDS } from '…/design.constants';` with:

```ts
const BRANDS = ['primary', 'secondary', 'success', 'info', 'warning', 'error', 'neutral'];
```

Confirm that list against `~/Dev/@vinicunca/pohon/playgrounds/nuxt/app/designs/design.constants.ts` (`BRANDS`) and copy it exactly. Rebuild `uno-check` with the full Nuxt copy and re-run Step 3. Every count must now be ≥ 1. If not, stop and report to the user: the fallback doesn't fix it either.

---

### Task 2: Templates repo root

**Files (all under `~/Dev/@vinicunca/pohon-templates/`):**
- Create: `README.md`, `LICENSE`, `renovate.json`, `.github/workflows/ci.yml`, `GAPS.md`, `.gitignore`

**Interfaces:**
- Produces: the CI matrix keys `starter` and `starter-vue` (folder names). Each template folder must provide the scripts `lint`, `build`, `typecheck`.

- [ ] **Step 1: `git init` and root files**

```bash
cd ~/Dev/@vinicunca/pohon-templates && git init
```

`.gitignore`:

```
node_modules
.DS_Store
.versions.txt
```

`LICENSE`:

```
MIT License

Copyright (c) 2026 Vinicunca
Portions copyright (c) Nuxt UI templates contributors (https://github.com/nuxt-ui-templates), MIT License.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

`renovate.json`:

```json
{
  "$schema": "https://docs.renovatebot.com/renovate-schema.json",
  "extends": ["config:recommended"],
  "rangeStrategy": "pin",
  "packageRules": [
    {
      "groupName": "pohon stack",
      "matchPackageNames": ["pohon-ui", "unocss", "@unocss/**", "@vinicunca/**"]
    }
  ]
}
```

`GAPS.md`:

```markdown
# Pohon gaps found while porting

Things a Nuxt UI template uses that Pohon UI lacks or does differently. Each entry: template, file, what's missing, what was simplified. These become pohon issues.
```

(Append the Task 1 result under it.)

- [ ] **Step 2: CI**

`.github/workflows/ci.yml`:

```yaml
name: ci

on:
  push:
    branches: [main]
  pull_request:

jobs:
  template:
    runs-on: ubuntu-latest
    strategy:
      fail-fast: false
      matrix:
        template: [starter, starter-vue]
    defaults:
      run:
        working-directory: ${{ matrix.template }}
    steps:
      - uses: actions/checkout@v7
      - uses: pnpm/action-setup@v6
        with:
          package_json_file: ${{ matrix.template }}/package.json
      - uses: actions/setup-node@v7
        with:
          node-version: 24
          cache: pnpm
          cache-dependency-path: ${{ matrix.template }}/pnpm-lock.yaml
      - run: pnpm install --frozen-lockfile
      - run: pnpm run lint
      - run: pnpm run build
      # after build: the Vue template's auto-imports.d.ts / components.d.ts only exist once Vite has run
      - run: pnpm run typecheck
```

Validate the YAML parses: `python3 -c "import yaml,sys; yaml.safe_load(open('.github/workflows/ci.yml'))"`. Expected: no output.

- [ ] **Step 3: README skeleton**

`README.md` (template list is filled in Task 8):

```markdown
# Pohon UI templates

Clone-and-go starter projects for [Pohon UI](https://vinicunca.dev/pohon), ported from the [Nuxt UI templates](https://github.com/nuxt-ui-templates).

## Templates

<!-- filled in Task 8 -->

## Adding a template

1. Create a top-level folder named after the template. It must work on its own once copied out of this repo:
   - pinned published versions in `package.json` (no `catalog:` or `workspace:`),
   - its own `pnpm-lock.yaml`, `eslint.config`, `uno.config.ts`, `tsconfig`, `.gitignore` and `README.md`,
   - `lint`, `build` and `typecheck` scripts.
2. Add the folder name to the `template` matrix in `.github/workflows/ci.yml`.
3. Add a section for it to the docs page `content/pohon/1.getting-started/3.templates.md` in `vinicunca/docs`.
4. Add it to the Templates section of the pohon README.
5. Record any Pohon gaps in `GAPS.md`.

## Credits

Ported from the [Nuxt UI templates](https://github.com/nuxt-ui-templates) (MIT).
```

---

### Task 3: `starter/` (Nuxt)

**Files (under `~/Dev/@vinicunca/pohon-templates/starter/`):**
- Create: `package.json`, `pnpm-workspace.yaml`, `nuxt.config.ts`, `uno.config.ts`, `eslint.config.mjs`, `tsconfig.json`, `.gitignore`, `.editorconfig`, `README.md`, `app/app.config.ts`, `app/app.vue`, `app/assets/css/main.css`, `app/components/AppLogo.vue`, `app/pages/index.vue`, `public/favicon.ico`
- Source: `$UP/starter/…` (upstream), `$VERSIONS`, `UNO_MODE`

**Interfaces:**
- Consumes: versions from `.versions.txt`; `UNO_MODE` from Task 1.
- Produces: scripts `dev`, `build`, `preview`, `lint`, `typecheck`, `postinstall`.

Port decisions for this template (also apply to `starter-vue`):
- `TemplateMenu.vue` is dropped: it switches between live demos, and there are none yet. Log in `GAPS.md` as "not ported: TemplateMenu (no live demos yet)".
- `AppLogo.vue` replaces the Nuxt wordmark (a trademark) with the Vinicunca mark plus the text "Pohon UI".
- `main.css` stays, but only with the `:root` font and palette variables, the way Pohon's design-system docs set them (`content/pohon/1.getting-started/5.theme/1.design-system.md`, "Fonts" and "Colors"). The Tailwind `@import`s and `@theme static` go.

- [ ] **Step 1: Copy the unchanged files**

```bash
cd ~/Dev/@vinicunca/pohon-templates && mkdir -p starter/app/{assets/css,components,pages} starter/public
cp $UP/starter/.editorconfig $UP/starter/.gitignore $UP/starter/tsconfig.json starter/
cp ~/Dev/@vinicunca/docs/public/favicons/favicon.ico starter/public/favicon.ico
```

- [ ] **Step 2: `package.json` and `pnpm-workspace.yaml`**

```json
{
  "name": "pohon-ui-template-starter",
  "private": true,
  "type": "module",
  "scripts": {
    "build": "nuxt build",
    "dev": "nuxt dev",
    "preview": "nuxt preview",
    "postinstall": "nuxt prepare",
    "lint": "eslint .",
    "typecheck": "nuxt typecheck"
  },
  "dependencies": {
    "@iconify-json/lucide": "<exact>",
    "@iconify-json/simple-icons": "<exact>",
    "@vinicunca/unocss-preset": "<exact>",
    "nuxt": "<exact>",
    "pohon-ui": "<exact>",
    "unocss": "<exact>"
  },
  "devDependencies": {
    "@nuxt/eslint": "<exact>",
    "eslint": "<exact>",
    "typescript": "<exact>",
    "vue-tsc": "<exact>"
  },
  "packageManager": "pnpm@<output of `pnpm --version`>"
}
```

Replace every `<exact>` with the version from `.versions.txt`.

`pnpm-workspace.yaml` (upstream's, minus the Tailwind entry; it only sets build-script permissions and is not a workspace definition):

```yaml
allowBuilds:
  '@parcel/watcher': false
  esbuild: false
  unrs-resolver: false
  vue-demi: false
```

- [ ] **Step 3: Config files**

`nuxt.config.ts`:

```ts
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxt/eslint',
    'pohon-ui'
  ],

  devtools: {
    enabled: true
  },

  css: ['~/assets/css/main.css'],

  routeRules: {
    '/': { prerender: true }
  },

  compatibilityDate: '2026-06-30',

  eslint: {
    config: {
      stylistic: {
        commaDangle: 'never',
        braceStyle: '1tbs'
      }
    }
  }
})
```

`uno.config.ts`: if `UNO_MODE=minimal`:

```ts
import { presetVinicunca } from '@vinicunca/unocss-preset'
import { defineConfig } from 'unocss'

export default defineConfig({ presets: [presetVinicunca()] })
```

If `UNO_MODE=full`: the Nuxt full config from Task 1 Step 4.

`eslint.config.mjs`:

```js
// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt()
```

`app/app.config.ts`:

```ts
export default defineAppConfig({
  ui: {
    colors: {
      primary: 'green',
      neutral: 'slate'
    }
  }
})
```

`app/assets/css/main.css`:

```css
:root {
  --font-sans: 'Public Sans', sans-serif;

  --color-green-50: #EFFDF5;
  --color-green-100: #D9FBE8;
  --color-green-200: #B3F5D1;
  --color-green-300: #75EDAE;
  --color-green-400: #00DC82;
  --color-green-500: #00C16A;
  --color-green-600: #00A155;
  --color-green-700: #007F45;
  --color-green-800: #016538;
  --color-green-900: #0A5331;
  --color-green-950: #052E16;
}
```

- [ ] **Step 4: `app/components/AppLogo.vue`**

Take the `<path>` elements from `~/Dev/@vinicunca/docs/public/logo.svg` (viewBox `0 0 477 377`) and set their `fill` to `currentColor`:

```vue
<template>
  <span class="inline-flex items-center gap-2 font-semibold">
    <svg
      viewBox="0 0 477 377"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="h-full w-auto text-primary"
      aria-hidden="true"
    >
      <!-- paths copied from docs public/logo.svg, fill="currentColor" -->
    </svg>
    <span class="color-text-highlighted">Pohon UI</span>
  </span>
</template>
```

Replace the comment with the copied `<path>` elements. Expected: the `<svg>` contains every `<path>` from `logo.svg` and no `<!--` comment remains.

- [ ] **Step 5: `app/app.vue`**

```vue
<script setup>
useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ],
  htmlAttrs: {
    lang: 'en'
  }
})

const title = 'Pohon UI Starter Template'
const description = 'A production-ready starter template powered by Pohon UI. Build beautiful, accessible, and performant applications in minutes, not hours.'

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  twitterCard: 'summary_large_image'
})
</script>

<template>
  <PApp>
    <PHeader>
      <template #left>
        <NuxtLink
          to="/"
          class="focus-visible:outline-3 outline-primary/25 rounded-md p-1 -ms-1"
        >
          <AppLogo class="h-6 shrink-0" />
        </NuxtLink>
      </template>

      <template #right>
        <PColorModeButton />

        <PButton
          to="https://github.com/vinicunca/pohon-templates/tree/main/starter"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
          color="neutral"
          variant="ghost"
        />
      </template>
    </PHeader>

    <PMain>
      <NuxtPage />
    </PMain>

    <PSeparator icon="i-lucide-trees" />

    <PFooter>
      <template #left>
        <p class="text-sm color-text-muted">
          Built with Pohon UI • © {{ new Date().getFullYear() }}
        </p>
      </template>

      <template #right>
        <PButton
          to="https://github.com/vinicunca/pohon-templates/tree/main/starter"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="GitHub"
          color="neutral"
          variant="ghost"
        />
      </template>
    </PFooter>
  </PApp>
</template>
```

Changes from upstream: `U*` → `P*`; `text-muted` → `color-text-muted` (Pohon's semantic utility, as used across the docs app); no `ogImage` (there's no hosted screenshot); the separator icon is Pohon's `i-lucide-trees`; GitHub links point at this template's folder.

- [ ] **Step 6: `app/pages/index.vue`**

Port `$UP/starter/app/pages/index.vue` with exactly these changes, everything else verbatim:
- `UPageHero` / `UPageSection` / `UPageCTA` → `PPageHero` / `PPageSection` / `PPageCTA`.
- `title="Nuxt Starter Template"` → `title="Pohon UI Starter Template"`. In `description` strings, "Nuxt UI" → "Pohon UI", and "Tailwind CSS" → "UnoCSS".
- Feature "100+ components included": description → `'Access Pohon UI\'s comprehensive component library. From forms to navigation, everything is accessible, responsive, and customizable.'`
- All `https://ui.nuxt.com/docs/getting-started/installation/nuxt` → `https://vinicunca.dev/pohon/getting-started/installation/nuxt`.
- All `https://github.com/nuxt-ui-templates/starter` → `https://github.com/vinicunca/pohon-templates/tree/main/starter`.
- CTA: `title="Ready to build your next Nuxt app?"` stays. Description → `"Build with Nuxt and Pohon UI. Get this template and start shipping today."`

Check: `grep -n "ui.nuxt.com\|nuxt-ui-templates\|<U\|Nuxt UI\|Tailwind" app/pages/index.vue app/app.vue` prints nothing.

- [ ] **Step 7: `README.md`**

```markdown
# Pohon UI Starter Template

A minimal Nuxt starter powered by [Pohon UI](https://vinicunca.dev/pohon). Ported from the [Nuxt UI starter template](https://github.com/nuxt-ui-templates/starter).

## Quick start

```bash
npx giget@latest gh:vinicunca/pohon-templates/starter my-app
cd my-app
pnpm install
pnpm dev
```

## Scripts

- `pnpm dev`: start the dev server on http://localhost:3000
- `pnpm build`: build for production
- `pnpm preview`: preview the production build
- `pnpm lint` / `pnpm typecheck`
```

- [ ] **Step 8: Install, lint, build, typecheck**

```bash
cd ~/Dev/@vinicunca/pohon-templates/starter
pnpm install && pnpm lint && pnpm build && pnpm typecheck
```

Expected: all four exit 0. If lint fails only on style (stylistic rules), run `pnpm lint --fix` and re-run. If typecheck fails on a missing Pohon type or prop, log it in `GAPS.md`, simplify, and re-run.

- [ ] **Step 9: Runtime check**

Run `pnpm dev` in the background, open http://localhost:3000 with `agent-browser` (if installed) or another headless browser, and check:
- the page renders the hero, the six features and the CTA;
- no console errors and no hydration warnings;
- the color-mode button switches `html` between light and dark;
- the GitHub and lucide icons render (not empty boxes).

If no browser automation is available, say so in the final report and list these checks as not done. Don't claim them.

---

### Task 4: `starter-vue/` (Vite)

**Files (under `~/Dev/@vinicunca/pohon-templates/starter-vue/`):**
- Create: `package.json`, `pnpm-workspace.yaml`, `vite.config.ts`, `uno.config.ts`, `eslint.config.ts`, `index.html`, `tsconfig.json`, `tsconfig.app.json`, `tsconfig.node.json`, `.gitignore`, `.editorconfig`, `README.md`, `src/main.ts`, `src/App.vue`, `src/vite-env.d.ts`, `src/assets/css/main.css`, `src/components/AppLogo.vue`, `src/pages/index.vue`, `public/logo.svg`
- Source: `$UP/starter-vue/…`

**Interfaces:**
- Consumes: `.versions.txt`, `UNO_MODE`; `AppLogo.vue` from Task 3 Step 4 (copy it).
- Produces: scripts `dev`, `build`, `preview`, `lint`, `typecheck`.

- [ ] **Step 1: Copy unchanged files**

```bash
cd ~/Dev/@vinicunca/pohon-templates && mkdir -p starter-vue/src/{assets/css,components,pages} starter-vue/public
cp $UP/starter-vue/{.editorconfig,.gitignore,tsconfig.json} starter-vue/
cp $UP/starter-vue/src/vite-env.d.ts starter-vue/src/
cp starter/app/components/AppLogo.vue starter-vue/src/components/
cp ~/Dev/@vinicunca/docs/public/favicons/favicon.svg starter-vue/public/logo.svg
```

`src/route-map.d.ts` is not copied: `vue-router/vite` generates it on the first `dev`/`build`.

- [ ] **Step 2: `package.json` and `pnpm-workspace.yaml`**

```json
{
  "name": "pohon-ui-template-starter-vue",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "lint": "eslint src",
    "typecheck": "vue-tsc -p ./tsconfig.app.json"
  },
  "dependencies": {
    "@iconify-json/lucide": "<exact>",
    "@iconify-json/simple-icons": "<exact>",
    "@unhead/vue": "<exact>",
    "@vinicunca/unocss-preset": "<exact>",
    "@vueuse/core": "<exact>",
    "pohon-ui": "<exact>",
    "unocss": "<exact>",
    "vue": "<exact>",
    "vue-router": "<exact>"
  },
  "devDependencies": {
    "@vitejs/plugin-vue": "<exact>",
    "eslint": "<exact>",
    "eslint-plugin-vue": "<exact>",
    "typescript": "<exact>",
    "typescript-eslint": "<exact>",
    "vite": "<exact>",
    "vue-tsc": "<exact>"
  },
  "packageManager": "pnpm@<output of `pnpm --version`>"
}
```

`pnpm-workspace.yaml`:

```yaml
allowBuilds:
  esbuild: false
  vue-demi: false
```

- [ ] **Step 3: `vite.config.ts`**

```ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueRouter from 'vue-router/vite'
import UnoCSS from 'unocss/vite'
import ui from 'pohon-ui/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vueRouter({
      dts: 'src/route-map.d.ts'
    }),
    UnoCSS(),
    vue(),
    ui({
      ui: {
        colors: {
          primary: 'green',
          neutral: 'zinc'
        }
      }
    })
  ]
})
```

`uno.config.ts`: same rule as Task 3 Step 3, using the Vue full config if `UNO_MODE=full`.

- [ ] **Step 4: tsconfigs (paths per the Vue install guide: `.pohon-ui`, not `.nuxt-ui`)**

`tsconfig.app.json`: upstream's file with `paths` changed to:

```json
"paths": {
  "#build/ui/*": ["./node_modules/.pohon-ui/ui/*"]
}
```

and `uno.config.ts` is not added here (it's in `tsconfig.node.json`).

`tsconfig.node.json`: upstream's file with `paths` changed to `"#build/ui": ["./node_modules/.pohon-ui/ui"]` and `include` changed to `["vite.config.ts", "uno.config.ts"]`.

- [ ] **Step 5: `eslint.config.ts`**

```ts
import eslintPluginVue from 'eslint-plugin-vue'
import ts from 'typescript-eslint'

export default ts.config(
  ...ts.configs.recommended,
  ...eslintPluginVue.configs['flat/recommended'],
  {
    files: ['*.vue', '**/*.vue'],
    languageOptions: {
      parserOptions: {
        parser: '@typescript-eslint/parser'
      }
    },
    rules: {
      'vue/multi-word-component-names': 'off'
    }
  }
)
```

- [ ] **Step 6: `index.html`**

Upstream's file with: title and both description metas changed to "Vue Starter Template" / "A production-ready starter template powered by Pohon UI. Build beautiful, accessible, and performant applications in minutes, not hours."; the `og:image` meta removed. Keep the Bunny Fonts link, the `isolate` root `div`, and the no-flash color-mode script unchanged (Pohon's Vue `useColorMode` uses VueUse's default `vueuse-color-scheme` key, the same one the script reads).

- [ ] **Step 7: `src/main.ts`**

```ts
import 'virtual:uno.css'
import './assets/css/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { routes, handleHotUpdate } from 'vue-router/auto-routes'
import { createHead } from '@unhead/vue/client'
import ui from 'pohon-ui/vue-plugin'

import App from './App.vue'

const app = createApp(App)

const head = createHead()
const router = createRouter({
  routes,
  history: createWebHistory()
})

app.use(head)
app.use(router)
app.use(ui)

app.mount('#app')

if (import.meta.hot) {
  handleHotUpdate(router)
}
```

`src/assets/css/main.css`: upstream's `@theme static` values moved into `:root`, plus upstream's `.dark` rule:

```css
:root {
  --font-sans: 'Public Sans', sans-serif;

  --color-green-50: oklch(90.98% 0.04338 166.72);
  --color-green-100: oklch(88.46% 0.05417 166.29);
  --color-green-200: oklch(83.957% 0.07763 165.13);
  --color-green-300: oklch(79.343% 0.09927 163.52);
  --color-green-400: oklch(74.927% 0.11835 162.26);
  --color-green-500: oklch(70.253% 0.13197 160.37);
  --color-green-600: oklch(58.426% 0.10793 160.73);
  --color-green-700: oklch(45.657% 0.08188 161.06);
  --color-green-800: oklch(32.298% 0.05338 161.83);
  --color-green-900: oklch(17.276% 0.02184 161.78);
}

.dark {
  --ui-primary: var(--ui-color-primary-500);
}
```

Pohon's design-system docs say custom colors need every shade from 50 to 950. Upstream's Vue palette stops at 900, so add `--color-green-950` set to the 900 value and log "starter-vue: upstream green palette has no 950 shade; duplicated 900" in `GAPS.md`.

- [ ] **Step 8: `src/App.vue`**

```vue
<script setup lang="ts">
import { computed } from 'vue'
import { useHead } from '@unhead/vue'
import { useColorMode } from '@vueuse/core'

const colorMode = useColorMode()
const themeColor = computed(() => colorMode.value === 'dark' ? '#18181b' : '#ffffff')

useHead({
  meta: [
    { name: 'theme-color', content: themeColor }
  ]
})
</script>

<template>
  <Suspense>
    <PApp>
      <PHeader>
        <template #left>
          <RouterLink
            to="/"
            class="focus-visible:outline-3 outline-primary/25 rounded-md p-1 -ms-1"
          >
            <AppLogo class="h-6 shrink-0" />
          </RouterLink>
        </template>

        <template #right>
          <PColorModeButton />

          <PButton
            to="https://github.com/vinicunca/pohon-templates/tree/main/starter-vue"
            target="_blank"
            icon="i-simple-icons-github"
            aria-label="GitHub"
            color="neutral"
            variant="ghost"
          />
        </template>
      </PHeader>

      <PMain>
        <RouterView />
      </PMain>

      <PSeparator icon="i-simple-icons-vuedotjs" />

      <PFooter>
        <template #left>
          <p class="text-sm color-text-muted">
            Built with Pohon UI • © {{ new Date().getFullYear() }}
          </p>
        </template>

        <template #right>
          <PButton
            to="https://github.com/vinicunca/pohon-templates/tree/main/starter-vue"
            target="_blank"
            icon="i-simple-icons-github"
            aria-label="GitHub"
            color="neutral"
            variant="ghost"
          />
        </template>
      </PFooter>
    </PApp>
  </Suspense>
</template>
```

Upstream uses `simple-icons:github` (online Iconify format). This port uses `i-simple-icons-github` with the local `@iconify-json/simple-icons` collection so icons work offline. If they don't render in the Vue build, read `content/pohon/1.getting-started/6.integrations/1.icons/2.vue.md` for the Vue icon setup, apply it, and note it in `GAPS.md`.

- [ ] **Step 9: `src/pages/index.vue`**

Port `$UP/starter-vue/src/pages/index.vue` with the same edits as Task 3 Step 6, using `/installation/vue`, `/tree/main/starter-vue`, title "Vue Starter Template", and `icon: 'i-simple-icons-github'` instead of `simple-icons:github`. The CTA description becomes `"Build with Vue and Pohon UI. Get this template and start shipping today."`

Check: `grep -rn "ui.nuxt.com\|nuxt-ui-templates\|<U\|Nuxt UI\|Tailwind\|simple-icons:" src index.html` prints nothing.

- [ ] **Step 10: `README.md`**

Same as Task 3 Step 7 with "Vue starter", the `starter-vue` path, the upstream link `https://github.com/nuxt-ui-templates/starter-vue`, and `pnpm dev` on http://localhost:5173.

- [ ] **Step 11: Install, lint, build, typecheck (build before typecheck)**

```bash
cd ~/Dev/@vinicunca/pohon-templates/starter-vue
pnpm install && pnpm lint && pnpm build && pnpm typecheck
```

Expected: all exit 0; `auto-imports.d.ts`, `components.d.ts` and `src/route-map.d.ts` exist after build.

- [ ] **Step 12: Runtime check**

Same checks as Task 3 Step 9 on http://localhost:5173, plus: with the OS in dark mode, reload. The page must not flash a light background before dark applies.

---

### Task 5: Scaffold tests

**Files:** none kept (throwaway dirs in the scratchpad).

- [ ] **Step 1: giget from the local folder**

Before the GitHub repo exists, test with a plain copy, which is what giget does (it downloads the folder without `.git`):

```bash
for t in starter starter-vue; do
  rm -rf <scratchpad>/scaffold-$t
  rsync -a --exclude node_modules --exclude .nuxt --exclude .output --exclude dist --exclude auto-imports.d.ts --exclude components.d.ts ~/Dev/@vinicunca/pohon-templates/$t/ <scratchpad>/scaffold-$t/
  (cd <scratchpad>/scaffold-$t && pnpm install && pnpm lint && pnpm build && pnpm typecheck) || echo "FAIL $t"
done
```

Expected: no `FAIL` lines. This pins Review Focus #1 (the folder works outside the repo).

If the GitHub repo exists and was pushed (only if the user okayed it), also run `npx giget@latest gh:vinicunca/pohon-templates/starter <scratchpad>/giget-starter` and repeat the checks there.

- [ ] **Step 2: nuxi subfolder dry run**

Only possible once the repo is on GitHub. If it isn't, skip this, document giget only (as the spec says), and note it in the report. If it is:

```bash
cd <scratchpad> && npm create nuxt@latest nuxi-starter -- -t gh:vinicunca/pohon-templates/starter --no-install --gitInit=false
ls nuxi-starter/app/pages/index.vue
```

Expected: the file exists. Then the nuxi command may be listed next to giget for Nuxt templates (Tasks 7 and 8); otherwise giget only.

---

### Task 6: Screenshots

**Files:**
- Create: `~/Dev/@vinicunca/docs/public/images/templates/starter.webp` (and `starter-vue.webp` if different)

- [ ] **Step 1: Capture**

With the dev servers from Tasks 3 and 4 running in light mode, take a 1440×900 viewport screenshot of each home page with `agent-browser` (or another headless browser) and convert to WebP (`cwebp -q 85 in.png -o out.webp`, or `sips`/`magick` if `cwebp` is missing).

- [ ] **Step 2: Compare**

If the two images look the same apart from the title text, keep only `starter.webp` and use it for both sections in Task 7. If no browser automation is available, skip screenshots, leave the image lines out of Task 7, and say so in the report.

---

### Task 7: Docs templates page and cross-links

**Files (this repo, `~/Dev/@vinicunca/docs`):**
- Create: `content/pohon/1.getting-started/3.templates.md`
- Modify: `content/pohon/1.getting-started/2.installation/1.nuxt.md` (tips under the existing Nuxt UI tip, around line 12)
- Modify: `content/pohon/1.getting-started/2.installation/2.vue.md` (same place)
- Modify: `content/pohon/1.getting-started/1.index.md` ("Working examples" section)

- [ ] **Step 1: The page**

`content/pohon/1.getting-started/3.templates.md`:

````markdown
---
title: Templates
description: 'Clone-and-go starter projects built with Pohon UI, for Nuxt and Vue.'
navigation.icon: i-lucide-layout-template
---

Pohon UI templates are complete projects you scaffold into a new folder and build on. They're ported from the [Nuxt UI templates](https://github.com/nuxt-ui-templates) and live in one repository, [vinicunca/pohon-templates](https://github.com/vinicunca/pohon-templates).

## Starter

A minimal Nuxt app with a header, a hero, a features section and a footer, already set up with Pohon UI and UnoCSS.

![Pohon UI Starter template](/images/templates/starter.webp)

::code-group

```bash [giget]
npx giget@latest gh:vinicunca/pohon-templates/starter my-app
```

::

[Source](https://github.com/vinicunca/pohon-templates/tree/main/starter) · Ported from [nuxt-ui-templates/starter](https://github.com/nuxt-ui-templates/starter)

## Starter (Vue)

The same starter for a plain Vue app with Vite and `vue-router`, without Nuxt.

![Pohon UI Vue Starter template](/images/templates/starter-vue.webp)

::code-group

```bash [giget]
npx giget@latest gh:vinicunca/pohon-templates/starter-vue my-app
```

::

[Source](https://github.com/vinicunca/pohon-templates/tree/main/starter-vue) · Ported from [nuxt-ui-templates/starter-vue](https://github.com/nuxt-ui-templates/starter-vue)
````

Adjust per Task 5 and 6 results: add a `[nuxi]` tab to the Starter code-group only if Task 5 Step 2 passed; use `starter.webp` for both images if Task 6 kept one; drop the image lines if there are no screenshots.

- [ ] **Step 2: Install-page tips**

In both `1.nuxt.md` and `2.vue.md`, directly after the existing `::tip{to="https://ui.nuxt.com"}` block, add:

```markdown
::tip{to="/pohon/getting-started/templates"}
Prefer to start from a working project? Scaffold one of the **Pohon UI templates**.
::
```

- [ ] **Step 3: Introduction mention**

In `1.index.md`, replace the "Working examples" paragraph:

```markdown
The [Nuxt playground](https://github.com/vinicunca/pohon/tree/main/playgrounds/nuxt) and [Vue playground](https://github.com/vinicunca/pohon/tree/main/playgrounds/vue) show complete Pohon UI and UnoCSS configurations.
```

with:

```markdown
The [templates](/pohon/getting-started/templates) are complete projects you can scaffold and build on. The [Nuxt playground](https://github.com/vinicunca/pohon/tree/main/playgrounds/nuxt) and [Vue playground](https://github.com/vinicunca/pohon/tree/main/playgrounds/vue) show complete Pohon UI and UnoCSS configurations.
```

- [ ] **Step 4: Check**

```bash
cd ~/Dev/@vinicunca/docs
curl -s -o /dev/null -w "%{http_code}\n" localhost:3000/pohon/getting-started/templates   # dev server running: expect 200
curl -s localhost:3000/raw/pohon/getting-started/templates.md | head -20               # raw markdown copy reads cleanly
pnpm typecheck 2>&1 | grep -E "content/pohon" ; echo "(no lines above = no new errors)"
```

If the raw-markdown route differs, find it with `grep -rn "raw" server/routes | head`. Expected: 200, and the raw copy shows the headings and commands.

---

### Task 8: READMEs

**Files:**
- Modify: `~/Dev/@vinicunca/pohon/README.md` (the `## Templates` section, currently lines ~19–32)
- Modify: `~/Dev/@vinicunca/pohon-templates/README.md` (the `## Templates` placeholder from Task 2)

- [ ] **Step 1: pohon README**

Replace the whole `## Templates` section (heading through the last `- [Editor]…` bullet) with:

```markdown
## Templates

Start from a clone-and-go template, ported from the Nuxt UI templates. See all of them on the [templates page](https://vinicunca.dev/pohon/getting-started/templates).

- **Starter**: a minimal Nuxt app with Pohon UI and UnoCSS set up.
  `npx giget@latest gh:vinicunca/pohon-templates/starter my-app`
- **Starter (Vue)**: the same starter for Vue with Vite.
  `npx giget@latest gh:vinicunca/pohon-templates/starter-vue my-app`
```

- [ ] **Step 2: templates repo README**

Replace `<!-- filled in Task 8 -->` with the same two bullets, each also linking its folder (`[Starter](./starter)`, `[Starter (Vue)](./starter-vue)`).

- [ ] **Step 3: Dead-link check (Review Focus #5)**

```bash
/usr/bin/grep -rn "pohon-ui-templates\|pohon\.vinicunca\.dev" ~/Dev/@vinicunca/pohon/README.md ~/Dev/@vinicunca/docs/content/pohon
/usr/bin/grep -rn '--include=*.md' "pohon-ui-templates\|pohon\.vinicunca\.dev" ~/Dev/@vinicunca/pohon-templates
```

Expected: no output.

---

### Task 9: Report

- [ ] **Step 1: Clean up**

```bash
rm ~/Dev/@vinicunca/pohon-templates/.versions.txt
```

Stop the dev servers started in Tasks 3, 4 and 7.

- [ ] **Step 2: Report to the user**

- per template: which checks passed (install, lint, build, typecheck, runtime, scaffold), with the output of any that failed;
- `UNO_MODE` and the Task 1 findings;
- the contents of `GAPS.md`;
- anything skipped (no GitHub repo yet, nuxi dry run, browser checks, screenshots) and why;
- also found while planning, not in this run's scope: `pohon/playgrounds/vue/tsconfig*.json` point `#build/ui` at `node_modules/.nuxt-ui`, but the Vite plugin writes `node_modules/.pohon-ui`;
- next steps that need the user: create `vinicunca/pohon-templates` on GitHub, push, then re-run Task 5 Step 2 (nuxi) and the giget-from-GitHub check.
