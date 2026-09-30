---
title: "PinInput"
description: "An input element to enter a pin."
package: pohon
sourceTag: "v2.0.1"
sourceCommit: "ee987babf834bae617d75a9c6b9347bba1a494df"
sourceUrl: "https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/docs/content/docs/2.components/pin-input.md"
---
## Usage

Use the `v-model` directive to control the value of the PinInput.

```vue
<script setup lang="ts">
const value = ref([])
</script>

<template>
  <UPinInput v-model="value" />
</template>
```

Use the `default-value` prop to set the initial value when you do not need to control its state.

```vue
<template>
  <UPinInput :default-value="[
  '1',
  '2',
  '3'
]" />
</template>
```

### Type

Use the `type` prop to change the input type. Defaults to `text`.

```vue
<template>
  <UPinInput type="number" />
</template>
```

> [!NOTE]
> 
> When `type` is set to `number`, it will only accept numeric characters.

### Mask

Use the `mask` prop to treat the input like a password.

```vue
<template>
  <UPinInput mask :default-value="[
  '1',
  '2',
  '3',
  '4',
  '5'
]" />
</template>
```

### OTP

Use the `otp` prop to enable One-Time Password functionality. When enabled, mobile devices can automatically detect and fill OTP codes from SMS messages or clipboard content, with autocomplete support.

```vue
<template>
  <UPinInput otp />
</template>
```

### Placeholder

Use the `placeholder` prop to set a placeholder text.

```vue
<template>
  <UPinInput placeholder="○" />
</template>
```

### Length

Use the `length` prop to change the amount of inputs.

```vue
<template>
  <UPinInput :length="6" placeholder="○" />
</template>
```

### Separator

Use the `separator` prop to insert a separator between groups of inputs. Pass a number to insert one after every Nth input.

```vue
<template>
  <UPinInput :length="6" :separator="3" placeholder="○" />
</template>
```

You can also pass an array of positions to insert separators after specific inputs.

```vue
<template>
  <UPinInput :length="7" :separator="[
  3,
  4
]" placeholder="○" />
</template>
```

### Color

Use the `color` prop to change the ring color when the PinInput is focused.

```vue
<template>
  <UPinInput color="neutral" highlight placeholder="○" />
</template>
```

> [!NOTE]
> 
> The `highlight` prop is used here to show the focus state. It's used internally when a validation error occurs.

### Variant

Use the `variant` prop to change the variant of the PinInput.

```vue
<template>
  <UPinInput color="neutral" variant="subtle" :highlight="false" placeholder="○" />
</template>
```

### Size

Use the `size` prop to change the size of the PinInput.

```vue
<template>
  <UPinInput size="xl" placeholder="○" />
</template>
```

### Disabled

Use the `disabled` prop to disable the PinInput.

```vue
<template>
  <UPinInput disabled placeholder="○" />
</template>
```

## Examples

### With separator slot

Use the `separator` slot to customize the separator appearance.

```vue [PinInputSeparatorSlotExample.vue]
<template>
  <PPinInput :length="6" :separator="3" placeholder="○">
    <template #separator>
      <PIcon name="i-lucide-minus" class="size-4" />
    </template>
  </PPinInput>
</template>
```

## API

### Props

### Slots

### Emits

No events available for this component.

### Expose

When accessing the component via a template ref, you can use the following:

| Name | Type |
| --- | --- |
| `inputsRef` | `Ref<ComponentPublicInstance[]>` |

## Theme

