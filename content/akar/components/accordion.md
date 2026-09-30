---
title: "Accordion"
description: "Akar Accordion components, props, slots, and events."
package: akar
sourceTag: "v2.0.20"
sourceCommit: "1c7a9cb424cb223b73bb75816fc5f0706f618963"
sourceUrl: "https://github.com/vinicunca/akar/tree/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Accordion"
---

## AccordionContent

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Accordion/AccordionContent.vue)

### Props

- **forceMount** — `boolean | undefined; optional`: Used to force mounting when more control is needed. Useful when controlling animation with Vue animation libraries.
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
## AccordionHeader

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Accordion/AccordionHeader.vue)

### Props

- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional; default: "h3"`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
## AccordionItem

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Accordion/AccordionItem.vue)

### Props

- **disabled** — `boolean | undefined; optional`: Whether or not an accordion item is disabled from user interaction. When \`true\`, prevents the user from interacting with the item.
- **value** — `string; required`: A string value for the accordion item. All items within an accordion should use a unique value.
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional`: The element or component this component should render as. Can be overwritten by \`asChild\`.
- **unmountOnHide** — `boolean | undefined; optional; default: undefined`: When \`true\`, the element will be unmounted on closed state.

### Slots

- **default** — `{ open: boolean; }`

### Events

No events are declared.
## AccordionRoot

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Accordion/AccordionRoot.vue)

### Props

- **collapsible** — `boolean | undefined; optional; default: false`: When type is "single", allows closing content when clicking trigger for an open item. When type is "multiple", this prop has no effect.
- **disabled** — `boolean | undefined; optional; default: false`: When \`true\`, prevents the user from interacting with the accordion and all its items
- **dir** — `Direction | undefined; optional`: The reading direction of the accordion when applicable. If omitted, assumes LTR (left-to-right) reading mode.
- **orientation** — `DataOrientation | undefined; optional; default: "vertical"`: The orientation of the accordion.
- **unmountOnHide** — `boolean | undefined; optional; default: true`: When \`true\`, the element will be unmounted on closed state.
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional`: The element or component this component should render as. Can be overwritten by \`asChild\`.
- **type** — `SingleOrMultipleType | undefined; optional`: Determines whether a "single" or "multiple" items can be selected at a time.  This prop will overwrite the inferred type from \`modelValue\` and \`defaultValue\`.
- **modelValue** — `T | undefined; optional`: The controlled value of the active item(s).  Use this when you need to control the state of the items. Can be binded with \`v-model\`
- **defaultValue** — `T | undefined; optional`: The default active value of the item(s).  Use when you do not need to control the state of the item(s).

### Slots

- **default** — `{ modelValue: AcceptableValue | AcceptableValue[] | undefined; }`

### Events

- **update:modelValue** — `[value: (ExplicitType extends "single" ? string : string[]) | undefined]`
## AccordionTrigger

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Accordion/AccordionTrigger.vue)

### Props

- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
