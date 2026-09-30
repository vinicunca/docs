---
title: "DashboardSearch"
description: "A ready-to-use CommandPalette to add to your dashboard."
package: pohon
sourceTag: "v2.0.1"
sourceCommit: "ee987babf834bae617d75a9c6b9347bba1a494df"
sourceUrl: "https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/docs/content/docs/2.components/dashboard-search.md"
---
## Usage

The DashboardSearch component extends the [CommandPalette](/pohon/components/command-palette) component, so you can pass any property such as `icon`, `placeholder`, etc.

Use it inside the default slot of the [DashboardGroup](/pohon/components/dashboard-group) component:

```vue [layouts/dashboard.vue]
<template>
  <PDashboardGroup>
    <PDashboardSidebar>
      <PDashboardSearchButton />
    </PDashboardSidebar>

    <PDashboardSearch />

    <slot />
  </PDashboardGroup>
</template>
```

> [!TIP]
> 
> You can open the CommandPalette by pressing `Meta` `K`, by using the [DashboardSearchButton](/pohon/components/dashboard-search-button) component or by using a `v-model:open` directive.

### Shortcut

Use the `shortcut` prop to change the shortcut used in [defineShortcuts](/pohon/composables/define-shortcuts) to open the ContentSearch component. Defaults to `meta_k` (`Meta` `K`).

```vue [app.vue]
<template>
  <PDashboardSearch
    v-model:search-term="searchTerm"
    shortcut="meta_k"
    :groups="groups"
    :fuse="{ resultLimit: 42 }"
  />
</template>
```

### Color Mode

By default, a group of commands will be added to the command palette so you can switch between light and dark mode. This will only take effect if the `colorMode` is not forced in a specific page which can be achieved through `definePageMeta`:

```vue [pages/index.vue]
<script setup lang="ts">
definePageMeta({
  colorMode: 'dark'
})
</script>
```

You can disable this behavior by setting the `color-mode` prop to `false`:

```vue [app.vue]
<template>
  <PDashboardSearch
    v-model:search-term="searchTerm"
    :color-mode="false"
    :groups="groups"
    :fuse="{ resultLimit: 42 }"
  />
</template>
```

## API

### Props

### Slots

### Emits

No events available for this component.

### Expose

When accessing the component via a template ref, you can use the following:

| Name | Type |
| --- | --- |
| `commandPaletteRef` | `Ref<InstanceType<typeof PCommandPalette> \| null>` |

## Theme

```ts [app.config.ts]
export default defineAppConfig({
  ui: {
    dashboardSearch: {
      slots: {
        modal: '',
        input: ''
      },
      variants: {
        fullscreen: {
          false: {
            modal: 'sm:max-w-3xl h-full sm:h-[28rem]'
          }
        },
        size: {
          xs: {},
          sm: {},
          md: {},
          lg: {},
          xl: {}
        }
      },
      defaultVariants: {
        size: 'md'
      }
    }
  }
})
```

## Changelog

