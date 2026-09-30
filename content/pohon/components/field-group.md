---
title: "FieldGroup"
description: "Group multiple button-like elements together."
package: pohon
sourceTag: "v2.0.1"
sourceCommit: "ee987babf834bae617d75a9c6b9347bba1a494df"
sourceUrl: "https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/docs/content/docs/2.components/field-group.md"
---
## Usage

Wrap multiple [Button](/pohon/components/button) within a FieldGroup to group them together.

```vue
<template>
  <UFieldGroup>
    <PButton color="neutral" variant="subtle" label="Button" />
    <PButton color="neutral" variant="outline" icon="i-lucide-chevron-down" />
  </UFieldGroup>
</template>
```

### Size

Use the `size` prop to change the size of all the buttons.

```vue
<template>
  <UFieldGroup size="xl">
    <PButton color="neutral" variant="subtle" label="Button" />
    <PButton color="neutral" variant="outline" icon="i-lucide-chevron-down" />
  </UFieldGroup>
</template>
```

### Orientation

Use the `orientation` prop to change the orientation of the buttons. Defaults to `horizontal`.

```vue
<template>
  <UFieldGroup orientation="vertical">
    <PButton color="neutral" variant="subtle" label="Submit" />
    <PButton color="neutral" variant="outline" label="Cancel" />
  </UFieldGroup>
</template>
```

## Examples

### With input

You can use components like [Input](/pohon/components/input), [InputMenu](/pohon/components/input-menu), [Select](/pohon/components/select) [SelectMenu](/pohon/components/select-menu), etc. within a field group.

```vue
<template>
  <UFieldGroup>
    <PInput color="neutral" variant="outline" placeholder="Enter token" />

    <PButton color="neutral" variant="subtle" icon="i-lucide-clipboard" />
  </UFieldGroup>
</template>
```

### With tooltip

You can use a [Tooltip](/pohon/components/tooltip) within a field group.

```vue [FieldGroupTooltipExample.vue]
<template>
  <PFieldGroup>
    <PInput color="neutral" variant="outline" placeholder="Enter token" />

    <PTooltip text="Copy to clipboard">
      <PButton
        color="neutral"
        variant="subtle"
        icon="i-lucide-clipboard"
      />
    </PTooltip>
  </PFieldGroup>
</template>
```

### With dropdown menu

You can use a [DropdownMenu](/pohon/components/dropdown-menu) within a field group.

```vue [FieldGroupDropdownExample.vue]
<script setup lang="ts">
import type { DropdownMenuItem } from 'pohon-ui'

const items: DropdownMenuItem[] = [
  {
    label: 'Team',
    icon: 'i-lucide-users'
  },
  {
    label: 'Invite users',
    icon: 'i-lucide-user-plus',
    children: [
      {
        label: 'Invite by email',
        icon: 'i-lucide-send-horizontal'
      },
      {
        label: 'Invite by link',
        icon: 'i-lucide-link'
      }
    ]
  },
  {
    label: 'New team',
    icon: 'i-lucide-plus'
  }
]
</script>

<template>
  <PFieldGroup>
    <PButton color="neutral" variant="subtle" label="Settings" />

    <PDropdownMenu :items="items">
      <PButton
        color="neutral"
        variant="outline"
        icon="i-lucide-chevron-down"
      />
    </PDropdownMenu>
  </PFieldGroup>
</template>
```

### With badge

You can use a [Badge](/pohon/components/badge) within a field group.

```vue [FieldGroupBadgeExample.vue]
<template>
  <PFieldGroup>
    <PBadge color="neutral" variant="outline" size="lg" label="https://" />

    <PInput color="neutral" variant="outline" placeholder="www.example.com" />
  </PFieldGroup>
</template>
```

## API

### Props

```ts
/**
 * Props for the FieldGroup component
 */
interface FieldGroupProps {
  /**
   * The element or component this component should render as.
   * @default 'div'
   */
  as?: any;
  ui?: { base?: any; } | undefined;
}
```

### Slots

```ts
/**
 * Slots for the FieldGroup component
 */
interface FieldGroupSlots {
  default(): any;
}
```

## Theme

```ts [app.config.ts]
export default defineAppConfig({
  ui: {
    fieldGroup: {
      base: 'relative',
      variants: {
        size: {
          xs: '',
          sm: '',
          md: '',
          lg: '',
          xl: ''
        },
        orientation: {
          horizontal: 'inline-flex -space-x-px',
          vertical: 'flex flex-col -space-y-px'
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

See commit history for [component](https://github.com/vinicunca/pohon/commits/main/src/runtime/components/FieldGroup.vue) and [theme](https://github.com/vinicunca/pohon/commits/main/src/theme/field-group.ts).

---

- [GitHub](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/FieldGroup.vue)


## Sitemap

See the full [sitemap](https://pohon.vinicunca.dev/sitemap.md) for all pages.

## Generated component API

[FieldGroup source](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/FieldGroup.vue)

### Props

- **as** — `any; optional`: The element or component this component should render as.
- **size** — `"md" | "xs" | "sm" | "lg" | "xl" | undefined; optional`
- **orientation** — `"vertical" | "horizontal" | undefined; optional; default: "horizontal"`: The orientation the buttons are laid out.
- **ui** — `{ base?: any; } | undefined; optional`

### Slots

- **default** — `{} | undefined`

### Events

No events are declared.
