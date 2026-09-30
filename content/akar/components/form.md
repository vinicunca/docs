---
title: "Form"
description: "Akar Form components, props, slots, and events."
package: akar
sourceTag: "v2.0.20"
sourceCommit: "1c7a9cb424cb223b73bb75816fc5f0706f618963"
sourceUrl: "https://github.com/vinicunca/akar/tree/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Form"
---

## FormRoot

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Form/FormRoot.vue)

### Props

- **errors** — `Record<string, string | string[]> | undefined; optional`: A map of field \`name\` to server-side error message(s). Displayed by the matching \`FieldRoot\`'s \`FieldError\` until the user edits that field, or a new value for that key is provided.
- **validationMode** — `FieldValidationMode | undefined; optional; default: "onSubmit"`: When fields validate. The \`validationMode\` of a \`FieldRoot\` takes precedence over this. - \`onSubmit\`: when the form is submitted, then on every change after that. - \`onBlur\`: when a control loses focus. - \`onChange\`: on every change to a control's value.
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional; default: "form"`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

- **submit** — `[event: SubmitEvent]`
- **formSubmit** — `[values: Record<string, unknown>, event: SubmitEvent]`
