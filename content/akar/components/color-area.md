---
title: "ColorArea"
description: "Akar ColorArea components, props, slots, and events."
package: akar
sourceTag: "v2.0.20"
sourceCommit: "1c7a9cb424cb223b73bb75816fc5f0706f618963"
sourceUrl: "https://github.com/vinicunca/akar/tree/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/ColorArea"
---

## ColorAreaArea

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/ColorArea/ColorAreaArea.vue)

### Props

- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional; default: "div"`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
## ColorAreaRoot

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/ColorArea/ColorAreaRoot.vue)

### Props

- **modelValue** — `string | Color | undefined; optional`: The color value (controlled). Can be a hex string or Color object.
- **defaultValue** — `string | Color | undefined; optional; default: "#ff0000"`: The default color value (uncontrolled).
- **colorSpace** — `ColorSpace | undefined; optional; default: "hsl"`: The color space to operate in.
- **xChannel** — `ColorChannel | undefined; optional; default: "hue"`: Color channel for the horizontal (x) axis.
- **yChannel** — `ColorChannel | undefined; optional; default: "saturation"`: Color channel for the vertical (y) axis.
- **disabled** — `boolean | undefined; optional; default: false`: When \`true\`, prevents the user from interacting with the area.
- **xName** — `string | undefined; optional`: The name of the x channel input element for form submission.
- **yName** — `string | undefined; optional`: The name of the y channel input element for form submission.
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional; default: "div"`: The element or component this component should render as. Can be overwritten by \`asChild\`.
- **name** — `string | undefined; optional`: The name of the field. Submitted with its owning form as part of a name/value pair.
- **required** — `boolean | undefined; optional`: When \`true\`, indicates that the user must set the value before the owning form can be submitted.

### Slots

- **default** — `{ style: CSSProperties; }`

### Events

- **update:modelValue** — `[value: string]`
- **change** — `[value: string]`
- **update:color** — `[value: Color]`
- **changeEnd** — `[value: string]`
## ColorAreaThumb

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/ColorArea/ColorAreaThumb.vue)

### Props

- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional; default: "span"`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
