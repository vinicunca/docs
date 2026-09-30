---
title: "ProseCard"
description: "Create highlighted content blocks with optional links and navigation."
package: pohon
sourceTag: "v2.0.1"
sourceCommit: "ee987babf834bae617d75a9c6b9347bba1a494df"
sourceUrl: "https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/docs/content/docs/4.typography/card.md"
---
## Usage

Use markdown in the default slot of the `card` component to highlight your content.

Use the `title`, `icon` and `color` props to customize it. You can also pass any property from the [`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link) or [`<RouterLink>`](https://router.vuejs.org/api/interfaces/RouterLinkProps.html) component.

```mdc
::card{title="Startup" icon="i-lucide-users" color="primary" to="https://nuxt.lemonsqueezy.com" target="_blank"}
Best suited for small teams, startups and agencies with up to 5 developers.
::
```

## API

### Props

```ts
/**
 * Props for the ProseProseCard component
 */
interface ProseProseCardProps {
  to?: string | it | et | undefined;
  target?: null | "_blank" | "_parent" | "_self" | "_top" | string & {} | undefined;
  icon?: any;
  title?: string | undefined;
  description?: string | undefined;
  /**
   * @default 'primary'
   */
  color?: "error" | "primary" | "secondary" | "success" | "info" | "warning" | "neutral" | undefined;
  ui?: { base?: SlotClass; icon?: SlotClass; title?: SlotClass; description?: SlotClass; externalIcon?: SlotClass; } | undefined;
}
```

### Slots

```ts
/**
 * Slots for the ProseCard component
 */
interface ProseCardSlots {
  default(): any;
  title(): any;
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

See commit history for [component](https://github.com/vinicunca/pohon/commits/main/src/runtime/components/prose/ProseCard.vue) and [theme](https://github.com/vinicunca/pohon/commits/main/src/theme/prose/prose-card.ts).

---

- [GitHub](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/prose/Card.vue)


## Sitemap

See the full [sitemap](https://pohon.vinicunca.dev/sitemap.md) for all pages.
