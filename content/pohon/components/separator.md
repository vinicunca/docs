---
title: "Separator"
description: "Separates content horizontally or vertically."
package: pohon
sourceTag: "v2.0.1"
sourceCommit: "ee987babf834bae617d75a9c6b9347bba1a494df"
sourceUrl: "https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/docs/content/docs/2.components/separator.md"
---
## Usage

Use the Separator component as-is to separate content.

```vue
<template>
  <USeparator />
</template>
```

### Orientation

Use the `orientation` prop to change the orientation of the Separator. Defaults to `horizontal`.

```vue
<template>
  <USeparator orientation="vertical" class="h-48" />
</template>
```

### Label

Use the `label` prop to display a label in the middle of the Separator.

```vue
<template>
  <USeparator label="Hello World" />
</template>
```

### Position

Use the `position` prop to change the position of the content of the Separator. Defaults to `center`.

```vue
<template>
  <USeparator position="start" label="Hello World" />
</template>
```

### Icon

Use the `icon` prop to display an icon in the middle of the Separator.

```vue
<template>
  <USeparator icon="i-simple-icons-nuxtdotjs" />
</template>
```

### Avatar

Use the `avatar` prop to display an avatar in the middle of the Separator.

```vue
<template>
  <USeparator :avatar="{
  src: 'https://github.com/nuxt.png',
  loading: 'lazy'
}" />
</template>
```

### Color

Use the `color` prop to change the color of the Separator. Defaults to `neutral`.

```vue
<template>
  <USeparator color="primary" type="solid" />
</template>
```

### Type

Use the `type` prop to change the type of the Separator. Defaults to `solid`.

```vue
<template>
  <USeparator type="dashed" />
</template>
```

### Size

Use the `size` prop to change the size of the Separator. Defaults to `xs`.

```vue
<template>
  <USeparator size="lg" />
</template>
```

## API

### Props

### Slots

## Theme

```ts [app.config.ts]
export default defineAppConfig({
  ui: {
    separator: {
      slots: {
        root: 'flex items-center align-center text-center',
        border: '',
        container: 'font-500 color-text flex',
        icon: 'shrink-0 size-5',
        avatar: 'shrink-0',
        avatarSize: '2xs',
        label: 'text-sm'
      },
      variants: {
        color: {
          primary: {
            border: 'border-primary'
          },
          secondary: {
            border: 'border-secondary'
          },
          success: {
            border: 'border-success'
          },
          info: {
            border: 'border-info'
          },
          warning: {
            border: 'border-warning'
          },
          error: {
            border: 'border-error'
          },
          neutral: {
            border: 'border-border'
          }
        },
        orientation: {
          horizontal: {
            root: 'w-full flex-row',
            border: 'w-full',
            container: 'whitespace-nowrap'
          },
          vertical: {
            root: 'h-full flex-col',
            border: 'h-full',
            container: ''
          }
        },
        size: {
          xs: '',
          sm: '',
          md: '',
          lg: '',
          xl: ''
        },
        position: {
          start: '',
          center: '',
          end: ''
        },
        type: {
          solid: {
            border: 'border-solid'
          },
          dashed: {
            border: 'border-dashed'
          },
          dotted: {
            border: 'border-dotted'
          }
        }
      },
      compoundVariants: [
        {
          orientation: 'horizontal',
          position: 'start',
          class: {
            container: 'me-3'
          }
        },
        {
          orientation: 'horizontal',
          position: 'center',
          class: {
            container: 'mx-3'
          }
        },
        {
          orientation: 'horizontal',
          position: 'end',
          class: {
            container: 'ms-3'
          }
        },
        {
          orientation: 'vertical',
          position: 'start',
          class: {
            container: 'mb-2'
          }
        },
        {
          orientation: 'vertical',
          position: 'center',
          class: {
            container: 'my-2'
          }
        },
        {
          orientation: 'vertical',
          position: 'end',
          class: {
            container: 'mt-2'
          }
        },
        {
          orientation: 'horizontal',
          size: 'xs',
          class: {
            border: 'border-t'
          }
        },
        {
          orientation: 'horizontal',
          size: 'sm',
          class: {
            border: 'border-t-[2px]'
          }
        },
        {
          orientation: 'horizontal',
          size: 'md',
          class: {
            border: 'border-t-[3px]'
          }
        },
        {
          orientation: 'horizontal',
          size: 'lg',
          class: {
            border: 'border-t-[4px]'
          }
        },
        {
          orientation: 'horizontal',
          size: 'xl',
          class: {
            border: 'border-t-[5px]'
          }
        },
        {
          orientation: 'vertical',
          size: 'xs',
          class: {
            border: 'border-s'
          }
        },
        {
          orientation: 'vertical',
          size: 'sm',
          class: {
            border: 'border-s-[2px]'
          }
        },
        {
          orientation: 'vertical',
          size: 'md',
          class: {
            border: 'border-s-[3px]'
          }
        },
        {
          orientation: 'vertical',
          size: 'lg',
          class: {
            border: 'border-s-[4px]'
          }
        },
        {
          orientation: 'vertical',
          size: 'xl',
          class: {
            border: 'border-s-[5px]'
          }
        }
      ],
      defaultVariants: {
        color: 'neutral',
        size: 'xs',
        type: 'solid'
      }
    }
  }
})
```

## Changelog

See commit history for [component](https://github.com/vinicunca/pohon/commits/main/src/runtime/components/Separator.vue) and [theme](https://github.com/vinicunca/pohon/commits/main/src/theme/separator.ts).

---

- [Separator](/akar/components/separator)
- [GitHub](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/Separator.vue)


## Sitemap

See the full [sitemap](https://pohon.vinicunca.dev/sitemap.md) for all pages.

## Generated component API

[Separator source](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/Separator.vue)

### Props

- **as** — `any; optional`: The element or component this component should render as.
- **label** — `string | undefined; optional`: Display a label on the separator.
- **icon** — `any; optional`: Display an icon on the separator.
- **avatar** — `AvatarProps | undefined; optional`: Display an avatar on the separator.
- **color** — `"primary" | "secondary" | "success" | "info" | "warning" | "error" | "neutral" | undefined; optional`
- **size** — `"md" | "xs" | "sm" | "lg" | "xl" | undefined; optional`
- **type** — `"solid" | "dashed" | "dotted" | undefined; optional`
- **orientation** — `"vertical" | "horizontal" | undefined; optional; default: "horizontal"`: The orientation of the separator.
- **position** — `"start" | "end" | "center" | undefined; optional; default: "center"`: The position of the content.
- **ui** — `{ root?: SlotClass; border?: SlotClass; container?: SlotClass; icon?: SlotClass; avatar?: SlotClass; avatarSize?: SlotClass; label?: SlotClass; } | undefined; optional`
- **decorative** — `boolean | undefined; optional`: Whether or not the component is purely decorative. <br>When \`true\`, accessibility-related attributes are updated so that that the rendered element is removed from the accessibility tree.

### Slots

- **default** — `{ ui: { root: (props?: Record<string, any> | undefined) => string | undefined; border: (props?: Record<string, any> | undefined) => string | undefined; container: (props?: Record<string, any> | undefined) => string | undefined; icon: (props?: Record<string, any> | undefined) => string | undefined; avatar: (props?: Record<string, any> | undefined) => string | undefined; avatarSize: (props?: Record<string, any> | undefined) => string | undefined; label: (props?: Record<string, any> | undefined) => string | undefined; }; }`

### Events

No events are declared.
