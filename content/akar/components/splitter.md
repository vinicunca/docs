---
title: "Splitter"
description: "Akar Splitter components, props, slots, and events."
package: akar
sourceTag: "v2.0.20"
sourceCommit: "1c7a9cb424cb223b73bb75816fc5f0706f618963"
sourceUrl: "https://github.com/vinicunca/akar/tree/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Splitter"
---

## SplitterGroup

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Splitter/SplitterGroup.vue)

### Props

- **id** — `string | null | undefined; optional`: Group id; falls back to \`useId\` when not provided.
- **autoSaveId** — `string | null | undefined; optional; default: null`: Unique id used to auto-save group arrangement via \`localStorage\`.
- **direction** — `Direction; required`: The group orientation of splitter.
- **keyboardResizeBy** — `number | null | undefined; optional; default: 10`: Step size when arrow key was pressed.
- **storage** — `PanelGroupStorage | undefined; optional; default: defaultStorage`: Custom storage API; defaults to localStorage
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{ layout: number[]; }`

### Events

- **layout** — `[val: number[]]`
## SplitterPanel

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Splitter/SplitterPanel.vue)

### Props

- **collapsedSize** — `number | undefined; optional`: The size of panel when it is collapsed; interpreted using \`sizeUnit\`.
- **collapsible** — `boolean | undefined; optional`: Should panel collapse when resized beyond its \`minSize\`. When \`true\`, it will be collapsed to \`collapsedSize\`.
- **defaultSize** — `number | undefined; optional`: Initial size of panel, interpreted using \`sizeUnit\` (percent by default).
- **id** — `string | undefined; optional`: Panel id (unique within group); falls back to \`useId\` when not provided
- **maxSize** — `number | undefined; optional`: The maximum allowable size of panel, interpreted using \`sizeUnit\`; defaults to \`100\` (percent).
- **minSize** — `number | undefined; optional`: The minimum allowable size of panel, interpreted using \`sizeUnit\`; defaults to \`10\` (percent).
- **order** — `number | undefined; optional`: The order of panel within group; required for groups with conditionally rendered panels
- **sizeUnit** — `"%" | "px" | undefined; optional`: Unit used for sizing values; \`%\` by default, or \`px\` for fixed sizing.
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{ isCollapsed: boolean; isExpanded: boolean; collapse: () => void; expand: () => void; resize: (size: number) => void; }`

### Events

- **resize** — `[size: number, prevSize: number | undefined]`
- **collapse** — `[]`
- **expand** — `[]`
## SplitterResizeHandle

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Splitter/SplitterResizeHandle.vue)

### Props

- **id** — `string | undefined; optional`: Resize handle id (unique within group); falls back to \`useId\` when not provided
- **hitAreaMargins** — `PointerHitAreaMargins | undefined; optional`: Allow this much margin when determining resizable handle hit detection
- **tabindex** — `number | undefined; optional; default: 0`: Tabindex for the handle
- **disabled** — `boolean | undefined; optional`: Disable drag handle
- **nonce** — `string | undefined; optional`: Will add \`nonce\` attribute to the style tag which can be used by Content Security Policy. <br> If omitted, inherits globally from \`ConfigProvider\`.
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

- **dragging** — `[isDragging: boolean]`
