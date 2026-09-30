---
title: "Popover"
description: "A non-modal dialog that floats around a trigger element."
package: pohon
sourceTag: "v2.0.1"
sourceCommit: "ee987babf834bae617d75a9c6b9347bba1a494df"
sourceUrl: "https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/docs/content/docs/2.components/popover.md"
---
## Usage

Use a [Button](/pohon/components/button) or any other component in the default slot of the Popover.

Then, use the `#content` slot to add the content displayed when the Popover is open.

```vue
<template>
  <UPopover>
    <PButton label="Open" color="neutral" variant="subtle" />
  
    <template #content>
      <Placeholder class="size-48 m-4 inline-flex" />
    </template></UPopover>
</template>
```

### Mode

Use the `mode` prop to change the mode of the Popover. Defaults to `click`.

> [!TIP]
> 
> In `hover` mode, set the `enable-touch` prop to let users toggle the Popover by tapping the trigger on touch devices, or use the `click` mode for triggers meant to be tapped.

```vue
<template>
  <UPopover mode="hover" enable-touch>
    <PButton label="Open" color="neutral" variant="subtle" />
  
    <template #content>
      <Placeholder class="size-48 m-4 inline-flex" />
    </template></UPopover>
</template>
```

> [!NOTE]
> 
> When using the `hover` mode, the Akar [`HoverCard`](/akar/components/hover-card) component is used instead of the [`Popover`](/akar/components/popover).

### Delay

When using the `hover` mode, you can use the `open-delay` and `close-delay` props to control the delay before the Popover is opened or closed.

```vue
<template>
  <UPopover mode="hover" :open-delay="500" :close-delay="300">
    <PButton label="Open" color="neutral" variant="subtle" />
  
    <template #content>
      <Placeholder class="size-48 m-4 inline-flex" />
    </template></UPopover>
</template>
```

### Content

Use the `content` prop to control how the Popover content is rendered, like its `align` or `side` for example.

```vue
<template>
  <UPopover :content="{
  align: 'center',
  side: 'bottom',
  sideOffset: 8
}">
    <PButton label="Open" color="neutral" variant="subtle" />
  
    <template #content>
      <Placeholder class="size-48 m-4 inline-flex" />
    </template></UPopover>
</template>
```

### Arrow

Use the `arrow` prop to display an arrow on the Popover.

```vue
<template>
  <UPopover arrow>
    <PButton label="Open" color="neutral" variant="subtle" />
  
    <template #content>
      <Placeholder class="size-48 m-4 inline-flex" />
    </template></UPopover>
</template>
```

### Modal

Use the `modal` prop to control whether the Popover blocks interaction with outside content. Defaults to `false`.

```vue
<template>
  <UPopover modal>
    <PButton label="Open" color="neutral" variant="subtle" />
  
    <template #content>
      <Placeholder class="size-48 m-4 inline-flex" />
    </template></UPopover>
</template>
```

### Dismissible

Use the `dismissible` prop to control whether the Popover is dismissible when clicking outside of it or pressing escape. Defaults to `true`.

> [!NOTE]
> 
> A `close:prevent` event will be emitted when the user tries to close it.

```vue [PopoverDismissibleExample.vue]
<template>
  <PPopover :dismissible="false" :ui="{ content: 'p-4' }">
    <PButton label="Open" color="neutral" variant="subtle" />

    <template #content="{ close }">
      <div class="flex items-center gap-4 mb-4">
        <h2 class="color-text-highlighted font-semibold">
          Popover non-dismissible
        </h2>

        <PButton color="neutral" variant="ghost" icon="i-lucide-x" @click="close" />
      </div>

      <Placeholder class="size-full min-h-48" />
    </template>
  </PPopover>
</template>
```

## Examples

### Control open state

You can control the open state by using the `default-open` prop or the `v-model:open` directive.

```vue [PopoverOpenExample.vue]
<script setup lang="ts">
const open = ref(false)

defineShortcuts({
  o: () => open.value = !open.value
})
</script>

<template>
  <PPopover v-model:open="open">
    <PButton label="Open" color="neutral" variant="subtle" />

    <template #content>
      <Placeholder class="size-48 m-4 inline-flex" />
    </template>
  </PPopover>
</template>
```

> [!NOTE]
> 
> In this example, leveraging [`defineShortcuts`](/pohon/composables/define-shortcuts), you can toggle the Popover by pressing `O`.

### With command palette

You can use a [CommandPalette](/pohon/components/command-palette) component inside the Popover's content.

```vue [PopoverCommandPaletteExample.vue]
<script setup lang="ts">
import type { CommandPaletteItem } from 'pohon-ui'

const items = ref([
  {
    label: 'bug',
    value: 'bug',
    chip: {
      color: 'error'
    }
  },
  {
    label: 'feature',
    value: 'feature',
    chip: {
      color: 'success'
    }
  },
  {
    label: 'enhancement',
    value: 'enhancement',
    chip: {
      color: 'info'
    }
  }
] satisfies CommandPaletteItem[])

const label = ref([])
</script>

<template>
  <PPopover :content="{ side: 'right', align: 'start' }">
    <PButton
      icon="i-lucide-tag"
      label="Select labels"
      color="neutral"
      variant="subtle"
    />

    <template #content>
      <PCommandPalette
        v-model="label"
        multiple
        placeholder="Search labels..."
        :groups="[{ id: 'labels', items }]"
        :ui="{ input: '[&>input]:h-8 [&>input]:text-sm' }"
      />
    </template>
  </PPopover>
</template>
```

