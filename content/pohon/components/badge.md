---
title: "Badge"
description: "A short text to represent a status or a category."
package: pohon
sourceTag: "v2.0.1"
sourceCommit: "ee987babf834bae617d75a9c6b9347bba1a494df"
sourceUrl: "https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/docs/content/docs/2.components/badge.md"
---
## Usage

Use the default slot to set the label of the Badge.

```vue
<template>
  <UBadge>
    Badge
  </UBadge>
</template>
```

### Label

Use the `label` prop to set the label of the Badge.

```vue
<template>
  <UBadge label="Badge" />
</template>
```

### Color

Use the `color` prop to change the color of the Badge.

```vue
<template>
  <UBadge color="neutral">
    Badge
  </UBadge>
</template>
```

### Variant

Use the `variant` props to change the variant of the Badge.

```vue
<template>
  <UBadge color="neutral" variant="outline">
    Badge
  </UBadge>
</template>
```

### Size

Use the `size` prop to change the size of the Badge.

```vue
<template>
  <UBadge size="xl">
    Badge
  </UBadge>
</template>
```

### Icon

Use the `icon` prop to show an [Icon](/pohon/components/icon) inside the Badge.

```vue
<template>
  <UBadge icon="i-lucide-rocket" size="md" color="primary" variant="solid">
    Badge
  </UBadge>
</template>
```

Use the `leading` and `trailing` props to set the icon position or the `leading-icon` and `trailing-icon` props to set a different icon for each position.

```vue
<template>
  <UBadge trailing-icon="i-lucide-arrow-right" size="md">
    Badge
  </UBadge>
</template>
```

### Avatar

Use the `avatar` prop to show an [Avatar](/pohon/components/avatar) inside the Badge.

```vue
<template>
  <UBadge :avatar="{
  src: 'https://github.com/nuxt.png',
  loading: 'lazy'
}" size="md" color="neutral" variant="outline">
    Badge
  </UBadge>
</template>
```

## Examples

### `class` prop

Use the `class` prop to override the base styles of the Badge.

```vue
<template>
  <UBadge class="font-bold rounded-full">
    Badge
  </UBadge>
</template>
```

## API

### Props

```ts
/**
 * Props for the Badge component
 */
interface BadgeProps {
  ui?: { base?: any; } | undefined;
}
```

### Slots

```ts
/**
 * Slots for the Badge component
 */
interface BadgeSlots {
  default(): any;
}
```

## Theme

