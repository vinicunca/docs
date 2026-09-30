---
title: "Carousel"
description: "A carousel with motion and swipe built using Embla."
package: pohon
sourceTag: "v2.0.1"
sourceCommit: "ee987babf834bae617d75a9c6b9347bba1a494df"
sourceUrl: "https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/docs/content/docs/2.components/carousel.md"
---
## Usage

Use the Carousel component to display a list of items in a carousel.

```vue [CarouselExample.vue]
<script setup lang="ts">
const items = [
  'https://picsum.photos/640/640?random=1',
  'https://picsum.photos/640/640?random=2',
  'https://picsum.photos/640/640?random=3',
  'https://picsum.photos/640/640?random=4',
  'https://picsum.photos/640/640?random=5',
  'https://picsum.photos/640/640?random=6'
]
</script>

<template>
  <PCarousel
    v-slot="{ item }"
    loop
    arrows
    :autoplay="{ delay: 2000 }"
    wheel-gestures
    :prev="{ variant: 'solid' }"
    :next="{ variant: 'solid' }"
    :items="items"
    :ui="{
      item: 'basis-1/3 ps-0',
      prev: 'sm:start-8',
      next: 'sm:end-8',
      container: 'ms-0'
    }"
  >
    <img :src="item" width="320" height="320">
  </PCarousel>
</template>
```

> [!NOTE]
> 
> Use your mouse to drag the carousel horizontally on desktop.

### Items

Use the `items` prop as an array and render each item using the default slot:

```vue [CarouselItemsExample.vue]
<script setup lang="ts">
const items = [
  'https://picsum.photos/640/640?random=1',
  'https://picsum.photos/640/640?random=2',
  'https://picsum.photos/640/640?random=3',
  'https://picsum.photos/640/640?random=4',
  'https://picsum.photos/640/640?random=5',
  'https://picsum.photos/640/640?random=6'
]
</script>

<template>
  <PCarousel v-slot="{ item }" :items="items" class="w-full max-w-xs mx-auto">
    <img :src="item" width="320" height="320" class="rounded-lg" loading="lazy">
  </PCarousel>
</template>
```

You can also pass an array of objects with the following properties:

- `class?: any`
- `ui?: { item?: ClassNameValue }`

