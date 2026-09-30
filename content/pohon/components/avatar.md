---
title: "Avatar"
description: "An img element with fallback and Nuxt Image support."
package: pohon
sourceTag: "v2.0.1"
sourceCommit: "ee987babf834bae617d75a9c6b9347bba1a494df"
sourceUrl: "https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/docs/content/docs/2.components/avatar.md"
---
## Usage

The Avatar uses the `<NuxtImg>` component when [`@nuxt/image`](https://github.com/nuxt/image) is installed, falling back to `img` otherwise.

```vue
<template>
  <UAvatar src="https://github.com/benjamincanac.png" />
</template>
```

> [!NOTE]
> 
> You can pass any property from the HTML `<img>` element such as `alt`, `loading`, etc.

> [!TIP]
> 
> To opt-out of `@nuxt/image`, use the `as` prop: `:as="{ img: 'img' }"`.

### Src

Use the `src` prop to set the image URL.

```vue
<template>
  <UAvatar src="https://github.com/benjamincanac.png" loading="lazy" />
</template>
```

### Size

Use the `size` prop to set the size of the Avatar.

```vue
<template>
  <UAvatar src="https://github.com/benjamincanac.png" size="xl" loading="lazy" />
</template>
```

> [!NOTE]
> 
> The `<img>` element's `width` and `height` are automatically set based on the `size` prop.

### Icon

Use the `icon` prop to display a fallback [Icon](/pohon/components/icon).

```vue
<template>
  <UAvatar icon="i-lucide-image" size="md" />
</template>
```

### Text

Use the `text` prop to display a fallback text.

```vue
<template>
  <UAvatar text="+1" size="md" />
</template>
```

### Alt

When no icon or text is provided, the **initials** of the `alt` prop is used as fallback.

```vue
<template>
  <UAvatar alt="Benjamin Canac" size="md" />
</template>
```

> [!NOTE]
> 
> The `alt` prop is passed to the `img` element as the `alt` attribute.

### Color

Use the `color` prop to change the color of the Avatar.

```vue
<template>
  <UAvatar color="primary" alt="Benjamin Canac" />
</template>
```

### Chip

Use the `chip` prop to display a chip around the Avatar.

```vue
<template>
  <UAvatar src="https://github.com/benjamincanac.png" loading="lazy" :chip="{
  inset: true
}" />
</template>
```

## Examples

### With tooltip

You can use a [Tooltip](/pohon/components/tooltip) component to display a tooltip when hovering the Avatar.

```vue [AvatarTooltipExample.vue]
<template>
  <PTooltip text="Benjamin Canac">
    <PAvatar
      src="https://github.com/benjamincanac.png"
      alt="Benjamin Canac"
      loading="lazy"
    />
  </PTooltip>
</template>
```

### With mask

You can use a CSS mask to display an Avatar with a custom shape instead of a simple circle.

```vue [AvatarMaskExample.vue]
<template>
  <PAvatar class="rounded-none squircle" src="https://avatars.githubusercontent.com/u/739984?v=4" alt="Benjamin Canac" loading="lazy" />
</template>

<style>
.squircle {
  mask-image: url("data:image/svg+xml,%3csvg width='200' height='200' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M100 0C20 0 0 20 0 100s20 100 100 100 100-20 100-100S180 0 100 0Z'/%3e%3c/svg%3e");
  mask-size: contain;
  mask-position: center;
  mask-repeat: no-repeat;
}
</style>
```

## API

### Props

> [!NOTE]
> See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/img#attributes
> 
> This component also supports all native `<img>` HTML attributes.

## Theme

```ts [app.config.ts]
export default defineAppConfig({
  ui: {
    avatar: {
      slots: {
        root: 'inline-flex items-center justify-center shrink-0 select-none rounded-full align-middle',
        image: 'h-full w-full rounded-inherit object-cover',
        fallback: 'font-500 truncate',
        icon: 'shrink-0'
      },
      variants: {
        color: {
          primary: {
            root: 'bg-primary/10',
            fallback: 'color-primary',
            icon: 'color-primary'
          },
          secondary: {
            root: 'bg-secondary/10',
            fallback: 'color-secondary',
            icon: 'color-secondary'
          },
          success: {
            root: 'bg-success/10',
            fallback: 'color-success',
            icon: 'color-success'
          },
          info: {
            root: 'bg-info/10',
            fallback: 'color-info',
            icon: 'color-info'
          },
          warning: {
            root: 'bg-warning/10',
            fallback: 'color-warning',
            icon: 'color-warning'
          },
          error: {
            root: 'bg-error/10',
            fallback: 'color-error',
            icon: 'color-error'
          },
          neutral: {
            root: 'bg-background-elevated',
            fallback: 'color-text-muted',
            icon: 'color-text-muted'
          }
        },
        size: {
          '3xs': {
            root: 'size-4 text-[8px]'
          },
          '2xs': {
            root: 'size-5 text-[10px]'
          },
          xs: {
            root: 'size-6 text-xs'
          },
          sm: {
            root: 'size-7 text-sm'
          },
          md: {
            root: 'size-8 text-base'
          },
          lg: {
            root: 'size-9 text-lg'
          },
          xl: {
            root: 'size-10 text-xl'
          },
          '2xl': {
            root: 'size-11 text-[22px]'
          },
          '3xl': {
            root: 'size-12 text-2xl'
          }
        }
      },
      defaultVariants: {
        size: 'md',
        color: 'neutral'
      }
    }
  }
})
```

## Changelog

See commit history for [component](https://github.com/vinicunca/pohon/commits/main/src/runtime/components/Avatar.vue) and [theme](https://github.com/vinicunca/pohon/commits/main/src/theme/avatar.ts).

---

- [GitHub](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/Avatar.vue)


## Sitemap

See the full [sitemap](https://pohon.vinicunca.dev/sitemap.md) for all pages.

## Generated component API

[Avatar source](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/Avatar.vue)

### Props

- **as** — `any; optional`: The element or component this component should render as.
- **src** — `string | undefined; optional`
- **alt** — `string | undefined; optional`
- **icon** — `any; optional`
- **text** — `string | undefined; optional`
- **size** — `"2xl" | "md" | "3xs" | "2xs" | "xs" | "sm" | "lg" | "xl" | "3xl" | undefined; optional`
- **color** — `"primary" | "secondary" | "success" | "info" | "warning" | "error" | "neutral" | undefined; optional`
- **chip** — `boolean | ChipProps | undefined; optional`
- **ui** — `{ root?: SlotClass; image?: SlotClass; fallback?: SlotClass; icon?: SlotClass; } | undefined; optional`
- **decoding** — `"async" | "auto" | "sync" | undefined; optional`
- **height** — `Numberish | undefined; optional`
- **loading** — `"eager" | "lazy" | undefined; optional`
- **referrerpolicy** — `HTMLAttributeReferrerPolicy | undefined; optional`
- **sizes** — `string | undefined; optional`
- **srcset** — `string | undefined; optional`
- **usemap** — `string | undefined; optional`
- **width** — `Numberish | undefined; optional`
- **crossorigin** — `"anonymous" | "use-credentials" | undefined; optional`

### Slots

- **default** — `{}`

### Events

No events are declared.
