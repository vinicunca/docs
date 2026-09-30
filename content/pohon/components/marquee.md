---
title: "Marquee"
description: "A component to create infinite scrolling content."
package: pohon
sourceTag: "v2.0.1"
sourceCommit: "ee987babf834bae617d75a9c6b9347bba1a494df"
sourceUrl: "https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/docs/content/docs/2.components/marquee.md"
---
## Usage

Use the default slot with your content to create an infinite scrolling animation.

```vue
<template>
  <UMarquee>
    <PIcon name="i-simple-icons-github" class="size-10 shrink-0" />
    <PIcon name="i-simple-icons-discord" class="size-10 shrink-0" />
    <PIcon name="i-simple-icons-x" class="size-10 shrink-0" />
    <PIcon name="i-simple-icons-instagram" class="size-10 shrink-0" />
    <PIcon name="i-simple-icons-linkedin" class="size-10 shrink-0" />
    <PIcon name="i-simple-icons-facebook" class="size-10 shrink-0" />
  </UMarquee>
</template>
```

> [!TIP]
> 
> The animation is automatically disabled when the user prefers reduced motion, the content is displayed statically instead.

### Pause on Hover

Use the `pause-on-hover` prop to pause the animation when the user hovers over the content.

```vue
<template>
  <UMarquee pause-on-hover>
    <PIcon name="i-simple-icons-github" class="size-10 shrink-0" />
    <PIcon name="i-simple-icons-discord" class="size-10 shrink-0" />
    <PIcon name="i-simple-icons-x" class="size-10 shrink-0" />
    <PIcon name="i-simple-icons-instagram" class="size-10 shrink-0" />
    <PIcon name="i-simple-icons-linkedin" class="size-10 shrink-0" />
    <PIcon name="i-simple-icons-facebook" class="size-10 shrink-0" />
  </UMarquee>
</template>
```

### Reverse

Use the `reverse` prop to reverse the direction of the animation.

```vue
<template>
  <UMarquee reverse>
    <PIcon name="i-simple-icons-github" class="size-10 shrink-0" />
    <PIcon name="i-simple-icons-discord" class="size-10 shrink-0" />
    <PIcon name="i-simple-icons-x" class="size-10 shrink-0" />
    <PIcon name="i-simple-icons-instagram" class="size-10 shrink-0" />
    <PIcon name="i-simple-icons-linkedin" class="size-10 shrink-0" />
    <PIcon name="i-simple-icons-facebook" class="size-10 shrink-0" />
  </UMarquee>
</template>
```

### Orientation

Use the `orientation` prop to change the scrolling direction.

```vue
<template>
  <UMarquee orientation="vertical">
    <PIcon name="i-simple-icons-github" class="size-10 shrink-0" />
    <PIcon name="i-simple-icons-discord" class="size-10 shrink-0" />
    <PIcon name="i-simple-icons-x" class="size-10 shrink-0" />
    <PIcon name="i-simple-icons-instagram" class="size-10 shrink-0" />
    <PIcon name="i-simple-icons-linkedin" class="size-10 shrink-0" />
    <PIcon name="i-simple-icons-facebook" class="size-10 shrink-0" />
  </UMarquee>
</template>
```

### Repeat

Use the `repeat` prop to specify how many times the content should be repeated in the animation.

```vue
<template>
  <UMarquee :repeat="6">
    <PIcon name="i-simple-icons-github" class="size-10 shrink-0" />
    <PIcon name="i-simple-icons-discord" class="size-10 shrink-0" />
    <PIcon name="i-simple-icons-x" class="size-10 shrink-0" />
    <PIcon name="i-simple-icons-instagram" class="size-10 shrink-0" />
    <PIcon name="i-simple-icons-linkedin" class="size-10 shrink-0" />
    <PIcon name="i-simple-icons-facebook" class="size-10 shrink-0" />
  </UMarquee>
</template>
```

### Overlay

Use the `overlay` prop to remove the gradient overlays on the edges of the marquee.