See commit history for [component](https://github.com/vinicunca/pohon/commits/main/src/runtime/components/DashboardSearch.vue) and [theme](https://github.com/vinicunca/pohon/commits/main/src/theme/dashboard-search.ts).

---

- [CommandPalette](/pohon/components/command-palette)
- [GitHub](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/DashboardSearch.vue)


## Sitemap

See the full [sitemap](https://pohon.vinicunca.dev/sitemap.md) for all pages.

## Generated component API

[DashboardSearch source](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/DashboardSearch.vue)

### Props

- **size** — `"md" | "xs" | "sm" | "lg" | "xl" | undefined; optional`
- **close** — `boolean | Omit<ButtonProps, LinkPropsKeys> | undefined; optional; default: true`: Display a close button in the input (useful when inside a Modal for example). \`{ size: 'md', color: 'neutral', variant: 'ghost' }\`{lang="ts-type"}
- **input** — `boolean | Omit<InputProps<AcceptableValue, ModelModifiers>, "defaultValue" | "modelValue"> | undefined; optional`: Configure the input or hide it with \`false\`. \`{ fixed: true }\`{lang="ts-type"}
- **shortcut** — `string | undefined; optional; default: "meta_k"`: Keyboard shortcut to open the search (used by [\`defineShortcuts\`](/pohon/composables/define-shortcuts))
- **fuse** — `UseFuseOptions<CommandPaletteItem> | undefined; optional`: Options for [useFuse](https://vueuse.org/integrations/useFuse) passed to the [CommandPalette](/pohon/components/command-palette).
- **searchDelay** — `number | undefined; optional; default: 100`: Delay (in milliseconds) before the search term is passed to Fuse (debounced). Useful for large datasets where running fuzzy search on every keystroke is the bottleneck — the input stays responsive while Fuse only re-runs after typing settles. Set to \`0\` to disable.
- **colorMode** — `boolean | undefined; optional; default: true`: When \`true\`, the theme command will be added to the groups.
- **ui** — `({ modal?: SlotClass; input?: SlotClass; } & { root?: SlotClass; input?: SlotClass; close?: SlotClass; back?: SlotClass; content?: SlotClass; footer?: SlotClass; viewport?: SlotClass; group?: SlotClass; empty?: SlotClass; label?: SlotClass; item?: SlotClass; itemLeadingIcon?: SlotClass; itemLeadingAvatar?: SlotClass; itemLeadingAvatarSize?: SlotClass; itemLeadingChip?: SlotClass; itemLeadingChipSize?: SlotClass; itemTrailing?: SlotClass; itemTrailingIcon?: SlotClass; itemTrailingHighlightedIcon?: SlotClass; itemTrailingKbds?: SlotClass; itemTrailingKbdsSize?: SlotClass; itemWrapper?: SlotClass; itemLabel?: SlotClass; itemLabelBase?: SlotClass; itemLabelPrefix?: SlotClass; itemLabelSuffix?: SlotClass; itemDescription?: SlotClass; }) | undefined; optional`
- **unmountOnHide** — `boolean | undefined; optional`: When set to \`false\`, the dialog content will not be unmounted when closed, but instead hidden with CSS. <br> Useful for SEO or when you want to improve performance by not remounting the component on every open.
- **description** — `string | undefined; optional`
- **content** — `(Omit<DialogContentProps, "as" | "asChild" | "forceMount"> & Partial<EmitsToProps<DialogContentImplEmits>>) | undefined; optional`: The content of the modal.
- **title** — `string | undefined; optional`
- **transition** — `boolean | undefined; optional`: Animate the modal when opening or closing.
- **modal** — `boolean | undefined; optional`: The modality of the dialog When set to \`true\`, <br> interaction with outside elements will be disabled and only dialog content will be visible to screen readers.
- **overlay** — `boolean | undefined; optional`: Render an overlay behind the modal.
- **portal** — `string | boolean | HTMLElement | undefined; optional`: Render the modal in a portal.
- **dismissible** — `boolean | undefined; optional`: When \`false\`, the modal will not close when clicking outside or pressing escape.
- **fullscreen** — `boolean | undefined; optional; default: false`: When \`true\`, the modal will take up the full screen.
- **disabled** — `boolean | undefined; optional`: When \`true\`, prevents the user from interacting with listbox
- **trailingIcon** — `any; optional`: The icon displayed on the right side of the input.
- **labelKey** — `string | undefined; optional`: The key used to get the label from the item.
- **icon** — `any; optional`: The icon displayed in the input. Set to \`false\` to hide the icon.
- **closeIcon** — `any; optional`: The icon displayed in the close button.
- **loading** — `boolean | undefined; optional`: When \`true\`, the loading icon will be displayed.
- **autofocus** — `boolean | undefined; optional`: Automatically focus the input when component is mounted.
- **loadingIcon** — `any; optional`: The icon when the \`loading\` prop is \`true\`.
- **placeholder** — `string | undefined; optional`: The placeholder text for the input.
- **back** — `boolean | Omit<ButtonProps, LinkPropsKeys> | undefined; optional`: Display a button to navigate back in history. \`{ size: 'md', color: 'neutral', variant: 'link' }\`{lang="ts-type"}
- **descriptionKey** — `string | undefined; optional`: The key used to get the description from the item.
- **highlightOnHover** — `boolean | undefined; optional`: When \`true\`, hover over item will trigger highlight
- **selectedIcon** — `any; optional`: The icon displayed when an item is selected.
- **childrenIcon** — `any; optional`: The icon displayed when an item has children.
- **backIcon** — `any; optional`: The icon displayed in the back button.
- **groups** — `CommandPaletteGroup<CommandPaletteItem>[] | undefined; optional`
- **virtualize** — `boolean | { overscan?: number | undefined; estimateSize?: number | ((index: number) => number) | undefined; } | undefined; optional`: Enable virtualization for large lists. Note: when enabled, all groups are flattened into a single list due to a limitation of Akar
- **preserveGroupOrder** — `boolean | undefined; optional`: Whether to preserve the order of groups as defined in the \`groups\` prop when filtering. When \`false\`, groups will appear based on item matches.
- **open** — `boolean | undefined; optional; default: false`
- **searchTerm** — `string | undefined; optional; default: ""`

### Slots

- **empty** — `{ searchTerm: string; }`
- **footer** — `{ ui: { root: (props?: Record<string, any> | undefined) => string | undefined; input: (props?: Record<string, any> | undefined) => string | undefined; close: (props?: Record<string, any> | undefined) => string | undefined; back: (props?: Record<string, any> | undefined) => string | undefined; content: (props?: Record<string, any> | undefined) => string | undefined; footer: (props?: Record<string, any> | undefined) => string | undefined; viewport: (props?: Record<string, any> | undefined) => string | undefined; group: (props?: Record<string, any> | undefined) => string | undefined; empty: (props?: Record<string, any> | undefined) => string | undefined; label: (props?: Record<string, any> | undefined) => string | undefined; item: (props?: Record<string, any> | undefined) => string | undefined; itemLeadingIcon: (props?: Record<string, any> | undefined) => string | undefined; itemLeadingAvatar: (props?: Record<string, any> | undefined) => string | undefined; itemLeadingAvatarSize: (props?: Record<string, any> | undefined) => string | undefined; itemLeadingChip: (props?: Record<string, any> | undefined) => string | undefined; itemLeadingChipSize: (props?: Record<string, any> | undefined) => string | undefined; itemTrailing: (props?: Record<string, any> | undefined) => string | undefined; itemTrailingIcon: (props?: Record<string, any> | undefined) => string | undefined; itemTrailingHighlightedIcon: (props?: Record<string, any> | undefined) => string | undefined; itemTrailingKbds: (props?: Record<string, any> | undefined) => string | undefined; itemTrailingKbdsSize: (props?: Record<string, any> | undefined) => string | undefined; itemWrapper: (props?: Record<string, any> | undefined) => string | undefined; itemLabel: (props?: Record<string, any> | undefined) => string | undefined; itemLabelBase: (props?: Record<string, any> | undefined) => string | undefined; itemLabelPrefix: (props?: Record<string, any> | undefined) => string | undefined; itemLabelSuffix: (props?: Record<string, any> | undefined) => string | undefined; itemDescription: (props?: Record<string, any> | undefined) => string | undefined; }; }`
- **back** — `{ ui: { root: (props?: Record<string, any> | undefined) => string | undefined; input: (props?: Record<string, any> | undefined) => string | undefined; close: (props?: Record<string, any> | undefined) => string | undefined; back: (props?: Record<string, any> | undefined) => string | undefined; content: (props?: Record<string, any> | undefined) => string | undefined; footer: (props?: Record<string, any> | undefined) => string | undefined; viewport: (props?: Record<string, any> | undefined) => string | undefined; group: (props?: Record<string, any> | undefined) => string | undefined; empty: (props?: Record<string, any> | undefined) => string | undefined; label: (props?: Record<string, any> | undefined) => string | undefined; item: (props?: Record<string, any> | undefined) => string | undefined; itemLeadingIcon: (props?: Record<string, any> | undefined) => string | undefined; itemLeadingAvatar: (props?: Record<string, any> | undefined) => string | undefined; itemLeadingAvatarSize: (props?: Record<string, any> | undefined) => string | undefined; itemLeadingChip: (props?: Record<string, any> | undefined) => string | undefined; itemLeadingChipSize: (props?: Record<string, any> | undefined) => string | undefined; itemTrailing: (props?: Record<string, any> | undefined) => string | undefined; itemTrailingIcon: (props?: Record<string, any> | undefined) => string | undefined; itemTrailingHighlightedIcon: (props?: Record<string, any> | undefined) => string | undefined; itemTrailingKbds: (props?: Record<string, any> | undefined) => string | undefined; itemTrailingKbdsSize: (props?: Record<string, any> | undefined) => string | undefined; itemWrapper: (props?: Record<string, any> | undefined) => string | undefined; itemLabel: (props?: Record<string, any> | undefined) => string | undefined; itemLabelBase: (props?: Record<string, any> | undefined) => string | undefined; itemLabelPrefix: (props?: Record<string, any> | undefined) => string | undefined; itemLabelSuffix: (props?: Record<string, any> | undefined) => string | undefined; itemDescription: (props?: Record<string, any> | undefined) => string | undefined; }; }`
- **close** — `{ ui: { root: (props?: Record<string, any> | undefined) => string | undefined; input: (props?: Record<string, any> | undefined) => string | undefined; close: (props?: Record<string, any> | undefined) => string | undefined; back: (props?: Record<string, any> | undefined) => string | undefined; content: (props?: Record<string, any> | undefined) => string | undefined; footer: (props?: Record<string, any> | undefined) => string | undefined; viewport: (props?: Record<string, any> | undefined) => string | undefined; group: (props?: Record<string, any> | undefined) => string | undefined; empty: (props?: Record<string, any> | undefined) => string | undefined; label: (props?: Record<string, any> | undefined) => string | undefined; item: (props?: Record<string, any> | undefined) => string | undefined; itemLeadingIcon: (props?: Record<string, any> | undefined) => string | undefined; itemLeadingAvatar: (props?: Record<string, any> | undefined) => string | undefined; itemLeadingAvatarSize: (props?: Record<string, any> | undefined) => string | undefined; itemLeadingChip: (props?: Record<string, any> | undefined) => string | undefined; itemLeadingChipSize: (props?: Record<string, any> | undefined) => string | undefined; itemTrailing: (props?: Record<string, any> | undefined) => string | undefined; itemTrailingIcon: (props?: Record<string, any> | undefined) => string | undefined; itemTrailingHighlightedIcon: (props?: Record<string, any> | undefined) => string | undefined; itemTrailingKbds: (props?: Record<string, any> | undefined) => string | undefined; itemTrailingKbdsSize: (props?: Record<string, any> | undefined) => string | undefined; itemWrapper: (props?: Record<string, any> | undefined) => string | undefined; itemLabel: (props?: Record<string, any> | undefined) => string | undefined; itemLabelBase: (props?: Record<string, any> | undefined) => string | undefined; itemLabelPrefix: (props?: Record<string, any> | undefined) => string | undefined; itemLabelSuffix: (props?: Record<string, any> | undefined) => string | undefined; itemDescription: (props?: Record<string, any> | undefined) => string | undefined; }; }`
- **item** — `{ item: CommandPaletteItem; index: number; ui: { root: (props?: Record<string, any> | undefined) => string | undefined; input: (props?: Record<string, any> | undefined) => string | undefined; close: (props?: Record<string, any> | undefined) => string | undefined; back: (props?: Record<string, any> | undefined) => string | undefined; content: (props?: Record<string, any> | undefined) => string | undefined; footer: (props?: Record<string, any> | undefined) => string | undefined; viewport: (props?: Record<string, any> | undefined) => string | undefined; group: (props?: Record<string, any> | undefined) => string | undefined; empty: (props?: Record<string, any> | undefined) => string | undefined; label: (props?: Record<string, any> | undefined) => string | undefined; item: (props?: Record<string, any> | undefined) => string | undefined; itemLeadingIcon: (props?: Record<string, any> | undefined) => string | undefined; itemLeadingAvatar: (props?: Record<string, any> | undefined) => string | undefined; itemLeadingAvatarSize: (props?: Record<string, any> | undefined) => string | undefined; itemLeadingChip: (props?: Record<string, any> | undefined) => string | undefined; itemLeadingChipSize: (props?: Record<string, any> | undefined) => string | undefined; itemTrailing: (props?: Record<string, any> | undefined) => string | undefined; itemTrailingIcon: (props?: Record<string, any> | undefined) => string | undefined; itemTrailingHighlightedIcon: (props?: Record<string, any> | undefined) => string | undefined; itemTrailingKbds: (props?: Record<string, any> | undefined) => string | undefined; itemTrailingKbdsSize: (props?: Record<string, any> | undefined) => string | undefined; itemWrapper: (props?: Record<string, any> | undefined) => string | undefined; itemLabel: (props?: Record<string, any> | undefined) => string | undefined; itemLabelBase: (props?: Record<string, any> | undefined) => string | undefined; itemLabelPrefix: (props?: Record<string, any> | undefined) => string | undefined; itemLabelSuffix: (props?: Record<string, any> | undefined) => string | undefined; itemDescription: (props?: Record<string, any> | undefined) => string | undefined; }; }`
- **item-leading** — `{ item: CommandPaletteItem; index: number; ui: { root: (props?: Record<string, any> | undefined) => string | undefined; input: (props?: Record<string, any> | undefined) => string | undefined; close: (props?: Record<string, any> | undefined) => string | undefined; back: (props?: Record<string, any> | undefined) => string | undefined; content: (props?: Record<string, any> | undefined) => string | undefined; footer: (props?: Record<string, any> | undefined) => string | undefined; viewport: (props?: Record<string, any> | undefined) => string | undefined; group: (props?: Record<string, any> | undefined) => string | undefined; empty: (props?: Record<string, any> | undefined) => string | undefined; label: (props?: Record<string, any> | undefined) => string | undefined; item: (props?: Record<string, any> | undefined) => string | undefined; itemLeadingIcon: (props?: Record<string, any> | undefined) => string | undefined; itemLeadingAvatar: (props?: Record<string, any> | undefined) => string | undefined; itemLeadingAvatarSize: (props?: Record<string, any> | undefined) => string | undefined; itemLeadingChip: (props?: Record<string, any> | undefined) => string | undefined; itemLeadingChipSize: (props?: Record<string, any> | undefined) => string | undefined; itemTrailing: (props?: Record<string, any> | undefined) => string | undefined; itemTrailingIcon: (props?: Record<string, any> | undefined) => string | undefined; itemTrailingHighlightedIcon: (props?: Record<string, any> | undefined) => string | undefined; itemTrailingKbds: (props?: Record<string, any> | undefined) => string | undefined; itemTrailingKbdsSize: (props?: Record<string, any> | undefined) => string | undefined; itemWrapper: (props?: Record<string, any> | undefined) => string | undefined; itemLabel: (props?: Record<string, any> | undefined) => string | undefined; itemLabelBase: (props?: Record<string, any> | undefined) => string | undefined; itemLabelPrefix: (props?: Record<string, any> | undefined) => string | undefined; itemLabelSuffix: (props?: Record<string, any> | undefined) => string | undefined; itemDescription: (props?: Record<string, any> | undefined) => string | undefined; }; }`
- **item-label** — `{ item: CommandPaletteItem; index: number; ui: { root: (props?: Record<string, any> | undefined) => string | undefined; input: (props?: Record<string, any> | undefined) => string | undefined; close: (props?: Record<string, any> | undefined) => string | undefined; back: (props?: Record<string, any> | undefined) => string | undefined; content: (props?: Record<string, any> | undefined) => string | undefined; footer: (props?: Record<string, any> | undefined) => string | undefined; viewport: (props?: Record<string, any> | undefined) => string | undefined; group: (props?: Record<string, any> | undefined) => string | undefined; empty: (props?: Record<string, any> | undefined) => string | undefined; label: (props?: Record<string, any> | undefined) => string | undefined; item: (props?: Record<string, any> | undefined) => string | undefined; itemLeadingIcon: (props?: Record<string, any> | undefined) => string | undefined; itemLeadingAvatar: (props?: Record<string, any> | undefined) => string | undefined; itemLeadingAvatarSize: (props?: Record<string, any> | undefined) => string | undefined; itemLeadingChip: (props?: Record<string, any> | undefined) => string | undefined; itemLeadingChipSize: (props?: Record<string, any> | undefined) => string | undefined; itemTrailing: (props?: Record<string, any> | undefined) => string | undefined; itemTrailingIcon: (props?: Record<string, any> | undefined) => string | undefined; itemTrailingHighlightedIcon: (props?: Record<string, any> | undefined) => string | undefined; itemTrailingKbds: (props?: Record<string, any> | undefined) => string | undefined; itemTrailingKbdsSize: (props?: Record<string, any> | undefined) => string | undefined; itemWrapper: (props?: Record<string, any> | undefined) => string | undefined; itemLabel: (props?: Record<string, any> | undefined) => string | undefined; itemLabelBase: (props?: Record<string, any> | undefined) => string | undefined; itemLabelPrefix: (props?: Record<string, any> | undefined) => string | undefined; itemLabelSuffix: (props?: Record<string, any> | undefined) => string | undefined; itemDescription: (props?: Record<string, any> | undefined) => string | undefined; }; }`
- **item-description** — `{ item: CommandPaletteItem; index: number; ui: { root: (props?: Record<string, any> | undefined) => string | undefined; input: (props?: Record<string, any> | undefined) => string | undefined; close: (props?: Record<string, any> | undefined) => string | undefined; back: (props?: Record<string, any> | undefined) => string | undefined; content: (props?: Record<string, any> | undefined) => string | undefined; footer: (props?: Record<string, any> | undefined) => string | undefined; viewport: (props?: Record<string, any> | undefined) => string | undefined; group: (props?: Record<string, any> | undefined) => string | undefined; empty: (props?: Record<string, any> | undefined) => string | undefined; label: (props?: Record<string, any> | undefined) => string | undefined; item: (props?: Record<string, any> | undefined) => string | undefined; itemLeadingIcon: (props?: Record<string, any> | undefined) => string | undefined; itemLeadingAvatar: (props?: Record<string, any> | undefined) => string | undefined; itemLeadingAvatarSize: (props?: Record<string, any> | undefined) => string | undefined; itemLeadingChip: (props?: Record<string, any> | undefined) => string | undefined; itemLeadingChipSize: (props?: Record<string, any> | undefined) => string | undefined; itemTrailing: (props?: Record<string, any> | undefined) => string | undefined; itemTrailingIcon: (props?: Record<string, any> | undefined) => string | undefined; itemTrailingHighlightedIcon: (props?: Record<string, any> | undefined) => string | undefined; itemTrailingKbds: (props?: Record<string, any> | undefined) => string | undefined; itemTrailingKbdsSize: (props?: Record<string, any> | undefined) => string | undefined; itemWrapper: (props?: Record<string, any> | undefined) => string | undefined; itemLabel: (props?: Record<string, any> | undefined) => string | undefined; itemLabelBase: (props?: Record<string, any> | undefined) => string | undefined; itemLabelPrefix: (props?: Record<string, any> | undefined) => string | undefined; itemLabelSuffix: (props?: Record<string, any> | undefined) => string | undefined; itemDescription: (props?: Record<string, any> | undefined) => string | undefined; }; }`
- **item-trailing** — `{ item: CommandPaletteItem; index: number; ui: { root: (props?: Record<string, any> | undefined) => string | undefined; input: (props?: Record<string, any> | undefined) => string | undefined; close: (props?: Record<string, any> | undefined) => string | undefined; back: (props?: Record<string, any> | undefined) => string | undefined; content: (props?: Record<string, any> | undefined) => string | undefined; footer: (props?: Record<string, any> | undefined) => string | undefined; viewport: (props?: Record<string, any> | undefined) => string | undefined; group: (props?: Record<string, any> | undefined) => string | undefined; empty: (props?: Record<string, any> | undefined) => string | undefined; label: (props?: Record<string, any> | undefined) => string | undefined; item: (props?: Record<string, any> | undefined) => string | undefined; itemLeadingIcon: (props?: Record<string, any> | undefined) => string | undefined; itemLeadingAvatar: (props?: Record<string, any> | undefined) => string | undefined; itemLeadingAvatarSize: (props?: Record<string, any> | undefined) => string | undefined; itemLeadingChip: (props?: Record<string, any> | undefined) => string | undefined; itemLeadingChipSize: (props?: Record<string, any> | undefined) => string | undefined; itemTrailing: (props?: Record<string, any> | undefined) => string | undefined; itemTrailingIcon: (props?: Record<string, any> | undefined) => string | undefined; itemTrailingHighlightedIcon: (props?: Record<string, any> | undefined) => string | undefined; itemTrailingKbds: (props?: Record<string, any> | undefined) => string | undefined; itemTrailingKbdsSize: (props?: Record<string, any> | undefined) => string | undefined; itemWrapper: (props?: Record<string, any> | undefined) => string | undefined; itemLabel: (props?: Record<string, any> | undefined) => string | undefined; itemLabelBase: (props?: Record<string, any> | undefined) => string | undefined; itemLabelPrefix: (props?: Record<string, any> | undefined) => string | undefined; itemLabelSuffix: (props?: Record<string, any> | undefined) => string | undefined; itemDescription: (props?: Record<string, any> | undefined) => string | undefined; }; }`
- **group-label** — `{ group: CommandPaletteGroup<CommandPaletteItem>; label: string; ui: { root: (props?: Record<string, any> | undefined) => string | undefined; input: (props?: Record<string, any> | undefined) => string | undefined; close: (props?: Record<string, any> | undefined) => string | undefined; back: (props?: Record<string, any> | undefined) => string | undefined; content: (props?: Record<string, any> | undefined) => string | undefined; footer: (props?: Record<string, any> | undefined) => string | undefined; viewport: (props?: Record<string, any> | undefined) => string | undefined; group: (props?: Record<string, any> | undefined) => string | undefined; empty: (props?: Record<string, any> | undefined) => string | undefined; label: (props?: Record<string, any> | undefined) => string | undefined; item: (props?: Record<string, any> | undefined) => string | undefined; itemLeadingIcon: (props?: Record<string, any> | undefined) => string | undefined; itemLeadingAvatar: (props?: Record<string, any> | undefined) => string | undefined; itemLeadingAvatarSize: (props?: Record<string, any> | undefined) => string | undefined; itemLeadingChip: (props?: Record<string, any> | undefined) => string | undefined; itemLeadingChipSize: (props?: Record<string, any> | undefined) => string | undefined; itemTrailing: (props?: Record<string, any> | undefined) => string | undefined; itemTrailingIcon: (props?: Record<string, any> | undefined) => string | undefined; itemTrailingHighlightedIcon: (props?: Record<string, any> | undefined) => string | undefined; itemTrailingKbds: (props?: Record<string, any> | undefined) => string | undefined; itemTrailingKbdsSize: (props?: Record<string, any> | undefined) => string | undefined; itemWrapper: (props?: Record<string, any> | undefined) => string | undefined; itemLabel: (props?: Record<string, any> | undefined) => string | undefined; itemLabelBase: (props?: Record<string, any> | undefined) => string | undefined; itemLabelPrefix: (props?: Record<string, any> | undefined) => string | undefined; itemLabelSuffix: (props?: Record<string, any> | undefined) => string | undefined; itemDescription: (props?: Record<string, any> | undefined) => string | undefined; }; }`
- **content** — `{ close: () => void; }`

### Events

- **update:open** — `[value: boolean]`
- **update:searchTerm** — `[value: string]`
