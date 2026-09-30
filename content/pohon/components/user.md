---
title: "User"
description: "Display user information with name, description and avatar."
package: pohon
sourceTag: "v2.0.1"
sourceCommit: "ee987babf834bae617d75a9c6b9347bba1a494df"
sourceUrl: "https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/docs/content/docs/2.components/user.md"
---
## Usage

### Name

Use the `name` prop to display a name for the user.

```vue
<template>
  <UUser name="John Doe" />
</template>
```

### Description

Use the `description` prop to display a description for the user.

```vue
<template>
  <UUser name="John Doe" description="Software Engineer" />
</template>
```

### Avatar

Use the `avatar` prop to display an [Avatar](/pohon/components/avatar) component.

```vue
<template>
  <UUser name="John Doe" description="Software Engineer" :avatar="{
  src: 'https://i.pravatar.cc/150?u=john-doe',
  loading: 'lazy',
  icon: 'i-lucide-image'
}" />
</template>
```

### Chip

Use the `chip` prop to display a [Chip](/pohon/components/chip) component.

```vue
<template>
  <UUser name="John Doe" description="Software Engineer" :avatar="{
  src: 'https://i.pravatar.cc/150?u=john-doe'
}" :chip="{
  color: 'primary',
  position: 'top-right'
}" />
</template>
```

### Size

Use the `size` prop to change the size of the user avatar and text.

```vue
<template>
  <UUser name="John Doe" description="Software Engineer" :avatar="{
  src: 'https://i.pravatar.cc/150?u=john-doe'
}" chip size="xl" />
</template>
```

### Orientation

Use the `orientation` prop to change the orientation. Defaults to `horizontal`.

```vue
<template>
  <UUser orientation="vertical" name="John Doe" description="Software Engineer" :avatar="{
  src: 'https://i.pravatar.cc/150?u=john-doe'
}" />
</template>
```

### Link

You can pass any property from the [`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link) component such as `to`, `target`, `rel`, etc.

```vue
<template>
  <UUser to="https://github.com/benjamincanac" target="_blank" name="Benjamin Canac" description="Software Engineer" :avatar="{
  src: 'https://github.com/benjamincanac.png'
}" />
</template>
```

> [!NOTE]
> 
> The `NuxtLink` component will inherit all other attributes you pass to the `User` component.

## API

### Props

### Slots

## Theme

```ts [app.config.ts]
export default defineAppConfig({
  ui: {
    user: {
      slots: {
        root: 'relative group/user',
        wrapper: '',
        name: 'font-500',
        description: 'color-text-muted',
        avatar: 'shrink-0'
      },
      variants: {
        orientation: {
          horizontal: {
            root: 'flex items-center'
          },
          vertical: {
            root: 'flex flex-col'
          }
        },
        to: {
          true: {
            root: [
              'rounded-md outline-primary/25 has-focus-visible:outline-3',
              'transition'
            ],
            name: [
              'color-text peer-hover:color-text-highlighted peer-focus-visible:color-text-highlighted',
              'transition-colors'
            ],
            description: [
              'peer-hover:color-text-toned peer-focus-visible:color-text-toned',
              'transition-colors'
            ],
            avatar: 'transform transition-transform duration-280 group-hover/user:scale-115 group-has-focus-visible/user:scale-115'
          },
          false: {
            name: 'color-text-highlighted',
            description: ''
          }
        },
        size: {
          '3xs': {
            root: 'gap-1',
            wrapper: 'flex items-center gap-1',
            name: 'text-xs',
            description: 'text-xs'
          },
          '2xs': {
            root: 'gap-1.5',
            wrapper: 'flex items-center gap-1.5',
            name: 'text-xs',
            description: 'text-xs'
          },
          xs: {
            root: 'gap-1.5',
            wrapper: 'flex items-center gap-1.5',
            name: 'text-xs',
            description: 'text-xs'
          },
          sm: {
            root: 'gap-2',
            name: 'text-xs',
            description: 'text-xs'
          },
          md: {
            root: 'gap-2',
            name: 'text-sm',
            description: 'text-xs'
          },
          lg: {
            root: 'gap-2.5',
            name: 'text-sm',
            description: 'text-sm'
          },
          xl: {
            root: 'gap-2.5',
            name: 'text-base',
            description: 'text-sm'
          },
          '2xl': {
            root: 'gap-3',
            name: 'text-base',
            description: 'text-base'
          },
          '3xl': {
            root: 'gap-3',
            name: 'text-lg',
            description: 'text-base'
          }
        }
      },
      defaultVariants: {
        size: 'md'
      }
    }
  }
})
```

## Changelog

See commit history for [component](https://github.com/vinicunca/pohon/commits/main/src/runtime/components/User.vue) and [theme](https://github.com/vinicunca/pohon/commits/main/src/theme/user.ts).

---

- [GitHub](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/User.vue)


## Sitemap

See the full [sitemap](https://pohon.vinicunca.dev/sitemap.md) for all pages.

## Generated component API

[User source](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/User.vue)

### Props

- **as** — `any; optional`: The element or component this component should render as.
- **name** — `string | undefined; optional`
- **description** — `string | undefined; optional`
- **avatar** — `(Omit<AvatarProps, "size"> & { [key: string]: any; }) | undefined; optional`
- **chip** — `boolean | Omit<ChipProps, "size" | "inset"> | undefined; optional`
- **size** — `"2xl" | "md" | "3xs" | "2xs" | "xs" | "sm" | "lg" | "xl" | "3xl" | undefined; optional`
- **orientation** — `"vertical" | "horizontal" | undefined; optional; default: "horizontal"`: The orientation of the user.
- **to** — `string | it | et | undefined; optional`
- **target** — `(string & {}) | "_blank" | "_parent" | "_self" | "_top" | null | undefined; optional`
- **onClick** — `((event: MouseEvent) => void) | undefined; optional`
- **ui** — `{ root?: SlotClass; wrapper?: SlotClass; name?: SlotClass; description?: SlotClass; avatar?: SlotClass; } | undefined; optional`

### Slots

- **avatar** — `{ ui: { root: (props?: Record<string, any> | undefined) => string | undefined; wrapper: (props?: Record<string, any> | undefined) => string | undefined; name: (props?: Record<string, any> | undefined) => string | undefined; description: (props?: Record<string, any> | undefined) => string | undefined; avatar: (props?: Record<string, any> | undefined) => string | undefined; }; }`
- **name** — `{} | undefined`
- **description** — `{} | undefined`
- **default** — `{} | undefined`

### Events

No events are declared.
