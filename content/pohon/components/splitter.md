---
title: "Splitter"
description: "A set of resizable panels separated by draggable handles."
package: pohon
sourceTag: "v2.0.1"
sourceCommit: "ee987babf834bae617d75a9c6b9347bba1a494df"
sourceUrl: "https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/docs/content/docs/2.components/splitter.md"
---
## Usage

Use the Splitter component to display a list of resizable panels separated by draggable handles.

```vue [SplitterExample.vue]
<script setup lang="ts">
import type { SplitterItem } from 'pohon-ui'

const card = 'bg-background-elevated/50 border border-border rounded-xl items-center justify-center color-text-muted font-medium'

const items: SplitterItem[] = [
  { slot: 'left', minSize: 15, defaultSize: 25, class: card },
  { slot: 'main', minSize: 30, defaultSize: 50, class: card },
  { slot: 'right', minSize: 15, defaultSize: 25, class: card }
]
</script>

<template>
  <div class="w-full h-96">
    <PSplitter id="splitter-example" :items="items">
      <template #left>
        Left
      </template>

      <template #main>
        Main
      </template>

      <template #right>
        Right
      </template>
    </PSplitter>
  </div>
</template>
```

> [!NOTE]
> 
> The Splitter fills the height of its container, so make sure a parent element defines one.

### Items

Use the `items` prop as an array of objects with the following properties:

- `defaultSize?: number`
- `minSize?: number`
- `maxSize?: number`
- `collapsible?: boolean`
- `collapsedSize?: number`
- `sizeUnit?: '%' | 'px'`
- `order?: number`
- `id?: string`
- `slot?: string`
- `class?: any`
- `ui?: { panel?: ClassNameValue }`

Use the `slot` key to fill the content of a panel and the `class` key to style it. Items without a `slot` key fall back to a `panel-{index}` slot. Sizes are percentages by default, set `sizeUnit: 'px'` on an item for pixel values.

> [!CAUTION]
> 
> When rendering on the server, set the `id` prop and give `defaultSize` to all items or to none. Ids are generated automatically otherwise and the server and the client can disagree, which breaks the layout on hydration. An item without a `defaultSize` falls back to an equal share on the server, so mixing the two makes panels jump once hydrated. Pixel sizes are measured on the client and always shift a little.

```vue
<script setup lang="ts">
import type { SplitterItem } from 'pohon-ui'

const items = ref<SplitterItem[]>([
  {
    slot: "sidebar",
    minSize: 15,
    maxSize: 40,
    defaultSize: 25,
    class: "bg-background-elevated/50 border border-border rounded-xl items-center justify-center color-text-muted font-medium"
  },
  {
    slot: "main",
    defaultSize: 75,
    class: "bg-background-elevated/50 border border-border rounded-xl items-center justify-center color-text-muted font-medium"
  }
])
</script>

<template>
  <USplitter id="splitter-items" :items="items">
    <template #sidebar>
      Sidebar
    </template>
    <template #main>
      Main
    </template></USplitter>
</template>
```

### Orientation

Use the `orientation` prop to change the direction of the splitter. Defaults to `horizontal`.

```vue
<script setup lang="ts">
import type { SplitterItem } from 'pohon-ui'

const items = ref<SplitterItem[]>([
  {
    slot: "first",
    class: "bg-background-elevated/50 border border-border rounded-xl items-center justify-center color-text-muted font-medium"
  },
  {
    slot: "second",
    class: "bg-background-elevated/50 border border-border rounded-xl items-center justify-center color-text-muted font-medium"
  }
])
</script>

<template>
  <USplitter id="splitter-orientation" orientation="vertical" :items="items">
    <template #first>
      First
    </template>
    <template #second>
      Second
    </template></USplitter>
</template>
```

## Examples

### With collapsible panel

Set `collapsible: true` on an item to let it collapse past its `minSize`, and use `collapsedSize` to keep part of the panel visible when collapsed. The panel slot exposes `collapsed`, `collapse` and `expand` so you can control it programmatically, and the `collapse`, `expand` and `resize` events fire with the panel index.

```vue [SplitterCollapsibleExample.vue]
<script setup lang="ts">
import type { SplitterItem } from 'pohon-ui'

const items: SplitterItem[] = [
  { slot: 'sidebar', sizeUnit: 'px', minSize: 150, defaultSize: 250, collapsible: true, collapsedSize: 48, class: 'bg-background-elevated/50 border border-border rounded-xl' },
  { slot: 'main', class: 'bg-background-elevated/50 border border-border rounded-xl items-center justify-center color-text-muted font-medium' }
]
</script>

<template>
  <div class="w-full h-96">
    <PSplitter id="splitter-collapsible-example" :items="items">
      <template #sidebar="{ collapsed, collapse, expand }">
        <div class="flex-1 flex items-center justify-center p-2">
          <PButton
            :icon="collapsed ? 'i-lucide-panel-left-open' : 'i-lucide-panel-left-close'"
            :label="collapsed ? undefined : 'Collapse'"
            :aria-label="collapsed ? 'Expand' : undefined"
            color="neutral"
            variant="subtle"
            @click="collapsed ? expand() : collapse()"
          />
        </div>
      </template>

      <template #main>
        Main
      </template>
    </PSplitter>
  </div>
</template>
```

