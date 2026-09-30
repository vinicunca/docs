---
title: "ColorField"
description: "Akar ColorField components, props, slots, and events."
package: akar
sourceTag: "v2.0.20"
sourceCommit: "1c7a9cb424cb223b73bb75816fc5f0706f618963"
sourceUrl: "https://github.com/vinicunca/akar/tree/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/ColorField"
---

## ColorFieldInput

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/ColorField/ColorFieldInput.vue)

### Props

- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional; default: "input"`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
## ColorFieldRoot

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/ColorField/ColorFieldRoot.vue)

### Props

- **modelValue** — `string | Color | undefined; optional`: The color value (controlled). Can be a hex string or Color object.
- **defaultValue** — `string | Color | undefined; optional; default: "#000000"`: The default color value (uncontrolled).
- **colorSpace** — `ColorSpace | undefined; optional; default: "hsl"`: The color space to operate in when displaying a channel.
- **channel** — `ColorChannel | undefined; optional`: The color channel to display. If not provided, displays hex value.
- **placeholder** — `string | undefined; optional`: Placeholder text when the field is empty.
- **disabled** — `boolean | undefined; optional; default: false`: When \`true\`, prevents the user from interacting with the field.
- **readonly** — `boolean | undefined; optional; default: false`: When \`true\`, the field is read-only.
- **disableWheelChange** — `boolean | undefined; optional; default: false`: When \`true\`, prevents the value from changing on wheel scroll.
- **locale** — `string | undefined; optional`: The locale to use for number formatting.
- **step** — `number | undefined; optional`: Custom step value for increment/decrement. Defaults to channel step or 1 for hex.
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional; default: "div"`: The element or component this component should render as. Can be overwritten by \`asChild\`.
- **name** — `string | undefined; optional`: The name of the field. Submitted with its owning form as part of a name/value pair.
- **required** — `boolean | undefined; optional`: When \`true\`, indicates that the user must set the value before the owning form can be submitted.

### Slots

- **default** — `{}`

### Events

- **update:modelValue** — `[value: string]`
- **update:color** — `[value: Color]`
