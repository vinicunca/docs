---
title: "Switch"
description: "Akar Switch components, props, slots, and events."
package: akar
sourceTag: "v2.0.20"
sourceCommit: "1c7a9cb424cb223b73bb75816fc5f0706f618963"
sourceUrl: "https://github.com/vinicunca/akar/tree/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Switch"
---

## SwitchRoot

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Switch/SwitchRoot.vue)

### Props

- **defaultValue** — `T | undefined; optional`: The state of the switch when it is initially rendered. Use when you do not need to control its state.
- **modelValue** — `T | null | undefined; optional; default: undefined`: The controlled state of the switch. Can be bind as \`v-model\`.
- **disabled** — `boolean | undefined; optional`: When \`true\`, prevents the user from interacting with the switch.
- **id** — `string | undefined; optional`
- **value** — `string | undefined; optional; default: "on"`: The value given as data when submitted with a \`name\`.
- **trueValue** — `T | undefined; optional; default: (() => true) as unknown as undefined`: The value used when the switch is on. Defaults to \`true\`.
- **falseValue** — `T | undefined; optional; default: (() => false) as unknown as undefined`: The value used when the switch is off. Defaults to \`false\`.
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional; default: "button"`: The element or component this component should render as. Can be overwritten by \`asChild\`.
- **name** — `string | undefined; optional`: The name of the field. Submitted with its owning form as part of a name/value pair.
- **required** — `boolean | undefined; optional`: When \`true\`, indicates that the user must set the value before the owning form can be submitted.

### Slots

- **default** — `{ modelValue: T; checked: boolean; }`

### Events

- **update:modelValue** — `[payload: T]`
## SwitchThumb

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Switch/SwitchThumb.vue)

### Props

- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional; default: "span"`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
