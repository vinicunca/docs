---
title: "Slider"
description: "Akar Slider components, props, slots, and events."
package: akar
sourceTag: "v2.0.20"
sourceCommit: "1c7a9cb424cb223b73bb75816fc5f0706f618963"
sourceUrl: "https://github.com/vinicunca/akar/tree/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Slider"
---

## SliderRange

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Slider/SliderRange.vue)

### Props

- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional; default: "span"`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
## SliderRoot

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Slider/SliderRoot.vue)

### Props

- **defaultValue** — `number[] | undefined; optional; default: [0]`: The value of the slider when initially rendered. Use when you do not need to control the state of the slider.
- **modelValue** — `number[] | null | undefined; optional`: The controlled value of the slider. Can be bind as \`v-model\`.
- **disabled** — `boolean | undefined; optional; default: false`: When \`true\`, prevents the user from interacting with the slider.
- **orientation** — `DataOrientation | undefined; optional; default: "horizontal"`: The orientation of the slider.
- **dir** — `Direction | undefined; optional`: The reading direction of the combobox when applicable. <br> If omitted, inherits globally from \`ConfigProvider\` or assumes LTR (left-to-right) reading mode.
- **inverted** — `boolean | undefined; optional; default: false`: Whether the slider is visually inverted.
- **min** — `number | undefined; optional; default: 0`: The minimum value for the range.
- **max** — `number | undefined; optional; default: 100`: The maximum value for the range.
- **step** — `number | undefined; optional; default: 1`: The stepping interval.
- **minStepsBetweenThumbs** — `number | undefined; optional; default: 0`: The minimum permitted steps between multiple thumbs.
- **thumbAlignment** — `ThumbAlignment | undefined; optional; default: "contain"`: The alignment of the slider thumb. - \`contain\`: thumbs will be contained within the bounds of the track. - \`overflow\`: thumbs will not be bound by the track. No extra offset will be added.
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional; default: "span"`: The element or component this component should render as. Can be overwritten by \`asChild\`.
- **name** — `string | undefined; optional`: The name of the field. Submitted with its owning form as part of a name/value pair.
- **required** — `boolean | undefined; optional`: When \`true\`, indicates that the user must set the value before the owning form can be submitted.

### Slots

- **default** — `{ modelValue: number[] | null; }`

### Events

- **update:modelValue** — `[payload: number[] | undefined]`
- **valueCommit** — `[payload: number[]]`
## SliderThumb

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Slider/SliderThumb.vue)

### Props

- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional; default: "span"`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
## SliderTrack

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Slider/SliderTrack.vue)

### Props

- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional; default: "span"`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