```ts [app.config.ts]
export default defineAppConfig({
  ui: {
    badge: {
      slots: {
        base: 'font-500 inline-flex items-center',
        label: 'truncate',
        leadingIcon: 'shrink-0',
        leadingAvatar: 'shrink-0',
        leadingAvatarSize: '',
        trailingIcon: 'shrink-0'
      },
      variants: {
        fieldGroup: {
          horizontal: 'not-only:first:rounded-e-none not-only:last:rounded-s-none not-last:not-first:rounded-none focus-visible:z-1',
          vertical: 'not-only:first:rounded-b-none not-only:last:rounded-t-none not-last:not-first:rounded-none focus-visible:z-1'
        },
        color: {
          primary: '',
          secondary: '',
          success: '',
          info: '',
          warning: '',
          error: '',
          neutral: ''
        },
        variant: {
          solid: '',
          outline: '',
          soft: '',
          subtle: ''
        },
        size: {
          xs: {
            base: 'text-[8px]/3 px-1 py-0.5 gap-1 rounded-sm',
            leadingIcon: 'size-3',
            leadingAvatarSize: '3xs',
            trailingIcon: 'size-3'
          },
          sm: {
            base: 'text-[10px]/3 px-1.5 py-1 gap-1 rounded-sm',
            leadingIcon: 'size-3',
            leadingAvatarSize: '3xs',
            trailingIcon: 'size-3'
          },
          md: {
            base: 'text-xs px-2 py-1 gap-1 rounded-md',
            leadingIcon: 'size-4',
            leadingAvatarSize: '3xs',
            trailingIcon: 'size-4'
          },
          lg: {
            base: 'text-sm px-2 py-1 gap-1.5 rounded-md',
            leadingIcon: 'size-5',
            leadingAvatarSize: '2xs',
            trailingIcon: 'size-5'
          },
          xl: {
            base: 'text-base px-2.5 py-1 gap-1.5 rounded-md',
            leadingIcon: 'size-6',
            leadingAvatarSize: '2xs',
            trailingIcon: 'size-6'
          }
        },
        square: {
          true: ''
        }
      },
      compoundVariants: [
        {
          color: 'primary',
          variant: 'solid',
          class: 'bg-primary color-text-inverted'
        },
        {
          color: 'secondary',
          variant: 'solid',
          class: 'bg-secondary color-text-inverted'
        },
        {
          color: 'success',
          variant: 'solid',
          class: 'bg-success color-text-inverted'
        },
        {
          color: 'info',
          variant: 'solid',
          class: 'bg-info color-text-inverted'
        },
        {
          color: 'warning',
          variant: 'solid',
          class: 'bg-warning color-text-inverted'
        },
        {
          color: 'error',
          variant: 'solid',
          class: 'bg-error color-text-inverted'
        },
        {
          color: 'primary',
          variant: 'outline',
          class: 'color-primary ring ring-inset ring-primary/50'
        },
        {
          color: 'secondary',
          variant: 'outline',
          class: 'color-secondary ring ring-inset ring-secondary/50'
        },
        {
          color: 'success',
          variant: 'outline',
          class: 'color-success ring ring-inset ring-success/50'
        },
        {
          color: 'info',
          variant: 'outline',
          class: 'color-info ring ring-inset ring-info/50'
        },
        {
          color: 'warning',
          variant: 'outline',
          class: 'color-warning ring ring-inset ring-warning/50'
        },
        {
          color: 'error',
          variant: 'outline',
          class: 'color-error ring ring-inset ring-error/50'
        },
        {
          color: 'primary',
          variant: 'soft',
          class: 'bg-primary/10 color-primary'
        },
        {
          color: 'secondary',
          variant: 'soft',
          class: 'bg-secondary/10 color-secondary'
        },
        {
          color: 'success',
          variant: 'soft',
          class: 'bg-success/10 color-success'
        },
        {
          color: 'info',
          variant: 'soft',
          class: 'bg-info/10 color-info'
        },
        {
          color: 'warning',
          variant: 'soft',
          class: 'bg-warning/10 color-warning'
        },
        {
          color: 'error',
          variant: 'soft',
          class: 'bg-error/10 color-error'
        },
        {
          color: 'primary',
          variant: 'subtle',
          class: 'bg-primary/10 color-primary ring ring-inset ring-primary/25'
        },
        {
          color: 'secondary',
          variant: 'subtle',
          class: 'bg-secondary/10 color-secondary ring ring-inset ring-secondary/25'
        },
        {
          color: 'success',
          variant: 'subtle',
          class: 'bg-success/10 color-success ring ring-inset ring-success/25'
        },
        {
          color: 'info',
          variant: 'subtle',
          class: 'bg-info/10 color-info ring ring-inset ring-info/25'
        },
        {
          color: 'warning',
          variant: 'subtle',
          class: 'bg-warning/10 color-warning ring ring-inset ring-warning/25'
        },
        {
          color: 'error',
          variant: 'subtle',
          class: 'bg-error/10 color-error ring ring-inset ring-error/25'
        },
        {
          color: 'neutral',
          variant: 'solid',
          class: 'color-text-inverted bg-background-inverted'
        },
        {
          color: 'neutral',
          variant: 'outline',
          class: 'ring ring-inset ring-ring-accented color-text bg-background'
        },
        {
          color: 'neutral',
          variant: 'soft',
          class: 'color-text bg-background-elevated'
        },
        {
          color: 'neutral',
          variant: 'subtle',
          class: 'ring ring-inset ring-ring-accented color-text bg-background-elevated'
        },
        {
          size: 'xs',
          square: true,
          class: 'p-0.5'
        },
        {
          size: 'sm',
          square: true,
          class: 'p-1'
        },
        {
          size: 'md',
          square: true,
          class: 'p-1'
        },
        {
          size: 'lg',
          square: true,
          class: 'p-1'
        },
        {
          size: 'xl',
          square: true,
          class: 'p-1'
        }
      ],
      defaultVariants: {
        color: 'primary',
        variant: 'solid',
        size: 'md'
      }
    }
  }
})
```

