---
title: "TagGroup"
description: "Akar TagGroup components, props, slots, and events."
package: akar
sourceTag: "v2.0.20"
sourceCommit: "1c7a9cb424cb223b73bb75816fc5f0706f618963"
sourceUrl: "https://github.com/vinicunca/akar/tree/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/TagGroup"
---

## TagGroupItem

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/TagGroup/TagGroupItem.vue)

### Props

- **value** — `T; required`: The unique value of the tag.
- **disabled** — `boolean | undefined; optional`: When \`true\`, prevents the user from interacting with the tag.
- **textValue** — `string | undefined; optional`: A string representation of the tag's contents, used for typeahead and as the tag's accessible name. Defaults to the text of \`TagGroupItemText\`.
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional; default: "div"`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{ selected: boolean; disabled: boolean; }`

### Events

No events are declared.
## TagGroupItemDelete

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/TagGroup/TagGroupItemDelete.vue)

### Props

- **disabled** — `boolean | undefined; optional`: When \`true\`, prevents the user from interacting with the delete button.
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional; default: "button"`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
## TagGroupItemText

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/TagGroup/TagGroupItemText.vue)

### Props

- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional; default: "span"`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
## TagGroupRoot

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/TagGroup/TagGroupRoot.vue)

### Props

- **modelValue** — `T | T[] | undefined; optional`: The controlled value of the selected tag(s). Can be binded with \`v-model\`. An array when \`selectionMode\` is \`multiple\`.
- **defaultValue** — `T | T[] | undefined; optional`: The value of the selected tag(s) when initially rendered. Use when you do not need to control the selection.
- **selectionMode** — `TagGroupSelectionMode | undefined; optional; default: "none"`: The type of selection that is allowed. Tags are not selectable when \`none\`.
- **disallowEmptySelection** — `boolean | undefined; optional`: When \`true\`, the user cannot deselect the last selected tag.
- **escapeKeyBehavior** — `"none" | "clearSelection" | undefined; optional; default: "clearSelection"`: Whether pressing <kbd>Escape</kbd> clears the selection.
- **disabled** — `boolean | undefined; optional`: When \`true\`, prevents the user from interacting with the tag group and all its tags.
- **dir** — `Direction | undefined; optional`: The reading direction of the tag group when applicable. <br> If omitted, inherits globally from \`ConfigProvider\` or assumes LTR (left-to-right) reading mode.
- **loop** — `boolean | undefined; optional; default: true`: When \`true\`, keyboard navigation will loop from last tag to first, and vice versa.
- **by** — `string | ((a: T, b: T) => boolean) | undefined; optional`: Use this to compare objects by a particular field, or pass your own comparison function for complete control over how objects are compared.
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional; default: "div"`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{ modelValue: T | T[] | undefined; }`

### Events

- **update:modelValue** — `[value: T | T[] | undefined]`
- **remove** — `[values: T[]]`
