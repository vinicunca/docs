---
title: "ColorSwatchPicker"
description: "Akar ColorSwatchPicker components, props, slots, and events."
package: akar
sourceTag: "v2.0.20"
sourceCommit: "1c7a9cb424cb223b73bb75816fc5f0706f618963"
sourceUrl: "https://github.com/vinicunca/akar/tree/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/ColorSwatchPicker"
---

## ColorSwatchPickerItem

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/ColorSwatchPicker/ColorSwatchPickerItem.vue)

### Props

- **value** — `string; required`: The color to display in the swatch as a hex string. Example: \`#16a372\` or \`#ff5733\`.
- **disabled** — `boolean | undefined; optional`: When \`true\`, prevents the user from interacting with the item.
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{ selected: boolean; }`

### Events

- **select** — `[event: SelectEvent<AcceptableValue>]`
## ColorSwatchPickerItemIndicator

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/ColorSwatchPicker/ColorSwatchPickerItemIndicator.vue)

### Props

- **forceMount** — `boolean | undefined; optional`: Used to force mounting when more control is needed. Useful when controlling animation with Vue animation libraries.
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
## ColorSwatchPickerItemSwatch

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/ColorSwatchPicker/ColorSwatchPickerItemSwatch.vue)

### Props

- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional`: The element or component this component should render as. Can be overwritten by \`asChild\`.
- **label** — `string | undefined; optional`: Optional accessible label for the color. If omitted, the color name will be derived from the color value.

### Slots

No slots are declared.

### Events

No events are declared.
## ColorSwatchPickerRoot

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/ColorSwatchPicker/ColorSwatchPickerRoot.vue)

### Props

- **defaultValue** — `string | string[] | undefined; optional; default: undefined`: The value of the listbox when initially rendered. Use when you do not need to control the state of the Listbox
- **modelValue** — `string | string[] | undefined; optional`: The controlled value of the listbox. Can be binded with \`v-model\`.
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional; default: "div"`: The element or component this component should render as. Can be overwritten by \`asChild\`.
- **disabled** — `boolean | undefined; optional; default: false`: When \`true\`, prevents the user from interacting with listbox
- **required** — `boolean | undefined; optional`: When \`true\`, indicates that the user must set the value before the owning form can be submitted.
- **multiple** — `boolean | undefined; optional`: Whether multiple options can be selected or not.
- **dir** — `Direction | undefined; optional; default: "ltr"`: The reading direction of the listbox when applicable. <br> If omitted, inherits globally from \`ConfigProvider\` or assumes LTR (left-to-right) reading mode.
- **orientation** — `DataOrientation | undefined; optional; default: "horizontal"`: The orientation of the listbox. <br>Mainly so arrow navigation is done accordingly (left & right vs. up & down)
- **name** — `string | undefined; optional`: The name of the field. Submitted with its owning form as part of a name/value pair.
- **highlightOnHover** — `boolean | undefined; optional`: When \`true\`, hover over item will trigger highlight
- **selectionBehavior** — `"replace" | "toggle" | undefined; optional`: How multiple selection should behave in the collection.

### Slots

- **default** — `{ modelValue: string | string[] | undefined; }`

### Events

- **update:modelValue** — `[value: AcceptableValue]`
- **highlight** — `[payload: { ref: HTMLElement; value: AcceptableValue; } | undefined]`
- **entryFocus** — `[event: CustomEvent<any>]`
- **leave** — `[event: Event]`