## Changelog

See commit history for [component](https://github.com/vinicunca/pohon/commits/main/src/runtime/components/Badge.vue) and [theme](https://github.com/vinicunca/pohon/commits/main/src/theme/badge.ts).

---

- [GitHub](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/Badge.vue)


## Sitemap

See the full [sitemap](https://pohon.vinicunca.dev/sitemap.md) for all pages.

## Generated component API

[Badge source](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/Badge.vue)

### Props

- **as** — `any; optional; default: "span"`: The element or component this component should render as.
- **label** — `string | number | undefined; optional`
- **color** — `"primary" | "secondary" | "success" | "info" | "warning" | "error" | "neutral" | undefined; optional`
- **variant** — `"solid" | "outline" | "soft" | "subtle" | undefined; optional`
- **size** — `"md" | "xs" | "sm" | "lg" | "xl" | undefined; optional`
- **square** — `boolean | undefined; optional`: Render the badge with equal padding on all sides.
- **ui** — `{ base?: SlotClass; label?: SlotClass; leadingIcon?: SlotClass; leadingAvatar?: SlotClass; leadingAvatarSize?: SlotClass; trailingIcon?: SlotClass; } | undefined; optional`
- **trailingIcon** — `any; optional`: Display an icon on the right side.
- **leadingIcon** — `any; optional`: Display an icon on the left side.
- **leading** — `boolean | undefined; optional`: When \`true\`, the icon will be displayed on the left side.
- **trailing** — `boolean | undefined; optional`: When \`true\`, the icon will be displayed on the right side.
- **icon** — `any; optional`: Display an icon based on the \`leading\` and \`trailing\` props.
- **avatar** — `AvatarProps | undefined; optional`: Display an avatar on the left side.

### Slots

- **leading** — `{ ui: { base: (props?: Record<string, any> | undefined) => string | undefined; label: (props?: Record<string, any> | undefined) => string | undefined; leadingIcon: (props?: Record<string, any> | undefined) => string | undefined; leadingAvatar: (props?: Record<string, any> | undefined) => string | undefined; leadingAvatarSize: (props?: Record<string, any> | undefined) => string | undefined; trailingIcon: (props?: Record<string, any> | undefined) => string | undefined; }; }`
- **default** — `{ ui: { base: (props?: Record<string, any> | undefined) => string | undefined; label: (props?: Record<string, any> | undefined) => string | undefined; leadingIcon: (props?: Record<string, any> | undefined) => string | undefined; leadingAvatar: (props?: Record<string, any> | undefined) => string | undefined; leadingAvatarSize: (props?: Record<string, any> | undefined) => string | undefined; trailingIcon: (props?: Record<string, any> | undefined) => string | undefined; }; }`
- **trailing** — `{ ui: { base: (props?: Record<string, any> | undefined) => string | undefined; label: (props?: Record<string, any> | undefined) => string | undefined; leadingIcon: (props?: Record<string, any> | undefined) => string | undefined; leadingAvatar: (props?: Record<string, any> | undefined) => string | undefined; leadingAvatarSize: (props?: Record<string, any> | undefined) => string | undefined; trailingIcon: (props?: Record<string, any> | undefined) => string | undefined; }; }`

### Events

No events are declared.
