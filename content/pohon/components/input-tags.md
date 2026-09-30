---
title: "InputTags"
description: "An input element that displays interactive tags."
package: pohon
sourceTag: "v2.0.1"
sourceCommit: "ee987babf834bae617d75a9c6b9347bba1a494df"
sourceUrl: "https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/docs/content/docs/2.components/input-tags.md"
---
## Usage

Use the `v-model` directive to control the value of the InputTags.

```vue
<script setup lang="ts">
const value = ref([
  "Vue"
])
</script>

<template>
  <UInputTags v-model="value" />
</template>
```

Use the `default-value` prop to set the initial value when you do not need to control its state.

```vue
<template>
  <UInputTags :default-value="[
  'Vue'
]" />
</template>
```

### Placeholder

Use the `placeholder` prop to set a placeholder text.

```vue
<template>
  <UInputTags placeholder="Enter tags..." />
</template>
```

### Max Length

Use the `max-length` prop to set the maximum number of characters allowed in a tag.

```vue
<template>
  <UInputTags :max-length="4" />
</template>
```

### Color

Use the `color` prop to change the ring color when the InputTags is focused.

```vue
<script setup lang="ts">
const value = ref([
  "Vue"
])
</script>

<template>
  <UInputTags v-model="value" color="neutral" highlight />
</template>
```

> [!NOTE]
> 
> The `highlight` prop is used here to show the focus state. It's used internally when a validation error occurs.

### Variants

Use the `variant` prop to change the appearance of the InputTags.

```vue
<script setup lang="ts">
const value = ref([
  "Vue"
])
</script>

<template>
  <UInputTags v-model="value" variant="subtle" color="neutral" :highlight="false" />
</template>
```

### Sizes

Use the `size` prop to adjust the size of the InputTags.

```vue
<script setup lang="ts">
const value = ref([
  "Vue"
])
</script>

<template>
  <UInputTags v-model="value" size="xl" />
</template>
```

### Icon

Use the `icon` prop to show an [Icon](/pohon/components/icon) inside the InputTags.

```vue
<script setup lang="ts">
const value = ref([
  "Vue"
])
</script>

<template>
  <UInputTags v-model="value" icon="i-lucide-search" size="md" variant="outline" />
</template>
```

> [!NOTE]
> 
> Use the `leading` and `trailing` props to set the icon position or the `leading-icon` and `trailing-icon` props to set a different icon for each position.

### Avatar

Use the `avatar` prop to show an [Avatar](/pohon/components/avatar) inside the InputTags.

```vue
<script setup lang="ts">
const value = ref([
  "Vue"
])
</script>

<template>
  <UInputTags v-model="value" :avatar="{
  src: 'https://github.com/vuejs.png',
  loading: 'lazy'
}" size="md" variant="outline" />
</template>
```

### Delete Icon

Use the `delete-icon` prop to customize the delete [Icon](/pohon/components/icon) in the tags. Defaults to `i-lucide-x`.

```vue
<script setup lang="ts">
const value = ref([
  "Vue"
])
</script>

<template>
  <UInputTags v-model="value" delete-icon="i-lucide-trash" />
</template>
```

**Nuxt:**

> [!TIP]
> See: /docs/getting-started/integrations/icons/nuxt#theme
> 
> You can customize this icon globally in your `app.config.ts` under `ui.icons.close` key.

**Vue:**

> [!TIP]
> See: /docs/getting-started/integrations/icons/vue#theme
> 
> You can customize this icon globally in your `vite.config.ts` under `ui.icons.close` key.

### Loading

Use the `loading` prop to show a loading icon on the InputTags.

```vue
<script setup lang="ts">
const value = ref([
  "Vue"
])
</script>

<template>
  <UInputTags v-model="value" loading :trailing="false" />
</template>
```

### Loading Icon

Use the `loading-icon` prop to customize the loading icon. Defaults to `i-lucide-loader-circle`.

```vue
<script setup lang="ts">
const value = ref([
  "Vue"
])
</script>

<template>
  <UInputTags v-model="value" loading loading-icon="i-lucide-loader" />
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

### Disabled

Use the `disabled` prop to disable the InputTags.

```vue
<script setup lang="ts">
const value = ref([
  "Vue"
])
</script>

<template>
  <UInputTags v-model="value" disabled />
</template>
```

## Examples

### Within a FormField

You can use the InputTags within a [FormField](/pohon/components/form-field) component to display a label, help text, required indicator, etc.

```vue [InputTagsFormFieldExample.vue]
<script setup lang="ts">
const tags = ref(['Vue'])
</script>

