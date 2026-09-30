---
title: "Tooltip"
description: "A popup that reveals information when hovering over an element."
package: pohon
sourceTag: "v2.0.1"
sourceCommit: "ee987babf834bae617d75a9c6b9347bba1a494df"
sourceUrl: "https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/docs/content/docs/2.components/tooltip.md"
---
## Usage

Use a [Button](/pohon/components/button) or any other component in the default slot of the Tooltip.

```vue
<template>
  <UTooltip text="Open on GitHub">
    <PButton label="Open" color="neutral" variant="subtle" />
  </UTooltip>
</template>
```

> [!WARNING]
> 
> Make sure to wrap your app with the [`App`](/pohon/components/app) component which uses the [`TooltipProvider`](/akar/components/tooltip#provider) component from Akar.

> [!TIP]
> See: /docs/components/app#props
> 
> You can check the `App` component `tooltip` prop to see how to configure the Tooltip globally.

### Text

Use the `text` prop to set the content of the Tooltip.

```vue
<template>
  <UTooltip text="Open on GitHub">
    <PButton label="Open" color="neutral" variant="subtle" />
  </UTooltip>
</template>
```

### Kbds

Use the `kbds` prop to render [Kbd](/pohon/components/kbd) components in the Tooltip.

```vue
<template>
  <UTooltip text="Open on GitHub" :kbds="[
  'meta',
  'G'
]">
    <PButton label="Open" color="neutral" variant="subtle" />
  </UTooltip>
</template>
```

> [!TIP]
> 
> You can use special keys like `meta` that displays as `⌘` on macOS and `Ctrl` on other platforms.

### Delay

Use the `delay-duration` prop to change the delay before the Tooltip appears. For example, you can make it appear instantly by setting it to `0`.

```vue
<template>
  <UTooltip :delay-duration="0" text="Open on GitHub">
    <PButton label="Open" color="neutral" variant="subtle" />
  </UTooltip>
</template>
```

> [!TIP]
> 
> This can be configured globally through the `tooltip.delayDuration` option in the [`App`](/pohon/components/app) component.

### Content

Use the `content` prop to control how the Tooltip content is rendered, like its `align` or `side` for example.

> [!TIP]
> 
> This can be configured globally through the `tooltip.content` option in the [`App`](/pohon/components/app) component.

```vue
<template>
  <UTooltip :content="{
  align: 'center',
  side: 'bottom',
  sideOffset: 8
}" text="Open on GitHub">
    <PButton label="Open" color="neutral" variant="subtle" />
  </UTooltip>
</template>
```

### Arrow

Use the `arrow` prop to display an arrow on the Tooltip.

```vue
<template>
  <UTooltip arrow text="Open on GitHub">
    <PButton label="Open" color="neutral" variant="subtle" />
  </UTooltip>
</template>
```

### Disabled

Use the `disabled` prop to disable the Tooltip.

```vue
<template>
  <UTooltip disabled text="Open on GitHub">
    <PButton label="Open" color="neutral" variant="subtle" />
  </UTooltip>
</template>
```

## Examples

### Control open state

You can control the open state by using the `default-open` prop or the `v-model:open` directive.

```vue [TooltipOpenExample.vue]
<script setup lang="ts">
const open = ref(false)

defineShortcuts({
  o: () => open.value = !open.value
})
</script>

<template>
  <PTooltip v-model:open="open" text="Open on GitHub">
    <PButton label="Open" color="neutral" variant="subtle" />
  </PTooltip>
</template>
```

> [!NOTE]
> 
> In this example, leveraging [`defineShortcuts`](/pohon/composables/define-shortcuts), you can toggle the Tooltip by pressing `O`.

### With following cursor

You can make the Tooltip follow the cursor when hovering over an element using the [`reference`](/akar/components/tooltip#trigger) prop:

```vue [TooltipCursorExample.vue]
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
  <PTooltip
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
      {{ anchor.x.toFixed(0) }} - {{ anchor.y.toFixed(0) }}
    </template>
  </PTooltip>
</template>
```

## API

### Props

### Slots

### Emits

No events available for this component.

## Theme

```ts [app.config.ts]
export default defineAppConfig({
  ui: {
    tooltip: {
      slots: {
        content: 'flex items-center gap-1 bg-background color-text-highlighted shadow-sm rounded-sm ring ring-ring h-6 px-2.5 py-1 text-xs select-none data-[state=delayed-open]:animate-[scale-in_100ms_ease-out] data-[state=closed]:animate-[scale-out_100ms_ease-in] origin-(--akar-tooltip-content-transform-origin) pointer-events-auto',
        arrow: 'fill-bg stroke-default',
        text: 'truncate',
        kbds: "hidden lg:inline-flex items-center shrink-0 gap-0.5 not-first-of-type:before:content-['·'] not-first-of-type:before:me-0.5",
        kbdsSize: 'sm'
      }
    }
  }
})
```

## Changelog

See commit history for [component](https://github.com/vinicunca/pohon/commits/main/src/runtime/components/Tooltip.vue) and [theme](https://github.com/vinicunca/pohon/commits/main/src/theme/tooltip.ts).

---

- [Tooltip](/akar/components/tooltip)
- [GitHub](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/Tooltip.vue)


## Sitemap

See the full [sitemap](https://pohon.vinicunca.dev/sitemap.md) for all pages.

## Generated component API

[Tooltip source](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/Tooltip.vue)

### Props

- **text** — `string | undefined; optional`: The text content of the tooltip.
- **kbds** — `(string | undefined)[] | KbdProps[] | undefined; optional`: The keyboard keys to display in the tooltip.
- **content** — `(Omit<TooltipContentProps, "as" | "asChild"> & Partial<EmitsToProps<TooltipContentImplEmits>>) | undefined; optional`: The content of the tooltip.  Inherits from the \`tooltip.content\` of the {@link AppProps } component when not provided.
- **arrow** — `boolean | Omit<TooltipArrowProps, "as" | "asChild"> | undefined; optional`: Display an arrow alongside the tooltip. \`{ rounded: true }\`{lang="ts-type"}
- **portal** — `string | boolean | HTMLElement | undefined; optional; default: true`: Render the tooltip in a portal.
- **reference** — `ReferenceElement | undefined; optional`: The reference (or anchor) element that is being referred to for positioning.  If not provided will use the current component as anchor.
- **ui** — `{ content?: SlotClass; arrow?: SlotClass; text?: SlotClass; kbds?: SlotClass; kbdsSize?: SlotClass; } | undefined; optional`
- **defaultOpen** — `boolean | undefined; optional`: The open state of the tooltip when it is initially rendered. Use when you do not need to control its open state.
- **open** — `boolean | undefined; optional`: The controlled open state of the tooltip.
- **delayDuration** — `number | undefined; optional`: Override the duration given to the \`Provider\` to customise the open delay for a specific tooltip.
- **disableHoverableContent** — `boolean | undefined; optional`: Prevents Tooltip.Content from remaining open when hovering. Disabling this has accessibility consequences. Inherits from Tooltip.Provider.
- **disableClosingTrigger** — `boolean | undefined; optional`: When \`true\`, clicking on trigger will not close the content.
- **disabled** — `boolean | undefined; optional`: When \`true\`, disable tooltip
- **ignoreNonKeyboardFocus** — `boolean | undefined; optional`: Prevent the tooltip from opening if the focus did not come from the keyboard by matching against the \`:focus-visible\` selector. This is useful if you want to avoid opening it when switching browser tabs or closing a dialog.

### Slots

- **default** — `{ open: boolean; }`
- **content** — `{ ui: { content: (props?: Record<string, any> | undefined) => string | undefined; arrow: (props?: Record<string, any> | undefined) => string | undefined; text: (props?: Record<string, any> | undefined) => string | undefined; kbds: (props?: Record<string, any> | undefined) => string | undefined; kbdsSize: (props?: Record<string, any> | undefined) => string | undefined; }; }`

### Events

- **update:open** — `[value: boolean]`
