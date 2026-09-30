---
title: "PinInput"
description: "Akar PinInput components, props, slots, and events."
package: akar
sourceTag: "v2.0.20"
sourceCommit: "1c7a9cb424cb223b73bb75816fc5f0706f618963"
sourceUrl: "https://github.com/vinicunca/akar/tree/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/PinInput"
---

## PinInputInput

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/PinInput/PinInputInput.vue)

### Props

- **index** — `number; required`: Position of the value this input binds to.
- **disabled** — `boolean | undefined; optional`: When \`true\`, prevents the user from interacting with the pin input
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional; default: "input"`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
## PinInputRoot

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/PinInput/PinInputRoot.vue)

### Props

- **modelValue** — `PinInputValue<Type> | null | undefined; optional`: The controlled checked state of the pin input. Can be binded as \`v-model\`.
- **defaultValue** — `PinInputValue<Type> | undefined; optional`: The default value of the pin inputs when it is initially rendered. Use when you do not need to control its checked state.
- **placeholder** — `string | undefined; optional; default: ""`: The placeholder character to use for empty pin-inputs.
- **mask** — `boolean | undefined; optional`: When \`true\`, pin inputs will be treated as password.
- **otp** — `boolean | undefined; optional`: When \`true\`, mobile devices will autodetect the OTP from messages or clipboard, and enable the autocomplete field.
- **type** — `Type | undefined; optional; default: "text" as any`: Input type for the inputs.
- **dir** — `Direction | undefined; optional`: The reading direction of the combobox when applicable. <br> If omitted, inherits globally from \`ConfigProvider\` or assumes LTR (left-to-right) reading mode.
- **disabled** — `boolean | undefined; optional`: When \`true\`, prevents the user from interacting with the pin input
- **id** — `string | undefined; optional`: Id of the element
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional`: The element or component this component should render as. Can be overwritten by \`asChild\`.
- **name** — `string | undefined; optional`: The name of the field. Submitted with its owning form as part of a name/value pair.
- **required** — `boolean | undefined; optional`: When \`true\`, indicates that the user must set the value before the owning form can be submitted.

### Slots

- **default** — `{ modelValue: PinInputValue<Type>; }`

### Events

- **update:modelValue** — `[value: PinInputValue<Type>]`
- **complete** — `[value: PinInputValue<Type>]`
