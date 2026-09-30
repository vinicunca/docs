---
title: "ProseCodeGroup"
description: "Group multiple code examples in tabbed interfaces for easy comparison."
package: pohon
sourceTag: "v2.0.1"
sourceCommit: "ee987babf834bae617d75a9c6b9347bba1a494df"
sourceUrl: "https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/docs/content/docs/4.typography/code-group.md"
---
## Usage

Wrap your code blocks around a `code-group` component to group them together in tabs.

````mdc
::code-group

```bash [pnpm]
pnpm add pohon-ui
```

```bash [yarn]
yarn add pohon-ui
```

```bash [npm]
npm install pohon-ui
```

```bash [bun]
bun add pohon-ui
```

::
````

> [!NOTE]
> See: /docs/typography/code#code-blocks
> 
> Like the `ProsePre` component, the `CodeGroup` handles filenames, icons and copy button.

## API

### Props

```ts
/**
 * Props for the ProseProseCodeGroup component
 */
interface ProseProseCodeGroupProps {
  /**
   * The default tab to select.
   * @default '0'
   */
  defaultValue?: string | undefined;
  /**
   * Sync the selected tab with a local storage key.
   */
  sync?: string | undefined;
  ui?: { root?: SlotClass; list?: SlotClass; indicator?: SlotClass; trigger?: SlotClass; triggerIcon?: SlotClass; triggerLabel?: SlotClass; } | undefined;
  modelValue?: string | undefined;
}
```

### Slots

```ts
/**
 * Slots for the ProseCodeGroup component
 */
interface ProseCodeGroupSlots {
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

See commit history for [component](https://github.com/vinicunca/pohon/commits/main/src/runtime/components/prose/ProseCodeGroup.vue) and [theme](https://github.com/vinicunca/pohon/commits/main/src/theme/prose/prose-code-group.ts).

---

- [GitHub](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/prose/CodeGroup.vue)


## Sitemap

See the full [sitemap](https://pohon.vinicunca.dev/sitemap.md) for all pages.
