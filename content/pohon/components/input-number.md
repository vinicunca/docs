---
title: "InputNumber"
description: "An input for numerical values with a customizable range."
package: pohon
sourceTag: "v2.0.1"
sourceCommit: "ee987babf834bae617d75a9c6b9347bba1a494df"
sourceUrl: "https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/docs/content/docs/2.components/input-number.md"
---
## Usage

Use the `v-model` directive to control the value of the InputNumber.

```vue
<script setup lang="ts">
const value = ref(5)
</script>

<template>
  <UInputNumber v-model="value" />
</template>
```

Use the `default-value` prop to set the initial value when you do not need to control its state.

```vue
<template>
  <UInputNumber :default-value="5" />
</template>
```

> [!NOTE]
> 
> This component relies on the [`@internationalized/number`](https://react-spectrum.adobe.com/internationalized/number/index.html) package which provides utilities for formatting and parsing numbers across locales and numbering systems.

### Min / Max

Use the `min` and `max` props to set the minimum and maximum values of the InputNumber.

```vue
<script setup lang="ts">
const value = ref(5)
</script>

<template>
  <UInputNumber v-model="value" :min="0" :max="10" />
</template>
```

### Step

Use the `step` prop to set the step value of the InputNumber.

```vue
<script setup lang="ts">
const value = ref(5)
</script>

<template>
  <UInputNumber v-model="value" :step="2" />
</template>
```

### Orientation

Use the `orientation` prop to change the orientation of the InputNumber.

```vue
<script setup lang="ts">
const value = ref(5)
</script>

<template>
  <UInputNumber v-model="value" orientation="vertical" />
</template>
```

### Placeholder

Use the `placeholder` prop to set a placeholder text.

```vue
<template>
  <UInputNumber placeholder="Enter a number" />
</template>
```

### Color

Use the `color` prop to change the ring color when the InputNumber is focused.

```vue
<script setup lang="ts">
const value = ref(5)
</script>

<template>
  <UInputNumber v-model="value" color="neutral" highlight />
</template>
```

### Variant

Use the `variant` prop to change the variant of the InputNumber.

```vue
<script setup lang="ts">
const value = ref(5)
</script>

<template>
  <UInputNumber v-model="value" variant="subtle" color="neutral" :highlight="false" />
</template>
```

### Size

Use the `size` prop to change the size of the InputNumber.

```vue
<script setup lang="ts">
const value = ref(5)
</script>

<template>
  <UInputNumber v-model="value" size="xl" />
</template>
```

### Disabled

Use the `disabled` prop to disable the InputNumber.

```vue
<script setup lang="ts">
const value = ref(5)
</script>

<template>
  <UInputNumber v-model="value" disabled />
</template>
```

### Increment / Decrement

Use the `increment` and `decrement` props to customize the increment and decrement buttons with any [Button](/pohon/components/button) props. Defaults to `{ variant: 'link' }`.

```vue
<script setup lang="ts">
const value = ref(5)
</script>

<template>
  <UInputNumber v-model="value" :increment="{
  color: 'neutral',
  variant: 'solid',
  size: 'xs'
}" :decrement="{
  color: 'neutral',
  variant: 'solid',
  size: 'xs'
}" />
</template>
```

### Increment / Decrement Icons

Use the `increment-icon` and `decrement-icon` props to customize the buttons [Icon](/pohon/components/icon). Defaults to `i-lucide-plus` / `i-lucide-minus`.

```vue
<script setup lang="ts">
const value = ref(5)
</script>

<template>
  <UInputNumber v-model="value" increment-icon="i-lucide-arrow-right" decrement-icon="i-lucide-arrow-left" />
</template>
```

## Examples

### With decimal format

Use the `format-options` prop to customize the format of the value.

```vue [InputNumberDecimalExample.vue]
<script setup lang="ts">
const value = ref(5)
</script>

<template>
  <PInputNumber
    v-model="value"
    :format-options="{
      signDisplay: 'exceptZero',
      minimumFractionDigits: 1
    }"
  />
</template>
```

### With percentage format

Use the `format-options` prop with `style: 'percent'` to customize the format of the value.

```vue [InputNumberPercentageExample.vue]
<script setup lang="ts">
const value = ref(0.05)
</script>

<template>
  <PInputNumber
    v-model="value"
    :step="0.01"
    :format-options="{
      style: 'percent'
    }"
  />
</template>
```

### With currency format

Use the `format-options` prop with `style: 'currency'` to customize the format of the value.

```vue [InputNumberCurrencyExample.vue]
<script setup lang="ts">
const value = ref(1500)
</script>

<template>
  <PInputNumber
    v-model="value"
    :format-options="{
      style: 'currency',
      currency: 'EUR',
      currencyDisplay: 'code',
      currencySign: 'accounting'
    }"
  />
</template>
```

### Without buttons

You can use the `increment` and `decrement` props to control visibility of the buttons.

```vue [InputNumberWithoutButtonsExample.vue]
<script setup lang="ts">
const value = ref(5)
</script>

<template>
  <PInputNumber
    v-model="value"
    :increment="false"
    :decrement="false"
  />
</template>
```

### Within a FormField

You can use the InputNumber within a [FormField](/pohon/components/form-field) component to display a label, help text, required indicator, etc.

```vue [InputNumberFormFieldExample.vue]
<script setup lang="ts">
const retries = ref(0)
</script>

<template>
  <PFormField label="Retries" help="Specify number of attempts" required>
    <PInputNumber v-model="retries" placeholder="Enter retries" />
  </PFormField>
</template>
```

### With slots

Use the `#increment` and `#decrement` slots to customize the buttons.

```vue [InputNumberSlotsExample.vue]
<script setup lang="ts">
const value = ref(5)
</script>

<template>
  <PInputNumber v-model="value">
    <template #decrement>
      <PButton size="xs" icon="i-lucide-minus" />
    </template>

    <template #increment>
      <PButton size="xs" icon="i-lucide-plus" />
    </template>
  </PInputNumber>
</template>
```

## API

### Props

> [!NOTE]
> See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attributes
> 
> This component also supports all native `<input>` HTML attributes.

### Slots

### Emits

No events available for this component.

### Expose

When accessing the component via a template ref, you can use the following:

| Name | Type |
| --- | --- |
| `inputRef` | `Ref<HTMLInputElement \| null>` |

## Theme

```ts [app.config.ts]
export default defineAppConfig({
  ui: {
    inputNumber: {
      slots: {
        root: 'relative inline-flex items-center',
        base: [
          'w-full rounded-md border-0 placeholder:color-text-dimmed disabled:cursor-not-allowed disabled:opacity-75',
          'transition-colors'
        ],
        increment: 'absolute flex items-center',
        decrement: 'absolute flex items-center'
      },
      variants: {
        fieldGroup: {
          horizontal: {
            root: 'group has-focus-visible:z-1',
            base: 'group-not-only:group-first:rounded-e-none group-not-only:group-last:rounded-s-none group-not-last:group-not-first:rounded-none'
          },
          vertical: {
            root: 'group has-focus-visible:z-1',
            base: 'group-not-only:group-first:rounded-b-none group-not-only:group-last:rounded-t-none group-not-last:group-not-first:rounded-none'
          }
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
        size: {
          xs: 'px-2 py-1 text-sm/4 gap-1',
          sm: 'px-2.5 py-1.5 text-sm/4 gap-1.5',
          md: 'px-2.5 py-1.5 text-base/5 gap-1.5',
          lg: 'px-3 py-2 text-base/5 gap-2',
          xl: 'px-3 py-2 text-base gap-2'
        },
        variant: {
          outline: 'color-text-highlighted bg-background ring ring-inset ring-ring-accented',
          soft: 'color-text-highlighted bg-background-elevated/50 hover:bg-background-elevated focus:bg-background-elevated disabled:bg-background-elevated/50',
          subtle: 'color-text-highlighted bg-background-elevated ring ring-inset ring-ring-accented',
          ghost: 'color-text-highlighted bg-transparent hover:bg-background-elevated focus:bg-background-elevated disabled:bg-transparent dark:disabled:bg-transparent',
          none: 'color-text-highlighted bg-transparent focus:outline-none'
        },
        disabled: {
          true: {
            increment: 'opacity-75 cursor-not-allowed',
            decrement: 'opacity-75 cursor-not-allowed'
          }
        },
        orientation: {
          horizontal: {
            base: 'text-center',
            increment: 'inset-y-0 end-0 pe-1',
            decrement: 'inset-y-0 start-0 ps-1'
          },
          vertical: {
            increment: 'top-0 end-0 pe-1 [&>button]:py-0 scale-80',
            decrement: 'bottom-0 end-0 pe-1 [&>button]:py-0 scale-80'
          }
        },
        highlight: {
          true: ''
        },
        fixed: {
          false: ''
        },
        increment: {
          false: ''
        },
        decrement: {
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
          orientation: 'horizontal',
          decrement: false,
          class: 'text-start'
        },
        {
          decrement: true,
          size: 'xs',
          class: 'ps-7'
        },
        {
          decrement: true,
          size: 'sm',
          class: 'ps-8'
        },
        {
          decrement: true,
          size: 'md',
          class: 'ps-9'
        },
        {
          decrement: true,
          size: 'lg',
          class: 'ps-10'
        },
        {
          decrement: true,
          size: 'xl',
          class: 'ps-11'
        },
        {
          increment: true,
          size: 'xs',
          class: 'pe-7'
        },
        {
          increment: true,
          size: 'sm',
          class: 'pe-8'
        },
        {
          increment: true,
          size: 'md',
          class: 'pe-9'
        },
        {
          increment: true,
          size: 'lg',
          class: 'pe-10'
        },
        {
          increment: true,
          size: 'xl',
          class: 'pe-11'
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

See commit history for [component](https://github.com/vinicunca/pohon/commits/main/src/runtime/components/InputNumber.vue) and [theme](https://github.com/vinicunca/pohon/commits/main/src/theme/input-number.ts).

---

- [NumberField](https://www.akar.com/docs/components/number-field)
- [GitHub](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/InputNumber.vue)


## Sitemap

See the full [sitemap](https://pohon.vinicunca.dev/sitemap.md) for all pages.

## Generated component API

[InputNumber source](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/InputNumber.vue)

### Props

- **as** — `any; optional`: The element or component this component should render as.
- **placeholder** — `string | undefined; optional`: The placeholder text when the input is empty.
- **color** — `"primary" | "secondary" | "success" | "info" | "warning" | "error" | "neutral" | undefined; optional`
- **variant** — `"outline" | "soft" | "subtle" | "ghost" | "none" | undefined; optional`
- **size** — `"md" | "xs" | "sm" | "lg" | "xl" | undefined; optional`
- **highlight** — `boolean | undefined; optional`: Highlight the ring color like a focus state.
- **fixed** — `boolean | undefined; optional`: Keep the mobile text size on all breakpoints.
- **orientation** — `"vertical" | "horizontal" | undefined; optional; default: "horizontal"`: The orientation of the input number.
- **increment** — `boolean | Omit<ButtonProps, LinkPropsKeys> | undefined; optional; default: true`: Configure the increment button. The \`color\` and \`size\` are inherited.
- **incrementIcon** — `any; optional`: The icon displayed to increment the value.
- **incrementDisabled** — `boolean | undefined; optional`: Disable the increment button.
- **decrement** — `boolean | Omit<ButtonProps, LinkPropsKeys> | undefined; optional; default: true`: Configure the decrement button. The \`color\` and \`size\` are inherited.
- **decrementIcon** — `any; optional`: The icon displayed to decrement the value.
- **decrementDisabled** — `boolean | undefined; optional`: Disable the decrement button.
- **autofocus** — `boolean | undefined; optional`
- **autofocusDelay** — `number | undefined; optional`
- **defaultValue** — `NonNullable<T> | undefined; optional`
- **modelValue** — `ApplyModifiers<T, Mod> | undefined; optional`
- **modelModifiers** — `Mod | undefined; optional`
- **ui** — `{ root?: SlotClass; base?: SlotClass; increment?: SlotClass; decrement?: SlotClass; } | undefined; optional`
- **disabled** — `boolean | undefined; optional`: When \`true\`, prevents the user from interacting with the Number Field.
- **name** — `string | undefined; optional`: The name of the field. Submitted with its owning form as part of a name/value pair.
- **step** — `number | undefined; optional`: The amount that the input value changes with each increment or decrement "tick".
- **locale** — `string | undefined; optional`: The locale to use for formatting and currencies
- **required** — `boolean | undefined; optional`: When \`true\`, indicates that the user must set the value before the owning form can be submitted.
- **id** — `string | undefined; optional`: Id of the element
- **max** — `number | undefined; optional`: The largest value allowed for the input.
- **min** — `number | undefined; optional`: The smallest value allowed for the input.
- **readonly** — `boolean | undefined; optional`: When \`true\`, the Number Field is read-only.
- **stepSnapping** — `boolean | undefined; optional`: When \`false\`, prevents the value from snapping to the nearest increment of the step value
- **formatOptions** — `Intl.NumberFormatOptions | undefined; optional`: Formatting options for the value displayed in the number field. This also affects what characters are allowed to be typed by the user.
- **disableWheelChange** — `boolean | undefined; optional`: When \`true\`, prevents the value from changing on wheel scroll.
- **invertWheelChange** — `boolean | undefined; optional`: When \`true\`, inverts the direction of the wheel change.
- **focusOnChange** — `boolean | undefined; optional`: When \`true\`, the input will be focused when the value changes.
- **form** — `string | undefined; optional`
- **list** — `string | undefined; optional`
- **formaction** — `string | undefined; optional`
- **formenctype** — `string | undefined; optional`
- **formmethod** — `string | undefined; optional`
- **formnovalidate** — `Booleanish | undefined; optional`
- **formtarget** — `string | undefined; optional`
- **enterKeyHint** — `"search" | "done" | "next" | "enter" | "go" | "previous" | "send" | undefined; optional`
- **autocomplete** — `(string & {}) | "on" | "off" | undefined; optional`

### Slots

- **increment** — `{} | undefined`
- **decrement** — `{} | undefined`

### Events

- **update:modelValue** — `[value: ApplyModifiers<T, Mod>]`
- **blur** — `[event: FocusEvent]`
- **change** — `[event: Event]`