```vue
<template>
  <UMarquee :overlay="false">
    <PIcon name="i-simple-icons-github" class="size-10 shrink-0" />
    <PIcon name="i-simple-icons-discord" class="size-10 shrink-0" />
    <PIcon name="i-simple-icons-x" class="size-10 shrink-0" />
    <PIcon name="i-simple-icons-instagram" class="size-10 shrink-0" />
    <PIcon name="i-simple-icons-linkedin" class="size-10 shrink-0" />
    <PIcon name="i-simple-icons-facebook" class="size-10 shrink-0" />
  </UMarquee>
</template>
```

## Examples

### Testimonials

Use the `Marquee` component to create an infinite scrolling animation for your testimonials.

```vue [MarqueeTestimonials.vue]
<script setup lang="ts">
import type { UserProps } from 'pohon-ui'

// Illustrative content for the marquee example, not customer endorsements.
const testimonials: { user: UserProps, quote: string }[] = [
  { user: { name: 'Alex', description: 'Example user' }, quote: 'Add a short quote from a real customer here.' },
  { user: { name: 'Sam', description: 'Example user' }, quote: 'Use this card to highlight feedback about your product.' },
  { user: { name: 'Taylor', description: 'Example user' }, quote: 'Replace the sample copy with a verified testimonial.' }
]
</script>

<template>
  <div class="flex flex-col gap-4 w-full">
    <PMarquee pause-on-hover :overlay="false" :ui="{ root: '[--gap:1rem]', content: 'w-auto py-1' }">
      <PPageCard
        v-for="(testimonial, index) in testimonials"
        :key="index"
        variant="subtle"
        :description="testimonial.quote"
        :ui="{
          description: 'before:content-[open-quote] after:content-[close-quote] line-clamp-3'
        }"
        class="w-64 shrink-0"
      >
        <template #footer>
          <PUser v-bind="testimonial.user" size="xl" :ui="{ description: 'line-clamp-1' }" />
        </template>
      </PPageCard>
    </PMarquee>
    <PMarquee pause-on-hover reverse :overlay="false" :ui="{ root: '[--gap:1rem]', content: 'w-auto py-1' }">
      <PPageCard
        v-for="(testimonial, index) in testimonials"
        :key="index"
        variant="subtle"
        :description="testimonial.quote"
        :ui="{
          description: 'before:content-[open-quote] after:content-[close-quote] line-clamp-3'
        }"
        class="w-64 shrink-0"
      >
        <template #footer>
          <PUser v-bind="testimonial.user" size="xl" :ui="{ description: 'line-clamp-1' }" />
        </template>
      </PPageCard>
    </PMarquee>
  </div>
</template>
```

### Screenshots

Use the `Marquee` component to create an infinite scrolling animation for your screenshots.

```vue [MarqueeScreenshots.vue]
<template>
  <div class="relative w-full h-[400px] bg-background-muted overflow-hidden">
    <PMarquee reverse orientation="vertical" :overlay="false" :ui="{ root: '[--duration:40s] absolute w-[460px] -left-[100px] -top-[300px] h-[940px] transform-3d rotate-x-55 rotate-y-0 rotate-z-30' }">
      <img
        v-for="i in 4"
        :key="i"
        :src="`/blocks/image${i}.png`"
        width="460"
        height="258"
        :alt="`Pohon UI Screenshot ${i}`"
        loading="lazy"
        class="aspect-video border border-border rounded-lg bg-white"
      >
    </PMarquee>
    <PMarquee orientation="vertical" :overlay="false" :ui="{ root: '[--duration:40s] absolute w-[460px] -top-[400px] left-[480px] h-[1160px] transform-3d rotate-x-55 rotate-y-0 rotate-z-30' }">
      <img
        v-for="i in [5, 6, 7, 8]"
        :key="i"
        :src="`/blocks/image${i}.png`"
        width="460"
        height="258"
        :alt="`Pohon UI Screenshot ${i}`"
        loading="lazy"
        class="aspect-video border border-border rounded-lg bg-white"
      >
    </PMarquee>
    <PMarquee reverse orientation="vertical" :overlay="false" :ui="{ root: 'hidden md:flex [--duration:40s] absolute w-[460px] -top-[300px] left-[1020px] h-[1060px] transform-3d rotate-x-55 rotate-y-0 rotate-z-30' }">
      <img
        v-for="i in [9, 10, 11, 12]"
        :key="i"
        :src="`/blocks/image${i}.png`"
        width="460"
        height="258"
        :alt="`Pohon UI Screenshot ${i}`"
        loading="lazy"
        class="aspect-video border border-border rounded-lg bg-white"
      >
    </PMarquee>
  </div>
</template>
```

