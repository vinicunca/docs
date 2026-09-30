---
title: "ProseCodePreview"
description: "Display code examples with a preview and their source for clearer documentation."
package: pohon
sourceTag: "v2.0.1"
sourceCommit: "ee987babf834bae617d75a9c6b9347bba1a494df"
sourceUrl: "https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/docs/content/docs/4.typography/code-preview.md"
---
## Usage

Wrap any content with the `code-preview` component to display a live preview alongside its source code using the `code` slot.

````mdc
::code-preview
`inline code`

#code
```mdc
`inline code`
```
::
````

## API

### Props

```ts
/**
 * Props for the ProseProseCodePreview component
 */
interface ProseProseCodePreviewProps {
  ui?: { root?: SlotClass; preview?: SlotClass; code?: SlotClass; } | undefined;
}
```

### Slots

```ts
/**
 * Slots for the ProseCodePreview component
 */
interface ProseCodePreviewSlots {
  default(): any;
  code(): any;
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

See commit history for [component](https://github.com/vinicunca/pohon/commits/main/src/runtime/components/prose/ProseCodePreview.vue) and [theme](https://github.com/vinicunca/pohon/commits/main/src/theme/prose/prose-code-preview.ts).

---

- [GitHub](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/prose/CodePreview.vue)


## Sitemap

See the full [sitemap](https://pohon.vinicunca.dev/sitemap.md) for all pages.
