---
title: "FormField"
description: "A wrapper for form elements that provides validation and error handling."
package: pohon
sourceTag: "v2.0.1"
sourceCommit: "ee987babf834bae617d75a9c6b9347bba1a494df"
sourceUrl: "https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/docs/content/docs/2.components/form-field.md"
---
## Usage

Wrap any form component with a FormField. Used in a [Form](/pohon/components/form), it provides validation and error handling.

### Label

Use the `label` prop to set the label for the form control.

```vue
<template>
  <UFormField label="Email">
    <PInput placeholder="Enter your email" />
  </UFormField>
</template>
```

> [!NOTE]
> 
> The label `for` attribute and the form control are associated with a unique `id` if not provided.

When using the `required` prop, an asterisk is added next to the label.

```vue
<template>
  <UFormField label="Email" required>
    <PInput placeholder="Enter your email" />
  </UFormField>
</template>
```

### Description

Use the `description` prop to provide additional information below the label.

```vue
<template>
  <UFormField label="Email" description="We'll never share your email with anyone else.">
    <PInput placeholder="Enter your email" class="w-full" />
  </UFormField>
</template>
```

### Hint

Use the `hint` prop to display a hint message next to the label.

```vue
<template>
  <UFormField label="Email" hint="Optional">
    <PInput placeholder="Enter your email" />
  </UFormField>
</template>
```

### Help

Use the `help` prop to display a help message below the form control. When used together with the `error` prop, the `error` prop takes precedence.

```vue
<template>
  <UFormField label="Email" help="Please enter a valid email address.">
    <PInput placeholder="Enter your email" class="w-full" />
  </UFormField>
</template>
```

### Error

Use the `error` prop to display an error message below the form control. When used together with the `help` prop, the `error` prop takes precedence.

When used inside a [Form](/pohon/components/form), this is automatically set when a validation error occurs.

```vue
<template>
  <UFormField label="Email" error="Please enter a valid email address.">
    <PInput placeholder="Enter your email" class="w-full" />
  </UFormField>
</template>
```

> [!TIP]
> See: /docs/getting-started/theme/design-system#color-system
> 
> This sets the `color` to `error` on the form control. You can change it globally in your `app.config.ts`.

### Error Pattern

Use the `error-pattern` prop to match form errors with a regular expression. This is especially relevant for components with array values such as [InputTags](/pohon/components/input-tags), where errors include array indices in their name (e.g. `tags.0`).

> [!TIP]
> See: /docs/components/form#error-reporting
> 
> See an example of using `error-pattern` within a Form.

### Size

Use the `size` prop to change the size of the FormField, the `size` is proxied to the form control.

```vue
<template>
  <UFormField label="Email" description="We'll never share your email with anyone else." hint="Optional" help="Please enter a valid email address." size="xl">
    <PInput placeholder="Enter your email" class="w-full" />
  </UFormField>
</template>
```

### Orientation

Use the `orientation` prop to change the layout of the FormField. Defaults to `vertical`.

```vue
<template>
  <UFormField orientation="horizontal" label="Email" help="Please enter a valid email address." class="w-72">
    <PInput placeholder="Enter your email" class="w-full" />
  </UFormField>
</template>
```

## API

### Props

### Slots

## Theme

```ts [app.config.ts]
export default defineAppConfig({
  ui: {
    formField: {
      slots: {
        root: '',
        wrapper: '',
        labelWrapper: 'flex content-center items-center justify-between gap-1',
        label: 'block font-500 color-text',
        container: 'relative',
        description: 'color-text-muted',
        error: 'mt-2 color-error',
        hint: 'color-text-muted',
        help: 'mt-2 color-text-muted'
      },
      variants: {
        size: {
          xs: {
            root: 'text-xs'
          },
          sm: {
            root: 'text-xs'
          },
          md: {
            root: 'text-sm'
          },
          lg: {
            root: 'text-sm'
          },
          xl: {
            root: 'text-base'
          }
        },
        required: {
          true: {
            label: "after:content-['*'] after:ms-0.5 after:color-error"
          }
        },
        orientation: {
          vertical: {
            container: 'mt-1'
          },
          horizontal: {
            root: 'flex justify-between place-items-baseline gap-2'
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

See commit history for [component](https://github.com/vinicunca/pohon/commits/main/src/runtime/components/FormField.vue) and [theme](https://github.com/vinicunca/pohon/commits/main/src/theme/form-field.ts).

---

- [GitHub](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/FormField.vue)


## Sitemap

See the full [sitemap](https://pohon.vinicunca.dev/sitemap.md) for all pages.

## Generated component API

[FormField source](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/FormField.vue)

### Props

- **as** — `any; optional`: The element or component this component should render as.
- **name** — `string | undefined; optional`: The name of the FormField. Also used to match form errors.
- **errorPattern** — `RegExp | undefined; optional`: A regular expression to match form error names. Useful for components with array values such as InputTags, where errors include array indices in their name (e.g. \`tags.0\`).
- **label** — `string | undefined; optional`
- **description** — `string | undefined; optional`
- **help** — `string | undefined; optional`
- **error** — `string | boolean | undefined; optional; default: undefined`
- **hint** — `string | undefined; optional`
- **size** — `"md" | "xs" | "sm" | "lg" | "xl" | undefined; optional`
- **required** — `boolean | undefined; optional`
- **eagerValidation** — `boolean | undefined; optional`: If true, validation on input will be active immediately instead of waiting for a blur event.
- **validateOnInputDelay** — `number | undefined; optional`: Delay in milliseconds before validating the form on input events.
- **orientation** — `"vertical" | "horizontal" | undefined; optional; default: "vertical"`: The orientation of the form field.
- **ui** — `{ root?: SlotClass; wrapper?: SlotClass; labelWrapper?: SlotClass; label?: SlotClass; container?: SlotClass; description?: SlotClass; error?: SlotClass; hint?: SlotClass; help?: SlotClass; } | undefined; optional`

### Slots

- **label** — `{ label: string | undefined; }`
- **hint** — `{ hint: string | undefined; }`
- **description** — `{ description: string | undefined; }`
- **help** — `{ help: string | undefined; }`
- **error** — `{ error: string | true | undefined; }`
- **default** — `{ error: string | true | undefined; }`

### Events

No events are declared.
