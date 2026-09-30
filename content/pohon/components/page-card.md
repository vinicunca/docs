---
title: "PageCard"
description: "A pre-styled card component that displays a title, description and optional link."
package: pohon
sourceTag: "v2.0.1"
sourceCommit: "ee987babf834bae617d75a9c6b9347bba1a494df"
sourceUrl: "https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/docs/content/docs/2.components/page-card.md"
---
## Usage

The PageCard component provides a flexible way to display content in a card with an illustration in the default slot.

```vue
<template>
  <p-page-card class="w-96" description="Pohon UI integrates with latest UnoCSS, bringing significant improvements." icon="i-simple-icons-unocss" title="UnoCSS">
    <p-icon name="i-simple-icons-unocss" class="size-24" />
  </p-page-card>
</template>
```

> [!TIP]
> 
> Use the [PageGrid](/pohon/components/page-grid), [PageColumns](/pohon/components/page-columns) or [PageList](/pohon/components/page-list) components to display multiple PageCard.

### Title

Use the `title` prop to set the title of the card.

```vue
<template>
  <UPageCard title="UnoCSS" />
</template>
```

### Description

Use the `description` prop to set the description of the card.

```vue
<template>
  <UPageCard title="UnoCSS" description="Pohon UI integrates with latest UnoCSS, bringing significant improvements." />
</template>
```

### Icon

Use the `icon` prop to set the icon of the card.

```vue
<template>
  <UPageCard title="UnoCSS" description="Pohon UI integrates with latest UnoCSS, bringing significant improvements." icon="i-simple-icons-unocss" />
</template>
```

### Link

