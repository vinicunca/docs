---
title: "Theme"
description: "A headless component to theme child components."
package: pohon
sourceTag: "v2.0.1"
sourceCommit: "ee987babf834bae617d75a9c6b9347bba1a494df"
sourceUrl: "https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/docs/content/docs/2.components/theme.md"
---
## Usage

The Theme component overrides default **slot classes** and **props** of all child components without modifying each one individually. It uses Vue's `provide` / `inject` mechanism under the hood, so the overrides apply at any depth.

> [!NOTE]
> 
> The Theme component doesn't render any HTML element, it only provides theme overrides to its children.

**Nuxt:**

> [!TIP]
> 
> For app-level theme configuration, we recommend using the `app.config.ts` file instead.

**Vue:**

> [!TIP]
> 
> For app-level theme configuration, we recommend using the `vite.config.ts` file instead.

### Slot classes

Use the `ui` prop to override slot classes of descendant components. Keys are component names (camelCase) and values are their slot class overrides.

```vue [ThemeUiExample.vue]
<template>
  <PTheme
    :ui="{
      button: {
        base: 'rounded-full'
      }
    }"
  >
    <div class="flex items-center gap-2">
      <PButton label="Button" color="neutral" />
      <PButton label="Button" color="neutral" variant="outline" />
      <PButton label="Button" color="neutral" variant="subtle" />
    </div>
  </PTheme>
</template>
```

### Prop defaults

Use the `props` prop to override the default value of any prop on descendant components. Each key maps to a partial of that component's props.

```vue [ThemePropsExample.vue]
<template>
  <PTheme
    :props="{
      button: { color: 'neutral', variant: 'subtle', size: 'lg' },
      tooltip: { delayDuration: 0, arrow: true }
    }"
  >
    <div class="flex items-center gap-2">
      <PTooltip text="Inherits delayDuration from theme">
        <PButton label="Hover me" />
      </PTooltip>
      <PButton label="With icon" icon="i-lucide-rocket" />
      <PButton label="Square" icon="i-lucide-star" square />
    </div>
  </PTheme>
</template>
```

> [!TIP]
> 
> Explicit props on a component (e.g. `<PButton color="primary" />`) always win over `<PTheme :props>`. Theme defaults only apply when the prop wasn't passed explicitly.

## Examples

### Multiple components

Use different keys in `ui` or `props` to theme multiple component types at once.

```vue [ThemeMultipleExample.vue]
<template>
  <PTheme
    :props="{
      button: { color: 'neutral', variant: 'outline', size: 'lg' },
      input: { size: 'lg' },
      select: { size: 'lg' }
    }"
    :ui="{
      button: { base: 'rounded-full' },
      input: { base: 'rounded-full' },
      select: { base: 'rounded-full' }
    }"
  >
    <div class="flex items-center gap-2">
      <PButton label="Button" />
      <PInput placeholder="Search..." />
      <PSelect placeholder="Select" :items="['Item 1', 'Item 2', 'Item 3']" />
    </div>
  </PTheme>
</template>
```

### Nested themes

Nest multiple Theme components to compose overrides. The innermost Theme takes precedence, while unoverridden keys are inherited from the outer Theme.

```vue [ThemeNestedExample.vue]
<template>
  <PTheme
    :ui="{
      button: {
        base: 'rounded-full'
      }
    }"
  >
    <div class="flex flex-col items-start gap-4 border border-border-muted p-4 rounded-lg">
      <div class="flex items-center gap-2">
        <PButton label="Outer theme" />
        <PButton label="Outer theme" color="neutral" variant="outline" />
      </div>

      <PTheme
        :ui="{
          button: {
            base: 'font-black uppercase'
          }
        }"
      >
        <div class="border border-border-muted p-4 rounded-lg">
          <div class="flex items-center gap-2">
            <PButton label="Inner theme" />
            <PButton label="Inner theme" color="neutral" variant="outline" />
          </div>
        </div>
      </PTheme>
    </div>
  </PTheme>
</template>
```

### Explicit priority

Explicitly setting any prop (including `ui`) on an individual component always takes priority over the Theme component.

```vue [ThemePriorityExample.vue]
<template>
  <PTheme
    :ui="{
      button: {
        base: 'rounded-full'
      }
    }"
  >
    <div class="flex items-center gap-2">
      <PButton label="Themed" />
      <PButton label="Overridden" :ui="{ base: 'rounded-none' }" />
    </div>
  </PTheme>
</template>
```

### Deep propagation

The overrides are available to all descendant components regardless of how deeply nested they are.

