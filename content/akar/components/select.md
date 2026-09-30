---
title: "Select"
description: "Akar Select components, props, slots, and events."
package: akar
sourceTag: "v2.0.20"
sourceCommit: "1c7a9cb424cb223b73bb75816fc5f0706f618963"
sourceUrl: "https://github.com/vinicunca/akar/tree/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Select"
---

## SelectArrow

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Select/SelectArrow.vue)

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
## SelectContent

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Select/SelectContent.vue)

### Props

- **forceMount** — `boolean | undefined; optional`: Used to force mounting when more control is needed. Useful when controlling animation with Vue animation libraries.
- **position** — `"popper" | "item-aligned" | undefined; optional`: The positioning mode to use  \`item-aligned (default)\` - behaves similarly to a native MacOS menu by positioning content relative to the active item. <br> \`popper\` - positions content in the same way as our other primitives, for example \`Popover\` or \`DropdownMenu\`.
- **bodyLock** — `boolean | undefined; optional`: The document.body will be lock, and scrolling will be disabled.
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
- **closeAutoFocus** — `[event: Event]`
## SelectGroup

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Select/SelectGroup.vue)

### Props

- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
## SelectIcon

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Select/SelectIcon.vue)

### Props

- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional; default: "span"`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
## SelectItem

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Select/SelectItem.vue)

### Props

- **value** — `AcceptableValue; required`: The value given as data when submitted with a \`name\`.
- **disabled** — `boolean | undefined; optional`: When \`true\`, prevents the user from interacting with the item.
- **textValue** — `string | undefined; optional`: Optional text used for typeahead purposes.  By default the typeahead behavior will use the \`.textContent\` of the \`SelectItemText\` part.  Use this when the content is complex, or you have non-textual content inside.
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{ selected: boolean; }`

### Events

- **select** — `[event: SelectEvent<T>]`
## SelectItemIndicator

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Select/SelectItemIndicator.vue)

### Props

- **forceMount** — `boolean | undefined; optional`: Used to force mounting when more control is needed. Useful when controlling animation with Vue animation libraries.
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional; default: "span"`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
## SelectItemText

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Select/SelectItemText.vue)

### Props

- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional; default: "span"`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
## SelectLabel

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Select/SelectLabel.vue)

### Props

- **for** — `string | undefined; optional`
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional; default: "div"`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
## SelectPortal

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Select/SelectPortal.vue)

### Props

- **to** — `string | HTMLElement | undefined; optional`: Vue native teleport component prop \`:to\`  {@link https://vuejs.org/guide/built-ins/teleport.html#basic-usage}
- **disabled** — `boolean | undefined; optional`: Disable teleport and render the component inline  {@link https://vuejs.org/guide/built-ins/teleport.html#disabling-teleport}
- **defer** — `boolean | undefined; optional`: Defer the resolving of a Teleport target until other parts of the application have mounted (requires Vue 3.5.0+)  {@link https://vuejs.org/guide/built-ins/teleport.html#deferred-teleport}
- **forceMount** — `boolean | undefined; optional`: Used to force mounting when more control is needed. Useful when controlling animation with Vue animation libraries.

### Slots

- **default** — `{}`

### Events

No events are declared.
## SelectRoot

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Select/SelectRoot.vue)

### Props

- **open** — `boolean | undefined; optional; default: undefined`: The controlled open state of the Select. Can be bind as \`v-model:open\`.
- **defaultOpen** — `boolean | undefined; optional`: The open state of the select when it is initially rendered. Use when you do not need to control its open state.
- **defaultValue** — `T | T[] | undefined; optional`: The value of the select when initially rendered. Use when you do not need to control the state of the Select
- **modelValue** — `T | T[] | undefined; optional; default: undefined`: The controlled value of the Select. Can be bind as \`v-model\`.
- **nullableValue** — `string | undefined; optional; default: ""`: The value of the hidden native select option when the model value is nullish.
- **by** — `string | ((a: T, b: T) => boolean) | undefined; optional`: Use this to compare objects by a particular field, or pass your own comparison function for complete control over how objects are compared.
- **dir** — `Direction | undefined; optional`: The reading direction of the combobox when applicable. <br> If omitted, inherits globally from \`ConfigProvider\` or assumes LTR (left-to-right) reading mode.
- **multiple** — `boolean | undefined; optional`: Whether multiple options can be selected or not.
- **autocomplete** — `string | undefined; optional`: Native html input \`autocomplete\` attribute.
- **disabled** — `boolean | undefined; optional`: When \`true\`, prevents the user from interacting with Select
- **name** — `string | undefined; optional`: The name of the field. Submitted with its owning form as part of a name/value pair.
- **required** — `boolean | undefined; optional`: When \`true\`, indicates that the user must set the value before the owning form can be submitted.

### Slots

- **default** — `{ modelValue: T | T[] | undefined; open: boolean; }`

### Events

- **update:modelValue** — `[value: T]`
- **update:open** — `[value: boolean]`
## SelectScrollDownButton

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Select/SelectScrollDownButton.vue)

### Props

- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
## SelectScrollUpButton

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Select/SelectScrollUpButton.vue)

### Props

- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
## SelectSeparator

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Select/SelectSeparator.vue)

### Props

- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
## SelectTrigger

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Select/SelectTrigger.vue)

### Props

- **disabled** — `boolean | undefined; optional`
- **reference** — `ReferenceElement | undefined; optional`: The reference (or anchor) element that is being referred to for positioning.  If not provided will use the current component as anchor.
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional; default: "button"`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
## SelectValue

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Select/SelectValue.vue)

### Props

- **placeholder** — `string | undefined; optional; default: ""`: The content that will be rendered inside the \`SelectValue\` when no \`value\` or \`defaultValue\` is set.
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional; default: "span"`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{ selectedLabel: string[]; modelValue: AcceptableValue | AcceptableValue[] | undefined; }`

### Events

No events are declared.
## SelectViewport

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Select/SelectViewport.vue)

### Props

- **nonce** — `string | undefined; optional`: Will add \`nonce\` attribute to the style tag which can be used by Content Security Policy. <br> If omitted, inherits globally from \`ConfigProvider\`.
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
