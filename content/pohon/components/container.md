---
title: "Container"
description: "A layout element to center and constrain the width of your content."
package: pohon
sourceTag: "v2.0.1"
sourceCommit: "ee987babf834bae617d75a9c6b9347bba1a494df"
sourceUrl: "https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/docs/content/docs/2.components/container.md"
---
## Usage

Use the default slot to center and constrain the width of your content.

> [!TIP]
> See: /docs/getting-started/theme/css-variables#container
> 
> Its max width is controlled by the `--ui-container` CSS variable.

```vue [ContainerExample.vue]
<template>
  <PContainer>
    <Placeholder class="h-32" />
  </PContainer>
</template>
```

## API

### Props

### Slots

## Theme

```ts [app.config.ts]
export default defineAppConfig({
  ui: {
    container: {
      base: 'w-full max-w-(--ui-container) mx-auto px-4 sm:px-6 lg:px-8'
    }
  }
})
```

## Changelog

See commit history for [component](https://github.com/vinicunca/pohon/commits/main/src/runtime/components/Container.vue) and [theme](https://github.com/vinicunca/pohon/commits/main/src/theme/container.ts).

---

- [GitHub](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/Container.vue)


## Sitemap

See the full [sitemap](https://pohon.vinicunca.dev/sitemap.md) for all pages.

## Generated component API

[Container source](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/Container.vue)

### Props

- **as** — `any; optional`: The element or component this component should render as.
- **ui** — `{ base?: any; } | undefined; optional`

### Slots

- **default** — `{} | undefined`

### Events

No events are declared.
