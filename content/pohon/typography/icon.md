---
title: "ProseIcon"
description: "Display icons from popular icon libraries to enhance your content."
package: pohon
sourceTag: "v2.0.1"
sourceCommit: "ee987babf834bae617d75a9c6b9347bba1a494df"
sourceUrl: "https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/docs/content/docs/4.typography/icon.md"
---
## Usage

Use the `icon` component to display an [Icon](/pohon/components/icon) in your content.

```mdc
:icon{name="i-simple-icons-nuxtdotjs"}
```

## API

### Props

```ts
/**
 * Props for the ProseProseIcon component
 */
interface ProseProseIconProps {
  name: string;
  ui?: { base?: any; } | undefined;
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

See commit history for [component](https://github.com/vinicunca/pohon/commits/main/src/runtime/components/prose/ProseIcon.vue) and [theme](https://github.com/vinicunca/pohon/commits/main/src/theme/prose/prose-icon.ts).

---

- [GitHub](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/prose/Icon.vue)


## Sitemap

See the full [sitemap](https://pohon.vinicunca.dev/sitemap.md) for all pages.
