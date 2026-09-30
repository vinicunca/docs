---
title: "DropdownMenu"
description: "Akar DropdownMenu components, props, slots, and events."
package: akar
sourceTag: "v2.0.20"
sourceCommit: "1c7a9cb424cb223b73bb75816fc5f0706f618963"
sourceUrl: "https://github.com/vinicunca/akar/tree/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/DropdownMenu"
---

## DropdownMenuArrow

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/DropdownMenu/DropdownMenuArrow.vue)

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
## DropdownMenuCheckboxItem

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/DropdownMenu/DropdownMenuCheckboxItem.vue)

### Props

- **modelValue** — `CheckedState | undefined; optional`: The controlled checked state of the item. Can be used as \`v-model\`.
- **disabled** — `boolean | undefined; optional`: When \`true\`, prevents the user from interacting with the item.
- **textValue** — `string | undefined; optional`: Optional text used for typeahead purposes. By default the typeahead behavior will use the \`.textContent\` of the item. <br>  Use this when the content is complex, or you have non-textual content inside.
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{ checked: CheckedState; modelValue: CheckedState; }`

### Events

- **update:modelValue** — `[payload: boolean]`
- **select** — `[event: Event]`
## DropdownMenuContent

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/DropdownMenu/DropdownMenuContent.vue)

### Props

- **forceMount** — `boolean | undefined; optional`: Used to force mounting when more control is needed. Useful when controlling animation with Vue animation libraries.
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional`: The element or component this component should render as. Can be overwritten by \`asChild\`.
- **loop** — `boolean | undefined; optional`: When \`true\`, keyboard navigation will loop from last item to first, and vice versa.
- **reference** — `ReferenceElement | undefined; optional`: The custom element or virtual element that will be set as the reference to position the floating element.  If provided, it will replace the default anchor element.
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

### Slots

- **default** — `{}`

### Events

- **escapeKeyDown** — `[event: KeyboardEvent]`
- **pointerDownOutside** — `[event: PointerDownOutsideEvent]`
- **focusOutside** — `[event: FocusOutsideEvent]`
- **interactOutside** — `[event: PointerDownOutsideEvent | FocusOutsideEvent]`
- **openAutoFocus** — `[event: Event]`
- **closeAutoFocus** — `[event: Event]`
## DropdownMenuFilter

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/DropdownMenu/DropdownMenuFilter.vue)

### Props

- **modelValue** — `string | undefined; optional`: The controlled value of the filter. Can be binded with v-model.
- **autoFocus** — `boolean | undefined; optional`: Focus on element when mounted.
- **disabled** — `boolean | undefined; optional`: When \`true\`, prevents the user from interacting with the filter input
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional; default: "input"`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{ modelValue: string | undefined; }`

### Events

- **update:modelValue** — `[string]`
## DropdownMenuGroup

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/DropdownMenu/DropdownMenuGroup.vue)

### Props

- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
## DropdownMenuItem

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/DropdownMenu/DropdownMenuItem.vue)

### Props

- **disabled** — `boolean | undefined; optional`: When \`true\`, prevents the user from interacting with the item.
- **textValue** — `string | undefined; optional`: Optional text used for typeahead purposes. By default the typeahead behavior will use the \`.textContent\` of the item. <br>  Use this when the content is complex, or you have non-textual content inside.
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

- **select** — `[event: Event]`
## DropdownMenuItemIndicator

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/DropdownMenu/DropdownMenuItemIndicator.vue)

### Props

- **forceMount** — `boolean | undefined; optional`: Used to force mounting when more control is needed. Useful when controlling animation with Vue animation libraries.
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
## DropdownMenuLabel

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/DropdownMenu/DropdownMenuLabel.vue)

### Props

- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
## DropdownMenuPortal

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/DropdownMenu/DropdownMenuPortal.vue)

### Props

- **to** — `string | HTMLElement | undefined; optional`: Vue native teleport component prop \`:to\`  {@link https://vuejs.org/guide/built-ins/teleport.html#basic-usage}
- **disabled** — `boolean | undefined; optional`: Disable teleport and render the component inline  {@link https://vuejs.org/guide/built-ins/teleport.html#disabling-teleport}
- **defer** — `boolean | undefined; optional`: Defer the resolving of a Teleport target until other parts of the application have mounted (requires Vue 3.5.0+)  {@link https://vuejs.org/guide/built-ins/teleport.html#deferred-teleport}
- **forceMount** — `boolean | undefined; optional`: Used to force mounting when more control is needed. Useful when controlling animation with Vue animation libraries.

### Slots

- **default** — `{}`

### Events

No events are declared.
## DropdownMenuRadioGroup

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/DropdownMenu/DropdownMenuRadioGroup.vue)

### Props

- **modelValue** — `AcceptableValue | undefined; optional`: The value of the selected item in the group.
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

- **update:modelValue** — `[payload: AcceptableValue]`
## DropdownMenuRadioItem

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/DropdownMenu/DropdownMenuRadioItem.vue)

### Props

- **value** — `AcceptableValue; required`: The unique value of the item.
- **disabled** — `boolean | undefined; optional`: When \`true\`, prevents the user from interacting with the item.
- **textValue** — `string | undefined; optional`: Optional text used for typeahead purposes. By default the typeahead behavior will use the \`.textContent\` of the item. <br>  Use this when the content is complex, or you have non-textual content inside.
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{ checked: boolean; }`

