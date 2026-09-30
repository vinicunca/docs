---
title: "NumberField"
description: "Akar NumberField components, props, slots, and events."
package: akar
sourceTag: "v2.0.20"
sourceCommit: "1c7a9cb424cb223b73bb75816fc5f0706f618963"
sourceUrl: "https://github.com/vinicunca/akar/tree/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/NumberField"
---

## NumberFieldDecrement

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/NumberField/NumberFieldDecrement.vue)

### Props

- **disabled** — `boolean | undefined; optional`
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional; default: "button"`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
## NumberFieldIncrement

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/NumberField/NumberFieldIncrement.vue)

### Props

- **disabled** — `boolean | undefined; optional`
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional; default: "button"`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
## NumberFieldInput

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/NumberField/NumberFieldInput.vue)

### Props

- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional; default: "input"`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
## NumberFieldRoot

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/NumberField/NumberFieldRoot.vue)

### Props

- **defaultValue** — `number | undefined; optional; default: undefined`
- **modelValue** — `number | null | undefined; optional`
- **min** — `number | undefined; optional`: The smallest value allowed for the input.
- **max** — `number | undefined; optional`: The largest value allowed for the input.
- **step** — `number | undefined; optional; default: 1`: The amount that the input value changes with each increment or decrement "tick".
- **stepSnapping** — `boolean | undefined; optional; default: true`: When \`false\`, prevents the value from snapping to the nearest increment of the step value
- **focusOnChange** — `boolean | undefined; optional; default: true`: When \`true\`, the input will be focused when the value changes.
- **formatOptions** — `Intl.NumberFormatOptions | undefined; optional`: Formatting options for the value displayed in the number field. This also affects what characters are allowed to be typed by the user.
- **locale** — `string | undefined; optional`: The locale to use for formatting and currencies
- **disabled** — `boolean | undefined; optional`: When \`true\`, prevents the user from interacting with the Number Field.
- **readonly** — `boolean | undefined; optional`: When \`true\`, the Number Field is read-only.
- **disableWheelChange** — `boolean | undefined; optional`: When \`true\`, prevents the value from changing on wheel scroll.
- **invertWheelChange** — `boolean | undefined; optional`: When \`true\`, inverts the direction of the wheel change.
- **id** — `string | undefined; optional`: Id of the element
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional; default: "div"`: The element or component this component should render as. Can be overwritten by \`asChild\`.
- **name** — `string | undefined; optional`: The name of the field. Submitted with its owning form as part of a name/value pair.
- **required** — `boolean | undefined; optional`: When \`true\`, indicates that the user must set the value before the owning form can be submitted.

### Slots

- **default** — `{ modelValue: number | undefined; textValue: string; readonly: boolean; }`

### Events

- **update:modelValue** — `[val: number]`
