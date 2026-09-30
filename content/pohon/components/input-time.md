---
title: "InputTime"
description: "An input for selecting a time."
package: pohon
sourceTag: "v2.0.1"
sourceCommit: "ee987babf834bae617d75a9c6b9347bba1a494df"
sourceUrl: "https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/docs/content/docs/2.components/input-time.md"
---
## Usage

Use the `v-model` directive to control the selected time.

```vue
<script setup lang="ts">
import { Time } from '@internationalized/date'

const value = shallowRef(new Time(12, 30, 0))
</script>

<template>
  <UInputTime v-model="value" />
</template>
```

Use the `default-value` prop to set the initial value when you do not need to control its state.

```vue
<script setup lang="ts">
import { Time } from '@internationalized/date'

const defaultValue = shallowRef(new Time(9, 45, 0))
</script>

<template>
  <UInputTime :default-value="defaultValue" />
</template>
```

**Nuxt:**

> [!NOTE]
> See: /docs/getting-started/integrations/i18n/nuxt#locale
> 
> This component uses the `@internationalized/date` package for locale-aware formatting. The time format is determined by the `locale` prop of the App component.

**Vue:**

> [!NOTE]
> See: /docs/getting-started/integrations/i18n/vue#locale
> 
> This component uses the `@internationalized/date` package for locale-aware formatting. The time format is determined by the `locale` prop of the App component.

### Range

Use the `range` prop to enable time range selection with start and end times.

```vue
<script setup lang="ts">
import { Time } from '@internationalized/date'

const value = shallowRef({ start: new Time(9, 0, 0), end: new Time(17, 30, 0) })
</script>

<template>
  <UInputTime range v-model="value" />
</template>
```

### Hour Cycle

Use the `hour-cycle` prop to change the hour cycle of the InputTime. Defaults to `12`.

```vue
<script setup lang="ts">
import { Time } from '@internationalized/date'

const defaultValue = shallowRef(new Time(16, 30, 0))
</script>

<template>
  <UInputTime :hour-cycle="24" :default-value="defaultValue" />
</template>
```

### Color

Use the `color` prop to change the color of the InputTime.

```vue
<template>
  <UInputTime color="neutral" highlight />
</template>
```

> [!NOTE]
> 
> The `highlight` prop is used here to show the focus state. It's used internally when a validation error occurs.

### Variant

Use the `variant` prop to change the variant of the InputTime.

```vue
<template>
  <UInputTime variant="subtle" />
</template>
```

### Size

Use the `size` prop to change the size of the InputTime.

```vue
<template>
  <UInputTime size="xl" />
</template>
```

### Icon

Use the `icon` prop to show an [Icon](/pohon/components/icon) inside the InputTime.

```vue
<template>
  <UInputTime icon="i-lucide-clock" />
</template>
```

> [!NOTE]
> 
> Use the `leading` and `trailing` props to set the icon position or the `leading-icon` and `trailing-icon` props to set a different icon for each position.

### Separator Icon

Use the `separator-icon` prop to change the [Icon](/pohon/components/icon) of the range separator. Defaults to `i-lucide-minus`.

```vue
<template>
  <UInputTime range separator-icon="i-lucide-arrow-right" />
</template>
```

**Nuxt:**

> [!TIP]
> See: /docs/getting-started/integrations/icons/nuxt#theme
> 
> You can customize this icon globally in your `app.config.ts` under `ui.icons.minus` key.

**Vue:**

> [!TIP]
> See: /docs/getting-started/integrations/icons/vue#theme
> 
> You can customize this icon globally in your `vite.config.ts` under `ui.icons.minus` key.

### Avatar

Use the `avatar` prop to show an [Avatar](/pohon/components/avatar) inside the InputTime.

```vue
<template>
  <UInputTime :avatar="{
  src: 'https://github.com/vuejs.png',
  loading: 'lazy'
}" size="md" variant="outline" />
</template>
```

### Disabled

Use the `disabled` prop to disable the InputTime.

```vue
<template>
  <UInputTime disabled />
</template>
```

## Examples

### Within a FormField

