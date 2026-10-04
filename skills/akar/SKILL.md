---
name: akar
description: Build accessible Vue UIs with Akar unstyled primitives. Use when composing design-system parts (Dialog, Popover, Select, dates, menus), wrapping Akar with asChild, or choosing Akar instead of Pohon UI.
---

# Akar

Unstyled, accessible Vue primitives. Package `akar` v2.0.20. Import from `akar` (subpaths `akar/date`, `akar/namespaced`, `akar/nuxt`, `akar/resolver`, `akar/constant`). No component prefix (`AccordionRoot`, not `AkarAccordionRoot`).

Akar is a 1:1 fork of [Reka UI](https://reka-ui.com). Pohon UI is the styled design system built on Akar + UnoCSS.

## When to use Akar vs Pohon UI

- **Pohon UI** — shipping a product UI. Themed buttons, forms, overlays, dashboards. See [pohon-ui skill](https://vinicunca.dev/.well-known/skills/pohon-ui/SKILL.md).
- **Akar** — building a design system, or you need a primitive Pohon does not wrap (ColorArea, Tree, TagsInput, date fields). You own all CSS.

Do not mix Pohon components and raw Akar parts for the same control (two focus rings, two `v-model` stories). Wrapping Akar inside a Pohon theme is the Pohon team's job.

## Install

```bash
pnpm add akar
```

Nuxt — `modules: ['akar/nuxt']` (prefix `''` by default). Vite — `AkarResolver()` from `akar/resolver`. Namespaced objects: `import { Dialog } from 'akar/namespaced'` then `<Dialog.Root>`.

## Composition conventions

1. **Anatomy** — every control is parts: `Root` + `Trigger` + `Content` (plus `Portal`, `Arrow`, …). Assemble them; there is no single `<Accordion>` blob.
2. **`as` / `asChild`** — `as` changes the rendered tag. `asChild` merges props onto your first child (your Button, your `NuxtLink`). The child must stay focusable if the part was a button. Guide: https://vinicunca.dev/raw/akar/guides/composition.md
3. **Controlled vs uncontrolled** — `defaultValue` / `defaultOpen` for uncontrolled; `v-model` / `v-model:open` when the parent owns state. Guide: https://vinicunca.dev/raw/akar/guides/controlled-state.md
4. **Presence** — closed content unmounts unless `forceMount` / `:unmount-on-hide="false"`. Use `--akar-*-width/height` CSS variables for size animations.
5. **Styling** — style with classes + `data-*` attributes (`data-state="open" | "closed"`, `data-disabled`, `data-orientation`). Do not expect theme tokens from Akar itself.

## Key components

Overlays: [Dialog](https://vinicunca.dev/raw/akar/components/dialog.md), [Popover](https://vinicunca.dev/raw/akar/components/popover.md), [Tooltip](https://vinicunca.dev/raw/akar/components/tooltip.md), [Dropdown Menu](https://vinicunca.dev/raw/akar/components/dropdown-menu.md), [Context Menu](https://vinicunca.dev/raw/akar/components/context-menu.md).

Disclosure: [Accordion](https://vinicunca.dev/raw/akar/components/accordion.md), [Collapsible](https://vinicunca.dev/raw/akar/components/collapsible.md), [Tabs](https://vinicunca.dev/raw/akar/components/tabs.md).

Forms: [Checkbox](https://vinicunca.dev/raw/akar/components/checkbox.md), [Switch](https://vinicunca.dev/raw/akar/components/switch.md), [Select](https://vinicunca.dev/raw/akar/components/select.md), [Combobox](https://vinicunca.dev/raw/akar/components/combobox.md), [Slider](https://vinicunca.dev/raw/akar/components/slider.md).

Dates (`@internationalized/date`): [Calendar](https://vinicunca.dev/raw/akar/components/calendar.md), [DatePicker](https://vinicunca.dev/raw/akar/components/date-picker.md), [DateField](https://vinicunca.dev/raw/akar/components/date-field.md). Guide: https://vinicunca.dev/raw/akar/guides/dates.md

App shell: wrap with [ConfigProvider](https://vinicunca.dev/raw/akar/utilities/config-provider.md) for `dir`, scroll lock, and a stable `useId` in Nuxt.

Index of all 60 components: https://vinicunca.dev/raw/akar/components.md

## Docs for agents

Raw markdown (API tables expanded): `https://vinicunca.dev/raw/akar/<section>/<page>.md`

- Overview: https://vinicunca.dev/raw/akar/overview/introduction.md
- Installation (Nuxt + resolver): https://vinicunca.dev/raw/akar/overview/installation.md
- Composition: https://vinicunca.dev/raw/akar/guides/composition.md
- Styling: https://vinicunca.dev/raw/akar/guides/styling.md
