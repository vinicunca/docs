---
title: "RadioGroup"
description: "Akar RadioGroup components, props, slots, and events."
package: akar
sourceTag: "v2.0.20"
sourceCommit: "1c7a9cb424cb223b73bb75816fc5f0706f618963"
sourceUrl: "https://github.com/vinicunca/akar/tree/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/RadioGroup"
---

## RadioGroupIndicator

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/RadioGroup/RadioGroupIndicator.vue)

### Props

- **forceMount** — `boolean | undefined; optional`: Used to force mounting when more control is needed. Useful when controlling animation with Vue animation libraries.
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional; default: "span"`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
## RadioGroupItem

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/RadioGroup/RadioGroupItem.vue)

### Props

- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional; default: "button"`: The element or component this component should render as. Can be overwritten by \`asChild\`.
- **disabled** — `boolean | undefined; optional; default: false`: When \`true\`, prevents the user from interacting with the radio item.
- **value** — `AcceptableValue | undefined; optional`: The value given as data when submitted with a \`name\`.
- **required** — `boolean | undefined; optional`: When \`true\`, indicates that the user must set the value before the owning form can be submitted.
- **name** — `string | undefined; optional`: The name of the field. Submitted with its owning form as part of a name/value pair.
- **id** — `string | undefined; optional`

### Slots

- **default** — `{ checked: boolean; required: boolean; disabled: boolean; }`

### Events

- **select** — `[event: SelectEvent]`
## RadioGroupRoot

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/RadioGroup/RadioGroupRoot.vue)

### Props

- **modelValue** — `AcceptableValue | undefined; optional`: The controlled value of the radio item to check. Can be binded as \`v-model\`.
- **defaultValue** — `AcceptableValue | undefined; optional`: The value of the radio item that should be checked when initially rendered.  Use when you do not need to control the state of the radio items.
- **disabled** — `boolean | undefined; optional; default: false`: When \`true\`, prevents the user from interacting with radio items.
- **orientation** — `DataOrientation | undefined; optional; default: undefined`: The orientation of the component.
- **dir** — `Direction | undefined; optional`: The reading direction of the combobox when applicable. <br> If omitted, inherits globally from \`ConfigProvider\` or assumes LTR (left-to-right) reading mode.
- **loop** — `boolean | undefined; optional; default: true`: When \`true\`, keyboard navigation will loop from last item to first, and vice versa.
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional`: The element or component this component should render as. Can be overwritten by \`asChild\`.
- **name** — `string | undefined; optional`: The name of the field. Submitted with its owning form as part of a name/value pair.
- **required** — `boolean | undefined; optional; default: false`: When \`true\`, indicates that the user must set the value before the owning form can be submitted.

### Slots

- **default** — `{ modelValue: AcceptableValue | undefined; }`

### Events

- **update:modelValue** — `[payload: AcceptableValue]`
