---
title: "ProseKbd"
description: "Display keyboard shortcuts and key combinations with proper styling."
package: pohon
sourceTag: "v2.0.1"
sourceCommit: "ee987babf834bae617d75a9c6b9347bba1a494df"
sourceUrl: "https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/docs/content/docs/4.typography/kbd.md"
---
## Usage

Use the `kbd` component to display a [Kbd](/pohon/components/kbd) in your content.

```mdc
:kbd{value="meta"} :kbd{value="K"}
```

## API

### Props

```ts
/**
 * Props for the ProseProseKbd component
 */
interface ProseProseKbdProps {
  value?: string | undefined;
  ui?: { base?: any; } | undefined;
}
```

### Slots

```ts
/**
 * Slots for the ProseKbd component
 */
interface ProseKbdSlots {
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

See commit history for [component](https://github.com/vinicunca/pohon/commits/main/src/runtime/components/prose/ProseKbd.vue) and [theme](https://github.com/vinicunca/pohon/commits/main/src/theme/prose/prose-kbd.ts).

---

- [GitHub](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/prose/Kbd.vue)


## Sitemap

See the full [sitemap](https://pohon.vinicunca.dev/sitemap.md) for all pages.
