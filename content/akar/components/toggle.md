---
title: "Toggle"
description: "Akar Toggle components, props, slots, and events."
package: akar
sourceTag: "v2.0.20"
sourceCommit: "1c7a9cb424cb223b73bb75816fc5f0706f618963"
sourceUrl: "https://github.com/vinicunca/akar/tree/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Toggle"
---

## Toggle

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Toggle/Toggle.vue)

### Props

- **defaultValue** — `boolean | undefined; optional`: The pressed state of the toggle when it is initially rendered. Use when you do not need to control its open state.
- **modelValue** — `boolean | null | undefined; optional; default: undefined`: The controlled pressed state of the toggle. Can be bind as \`v-model\`.
- **disabled** — `boolean | undefined; optional; default: false`: When \`true\`, prevents the user from interacting with the toggle.
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional; default: "button"`: The element or component this component should render as. Can be overwritten by \`asChild\`.
- **name** — `string | undefined; optional`: The name of the field. Submitted with its owning form as part of a name/value pair.
- **required** — `boolean | undefined; optional`: When \`true\`, indicates that the user must set the value before the owning form can be submitted.

### Slots

- **default** — `{ modelValue: boolean; state: DataState; pressed: boolean; disabled: boolean; }`

### Events

- **update:modelValue** — `[value: boolean]`
