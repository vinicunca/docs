---
title: "Editable"
description: "Akar Editable components, props, slots, and events."
package: akar
sourceTag: "v2.0.20"
sourceCommit: "1c7a9cb424cb223b73bb75816fc5f0706f618963"
sourceUrl: "https://github.com/vinicunca/akar/tree/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Editable"
---

## EditableArea

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Editable/EditableArea.vue)

### Props

- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional; default: "div"`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
## EditableCancelTrigger

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Editable/EditableCancelTrigger.vue)

### Props

- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional; default: "button"`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
## EditableEditTrigger

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Editable/EditableEditTrigger.vue)

### Props

- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional; default: "button"`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
## EditableInput

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Editable/EditableInput.vue)

### Props

- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional; default: "input"`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
## EditablePreview

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Editable/EditablePreview.vue)

### Props

- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional; default: "span"`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
## EditableRoot

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Editable/EditableRoot.vue)

### Props

- **defaultValue** — `string | undefined; optional`: The default value of the editable field
- **modelValue** — `string | null | undefined; optional`: The value of the editable field
- **placeholder** — `string | { edit: string; preview: string; } | undefined; optional; default: "Enter text..."`: The placeholder for the editable field
- **dir** — `Direction | undefined; optional`: The reading direction of the calendar when applicable. <br> If omitted, inherits globally from \`ConfigProvider\` or assumes LTR (left-to-right) reading mode.
- **disabled** — `boolean | undefined; optional; default: false`: Whether the editable field is disabled
- **readonly** — `boolean | undefined; optional`: Whether the editable field is read-only
- **activationMode** — `ActivationMode | undefined; optional; default: "focus"`: The activation event of the editable field
- **selectOnFocus** — `boolean | undefined; optional; default: false`: Whether to select the text in the input when it is focused.
- **submitMode** — `SubmitMode | undefined; optional; default: "blur"`: The submit event of the editable field
- **startWithEditMode** — `boolean | undefined; optional`: Whether to start with the edit mode active
- **maxLength** — `number | undefined; optional`: The maximum number of characters allowed
- **autoResize** — `boolean | undefined; optional; default: false`: Whether the editable field should auto resize
- **id** — `string | undefined; optional`: The id of the field
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional; default: "div"`: The element or component this component should render as. Can be overwritten by \`asChild\`.
- **name** — `string | undefined; optional`: The name of the field. Submitted with its owning form as part of a name/value pair.
- **required** — `boolean | undefined; optional; default: false`: When \`true\`, indicates that the user must set the value before the owning form can be submitted.

### Slots

- **default** — `{ isEditing: boolean; modelValue: string | null | undefined; isEmpty: boolean; submit: () => void; cancel: () => void; edit: () => void; }`

### Events

- **update:modelValue** — `[value: string]`
- **submit** — `[value: string | null | undefined]`
- **update:state** — `[state: "cancel" | "submit" | "edit"]`
## EditableSubmitTrigger

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Editable/EditableSubmitTrigger.vue)

### Props

- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional; default: "button"`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
