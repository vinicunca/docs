---
title: "Listbox"
description: "Akar Listbox components, props, slots, and events."
package: akar
sourceTag: "v2.0.20"
sourceCommit: "1c7a9cb424cb223b73bb75816fc5f0706f618963"
sourceUrl: "https://github.com/vinicunca/akar/tree/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Listbox"
---

## ListboxContent

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Listbox/ListboxContent.vue)

### Props

- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
## ListboxFilter

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Listbox/ListboxFilter.vue)

### Props

- **modelValue** — `string | undefined; optional`: The controlled value of the filter. Can be binded with v-model.
- **autoFocus** — `boolean | undefined; optional`: Focus on element when mounted.
- **disabled** — `boolean | undefined; optional`: When \`true\`, prevents the user from interacting with item
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional; default: "input"`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{ modelValue: string | undefined; }`

### Events

- **update:modelValue** — `[string]`
## ListboxGroup

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Listbox/ListboxGroup.vue)

### Props

- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
## ListboxGroupLabel

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Listbox/ListboxGroupLabel.vue)

### Props

- **for** — `string | undefined; optional`
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional; default: "div"`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
## ListboxItem

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Listbox/ListboxItem.vue)

### Props

- **value** — `T; required`: The value given as data when submitted with a \`name\`.
- **disabled** — `boolean | undefined; optional`: When \`true\`, prevents the user from interacting with the item.
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional; default: "div"`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{ selected: boolean; }`

### Events

- **select** — `[event: SelectEvent<T>]`
## ListboxItemIndicator

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Listbox/ListboxItemIndicator.vue)

### Props

- **forceMount** — `boolean | undefined; optional`: Used to force mounting when more control is needed. Useful when controlling animation with Vue animation libraries.
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional; default: "span"`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
## ListboxRoot

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Listbox/ListboxRoot.vue)

### Props

- **modelValue** — `AcceptableValue | AcceptableValue[] | undefined; optional`: The controlled value of the listbox. Can be binded with \`v-model\`.
- **defaultValue** — `AcceptableValue | AcceptableValue[] | undefined; optional`: The value of the listbox when initially rendered. Use when you do not need to control the state of the Listbox
- **multiple** — `boolean | undefined; optional`: Whether multiple options can be selected or not.
- **orientation** — `DataOrientation | undefined; optional; default: "vertical"`: The orientation of the listbox. <br>Mainly so arrow navigation is done accordingly (left & right vs. up & down)
- **dir** — `Direction | undefined; optional`: The reading direction of the listbox when applicable. <br> If omitted, inherits globally from \`ConfigProvider\` or assumes LTR (left-to-right) reading mode.
- **disabled** — `boolean | undefined; optional`: When \`true\`, prevents the user from interacting with listbox
- **selectionBehavior** — `"replace" | "toggle" | undefined; optional; default: "toggle"`: How multiple selection should behave in the collection.
- **highlightOnHover** — `boolean | undefined; optional`: When \`true\`, hover over item will trigger highlight
- **by** — `string | ((a: AcceptableValue, b: AcceptableValue) => boolean) | undefined; optional`: Use this to compare objects by a particular field, or pass your own comparison function for complete control over how objects are compared.
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional`: The element or component this component should render as. Can be overwritten by \`asChild\`.
- **name** — `string | undefined; optional`: The name of the field. Submitted with its owning form as part of a name/value pair.
- **required** — `boolean | undefined; optional`: When \`true\`, indicates that the user must set the value before the owning form can be submitted.

### Slots

- **default** — `{ modelValue: T | T[] | undefined; }`

### Events

- **update:modelValue** — `[value: AcceptableValue]`
- **highlight** — `[payload: { ref: HTMLElement; value: AcceptableValue; } | undefined]`
- **entryFocus** — `[event: CustomEvent<any>]`
- **leave** — `[event: Event]`
## ListboxVirtualizer

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Listbox/ListboxVirtualizer.vue)

### Props

- **options** — `T[]; required`: List of items
- **overscan** — `number | undefined; optional`: Number of items rendered outside the visible area
- **estimateSize** — `number | ((index: number) => number) | undefined; optional`: Estimated size (in px) of each item
- **textContent** — `((option: T) => string) | undefined; optional`: Text content for each item to achieve type-ahead feature

### Slots

- **default** — `{ option: T; virtualizer: Virtualizer<HTMLElement, Element>; virtualItem: VirtualItem; }`

### Events

No events are declared.
