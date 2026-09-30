---
title: "Combobox"
description: "Akar Combobox components, props, slots, and events."
package: akar
sourceTag: "v2.0.20"
sourceCommit: "1c7a9cb424cb223b73bb75816fc5f0706f618963"
sourceUrl: "https://github.com/vinicunca/akar/tree/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Combobox"
---

## ComboboxAnchor

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Combobox/ComboboxAnchor.vue)

### Props

- **reference** — `ReferenceElement | undefined; optional`: The reference (or anchor) element that is being referred to for positioning.  If not provided will use the current component as anchor.
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
## ComboboxArrow

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Combobox/ComboboxArrow.vue)

### Props

- **width** — `number | undefined; optional; default: 10`: The width of the arrow in pixels.
- **height** — `number | undefined; optional; default: 5`: The height of the arrow in pixels.
- **rounded** — `boolean | undefined; optional`: When \`true\`, render the rounded version of arrow. Do not work with \`as\`/\`asChild\`
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional; default: "svg"`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
## ComboboxCancel

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Combobox/ComboboxCancel.vue)

### Props

- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional; default: "button"`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
## ComboboxContent

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Combobox/ComboboxContent.vue)

### Props

- **forceMount** — `boolean | undefined; optional`: Used to force mounting when more control is needed. Useful when controlling animation with Vue animation libraries.
- **position** — `"inline" | "popper" | undefined; optional`: The positioning mode to use, <br> \`inline\` is the default and you can control the position using CSS. <br> \`popper\` positions content in the same way as our other primitives, for example \`Popover\` or \`DropdownMenu\`.
- **bodyLock** — `boolean | undefined; optional`: The document.body will be lock, and scrolling will be disabled.
- **hideWhenEmpty** — `boolean | undefined; optional`: When \`true\`, hides the content when there are no items matching the filter.
- **present** — `boolean | undefined; optional`: Whether this kept-mounted content is currently visible.
- **memoDependencies** — `unknown[] | undefined; optional`: Reactive dependencies that should invalidate the memoized content subtree.
- **side** — `"top" | "right" | "bottom" | "left" | undefined; optional`: The preferred side of the trigger to render against when open. Will be reversed when collisions occur and avoidCollisions is enabled.
- **sideOffset** — `number | undefined; optional`: The distance in pixels from the trigger.
- **sideFlip** — `boolean | undefined; optional`: Flip to the opposite side when colliding with boundary.
- **align** — `"start" | "center" | "end" | undefined; optional`: The preferred alignment against the trigger. May change when collisions occur.
- **alignOffset** — `number | undefined; optional`: An offset in pixels from the \`start\` or \`end\` alignment options.
- **alignFlip** — `boolean | undefined; optional`: Flip alignment when colliding with boundary. May only occur when \`prioritizePosition\` is true.
- **avoidCollisions** — `boolean | undefined; optional`: When \`true\`, overrides the side and align preferences to prevent collisions with boundary edges.
- **collisionBoundary** — `Element | (Element | null)[] | null | undefined; optional`: The element used as the collision boundary. By default this is the viewport, though you can provide additional element(s) to be included in this check.
- **collisionPadding** — `number | Partial<Record<"top" | "right" | "bottom" | "left", number>> | undefined; optional`: The distance in pixels from the boundary edges where collision detection should occur. Accepts a number (same for all sides), or a partial padding object, for example: { top: 20, left: 20 }.
- **arrowPadding** — `number | undefined; optional`: The padding between the arrow and the edges of the content. If your content has border-radius, this will prevent it from overflowing the corners.
- **hideShiftedArrow** — `boolean | undefined; optional`: When \`true\`, hides the arrow when it cannot be centered to the reference element.
- **sticky** — `"partial" | "always" | undefined; optional`: The sticky behavior on the align axis. \`partial\` will keep the content in the boundary as long as the trigger is at least partially in the boundary whilst "always" will keep the content in the boundary regardless.
- **hideWhenDetached** — `boolean | undefined; optional`: Whether to hide the content when the trigger becomes fully occluded.
- **positionStrategy** — `"fixed" | "absolute" | undefined; optional`: The type of CSS position property to use.
- **updatePositionStrategy** — `"always" | "optimized" | undefined; optional`: Strategy to update the position of the floating element on every animation frame.
- **disableUpdateOnLayoutShift** — `boolean | undefined; optional`: Whether to disable the update position for the content when the layout shifted.
- **prioritizePosition** — `boolean | undefined; optional`: Force content to be position within the viewport.  Might overlap the reference element, which may not be desired.
- **reference** — `ReferenceElement | undefined; optional`: The custom element or virtual element that will be set as the reference to position the floating element.  If provided, it will replace the default anchor element.
- **dir** — `Direction | undefined; optional`: The reading direction of the popper content when applicable. <br> If omitted, inherits globally from \`ConfigProvider\` or assumes LTR (left-to-right) reading mode.
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional`: The element or component this component should render as. Can be overwritten by \`asChild\`.
- **disableOutsidePointerEvents** — `boolean | undefined; optional`: When \`true\`, hover/focus/click interactions will be disabled on elements outside the \`DismissableLayer\`. Users will need to click twice on outside elements to interact with them: once to close the \`DismissableLayer\`, and again to trigger the element.

### Slots

- **default** — `{}`

### Events

- **escapeKeyDown** — `[event: KeyboardEvent]`
- **pointerDownOutside** — `[event: PointerDownOutsideEvent]`
- **focusOutside** — `[event: FocusOutsideEvent]`
- **interactOutside** — `[event: PointerDownOutsideEvent | FocusOutsideEvent]`
## ComboboxEmpty

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Combobox/ComboboxEmpty.vue)

### Props

- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
## ComboboxGroup

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Combobox/ComboboxGroup.vue)

### Props

- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
## ComboboxInput

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Combobox/ComboboxInput.vue)

### Props

- **displayValue** — `((val: any) => string) | undefined; optional`: The display value of input for selected item. Does not work with \`multiple\`.
- **modelValue** — `string | undefined; optional`: The controlled value of the filter. Can be binded with v-model.
- **autoFocus** — `boolean | undefined; optional`: Focus on element when mounted.
- **disabled** — `boolean | undefined; optional`: When \`true\`, prevents the user from interacting with item
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional; default: "input"`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

