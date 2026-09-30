---
title: "Switch"
description: "A control that toggles between two states."
package: pohon
sourceTag: "v2.0.1"
sourceCommit: "ee987babf834bae617d75a9c6b9347bba1a494df"
sourceUrl: "https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/docs/content/docs/2.components/switch.md"
---
## Usage

Use the `v-model` directive to control the checked state of the Switch.

```vue
<script setup lang="ts">
const value = ref(true)
</script>

<template>
  <USwitch v-model="value" />
</template>
```

Use the `default-value` prop to set the initial value when you do not need to control its state.

```vue
<template>
  <USwitch default-value />
</template>
```

### Label

Use the `label` prop to set the label of the Switch.

```vue
<template>
  <USwitch label="Check me" />
</template>
```

When using the `required` prop, an asterisk is added next to the label.

```vue
<template>
  <USwitch required label="Check me" />
</template>
```

### Description

Use the `description` prop to set the description of the Switch.

```vue
<template>
  <USwitch label="Check me" description="This is a checkbox." />
</template>
```

### Icon

Use the `checked-icon` and `unchecked-icon` props to set the icons of the Switch when checked and unchecked.

```vue
<template>
  <USwitch unchecked-icon="i-lucide-x" checked-icon="i-lucide-check" default-value label="Check me" />
</template>
```

### Loading

Use the `loading` prop to show a loading icon on the Switch.

```vue
<template>
  <USwitch loading default-value label="Check me" />
</template>
```

### Loading Icon

Use the `loading-icon` prop to customize the loading icon. Defaults to `i-lucide-loader-circle`.

```vue
<template>
  <USwitch loading loading-icon="i-lucide-loader" default-value label="Check me" />
</template>
```

**Nuxt:**

> [!TIP]
> See: /docs/getting-started/integrations/icons/nuxt#theme
> 
> You can customize this icon globally in your `app.config.ts` under `ui.icons.loading` key.

**Vue:**

> [!TIP]
> See: /docs/getting-started/integrations/icons/vue#theme
> 
> You can customize this icon globally in your `vite.config.ts` under `ui.icons.loading` key.

### Color

Use the `color` prop to change the color of the Switch.

```vue
<template>
  <USwitch color="neutral" default-value label="Check me" />
</template>
```

### Size

Use the `size` prop to change the size of the Switch.

```vue
<template>
  <USwitch size="xl" default-value label="Check me" />
</template>
```

### Disabled

Use the `disabled` prop to disable the Switch.

```vue
<template>
  <USwitch disabled label="Check me" />
</template>
```

## API

### Props

> [!NOTE]
> See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes
> 
> This component also supports all native `<button>` HTML attributes.

### Slots

### Emits

No events available for this component.

## Theme

```ts [app.config.ts]
export default defineAppConfig({
  ui: {
    switch: {
      slots: {
        root: 'relative flex items-start',
        base: [
          'inline-flex items-center shrink-0 rounded-full border-2 border-transparent focus-visible:outline-3 data-[state=unchecked]:bg-background-accented',
          'transition-[background] duration-280'
        ],
        container: 'flex items-center',
        thumb: 'group pointer-events-none rounded-full bg-background shadow-lg ring-0 transition-transform duration-280 data-[state=unchecked]:translate-x-0 data-[state=unchecked]:rtl:-translate-x-0 flex items-center justify-center',
        icon: [
          'absolute shrink-0 group-data-[state=unchecked]:color-text-dimmed opacity-0 size-10/12',
          'transition-[color,opacity] duration-280'
        ],
        wrapper: 'ms-2',
        label: 'block font-500 color-text',
        description: 'color-text-muted'
      },
      variants: {
        color: {
          primary: {
            base: 'data-[state=checked]:bg-primary outline-primary/25',
            icon: 'group-data-[state=checked]:color-primary'
          },
          secondary: {
            base: 'data-[state=checked]:bg-secondary outline-secondary/25',
            icon: 'group-data-[state=checked]:color-secondary'
          },
          success: {
            base: 'data-[state=checked]:bg-success outline-success/25',
            icon: 'group-data-[state=checked]:color-success'
          },
          info: {
            base: 'data-[state=checked]:bg-info outline-info/25',
            icon: 'group-data-[state=checked]:color-info'
          },
          warning: {
            base: 'data-[state=checked]:bg-warning outline-warning/25',
            icon: 'group-data-[state=checked]:color-warning'
          },
          error: {
            base: 'data-[state=checked]:bg-error outline-error/25',
            icon: 'group-data-[state=checked]:color-error'
          },
          neutral: {
            base: 'data-[state=checked]:bg-background-inverted outline-outline-inverted/25',
            icon: 'group-data-[state=checked]:color-text-highlighted'
          }
        },
        size: {
          xs: {
            base: 'w-7',
            container: 'h-4',
            thumb: 'size-3 data-[state=checked]:translate-x-3 data-[state=checked]:rtl:-translate-x-3',
            wrapper: 'text-xs'
          },
          sm: {
            base: 'w-8',
            container: 'h-4',
            thumb: 'size-3.5 data-[state=checked]:translate-x-3.5 data-[state=checked]:rtl:-translate-x-3.5',
            wrapper: 'text-xs'
          },
          md: {
            base: 'w-9',
            container: 'h-5',
            thumb: 'size-4 data-[state=checked]:translate-x-4 data-[state=checked]:rtl:-translate-x-4',
            wrapper: 'text-sm'
          },
          lg: {
            base: 'w-10',
            container: 'h-5',
            thumb: 'size-4.5 data-[state=checked]:translate-x-4.5 data-[state=checked]:rtl:-translate-x-4.5',
            wrapper: 'text-sm'
          },
          xl: {
            base: 'w-11',
            container: 'h-6',
            thumb: 'size-5 data-[state=checked]:translate-x-5 data-[state=checked]:rtl:-translate-x-5',
            wrapper: 'text-base'
          }
        },
        checked: {
          true: {
            icon: 'group-data-[state=checked]:opacity-100'
          }
        },
        unchecked: {
          true: {
            icon: 'group-data-[state=unchecked]:opacity-100'
          }
        },
        loading: {
          true: {
            icon: 'animate-spin'
          }
        },
        highlight: {
          true: ''
        },
        required: {
          true: {
            label: "after:content-['*'] after:ms-0.5 after:color-error"
          }
        },
        disabled: {
          true: {
            root: 'opacity-75',
            base: 'cursor-not-allowed',
            label: 'cursor-not-allowed',
            description: 'cursor-not-allowed'
          }
        }
      },
      compoundVariants: [
        {
          color: 'primary',
          highlight: true,
          class: {
            base: 'ring ring-primary'
          }
        },
        {
          color: 'secondary',
          highlight: true,
          class: {
            base: 'ring ring-secondary'
          }
        },
        {
          color: 'success',
          highlight: true,
          class: {
            base: 'ring ring-success'
          }
        },
        {
          color: 'info',
          highlight: true,
          class: {
            base: 'ring ring-info'
          }
        },
        {
          color: 'warning',
          highlight: true,
          class: {
            base: 'ring ring-warning'
          }
        },
        {
          color: 'error',
          highlight: true,
          class: {
            base: 'ring ring-error'
          }
        },
        {
          color: 'neutral',
          highlight: true,
          class: {
            base: 'ring ring-ring-inverted'
          }
        }
      ],
      defaultVariants: {
        color: 'primary',
        size: 'md'
      }
    }
  }
})
```

