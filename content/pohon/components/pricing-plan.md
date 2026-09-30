---
title: "PricingPlan"
description: "A customizable pricing plan to display in a pricing page."
package: pohon
sourceTag: "v2.0.1"
sourceCommit: "ee987babf834bae617d75a9c6b9347bba1a494df"
sourceUrl: "https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/docs/content/docs/2.components/pricing-plan.md"
---
## Usage

The PricingPlan component provides a flexible way to display a pricing plan with customizable content including title, description, price, features, etc.

```vue
<template>
  <p-pricing-plan :button="{
    label: 'Buy now'
  }" :features="[
    'One developer',
    'Unlimited projects',
    'Access to GitHub repository',
    'Unlimited patch & minor updates',
    'Lifetime access'
  ]" badge="Most popular" billing-cycle="/month" class="w-96" description="For bootstrappers and indie hackers." discount="$199" price="$249" title="Solo" />
</template>
```

> [!TIP]
> See: /docs/components/pricing-plans
> 
> Use the `PricingPlans` component to display multiple pricing plans in a responsive grid layout.

### Title

Use the `title` prop to set the title of the PricingPlan.

```vue
<template>
  <UPricingPlan title="Solo" class="w-96" />
</template>
```

### Description

Use the `description` prop to set the description of the PricingPlan.

```vue
<template>
  <UPricingPlan title="Solo" description="For bootstrappers and indie hackers." />
</template>
```

### Badge

Use the `badge` prop to display a [Badge](/pohon/components/badge) next to the title of the PricingPlan.

```vue
<template>
  <UPricingPlan title="Solo" description="For bootstrappers and indie hackers." badge="Most popular" />
</template>
```

