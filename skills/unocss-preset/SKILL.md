---
name: unocss-preset
description: Configure @vinicunca/unocss-preset (`presetVinicunca`) and write its classes — wind4 + icons bundle, fluid-* clamp sizing, animate-in/animate-out enter-exit motion, opt-in scrollbar and Magic CSS. Use when editing uno.config.ts with presetVinicunca, setting up UnoCSS for Pohon UI, extending keyframes/animations, or writing fluid-*, fade/zoom/spin/slide-in/out, scrollbar-*, or Magic CSS animate-* classes.
---

# UnoCSS Preset (Vinicunca)

`@vinicunca/unocss-preset` exports one preset, `presetVinicunca`. It composes presetWind4, presetIcons, a CSS reset, fluid sizing, and enter/exit animations, plus the directives and variant-group transformers. Typography, web fonts, scrollbars, Magic CSS, and the alias transformer are opt-in.

Docs (raw markdown): https://vinicunca.dev/raw/unocss-preset/getting-started.md

## Setup

```bash
pnpm add -D unocss @vinicunca/unocss-preset
```

```ts [uno.config.ts]
import { presetVinicunca } from '@vinicunca/unocss-preset'
import { defineConfig } from 'unocss'

export default defineConfig({
  presets: [presetVinicunca()]
})
```

`presetVinicunca()` is the whole preset list. Configure Wind4 and Icons through its `wind4` / `icons` options rather than adding `presetWind4()` or `presetIcons()` next to it. It has no `presets`, `wind3`, or `akar` option (Akar support was removed in v2.1.0).

