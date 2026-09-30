---
title: "Button"
description: "A button element that can act as a link or trigger an action."
package: pohon
sourceTag: "v2.0.1"
sourceCommit: "ee987babf834bae617d75a9c6b9347bba1a494df"
sourceUrl: "https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/docs/content/docs/2.components/button.md"
---
## Usage

Use the default slot to set the label of the Button.

```vue
<template>
  <UButton>
    Button
  </UButton>
</template>
```

### Label

Use the `label` prop to set the label of the Button.

```vue
<template>
  <UButton label="Button" />
</template>
```

### Color

Use the `color` prop to change the color of the Button.

```vue
<template>
  <UButton color="neutral">
    Button
  </UButton>
</template>
```

### Variant

Use the `variant` prop to change the variant of the Button.

```vue
<template>
  <UButton color="neutral" variant="outline">
    Button
  </UButton>
</template>
```

### Size

Use the `size` prop to change the size of the Button.

```vue
<template>
  <UButton size="xl">
    Button
  </UButton>
</template>
```

### Icon

Use the `icon` prop to show an [Icon](/pohon/components/icon) inside the Button.

```vue
<template>
  <UButton icon="i-lucide-rocket" size="md" color="primary" variant="solid">
    Button
  </UButton>
</template>
```

Use the `leading` and `trailing` props to set the icon position or the `leading-icon` and `trailing-icon` props to set a different icon for each position.

```vue
<template>
  <UButton trailing-icon="i-lucide-arrow-right" size="md">
    Button
  </UButton>
</template>
```

The `label` as prop or slot is optional so you can use the Button as an icon-only button.

```vue
<template>
  <UButton icon="i-lucide-search" size="md" color="primary" variant="solid" />
</template>
```

### Avatar

Use the `avatar` prop to show an [Avatar](/pohon/components/avatar) inside the Button.

```vue
<template>
  <UButton :avatar="{
  src: 'https://github.com/nuxt.png',
  loading: 'lazy'
}" size="md" color="neutral" variant="outline">
    Button
  </UButton>
</template>
```

The `label` as prop or slot is optional so you can use the Button as an avatar-only button.

```vue
<template>
  <UButton :avatar="{
  src: 'https://github.com/nuxt.png',
  loading: 'lazy'
}" size="md" color="neutral" variant="outline" />
</template>
```

### Link

You can pass any property from the [Link](/pohon/components/link#props) component such as `to`, `target`, etc.

```vue
<template>
  <UButton to="https://github.com/vinicunca/pohon" target="_blank">
    Button
  </UButton>
</template>
```

When the Button is a link or when using the `active` prop, you can use the `active-color` and `active-variant` props to customize the active state.

```vue
<template>
  <UButton active color="neutral" variant="outline" active-color="primary" active-variant="solid">
    Button
  </UButton>
</template>
```

You can also use the `active-class` and `inactive-class` props to customize the active state.

```vue
<template>
  <UButton active active-class="font-bold" inactive-class="font-light">
    Button
  </UButton>
</template>
```

> [!TIP]
> 
> You can configure these styles globally in your `app.config.ts` file under the `ui.button.variants.active` key.
> 
> ```ts
> export default defineAppConfig({
>   ui: {
>     button: {
>       variants: {
>         active: {
>           true: {
>             base: 'font-bold'
>           }
>         }
>       }
>     }
>   }
> })
> ```

### Loading

Use the `loading` prop to show a loading icon and disable the Button.

```vue
<template>
  <UButton loading :trailing="false">
    Button
  </UButton>
</template>
```

Use the `loading-auto` prop to show the loading icon automatically while the `@click` promise is pending.

```vue [ButtonLoadingAutoExample.vue]
<script setup lang="ts">
async function onClick() {
  return new Promise<void>(res => setTimeout(res, 1000))
}
</script>

<template>
  <PButton loading-auto @click="onClick">
    Button
  </PButton>
</template>
```

This also works with the [Form](/pohon/components/form) component.

```vue [ButtonLoadingAutoFormExample.vue]
<script setup lang="ts">
const state = reactive({ fullName: '' })

async function onSubmit() {
  return new Promise<void>(res => setTimeout(res, 1000))
}

async function validate(data: Partial<typeof state>) {
  if (!data.fullName?.length) return [{ name: 'fullName', message: 'Required' }]
  return []
}
</script>

<template>
  <PForm :state="state" :validate="validate" @submit="onSubmit">
    <PFormField name="fullName" label="Full name">
      <PInput v-model="state.fullName" />
    </PFormField>
    <PButton type="submit" class="mt-2" loading-auto>
      Submit
    </PButton>
  </PForm>
</template>
```

### Loading Icon

Use the `loading-icon` prop to customize the loading icon. Defaults to `i-lucide-loader-circle`.

```vue
<template>
  <UButton loading loading-icon="i-lucide-loader">
    Button
  </UButton>
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

Use the `disabled` prop to disable the Button.

```vue
<template>
  <UButton disabled>
    Button
  </UButton>
</template>
```

## Examples

### `class` prop

Use the `class` prop to override the base styles of the Button.

```vue
<template>
  <UButton class="font-bold rounded-full">
    Button
  </UButton>
</template>
```

### `ui` prop

Use the `ui` prop to override the slots styles of the Button.

```vue
<template>
  <UButton icon="i-lucide-rocket" color="neutral" variant="outline" :ui="{
  leadingIcon: 'text-primary'
}">
    Button
  </UButton>