### Events

- **select** — `[event: Event]`
## DropdownMenuRoot

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/DropdownMenu/DropdownMenuRoot.vue)

### Props

- **defaultOpen** — `boolean | undefined; optional`: The open state of the dropdown menu when it is initially rendered. Use when you do not need to control its open state.
- **open** — `boolean | undefined; optional; default: undefined`: The controlled open state of the menu. Can be used as \`v-model:open\`.
- **dir** — `Direction | undefined; optional`: The reading direction of the combobox when applicable.  If omitted, inherits globally from \`ConfigProvider\` or assumes LTR (left-to-right) reading mode.
- **modal** — `boolean | undefined; optional; default: true`: The modality of the dropdown menu.  When set to \`true\`, interaction with outside elements will be disabled and only menu content will be visible to screen readers.

### Slots

- **default** — `{ open: boolean; }`

### Events

- **update:open** — `[payload: boolean]`
## DropdownMenuSeparator

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/DropdownMenu/DropdownMenuSeparator.vue)

### Props

- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
## DropdownMenuSub

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/DropdownMenu/DropdownMenuSub.vue)

### Props

- **defaultOpen** — `boolean | undefined; optional`: The open state of the dropdown menu when it is initially rendered. Use when you do not need to control its open state.
- **open** — `boolean | undefined; optional; default: undefined`: The controlled open state of the menu. Can be used as \`v-model:open\`.

### Slots

- **default** — `{ open: boolean; }`

### Events

- **update:open** — `[payload: boolean]`
## DropdownMenuSubContent

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/DropdownMenu/DropdownMenuSubContent.vue)

### Props

- **forceMount** — `boolean | undefined; optional`: Used to force mounting when more control is needed. Useful when controlling animation with Vue animation libraries.
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional`: The element or component this component should render as. Can be overwritten by \`asChild\`.
- **loop** — `boolean | undefined; optional`: When \`true\`, keyboard navigation will loop from last item to first, and vice versa.
- **reference** — `ReferenceElement | undefined; optional`: The custom element or virtual element that will be set as the reference to position the floating element.  If provided, it will replace the default anchor element.
- **memoDependencies** — `unknown[] | undefined; optional`: Reactive dependencies that should invalidate the memoized content subtree.
- **sideOffset** — `number | undefined; optional`: The distance in pixels from the trigger.
- **sideFlip** — `boolean | undefined; optional`: Flip to the opposite side when colliding with boundary.
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

### Slots

- **default** — `{}`

### Events

- **escapeKeyDown** — `[event: KeyboardEvent]`
- **pointerDownOutside** — `[event: PointerDownOutsideEvent]`
- **focusOutside** — `[event: FocusOutsideEvent]`
- **interactOutside** — `[event: PointerDownOutsideEvent | FocusOutsideEvent]`
- **openAutoFocus** — `[event: Event]`
- **closeAutoFocus** — `[event: Event]`
- **entryFocus** — `[event: Event]`
## DropdownMenuSubTrigger

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/DropdownMenu/DropdownMenuSubTrigger.vue)

### Props

- **graceDuration** — `number | undefined; optional`: Time in milliseconds to keep a submenu open while the pointer moves from its trigger to the submenu.
- **disabled** — `boolean | undefined; optional`: When \`true\`, prevents the user from interacting with the item.
- **textValue** — `string | undefined; optional`: Optional text used for typeahead purposes. By default the typeahead behavior will use the \`.textContent\` of the item. <br>  Use this when the content is complex, or you have non-textual content inside.
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
## DropdownMenuTrigger

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/DropdownMenu/DropdownMenuTrigger.vue)

### Props

- **disabled** — `boolean | undefined; optional`: When \`true\`, prevents the user from interacting with item
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional; default: "button"`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
