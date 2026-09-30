---
title: "Autocomplete"
description: "Akar Autocomplete components, props, slots, and events."
package: akar
sourceTag: "v2.0.20"
sourceCommit: "1c7a9cb424cb223b73bb75816fc5f0706f618963"
sourceUrl: "https://github.com/vinicunca/akar/tree/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Autocomplete"
---

## AutocompleteInput

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Autocomplete/AutocompleteInput.vue)

### Props

- **modelValue** — `string | undefined; optional`: The controlled value of the filter. Can be binded with v-model.
- **autoFocus** — `boolean | undefined; optional`: Focus on element when mounted.
- **disabled** — `boolean | undefined; optional`: When \`true\`, prevents the user from interacting with item
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional; default: "input"`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

- **update:modelValue** — `[string]`
## AutocompleteRoot

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Autocomplete/AutocompleteRoot.vue)

### Props

- **modelValue** — `string | undefined; optional`: The controlled value of the Autocomplete (the input text). Can be bound with \`v-model\`.
- **defaultValue** — `string | undefined; optional`: The value of the autocomplete when initially rendered. Use when you do not need to control the state.
- **open** — `boolean | undefined; optional; default: undefined`: The controlled open state of the Autocomplete. Can be bound with \`v-model:open\`.
- **defaultOpen** — `boolean | undefined; optional`: The open state of the autocomplete when it is initially rendered. Use when you do not need to control its open state.
- **disabled** — `boolean | undefined; optional`: When \`true\`, prevents the user from interacting with autocomplete
- **dir** — `Direction | undefined; optional`: The reading direction of the autocomplete when applicable.
- **name** — `string | undefined; optional`: The name of the field. Submitted with its owning form as part of a name/value pair.
- **required** — `boolean | undefined; optional`: When \`true\`, indicates that the user must set the value before the owning form can be submitted.
- **resetSearchTermOnBlur** — `boolean | undefined; optional; default: false`: Whether to reset the searchTerm when the Autocomplete input blurred
- **openOnFocus** — `boolean | undefined; optional; default: false`: Whether to open the autocomplete when the input is focused
- **openOnClick** — `boolean | undefined; optional; default: false`: Whether to open the autocomplete when the input is clicked
- **ignoreFilter** — `boolean | undefined; optional`: When \`true\`, disable the default filters
- **highlightOnHover** — `boolean | undefined; optional; default: true`: When \`true\`, hover over item will trigger highlight
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{ open: boolean; modelValue: string; }`

### Events

- **update:modelValue** — `[value: string]`
- **update:open** — `[value: boolean]`
- **highlight** — `[payload: { ref: HTMLElement; value: string; } | undefined]`
