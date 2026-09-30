---
title: "Progress"
description: "Akar Progress components, props, slots, and events."
package: akar
sourceTag: "v2.0.20"
sourceCommit: "1c7a9cb424cb223b73bb75816fc5f0706f618963"
sourceUrl: "https://github.com/vinicunca/akar/tree/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Progress"
---

## ProgressIndicator

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Progress/ProgressIndicator.vue)

### Props

- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
## ProgressRoot

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Progress/ProgressRoot.vue)

### Props

- **modelValue** — `number | null | undefined; optional`: The progress value. Can be bind as \`v-model\`.
- **max** — `number | undefined; optional; default: DEFAULT_MAX`: The maximum progress value.
- **getValueLabel** — `((value: number | null | undefined, max: number) => string | undefined) | undefined; optional; default: isNumber(value) ? \`${Math.round((value / max) * DEFAULT_MAX)}%\` : undefined`: A function to get the accessible label text in a human-readable format.   If not provided, the value label will be read as the numeric value as a percentage of the max value.
- **getValueText** — `((value: number | null | undefined, max: number) => string | undefined) | undefined; optional`: A function to get the accessible value text representing the current value in a human-readable format.
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{ modelValue: number | null | undefined; }`

### Events

- **update:modelValue** — `[value: string[] | undefined]`
- **update:max** — `[value: number]`
