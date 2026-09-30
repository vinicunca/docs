---
title: "ScrollArea"
description: "Akar ScrollArea components, props, slots, and events."
package: akar
sourceTag: "v2.0.20"
sourceCommit: "1c7a9cb424cb223b73bb75816fc5f0706f618963"
sourceUrl: "https://github.com/vinicunca/akar/tree/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/ScrollArea"
---

## ScrollAreaCorner

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/ScrollArea/ScrollAreaCorner.vue)

### Props

- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
## ScrollAreaRoot

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/ScrollArea/ScrollAreaRoot.vue)

### Props

- **type** — `ScrollType | undefined; optional; default: "hover"`: Describes the nature of scrollbar visibility, similar to how the scrollbar preferences in MacOS control visibility of native scrollbars.  \`auto\` - means that scrollbars are visible when content is overflowing on the corresponding orientation. <br> \`always\` - means that scrollbars are always visible regardless of whether the content is overflowing.<br> \`scroll\` - means that scrollbars are visible when the user is scrolling along its corresponding orientation.<br> \`hover\` - when the user is scrolling along its corresponding orientation and when the user is hovering over the scroll area.<br> \`glimpse\` - a hybrid approach that briefly shows scrollbars when the user enters the scroll area, then hides them until further interaction.
- **dir** — `Direction | undefined; optional`: The reading direction of the combobox when applicable. <br> If omitted, inherits globally from \`ConfigProvider\` or assumes LTR (left-to-right) reading mode.
- **scrollHideDelay** — `number | undefined; optional; default: 600`: If type is set to either \`scroll\` or \`hover\`, this prop determines the length of time, in milliseconds, <br> before the scrollbars are hidden after the user stops interacting with scrollbars.
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
## ScrollAreaScrollbar

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/ScrollArea/ScrollAreaScrollbar.vue)

### Props

- **orientation** — `"vertical" | "horizontal" | undefined; optional; default: "vertical"`: The orientation of the scrollbar
- **forceMount** — `boolean | undefined; optional`: Used to force mounting when more control is needed. Useful when controlling animation with Vue animation libraries.
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional; default: "div"`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
## ScrollAreaScrollbarGlimpse

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/ScrollArea/ScrollAreaScrollbarGlimpse.vue)

### Props

- **forceMount** — `boolean | undefined; optional`

### Slots

- **default** — `{}`

### Events

No events are declared.
## ScrollAreaThumb

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/ScrollArea/ScrollAreaThumb.vue)

### Props

- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
## ScrollAreaViewport

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/ScrollArea/ScrollAreaViewport.vue)

### Props

- **nonce** — `string | undefined; optional`: Will add \`nonce\` attribute to the style tag which can be used by Content Security Policy. <br> If omitted, inherits globally from \`ConfigProvider\`.
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
