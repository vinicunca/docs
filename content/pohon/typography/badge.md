---
title: "ProseBadge"
description: "Display version numbers, status labels, and tags within your content."
package: pohon
sourceTag: "v2.0.1"
sourceCommit: "ee987babf834bae617d75a9c6b9347bba1a494df"
sourceUrl: "https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/docs/content/docs/4.typography/badge.md"
---
## Usage

Use markdown in the default slot of the `badge` component to display a [Badge](/pohon/components/badge) in your content.

```mdc
::badge
**v2.0.0**
::
```

## API

### Props

```ts
/**
 * Props for the ProseProseBadge component
 */
interface ProseProseBadgeProps {
  ui?: { base?: any; } | undefined;
}
```

### Slots

```ts
/**
 * Slots for the ProseBadge component
 */
interface ProseBadgeSlots {
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

See commit history for [component](https://github.com/vinicunca/pohon/commits/main/src/runtime/components/prose/ProseBadge.vue) and [theme](https://github.com/vinicunca/pohon/commits/main/src/theme/prose/prose-badge.ts).

---

- [GitHub](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/prose/Badge.vue)


## Sitemap

See the full [sitemap](https://pohon.vinicunca.dev/sitemap.md) for all pages.
