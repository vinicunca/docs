---
title: "ColorSlider"
description: "Akar ColorSlider components, props, slots, and events."
package: akar
sourceTag: "v2.0.20"
sourceCommit: "1c7a9cb424cb223b73bb75816fc5f0706f618963"
sourceUrl: "https://github.com/vinicunca/akar/tree/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/ColorSlider"
---

## ColorSliderRoot

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/ColorSlider/ColorSliderRoot.vue)

### Props

- **modelValue** — `string | Color | undefined; optional`: The color value (controlled). Can be a hex string or Color object.
- **defaultValue** — `string | Color | undefined; optional; default: "#000000"`: The default color value (uncontrolled).
- **colorSpace** — `ColorSpace | undefined; optional; default: "hsl"`: The color space to operate in.
- **channel** — `ColorChannel; required`: The color channel that this slider manipulates.
- **orientation** — `DataOrientation | undefined; optional; default: "horizontal"`: The orientation of the slider.
- **dir** — `Direction | undefined; optional`: The reading direction of the slider.
- **inverted** — `boolean | undefined; optional; default: false`: Whether the slider is visually inverted.
- **disabled** — `boolean | undefined; optional; default: false`: When \`true\`, prevents the user from interacting with the slider.
- **step** — `number | undefined; optional`: Custom step value for increment/decrement. Defaults to the channel's natural step.
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional; default: "span"`: The element or component this component should render as. Can be overwritten by \`asChild\`.
- **name** — `string | undefined; optional`: The name of the field. Submitted with its owning form as part of a name/value pair.
- **required** — `boolean | undefined; optional`: When \`true\`, indicates that the user must set the value before the owning form can be submitted.

### Slots

- **default** — `{}`

### Events

- **update:modelValue** — `[value: string | Color]`
- **change** — `[value: string]`
- **update:color** — `[value: Color]`
- **changeEnd** — `[value: string]`
## ColorSliderThumb

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/ColorSlider/ColorSliderThumb.vue)

### Props

- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional; default: "span"`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{ channelName: string; channelValue: number; }`

### Events

No events are declared.
## ColorSliderTrack

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/ColorSlider/ColorSliderTrack.vue)

### Props

- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional; default: "span"`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
