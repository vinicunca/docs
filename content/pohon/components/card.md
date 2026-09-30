---
title: "Card"
description: "Display content in a card with a header, body and footer."
package: pohon
sourceTag: "v2.0.1"
sourceCommit: "ee987babf834bae617d75a9c6b9347bba1a494df"
sourceUrl: "https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/docs/content/docs/2.components/card.md"
---
## Usage

Use the `header`, `default` and `footer` slots to add content to the Card.

```vue
<template>
  <UCard>
    <Placeholder class="h-32" />
  
    <template #header>
      <Placeholder class="h-8" />
    </template>
    <template #footer>
      <Placeholder class="h-8" />
    </template></UCard>
</template>
```

### Title

Use the `title` prop to set the title of the Card's header.

```vue
<template>
  <UCard title="Card with title" class="w-full">
    <Placeholder class="h-32" />
  </UCard>
</template>
```

### Description

Use the `description` prop to set the description of the Card's header.

```vue
<template>
  <UCard title="Card with description" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit." class="w-full">
    <Placeholder class="h-32" />
  </UCard>
</template>
```

### Variant

Use the `variant` prop to change the variant of the Card.

```vue
<template>
  <UCard variant="subtle">
    <Placeholder class="h-32" />
  
    <template #header>
      <Placeholder class="h-8" />
    </template>
    <template #footer>
      <Placeholder class="h-8" />
    </template></UCard>
</template>
```

## API

### Props

```ts
/**
 * Props for the Card component
 */
interface CardProps {
  to?: string | it | et | undefined;
  target?: null | "_blank" | "_parent" | "_self" | "_top" | string & {} | undefined;
  icon?: any;
  title?: string | undefined;
  description?: string | undefined;
  /**
   * @default 'primary'
   */
  color?: "error" | "primary" | "secondary" | "success" | "info" | "warning" | "neutral" | undefined;
  ui?: { base?: SlotClass; icon?: SlotClass; title?: SlotClass; description?: SlotClass; externalIcon?: SlotClass; } | undefined;
}
```

### Slots

```ts
/**
 * Slots for the Card component
 */
interface CardSlots {
  default(): any;
  title(): any;
}
```

## Theme

```ts [app.config.ts]
export default defineAppConfig({
  ui: {
    card: {
      slots: {
        root: 'rounded-lg overflow-hidden',
        header: 'p-4 sm:px-6',
        title: 'color-text-highlighted font-600',
        description: 'mt-1 color-text-muted text-sm',
        body: 'p-4 sm:p-6',
        footer: 'p-4 sm:px-6'
      },
      variants: {
        variant: {
          solid: {
            root: 'bg-background-inverted color-text-inverted',
            title: 'color-text-inverted',
            description: 'color-text-dimmed'
          },
          outline: {
            root: 'bg-background ring ring-ring divide-y divide-divide'
          },
          soft: {
            root: 'bg-background-elevated/50 divide-y divide-divide'
          },
          subtle: {
            root: 'bg-background-elevated/50 ring ring-ring divide-y divide-divide'
          }
        }
      },
      defaultVariants: {
        variant: 'outline'
      }
    }
  }
})
```

## Changelog

See commit history for [component](https://github.com/vinicunca/pohon/commits/main/src/runtime/components/Card.vue) and [theme](https://github.com/vinicunca/pohon/commits/main/src/theme/card.ts).

---

- [GitHub](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/Card.vue)


## Sitemap

See the full [sitemap](https://pohon.vinicunca.dev/sitemap.md) for all pages.

## Generated component API

[Card source](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/Card.vue)

### Props

- **as** — `any; optional`: The element or component this component should render as.
- **title** — `string | undefined; optional`
- **description** — `string | undefined; optional`
- **variant** — `"solid" | "outline" | "soft" | "subtle" | undefined; optional`
- **ui** — `{ root?: SlotClass; header?: SlotClass; title?: SlotClass; description?: SlotClass; body?: SlotClass; footer?: SlotClass; } | undefined; optional`

### Slots

- **header** — `{} | undefined`
- **title** — `{} | undefined`
- **description** — `{} | undefined`
- **default** — `{} | undefined`
- **footer** — `{} | undefined`

### Events

No events are declared.