### With nested splitters

Nest a `Splitter` inside a panel to build two-dimensional, IDE-style layouts.

```vue [SplitterNestedExample.vue]
<script setup lang="ts">
import type { SplitterItem } from 'pohon-ui'

const card = 'bg-background-elevated/50 border border-border rounded-xl items-center justify-center color-text-muted font-medium'

const items: SplitterItem[] = [
  { slot: 'left', minSize: 20, class: card },
  { slot: 'right', minSize: 20 }
]

const nested: SplitterItem[] = [
  { slot: 'top', minSize: 20, class: card },
  { slot: 'bottom', minSize: 20, class: card }
]
</script>

<template>
  <div class="w-full h-96">
    <PSplitter id="splitter-nested-example" :items="items">
      <template #left>
        Left
      </template>

      <template #right>
        <PSplitter id="splitter-nested-example-inner" orientation="vertical" :items="nested">
          <template #top>
            Top
          </template>

          <template #bottom>
            Bottom
          </template>
        </PSplitter>
      </template>
    </PSplitter>
  </div>
</template>
```

### With custom handle

The handle is invisible by default. Use the `ui` prop to restyle it, for example as a visible divider for flush layouts, and the `resize-handle` slot to render content inside it like a grip.

```vue [SplitterCustomHandleExample.vue]
<script setup lang="ts">
import type { SplitterItem } from 'pohon-ui'

const items: SplitterItem[] = [
  { slot: 'left', minSize: 20, defaultSize: 30, class: 'items-center justify-center color-text-muted font-medium' },
  { slot: 'right', defaultSize: 70, class: 'items-center justify-center color-text-muted font-medium' }
]
</script>

<template>
  <div class="w-full h-96">
    <PSplitter id="splitter-custom-handle-example" :items="items" :ui="{ handle: 'data-[orientation=horizontal]:w-px data-[orientation=vertical]:h-px bg-border transition-colors data-[state=hover]:bg-primary data-[state=drag]:bg-primary' }" class="rounded-lg border border-border overflow-hidden">
      <template #left>
        Left
      </template>

      <template #right>
        Right
      </template>
    </PSplitter>
  </div>
</template>
```

### With persistence

Provide an `auto-save-id` to persist the layout to `localStorage` and restore it on reload.

```vue
<template>
  <PSplitter id="my-layout" auto-save-id="my-layout" :items="items">
    <!-- ... -->
  </PSplitter>
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
    splitter: {
      slots: {
        root: '',
        panel: 'flex',
        handle: 'group relative shrink-0 focus-visible:outline-2 focus-visible:outline-primary data-[panel-resize-handle-enabled=false]:cursor-default'
      },
      variants: {
        orientation: {
          horizontal: {
            handle: 'w-2 cursor-col-resize'
          },
          vertical: {
            handle: 'h-2 cursor-row-resize'
          }
        }
      }
    }
  }
})
```

## Changelog

See commit history for [component](https://github.com/vinicunca/pohon/commits/main/src/runtime/components/Splitter.vue) and [theme](https://github.com/vinicunca/pohon/commits/main/src/theme/splitter.ts).

---

- [Splitter](/akar/components/splitter)
- [GitHub](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/Splitter.vue)


## Sitemap

See the full [sitemap](https://pohon.vinicunca.dev/sitemap.md) for all pages.

## Generated component API

[Splitter source](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/Splitter.vue)

### Props

- **as** — `any; optional`: The element or component this component should render as.
- **id** — `string | undefined; optional`: A unique id for the group, also used to derive the ids of its panels and handles. Set it when rendering on the server, auto-generated ids can differ between the server and the client and break resizing on hydration.
- **orientation** — `"vertical" | "horizontal" | undefined; optional; default: "horizontal"`: The orientation of the splitter.
- **items** — `T[] | undefined; optional`
- **disabled** — `boolean | undefined; optional`: Whether the resize handles are disabled, locking the current layout.
- **ui** — `{ root?: SlotClass; panel?: SlotClass; handle?: SlotClass; } | undefined; optional`
- **storage** — `PanelGroupStorage | undefined; optional`: Custom storage API; defaults to localStorage
- **autoSaveId** — `string | null | undefined; optional`: Unique id used to auto-save group arrangement via \`localStorage\`.
- **keyboardResizeBy** — `number | null | undefined; optional`: Step size when arrow key was pressed.
- **hitAreaMargins** — `PointerHitAreaMargins | undefined; optional`: Allow this much margin when determining resizable handle hit detection

### Slots

- **resize-handle** — `{ index: number; ui: { root: (props?: Record<string, any> | undefined) => string | undefined; panel: (props?: Record<string, any> | undefined) => string | undefined; handle: (props?: Record<string, any> | undefined) => string | undefined; }; }`

### Events

- **layout** — `[val: number[]]`
- **collapse** — `[index: number]`
- **expand** — `[index: number]`
- **dragging** — `[index: number, dragging: boolean]`
- **resize** — `[index: number, size: number, prevSize?: number | undefined]`