- **update:modelValue** — `[string]`
## ComboboxItem

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Combobox/ComboboxItem.vue)

### Props

- **textValue** — `string | undefined; optional`: A string representation of the item contents.  If the children are not plain text, then the \`textValue\` prop must also be set to a plain text representation, which will be used for autocomplete in the ComboBox.
- **value** — `T; required`: The value given as data when submitted with a \`name\`.
- **disabled** — `boolean | undefined; optional`: When \`true\`, prevents the user from interacting with the item.
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{ selected: boolean; }`

### Events

- **select** — `[event: SelectEvent<T>]`
## ComboboxItemIndicator

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Combobox/ComboboxItemIndicator.vue)

### Props

- **forceMount** — `boolean | undefined; optional`: Used to force mounting when more control is needed. Useful when controlling animation with Vue animation libraries.
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional; default: "span"`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
## ComboboxLabel

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Combobox/ComboboxLabel.vue)

### Props

- **for** — `string | undefined; optional`
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional; default: "div"`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
## ComboboxPortal

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Combobox/ComboboxPortal.vue)

### Props

- **to** — `string | HTMLElement | undefined; optional`: Vue native teleport component prop \`:to\`  {@link https://vuejs.org/guide/built-ins/teleport.html#basic-usage}
- **disabled** — `boolean | undefined; optional`: Disable teleport and render the component inline  {@link https://vuejs.org/guide/built-ins/teleport.html#disabling-teleport}
- **defer** — `boolean | undefined; optional`: Defer the resolving of a Teleport target until other parts of the application have mounted (requires Vue 3.5.0+)  {@link https://vuejs.org/guide/built-ins/teleport.html#deferred-teleport}
- **forceMount** — `boolean | undefined; optional`: Used to force mounting when more control is needed. Useful when controlling animation with Vue animation libraries.

### Slots

- **default** — `{}`

### Events

No events are declared.
## ComboboxRoot

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Combobox/ComboboxRoot.vue)

### Props

- **open** — `boolean | undefined; optional; default: undefined`: The controlled open state of the Combobox. Can be binded with \`v-model:open\`.
- **defaultOpen** — `boolean | undefined; optional`: The open state of the combobox when it is initially rendered. <br> Use when you do not need to control its open state.
- **resetSearchTermOnBlur** — `boolean | undefined; optional; default: true`: Whether to reset the searchTerm when the Combobox input blurred
- **resetSearchTermOnSelect** — `boolean | undefined; optional; default: true`: Whether to reset the searchTerm when the Combobox value is selected
- **openOnFocus** — `boolean | undefined; optional; default: false`: Whether to open the combobox when the input is focused
- **openOnClick** — `boolean | undefined; optional; default: false`: Whether to open the combobox when the input is clicked
- **ignoreFilter** — `boolean | undefined; optional`: When \`true\`, disable the default filters
- **resetModelValueOnClear** — `boolean | undefined; optional; default: false`: When \`true\` the \`modelValue\` will be reset to \`null\` (or \`[]\` if \`multiple\`)
- **unmountOnHide** — `boolean | undefined; optional; default: true`: When set to \`false\`, the Combobox content will not be unmounted when closed, but instead hidden with CSS. <br> Useful when you want to improve performance by not remounting the content on every open.
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional`: The element or component this component should render as. Can be overwritten by \`asChild\`.
- **disabled** — `boolean | undefined; optional`: When \`true\`, prevents the user from interacting with listbox
- **required** — `boolean | undefined; optional`: When \`true\`, indicates that the user must set the value before the owning form can be submitted.
- **multiple** — `boolean | undefined; optional`: Whether multiple options can be selected or not.
- **dir** — `Direction | undefined; optional`: The reading direction of the listbox when applicable. <br> If omitted, inherits globally from \`ConfigProvider\` or assumes LTR (left-to-right) reading mode.
- **modelValue** — `T | T[] | undefined; optional`: The controlled value of the listbox. Can be binded with \`v-model\`.
- **defaultValue** — `T | T[] | undefined; optional`: The value of the listbox when initially rendered. Use when you do not need to control the state of the Listbox
- **name** — `string | undefined; optional`: The name of the field. Submitted with its owning form as part of a name/value pair.
- **highlightOnHover** — `boolean | undefined; optional; default: true`: When \`true\`, hover over item will trigger highlight
- **by** — `string | ((a: T, b: T) => boolean) | undefined; optional`: Use this to compare objects by a particular field, or pass your own comparison function for complete control over how objects are compared.

### Slots

- **default** — `{ open: boolean; modelValue: T | T[]; }`

### Events

- **update:modelValue** — `[value: T]`
- **update:open** — `[value: boolean]`
- **highlight** — `[payload: { ref: HTMLElement; value: T; } | undefined]`
## ComboboxSeparator

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Combobox/ComboboxSeparator.vue)

### Props

- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
## ComboboxTrigger

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Combobox/ComboboxTrigger.vue)

### Props

- **disabled** — `boolean | undefined; optional`: When \`true\`, prevents the user from interacting with item
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional; default: "button"`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
## ComboboxViewport

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Combobox/ComboboxViewport.vue)

### Props

- **nonce** — `string | undefined; optional`: Will add \`nonce\` attribute to the style tag which can be used by Content Security Policy. <br> If omitted, inherits globally from \`ConfigProvider\`.
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
## ComboboxVirtualizer

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Combobox/ComboboxVirtualizer.vue)

### Props

- **options** — `T[]; required`: List of items
- **overscan** — `number | undefined; optional`: Number of items rendered outside the visible area
- **estimateSize** — `number | ((index: number) => number) | undefined; optional`: Estimated size (in px) of each item
- **textContent** — `((option: T) => string) | undefined; optional`: Text content for each item to achieve type-ahead feature

### Slots

- **default** — `{ option: T; virtualizer: Virtualizer<HTMLElement, Element>; virtualItem: VirtualItem; }`

### Events

No events are declared.
