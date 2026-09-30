---
title: "Stepper"
description: "Akar Stepper components, props, slots, and events."
package: akar
sourceTag: "v2.0.20"
sourceCommit: "1c7a9cb424cb223b73bb75816fc5f0706f618963"
sourceUrl: "https://github.com/vinicunca/akar/tree/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Stepper"
---

## StepperDescription

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Stepper/StepperDescription.vue)

### Props

- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional; default: "p"`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
## StepperIndicator

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Stepper/StepperIndicator.vue)

### Props

- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional; default: "span"`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{ step: number; }`

### Events

No events are declared.
## StepperItem

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Stepper/StepperItem.vue)

### Props

- **step** — `number; required`: A unique value that associates the stepper item with an index
- **disabled** — `boolean | undefined; optional; default: false`: When \`true\`, prevents the user from interacting with the step.
- **completed** — `boolean | undefined; optional; default: false`: Shows whether the step is completed.
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{ state: StepperState; }`

### Events

No events are declared.
## StepperRoot

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Stepper/StepperRoot.vue)

### Props

- **defaultValue** — `number | undefined; optional; default: 1`: The value of the step that should be active when initially rendered. Use when you do not need to control the state of the steps.
- **orientation** — `DataOrientation | undefined; optional; default: "horizontal"`: The orientation the steps are laid out. Mainly so arrow navigation is done accordingly (left & right vs. up & down).
- **dir** — `Direction | undefined; optional`: The reading direction of the combobox when applicable. <br> If omitted, inherits globally from \`ConfigProvider\` or assumes LTR (left-to-right) reading mode.
- **modelValue** — `number | undefined; optional`: The controlled value of the step to activate. Can be bound as \`v-model\`.
- **linear** — `boolean | undefined; optional; default: true`: Whether or not the steps must be completed in order.
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{ modelValue: number | undefined; totalSteps: number; isNextDisabled: boolean; isPrevDisabled: boolean; isFirstStep: boolean; isLastStep: boolean; goToStep: (step: number) => void; nextStep: () => void; prevStep: () => void; hasNext: () => boolean; hasPrev: () => boolean; }`

### Events

- **update:modelValue** — `[payload: number | undefined]`
## StepperSeparator

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Stepper/StepperSeparator.vue)

### Props

- **orientation** — `DataOrientation | undefined; optional`: Orientation of the component.  Either \`vertical\` or \`horizontal\`. Defaults to \`horizontal\`.
- **decorative** — `boolean | undefined; optional`: Whether or not the component is purely decorative. <br>When \`true\`, accessibility-related attributes are updated so that that the rendered element is removed from the accessibility tree.
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
## StepperTitle

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Stepper/StepperTitle.vue)

### Props

- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional; default: "h4"`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
## StepperTrigger

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Stepper/StepperTrigger.vue)

### Props

- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional; default: "button"`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