</template>
```

## API

### Props

> [!NOTE]
> See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attributes
> 
> This component also supports all native `<button>` HTML attributes.

> [!NOTE]
> See: https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/Link.vue#L13
> 
> The `Button` component extends the `Link` component. Check out the source code on GitHub.

### Slots

## Theme

```ts [app.config.ts]
export default defineAppConfig({
  ui: {
    button: {
      slots: {
        base: [
          'rounded-md font-500 inline-flex items-center disabled:cursor-not-allowed aria-disabled:cursor-not-allowed disabled:opacity-75 aria-disabled:opacity-75',
          'transition-colors'
        ],
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
          subtle: '',
          ghost: '',
          link: ''
        },
        size: {
          xs: {
            base: 'px-2 py-1 text-xs gap-1',
            leadingIcon: 'size-4',
            leadingAvatarSize: '3xs',
            trailingIcon: 'size-4'
          },
          sm: {
            base: 'px-2.5 py-1.5 text-xs gap-1.5',
            leadingIcon: 'size-4',
            leadingAvatarSize: '3xs',
            trailingIcon: 'size-4'
          },
          md: {
            base: 'px-2.5 py-1.5 text-sm gap-1.5',
            leadingIcon: 'size-5',
            leadingAvatarSize: '2xs',
            trailingIcon: 'size-5'
          },
          lg: {
            base: 'px-3 py-2 text-sm gap-2',
            leadingIcon: 'size-5',
            leadingAvatarSize: '2xs',
            trailingIcon: 'size-5'
          },
          xl: {
            base: 'px-3 py-2 text-base gap-2',
            leadingIcon: 'size-6',
            leadingAvatarSize: 'xs',
            trailingIcon: 'size-6'
          }
        },
        block: {
          true: {
            base: 'w-full justify-center',
            trailingIcon: 'ms-auto'
          }
        },
        square: {
          true: ''
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
        active: {
          true: {
            base: ''
          },
          false: {
            base: ''
          }
        }
      },
      compoundVariants: [
        {
          color: 'primary',
          variant: 'solid',
          class: 'color-text-inverted bg-primary hover:bg-primary/75 active:bg-primary/75 disabled:bg-primary aria-disabled:bg-primary outline-primary/25 focus-visible:outline-3'
        },
        {
          color: 'secondary',
          variant: 'solid',
          class: 'color-text-inverted bg-secondary hover:bg-secondary/75 active:bg-secondary/75 disabled:bg-secondary aria-disabled:bg-secondary outline-secondary/25 focus-visible:outline-3'
        },
        {
          color: 'success',
          variant: 'solid',
          class: 'color-text-inverted bg-success hover:bg-success/75 active:bg-success/75 disabled:bg-success aria-disabled:bg-success outline-success/25 focus-visible:outline-3'
        },
        {
          color: 'info',
          variant: 'solid',
          class: 'color-text-inverted bg-info hover:bg-info/75 active:bg-info/75 disabled:bg-info aria-disabled:bg-info outline-info/25 focus-visible:outline-3'
        },
        {
          color: 'warning',
          variant: 'solid',
          class: 'color-text-inverted bg-warning hover:bg-warning/75 active:bg-warning/75 disabled:bg-warning aria-disabled:bg-warning outline-warning/25 focus-visible:outline-3'
        },
        {
          color: 'error',
          variant: 'solid',
          class: 'color-text-inverted bg-error hover:bg-error/75 active:bg-error/75 disabled:bg-error aria-disabled:bg-error outline-error/25 focus-visible:outline-3'
        },
        {
          color: 'primary',
          variant: 'outline',
          class: 'ring ring-inset ring-primary/50 color-primary hover:bg-primary/10 active:bg-primary/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent outline-primary/25 focus-visible:outline-3 focus-visible:ring-primary'
        },
        {
          color: 'secondary',
          variant: 'outline',
          class: 'ring ring-inset ring-secondary/50 color-secondary hover:bg-secondary/10 active:bg-secondary/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent outline-secondary/25 focus-visible:outline-3 focus-visible:ring-secondary'
        },
        {
          color: 'success',
          variant: 'outline',
          class: 'ring ring-inset ring-success/50 color-success hover:bg-success/10 active:bg-success/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent outline-success/25 focus-visible:outline-3 focus-visible:ring-success'
        },
        {
          color: 'info',
          variant: 'outline',
          class: 'ring ring-inset ring-info/50 color-info hover:bg-info/10 active:bg-info/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent outline-info/25 focus-visible:outline-3 focus-visible:ring-info'
        },
        {
          color: 'warning',
          variant: 'outline',
          class: 'ring ring-inset ring-warning/50 color-warning hover:bg-warning/10 active:bg-warning/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent outline-warning/25 focus-visible:outline-3 focus-visible:ring-warning'
        },
        {
          color: 'error',
          variant: 'outline',
          class: 'ring ring-inset ring-error/50 color-error hover:bg-error/10 active:bg-error/10 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent outline-error/25 focus-visible:outline-3 focus-visible:ring-error'
        },
        {
          color: 'primary',
          variant: 'soft',
          class: 'color-primary bg-primary/10 hover:bg-primary/15 active:bg-primary/15 outline-primary/25 focus-visible:outline-3 disabled:bg-primary/10 aria-disabled:bg-primary/10'
        },
        {
          color: 'secondary',
          variant: 'soft',
          class: 'color-secondary bg-secondary/10 hover:bg-secondary/15 active:bg-secondary/15 outline-secondary/25 focus-visible:outline-3 disabled:bg-secondary/10 aria-disabled:bg-secondary/10'
        },
        {
          color: 'success',
          variant: 'soft',
          class: 'color-success bg-success/10 hover:bg-success/15 active:bg-success/15 outline-success/25 focus-visible:outline-3 disabled:bg-success/10 aria-disabled:bg-success/10'
        },
        {
          color: 'info',
          variant: 'soft',
          class: 'color-info bg-info/10 hover:bg-info/15 active:bg-info/15 outline-info/25 focus-visible:outline-3 disabled:bg-info/10 aria-disabled:bg-info/10'
        },
        {
          color: 'warning',
          variant: 'soft',
          class: 'color-warning bg-warning/10 hover:bg-warning/15 active:bg-warning/15 outline-warning/25 focus-visible:outline-3 disabled:bg-warning/10 aria-disabled:bg-warning/10'
        },
        {
          color: 'error',
          variant: 'soft',
          class: 'color-error bg-error/10 hover:bg-error/15 active:bg-error/15 outline-error/25 focus-visible:outline-3 disabled:bg-error/10 aria-disabled:bg-error/10'
        },
        {
          color: 'primary',
          variant: 'subtle',
          class: 'color-primary ring ring-inset ring-primary/25 bg-primary/10 hover:bg-primary/15 active:bg-primary/15 disabled:bg-primary/10 aria-disabled:bg-primary/10 outline-primary/25 focus-visible:outline-3 focus-visible:ring-primary'
        },
        {
          color: 'secondary',
          variant: 'subtle',
          class: 'color-secondary ring ring-inset ring-secondary/25 bg-secondary/10 hover:bg-secondary/15 active:bg-secondary/15 disabled:bg-secondary/10 aria-disabled:bg-secondary/10 outline-secondary/25 focus-visible:outline-3 focus-visible:ring-secondary'
        },
        {
          color: 'success',
          variant: 'subtle',
          class: 'color-success ring ring-inset ring-success/25 bg-success/10 hover:bg-success/15 active:bg-success/15 disabled:bg-success/10 aria-disabled:bg-success/10 outline-success/25 focus-visible:outline-3 focus-visible:ring-success'
        },
        {
          color: 'info',
          variant: 'subtle',
          class: 'color-info ring ring-inset ring-info/25 bg-info/10 hover:bg-info/15 active:bg-info/15 disabled:bg-info/10 aria-disabled:bg-info/10 outline-info/25 focus-visible:outline-3 focus-visible:ring-info'
        },
        {
          color: 'warning',
          variant: 'subtle',
          class: 'color-warning ring ring-inset ring-warning/25 bg-warning/10 hover:bg-warning/15 active:bg-warning/15 disabled:bg-warning/10 aria-disabled:bg-warning/10 outline-warning/25 focus-visible:outline-3 focus-visible:ring-warning'
        },
        {
          color: 'error',
          variant: 'subtle',
          class: 'color-error ring ring-inset ring-error/25 bg-error/10 hover:bg-error/15 active:bg-error/15 disabled:bg-error/10 aria-disabled:bg-error/10 outline-error/25 focus-visible:outline-3 focus-visible:ring-error'
        },
        {
          color: 'primary',
          variant: 'ghost',
          class: 'color-primary hover:bg-primary/10 active:bg-primary/10 outline-primary/25 focus-visible:outline-3 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent'
        },
        {
          color: 'secondary',
          variant: 'ghost',
          class: 'color-secondary hover:bg-secondary/10 active:bg-secondary/10 outline-secondary/25 focus-visible:outline-3 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent'
        },
        {
          color: 'success',
          variant: 'ghost',
          class: 'color-success hover:bg-success/10 active:bg-success/10 outline-success/25 focus-visible:outline-3 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent'
        },
        {
          color: 'info',
          variant: 'ghost',
          class: 'color-info hover:bg-info/10 active:bg-info/10 outline-info/25 focus-visible:outline-3 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent'
        },
        {
          color: 'warning',
          variant: 'ghost',
          class: 'color-warning hover:bg-warning/10 active:bg-warning/10 outline-warning/25 focus-visible:outline-3 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent'
        },
        {
          color: 'error',
          variant: 'ghost',
          class: 'color-error hover:bg-error/10 active:bg-error/10 outline-error/25 focus-visible:outline-3 disabled:bg-transparent aria-disabled:bg-transparent dark:disabled:bg-transparent dark:aria-disabled:bg-transparent'
        },
        {
          color: 'primary',
          variant: 'link',
          class: 'color-primary hover:color-primary/75 active:color-primary/75 disabled:color-primary aria-disabled:color-primary outline-primary/25 focus-visible:outline-3'
        },
        {
          color: 'secondary',
          variant: 'link',
          class: 'color-secondary hover:color-secondary/75 active:color-secondary/75 disabled:color-secondary aria-disabled:color-secondary outline-secondary/25 focus-visible:outline-3'
        },
        {
          color: 'success',
          variant: 'link',
          class: 'color-success hover:color-success/75 active:color-success/75 disabled:color-success aria-disabled:color-success outline-success/25 focus-visible:outline-3'
        },
        {
          color: 'info',
          variant: 'link',
          class: 'color-info hover:color-info/75 active:color-info/75 disabled:color-info aria-disabled:color-info outline-info/25 focus-visible:outline-3'
        },
        {
          color: 'warning',
          variant: 'link',
          class: 'color-warning hover:color-warning/75 active:color-warning/75 disabled:color-warning aria-disabled:color-warning outline-warning/25 focus-visible:outline-3'
        },
        {
          color: 'error',
          variant: 'link',
          class: 'color-error hover:color-error/75 active:color-error/75 disabled:color-error aria-disabled:color-error outline-error/25 focus-visible:outline-3'
        },
        {
          color: 'neutral',
          variant: 'solid',
          class: 'color-text-inverted bg-background-inverted hover:bg-background-inverted/90 active:bg-background-inverted/90 disabled:bg-background-inverted aria-disabled:bg-background-inverted outline-outline-inverted/25 focus-visible:outline-3'
        },
        {
          color: 'neutral',
          variant: 'outline',
          class: 'ring ring-inset ring-ring-accented color-text bg-background hover:bg-background-elevated active:bg-background-elevated disabled:bg-background aria-disabled:bg-background outline-outline-inverted/25 focus-visible:outline-3 focus-visible:ring-ring-inverted'
        },
        {
          color: 'neutral',
          variant: 'soft',
          class: 'color-text bg-background-elevated hover:bg-background-accented/75 active:bg-background-accented/75 outline-outline-inverted/25 focus-visible:outline-3 disabled:bg-background-elevated aria-disabled:bg-background-elevated'
        },
        {
          color: 'neutral',
          variant: 'subtle',
          class: 'ring ring-inset ring-ring-accented color-text bg-background-elevated hover:bg-background-accented/75 active:bg-background-accented/75 disabled:bg-background-elevated aria-disabled:bg-background-elevated outline-outline-inverted/25 focus-visible:outline-3 focus-visible:ring-ring-inverted'
        },
        {
          color: 'neutral',
          variant: 'ghost',
          class: 'color-text hover:bg-background-elevated active:bg-background-elevated outline-outline-inverted/25 focus-visible:outline-3 hover:disabled:bg-transparent dark:hover:disabled:bg-transparent hover:aria-disabled:bg-transparent dark:hover:aria-disabled:bg-transparent'
        },
        {
          color: 'neutral',
          variant: 'link',
          class: 'color-text-muted hover:color-text active:color-text disabled:color-text-muted aria-disabled:color-text-muted outline-outline-inverted/25 focus-visible:outline-3'
        },
        {
          size: 'xs',
          square: true,
          class: 'p-1'
        },
        {
          size: 'sm',
          square: true,
          class: 'p-1.5'
        },
        {
          size: 'md',
          square: true,
          class: 'p-1.5'
        },
        {
          size: 'lg',
          square: true,
          class: 'p-2'
        },
        {
          size: 'xl',
          square: true,
          class: 'p-2'
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

See commit history for [component](https://github.com/vinicunca/pohon/commits/main/src/runtime/components/Button.vue) and [theme](https://github.com/vinicunca/pohon/commits/main/src/theme/button.ts).

---

- [GitHub](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/Button.vue)


## Sitemap

See the full [sitemap](https://pohon.vinicunca.dev/sitemap.md) for all pages.

## Generated component API

[Button source](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/Button.vue)

### Props

- **label** — `string | undefined; optional`
- **color** — `"primary" | "secondary" | "success" | "info" | "warning" | "error" | "neutral" | undefined; optional`
- **activeColor** — `"primary" | "secondary" | "success" | "info" | "warning" | "error" | "neutral" | undefined; optional`
- **variant** — `"link" | "solid" | "outline" | "soft" | "subtle" | "ghost" | undefined; optional`
- **activeVariant** — `"link" | "solid" | "outline" | "soft" | "subtle" | "ghost" | undefined; optional`
- **size** — `"md" | "xs" | "sm" | "lg" | "xl" | undefined; optional`
- **square** — `boolean | undefined; optional`: Render the button with equal padding on all sides.
- **block** — `boolean | undefined; optional`: Render the button full width.
- **loadingAuto** — `boolean | undefined; optional`: Set loading state automatically based on the \`@click\` promise state
- **onClick** — `((event: MouseEvent) => void) | ((event: MouseEvent) => void)[] | undefined; optional`
- **ui** — `{ base?: SlotClass; label?: SlotClass; leadingIcon?: SlotClass; leadingAvatar?: SlotClass; leadingAvatarSize?: SlotClass; trailingIcon?: SlotClass; } | undefined; optional`
- **icon** — `any; optional`: Display an icon based on the \`leading\` and \`trailing\` props.
- **avatar** — `AvatarProps | undefined; optional`: Display an avatar on the left side.
- **leading** — `boolean | undefined; optional`: When \`true\`, the icon will be displayed on the left side.
- **leadingIcon** — `any; optional`: Display an icon on the left side.
- **trailing** — `boolean | undefined; optional`: When \`true\`, the icon will be displayed on the right side.
- **trailingIcon** — `any; optional`: Display an icon on the right side.
- **loading** — `boolean | undefined; optional`: When \`true\`, the loading icon will be displayed.
- **loadingIcon** — `any; optional`: The icon when the \`loading\` prop is \`true\`.
- **type** — `"button" | "reset" | "submit" | undefined; optional`: The type of the button when not a link.
- **disabled** — `boolean | undefined; optional`
- **as** — `any; optional`: The element or component this component should render as when not a link.
- **name** — `string | undefined; optional`
- **replace** — `boolean | undefined; optional`: Calls \`router.replace\` instead of \`router.push\`.
- **referrerpolicy** — `HTMLAttributeReferrerPolicy | undefined; optional`
- **form** — `string | undefined; optional`
- **to** — `string | it | et | undefined; optional`: Route Location the link should navigate to when clicked on.
- **active** — `boolean | undefined; optional`: Force the link to be active independent of the current route.
- **external** — `boolean | undefined; optional`: Forces the link to be considered as external (true) or internal (false). This is helpful to handle edge-cases
- **href** — `string | it | et | undefined; optional`: An alias for \`to\`. If used with \`to\`, \`href\` will be ignored
- **target** — `(string & {}) | "_blank" | "_parent" | "_self" | "_top" | null | undefined; optional`: Where to display the linked URL, as the name for a browsing context.
- **rel** — `(string & {}) | "noopener" | "noreferrer" | "nofollow" | "sponsored" | "ugc" | null | undefined; optional`: A rel attribute value to apply on the link. Defaults to "noopener noreferrer" for external links.
- **noRel** — `boolean | undefined; optional`: If set to true, no rel attribute will be added to the link
- **prefetch** — `boolean | undefined; optional`: When enabled will prefetch middleware, layouts and payloads of links in the viewport.
- **prefetchOn** — `"visibility" | "interaction" | Partial<{ visibility: boolean; interaction: boolean; }> | undefined; optional`: Allows controlling when to prefetch links. By default, prefetch is triggered only on visibility.
- **prefetchedClass** — `string | undefined; optional`: A class to apply to links that have been prefetched.
- **noPrefetch** — `boolean | undefined; optional`: Escape hatch to disable \`prefetch\` attribute.
- **trailingSlash** — `"append" | "remove" | undefined; optional`: An option to either add or remove trailing slashes in the \`href\` for this specific link. Overrides the global \`trailingSlash\` option if provided.
- **ariaCurrentValue** — `"page" | "step" | "date" | "time" | "true" | "false" | "location" | undefined; optional`: Value passed to the attribute \`aria-current\` when the link is exact active.
- **activeClass** — `string | undefined; optional`: Class to apply when the link is active
- **exact** — `boolean | undefined; optional`: Will only be active if the current route is an exact match.
- **exactQuery** — `boolean | "partial" | undefined; optional`: Allows controlling how the current route query sets the link as active.
- **exactHash** — `boolean | undefined; optional`: Will only be active if the current route hash is an exact match.
- **inactiveClass** — `string | undefined; optional`: The class to apply when the link is inactive.
- **locale** — `string | boolean | undefined; optional`: Control i18n auto-localization when \`@nuxtjs/i18n\` is installed. - \`undefined\` / \`true\` (default): auto-localizes to the current locale using \`$localePath\`.   Paths already carrying a locale prefix (from e.g. \`switchLocalePath()\`) are detected   and left untouched to prevent double-prefixing. - \`false\`: explicitly disables auto-localization. - \`string\`: localizes to a specific locale (e.g. \`'fr'\`).
- **download** — `any; optional`
- **ping** — `string | undefined; optional`
- **hreflang** — `string | undefined; optional`
- **media** — `string | undefined; optional`
- **exactActiveClass** — `string | undefined; optional`: Class to apply when the link is exact active
- **viewTransition** — `boolean | undefined; optional`: Pass the returned promise of \`router.push()\` to \`document.startViewTransition()\` if supported.
- **autofocus** — `Booleanish | undefined; optional`
- **formaction** — `string | undefined; optional`
- **formenctype** — `string | undefined; optional`
- **formmethod** — `string | undefined; optional`
- **formnovalidate** — `Booleanish | undefined; optional`
- **formtarget** — `string | undefined; optional`

### Slots

- **leading** — `{ ui: { base: (props?: Record<string, any> | undefined) => string | undefined; label: (props?: Record<string, any> | undefined) => string | undefined; leadingIcon: (props?: Record<string, any> | undefined) => string | undefined; leadingAvatar: (props?: Record<string, any> | undefined) => string | undefined; leadingAvatarSize: (props?: Record<string, any> | undefined) => string | undefined; trailingIcon: (props?: Record<string, any> | undefined) => string | undefined; }; }`
- **default** — `{ ui: { base: (props?: Record<string, any> | undefined) => string | undefined; label: (props?: Record<string, any> | undefined) => string | undefined; leadingIcon: (props?: Record<string, any> | undefined) => string | undefined; leadingAvatar: (props?: Record<string, any> | undefined) => string | undefined; leadingAvatarSize: (props?: Record<string, any> | undefined) => string | undefined; trailingIcon: (props?: Record<string, any> | undefined) => string | undefined; }; }`
- **trailing** — `{ ui: { base: (props?: Record<string, any> | undefined) => string | undefined; label: (props?: Record<string, any> | undefined) => string | undefined; leadingIcon: (props?: Record<string, any> | undefined) => string | undefined; leadingAvatar: (props?: Record<string, any> | undefined) => string | undefined; leadingAvatarSize: (props?: Record<string, any> | undefined) => string | undefined; trailingIcon: (props?: Record<string, any> | undefined) => string | undefined; }; }`

### Events

No events are declared.