<template>
  <PFormField label="Tags" required>
    <PInputTags v-model="tags" placeholder="Enter tags..." />
  </PFormField>
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
    inputTags: {
      slots: {
        root: [
          'relative inline-flex items-center',
          'flex-wrap'
        ],
        base: [
          'rounded-md',
          'transition-colors'
        ],
        leading: 'absolute inset-y-0 start-0 flex items-center',
        leadingIcon: 'shrink-0 color-text-dimmed',
        leadingAvatar: 'shrink-0',
        leadingAvatarSize: '',
        trailing: 'absolute inset-y-0 end-0 flex items-center',
        trailingIcon: 'shrink-0 color-text-dimmed',
        item: 'px-1.5 py-0.5 rounded-sm font-500 inline-flex items-center gap-0.5 ring ring-inset ring-ring-accented bg-background-elevated color-text data-disabled:cursor-not-allowed data-disabled:opacity-75 wrap-anywhere data-[state=active]:bg-background-accented',
        itemText: '',
        itemDelete: [
          'inline-flex items-center rounded-xs color-text-dimmed hover:color-text hover:bg-background-accented/75 disabled:pointer-events-none',
          'transition-colors'
        ],
        itemDeleteIcon: 'shrink-0',
        input: 'flex-1 border-0 bg-transparent placeholder:color-text-dimmed focus:outline-none disabled:cursor-not-allowed disabled:opacity-75'
      },
      variants: {
        fieldGroup: {
          horizontal: 'not-only:first:rounded-e-none not-only:last:rounded-s-none not-last:not-first:rounded-none focus-visible:z-1',
          vertical: 'not-only:first:rounded-b-none not-only:last:rounded-t-none not-last:not-first:rounded-none focus-visible:z-1'
        },
        size: {
          xs: {
            base: 'px-2 py-1 text-sm/4 gap-1',
            leading: 'ps-2',
            trailing: 'pe-2',
            leadingIcon: 'size-4',
            leadingAvatarSize: '3xs',
            trailingIcon: 'size-4',
            item: 'text-[10px]/3',
            itemDeleteIcon: 'size-3'
          },
          sm: {
            base: 'px-2.5 py-1.5 text-sm/4 gap-1.5',
            leading: 'ps-2.5',
            trailing: 'pe-2.5',
            leadingIcon: 'size-4',
            leadingAvatarSize: '3xs',
            trailingIcon: 'size-4',
            item: 'text-[10px]/3',
            itemDeleteIcon: 'size-3'
          },
          md: {
            base: 'px-2.5 py-1.5 text-base/5 gap-1.5',
            leading: 'ps-2.5',
            trailing: 'pe-2.5',
            leadingIcon: 'size-5',
            leadingAvatarSize: '2xs',
            trailingIcon: 'size-5',
            item: 'text-xs',
            itemDeleteIcon: 'size-3.5'
          },
          lg: {
            base: 'px-3 py-2 text-base/5 gap-2',
            leading: 'ps-3',
            trailing: 'pe-3',
            leadingIcon: 'size-5',
            leadingAvatarSize: '2xs',
            trailingIcon: 'size-5',
            item: 'text-xs',
            itemDeleteIcon: 'size-3.5'
          },
          xl: {
            base: 'px-3 py-2 text-base gap-2',
            leading: 'ps-3',
            trailing: 'pe-3',
            leadingIcon: 'size-6',
            leadingAvatarSize: 'xs',
            trailingIcon: 'size-6',
            item: 'text-sm',
            itemDeleteIcon: 'size-4'
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

See commit history for [component](https://github.com/vinicunca/pohon/commits/main/src/runtime/components/InputTags.vue) and [theme](https://github.com/vinicunca/pohon/commits/main/src/theme/input-tags.ts).

---

- [InputTags](/akar/components/tags-input)
- [GitHub](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/InputTags.vue)


## Sitemap

See the full [sitemap](https://pohon.vinicunca.dev/sitemap.md) for all pages.

## Generated component API

[InputTags source](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/InputTags.vue)

### Props

- **as** — `any; optional`: The element or component this component should render as.
- **placeholder** — `string | undefined; optional`: The placeholder text when the input is empty.
- **maxLength** — `number | undefined; optional`: The maximum number of character allowed.
- **color** — `"primary" | "secondary" | "success" | "info" | "warning" | "error" | "neutral" | undefined; optional`
- **variant** — `"outline" | "soft" | "subtle" | "ghost" | "none" | undefined; optional`
- **size** — `"md" | "xs" | "sm" | "lg" | "xl" | undefined; optional`
- **autofocus** — `boolean | undefined; optional`
- **autofocusDelay** — `number | undefined; optional; default: 0`
- **deleteIcon** — `any; optional`: The icon displayed to delete a tag.
- **highlight** — `boolean | undefined; optional`: Highlight the ring color like a focus state.
- **fixed** — `boolean | undefined; optional`: Keep the mobile text size on all breakpoints.
- **ui** — `{ root?: SlotClass; base?: SlotClass; leading?: SlotClass; leadingIcon?: SlotClass; leadingAvatar?: SlotClass; leadingAvatarSize?: SlotClass; trailing?: SlotClass; trailingIcon?: SlotClass; item?: SlotClass; itemText?: SlotClass; itemDelete?: SlotClass; itemDeleteIcon?: SlotClass; input?: SlotClass; } | undefined; optional`
- **defaultValue** — `T[] | undefined; optional`: The value of the tags that should be added. Use when you do not need to control the state of the tags input
- **modelValue** — `T[] | null | undefined; optional`: The controlled value of the tags input. Can be bind as \`v-model\`.
- **disabled** — `boolean | undefined; optional`: When \`true\`, prevents the user from interacting with the tags input.
- **name** — `string | undefined; optional`: The name of the field. Submitted with its owning form as part of a name/value pair.
- **required** — `boolean | undefined; optional`: When \`true\`, indicates that the user must set the value before the owning form can be submitted.
- **id** — `string | undefined; optional`
- **max** — `number | undefined; optional`: Maximum number of tags.
- **duplicate** — `boolean | undefined; optional`: When \`true\`, allow duplicated tags.
- **displayValue** — `((value: T) => string) | undefined; optional`: Display the value of the tag. Useful when you want to apply modifications to the value like adding a suffix or when using object as values
- **addOnPaste** — `boolean | undefined; optional`: When \`true\`, allow adding tags on paste. Work in conjunction with delimiter prop.
- **addOnTab** — `boolean | undefined; optional`: When \`true\` allow adding tags on tab keydown
- **addOnBlur** — `boolean | undefined; optional`: When \`true\` allow adding tags blur input
- **delimiter** — `string | RegExp | undefined; optional`: The character or regular expression to trigger the addition of a new tag. Also used to split tags for \`@paste\` event
- **convertValue** — `((value: string) => T) | undefined; optional`: Convert the input value to the desired type. Mandatory when using objects as values and using \`TagsInputInput\`
- **icon** — `any; optional`: Display an icon based on the \`leading\` and \`trailing\` props.
- **avatar** — `AvatarProps | undefined; optional`: Display an avatar on the left side.
- **leading** — `boolean | undefined; optional`: When \`true\`, the icon will be displayed on the left side.
- **leadingIcon** — `any; optional`: Display an icon on the left side.
- **trailing** — `boolean | undefined; optional`: When \`true\`, the icon will be displayed on the right side.
- **trailingIcon** — `any; optional`: Display an icon on the right side.
- **loading** — `boolean | undefined; optional`: When \`true\`, the loading icon will be displayed.
- **loadingIcon** — `any; optional`: The icon when the \`loading\` prop is \`true\`.
- **form** — `string | undefined; optional`
- **list** — `string | undefined; optional`
- **formaction** — `string | undefined; optional`
- **formenctype** — `string | undefined; optional`
- **formmethod** — `string | undefined; optional`
- **formnovalidate** — `Booleanish | undefined; optional`
- **formtarget** — `string | undefined; optional`
- **enterKeyHint** — `"search" | "done" | "next" | "enter" | "go" | "previous" | "send" | undefined; optional`
- **readonly** — `Booleanish | undefined; optional`
- **autocomplete** — `(string & {}) | "on" | "off" | undefined; optional`

### Slots

- **leading** — `{ ui: { root: (props?: Record<string, any> | undefined) => string | undefined; base: (props?: Record<string, any> | undefined) => string | undefined; leading: (props?: Record<string, any> | undefined) => string | undefined; leadingIcon: (props?: Record<string, any> | undefined) => string | undefined; leadingAvatar: (props?: Record<string, any> | undefined) => string | undefined; leadingAvatarSize: (props?: Record<string, any> | undefined) => string | undefined; trailing: (props?: Record<string, any> | undefined) => string | undefined; trailingIcon: (props?: Record<string, any> | undefined) => string | undefined; item: (props?: Record<string, any> | undefined) => string | undefined; itemText: (props?: Record<string, any> | undefined) => string | undefined; itemDelete: (props?: Record<string, any> | undefined) => string | undefined; itemDeleteIcon: (props?: Record<string, any> | undefined) => string | undefined; input: (props?: Record<string, any> | undefined) => string | undefined; }; }`
- **default** — `{ ui: { root: (props?: Record<string, any> | undefined) => string | undefined; base: (props?: Record<string, any> | undefined) => string | undefined; leading: (props?: Record<string, any> | undefined) => string | undefined; leadingIcon: (props?: Record<string, any> | undefined) => string | undefined; leadingAvatar: (props?: Record<string, any> | undefined) => string | undefined; leadingAvatarSize: (props?: Record<string, any> | undefined) => string | undefined; trailing: (props?: Record<string, any> | undefined) => string | undefined; trailingIcon: (props?: Record<string, any> | undefined) => string | undefined; item: (props?: Record<string, any> | undefined) => string | undefined; itemText: (props?: Record<string, any> | undefined) => string | undefined; itemDelete: (props?: Record<string, any> | undefined) => string | undefined; itemDeleteIcon: (props?: Record<string, any> | undefined) => string | undefined; input: (props?: Record<string, any> | undefined) => string | undefined; }; }`
- **trailing** — `{ ui: { root: (props?: Record<string, any> | undefined) => string | undefined; base: (props?: Record<string, any> | undefined) => string | undefined; leading: (props?: Record<string, any> | undefined) => string | undefined; leadingIcon: (props?: Record<string, any> | undefined) => string | undefined; leadingAvatar: (props?: Record<string, any> | undefined) => string | undefined; leadingAvatarSize: (props?: Record<string, any> | undefined) => string | undefined; trailing: (props?: Record<string, any> | undefined) => string | undefined; trailingIcon: (props?: Record<string, any> | undefined) => string | undefined; item: (props?: Record<string, any> | undefined) => string | undefined; itemText: (props?: Record<string, any> | undefined) => string | undefined; itemDelete: (props?: Record<string, any> | undefined) => string | undefined; itemDeleteIcon: (props?: Record<string, any> | undefined) => string | undefined; input: (props?: Record<string, any> | undefined) => string | undefined; }; }`
- **item-text** — `{ item: T; index: number; ui: { root: (props?: Record<string, any> | undefined) => string | undefined; base: (props?: Record<string, any> | undefined) => string | undefined; leading: (props?: Record<string, any> | undefined) => string | undefined; leadingIcon: (props?: Record<string, any> | undefined) => string | undefined; leadingAvatar: (props?: Record<string, any> | undefined) => string | undefined; leadingAvatarSize: (props?: Record<string, any> | undefined) => string | undefined; trailing: (props?: Record<string, any> | undefined) => string | undefined; trailingIcon: (props?: Record<string, any> | undefined) => string | undefined; item: (props?: Record<string, any> | undefined) => string | undefined; itemText: (props?: Record<string, any> | undefined) => string | undefined; itemDelete: (props?: Record<string, any> | undefined) => string | undefined; itemDeleteIcon: (props?: Record<string, any> | undefined) => string | undefined; input: (props?: Record<string, any> | undefined) => string | undefined; }; }`
- **item-delete** — `{ item: T; index: number; ui: { root: (props?: Record<string, any> | undefined) => string | undefined; base: (props?: Record<string, any> | undefined) => string | undefined; leading: (props?: Record<string, any> | undefined) => string | undefined; leadingIcon: (props?: Record<string, any> | undefined) => string | undefined; leadingAvatar: (props?: Record<string, any> | undefined) => string | undefined; leadingAvatarSize: (props?: Record<string, any> | undefined) => string | undefined; trailing: (props?: Record<string, any> | undefined) => string | undefined; trailingIcon: (props?: Record<string, any> | undefined) => string | undefined; item: (props?: Record<string, any> | undefined) => string | undefined; itemText: (props?: Record<string, any> | undefined) => string | undefined; itemDelete: (props?: Record<string, any> | undefined) => string | undefined; itemDeleteIcon: (props?: Record<string, any> | undefined) => string | undefined; input: (props?: Record<string, any> | undefined) => string | undefined; }; }`

### Events

- **update:modelValue** — `[payload: T[]]`
- **blur** — `[event: FocusEvent]`
- **change** — `[event: Event]`
- **focus** — `[event: FocusEvent]`
- **invalid** — `[payload: T]`
- **addTag** — `[payload: T]`
- **removeTag** — `[payload: T]`