### With following cursor

You can make the Popover follow the cursor when hovering over an element using the [`reference`](/akar/components/tooltip#trigger) prop:

```vue [PopoverCursorExample.vue]
<script setup lang="ts">
const open = ref(false)
const anchor = ref({ x: 0, y: 0 })

const reference = computed(() => ({
  getBoundingClientRect: () =>
    ({
      width: 0,
      height: 0,
      left: anchor.value.x,
      right: anchor.value.x,
      top: anchor.value.y,
      bottom: anchor.value.y,
      ...anchor.value
    } as DOMRect)
}))
</script>

<template>
  <PPopover
    :open="open"
    :reference="reference"
    :content="{ side: 'top', sideOffset: 16, updatePositionStrategy: 'always' }"
  >
    <div
      class="flex items-center justify-center rounded-md border border-dashed border-border-accented text-sm aspect-video w-72"
      @pointerenter="open = true"
      @pointerleave="open = false"
      @pointermove="(ev: PointerEvent) => {
        anchor.x = ev.clientX
        anchor.y = ev.clientY
      }"
    >
      Hover me
    </div>

    <template #content>
      <div class="p-4">
        {{ anchor.x.toFixed(0) }} - {{ anchor.y.toFixed(0) }}
      </div>
    </template>
  </PPopover>
</template>
```

### With anchor slot

You can use the `#anchor` slot to position the Popover against a custom element.

> [!WARNING]
> 
> This slot only works when `mode` is `click`.

```vue [PopoverAnchorSlotExample.vue]
<script lang="ts" setup>
const open = ref(false)
</script>

<template>
  <PPopover
    v-model:open="open"
    :dismissible="false"
    :ui="{ content: 'w-(--akar-popover-trigger-width) p-4' }"
  >
    <template #anchor>
      <PInput placeholder="Focus to open" @focus="open = true" @blur="open = false" />
    </template>

    <template #content>
      <Placeholder class="w-full aspect-square" />
    </template>
  </PPopover>
</template>
```

## API

### Props

### Slots

> [!NOTE]
> 
> The `close` function is only available when `mode` is set to `click` because Akar exposes this for [`Popover`](/akar/components/popover#close-using-slot-props) but not for [`HoverCard`](/akar/components/hover-card).

### Emits

No events available for this component.

## Theme

```ts [app.config.ts]
export default defineAppConfig({
  ui: {
    popover: {
      slots: {
        content: 'bg-background shadow-lg rounded-md ring ring-ring data-[state=open]:animate-[scale-in_100ms_ease-out] data-[state=closed]:animate-[scale-out_100ms_ease-in] origin-(--akar-popover-content-transform-origin) focus:outline-none pointer-events-auto',
        arrow: 'fill-bg stroke-default'
      }
    }
  }
})
```

## Changelog

See commit history for [component](https://github.com/vinicunca/pohon/commits/main/src/runtime/components/Popover.vue) and [theme](https://github.com/vinicunca/pohon/commits/main/src/theme/popover.ts).

---

- [HoverCard](/akar/components/hover-card)
- [Popover](/akar/components/popover)
- [GitHub](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/Popover.vue)


## Sitemap

See the full [sitemap](https://pohon.vinicunca.dev/sitemap.md) for all pages.

## Generated component API

[Popover source](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/Popover.vue)

### Props

- **mode** — `M | undefined; optional; default: "click" as never`: The display mode of the popover.
- **content** — `(Omit<PopoverContentProps, "as" | "asChild" | "forceMount"> & Partial<EmitsToProps<PopoverContentImplEmits>>) | undefined; optional`: The content of the popover.
- **arrow** — `boolean | Omit<PopoverArrowProps, "as" | "asChild"> | undefined; optional`: Display an arrow alongside the popover. \`{ rounded: true }\`{lang="ts-type"}
- **portal** — `string | boolean | HTMLElement | undefined; optional; default: true`: Render the popover in a portal.
- **reference** — `ReferenceElement | undefined; optional`: The reference (or anchor) element that is being referred to for positioning.  Accepts an element or a virtual element (anything with \`getBoundingClientRect\`), and can be changed reactively to re-anchor the popover (e.g. for a guided tour). If not provided will use the current component as anchor.
- **dismissible** — `boolean | undefined; optional; default: true`: When \`false\`, the popover will not close when clicking outside or pressing escape.
- **ui** — `{ content?: SlotClass; arrow?: SlotClass; } | undefined; optional`
- **defaultOpen** — `boolean | undefined; optional`: The open state of the popover when it is initially rendered. Use when you do not need to control its open state.
- **open** — `boolean | undefined; optional`: The controlled open state of the popover.
- **modal** — `boolean | undefined; optional`: The modality of the popover. When set to true, interaction with outside elements will be disabled and only popover content will be visible to screen readers.
- **openDelay** — `number | undefined; optional; default: 0`: The duration from when the mouse enters the trigger until the hover card opens.
- **closeDelay** — `number | undefined; optional; default: 0`: The duration from when the mouse leaves the trigger or content until the hover card closes.
- **enableTouch** — `boolean | undefined; optional`: When \`true\`, tapping the trigger on touch devices toggles the hover card open/closed. By default touch interactions are ignored to match pointer hover semantics.

### Slots

- **default** — `{ open: boolean; }`
- **content** — `SlotProps<M>`
- **anchor** — `SlotProps<M>`

### Events

- **update:open** — `[value: boolean]`
- **close:prevent** — `[]`
