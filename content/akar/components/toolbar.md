---
title: "Toolbar"
description: "Akar Toolbar components, props, slots, and events."
package: akar
sourceTag: "v2.0.20"
sourceCommit: "1c7a9cb424cb223b73bb75816fc5f0706f618963"
sourceUrl: "https://github.com/vinicunca/akar/tree/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Toolbar"
---

## ToolbarButton

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Toolbar/ToolbarButton.vue)

### Props

- **disabled** — `boolean | undefined; optional`
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional; default: "button"`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
## ToolbarLink

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Toolbar/ToolbarLink.vue)

### Props

- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional; default: "a"`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
## ToolbarRoot

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Toolbar/ToolbarRoot.vue)

### Props

- **orientation** — `DataOrientation | undefined; optional; default: "horizontal"`: The orientation of the toolbar
- **dir** — `Direction | undefined; optional`: The reading direction of the combobox when applicable. <br> If omitted, inherits globally from \`ConfigProvider\` or assumes LTR (left-to-right) reading mode.
- **loop** — `boolean | undefined; optional`: When \`true\`, keyboard navigation will loop from last tab to first, and vice versa.
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
## ToolbarSeparator

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Toolbar/ToolbarSeparator.vue)

### Props

- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
## ToolbarToggleGroup

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Toolbar/ToolbarToggleGroup.vue)

### Props

- **rovingFocus** — `boolean | undefined; optional`: When \`false\`, navigating through the items using arrow keys will be disabled.
- **disabled** — `boolean | undefined; optional`: When \`true\`, prevents the user from interacting with the toggle group and all its items.
- **orientation** — `DataOrientation | undefined; optional`: The orientation of the component, which determines how focus moves: \`horizontal\` for left/right arrows and \`vertical\` for up/down arrows.
- **dir** — `Direction | undefined; optional`: The reading direction of the combobox when applicable. <br> If omitted, inherits globally from \`ConfigProvider\` or assumes LTR (left-to-right) reading mode.
- **loop** — `boolean | undefined; optional`: When \`loop\` and \`rovingFocus\` is \`true\`, keyboard navigation will loop from last item to first, and vice versa.
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional`: The element or component this component should render as. Can be overwritten by \`asChild\`.
- **name** — `string | undefined; optional`: The name of the field. Submitted with its owning form as part of a name/value pair.
- **required** — `boolean | undefined; optional`: When \`true\`, indicates that the user must set the value before the owning form can be submitted.
- **type** — `SingleOrMultipleType | undefined; optional`: Determines whether a "single" or "multiple" items can be selected at a time.  This prop will overwrite the inferred type from \`modelValue\` and \`defaultValue\`.
- **modelValue** — `AcceptableValue | AcceptableValue[] | undefined; optional`: The controlled value of the active item(s).  Use this when you need to control the state of the items. Can be binded with \`v-model\`
- **defaultValue** — `AcceptableValue | AcceptableValue[] | undefined; optional`: The default active value of the item(s).  Use when you do not need to control the state of the item(s).

### Slots

- **default** — `{}`

### Events

- **update:modelValue** — `[payload: AcceptableValue | AcceptableValue[]]`
## ToolbarToggleItem

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Toolbar/ToolbarToggleItem.vue)

### Props

- **value** — `AcceptableValue; required`: A string value for the toggle group item. All items within a toggle group should use a unique value.
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional`: The element or component this component should render as. Can be overwritten by \`asChild\`.
- **disabled** — `boolean | undefined; optional`: When \`true\`, prevents the user from interacting with the toggle.

### Slots

- **default** — `{}`

### Events

No events are declared.
