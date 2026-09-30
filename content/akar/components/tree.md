---
title: "Tree"
description: "Akar Tree components, props, slots, and events."
package: akar
sourceTag: "v2.0.20"
sourceCommit: "1c7a9cb424cb223b73bb75816fc5f0706f618963"
sourceUrl: "https://github.com/vinicunca/akar/tree/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Tree"
---

## TreeItem

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Tree/TreeItem.vue)

### Props

- **value** — `T; required`: Value given to this item
- **level** — `number; required`: Level of depth
- **disabled** — `boolean | undefined; optional`: When \`true\`, prevents the user from interacting with the item.
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional; default: "li"`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{ isExpanded: boolean; isSelected: boolean; isIndeterminate: boolean | undefined; isDisabled: boolean; handleToggle: () => void; handleSelect: () => void; }`

### Events

- **select** — `[event: SelectEvent<T>]`
- **toggle** — `[event: ToggleEvent<T>]`
## TreeRoot

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Tree/TreeRoot.vue)

### Props

- **modelValue** — `(M extends true ? U[] : U) | undefined; optional`: The controlled value of the tree. Can be binded with \`v-model\`.
- **defaultValue** — `(M extends true ? U[] : U) | undefined; optional`: The value of the tree when initially rendered. Use when you do not need to control the state of the tree
- **items** — `T[] | undefined; optional`: List of items
- **expanded** — `string[] | undefined; optional`: The controlled value of the expanded item. Can be binded with \`v-model\`.
- **defaultExpanded** — `string[] | undefined; optional`: The value of the expanded tree when initially rendered. Use when you do not need to control the state of the expanded tree
- **getKey** — `(val: T) => string; required`: This function is passed the index of each item and should return a unique key for that item
- **getChildren** — `((val: T) => T[] | undefined) | undefined; optional; default: val.children`: This function is passed the index of each item and should return a list of children for that item
- **selectionBehavior** — `"replace" | "toggle" | undefined; optional; default: "toggle"`: How multiple selection should behave in the collection.
- **multiple** — `boolean | M | undefined; optional`: Whether multiple options can be selected or not.
- **dir** — `Direction | undefined; optional`: The reading direction of the listbox when applicable. <br> If omitted, inherits globally from \`ConfigProvider\` or assumes LTR (left-to-right) reading mode.
- **disabled** — `boolean | undefined; optional`: When \`true\`, prevents the user from interacting with tree
- **propagateSelect** — `boolean | undefined; optional`: When \`true\`, selecting parent will select the descendants. Requires \`multiple\` to be \`true\`.
- **bubbleSelect** — `boolean | undefined; optional`: When \`true\`, selecting children will update the parent state. Requires \`multiple\` to be \`true\`.
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional; default: "ul"`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{ flattenItems: FlattenedItem<T>[]; modelValue: M extends true ? U[] : U; expanded: string[]; }`

### Events

- **update:modelValue** — `[val: M extends true ? U[] : U]`
- **update:expanded** — `[val: string[]]`
## TreeVirtualizer

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Tree/TreeVirtualizer.vue)

### Props

- **overscan** — `number | undefined; optional`: Number of items rendered outside the visible area
- **estimateSize** — `number | ((index: number) => number) | undefined; optional`: Estimated size (in px) of each item
- **textContent** — `((item: Record<string, any>) => string) | undefined; optional`: Text content for each item to achieve type-ahead feature

### Slots

- **default** — `{ item: FlattenedItem<Record<string, any>>; virtualizer: Virtualizer<Element | Window, Element>; virtualItem: VirtualItem; }`

### Events

No events are declared.
