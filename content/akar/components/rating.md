---
title: "Rating"
description: "Akar Rating components, props, slots, and events."
package: akar
sourceTag: "v2.0.20"
sourceCommit: "1c7a9cb424cb223b73bb75816fc5f0706f618963"
sourceUrl: "https://github.com/vinicunca/akar/tree/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Rating"
---

## RatingItem

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Rating/RatingItem.vue)

### Props

- **item** — `number; required`: The 1-based index of this item within the rating (e.g. the 3rd star).
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional; default: "label"`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{ steps: number[]; }`

### Events

No events are declared.
## RatingItemIndicator

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Rating/RatingItemIndicator.vue)

### Props

- **step** — `number; required`: The step value this indicator represents.
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
## RatingRoot

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Rating/RatingRoot.vue)

### Props

- **defaultValue** — `number | undefined; optional`: The rating value when initially rendered. Use when you do not need to control the state of the rating.
- **modelValue** — `number | undefined; optional`: The controlled rating value. Can be bound with \`v-model\`.
- **length** — `number | undefined; optional; default: 5`: The number of rating items to render.
- **clearable** — `boolean | undefined; optional`: When \`true\`, clicking the currently selected rating resets the value to \`0\`.
- **hoverable** — `boolean | undefined; optional`: When \`true\`, the rating previews the value under the pointer on hover.
- **step** — `1 | 0.5 | 0.25 | 0.1 | undefined; optional; default: 1`: The granularity each rating item is divided into.
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional`: The element or component this component should render as. Can be overwritten by \`asChild\`.
- **disabled** — `boolean | undefined; optional`: When \`true\`, prevents the user from interacting with radio items.
- **required** — `boolean | undefined; optional`: When \`true\`, indicates that the user must set the value before the owning form can be submitted.
- **dir** — `Direction | undefined; optional`: The reading direction of the combobox when applicable. <br> If omitted, inherits globally from \`ConfigProvider\` or assumes LTR (left-to-right) reading mode.
- **orientation** — `DataOrientation | undefined; optional; default: "horizontal"`: The orientation of the component.
- **name** — `string | undefined; optional`: The name of the field. Submitted with its owning form as part of a name/value pair.
- **loop** — `boolean | undefined; optional`: When \`true\`, keyboard navigation will loop from last item to first, and vice versa.

### Slots

- **default** — `{ modelValue: number | undefined; items: number[]; }`

### Events

- **update:modelValue** — `[payload: number]`