You can pass any property from the [`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link) component such as `to`, `target`, `rel`, etc.

```vue
<template>
  <UPageCard title="UnoCSS" description="Pohon UI integrates with latest UnoCSS, bringing significant improvements." icon="i-simple-icons-unocss" to="https://unocss.dev/" target="_blank" />
</template>
```

### Variant

Use the `variant` prop to change the style of the card.

```vue
<template>
  <UPageCard title="UnoCSS" description="Pohon UI integrates with latest UnoCSS, bringing significant improvements." icon="i-simple-icons-unocss" to="https://unocss.dev/" target="_blank" variant="soft" />
</template>
```

> [!TIP]
> 
> You can apply the `light` or `dark` class to the `links` slot when using the `solid` variant to reverse the colors.

### Orientation

Use the `orientation` prop to change the orientation with the default slot. Defaults to `vertical`.

```vue
<template>
  <UPageCard title="UnoCSS" description="Pohon UI integrates with latest UnoCSS, bringing significant improvements." icon="i-simple-icons-unocss" orientation="horizontal">
    <PIcon name="i-simple-icons-unocss" class="size-24" />
  </UPageCard>
</template>
```

### Reverse

Use the `reverse` prop to reverse the orientation of the default slot.

```vue
<template>
  <UPageCard title="UnoCSS" description="Pohon UI integrates with latest UnoCSS, bringing significant improvements." icon="i-simple-icons-unocss" orientation="horizontal" reverse>
    <PIcon name="i-simple-icons-unocss" class="size-24" />
  </UPageCard>
</template>
```

### Highlight

Use the `highlight` and `highlight-color` props to display a highlighted border around the card.

```vue
<template>
  <UPageCard title="UnoCSS" description="Pohon UI integrates with latest UnoCSS, bringing significant improvements." icon="i-simple-icons-unocss" orientation="horizontal" highlight highlight-color="primary">
    <PIcon name="i-simple-icons-unocss" class="size-24" />
  </UPageCard>
</template>
```

### Spotlight

Use the `spotlight` and `spotlight-color` props to display a spotlight effect that follows your mouse cursor and highlights borders on hover.

> [!NOTE]
> 
> The spotlight effect will take over hover effects when using a `to` prop. It's best to use it with the `outline` variant.

```vue
<template>
  <UPageCard title="UnoCSS" description="Pohon UI integrates with latest UnoCSS, bringing significant improvements." icon="i-simple-icons-unocss" orientation="horizontal" spotlight spotlight-color="primary">
    <PIcon name="i-simple-icons-unocss" class="size-24" />
  </UPageCard>
</template>
```

> [!TIP]
> 
> You can also customize the color and size by using the `--spotlight-color` and `--spotlight-size` CSS variables:
> 
> ```vue
> <template>
>   <PPageCard spotlight class="[--spotlight-color:var(--ui-error)] [--spotlight-size:200px]" />
> </template>
> ```

## Examples

### As a testimonial

Use the [User](/pohon/components/user) component in the `header` or `footer` slot to make the card look like a testimonial.

```vue [PageCardTestimonialExample.vue]
<script setup lang="ts">
const testimonial = ref({
  user: {
    name: 'Evan You',
    description: 'Author of Vue.js and Vite',
    avatar: {
      src: 'https://avatars.githubusercontent.com/u/499550?v=4',
      alt: 'Evan You',
      loading: 'lazy' as const
    }
  },
  quote: '“Nuxt on Cloudflare infra with minimal effort - this is huge!”'
})
</script>

<template>
  <PPageCard :description="testimonial.quote" class="w-60">
    <template #footer>
      <PUser v-bind="testimonial.user" />
    </template>
  </PPageCard>
</template>
```

> [!TIP]
> See: /docs/components/page-columns
> 
> You can use the `PageColumns` component to display multiple PageCard in a multi-column layout.

## API

### Props

### Slots

## Theme

```ts [app.config.ts]
export default defineAppConfig({
  ui: {
    pageCard: {
      slots: {
        root: 'relative flex rounded-lg',
        spotlight: 'absolute inset-0 rounded-inherit pointer-events-none bg-background/90',
        container: 'relative flex flex-col flex-1 lg:grid gap-x-8 gap-y-4 p-4 sm:p-6',
        wrapper: 'flex flex-col flex-1 items-start',
        header: 'mb-4',
        body: 'flex-1',
        footer: 'pt-4 mt-auto',
        leading: 'inline-flex items-center mb-2.5',
        leadingIcon: 'size-5 shrink-0 color-primary',
        title: 'text-base text-pretty font-600 color-text-highlighted',
        description: 'text-[15px] text-pretty'
      },
      variants: {
        orientation: {
          horizontal: {
            container: 'lg:grid-cols-2 lg:items-center'
          },
          vertical: {
            container: ''
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
          ghost: {
            description: 'color-text-muted'
          },
          naked: {
            container: 'p-0 sm:p-0',
            description: 'color-text-muted'
          }
        },
        to: {
          true: {
            root: [
              'outline-primary/25 has-[>a:focus-visible]:outline-3',
              'transition'
            ]
          }
        },
        title: {
          true: {
            description: 'mt-1'
          }
        },
        highlight: {
          true: {
            root: 'ring-2'
          }
        },
        highlightColor: {
          primary: '',
          secondary: '',
          success: '',
          info: '',
          warning: '',
          error: '',
          neutral: ''
        },
        spotlight: {
          true: {
            root: '[--spotlight-size:400px] before:absolute before:-inset-px before:pointer-events-none before:rounded-inherit before:bg-[radial-gradient(var(--spotlight-size)_var(--spotlight-size)_at_calc(var(--spotlight-x,0px))_calc(var(--spotlight-y,0px)),var(--spotlight-color),transparent_70%)]'
          }
        },
        spotlightColor: {
          primary: '',
          secondary: '',
          success: '',
          info: '',
          warning: '',
          error: '',
          neutral: ''
        }
      },
      compoundVariants: [
        {
          variant: 'solid',
          to: true,
          class: {
            root: 'hover:bg-background-inverted/90'
          }
        },
        {
          variant: 'outline',
          to: true,
          class: {
            root: 'hover:bg-background-elevated/50'
          }
        },
        {
          variant: 'soft',
          to: true,
          class: {
            root: 'hover:bg-background-elevated'
          }
        },
        {
          variant: 'subtle',
          to: true,
          class: {
            root: 'hover:bg-background-elevated'
          }
        },
        {
          variant: 'subtle',
          to: true,
          highlight: false,
          class: {
            root: 'hover:ring-ring-accented'
          }
        },
        {
          variant: [
            'outline',
            'subtle'
          ],
          to: true,
          highlight: false,
          class: {
            root: 'has-[>a:focus-visible]:ring-primary'
          }
        },
        {
          variant: 'ghost',
          to: true,
          class: {
            root: 'hover:bg-background-elevated/50'
          }
        },
        {
          highlightColor: 'primary',
          highlight: true,
          class: {
            root: 'ring-primary'
          }
        },
        {
          highlightColor: 'secondary',
          highlight: true,
          class: {
            root: 'ring-secondary'
          }
        },
        {
          highlightColor: 'success',
          highlight: true,
          class: {
            root: 'ring-success'
          }
        },
        {
          highlightColor: 'info',
          highlight: true,
          class: {
            root: 'ring-info'
          }
        },
        {
          highlightColor: 'warning',
          highlight: true,
          class: {
            root: 'ring-warning'
          }
        },
        {
          highlightColor: 'error',
          highlight: true,
          class: {
            root: 'ring-error'
          }
        },
        {
          highlightColor: 'neutral',
          highlight: true,
          class: {
            root: 'ring-ring-inverted'
          }
        },
        {
          spotlightColor: 'primary',
          spotlight: true,
          class: {
            root: '[--spotlight-color:var(--ui-primary)]'
          }
        },
        {
          spotlightColor: 'secondary',
          spotlight: true,
          class: {
            root: '[--spotlight-color:var(--ui-secondary)]'
          }
        },
        {
          spotlightColor: 'success',
          spotlight: true,
          class: {
            root: '[--spotlight-color:var(--ui-success)]'
          }
        },
        {
          spotlightColor: 'info',
          spotlight: true,
          class: {
            root: '[--spotlight-color:var(--ui-info)]'
          }
        },
        {
          spotlightColor: 'warning',
          spotlight: true,
          class: {
            root: '[--spotlight-color:var(--ui-warning)]'
          }
        },
        {
          spotlightColor: 'error',
          spotlight: true,
          class: {
            root: '[--spotlight-color:var(--ui-error)]'
          }
        },
        {
          spotlightColor: 'neutral',
          spotlight: true,
          class: {
            root: '[--spotlight-color:var(--ui-bg-background-inverted)]'
          }
        }
      ],
      defaultVariants: {
        variant: 'outline',
        highlightColor: 'primary',
        spotlightColor: 'primary'
      }
    }
  }
})
```

## Changelog

See commit history for [component](https://github.com/vinicunca/pohon/commits/main/src/runtime/components/PageCard.vue) and [theme](https://github.com/vinicunca/pohon/commits/main/src/theme/page-card.ts).

---

- [GitHub](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/PageCard.vue)


## Sitemap

See the full [sitemap](https://pohon.vinicunca.dev/sitemap.md) for all pages.

## Generated component API

[PageCard source](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/PageCard.vue)

### Props

- **as** — `any; optional`: The element or component this component should render as.
- **icon** — `any; optional`: The icon displayed above the title.
- **title** — `string | undefined; optional`
- **description** — `string | undefined; optional`
- **orientation** — `"vertical" | "horizontal" | undefined; optional; default: "vertical"`: The orientation of the page card.
- **reverse** — `boolean | undefined; optional`: Reverse the order of the default slot.
- **highlight** — `boolean | undefined; optional`: Display a line around the page card.
- **highlightColor** — `"primary" | "secondary" | "success" | "info" | "warning" | "error" | "neutral" | undefined; optional`
- **spotlight** — `boolean | undefined; optional`: Display a spotlight effect that follows your mouse cursor and highlights borders on hover.
- **spotlightColor** — `"primary" | "secondary" | "success" | "info" | "warning" | "error" | "neutral" | undefined; optional`
- **variant** — `"solid" | "outline" | "soft" | "subtle" | "ghost" | "naked" | undefined; optional`
- **to** — `string | it | et | undefined; optional`
- **target** — `(string & {}) | "_blank" | "_parent" | "_self" | "_top" | null | undefined; optional`
- **onClick** — `((event: MouseEvent) => void) | undefined; optional`
- **ui** — `{ root?: SlotClass; spotlight?: SlotClass; container?: SlotClass; wrapper?: SlotClass; header?: SlotClass; body?: SlotClass; footer?: SlotClass; leading?: SlotClass; leadingIcon?: SlotClass; title?: SlotClass; description?: SlotClass; } | undefined; optional`

### Slots

- **header** — `{} | undefined`
- **body** — `{} | undefined`
- **leading** — `{ ui: { root: (props?: Record<string, any> | undefined) => string | undefined; spotlight: (props?: Record<string, any> | undefined) => string | undefined; container: (props?: Record<string, any> | undefined) => string | undefined; wrapper: (props?: Record<string, any> | undefined) => string | undefined; header: (props?: Record<string, any> | undefined) => string | undefined; body: (props?: Record<string, any> | undefined) => string | undefined; footer: (props?: Record<string, any> | undefined) => string | undefined; leading: (props?: Record<string, any> | undefined) => string | undefined; leadingIcon: (props?: Record<string, any> | undefined) => string | undefined; title: (props?: Record<string, any> | undefined) => string | undefined; description: (props?: Record<string, any> | undefined) => string | undefined; }; }`
- **title** — `{} | undefined`
- **description** — `{} | undefined`
- **footer** — `{} | undefined`
- **default** — `{} | undefined`

### Events

No events are declared.
