---
name: akar
description: Build accessible Vue components from Akar's unstyled primitives (a Reka UI fork, package `akar`). Use when code imports from `akar` or `akar/nuxt`, when assembling Root/Trigger/Content parts, wrapping primitives into your own design-system components with `asChild`, styling by `data-state`, or choosing between Akar and Pohon UI.
---

# Akar

Unstyled, accessible Vue 3 primitives, published as `akar`. A 1:1 fork of [Reka UI](https://reka-ui.com) (formerly Radix Vue): same part names, no prefix (`AccordionRoot`, `DialogTrigger`). The docs and this skill track **v2.0.20**. Peer dependency: `vue >= 3.4`.

## Akar or Pohon UI

Pohon UI is the styled component library built on Akar + UnoCSS. Decide first:

- **Pohon UI**: product UI with a theme. It already wraps most Akar families (Accordion, Dialog as Modal/Slideover, Select/SelectMenu, Tree, InputTags, ColorPicker, Calendar, InputDate/InputTime, Toast, Tooltip). Load the [pohon-ui skill](https://vinicunca.dev/.well-known/skills/pohon-ui/SKILL.md).
- **Akar**: you are building your own design system, you need part-level control that Pohon's props do not expose, or you need a family Pohon has no component for (Menubar, Toolbar, Toggle/ToggleGroup, Editable, TagGroup, AspectRatio, AlertDialog). You write all the CSS.

In a Pohon app, build each control from one library: a Pohon component or raw Akar parts, never both for the same control.

## Install

```bash
pnpm add akar
```

| Entry | Use |
|---|---|
| `akar` | Every component, composable (`useForwardPropsEmits`, `useId`, `useFilter`, ...) and type |
| `akar/date` | Date helpers (`isBefore`, `createMonth`, `toDate`, ...) |
| `akar/namespaced` | Multi-part objects: `import { Dialog } from 'akar/namespaced'`, then `<Dialog.Root>` |
| `akar/nuxt` | Nuxt module: `modules: ['akar/nuxt']`, options under `akar: { prefix: '', components: true }` |
| `akar/resolver` | unplugin-vue-components: `import AkarResolver from 'akar/resolver'` (default export), `resolvers: [AkarResolver()]` |
| `akar/constant` | Component group lists (`components.dialog`, ...), the keys for opting groups in or out of the Nuxt module |

The Nuxt module and the resolver register **components only**, with no prefix by default. Import composables from `akar` yourself. Single-part components (`Label`, `Separator`, `Toggle`, `AspectRatio`, `ColorSwatch`, `VisuallyHidden`, `ConfigProvider`) have no namespaced object; import them from `akar`.

## Core model

**Anatomy.** Every control is a tree of parts that you assemble. Copy the anatomy block from the component page, then remove the optional parts. A typical overlay:

```vue
<script setup lang="ts">
import { DialogClose, DialogContent, DialogDescription, DialogOverlay, DialogPortal, DialogRoot, DialogTitle, DialogTrigger } from 'akar';
import { ref } from 'vue';

const open = ref(false);
</script>

<template>
  <DialogRoot v-model:open="open">
    <DialogTrigger class="btn">
      Edit profile
    </DialogTrigger>
    <DialogPortal>
      <DialogOverlay class="DialogOverlay" />
      <DialogContent class="DialogContent">
        <DialogTitle>Edit profile</DialogTitle>
        <DialogDescription>Change your display name.</DialogDescription>
        <DialogClose aria-label="Close">
          ×
        </DialogClose>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>

<style>
.DialogOverlay {
  position: fixed;
  inset: 0;
  background: rgb(0 0 0 / 0.5);
}
.DialogContent {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
```

**State.** Uncontrolled: `default-value` / `default-open`. Controlled: `v-model` (value) and `v-model:open` (overlays). Checkbox, Switch, Toggle and menu `CheckboxItem` use plain `v-model`, not `v-model:checked`. Roots expose state as slot props (`<DialogRoot v-slot="{ open, close }">`). Bind non-string defaults with `:` (`:default-value="true"`).

**`as` / `asChild`.** Every part that renders an element accepts `as` (a tag or component) and `asChild` (render your first child instead, merging Akar's attributes, listeners and ARIA onto it). Stack `asChild` to combine behaviors: `TooltipTrigger as-child` > `DialogTrigger as-child` > `<MyButton>`. The child must render a single root element that receives fallthrough attributes and stays focusable.

**Styling.** Akar ships zero CSS, functional CSS included: you position the overlay, size the content, and style closed panels. Style by `class` plus state attributes: `data-state` (`open`/`closed`, `checked`/`unchecked`/`indeterminate`, `active`/`inactive`, `on`/`off`), `data-disabled`, `data-highlighted`, `data-orientation`, `data-side`, `data-align`, `data-placeholder`. Sizes and positions come through `--akar-*` CSS variables (`--akar-accordion-content-height`, `--akar-popover-trigger-width`). Full tables: [references/styling.md](references/styling.md).

**Mounting.** Closed content unmounts after its exit animation. To keep it in the DOM, set `:unmount-on-hide="false"` on the Root (Dialog, Accordion, Collapsible, Tabs, NavigationMenu, Combobox, Autocomplete), or set `force-mount` on the part and own its visibility yourself (required for JS animation libraries).

**App shell.** Wrap the app once in `ConfigProvider` for `dir` (RTL), `locale` (dates, numbers), `scroll-body` (body-lock padding), `teleport-to`, `nonce`, and `use-id`. In Nuxt, define `const useIdFunction = () => useId()` in `app.vue` and pass `:use-id="useIdFunction"` so generated IDs match between server and client.

## Gotchas

- `TooltipRoot` throws without a `TooltipProvider` ancestor. Toasts need `ToastProvider` + `ToastViewport`, and `ToastAction` throws without `alt-text`.
- `SelectItem` and `ComboboxItem` throw on `value=""`, because the empty string means "cleared". Use another sentinel.
- Object values: pass `by="id"` (or a comparator) on Select/Combobox/Listbox roots. `ComboboxInput` needs `display-value`; `TagsInputRoot` with objects needs `convert-value`.
- Combobox filters items by their rendered text. To filter yourself, set `:ignore-filter="true"` and use `useFilter()`. Bind the search text with `v-model` on `ComboboxInput`, not on the Root.
- `SelectContent` defaults to `position="item-aligned"` (macOS style). Set `position="popper"` to get `side`, `side-offset` and the popper CSS variables.
- Tooltip `data-state` is `delayed-open` / `instant-open` / `closed`, never `open`.
- `SliderRoot` values are arrays (`[50]`), one entry per thumb. `PaginationRoot` requires `items-per-page`.
- Portalled parts render only after mount (no SSR HTML), into `body` by default. Scoped styles need `:deep()` to reach them.
- Attributes and CSS variables use the `akar` prefix (`data-akar-collection-item`, `--akar-*`). Selectors copied from Reka use `reka` and match nothing.
- `DialogTitle` is required for screen readers; to hide it, wrap it in `<VisuallyHidden as-child>`. With no description, pass `:aria-describedby="undefined"` to `DialogContent`.
- Overlay content emits `escape-key-down`, `pointer-down-outside`, `focus-outside`, `interact-outside`, `open-auto-focus` and `close-auto-focus`; call `event.preventDefault()` to cancel the default.
- Drawer is Alpha, and its CSS variables use the `--drawer-*` prefix.

## Load on demand

| Task | Read |
|---|---|
| Find the right primitive, its page and its required parts | [references/components.md](references/components.md) |
| Style states, use CSS variables, animate enter and exit | [references/styling.md](references/styling.md) |
| Wrap primitives into reusable design-system components | [references/wrapping.md](references/wrapping.md) |
| Calendars, date or time fields, date pickers | [references/dates.md](references/dates.md) |
| Validation with Field/Form, native form submission | [references/forms.md](references/forms.md) |

Every docs page is available as Markdown at `https://vinicunca.dev/raw/akar/<section>/<page>.md`, with API tables (props, emits, slots, data attributes) expanded. Read the component page before you use a component for the first time.

- Overview: https://vinicunca.dev/raw/akar/overview.md
- Installation: https://vinicunca.dev/raw/akar/overview/installation.md
- Component index: https://vinicunca.dev/raw/akar/components.md
- Utilities index: https://vinicunca.dev/raw/akar/utilities.md
- Guides: [composition](https://vinicunca.dev/raw/akar/guides/composition.md), [styling](https://vinicunca.dev/raw/akar/guides/styling.md), [animation](https://vinicunca.dev/raw/akar/guides/animation.md), [controlled state](https://vinicunca.dev/raw/akar/guides/controlled-state.md), [i18n and RTL](https://vinicunca.dev/raw/akar/guides/i18n.md), [SSR](https://vinicunca.dev/raw/akar/guides/server-side-rendering.md), [virtualization](https://vinicunca.dev/raw/akar/guides/virtualization.md), [migration from Radix Vue or Reka](https://vinicunca.dev/raw/akar/guides/migration.md)
