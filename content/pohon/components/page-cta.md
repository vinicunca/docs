---
title: "PageCTA"
description: "A call to action section to display in your pages."
package: pohon
sourceTag: "v2.0.1"
sourceCommit: "ee987babf834bae617d75a9c6b9347bba1a494df"
sourceUrl: "https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/docs/content/docs/2.components/page-cta.md"
---
## Usage

The PageCTA component provides a flexible way to display a call to action in your pages with an illustration in the default slot.

```vue
<template>
  <p-page-c-t-a :links="[
    {
      label: 'Get started',
      color: 'neutral'
    },
    {
      label: 'Learn more',
      color: 'neutral',
      variant: 'subtle',
      trailingIcon: 'i-lucide-arrow-right'
    }
  ]" description="Preview the latest UnoCSS and get started with Pohon UI." orientation="horizontal" title="Trusted and supported by our amazing community">
    <img alt="Illustration" class="w-full rounded-lg" :height="308" src="https://picsum.photos/640/616" :width="320" />
  </p-page-c-t-a>
</template>
```

Use it inside a [PageSection](/pohon/components/page-section) component or directly in your page:

```vue
<template>
  <PPageHero />

  <PPageCTA class="rounded-none" />

  <PPageSection />

  <PPageSection :ui="{ container: 'px-0' }">
    <PPageCTA class="rounded-none sm:rounded-xl" />
  </PPageSection>

  <PPageSection />
</template>
```

> [!TIP]
> 
> Use `px-0` and `rounded-none` classes to make the CTA fill the edge of the page on mobile.

### Title

Use the `title` prop to set the title of the CTA.

```vue
<template>
  <UPageCTA title="Trusted and supported by our amazing community" />
</template>
```

### Description

Use the `description` prop to set the description of the CTA.

```vue
<template>
  <UPageCTA title="Trusted and supported by our amazing community" description="We've built a strong, lasting partnership. Their trust is our driving force, propelling us towards shared success." />
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
    color: "neutral"
  },
  {
    label: "Learn more",
    color: "neutral",
    variant: "subtle",
    trailingIcon: "i-lucide-arrow-right"
  }
])
</script>

<template>
  <UPageCTA title="Trusted and supported by our amazing community" description="We've built a strong, lasting partnership. Their trust is our driving force, propelling us towards shared success." :links="links" />
</template>
```

### Variant

Use the `variant` prop to change the style of the CTA.

```vue
<script setup lang="ts">
import type { ButtonProps } from 'pohon-ui'

const links = ref<ButtonProps[]>([
  {
    label: "Get started",
    color: "neutral"
  },
  {
    label: "Learn more",
    color: "neutral",
    variant: "subtle",
    trailingIcon: "i-lucide-arrow-right"
  }
])
</script>

<template>
  <UPageCTA title="Trusted and supported by our amazing community" description="We've built a strong, lasting partnership. Their trust is our driving force, propelling us towards shared success." variant="soft" :links="links" />
</template>
```

> [!TIP]
> 
> You can apply the `light` or `dark` class to the `links` slot when using the `solid` variant to reverse the colors.

### Orientation

Use the `orientation` prop to change the orientation with the default slot. Defaults to `vertical`.

```vue
<script setup lang="ts">
import type { ButtonProps } from 'pohon-ui'

const links = ref<ButtonProps[]>([
  {
    label: "Get started",
    color: "neutral"
  },
  {
    label: "Learn more",
    color: "neutral",
    variant: "subtle",
    trailingIcon: "i-lucide-arrow-right"
  }
])
</script>

<template>
  <UPageCTA title="Trusted and supported by our amazing community" description="We've built a strong, lasting partnership. Their trust is our driving force, propelling us towards shared success." orientation="horizontal" :links="links">
    <img src="https://picsum.photos/640/728" width="320" height="364" alt="Illustration" class="w-full rounded-lg" loading="lazy" />
  </UPageCTA>
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
    color: "neutral"
  },
  {
    label: "Learn more",
    color: "neutral",
    variant: "subtle",
    trailingIcon: "i-lucide-arrow-right"
  }
])
</script>

<template>
  <UPageCTA title="Trusted and supported by our amazing community" description="We've built a strong, lasting partnership. Their trust is our driving force, propelling us towards shared success." orientation="horizontal" reverse :links="links">
    <img src="https://picsum.photos/640/728" width="320" height="364" alt="Illustration" class="w-full rounded-lg" loading="lazy" />
  </UPageCTA>
</template>
```

## API

### Props

{slug="page-CTA"}### Slots

{slug="page-CTA"}## Theme

```ts [app.config.ts]
export default defineAppConfig({
  ui: {
    pageCTA: {
      slots: {
        root: 'relative isolate rounded-xl overflow-hidden',
        container: 'flex flex-col lg:grid px-6 py-12 sm:px-12 sm:py-24 lg:px-16 lg:py-24 gap-8 sm:gap-16',
        wrapper: '',
        header: '',
        title: 'text-3xl sm:text-4xl text-pretty tracking-tight font-700 color-text-highlighted',
        description: 'text-base sm:text-lg color-text-muted',
        body: 'mt-8',
        footer: 'mt-8',
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
            title: 'text-center',
            description: 'text-center text-balance',
            links: 'justify-center'
          }
        },
        reverse: {
          true: {
            wrapper: 'order-last'
          }
        },
        variant: {
          solid: {
            root: 'bg-background-inverted color-text-inverted',
            title: 'color-text-inverted',
            description: 'color-text-dimmed'
          },
          outline: {
            root: 'bg-background ring ring-ring',
            description: 'color-text-muted'
          },
          soft: {
            root: 'bg-background-elevated/50',
            description: 'color-text-toned'
          },
          subtle: {
            root: 'bg-background-elevated/50 ring ring-ring',
            description: 'color-text-toned'
          },
          naked: {
            description: 'color-text-muted'
          }
        },
        title: {
          true: {
            description: 'mt-6'
          }
        }
      },
      defaultVariants: {
        variant: 'outline'
      }
    }
  }
})
```

## Changelog

See commit history for [component](https://github.com/vinicunca/pohon/commits/main/src/runtime/components/PageCTA.vue) and [theme](https://github.com/vinicunca/pohon/commits/main/src/theme/page-cta.ts).

---

- [GitHub](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/PageCTA.vue)


## Sitemap

See the full [sitemap](https://pohon.vinicunca.dev/sitemap.md) for all pages.