## Changelog

See commit history for [component](https://github.com/vinicunca/pohon/commits/main/src/runtime/components/Switch.vue) and [theme](https://github.com/vinicunca/pohon/commits/main/src/theme/switch.ts).

---

- [Switch](/akar/components/switch)
- [GitHub](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/Switch.vue)


## Sitemap

See the full [sitemap](https://pohon.vinicunca.dev/sitemap.md) for all pages.

## Generated component API

[Switch source](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/Switch.vue)

### Props

- **as** — `any; optional`: The element or component this component should render as.
- **color** — `"primary" | "secondary" | "success" | "info" | "warning" | "error" | "neutral" | undefined; optional`
- **size** — `"md" | "xs" | "sm" | "lg" | "xl" | undefined; optional`
- **highlight** — `boolean | undefined; optional`: Highlight the ring color like a focus state.
- **loading** — `boolean | undefined; optional`: When \`true\`, the loading icon will be displayed.
- **loadingIcon** — `any; optional`: The icon when the \`loading\` prop is \`true\`.
- **checkedIcon** — `any; optional`: Display an icon when the switch is checked.
- **uncheckedIcon** — `any; optional`: Display an icon when the switch is unchecked.
- **label** — `string | undefined; optional`
- **description** — `string | undefined; optional`
- **ui** — `{ root?: SlotClass; base?: SlotClass; container?: SlotClass; thumb?: SlotClass; icon?: SlotClass; wrapper?: SlotClass; label?: SlotClass; description?: SlotClass; } | undefined; optional`
- **defaultValue** — `T | undefined; optional`: The state of the switch when it is initially rendered. Use when you do not need to control its state.
- **modelValue** — `T | null | undefined; optional`: The controlled state of the switch. Can be bind as \`v-model\`.
- **disabled** — `boolean | undefined; optional`: When \`true\`, prevents the user from interacting with the switch.
- **name** — `string | undefined; optional`: The name of the field. Submitted with its owning form as part of a name/value pair.
- **required** — `boolean | undefined; optional`: When \`true\`, indicates that the user must set the value before the owning form can be submitted.
- **id** — `string | undefined; optional`
- **value** — `string | undefined; optional`: The value given as data when submitted with a \`name\`.
- **trueValue** — `T | undefined; optional`: The value used when the switch is on. Defaults to \`true\`.
- **falseValue** — `T | undefined; optional`: The value used when the switch is off. Defaults to \`false\`.
- **form** — `string | undefined; optional`
- **autofocus** — `Booleanish | undefined; optional`
- **formaction** — `string | undefined; optional`
- **formenctype** — `string | undefined; optional`
- **formmethod** — `string | undefined; optional`
- **formnovalidate** — `Booleanish | undefined; optional`
- **formtarget** — `string | undefined; optional`

### Slots

- **label** — `{ label: string | undefined; }`
- **description** — `{ description: string | undefined; }`

### Events

- **update:modelValue** — `[payload: T]`
- **change** — `[event: Event]`