```vue [ThemeDeepExample.vue]
<script setup lang="ts">
import MyButton from './MyButton.vue'
</script>

<template>
  <PTheme
    :ui="{
      button: {
        base: 'rounded-full'
      }
    }"
  >
    <PCard :ui="{ body: 'flex items-center gap-2 sm:flex-row flex-col' }">
      <PButton label="Direct child" />
      <MyButton />
    </PCard>
  </PTheme>
</template>
```

> [!NOTE]
> 
> In this example, `MyButton` is a custom component that renders a `PButton` internally. The theme overrides still apply because they propagate through the entire component tree.

### Form components

Use the Theme component to apply consistent styling across a group of form components.

```vue [ThemeFormExample.vue]
<script setup lang="ts">
import * as z from 'zod'
import type { FormSubmitEvent } from 'pohon-ui'

const schema = z.object({
  name: z.string().min(2, 'Too short'),
  email: z.email('Invalid email'),
  bio: z.string().optional()
})

type Schema = z.output<typeof schema>

const state = reactive<Partial<Schema>>({
  name: 'John Doe',
  email: 'john@example.com',
  bio: undefined
})

const toast = useToast()
async function onSubmit(event: FormSubmitEvent<Schema>) {
  toast.add({ title: 'Saved', description: 'Your profile has been updated.', color: 'success' })
  console.log(event.data)
}
</script>

<template>
  <PTheme
    :props="{
      input: { size: 'lg' },
      textarea: { size: 'lg' }
    }"
    :ui="{
      formField: {
        root: 'flex max-sm:flex-col justify-between gap-4',
        wrapper: 'w-full sm:max-w-xs'
      }
    }"
  >
    <PForm :schema="schema" :state="state" class="space-y-4 w-full" @submit="onSubmit">
      <PFormField label="Name" name="name" description="Your public display name.">
        <PInput v-model="state.name" />
      </PFormField>

      <PFormField label="Email" name="email" description="Used for notifications.">
        <PInput v-model="state.email" type="email" />
      </PFormField>

      <PFormField label="Bio" name="bio" description="A short description about yourself.">
        <PTextarea v-model="state.bio" placeholder="Tell us about yourself" />
      </PFormField>

      <div class="flex justify-end">
        <PButton type="submit">
          Save changes
        </PButton>
      </div>
    </PForm>
  </PTheme>
</template>
```

> [!TIP]
> 
> `<PFormField>`, `<PFieldGroup>` and `<PAvatarGroup>` keep precedence over `<PTheme :props>` for `size`, `color` and `highlight`. Validation errors also force the `error` color over any theme value.

### Prose components

Use the `prose` namespace to theme typography components. Keys are nested under `prose` (e.g. `prose.p`, `prose.code`).

```vue [ThemeProseExample.vue]
<script setup lang="ts">
import { Markdown } from '@comark/vue'

const ui = {
  prose: {
    p: { base: 'my-2.5 text-sm/6' },
    li: { base: 'my-0.5 text-sm/6' },
    ul: { base: 'my-2.5' },
    ol: { base: 'my-2.5' },
    h1: { base: 'text-xl mb-4' },
    h2: { base: 'text-lg mt-6 mb-3' },
    h3: { base: 'text-base mt-4 mb-2' },
    h4: { base: 'text-sm mt-3 mb-1.5' },
    code: { base: 'text-xs' },
    pre: { root: 'my-2.5', base: 'text-xs/5' },
    table: { root: 'my-2.5' },
    hr: { base: 'my-5' }
  }
}

const value = `## Getting started

This is a paragraph with a **tighter typographic scale** applied through the \`Theme\` component.

- First item
- Second item
- Third item

> The spacing and font sizes are smaller than the defaults, making it ideal for compact content areas.`
</script>

<template>
  <PTheme :ui="ui">
    <Markdown :value="value" class="*:first:mt-0 *:last:mb-0" />
  </PTheme>
</template>
```

## API

### Props

### Slots

## Changelog

See commit history for [component](https://github.com/vinicunca/pohon/commits/main/src/runtime/components/Theme.vue) and [theme](https://github.com/vinicunca/pohon/commits/main/src/theme/theme.ts).

---

- [GitHub](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/Theme.vue)


## Sitemap

See the full [sitemap](https://pohon.vinicunca.dev/sitemap.md) for all pages.

## Generated component API

[Theme source](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/Theme.vue)

### Props

- **props** — `ThemeDefaults | undefined; optional`: Per-component prop defaults that flow through \`useComponentProps\` to every descendant. Each key maps to a partial of that component's props.
- **ui** — `ThemeUI | undefined; optional`: Per-component slot class overrides (flat shorthand for \`:props.<name>.ui\`).

### Slots

- **default** — `{} | undefined`

### Events

No events are declared.
