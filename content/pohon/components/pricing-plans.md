---
title: "PricingPlans"
description: "Display a list of pricing plans in a responsive grid layout."
package: pohon
sourceTag: "v2.0.1"
sourceCommit: "ee987babf834bae617d75a9c6b9347bba1a494df"
sourceUrl: "https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/docs/content/docs/2.components/pricing-plans.md"
---
## Usage

The PricingPlans component provides a flexible layout to display a list of [PricingPlan](/pohon/components/pricing-plan) components using either the default slot or the `plans` prop.

```vue
<template>
  <PPricingPlans>
    <PPricingPlan
      v-for="(plan, index) in plans"
      :key="index"
      v-bind="plan"
    />
  </PPricingPlans>
</template>
```

> [!TIP]
> 
> The grid columns will be automatically calculated based on the number of plans, this works with the `plans` prop but also with the default slot.

### Plans

Use the `plans` prop as an array of objects with the properties of the [PricingPlan](/pohon/components/pricing-plan#props) component.

```vue
<script setup lang="ts">
import type { PricingPlanProps } from 'pohon-ui'

const plans = ref<PricingPlanProps[]>([
  {
    title: "Solo",
    description: "Tailored for indie hackers.",
    price: "$249",
    features: [
      "One developer",
      "Lifetime access"
    ],
    button: {
      label: "Buy now"
    }
  },
  {
    title: "Startup",
    description: "Best suited for small teams.",
    price: "$499",
    features: [
      "Up to 5 developers",
      "Everything in Solo"
    ],
    button: {
      label: "Buy now"
    }
  },
  {
    title: "Organization",
    description: "Ideal for larger teams and organizations.",
    price: "$999",
    features: [
      "Up to 20 developers",
      "Everything in Startup"
    ],
    button: {
      label: "Buy now"
    }
  }
])
</script>

<template>
  <UPricingPlans :plans="plans" />
</template>
```

### Orientation

Use the `orientation` prop to change the orientation of the PricingPlans. Defaults to `horizontal`.

```vue
<script setup lang="ts">
import type { PricingPlanProps } from 'pohon-ui'

const plans = ref<PricingPlanProps[]>([
  {
    title: "Solo",
    description: "Tailored for indie hackers.",
    price: "$249",
    features: [
      "One developer",
      "Lifetime access"
    ],
    button: {
      label: "Buy now"
    }
  },
  {
    title: "Startup",
    description: "Best suited for small teams.",
    price: "$499",
    features: [
      "Up to 5 developers",
      "Everything in Solo"
    ],
    button: {
      label: "Buy now"
    }
  },
  {
    title: "Organization",
    description: "Ideal for larger teams and organizations.",
    price: "$999",
    features: [
      "Up to 20 developers",
      "Everything in Startup"
    ],
    button: {
      label: "Buy now"
    }
  }
])
</script>

<template>
  <UPricingPlans orientation="vertical" :plans="plans" />
</template>
```

> [!TIP]
> 
> When using the `plans` prop instead of the default slot, the `orientation` of the plans is automatically reversed, `horizontal` to `vertical` and vice versa.

### Compact

Use the `compact` prop to reduce the padding between the plans when one of the plans is scaled for a better visual balance.

```vue
<script setup lang="ts">
import type { PricingPlanProps } from 'pohon-ui'

const plans = ref<PricingPlanProps[]>([
  {
    title: "Solo",
    description: "Tailored for indie hackers.",
    price: "$249",
    features: [
      "One developer",
      "Lifetime access"
    ],
    button: {
      label: "Buy now"
    }
  },
  {
    title: "Startup",
    description: "Best suited for small teams.",
    price: "$499",
    scale: true,
    features: [
      "Up to 5 developers",
      "Everything in Solo"
    ],
    button: {
      label: "Buy now"
    }
  },
  {
    title: "Organization",
    description: "Ideal for larger teams and organizations.",
    price: "$999",
    features: [
      "Up to 20 developers",
      "Everything in Startup"
    ],
    button: {
      label: "Buy now"
    }
  }
])
</script>

<template>
  <UPricingPlans compact :plans="plans" />
</template>
```

### Scale

Use the `scale` prop to adjust the spacing between the plans when one of the plans is scaled for a better visual balance.

```vue
<script setup lang="ts">
import type { PricingPlanProps } from 'pohon-ui'

const plans = ref<PricingPlanProps[]>([
  {
    title: "Solo",
    description: "Tailored for indie hackers.",
    price: "$249",
    features: [
      "One developer",
      "Lifetime access"
    ],
    button: {
      label: "Buy now"
    }
  },
  {
    title: "Startup",
    description: "Best suited for small teams.",
    price: "$499",
    scale: true,
    features: [
      "Up to 5 developers",
      "Everything in Solo"
    ],
    button: {
      label: "Buy now"
    }
  },
  {
    title: "Organization",
    description: "Ideal for larger teams and organizations.",
    price: "$999",
    features: [
      "Up to 20 developers",
      "Everything in Startup"
    ],
    button: {
      label: "Buy now"
    }
  }
])
</script>

<template>
  <UPricingPlans scale :plans="plans" />
</template>
```

## Examples

> [!NOTE]
> 
> While these examples use [Nuxt Content](https://content.nuxt.com), the components can be integrated with any content management system.

### Within a page

Use the PricingPlans component in a page to create a pricing page:

```vue [pages/pricing/index.vue]
<script setup lang="ts">
const { data: plans } = await useAsyncData('plans', () => queryCollection('plans').all())
</script>

<template>
  <PPage>
    <PPageHero title="Pricing" />

    <PPageBody>
      <PContainer>
        <PPricingPlans :plans="plans" />
      </PContainer>
    </PPageBody>
  </PPage>
</template>
```

> [!NOTE]
> 
> In this example, the `plans` are fetched using `queryCollection` from the `@nuxt/content` module.

## API

### Props

### Slots

## Theme

```ts [app.config.ts]
export default defineAppConfig({
  ui: {
    pricingPlans: {
      base: 'flex flex-col gap-y-8',
      variants: {
        orientation: {
          horizontal: 'lg:grid lg:grid-cols-[repeat(var(--count),minmax(0,1fr))]',
          vertical: ''
        },
        compact: {
          false: 'gap-x-8'
        },
        scale: {
          true: ''
        }
      },
      compoundVariants: [
        {
          compact: false,
          scale: true,
          class: 'lg:gap-x-13'
        }
      ]
    }
  }
})
```

## Changelog

See commit history for [component](https://github.com/vinicunca/pohon/commits/main/src/runtime/components/PricingPlans.vue) and [theme](https://github.com/vinicunca/pohon/commits/main/src/theme/pricing-plans.ts).

---

- [GitHub](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/PricingPlans.vue)


## Sitemap

See the full [sitemap](https://pohon.vinicunca.dev/sitemap.md) for all pages.

## Generated component API

[PricingPlans source](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/PricingPlans.vue)

### Props

- **as** — `any; optional`: The element or component this component should render as.
- **plans** — `PricingPlanProps[] | undefined; optional`
- **orientation** — `"vertical" | "horizontal" | undefined; optional; default: "horizontal"`: The orientation of the pricing plans.
- **compact** — `boolean | undefined; optional; default: false`: When \`true\`, the plans will be displayed without gap.
- **scale** — `boolean | undefined; optional; default: false`: When \`true\`, the plans will be displayed with a larger gap. Useful when one plan is scaled. Doesn't work with \`compact\`.
- **ui** — `{ base?: any; } | undefined; optional`

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
- **default** — `{} | undefined`

### Events

No events are declared.
