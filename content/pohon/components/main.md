---
title: "Main"
description: "A main element that fills the available viewport height."
package: pohon
sourceTag: "v2.0.1"
sourceCommit: "ee987babf834bae617d75a9c6b9347bba1a494df"
sourceUrl: "https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/docs/content/docs/2.components/main.md"
---
## Usage

The Main component renders a `<main>` element that works together with the [Header](/pohon/components/header) component to create a full-height layout that extends to the viewport's available height.

> [!TIP]
> See: /docs/getting-started/theme/css-variables#header
> 
> The Main component uses the `--ui-header-height` CSS variable to position itself correctly below the `Header`.

## Examples

### Within `app.vue`

Use the Main component in your `app.vue` or in a layout:

```vue [app.vue]
<template>
  <PApp>
    <PHeader />

    <PMain>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </PMain>

    <PFooter />
  </PApp>
</template>
```

## API

### Props

### Slots

## Theme

```ts [app.config.ts]
export default defineAppConfig({
  ui: {
    main: {
      base: 'min-h-[calc(100vh-var(--ui-header-height))]'
    }
  }
})
```

## Changelog

See commit history for [component](https://github.com/vinicunca/pohon/commits/main/src/runtime/components/Main.vue) and [theme](https://github.com/vinicunca/pohon/commits/main/src/theme/main.ts).

---

- [GitHub](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/Main.vue)


## Sitemap

See the full [sitemap](https://pohon.vinicunca.dev/sitemap.md) for all pages.

## Generated component API

[Main source](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/Main.vue)

### Props

- **as** — `any; optional; default: "main"`: The element or component this component should render as.
- **ui** — `{ base?: any; } | undefined; optional`

### Slots

- **default** — `{} | undefined`

### Events

No events are declared.
