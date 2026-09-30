---
title: "ProseCardGroup"
description: "Organize multiple cards in responsive grid layouts for better content presentation."
package: pohon
sourceTag: "v2.0.1"
sourceCommit: "ee987babf834bae617d75a9c6b9347bba1a494df"
sourceUrl: "https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/docs/content/docs/4.typography/card-group.md"
---
## Usage

Wrap your `card` components with the `card-group` component to group them together in a grid layout.

```mdc
::card-group

::card
---
title: Dashboard
icon: i-simple-icons-github
to: https://github.com/vinicunca/pohon/tree/ee987babf834bae617d75a9c6b9347bba1a494df/playgrounds/nuxt
target: _blank
---
A dashboard with multi-column layout.
::

::card
---
title: SaaS
icon: i-simple-icons-github
to: https://github.com/vinicunca/pohon/tree/ee987babf834bae617d75a9c6b9347bba1a494df/playgrounds/nuxt
target: _blank
---
A template with landing, pricing, docs and blog.
::

::card
---
title: Docs
icon: i-simple-icons-github
to: https://github.com/vinicunca/pohon/tree/ee987babf834bae617d75a9c6b9347bba1a494df/playgrounds/nuxt
target: _blank
---
A documentation with `@nuxt/content`.
::

::card
---
title: Landing
icon: i-simple-icons-github
to: https://github.com/vinicunca/pohon/tree/ee987babf834bae617d75a9c6b9347bba1a494df/playgrounds/nuxt
target: _blank
---
A landing page you can use as starting point.
::

::
```

## API

### Props

```ts
/**
 * Props for the ProseProseCardGroup component
 */
interface ProseProseCardGroupProps {
  ui?: { base?: any; } | undefined;
}
```

### Slots

```ts
/**
 * Slots for the ProseCardGroup component
 */
interface ProseCardGroupSlots {
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

See commit history for [component](https://github.com/vinicunca/pohon/commits/main/src/runtime/components/prose/ProseCardGroup.vue) and [theme](https://github.com/vinicunca/pohon/commits/main/src/theme/prose/prose-card-group.ts).

---

- [GitHub](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/prose/CardGroup.vue)


## Sitemap

See the full [sitemap](https://pohon.vinicunca.dev/sitemap.md) for all pages.