You can pass any property from the [Badge](/pohon/components/badge#props) component to customize it.

```vue
<template>
  <UPricingPlan title="Solo" description="For bootstrappers and indie hackers." :badge="{
  label: 'Most popular',
  color: 'neutral',
  variant: 'solid'
}" />
</template>
```

### Price

Use the `price` prop to set the price of the PricingPlan.

```vue
<template>
  <UPricingPlan title="Solo" description="For bootstrappers and indie hackers." price="$249" />
</template>
```

### Discount

Use the `discount` prop to set a discounted price that will be displayed alongside the original price (which will be shown with a strikethrough).

```vue
<template>
  <UPricingPlan title="Solo" description="For bootstrappers and indie hackers." price="$249" discount="$199" />
</template>
```

### Billing

Use the `billing-cycle` and/or `billing-period` props to display the billing information of the PricingPlan.

```vue
<template>
  <UPricingPlan title="Solo" description="For bootstrappers and indie hackers." price="$9" billing-cycle="/month" billing-period="billed annually" />
</template>
```

### Features

Use the `features` prop as an array of string to display a list of features on the PricingPlan:

```vue
<template>
  <UPricingPlan title="Solo" description="For bootstrappers and indie hackers." price="$249" :features="[
  'One developer',
  'Unlimited projects',
  'Access to GitHub repository',
  'Unlimited patch & minor updates',
  'Lifetime access'
]" />
</template>
```

**Nuxt:**

> [!TIP]
> See: /docs/getting-started/integrations/icons/nuxt#theme
> 
> You can customize this icon globally in your `app.config.ts` under `ui.icons.success` key.

**Vue:**

> [!TIP]
> See: /docs/getting-started/integrations/icons/vue#theme
> 
> You can customize this icon globally in your `vite.config.ts` under `ui.icons.success` key.

You can also pass an array of objects with the following properties:

- `title: string`
- `icon?: string`

```vue
<script setup lang="ts">
import type { PricingPlanFeature } from 'pohon-ui'

const features = ref<PricingPlanFeature[]>([
  {
    title: "One developer",
    icon: "i-lucide-user"
  },
  {
    title: "Unlimited projects",
    icon: "i-lucide-infinity"
  },
  {
    title: "Access to GitHub repository",
    icon: "i-lucide-github"
  },
  {
    title: "Unlimited patch & minor updates",
    icon: "i-lucide-refresh-cw"
  },
  {
    title: "Lifetime access",
    icon: "i-lucide-clock"
  }
])
</script>

<template>
  <UPricingPlan title="Solo" description="For bootstrappers and indie hackers." price="$249" :features="features" />
</template>
```

### Button

Use the `button` prop with any property from the [Button](/pohon/components/button) component to display a button at the bottom of the PricingPlan.

```vue
<template>
  <UPricingPlan title="Solo" description="For bootstrappers and indie hackers." price="$249" :features="[
  'One developer',
  'Unlimited projects',
  'Access to GitHub repository',
  'Unlimited patch & minor updates',
  'Lifetime access'
]" :button="{
  label: 'Buy now'
}" />
</template>
```

> [!TIP]
> 
> Use the `onClick` field to add a click handler to trigger the plan purchase.

### Variant

Use the `variant` prop to change the variant of the PricingPlan.

```vue
<template>
  <UPricingPlan title="Solo" description="For bootstrappers and indie hackers." price="$249" :features="[
  'One developer',
  'Unlimited projects',
  'Access to GitHub repository',
  'Unlimited patch & minor updates',
  'Lifetime access'
]" :button="{
  label: 'Buy now'
}" variant="subtle" />
</template>
```

### Orientation

Use the `orientation` prop to change the orientation of the PricingPlan. Defaults to `vertical`.

```vue
<template>
  <UPricingPlan title="Solo" description="For bootstrappers and indie hackers." price="$249" :features="[
  'One developer',
  'Unlimited projects',
  'Access to GitHub repository',
  'Lifetime access'
]" :button="{
  label: 'Buy now'
}" orientation="horizontal" variant="outline" />
</template>
```

### Tagline

Use the `tagline` prop to display a tagline text above the price.

```vue
<template>
  <UPricingPlan title="Solo" description="For bootstrappers and indie hackers." price="$249" :features="[
  'One developer',
  'Unlimited projects',
  'Access to GitHub repository',
  'Lifetime access'
]" :button="{
  label: 'Buy now'
}" orientation="horizontal" tagline="Pay once, own it forever" />
</template>
```

### Terms

Use the `terms` prop to display terms below the price.

```vue
<template>
  <UPricingPlan title="Solo" description="For bootstrappers and indie hackers." price="$249" :features="[
  'One developer',
  'Unlimited projects',
  'Access to GitHub repository',
  'Lifetime access'
]" :button="{
  label: 'Buy now'
}" orientation="horizontal" tagline="Pay once, own it forever" terms="Invoices and receipts available." />
</template>
```

### Highlight

Use the `highlight` prop to display a highlighted border around the PricingPlan.

```vue
<template>
  <UPricingPlan title="Solo" description="For bootstrappers and indie hackers." price="$249" :features="[
  'One developer',
  'Unlimited projects',
  'Access to GitHub repository',
  'Unlimited patch & minor updates',
  'Lifetime access'
]" :button="{
  label: 'Buy now'
}" highlight />
</template>
```

### Scale

Use the `scale` prop to make a PricingPlan bigger than the others.

> [!NOTE]
> See: /docs/components/pricing-plans#scale
> 
> Check out the PricingPlans's `scale` example to see how it works as it's hard to demonstrate by itself.

## API

### Props

### Slots

## Theme

```ts [app.config.ts]
export default defineAppConfig({
  ui: {
    pricingPlan: {
      slots: {
        root: 'relative grid rounded-lg p-6 lg:p-8 xl:p-10 gap-6',
        header: '',
        body: 'flex flex-col min-w-0',
        footer: 'flex flex-col gap-6 items-center',
        titleWrapper: 'flex items-center gap-3',
        title: 'color-text-highlighted truncate text-2xl sm:text-3xl text-pretty font-600',
        description: 'color-text-muted text-base text-pretty mt-2',
        priceWrapper: 'flex items-center gap-1',
        price: 'color-text-highlighted text-3xl sm:text-4xl font-600',
        discount: 'color-text-muted line-through text-xl sm:text-2xl',
        billing: 'flex flex-col justify-between min-w-0',
        billingPeriod: 'color-text-toned truncate text-xs font-500',
        billingCycle: 'color-text-muted truncate text-xs font-500',
        features: 'flex flex-col gap-3 flex-1 mt-6 grow-0',
        feature: 'flex items-center gap-2 min-w-0',
        featureIcon: 'size-5 shrink-0 color-primary',
        featureTitle: 'color-text-muted text-sm truncate',
        badge: '',
        button: '',
        tagline: 'text-base font-600 color-text',
        terms: 'text-xs/5 color-text-muted text-center text-balance'
      },
      variants: {
        orientation: {
          horizontal: {
            root: 'grid-cols-1 lg:grid-cols-3 justify-between divide-y lg:divide-y-0 lg:divide-x divide-divide',
            body: 'lg:col-span-2 pb-6 lg:pb-0 lg:pr-6 justify-center',
            footer: 'lg:justify-center lg:items-center lg:p-6 lg:max-w-xs lg:w-full lg:mx-auto',
            features: 'lg:grid lg:grid-cols-2 lg:mt-12'
          },
          vertical: {
            footer: 'justify-end',
            priceWrapper: 'mt-6'
          }
        },
        variant: {
          solid: {
            root: 'bg-background-inverted',
            title: 'color-text-inverted',
            description: 'color-text-dimmed',
            price: 'color-text-inverted',
            discount: 'color-text-dimmed',
            billingCycle: 'color-text-dimmed',
            billingPeriod: 'color-text-dimmed',
            featureTitle: 'color-text-dimmed'
          },
          outline: {
            root: 'bg-background ring ring-ring'
          },
          soft: {
            root: 'bg-background-elevated/50'
          },
          subtle: {
            root: 'bg-background-elevated/50 ring ring-ring'
          }
        },
        highlight: {
          true: {
            root: 'ring-2 ring-inset ring-primary'
          }
        },
        scale: {
          true: {
            root: 'lg:scale-[1.1] lg:z-1'
          }
        }
      },
      compoundVariants: [
        {
          orientation: 'horizontal',
          variant: 'soft',
          class: {
            root: 'divide-border-accented'
          }
        },
        {
          orientation: 'horizontal',
          variant: 'subtle',
          class: {
            root: 'divide-border-accented'
          }
        }
      ],
      defaultVariants: {
        variant: 'outline'
      }
    }
  }
})
```

## Changelog

See commit history for [component](https://github.com/vinicunca/pohon/commits/main/src/runtime/components/PricingPlan.vue) and [theme](https://github.com/vinicunca/pohon/commits/main/src/theme/pricing-plan.ts).

---

- [GitHub](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/PricingPlan.vue)


## Sitemap

See the full [sitemap](https://pohon.vinicunca.dev/sitemap.md) for all pages.

## Generated component API

[PricingPlan source](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/PricingPlan.vue)

### Props

- **as** — `any; optional`: The element or component this component should render as.
- **title** — `string | undefined; optional`
- **description** — `string | undefined; optional`
- **badge** — `string | BadgeProps | undefined; optional`: Display a badge next to the title. Can be a string or an object. \`{ color: 'primary', variant: 'subtle' }\`{lang="ts-type"}
- **billingCycle** — `string | undefined; optional`: The unit price period that appears next to the price. Typically used to show the recurring interval.
- **billingPeriod** — `string | undefined; optional`: Additional billing context that appears above the billing cycle. Typically used to show the actual billing frequency.
- **price** — `string | undefined; optional`: The current price of the plan. When used with \`discount\`, this becomes the original price.
- **discount** — `string | undefined; optional`: The discounted price of the plan. When provided, the \`price\` prop will be displayed as strikethrough.
- **features** — `string[] | PricingPlanFeature[] | undefined; optional`: Display a list of features under the price. Can be an array of strings or an array of objects.
- **button** — `ButtonProps | undefined; optional`: Display a buy button at the bottom. \`{ size: 'lg', block: true }\`{lang="ts-type"} Use the \`onClick\` field to add a click handler.
- **tagline** — `string | undefined; optional`: Display a tagline highlighting the pricing value proposition.
- **terms** — `string | undefined; optional`: Display terms at the bottom.
- **orientation** — `"vertical" | "horizontal" | undefined; optional; default: "vertical"`: The orientation of the pricing plan.
- **variant** — `"solid" | "outline" | "soft" | "subtle" | undefined; optional`
- **highlight** — `boolean | undefined; optional`: Display a ring around the pricing plan to highlight it.
- **scale** — `boolean | undefined; optional`: Enlarge the plan to make it more prominent.
- **ui** — `{ root?: SlotClass; header?: SlotClass; body?: SlotClass; footer?: SlotClass; titleWrapper?: SlotClass; title?: SlotClass; description?: SlotClass; priceWrapper?: SlotClass; price?: SlotClass; discount?: SlotClass; billing?: SlotClass; billingPeriod?: SlotClass; billingCycle?: SlotClass; features?: SlotClass; feature?: SlotClass; featureIcon?: SlotClass; featureTitle?: SlotClass; badge?: SlotClass; button?: SlotClass; tagline?: SlotClass; terms?: SlotClass; } | undefined; optional`

### Slots

- **badge** — `{ ui: { root: (props?: Record<string, any> | undefined) => string | undefined; header: (props?: Record<string, any> | undefined) => string | undefined; body: (props?: Record<string, any> | undefined) => string | undefined; footer: (props?: Record<string, any> | undefined) => string | undefined; titleWrapper: (props?: Record<string, any> | undefined) => string | undefined; title: (props?: Record<string, any> | undefined) => string | undefined; description: (props?: Record<string, any> | undefined) => string | undefined; priceWrapper: (props?: Record<string, any> | undefined) => string | undefined; price: (props?: Record<string, any> | undefined) => string | undefined; discount: (props?: Record<string, any> | undefined) => string | undefined; billing: (props?: Record<string, any> | undefined) => string | undefined; billingPeriod: (props?: Record<string, any> | undefined) => string | undefined; billingCycle: (props?: Record<string, any> | undefined) => string | undefined; features: (props?: Record<string, any> | undefined) => string | undefined; feature: (props?: Record<string, any> | undefined) => string | undefined; featureIcon: (props?: Record<string, any> | undefined) => string | undefined; featureTitle: (props?: Record<string, any> | undefined) => string | undefined; badge: (props?: Record<string, any> | undefined) => string | undefined; button: (props?: Record<string, any> | undefined) => string | undefined; tagline: (props?: Record<string, any> | undefined) => string | undefined; terms: (props?: Record<string, any> | undefined) => string | undefined; }; }`
- **title** — `{} | undefined`
- **description** — `{} | undefined`
- **price** — `{} | undefined`
- **discount** — `{} | undefined`
- **billing** — `{ ui: { root: (props?: Record<string, any> | undefined) => string | undefined; header: (props?: Record<string, any> | undefined) => string | undefined; body: (props?: Record<string, any> | undefined) => string | undefined; footer: (props?: Record<string, any> | undefined) => string | undefined; titleWrapper: (props?: Record<string, any> | undefined) => string | undefined; title: (props?: Record<string, any> | undefined) => string | undefined; description: (props?: Record<string, any> | undefined) => string | undefined; priceWrapper: (props?: Record<string, any> | undefined) => string | undefined; price: (props?: Record<string, any> | undefined) => string | undefined; discount: (props?: Record<string, any> | undefined) => string | undefined; billing: (props?: Record<string, any> | undefined) => string | undefined; billingPeriod: (props?: Record<string, any> | undefined) => string | undefined; billingCycle: (props?: Record<string, any> | undefined) => string | undefined; features: (props?: Record<string, any> | undefined) => string | undefined; feature: (props?: Record<string, any> | undefined) => string | undefined; featureIcon: (props?: Record<string, any> | undefined) => string | undefined; featureTitle: (props?: Record<string, any> | undefined) => string | undefined; badge: (props?: Record<string, any> | undefined) => string | undefined; button: (props?: Record<string, any> | undefined) => string | undefined; tagline: (props?: Record<string, any> | undefined) => string | undefined; terms: (props?: Record<string, any> | undefined) => string | undefined; }; }`
- **features** — `{} | undefined`
- **button** — `{ ui: { root: (props?: Record<string, any> | undefined) => string | undefined; header: (props?: Record<string, any> | undefined) => string | undefined; body: (props?: Record<string, any> | undefined) => string | undefined; footer: (props?: Record<string, any> | undefined) => string | undefined; titleWrapper: (props?: Record<string, any> | undefined) => string | undefined; title: (props?: Record<string, any> | undefined) => string | undefined; description: (props?: Record<string, any> | undefined) => string | undefined; priceWrapper: (props?: Record<string, any> | undefined) => string | undefined; price: (props?: Record<string, any> | undefined) => string | undefined; discount: (props?: Record<string, any> | undefined) => string | undefined; billing: (props?: Record<string, any> | undefined) => string | undefined; billingPeriod: (props?: Record<string, any> | undefined) => string | undefined; billingCycle: (props?: Record<string, any> | undefined) => string | undefined; features: (props?: Record<string, any> | undefined) => string | undefined; feature: (props?: Record<string, any> | undefined) => string | undefined; featureIcon: (props?: Record<string, any> | undefined) => string | undefined; featureTitle: (props?: Record<string, any> | undefined) => string | undefined; badge: (props?: Record<string, any> | undefined) => string | undefined; button: (props?: Record<string, any> | undefined) => string | undefined; tagline: (props?: Record<string, any> | undefined) => string | undefined; terms: (props?: Record<string, any> | undefined) => string | undefined; }; }`
- **header** — `{} | undefined`
- **body** — `{} | undefined`
- **footer** — `{} | undefined`
- **tagline** — `{} | undefined`
- **terms** — `{} | undefined`

### Events

No events are declared.
