---
title: "TagsInput"
description: "Akar TagsInput components, props, slots, and events."
package: akar
sourceTag: "v2.0.20"
sourceCommit: "1c7a9cb424cb223b73bb75816fc5f0706f618963"
sourceUrl: "https://github.com/vinicunca/akar/tree/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/TagsInput"
---

## TagsInputClear

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/TagsInput/TagsInputClear.vue)

### Props

- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional; default: "button"`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
## TagsInputInput

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/TagsInput/TagsInputInput.vue)

### Props

- **placeholder** — `string | undefined; optional`: The placeholder character to use for empty tags input.
- **autoFocus** — `boolean | undefined; optional`: Focus on element when mounted.
- **maxLength** — `number | undefined; optional`: Maximum number of character allowed.
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional; default: "input"`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
## TagsInputItem

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/TagsInput/TagsInputItem.vue)

### Props

- **value** — `AcceptableInputValue; required`: Value associated with the tags
- **disabled** — `boolean | undefined; optional`: When \`true\`, prevents the user from interacting with the tags input.
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
## TagsInputItemDelete

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/TagsInput/TagsInputItemDelete.vue)

### Props

- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional; default: "button"`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
## TagsInputItemText

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/TagsInput/TagsInputItemText.vue)

### Props

- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional; default: "span"`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
## TagsInputRoot

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/TagsInput/TagsInputRoot.vue)

### Props

- **modelValue** — `T[] | null | undefined; optional`: The controlled value of the tags input. Can be bind as \`v-model\`.
- **defaultValue** — `T[] | undefined; optional; default: []`: The value of the tags that should be added. Use when you do not need to control the state of the tags input
- **addOnPaste** — `boolean | undefined; optional`: When \`true\`, allow adding tags on paste. Work in conjunction with delimiter prop.
- **addOnTab** — `boolean | undefined; optional`: When \`true\` allow adding tags on tab keydown
- **addOnBlur** — `boolean | undefined; optional`: When \`true\` allow adding tags blur input
- **duplicate** — `boolean | undefined; optional`: When \`true\`, allow duplicated tags.
- **disabled** — `boolean | undefined; optional`: When \`true\`, prevents the user from interacting with the tags input.
- **delimiter** — `string | RegExp | undefined; optional; default: ","`: The character or regular expression to trigger the addition of a new tag. Also used to split tags for \`@paste\` event
- **dir** — `Direction | undefined; optional`: The reading direction of the combobox when applicable. <br> If omitted, inherits globally from \`ConfigProvider\` or assumes LTR (left-to-right) reading mode.
- **max** — `number | undefined; optional; default: 0`: Maximum number of tags.
- **id** — `string | undefined; optional`
- **convertValue** — `((value: string) => T) | undefined; optional`: Convert the input value to the desired type. Mandatory when using objects as values and using \`TagsInputInput\`
- **displayValue** — `((value: T) => string) | undefined; optional; default: value.toString()`: Display the value of the tag. Useful when you want to apply modifications to the value like adding a suffix or when using object as values
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional`: The element or component this component should render as. Can be overwritten by \`asChild\`.
- **name** — `string | undefined; optional`: The name of the field. Submitted with its owning form as part of a name/value pair.
- **required** — `boolean | undefined; optional`: When \`true\`, indicates that the user must set the value before the owning form can be submitted.

### Slots

- **default** — `{ modelValue: AcceptableInputValue[]; }`

### Events

- **update:modelValue** — `[payload: T[]]`
- **invalid** — `[payload: T]`
- **addTag** — `[payload: T]`
- **removeTag** — `[payload: T]`