You can control how many items are visible by using the [`basis`](https://unocss.dev/docs/flex-basis) / [`width`](https://unocss.dev/docs/width) utility classes on the `item`:

```vue [CarouselItemsMultipleExample.vue]
<script setup lang="ts">
const items = [
  'https://picsum.photos/468/468?random=1',
  'https://picsum.photos/468/468?random=2',
  'https://picsum.photos/468/468?random=3',
  'https://picsum.photos/468/468?random=4',
  'https://picsum.photos/468/468?random=5',
  'https://picsum.photos/468/468?random=6'
]
</script>

<template>
  <PCarousel v-slot="{ item }" :items="items" :ui="{ item: 'basis-1/3' }">
    <img :src="item" width="234" height="234" class="rounded-lg" loading="lazy">
  </PCarousel>
</template>
```

### Orientation

Use the `orientation` prop to change the orientation of the Progress. Defaults to `horizontal`.

> [!NOTE]
> 
> Use your mouse to drag the carousel vertically on desktop.

```vue [CarouselOrientationExample.vue]
<script setup lang="ts">
const items = [
  'https://picsum.photos/640/640?random=1',
  'https://picsum.photos/640/640?random=2',
  'https://picsum.photos/640/640?random=3',
  'https://picsum.photos/640/640?random=4',
  'https://picsum.photos/640/640?random=5',
  'https://picsum.photos/640/640?random=6'
]
</script>

<template>
  <PCarousel
    v-slot="{ item }"
    orientation="vertical"
    :items="items"
    :ui="{ container: 'h-[336px]' }"
    class="w-full max-w-xs mx-auto"
  >
    <img :src="item" width="320" height="320" class="rounded-lg" loading="lazy">
  </PCarousel>
</template>
```

> [!CAUTION]
> 
> You need to specify a `height` on the container in vertical orientation.

### Arrows

Use the `arrows` prop to display prev and next buttons.

```vue [CarouselArrowsExample.vue]
<script setup lang="ts">
const items = [
  'https://picsum.photos/640/640?random=1',
  'https://picsum.photos/640/640?random=2',
  'https://picsum.photos/640/640?random=3',
  'https://picsum.photos/640/640?random=4',
  'https://picsum.photos/640/640?random=5',
  'https://picsum.photos/640/640?random=6'
]
</script>

<template>
  <PCarousel v-slot="{ item }" arrows :items="items" class="w-full max-w-xs mx-auto">
    <img :src="item" width="320" height="320" class="rounded-lg" loading="lazy">
  </PCarousel>
</template>
```

### Prev / Next

Use the `prev` and `next` props to customize the prev and next buttons with any [Button](/pohon/components/button) props.

```vue [CarouselPrevNextExample.vue]
<script setup lang="ts">
const items = [
  'https://picsum.photos/640/640?random=1',
  'https://picsum.photos/640/640?random=2',
  'https://picsum.photos/640/640?random=3',
  'https://picsum.photos/640/640?random=4',
  'https://picsum.photos/640/640?random=5',
  'https://picsum.photos/640/640?random=6'
]
</script>

<template>
  <PCarousel
    v-slot="{ item }"
    arrows
    :prev="{ color: 'primary' }"
    :next="{ variant: 'solid' }"
    :items="items"
    class="w-full max-w-xs mx-auto"
  >
    <img :src="item" width="320" height="320" class="rounded-lg" loading="lazy">
  </PCarousel>
</template>
```

### Prev / Next Icons

Use the `prev-icon` and `next-icon` props to customize the buttons [Icon](/pohon/components/icon). Defaults to `i-lucide-arrow-left` / `i-lucide-arrow-right`.

```vue [CarouselPrevNextIconExample.vue]
<script setup lang="ts">
defineProps<{
  prevIcon?: string
  nextIcon?: string
}>()

const items = [
  'https://picsum.photos/640/640?random=1',
  'https://picsum.photos/640/640?random=2',
  'https://picsum.photos/640/640?random=3',
  'https://picsum.photos/640/640?random=4',
  'https://picsum.photos/640/640?random=5',
  'https://picsum.photos/640/640?random=6'
]
</script>

<template>
  <PCarousel
    v-slot="{ item }"
    arrows
    :prev-icon="prevIcon"
    :next-icon="nextIcon"
    :items="items"
    class="w-full max-w-xs mx-auto"
  >
    <img :src="item" width="320" height="320" class="rounded-lg" loading="lazy">
  </PCarousel>
</template>
```

**Nuxt:**

> [!TIP]
> See: /docs/getting-started/integrations/icons/nuxt#theme
> 
> You can customize these icons globally in your `app.config.ts` under `ui.icons.arrowLeft` / `ui.icons.arrowRight` key.

**Vue:**

> [!TIP]
> See: /docs/getting-started/integrations/icons/vue#theme
> 
> You can customize these icons globally in your `vite.config.ts` under `ui.icons.arrowLeft` / `ui.icons.arrowRight` key.

### Dots

Use the `dots` prop to display a list of dots to scroll to a specific slide.

```vue [CarouselDotsExample.vue]
<script setup lang="ts">
const items = [
  'https://picsum.photos/640/640?random=1',
  'https://picsum.photos/640/640?random=2',
  'https://picsum.photos/640/640?random=3',
  'https://picsum.photos/640/640?random=4',
  'https://picsum.photos/640/640?random=5',
  'https://picsum.photos/640/640?random=6'
]
</script>

<template>
  <PCarousel v-slot="{ item }" dots :items="items" class="w-full max-w-xs mx-auto">
    <img :src="item" width="320" height="320" class="rounded-lg" loading="lazy">
  </PCarousel>
</template>
```

The number of dots is based on the number of slides displayed in the view:

```vue [CarouselDotsMultipleExample.vue]
<script setup lang="ts">
const items = [
  'https://picsum.photos/640/640?random=1',
  'https://picsum.photos/640/640?random=2',
  'https://picsum.photos/640/640?random=3',
  'https://picsum.photos/640/640?random=4',
  'https://picsum.photos/640/640?random=5',
  'https://picsum.photos/640/640?random=6'
]
</script>

<template>
  <PCarousel v-slot="{ item }" dots :items="items" :ui="{ item: 'basis-1/3' }">
    <img :src="item" width="320" height="320" class="rounded-lg" loading="lazy">
  </PCarousel>
</template>
```

## Plugins

The Carousel component implements the official [Embla Carousel plugins](https://www.embla-carousel.com/docs/v8/plugins).

### Autoplay

This plugin is used to extend Embla Carousel with **autoplay** functionality.

Use the `autoplay` prop as a boolean or an object to configure the [Autoplay plugin](https://www.embla-carousel.com/docs/v8/plugins/autoplay).

```vue [CarouselAutoplayExample.vue]
<script setup lang="ts">
const items = [
  'https://picsum.photos/468/468?random=1',
  'https://picsum.photos/468/468?random=2',
  'https://picsum.photos/468/468?random=3',
  'https://picsum.photos/468/468?random=4',
  'https://picsum.photos/468/468?random=5',
  'https://picsum.photos/468/468?random=6'
]
</script>

<template>
  <PCarousel
    v-slot="{ item }"
    loop
    arrows
    dots
    :autoplay="{ delay: 2000 }"
    :items="items"
    :ui="{ item: 'basis-1/3' }"
  >
    <img :src="item" width="234" height="234" class="rounded-lg" loading="lazy">
  </PCarousel>
</template>
```

> [!NOTE]
> 
> In this example, we're using the `loop` prop for an infinite carousel.

### Auto Scroll

This plugin is used to extend Embla Carousel with **auto scroll** functionality.

Use the `auto-scroll` prop as a boolean or an object to configure the [Auto Scroll plugin](https://www.embla-carousel.com/docs/v8/plugins/auto-scroll).

```vue [CarouselAutoScrollExample.vue]
<script setup lang="ts">
const items = [
  'https://picsum.photos/468/468?random=1',
  'https://picsum.photos/468/468?random=2',
  'https://picsum.photos/468/468?random=3',
  'https://picsum.photos/468/468?random=4',
  'https://picsum.photos/468/468?random=5',
  'https://picsum.photos/468/468?random=6'
]
</script>

<template>
  <PCarousel
    v-slot="{ item }"
    loop
    dots
    arrows
    auto-scroll
    :items="items"
    :ui="{ item: 'basis-1/3' }"
  >
    <img :src="item" width="234" height="234" class="rounded-lg" loading="lazy">
  </PCarousel>
</template>
```

> [!NOTE]
> 
> In this example, we're using the `loop` prop for an infinite carousel.

### Auto Height

This plugin is used to extend Embla Carousel with **auto height** functionality. It changes the height of the carousel container to fit the height of the highest slide in view.

Use the `auto-height` prop as a boolean or an object to configure the [Auto Height plugin](https://www.embla-carousel.com/docs/v8/plugins/auto-height).

```vue [CarouselAutoHeightExample.vue]
<script setup lang="ts">
const items = [
  'https://picsum.photos/640/640?random=1',
  'https://picsum.photos/640/320?random=2',
  'https://picsum.photos/640/640?random=3',
  'https://picsum.photos/640/320?random=4',
  'https://picsum.photos/640/640?random=5',
  'https://picsum.photos/640/320?random=6'
]
</script>

<template>
  <PCarousel
    v-slot="{ item }"
    auto-height
    arrows
    dots
    :items="items"
    :ui="{
      container: 'transition-[height]',
      controls: 'absolute -top-8 inset-x-12',
      dots: '-top-7',
      dot: 'w-6 h-1'
    }"
    class="w-full max-w-xs mx-auto"
  >
    <img :src="item" width="320" height="320" class="rounded-lg" loading="lazy">
  </PCarousel>
</template>
```

> [!NOTE]
> 
> In this example, we add the `transition-[height]` class on the container to animate the height change.

### Class Names

Class Names is a **class name toggle** utility plugin for Embla Carousel that enables you to automate the toggling of class names on your carousel.

Use the `class-names` prop as a boolean or an object to configure the [Class Names plugin](https://www.embla-carousel.com/docs/v8/plugins/class-names).

```vue [CarouselClassNamesExample.vue]
<script setup lang="ts">
const items = [
  'https://picsum.photos/528/528?random=1',
  'https://picsum.photos/528/528?random=2',
  'https://picsum.photos/528/528?random=3',
  'https://picsum.photos/528/528?random=4',
  'https://picsum.photos/528/528?random=5',
  'https://picsum.photos/528/528?random=6'
]
</script>

<template>
  <PCarousel
    v-slot="{ item }"
    class-names
    arrows
    :items="items"
    :ui="{
      item: 'basis-[70%] transition-opacity [&:not(.is-snapped)]:opacity-10'
    }"
    class="mx-auto max-w-sm"
  >
    <img :src="item" width="264" height="264" class="rounded-lg" loading="lazy">
  </PCarousel>
</template>
```

> [!NOTE]
> 
> In this example, we add the `transition-opacity [&:not(.is-snapped)]:opacity-10` classes on the `item` to animate the opacity change.

### Fade

This plugin is used to replace the Embla Carousel scroll functionality with **fade transitions**.

Use the `fade` prop as a boolean or an object to configure the [Fade plugin](https://www.embla-carousel.com/docs/v8/plugins/fade).

```vue [CarouselFadeExample.vue]
<script setup lang="ts">
const items = [
  'https://picsum.photos/640/640?random=1',
  'https://picsum.photos/640/640?random=2',
  'https://picsum.photos/640/640?random=3',
  'https://picsum.photos/640/640?random=4',
  'https://picsum.photos/640/640?random=5',
  'https://picsum.photos/640/640?random=6'
]
</script>

<template>
  <PCarousel
    v-slot="{ item }"
    fade
    arrows
    dots
    :items="items"
    class="w-full max-w-xs mx-auto"
  >
    <img :src="item" width="320" height="320" class="rounded-lg" loading="lazy">
  </PCarousel>
</template>
```

### Wheel Gestures

This plugin is used to extend Embla Carousel with the ability to **use the mouse/trackpad wheel** to navigate the carousel.

Use the `wheel-gestures` prop as a boolean or an object to configure the [Wheel Gestures plugin](https://www.embla-carousel.com/docs/v8/plugins/wheel-gestures).

> [!NOTE]
> 
> Use your mouse wheel to scroll the carousel.

```vue [CarouselWheelGesturesExample.vue]
<script setup lang="ts">
const items = [
  'https://picsum.photos/468/468?random=1',
  'https://picsum.photos/468/468?random=2',
  'https://picsum.photos/468/468?random=3',
  'https://picsum.photos/468/468?random=4',
  'https://picsum.photos/468/468?random=5',
  'https://picsum.photos/468/468?random=6'
]
</script>

<template>
  <PCarousel
    v-slot="{ item }"
    loop
    wheel-gestures
    :items="items"
    :ui="{ item: 'basis-1/3' }"
  >
    <img :src="item" width="234" height="234" class="rounded-lg" loading="lazy">
  </PCarousel>
</template>
```

## Examples

### With thumbnails

You can use the [`scrollTo`](https://www.embla-carousel.com/docs/v8/api/methods#scrollto) method on [`emblaApi`](#expose) to display thumbnails under the carousel that navigate to a specific slide.

```vue [CarouselThumbnailsExample.vue]
<script setup lang="ts">
const items = [
  'https://picsum.photos/640/640?random=1',
  'https://picsum.photos/640/640?random=2',
  'https://picsum.photos/640/640?random=3',
  'https://picsum.photos/640/640?random=4',
  'https://picsum.photos/640/640?random=5',
  'https://picsum.photos/640/640?random=6'
]

const carousel = useTemplateRef('carousel')
const activeIndex = ref(0)

function onClickPrev() {
  activeIndex.value--
}
function onClickNext() {
  activeIndex.value++
}
function onSelect(index: number) {
  activeIndex.value = index
}

function select(index: number) {
  activeIndex.value = index

  carousel.value?.emblaApi?.scrollTo(index)
}
</script>

<template>
  <div class="flex-1 w-full">
    <PCarousel
      ref="carousel"
      v-slot="{ item }"
      arrows
      :items="items"
      :prev="{ onClick: onClickPrev }"
      :next="{ onClick: onClickNext }"
      class="w-full max-w-xs mx-auto"
      @select="onSelect"
    >
      <img :src="item" width="320" height="320" class="rounded-lg" loading="lazy">
    </PCarousel>

    <div class="flex gap-1 justify-between pt-4 max-w-xs mx-auto">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="size-11 opacity-25 hover:opacity-100 transition-opacity"
        :class="{ 'opacity-100': activeIndex === index }"
        @click="select(index)"
      >
        <img :src="item" width="44" height="44" class="rounded-lg" loading="lazy">
      </div>
    </div>
  </div>
</template>
```

## API

### Props

### Slots

### Emits

No events available for this component.

### Expose

You can access the typed component instance using [`useTemplateRef`](https://vuejs.org/api/composition-api-helpers.html#usetemplateref).

```vue
<script setup lang="ts">
const carousel = useTemplateRef('carousel')
</script>

<template>
  <PCarousel ref="carousel" />
</template>
```

This will give you access to the following:

| Name | Type |
| --- | --- |
| `emblaRef` | `Ref<HTMLElement \| null>` |
| `emblaApi` | [`Ref<EmblaCarouselType \| null>`](https://www.embla-carousel.com/docs/v8/api/methods#typescript) |

## Theme

```ts [app.config.ts]
export default defineAppConfig({
  ui: {
    carousel: {
      slots: {
        root: 'relative focus:outline-none',
        viewport: 'overflow-hidden',
        container: 'flex items-start',
        item: 'min-w-0 shrink-0 basis-full',
        controls: '',
        arrows: '',
        prev: 'absolute rounded-full',
        next: 'absolute rounded-full',
        dots: 'absolute inset-x-0 -bottom-7 flex flex-wrap items-center justify-center gap-3',
        dot: [
          'cursor-pointer size-3 bg-background-accented rounded-full outline-outline-inverted/25 focus-visible:outline-3',
          'transition'
        ]
      },
      variants: {
        orientation: {
          vertical: {
            container: 'flex-col -mt-4',
            item: 'pt-4',
            prev: 'top-4 sm:-top-12 left-1/2 -translate-x-1/2 rotate-90 rtl:-rotate-90',
            next: 'bottom-4 sm:-bottom-12 left-1/2 -translate-x-1/2 rotate-90 rtl:-rotate-90'
          },
          horizontal: {
            container: 'flex-row -ms-4',
            item: 'ps-4',
            prev: 'start-4 sm:-start-12 top-1/2 -translate-y-1/2',
            next: 'end-4 sm:-end-12 top-1/2 -translate-y-1/2'
          }
        },
        active: {
          true: {
            dot: 'data-[state=active]:bg-background-inverted'
          }
        }
      }
    }
  }
})
```

## Changelog

See commit history for [component](https://github.com/vinicunca/pohon/commits/main/src/runtime/components/Carousel.vue) and [theme](https://github.com/vinicunca/pohon/commits/main/src/theme/carousel.ts).

---

- [Embla](https://www.embla-carousel.com/docs/v8/api)
- [GitHub](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/Carousel.vue)


## Sitemap

See the full [sitemap](https://pohon.vinicunca.dev/sitemap.md) for all pages.

## Generated component API

[Carousel source](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/Carousel.vue)

### Props

- **as** — `any; optional`: The element or component this component should render as.
- **prev** — `Omit<ButtonProps, LinkPropsKeys> | undefined; optional`: Configure the prev button when arrows are enabled.
- **prevIcon** — `any; optional`: The icon displayed in the prev button.
- **next** — `Omit<ButtonProps, LinkPropsKeys> | undefined; optional`: Configure the next button when arrows are enabled.
- **nextIcon** — `any; optional`: The icon displayed in the next button.
- **arrows** — `boolean | undefined; optional; default: false`: Display prev and next buttons to scroll the carousel.
- **dots** — `boolean | undefined; optional; default: false`: Display dots to scroll to a specific slide.
- **orientation** — `"vertical" | "horizontal" | undefined; optional; default: "horizontal"`: The orientation of the carousel.
- **items** — `T[] | undefined; optional`
- **autoplay** — `boolean | Partial<CreateOptionsType<OptionsType>> | undefined; optional; default: false`: Enable Autoplay plugin
- **autoScroll** — `boolean | Partial<CreateOptionsType<OptionsType>> | undefined; optional; default: false`: Enable Auto Scroll plugin
- **autoHeight** — `boolean | Partial<CreateOptionsType<{ active: boolean; breakpoints: { [key: string]: Omit<Partial<any>, "breakpoints">; }; }>> | undefined; optional; default: false`: Enable Auto Height plugin
- **classNames** — `boolean | Partial<CreateOptionsType<OptionsType>> | undefined; optional; default: false`: Enable Class Names plugin
- **fade** — `boolean | Partial<CreateOptionsType<{ active: boolean; breakpoints: { [key: string]: Omit<Partial<any>, "breakpoints">; }; }>> | undefined; optional; default: false`: Enable Fade plugin
- **wheelGestures** — `boolean | WheelGesturesPluginOptions | undefined; optional; default: false`: Enable Wheel Gestures plugin
- **ui** — `{ root?: SlotClass; viewport?: SlotClass; container?: SlotClass; item?: SlotClass; controls?: SlotClass; arrows?: SlotClass; prev?: SlotClass; next?: SlotClass; dots?: SlotClass; dot?: SlotClass; } | undefined; optional`
- **active** — `boolean | undefined; optional; default: true`
- **align** — `AlignmentOptionType | undefined; optional; default: "center"`
- **containScroll** — `ScrollContainOptionType | undefined; optional; default: "trimSnaps"`
- **slidesToScroll** — `SlidesToScrollOptionType | undefined; optional; default: 1`
- **dragFree** — `boolean | undefined; optional; default: false`
- **dragThreshold** — `number | undefined; optional; default: 10`
- **inViewThreshold** — `number | number[] | undefined; optional; default: 0`
- **loop** — `boolean | undefined; optional; default: false`
- **skipSnaps** — `boolean | undefined; optional; default: false`
- **duration** — `number | undefined; optional; default: 25`
- **startIndex** — `number | undefined; optional; default: 0`
- **watchDrag** — `DragHandlerOptionType | undefined; optional; default: true`
- **watchResize** — `ResizeHandlerOptionType | undefined; optional; default: true`
- **watchSlides** — `SlidesHandlerOptionType | undefined; optional; default: true`
- **watchFocus** — `FocusHandlerOptionType | undefined; optional; default: true`
- **breakpoints** — `{ [key: string]: Omit<Partial<CreateOptionsType<{ align: AlignmentOptionType; axis: AxisOptionType; container: string | HTMLElement | null; slides: string | HTMLElement[] | NodeListOf<HTMLElement> | null; containScroll: ScrollContainOptionType; direction: AxisDirectionOptionType; slidesToScroll: SlidesToScrollOptionType; dragFree: boolean; dragThreshold: number; inViewThreshold: number | number[] | undefined; loop: boolean; skipSnaps: boolean; duration: number; startIndex: number; watchDrag: DragHandlerOptionType; watchResize: ResizeHandlerOptionType; watchSlides: SlidesHandlerOptionType; watchFocus: FocusHandlerOptionType; }>>, "breakpoints">; } | undefined; optional; default: {}`

### Slots

- **default** — `{ item: T; index: number; }`

### Events

- **select** — `[selectedIndex: number]`
