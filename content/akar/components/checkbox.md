---
title: "Checkbox"
description: "Akar Checkbox components, props, slots, and events."
package: akar
sourceTag: "v2.0.20"
sourceCommit: "1c7a9cb424cb223b73bb75816fc5f0706f618963"
sourceUrl: "https://github.com/vinicunca/akar/tree/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Checkbox"
---

## CheckboxGroupRoot

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Checkbox/CheckboxGroupRoot.vue)

### Props

- **defaultValue** — `T[] | undefined; optional`: The value of the checkbox when it is initially rendered. Use when you do not need to control its value.
- **modelValue** — `T[] | undefined; optional`: The controlled value of the checkbox. Can be binded with v-model.
- **rovingFocus** — `boolean | undefined; optional; default: true`: When \`false\`, navigating through the items using arrow keys will be disabled.
- **disabled** — `boolean | undefined; optional`: When \`true\`, prevents the user from interacting with the checkboxes
- **max** — `number | null | undefined; optional`: The maximum number of values that can be selected. Once reached, the unchecked checkboxes get \`aria-disabled\` but stay focusable, so consider telling users about the limit. Style them with \`[aria-disabled="true"]\`.
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional`: The element or component this component should render as. Can be overwritten by \`asChild\`.
- **dir** — `Direction | undefined; optional`: The direction of navigation between items.
- **orientation** — `Orientation | undefined; optional`: The orientation of the group. Mainly so arrow navigation is done accordingly (left & right vs. up & down)
- **loop** — `boolean | undefined; optional`: Whether keyboard navigation should loop around
- **name** — `string | undefined; optional`: The name of the field. Submitted with its owning form as part of a name/value pair.
- **required** — `boolean | undefined; optional`: When \`true\`, indicates that the user must set the value before the owning form can be submitted.

### Slots

- **default** — `{}`

### Events

- **update:modelValue** — `[value: T[]]`
## CheckboxIndicator

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Checkbox/CheckboxIndicator.vue)

### Props

- **forceMount** — `boolean | undefined; optional`: Used to force mounting when more control is needed. Useful when controlling animation with Vue animation libraries.
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional; default: "span"`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
## CheckboxRoot

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Checkbox/CheckboxRoot.vue)

### Props

- **defaultValue** — `T | "indeterminate" | undefined; optional`: The value of the checkbox when it is initially rendered. Use when you do not need to control its value.
- **modelValue** — `T | "indeterminate" | null | undefined; optional; default: undefined`: The controlled value of the checkbox. Can be binded with v-model.
- **disabled** — `boolean | undefined; optional`: When \`true\`, prevents the user from interacting with the checkbox
- **value** — `AcceptableValue | undefined; optional; default: "on"`: The value given as data when submitted with a \`name\`.
- **id** — `string | undefined; optional`: Id of the element
- **trueValue** — `T | undefined; optional; default: (() => true) as unknown as undefined`: The value used when the checkbox is checked. Defaults to \`true\`.
- **falseValue** — `T | undefined; optional; default: (() => false) as unknown as undefined`: The value used when the checkbox is unchecked. Defaults to \`false\`.
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional; default: "button"`: The element or component this component should render as. Can be overwritten by \`asChild\`.
- **name** — `string | undefined; optional`: The name of the field. Submitted with its owning form as part of a name/value pair.
- **required** — `boolean | undefined; optional`: When \`true\`, indicates that the user must set the value before the owning form can be submitted.

### Slots

- **default** — `{ modelValue: T | "indeterminate"; state: CheckedState; }`

### Events

- **update:modelValue** — `[value: T | "indeterminate"]`