## API

### Props

### Slots

## Theme

```ts [app.config.ts]
export default defineAppConfig({
  ui: {
    marquee: {
      slots: {
        root: 'group flex gap-$gap [--duration:20s] [--gap:--spacing(16)] items-center relative overflow-hidden',
        content: 'flex shrink-0 gap-$gap min-w-max items-center justify-around'
      },
      variants: {
        orientation: {
          horizontal: {
            content: 'w-full'
          },
          vertical: {
            content: 'h-full'
          }
        },
        pauseOnHover: {
          true: {
            content: 'group-hover:[animation-play-state:paused]'
          }
        },
        reverse: {
          true: {
            content: '![animation-direction:reverse]'
          }
        },
        overlay: {
          true: {
            root: 'after:(pointer-events-none content-empty absolute z-2 from-background to-transparent) before:(pointer-events-none content-empty absolute z-2 from-background to-transparent)'
          }
        }
      },
      compoundVariants: [
        {
          orientation: 'horizontal',
          class: {
            root: 'flex-row',
            content: 'flex-row motion-safe:animate-marquee motion-safe:rtl:animate-marquee backface-hidden'
          }
        },
        {
          orientation: 'horizontal',
          overlay: true,
          class: {
            root: 'backface-hidden after:(h-full w-1/3 content-empty end-0 inset-y-0 bg-gradient-to-l) before:(h-full w-1/3 content-empty start-0 inset-y-0 bg-gradient-to-r) rtl:after:bg-gradient-to-r rtl:before:bg-gradient-to-l'
          }
        },
        {
          orientation: 'vertical',
          class: {
            root: 'flex-col',
            content: 'flex-col motion-safe:animate-marquee-vertical pohon:h-fit backface-hidden'
          }
        },
        {
          orientation: 'vertical',
          overlay: true,
          class: {
            root: 'backface-hidden after:(h-1/3 w-full content-empty inset-x-0 bottom-0 bg-gradient-to-t) before:(h-1/3 w-full content-empty inset-x-0 top-0 bg-gradient-to-b)'
          }
        }
      ]
    }
  }
})
```

## Changelog

See commit history for [component](https://github.com/vinicunca/pohon/commits/main/src/runtime/components/Marquee.vue) and [theme](https://github.com/vinicunca/pohon/commits/main/src/theme/marquee.ts).

---

- [GitHub](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/Marquee.vue)


## Sitemap

See the full [sitemap](https://pohon.vinicunca.dev/sitemap.md) for all pages.

## Generated component API

[Marquee source](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/Marquee.vue)

### Props

- **as** — `any; optional`: The element or component this component should render as.
- **pauseOnHover** — `boolean | undefined; optional`: Pause the marquee on hover.
- **reverse** — `boolean | undefined; optional`: Reverse the direction of the marquee.
- **orientation** — `"vertical" | "horizontal" | undefined; optional; default: "horizontal"`: The orientation of the marquee.
- **repeat** — `number | undefined; optional; default: 4`: The number of times the marquee should repeat.
- **overlay** — `boolean | undefined; optional; default: true`: Display an overlay on the marquee.
- **ui** — `{ root?: SlotClass; content?: SlotClass; } | undefined; optional`

### Slots

- **default** — `{} | undefined`

### Events

No events are declared.
