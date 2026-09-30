---
title: "ProseTabs"
description: "Organize related content in interactive tabbed interfaces."
package: pohon
sourceTag: "v2.0.1"
sourceCommit: "ee987babf834bae617d75a9c6b9347bba1a494df"
sourceUrl: "https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/docs/content/docs/4.typography/tabs.md"
---
## Usage

Use the `tabs` and `tabs-item` components to display [Tabs](/pohon/components/tabs) in your content.

````mdc
::tabs

:::tabs-item{label="Code" icon="i-lucide-code"}

```mdc
::callout
Lorem velit voluptate ex reprehenderit ullamco et culpa.
::
```

:::

:::tabs-item{label="Preview" icon="i-lucide-eye"}

::callout
Lorem velit voluptate ex reprehenderit ullamco et culpa.
::

:::

::
````

## API

### Props

```ts
/**
 * Props for the ProseProseTabs component
 */
interface ProseProseTabsProps {
  /**
   * The default tab to select.
   * @default '0'
   */
  defaultValue?: string | undefined;
  /**
   * Sync the selected tab with a local storage key.
   */
  sync?: string | undefined;
  /**
   * The hash to scroll to when the tab is selected.
   */
  hash?: string | undefined;
  ui?: { root?: SlotClass; } & { root?: SlotClass; list?: SlotClass; indicator?: SlotClass; trigger?: SlotClass; leadingIcon?: SlotClass; leadingAvatar?: SlotClass; leadingAvatarSize?: SlotClass; label?: SlotClass; trailingBadge?: SlotClass; trailingBadgeSize?: SlotClass; content?: SlotClass; } | undefined;
  modelValue?: string | undefined;
}
```

### Slots

```ts
/**
 * Slots for the ProseTabs component
 */
interface ProseTabsSlots {
  default(): any;
}
```

## Theme

```ts [app.config.ts]
export default defineAppConfig({
  ui: {
    prose: {}
  }
})
```

## Changelog

See commit history for [component](https://github.com/vinicunca/pohon/commits/main/src/runtime/components/prose/ProseTabs.vue) and [theme](https://github.com/vinicunca/pohon/commits/main/src/theme/prose/prose-tabs.ts).

---

- [GitHub](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/prose/Tabs.vue)


## Sitemap

See the full [sitemap](https://pohon.vinicunca.dev/sitemap.md) for all pages.