- **Vite**: add `UnoCSS()` from `unocss/vite` to `plugins` and `import 'virtual:uno.css'` in the entry.
- **Nuxt**: add `@unocss/nuxt` to `modules`.
- **Pohon UI**: same `uno.config.ts`. The Pohon Nuxt module registers `@unocss/nuxt` for you; on Vue/Vite you still add `UnoCSS()` and `virtual:uno.css` yourself. See [Nuxt](https://vinicunca.dev/raw/pohon/getting-started/installation/nuxt.md) / [Vue](https://vinicunca.dev/raw/pohon/getting-started/installation/vue.md).

## Options

Every nested preset/transformer accepts `true` (preset defaults), `false` (off), or an options object that is deep-merged over the defaults below.

| Option | Default | Notes |
| --- | --- | --- |
| `preflights` | `true` | Vinicunca reset on the `preflights` layer |
| `wind4` | `{ preflights: { reset: false } }` | Pass an object to tweak; see the note below |
| `icons` | `true` | `IconsOptions` object for collections, `scale`, … |
| `animation` | `true` | Object → `AnimationOptions`, `unit: 'ms'` default |
| `fluid` | `true` | Object → `FluidOptions` (`prefix: 'fluid-'`, 320–1920, `px`) |
| `typography` / `webFonts` / `scrollbar` | `false` | `true` or that preset's options |
| `magicCss` | `false` | Boolean only |
| `directives` / `variantGroup` | `true` | `@apply`, `theme()`, `hover:(a b)` |
| `alias` | off | `true` or `{ prefix: '*', keep: '+' }` |
| `unColor` | `false` | `true` = `'--un-color'`, or pass a var name |
| `extendedTheme` | `{}` | `keyframes` + `animation` only — see Theme |

`wind4: true` (boolean) calls Wind4 with its own defaults, which turns Wind4's reset back on and stacks it with the Vinicunca reset. Use an object, such as `wind4: { dark: 'media' }`, to keep `reset: false`.

Nested option fields (AnimationOptions, FluidOptions, scrollbar, alias): [references/options.md](references/options.md).

## Theme: `extendedTheme`

`extendedTheme` adds keyframes and Tailwind-style animation strings. Only `keyframes` and `animation` are read; other theme keys there are dropped. Put colors, fonts, breakpoints, etc. in UnoCSS's own `theme` on `defineConfig`.

```ts
presetVinicunca({
  extendedTheme: {
    keyframes: {
      'accordion-down': {
        from: { height: '0' },
        to: { height: 'var(--akar-accordion-content-height)' }
      }
    },
    // "name duration timing-function iteration-count"
    animation: { 'accordion-down': 'accordion-down 200ms ease-out' }
  }
})
// -> animate-accordion-down
```

- Placeholders per slot: `*` skips injecting that property; `+` injects an empty string (`'foo 1s * 3'`).
- Duration may be `var(--x)`; timing may be `cubic-bezier(...)`. Keyframe names are letters and hyphens only.
- Timing is stored under the keyframe **name**, not the map key. A key that differs from the name (`shake: 'wiggle 500ms ease-in-out 2'`) only adds an `animate-shake` → `animate-wiggle` alias and overwrites `wiggle`'s timing. Give each variant its own keyframe name.
- Reusing a built-in keyframe name (`spin`, `vin-in`, `vin-out`, Magic CSS names) replaces it.

https://vinicunca.dev/raw/unocss-preset/getting-started/theme.md

## Enter/exit animations

```html
<div class="animate-in fade-in zoom-in-95 slide-in-from-top-2">…</div>
<div class="animate-out fade-out slide-out-to-bottom animate-duration-300 animate-both">…</div>
```

- `animate-in` / `animate-out` run keyframes `vin-in` / `vin-out`. Modifiers set `--vin-enter-*` / `--vin-exit-*` vars: `fade-*` (opacity, default `0`), `zoom-*` (scale, default `0`), `spin-*` (rotate, default `30deg`), `slide-*-<top|bottom|left|right>` (translate, default `100%`). Combine any of them on one element.
- Duration is a hardcoded `150ms`, not `theme.duration.DEFAULT`. Change it per element with `animate-duration-300`, or globally with `animation: { duration: 200 }`. No fill mode is set by default; add `animate-both` or `animation: { fillMode: 'both' }` to hold the end frame.
- Timing modifiers are Wind4's: `animate-delay-*`, `animate-ease-*`, `animate-both`, `animate-count-*`, `animate-paused`, `motion-reduce:animate-none`.
- Write values bare: `spin-in-30`, `slide-in-top-1/2`, `fade-in-$my-var`. `[]` arbitrary values copy through unitless and break `transform`.
- Spell slide directions in full. `slide-in-t` matches but emits nothing.

Value syntax tables and the tailwindcss-animate mapping: [references/animations.md](references/animations.md).

## Fluid sizing

Each `fluid-*` class emits `clamp(min, fluid, max)`, scaling linearly from viewport 320px to 1920px with `px` units by default.

```html
<h1 class="fluid-text-32/64">…</h1>        <!-- 32px → 64px -->
<section class="fluid-p-lg fluid-gap-sm">   <!-- theme: 32/48, 16/24 -->
<div class="fluid-w fluid-w-min-10 fluid-w-max-20 fluid-w-base-rem">  <!-- 10rem → 20rem -->
```

- Prefix is `fluid-`. Set `fluid: { prefix: 'f-' }` for the short form.
- Min/max are integers: `fluid-p-24/40` works, `fluid-text-1.5/2` emits nothing. For rem sizing use `-base-rem` (or `defaultBaseUnit: 'rem'`) with integer values.
- Theme names: spacing `2xs`–`5xl` on every utility except `text` / `rounded`; `fluid-text-3xs`–`4xl`; `fluid-rounded-xs`–`2xl`.
- `fluid-$<name>-24/32` stores the clamp on `--fluid-<name>` and also applies it when `<name>` is a built-in utility (`$px` → padding-x). Names match `\w+`: letters, digits, underscore, no hyphens.
- Container query width (`100cqw` instead of `100vw`) works only on the `$` form: `fluid-$px-24/32 fluid-$px-container`. On plain utilities `fluid-pt-container` writes the wrong var; use `[--fluid-pt-container:100cqw]`.
- Translate utilities need Wind4 `transform`.

Utility list, modifiers, theme tables, and options: [references/fluid.md](references/fluid.md).

## Scrollbar (opt-in)

```ts
presetVinicunca({ scrollbar: true })
```

```html
<div class="scrollbar scrollbar-rounded scrollbar-w-2 scrollbar-thumb-color-gray-400 h-40">…</div>
<div class="scrollbar-none overflow-auto">…</div>
```

Variants `scrollbar:`, `scrollbar-track:`, `scrollbar-thumb:` target `::-webkit-scrollbar*` (`scrollbar-thumb:bg-red-500`). Vars are `--scrollbar-*` (no `un-`). With the default `noCompatible: true`, Firefox `scrollbar-color` / `scrollbar-width` are skipped (except `none`), and UnoCSS logs harmless "unmatched utility" warnings for those parts of the `scrollbar` shortcut.

Details: [references/scrollbar.md](references/scrollbar.md).

## Magic CSS (opt-in)

`magicCss: true` registers Magic Animate keyframes as Wind4 `animate-*` utilities with `animation-fill-mode: both` (`animate-puff-in`, `animate-magic`, `animate-vanish-out`, `animate-swash-in`). Without modifiers they run `1s linear 1`; add `animate-duration-*` / `animate-ease-*`. Magic `animate-slide-down` is unrelated to the enter/exit `slide-in-*` utilities.

Full name list: [references/magic-css.md](references/magic-css.md).

## Alias transformer and `unColor`

- `alias: true` expands your UnoCSS `shortcuts` in source: `*btn` becomes the expanded classes; `+btn` keeps `btn`, appends the expansion, and blocklists `btn`.
- `unColor` rewrites literal `rgb()` / `rgba()` values to `rgb(var(--un-color) / a)` and writes the channels to `--un-color`. Wind4's default palette is `oklch`, so it affects arbitrary or custom rgb colors (`bg-[rgba(1,2,3,.5)]`), not `text-red-500`.
