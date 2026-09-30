---
title: "PageLogos"
description: "A list of logos or images to display on your pages."
package: pohon
sourceTag: "v2.0.1"
sourceCommit: "ee987babf834bae617d75a9c6b9347bba1a494df"
sourceUrl: "https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/docs/content/docs/2.components/page-logos.md"
---
## Usage

The PageLogos component provides a flexible way to display a list of logos or images in your pages.

```vue
<template>
  <UPageLogos :items="[
  'i-simple-icons-github',
  'i-simple-icons-discord',
  'i-simple-icons-x',
  'i-simple-icons-instagram',
  'i-simple-icons-linkedin',
  'i-simple-icons-facebook'
]" />
</template>
```

### Title

Use the `title` prop to set the title above the logos.

```vue
<template>
  <UPageLogos title="Trusted by the best front-end teams" :items="[
  'i-simple-icons-github',
  'i-simple-icons-discord',
  'i-simple-icons-x',
  'i-simple-icons-instagram',
  'i-simple-icons-linkedin',
  'i-simple-icons-facebook'
]" />
</template>
```

### Items

You can display logos in two ways:

1. Using the `items` prop to provide a list of logos. Each item can be either:

- An icon name (e.g. `i-simple-icons-github`)
- An object containing `src` and `alt` properties for images, which will be utilized in a `PAvatar` component

1. Using the default slot to have complete control over the content

```vue [PageLogosWithItems.vue]
<script setup lang="ts">
const items = [
  'i-simple-icons-github',
  'i-simple-icons-discord',
  'i-simple-icons-x',
  'i-simple-icons-instagram',
  'i-simple-icons-linkedin',
  'i-simple-icons-facebook'
]
</script>

<template>
  <PPageLogos title="Trusted by the best front-end teams" :items="items" />
</template>
```

```vue [PageLogosWithSlot.vue]
<template>
  <PPageLogos title="Trusted by the best front-end teams">
    <PIcon name="i-simple-icons-github" class="size-10 shrink-0" />
    <PIcon name="i-simple-icons-discord" class="size-10 shrink-0" />
    <PIcon name="i-simple-icons-x" class="size-10 shrink-0" />
    <PIcon name="i-simple-icons-instagram" class="size-10 shrink-0" />
    <PIcon name="i-simple-icons-linkedin" class="size-10 shrink-0" />
    <PIcon name="i-simple-icons-facebook" class="size-10 shrink-0" />
  </PPageLogos>
</template>
```

### Marquee

Use the `marquee` prop to enable a marquee effect for the logos.

```vue
<template>
  <UPageLogos title="Trusted by the best front-end teams" marquee :items="[
  'i-simple-icons-github',
  'i-simple-icons-discord',
  'i-simple-icons-x',
  'i-simple-icons-instagram',
  'i-simple-icons-linkedin',
  'i-simple-icons-facebook'
]" />
</template>
```

> [!NOTE]
> See: /docs/components/marquee
> 
> When you use `marquee` mode, you can customize its behavior by passing props. For more info, check out the `Marquee` component.

## API

### Props

### Slots

## Theme

```ts [app.config.ts]
export default defineAppConfig({
  ui: {
    pageLogos: {
      slots: {
        root: 'relative overflow-hidden',
        title: 'text-lg text-center font-600 color-text-highlighted',
        logos: 'mt-10',
        logo: 'size-10 shrink-0'
      },
      variants: {
        marquee: {
          false: {
            logos: 'flex items-center shrink-0 justify-around gap-(--gap) [--gap:--spacing(16)]'
          }
        }
      }
    }
  }
})
```

## Changelog

See commit history for [component](https://github.com/vinicunca/pohon/commits/main/src/runtime/components/PageLogos.vue) and [theme](https://github.com/vinicunca/pohon/commits/main/src/theme/page-logos.ts).

---

- [GitHub](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/PageLogos.vue)


## Sitemap

See the full [sitemap](https://pohon.vinicunca.dev/sitemap.md) for all pages.

## Generated component API

[PageLogos source](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/PageLogos.vue)

### Props

- **as** — `any; optional`: The element or component this component should render as.
- **title** — `string | undefined; optional`
- **items** — `PageLogosItem[] | undefined; optional`
- **marquee** — `boolean | MarqueeProps | undefined; optional; default: false`
- **ui** — `{ root?: SlotClass; title?: SlotClass; logos?: SlotClass; logo?: SlotClass; } | undefined; optional`

### Slots

- **default** — `{} | undefined`

### Events

No events are declared.
