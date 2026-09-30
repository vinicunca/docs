---
title: "PageFeature"
description: "A component to showcase key features of your application."
package: pohon
sourceTag: "v2.0.1"
sourceCommit: "ee987babf834bae617d75a9c6b9347bba1a494df"
sourceUrl: "https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/docs/content/docs/2.components/page-feature.md"
---
## Usage

The PageFeature component is used by the [PageSection](/pohon/components/page-section) component to display [features](/pohon/components/page-section#features).

### Title

Use the `title` prop to set the title of the feature.

```vue
<template>
  <UPageFeature title="Theme" />
</template>
```

### Description

Use the `description` prop to set the description of the feature.

```vue
<template>
  <UPageFeature title="Theme" description="Customize Pohon UI with your own colors, fonts, and more." />
</template>
```

### Icon

Use the `icon` prop to set the icon of the feature.

```vue
<template>
  <UPageFeature title="Theme" description="Customize Pohon UI with your own colors, fonts, and more." icon="i-lucide-swatch-book" />
</template>
```

### Link

You can pass any property from the [`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link) component such as `to`, `target`, `rel`, etc.

```vue
<template>
  <UPageFeature title="Theme" description="Customize Pohon UI with your own colors, fonts, and more." icon="i-lucide-swatch-book" to="/pohon/getting-started/theme/design-system" target="_blank" />
</template>
```

### Orientation

Use the `orientation` prop to change the orientation of the feature. Defaults to `horizontal`.

```vue
<template>
  <UPageFeature orientation="vertical" title="Theme" description="Customize Pohon UI with your own colors, fonts, and more." icon="i-lucide-swatch-book" />
</template>
```

## API

### Props

### Slots

## Theme

```ts [app.config.ts]
export default defineAppConfig({
  ui: {
    pageFeature: {
      slots: {
        root: 'relative rounded-sm',
        wrapper: '',
        leading: 'inline-flex items-center justify-center',
        leadingIcon: 'size-5 shrink-0 color-primary',
        title: 'text-base text-pretty font-600 color-text-highlighted',
        description: 'text-[15px] text-pretty color-text-muted'
      },
      variants: {
        orientation: {
          horizontal: {
            root: 'flex items-start gap-2.5',
            leading: 'p-0.5'
          },
          vertical: {
            leading: 'mb-2.5'
          }
        },
        to: {
          true: {
            root: [
              'outline-primary/25 has-focus-visible:outline-3',
              'transition'
            ]
          }
        },
        title: {
          true: {
            description: 'mt-1'
          }
        }
      }
    }
  }
})
```

## Changelog

See commit history for [component](https://github.com/vinicunca/pohon/commits/main/src/runtime/components/PageFeature.vue) and [theme](https://github.com/vinicunca/pohon/commits/main/src/theme/page-feature.ts).

---

- [GitHub](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/PageFeature.vue)


## Sitemap

See the full [sitemap](https://pohon.vinicunca.dev/sitemap.md) for all pages.

## Generated component API

[PageFeature source](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/PageFeature.vue)

### Props

- **as** — `any; optional`: The element or component this component should render as.
- **icon** — `any; optional`: The icon displayed next to the title when \`orientation\` is \`horizontal\` and above the title when \`orientation\` is \`vertical\`.
- **title** — `string | undefined; optional`
- **description** — `string | undefined; optional`
- **orientation** — `"vertical" | "horizontal" | undefined; optional; default: "horizontal"`: The orientation of the page feature.
- **to** — `string | it | et | undefined; optional`
- **target** — `(string & {}) | "_blank" | "_parent" | "_self" | "_top" | null | undefined; optional`
- **onClick** — `((event: MouseEvent) => void) | undefined; optional`
- **ui** — `{ root?: SlotClass; wrapper?: SlotClass; leading?: SlotClass; leadingIcon?: SlotClass; title?: SlotClass; description?: SlotClass; } | undefined; optional`

### Slots

- **leading** — `{ ui: { root: (props?: Record<string, any> | undefined) => string | undefined; wrapper: (props?: Record<string, any> | undefined) => string | undefined; leading: (props?: Record<string, any> | undefined) => string | undefined; leadingIcon: (props?: Record<string, any> | undefined) => string | undefined; title: (props?: Record<string, any> | undefined) => string | undefined; description: (props?: Record<string, any> | undefined) => string | undefined; }; }`
- **title** — `{} | undefined`
- **description** — `{} | undefined`
- **default** — `{} | undefined`

### Events

No events are declared.
