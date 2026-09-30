---
title: "PageHero"
description: "A responsive hero for your pages."
package: pohon
sourceTag: "v2.0.1"
sourceCommit: "ee987babf834bae617d75a9c6b9347bba1a494df"
sourceUrl: "https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/docs/content/docs/2.components/page-hero.md"
---
## Usage

The PageHero component wraps your content in a [Container](/pohon/components/container) while maintaining full-width flexibility making it easy to add background colors, images or patterns. It provides a flexible way to display content with an illustration in the default slot.

```vue
<template>
  <p-page-hero description="A Nuxt/Vue-integrated UI library providing a rich set of fully-styled, accessible and highly customizable components for building modern web applications." title="Ultimate Vue UI library">
    <p-page-card class="rounded-lg" variant="subtle">
      <p>
        <img alt="App screenshot" class="rounded-sm shadow-2xl ring ring-ring" src="/blocks/image4.png" :height="540" :width="960" />
      </p>
    </p-page-card>
  </p-page-hero>
</template>
```

### Title

Use the `title` prop to set the title of the hero.

```vue
<template>
  <UPageHero title="Ultimate Vue UI library" />
</template>
```

### Description

Use the `description` prop to set the description of the hero.

```vue
<template>
  <UPageHero title="Ultimate Vue UI library" description="A Nuxt/Vue-integrated UI library providing a rich set of fully-styled, accessible and highly customizable components for building modern web applications." />
</template>
```

### Headline

Use the `headline` prop to set the headline of the hero.

```vue
<template>
  <UPageHero title="Ultimate Vue UI library" description="A Nuxt/Vue-integrated UI library providing a rich set of fully-styled, accessible and highly customizable components for building modern web applications." headline="New release" />
</template>
```

### Links

Use the `links` prop to display a list of [Button](/pohon/components/button) under the description.

```vue
<script setup lang="ts">
import type { ButtonProps } from 'pohon-ui'

const links = ref<ButtonProps[]>([
  {
    label: "Get started",
    to: "/docs/getting-started",
    icon: "i-lucide-square-play"
  },
  {
    label: "Learn more",
    to: "/docs/getting-started/theme/design-system",
    color: "neutral",
    variant: "subtle",
    trailingIcon: "i-lucide-arrow-right"
  }
])
</script>

<template>
  <UPageHero title="Ultimate Vue UI library" description="A Nuxt/Vue-integrated UI library providing a rich set of fully-styled, accessible and highly customizable components for building modern web applications." :links="links" />
</template>
```

### Orientation

Use the `orientation` prop to change the orientation with the default slot. Defaults to `vertical`.

```vue
<script setup lang="ts">
import type { ButtonProps } from 'pohon-ui'

const links = ref<ButtonProps[]>([
  {
    label: "Get started",
    to: "/docs/getting-started",
    icon: "i-lucide-square-play"
  },
  {
    label: "Learn more",
    to: "/docs/getting-started/theme/design-system",
    color: "neutral",
    variant: "subtle",
    trailingIcon: "i-lucide-arrow-right"
  }
])
</script>

<template>
  <UPageHero title="Ultimate Vue UI library" description="A Nuxt/Vue-integrated UI library providing a rich set of fully-styled, accessible and highly customizable components for building modern web applications." headline="New release" orientation="horizontal" :links="links">
    <img src="/blocks/image4.png" alt="App screenshot" class="rounded-lg shadow-2xl ring ring-ring" />
  </UPageHero>
</template>
```

### Reverse

Use the `reverse` prop to reverse the orientation of the default slot.

```vue
<script setup lang="ts">
import type { ButtonProps } from 'pohon-ui'

const links = ref<ButtonProps[]>([
  {
    label: "Get started",
    to: "/docs/getting-started",
    icon: "i-lucide-square-play"
  },
  {
    label: "Learn more",
    to: "/docs/getting-started/theme/design-system",
    color: "neutral",
    variant: "subtle",
    trailingIcon: "i-lucide-arrow-right"
  }
])
</script>

<template>
  <UPageHero title="Ultimate Vue UI library" description="A Nuxt/Vue-integrated UI library providing a rich set of fully-styled, accessible and highly customizable components for building modern web applications." headline="New release" orientation="horizontal" reverse :links="links">
    <img src="/blocks/image4.png" alt="App screenshot" class="rounded-lg shadow-2xl ring ring-ring" />
  </UPageHero>
</template>
```

## API

### Props

### Slots

## Theme

```ts [app.config.ts]
export default defineAppConfig({
  ui: {
    pageHero: {
      slots: {
        root: 'relative isolate',
        container: 'flex flex-col lg:grid py-24 sm:py-32 lg:py-40 gap-16 sm:gap-y-24',
        wrapper: '',
        header: '',
        headline: 'mb-4',
        title: 'text-5xl sm:text-7xl text-pretty tracking-tight font-700 color-text-highlighted',
        description: 'text-lg sm:text-xl/8 color-text-muted',
        body: 'mt-10',
        footer: 'mt-10',
        links: 'flex flex-wrap gap-x-6 gap-y-3'
      },
      variants: {
        orientation: {
          horizontal: {
            container: 'lg:grid-cols-2 lg:items-center',
            description: 'text-pretty'
          },
          vertical: {
            container: '',
            headline: 'justify-center',
            wrapper: 'text-center',
            description: 'text-balance',
            links: 'justify-center'
          }
        },
        reverse: {
          true: {
            wrapper: 'order-last'
          }
        },
        headline: {
          true: {
            headline: 'font-600 color-primary flex items-center gap-1.5'
          }
        },
        title: {
          true: {
            description: 'mt-6'
          }
        }
      }
    }
  }
})
```

## Changelog

See commit history for [component](https://github.com/vinicunca/pohon/commits/main/src/runtime/components/PageHero.vue) and [theme](https://github.com/vinicunca/pohon/commits/main/src/theme/page-hero.ts).

---

- [GitHub](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/PageHero.vue)


## Sitemap

See the full [sitemap](https://pohon.vinicunca.dev/sitemap.md) for all pages.

## Generated component API

[PageHero source](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/PageHero.vue)

### Props

- **as** — `any; optional`: The element or component this component should render as.
- **headline** — `string | undefined; optional`
- **title** — `string | undefined; optional`
- **description** — `string | undefined; optional`
- **links** — `ButtonProps[] | undefined; optional`: Display a list of Button under the description. \`{ size: 'xl' }\`{lang="ts-type"}
- **orientation** — `"vertical" | "horizontal" | undefined; optional; default: "vertical"`: The orientation of the page hero.
- **reverse** — `boolean | undefined; optional`: Reverse the order of the default slot.
- **ui** — `{ root?: SlotClass; container?: SlotClass; wrapper?: SlotClass; header?: SlotClass; headline?: SlotClass; title?: SlotClass; description?: SlotClass; body?: SlotClass; footer?: SlotClass; links?: SlotClass; } | undefined; optional`

### Slots

- **top** — `{} | undefined`
- **header** — `{} | undefined`
- **headline** — `{} | undefined`
- **title** — `{} | undefined`
- **description** — `{} | undefined`
- **body** — `{} | undefined`
- **footer** — `{} | undefined`
- **links** — `{} | undefined`
- **default** — `{} | undefined`
- **bottom** — `{} | undefined`

### Events

No events are declared.
