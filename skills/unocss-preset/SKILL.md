---
name: unocss-preset
description: Use @vinicunca/unocss-preset (v2.4.0) — wind4, icons, fluid sizing, enter/exit animations, optional scrollbars and Magic CSS. Use when configuring UnoCSS, writing fluid-* or animate-in classes, or setting up Pohon UI styling.
---

# UnoCSS Preset (Vinicunca)

Package: `@vinicunca/unocss-preset`. Verify details against https://vinicunca.dev/raw/unocss-preset/getting-started.md and https://vinicunca.dev/raw/unocss-preset/getting-started/options.md.

## When to use

- Scaffold `uno.config.ts` for Vinicunca / Pohon apps
- Fluid type and spacing (`fluid-*`)
- Enter/exit motion (`animate-in` / `animate-out`)
- Custom scrollbars or Magic Animate keyframes

## Setup

```ts
import { presetVinicunca } from '@vinicunca/unocss-preset'
import { defineConfig } from 'unocss'

export default defineConfig({
  presets: [presetVinicunca()]
})
```

Do **not** also add `presetWind4` or `presetIcons`. Do **not** pass `wind3` or `akar` — those options do not exist.

Pohon UI: same `presetVinicunca()` in `uno.config.ts` ([Nuxt](https://vinicunca.dev/pohon/getting-started/installation/nuxt), [Vue/Vite](https://vinicunca.dev/pohon/getting-started/installation/vue)). Vite still needs `unocss/vite` and `import 'virtual:uno.css'`.

## Defaults (v2.4.0)

| Option | Default |
| --- | --- |
| `preflights` | `true` (reset on layer `preflights`) |
| `wind4` | `{ preflights: { reset: false } }` |
| `icons` | `true` |
| `animation` | `true` (`unit: 'ms'`) |
| `fluid` | `true` (`prefix: 'fluid-'`) |
| `webFonts` / `typography` / `scrollbar` / `magicCss` | `false` |
| `directives` / `variantGroup` | `true` |
| `alias` | off |
| `unColor` | `false` (`true` → `--un-color`) |

Full options: https://vinicunca.dev/raw/unocss-preset/getting-started/options.md

## Theme

`extendedTheme.keyframes` is `Record<string, Record<string, CSSObject>>`. `extendedTheme.animation` is `Record<string, string>` in the form `name duration timing-function iteration-count`. Placeholders: `*` skip, `+` empty. Do not nest `animation` inside `keyframes`. Do not collide with built-in `spin`.

https://vinicunca.dev/raw/unocss-preset/getting-started/theme.md

## Fluid

Prefix is `fluid-`, not `f-`. Slash syntax: `fluid-p-32/64`. Theme: `fluid-p-lg`, `fluid-text-sm`, `fluid-rounded-md`. CSS vars: `fluid-$px-24/32` (letters only in the name). Container query: `fluid-$px-container` → `100cqw`.

https://vinicunca.dev/raw/unocss-preset/fluid.md · https://vinicunca.dev/raw/unocss-preset/fluid/utilities.md

## Animations

`animate-in` / `animate-out` plus `fade-in`, `zoom-in`, `spin-in`, `slide-in-top` (and `-out` / `slide-out-*`). CSS vars `--vin-*`. Default duration **150ms hardcoded**, not theme duration. No `[]` arbitrary values (`spin-in-30` not `spin-in-[30]`).

https://vinicunca.dev/raw/unocss-preset/animations.md

## Scrollbar

`scrollbar: true`. Variants: `scrollbar:`, `scrollbar-track:`, `scrollbar-thumb:` → `::-webkit-scrollbar*`. Default `noCompatible: true` means `scrollbar-color` emits nothing. Vars are `--scrollbar-*`.

https://vinicunca.dev/raw/unocss-preset/scrollbar.md

## Magic CSS

`magicCss: true` (boolean only). Classes `animate-puff-in`, `animate-magic`, … fill-mode `both`.

https://vinicunca.dev/raw/unocss-preset/magic-css.md

## Alias transformer

`alias: true`. `*shortcut` replaces; `+shortcut` keeps the name and blocklists it. Defaults `prefix: '*'`, `keep: '+'`.
