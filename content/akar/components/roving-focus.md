---
title: "RovingFocus"
description: "Akar RovingFocus components, props, slots, and events."
package: akar
sourceTag: "v2.0.20"
sourceCommit: "1c7a9cb424cb223b73bb75816fc5f0706f618963"
sourceUrl: "https://github.com/vinicunca/akar/tree/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/RovingFocus"
---

## RovingFocusGroup

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/RovingFocus/RovingFocusGroup.vue)

### Props

- **orientation** — `Orientation | undefined; optional; default: undefined`: The orientation of the group. Mainly so arrow navigation is done accordingly (left & right vs. up & down)
- **dir** — `Direction | undefined; optional`: The direction of navigation between items.
- **loop** — `boolean | undefined; optional; default: false`: Whether keyboard navigation should loop around
- **currentTabStopId** — `string | null | undefined; optional`: The controlled value of the current stop item. Can be binded as \`v-model\`.
- **defaultCurrentTabStopId** — `string | undefined; optional`: The value of the current stop item.  Use when you do not need to control the state of the stop item.
- **preventScrollOnEntryFocus** — `boolean | undefined; optional; default: false`: When \`true\`, will prevent scrolling to the focus item when focused.
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

- **entryFocus** — `[event: Event]`
- **update:currentTabStopId** — `[value: string | null | undefined]`
## RovingFocusItem

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/RovingFocus/RovingFocusItem.vue)

### Props

- **tabStopId** — `string | undefined; optional`
- **focusable** — `boolean | undefined; optional; default: true`: When \`false\`, item will not be focusable.
- **active** — `boolean | undefined; optional`: When \`true\`, item will be initially focused.
- **allowShiftKey** — `boolean | undefined; optional`: When \`true\`, shift + arrow key will allow focusing on next/previous item.
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional; default: "span"`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