You can use the InputTime within a [FormField](/pohon/components/form-field) component to display a label, help text, required indicator, etc.

```vue [InputTimeFormFieldExample.vue]
<script setup lang="ts">
import { Time } from '@internationalized/date'

const time = shallowRef(new Time(12, 30, 0))
</script>

<template>
  <PFormField label="Time" help="Specify the time" required>
    <PInputTime v-model="time" />
  </PFormField>
</template>
```

## API

### Props

### Slots

### Emits

No events available for this component.

## Theme

```ts [app.config.ts]
export default defineAppConfig({
  ui: {
    inputTime: {
      slots: {
        base: [
          'group relative inline-flex items-center rounded-md select-none',
          'transition-colors'
        ],
        leading: 'absolute inset-y-0 start-0 flex items-center',
        leadingIcon: 'shrink-0 color-text-dimmed',
        leadingAvatar: 'shrink-0',
        leadingAvatarSize: '',
        trailing: 'absolute inset-y-0 end-0 flex items-center',
        trailingIcon: 'shrink-0 color-text-dimmed',
        segment: [
          'rounded-sm text-center outline-hidden data-placeholder:color-text-dimmed data-[segment=literal]:color-text-muted data-invalid:color-error data-disabled:cursor-not-allowed data-disabled:opacity-75',
          'transition-colors'
        ],
        separatorIcon: 'shrink-0 size-4 color-text-muted'
      },
      variants: {
        fieldGroup: {
          horizontal: 'not-only:first:rounded-e-none not-only:last:rounded-s-none not-last:not-first:rounded-none focus-visible:z-1',
          vertical: 'not-only:first:rounded-b-none not-only:last:rounded-t-none not-last:not-first:rounded-none focus-visible:z-1'
        },
        size: {
          xs: {
            base: [
              'px-2 py-1 text-sm/4 gap-1',
              'gap-0.25'
            ],
            leading: 'ps-2',
            trailing: 'pe-2',
            leadingIcon: 'size-4',
            leadingAvatarSize: '3xs',
            trailingIcon: 'size-4',
            segment: 'not-data-[segment=literal]:w-8'
          },
          sm: {
            base: [
              'px-2.5 py-1.5 text-sm/4 gap-1.5',
              'gap-0.5'
            ],
            leading: 'ps-2.5',
            trailing: 'pe-2.5',
            leadingIcon: 'size-4',
            leadingAvatarSize: '3xs',
            trailingIcon: 'size-4',
            segment: 'not-data-[segment=literal]:w-8'
          },
          md: {
            base: [
              'px-2.5 py-1.5 text-base/5 gap-1.5',
              'gap-0.5'
            ],
            leading: 'ps-2.5',
            trailing: 'pe-2.5',
            leadingIcon: 'size-5',
            leadingAvatarSize: '2xs',
            trailingIcon: 'size-5',
            segment: 'not-data-[segment=literal]:w-9'
          },
          lg: {
            base: [
              'px-3 py-2 text-base/5 gap-2',
              'gap-0.75'
            ],
            leading: 'ps-3',
            trailing: 'pe-3',
            leadingIcon: 'size-5',
            leadingAvatarSize: '2xs',
            trailingIcon: 'size-5',
            segment: 'not-data-[segment=literal]:w-9'
          },
          xl: {
            base: [
              'px-3 py-2 text-base gap-2',
              'gap-0.75'
            ],
            leading: 'ps-3',
            trailing: 'pe-3',
            leadingIcon: 'size-6',
            leadingAvatarSize: 'xs',
            trailingIcon: 'size-6',
            segment: 'not-data-[segment=literal]:w-10'
          }
        },
        variant: {
          outline: 'color-text-highlighted bg-background ring ring-inset ring-ring-accented',
          soft: 'color-text-highlighted bg-background-elevated/50 hover:bg-background-elevated has-focus:bg-background-elevated disabled:bg-background-elevated/50',
          subtle: 'color-text-highlighted bg-background-elevated ring ring-inset ring-ring-accented',
          ghost: 'color-text-highlighted bg-transparent hover:bg-background-elevated has-focus:bg-background-elevated disabled:bg-transparent dark:disabled:bg-transparent',
          none: 'color-text-highlighted bg-transparent has-focus:outline-none'
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
        leading: {
          true: ''
        },
        trailing: {
          true: ''
        },
        loading: {
          true: ''
        },
        highlight: {
          true: ''
        },
        fixed: {
          false: ''
        },
        type: {
          file: 'file:me-1.5 file:font-500 file:color-text-muted file:outline-none'
        }
      },
      compoundVariants: [
        {
          color: 'primary',
          variant: [
            'outline',
            'subtle'
          ],
          class: 'outline-primary/25 has-focus-visible:outline-3 has-focus-visible:ring-primary'
        },
        {
          color: 'secondary',
          variant: [
            'outline',
            'subtle'
          ],
          class: 'outline-secondary/25 has-focus-visible:outline-3 has-focus-visible:ring-secondary'
        },
        {
          color: 'success',
          variant: [
            'outline',
            'subtle'
          ],
          class: 'outline-success/25 has-focus-visible:outline-3 has-focus-visible:ring-success'
        },
        {
          color: 'info',
          variant: [
            'outline',
            'subtle'
          ],
          class: 'outline-info/25 has-focus-visible:outline-3 has-focus-visible:ring-info'
        },
        {
          color: 'warning',
          variant: [
            'outline',
            'subtle'
          ],
          class: 'outline-warning/25 has-focus-visible:outline-3 has-focus-visible:ring-warning'
        },
        {
          color: 'error',
          variant: [
            'outline',
            'subtle'
          ],
          class: 'outline-error/25 has-focus-visible:outline-3 has-focus-visible:ring-error'
        },
        {
          color: 'primary',
          variant: [
            'soft',
            'ghost'
          ],
          class: 'outline-primary/25 has-focus-visible:outline-3'
        },
        {
          color: 'secondary',
          variant: [
            'soft',
            'ghost'
          ],
          class: 'outline-secondary/25 has-focus-visible:outline-3'
        },
        {
          color: 'success',
          variant: [
            'soft',
            'ghost'
          ],
          class: 'outline-success/25 has-focus-visible:outline-3'
        },
        {
          color: 'info',
          variant: [
            'soft',
            'ghost'
          ],
          class: 'outline-info/25 has-focus-visible:outline-3'
        },
        {
          color: 'warning',
          variant: [
            'soft',
            'ghost'
          ],
          class: 'outline-warning/25 has-focus-visible:outline-3'
        },
        {
          color: 'error',
          variant: [
            'soft',
            'ghost'
          ],
          class: 'outline-error/25 has-focus-visible:outline-3'
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
          class: 'outline-outline-inverted/25 has-focus-visible:outline-3 has-focus-visible:ring-ring-inverted'
        },
        {
          color: 'neutral',
          variant: [
            'soft',
            'ghost'
          ],
          class: 'outline-outline-inverted/25 has-focus-visible:outline-3'
        },
        {
          color: 'neutral',
          highlight: true,
          class: 'ring ring-inset ring-ring-inverted'
        },
        {
          leading: true,
          size: 'xs',
          class: 'ps-7'
        },
        {
          leading: true,
          size: 'sm',
          class: 'ps-8'
        },
        {
          leading: true,
          size: 'md',
          class: 'ps-9'
        },
        {
          leading: true,
          size: 'lg',
          class: 'ps-10'
        },
        {
          leading: true,
          size: 'xl',
          class: 'ps-11'
        },
        {
          trailing: true,
          size: 'xs',
          class: 'pe-7'
        },
        {
          trailing: true,
          size: 'sm',
          class: 'pe-8'
        },
        {
          trailing: true,
          size: 'md',
          class: 'pe-9'
        },
        {
          trailing: true,
          size: 'lg',
          class: 'pe-10'
        },
        {
          trailing: true,
          size: 'xl',
          class: 'pe-11'
        },
        {
          loading: true,
          leading: true,
          class: {
            leadingIcon: 'animate-spin'
          }
        },
        {
          loading: true,
          leading: false,
          trailing: true,
          class: {
            trailingIcon: 'animate-spin'
          }
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
        },
        {
          variant: 'outline',
          class: {
            segment: 'focus:bg-background-elevated'
          }
        },
        {
          variant: 'soft',
          class: {
            segment: 'focus:bg-background-accented/50 group-hover:focus:bg-background-accented'
          }
        },
        {
          variant: 'subtle',
          class: {
            segment: 'focus:bg-background-accented'
          }
        },
        {
          variant: 'ghost',
          class: {
            segment: 'focus:bg-background-elevated group-hover:focus:bg-background-accented'
          }
        },
        {
          variant: 'none',
          class: {
            segment: 'focus:bg-background-elevated'
          }
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

See commit history for [component](https://github.com/vinicunca/pohon/commits/main/src/runtime/components/InputTime.vue) and [theme](https://github.com/vinicunca/pohon/commits/main/src/theme/input-time.ts).

---

- [TimeField](/akar/components/time-field)
- [TimeRangeField](/akar/components/time-range-field)
- [GitHub](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/InputTime.vue)


## Sitemap

See the full [sitemap](https://pohon.vinicunca.dev/sitemap.md) for all pages.

## Generated component API

[InputTime source](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/InputTime.vue)

### Props

- **as** — `any; optional`: The element or component this component should render as.
- **color** — `"primary" | "secondary" | "success" | "info" | "warning" | "error" | "neutral" | undefined; optional`
- **variant** — `"outline" | "soft" | "subtle" | "ghost" | "none" | undefined; optional`
- **size** — `"md" | "xs" | "sm" | "lg" | "xl" | undefined; optional`
- **highlight** — `boolean | undefined; optional`: Highlight the ring color like a focus state.
- **fixed** — `boolean | undefined; optional`: Keep the mobile text size on all breakpoints.
- **autofocus** — `boolean | undefined; optional`
- **autofocusDelay** — `number | undefined; optional; default: 0`
- **separatorIcon** — `any; optional`: The icon to use as a range separator.
- **range** — `R | undefined; optional`: Enable time range selection.
- **defaultValue** — `InputTimeDefaultValue<R> | undefined; optional`: The value of the input when initially rendered. Use when you do not need to control the state of the input.
- **modelValue** — `InputTimeModelValue<R>; optional`: The controlled value of the input. Can be bind as \`v-model\`.
- **ui** — `{ base?: SlotClass; leading?: SlotClass; leadingIcon?: SlotClass; leadingAvatar?: SlotClass; leadingAvatarSize?: SlotClass; trailing?: SlotClass; trailingIcon?: SlotClass; segment?: SlotClass; separatorIcon?: SlotClass; } | undefined; optional`
- **icon** — `any; optional`: Display an icon based on the \`leading\` and \`trailing\` props.
- **avatar** — `AvatarProps | undefined; optional`: Display an avatar on the left side.
- **leading** — `boolean | undefined; optional`: When \`true\`, the icon will be displayed on the left side.
- **leadingIcon** — `any; optional`: Display an icon on the left side.
- **trailing** — `boolean | undefined; optional`: When \`true\`, the icon will be displayed on the right side.
- **trailingIcon** — `any; optional`: Display an icon on the right side.
- **loading** — `boolean | undefined; optional`: When \`true\`, the loading icon will be displayed.
- **loadingIcon** — `any; optional`: The icon when the \`loading\` prop is \`true\`.
- **disabled** — `boolean | undefined; optional`: Whether or not the time field is disabled
- **name** — `string | undefined; optional`: The name of the field. Submitted with its owning form as part of a name/value pair.
- **step** — `DateStep | undefined; optional`: The stepping interval for the time fields. Defaults to \`1\`.
- **locale** — `string | undefined; optional`: The locale to use for formatting dates
- **required** — `boolean | undefined; optional`: When \`true\`, indicates that the user must set the value before the owning form can be submitted.
- **id** — `string | undefined; optional`: Id of the element
- **placeholder** — `TimeValue | undefined; optional`: The placeholder date, which is used to determine what time to display when no time is selected. This updates as the user navigates the field
- **readonly** — `boolean | undefined; optional`: Whether or not the time field is readonly
- **defaultPlaceholder** — `TimeValue | undefined; optional`: The default placeholder date
- **maxValue** — `TimeValue | undefined; optional`: The maximum date that can be selected
- **minValue** — `TimeValue | undefined; optional`: The minimum date that can be selected
- **hourCycle** — `HourCycle; optional`: The hour cycle used for formatting times. Defaults to the local preference
- **stepSnapping** — `boolean | undefined; optional`: Whether to enforce snapping the value to the nearest step increment after input. Defaults to \`false\`.
- **granularity** — `"hour" | "minute" | "second" | undefined; optional`: The granularity to use for formatting times. Defaults to minute if a Time is provided, otherwise defaults to minute. The field will render segments for each part of the date up to and including the specified granularity
- **hideTimeZone** — `boolean | undefined; optional`: Whether or not to hide the time zone segment of the field
- **isTimeUnavailable** — `Matcher | undefined; optional`: A function that returns whether or not a time is unavailable

### Slots

- **leading** — `{ ui: { base: (props?: Record<string, any> | undefined) => string | undefined; leading: (props?: Record<string, any> | undefined) => string | undefined; leadingIcon: (props?: Record<string, any> | undefined) => string | undefined; leadingAvatar: (props?: Record<string, any> | undefined) => string | undefined; leadingAvatarSize: (props?: Record<string, any> | undefined) => string | undefined; trailing: (props?: Record<string, any> | undefined) => string | undefined; trailingIcon: (props?: Record<string, any> | undefined) => string | undefined; segment: (props?: Record<string, any> | undefined) => string | undefined; separatorIcon: (props?: Record<string, any> | undefined) => string | undefined; }; }`
- **default** — `{ ui: { base: (props?: Record<string, any> | undefined) => string | undefined; leading: (props?: Record<string, any> | undefined) => string | undefined; leadingIcon: (props?: Record<string, any> | undefined) => string | undefined; leadingAvatar: (props?: Record<string, any> | undefined) => string | undefined; leadingAvatarSize: (props?: Record<string, any> | undefined) => string | undefined; trailing: (props?: Record<string, any> | undefined) => string | undefined; trailingIcon: (props?: Record<string, any> | undefined) => string | undefined; segment: (props?: Record<string, any> | undefined) => string | undefined; separatorIcon: (props?: Record<string, any> | undefined) => string | undefined; }; }`
- **trailing** — `{ ui: { base: (props?: Record<string, any> | undefined) => string | undefined; leading: (props?: Record<string, any> | undefined) => string | undefined; leadingIcon: (props?: Record<string, any> | undefined) => string | undefined; leadingAvatar: (props?: Record<string, any> | undefined) => string | undefined; leadingAvatarSize: (props?: Record<string, any> | undefined) => string | undefined; trailing: (props?: Record<string, any> | undefined) => string | undefined; trailingIcon: (props?: Record<string, any> | undefined) => string | undefined; segment: (props?: Record<string, any> | undefined) => string | undefined; separatorIcon: (props?: Record<string, any> | undefined) => string | undefined; }; }`
- **separator** — `{ ui: { base: (props?: Record<string, any> | undefined) => string | undefined; leading: (props?: Record<string, any> | undefined) => string | undefined; leadingIcon: (props?: Record<string, any> | undefined) => string | undefined; leadingAvatar: (props?: Record<string, any> | undefined) => string | undefined; leadingAvatarSize: (props?: Record<string, any> | undefined) => string | undefined; trailing: (props?: Record<string, any> | undefined) => string | undefined; trailingIcon: (props?: Record<string, any> | undefined) => string | undefined; segment: (props?: Record<string, any> | undefined) => string | undefined; separatorIcon: (props?: Record<string, any> | undefined) => string | undefined; }; }`

### Events

- **update:modelValue** — `[value: InputTimeModelValue<R>]`
- **blur** — `[event: FocusEvent]`
- **change** — `[event: Event]`
- **focus** — `[event: FocusEvent]`
- **update:placeholder** — `[date: TimeValue] & [date: TimeValue]`