```ts [app.config.ts]
export default defineAppConfig({
  ui: {
    pinInput: {
      slots: {
        root: 'relative inline-flex items-center gap-1.5',
        base: [
          'rounded-md border-0 placeholder:color-text-dimmed text-center disabled:cursor-not-allowed disabled:opacity-75',
          'transition-colors'
        ],
        separator: 'color-text-dimmed flex items-center justify-center'
      },
      variants: {
        size: {
          xs: {
            base: 'size-6 text-sm/4'
          },
          sm: {
            base: 'size-7 text-sm/4'
          },
          md: {
            base: 'size-8 text-base/5'
          },
          lg: {
            base: 'size-9 text-base/5'
          },
          xl: {
            base: 'size-10 text-base'
          }
        },
        variant: {
          outline: 'color-text-highlighted bg-background ring ring-inset ring-ring-accented',
          soft: 'color-text-highlighted bg-background-elevated/50 hover:bg-background-elevated focus:bg-background-elevated disabled:bg-background-elevated/50',
          subtle: 'color-text-highlighted bg-background-elevated ring ring-inset ring-ring-accented',
          ghost: 'color-text-highlighted bg-transparent hover:bg-background-elevated focus:bg-background-elevated disabled:bg-transparent dark:disabled:bg-transparent',
          none: 'color-text-highlighted bg-transparent focus:outline-none'
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
        highlight: {
          true: ''
        },
        fixed: {
          false: ''
        }
      },
      compoundVariants: [
        {
          color: 'primary',
          variant: [
            'outline',
            'subtle'
          ],
          class: 'outline-primary/25 focus-visible:outline-3 focus-visible:ring-primary'
        },
        {
          color: 'secondary',
          variant: [
            'outline',
            'subtle'
          ],
          class: 'outline-secondary/25 focus-visible:outline-3 focus-visible:ring-secondary'
        },
        {
          color: 'success',
          variant: [
            'outline',
            'subtle'
          ],
          class: 'outline-success/25 focus-visible:outline-3 focus-visible:ring-success'
        },
        {
          color: 'info',
          variant: [
            'outline',
            'subtle'
          ],
          class: 'outline-info/25 focus-visible:outline-3 focus-visible:ring-info'
        },
        {
          color: 'warning',
          variant: [
            'outline',
            'subtle'
          ],
          class: 'outline-warning/25 focus-visible:outline-3 focus-visible:ring-warning'
        },
        {
          color: 'error',
          variant: [
            'outline',
            'subtle'
          ],
          class: 'outline-error/25 focus-visible:outline-3 focus-visible:ring-error'
        },
        {
          color: 'primary',
          variant: [
            'soft',
            'ghost'
          ],
          class: 'outline-primary/25 focus-visible:outline-3'
        },
        {
          color: 'secondary',
          variant: [
            'soft',
            'ghost'
          ],
          class: 'outline-secondary/25 focus-visible:outline-3'
        },
        {
          color: 'success',
          variant: [
            'soft',
            'ghost'
          ],
          class: 'outline-success/25 focus-visible:outline-3'
        },
        {
          color: 'info',
          variant: [
            'soft',
            'ghost'
          ],
          class: 'outline-info/25 focus-visible:outline-3'
        },
        {
          color: 'warning',
          variant: [
            'soft',
            'ghost'
          ],
          class: 'outline-warning/25 focus-visible:outline-3'
        },
        {
          color: 'error',
          variant: [
            'soft',
            'ghost'
          ],
          class: 'outline-error/25 focus-visible:outline-3'
        },
        {
          color: 'primary',
          highlight: true,
          class: 'ring ring-inset ring-primary'
        },
        {
          color: 'secondary',
          highlight: true,
          class: 'ring ring-inset ring-secondary'
        },
        {
          color: 'success',
          highlight: true,
          class: 'ring ring-inset ring-success'
        },
        {
          color: 'info',
          highlight: true,
          class: 'ring ring-inset ring-info'
        },
        {
          color: 'warning',
          highlight: true,
          class: 'ring ring-inset ring-warning'
        },
        {
          color: 'error',
          highlight: true,
          class: 'ring ring-inset ring-error'
        },
        {
          color: 'neutral',
          variant: [
            'outline',
            'subtle'
          ],
          class: 'outline-outline-inverted/25 focus-visible:outline-3 focus-visible:ring-ring-inverted'
        },
        {
          color: 'neutral',
          variant: [
            'soft',
            'ghost'
          ],
          class: 'outline-outline-inverted/25 focus-visible:outline-3'
        },
        {
          color: 'neutral',
          highlight: true,
          class: 'ring ring-inset ring-ring-inverted'
        },
        {
          fixed: false,
          size: 'xs',
          class: 'md:text-xs'
        },
        {
          fixed: false,
          size: 'sm',
          class: 'md:text-xs'
        },
        {
          fixed: false,
          size: 'md',
          class: 'md:text-sm'
        },
        {
          fixed: false,
          size: 'lg',
          class: 'md:text-sm'
        }
      ],
      defaultVariants: {
        size: 'md',
        color: 'primary',
        variant: 'outline'
      }
    }
  }
})
```

## Changelog

See commit history for [component](https://github.com/vinicunca/pohon/commits/main/src/runtime/components/PinInput.vue) and [theme](https://github.com/vinicunca/pohon/commits/main/src/theme/pin-input.ts).

---

- [PinInput](/akar/components/pin-input)
- [GitHub](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/PinInput.vue)


## Sitemap

See the full [sitemap](https://pohon.vinicunca.dev/sitemap.md) for all pages.

## Generated component API

[PinInput source](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/PinInput.vue)

### Props

- **as** — `any; optional`: The element or component this component should render as.
- **color** — `"primary" | "secondary" | "success" | "info" | "warning" | "error" | "neutral" | undefined; optional`
- **variant** — `"outline" | "soft" | "subtle" | "ghost" | "none" | undefined; optional`
- **size** — `"md" | "xs" | "sm" | "lg" | "xl" | undefined; optional`
- **length** — `string | number | undefined; optional; default: 5`: The number of input fields.
- **autofocus** — `boolean | undefined; optional`
- **autofocusDelay** — `number | undefined; optional; default: 0`
- **highlight** — `boolean | undefined; optional`
- **fixed** — `boolean | undefined; optional`: Keep the mobile text size on all breakpoints.
- **separator** — `number | number[] | undefined; optional`: Group inputs by inserting a separator between them. Pass a number to insert one after every Nth input, or an array of positions to insert after specific inputs.
- **ui** — `{ root?: SlotClass; base?: SlotClass; separator?: SlotClass; } | undefined; optional`
- **defaultValue** — `PinInputValue<T> | undefined; optional`: The default value of the pin inputs when it is initially rendered. Use when you do not need to control its checked state.
- **modelValue** — `PinInputValue<T> | null | undefined; optional`: The controlled checked state of the pin input. Can be binded as \`v-model\`.
- **type** — `T | undefined; optional; default: "text" as never`: Input type for the inputs.
- **disabled** — `boolean | undefined; optional`: When \`true\`, prevents the user from interacting with the pin input
- **name** — `string | undefined; optional`: The name of the field. Submitted with its owning form as part of a name/value pair.
- **required** — `boolean | undefined; optional`: When \`true\`, indicates that the user must set the value before the owning form can be submitted.
- **otp** — `boolean | undefined; optional`: When \`true\`, mobile devices will autodetect the OTP from messages or clipboard, and enable the autocomplete field.
- **id** — `string | undefined; optional`: Id of the element
- **mask** — `boolean | undefined; optional`: When \`true\`, pin inputs will be treated as password.
- **placeholder** — `string | undefined; optional`: The placeholder character to use for empty pin-inputs.

### Slots

- **separator** — `{ index: number; }`

### Events

- **update:modelValue** — `[value: PinInputValue<T>]`
- **blur** — `[event: Event]`
- **change** — `[event: Event]`
- **focus** — `[event: Event]`
- **complete** — `[value: PinInputValue<T>]`
