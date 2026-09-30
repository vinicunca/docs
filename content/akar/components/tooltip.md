---
title: "Tooltip"
description: "Akar Tooltip components, props, slots, and events."
package: akar
sourceTag: "v2.0.20"
sourceCommit: "1c7a9cb424cb223b73bb75816fc5f0706f618963"
sourceUrl: "https://github.com/vinicunca/akar/tree/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Tooltip"
---

## TooltipArrow

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Tooltip/TooltipArrow.vue)

### Props

- **width** — `number | undefined; optional; default: 10`: The width of the arrow in pixels.
- **height** — `number | undefined; optional; default: 5`: The height of the arrow in pixels.
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional; default: "svg"`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
## TooltipContent

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Tooltip/TooltipContent.vue)

### Props

- **forceMount** — `boolean | undefined; optional`: Used to force mounting when more control is needed. Useful when controlling animation with Vue animation libraries.
- **ariaLabel** — `string | undefined; optional`: By default, screenreaders will announce the content inside the component. If this is not descriptive enough, or you have content that cannot be announced, use aria-label as a more descriptive label.
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional`: The element or component this component should render as. Can be overwritten by \`asChild\`.
- **side** — `"top" | "right" | "bottom" | "left" | undefined; optional`: The preferred side of the trigger to render against when open. Will be reversed when collisions occur and avoidCollisions is enabled.
- **sideOffset** — `number | undefined; optional`: The distance in pixels from the trigger.
- **align** — `"start" | "center" | "end" | undefined; optional`: The preferred alignment against the trigger. May change when collisions occur.
- **alignOffset** — `number | undefined; optional`: An offset in pixels from the \`start\` or \`end\` alignment options.
- **avoidCollisions** — `boolean | undefined; optional`: When \`true\`, overrides the side and align preferences to prevent collisions with boundary edges.
- **collisionBoundary** — `Element | (Element | null)[] | null | undefined; optional`: The element used as the collision boundary. By default this is the viewport, though you can provide additional element(s) to be included in this check.
- **collisionPadding** — `number | Partial<Record<"top" | "right" | "bottom" | "left", number>> | undefined; optional`: The distance in pixels from the boundary edges where collision detection should occur. Accepts a number (same for all sides), or a partial padding object, for example: { top: 20, left: 20 }.
- **arrowPadding** — `number | undefined; optional`: The padding between the arrow and the edges of the content. If your content has border-radius, this will prevent it from overflowing the corners.
- **sticky** — `"partial" | "always" | undefined; optional`: The sticky behavior on the align axis. \`partial\` will keep the content in the boundary as long as the trigger is at least partially in the boundary whilst "always" will keep the content in the boundary regardless.
- **hideWhenDetached** — `boolean | undefined; optional`: Whether to hide the content when the trigger becomes fully occluded.
- **positionStrategy** — `"fixed" | "absolute" | undefined; optional`: The type of CSS position property to use.
- **updatePositionStrategy** — `"always" | "optimized" | undefined; optional`: Strategy to update the position of the floating element on every animation frame.

### Slots

- **default** — `{}`

### Events

- **escapeKeyDown** — `[event: KeyboardEvent]`
- **pointerDownOutside** — `[event: Event]`
## TooltipPortal

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Tooltip/TooltipPortal.vue)

### Props

- **to** — `string | HTMLElement | undefined; optional`: Vue native teleport component prop \`:to\`  {@link https://vuejs.org/guide/built-ins/teleport.html#basic-usage}
- **disabled** — `boolean | undefined; optional`: Disable teleport and render the component inline  {@link https://vuejs.org/guide/built-ins/teleport.html#disabling-teleport}
- **defer** — `boolean | undefined; optional`: Defer the resolving of a Teleport target until other parts of the application have mounted (requires Vue 3.5.0+)  {@link https://vuejs.org/guide/built-ins/teleport.html#deferred-teleport}
- **forceMount** — `boolean | undefined; optional`: Used to force mounting when more control is needed. Useful when controlling animation with Vue animation libraries.

### Slots

- **default** — `{}`

### Events

No events are declared.
## TooltipProvider

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Tooltip/TooltipProvider.vue)

### Props

- **delayDuration** — `number | undefined; optional; default: 700`: The duration from when the pointer enters the trigger until the tooltip gets opened.
- **skipDelayDuration** — `number | undefined; optional; default: 300`: How much time a user has to enter another trigger without incurring a delay again.
- **disableHoverableContent** — `boolean | undefined; optional; default: false`: When \`true\`, trying to hover the content will result in the tooltip closing as the pointer leaves the trigger.
- **disableClosingTrigger** — `boolean | undefined; optional`: When \`true\`, clicking on trigger will not close the content.
- **disabled** — `boolean | undefined; optional`: When \`true\`, disable tooltip
- **ignoreNonKeyboardFocus** — `boolean | undefined; optional; default: false`: Prevent the tooltip from opening if the focus did not come from the keyboard by matching against the \`:focus-visible\` selector. This is useful if you want to avoid opening it when switching browser tabs or closing a dialog.
- **content** — `TooltipContentProps | undefined; optional`: Default settings that will be used by all tooltip components.

### Slots

- **default** — `{}`

### Events

No events are declared.
## TooltipRoot

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Tooltip/TooltipRoot.vue)

### Props

- **defaultOpen** — `boolean | undefined; optional; default: false`: The open state of the tooltip when it is initially rendered. Use when you do not need to control its open state.
- **open** — `boolean | undefined; optional; default: undefined`: The controlled open state of the tooltip.
- **delayDuration** — `number | undefined; optional; default: undefined`: Override the duration given to the \`Provider\` to customise the open delay for a specific tooltip.
- **disableHoverableContent** — `boolean | undefined; optional; default: undefined`: Prevents Tooltip.Content from remaining open when hovering. Disabling this has accessibility consequences. Inherits from Tooltip.Provider.
- **disableClosingTrigger** — `boolean | undefined; optional; default: undefined`: When \`true\`, clicking on trigger will not close the content.
- **disabled** — `boolean | undefined; optional; default: undefined`: When \`true\`, disable tooltip
- **ignoreNonKeyboardFocus** — `boolean | undefined; optional; default: undefined`: Prevent the tooltip from opening if the focus did not come from the keyboard by matching against the \`:focus-visible\` selector. This is useful if you want to avoid opening it when switching browser tabs or closing a dialog.

### Slots

- **default** — `{ open: boolean; }`

### Events

- **update:open** — `[value: boolean]`
## TooltipTrigger

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Tooltip/TooltipTrigger.vue)

### Props

- **reference** — `ReferenceElement | undefined; optional`: The reference (or anchor) element that is being referred to for positioning.  If not provided will use the current component as anchor.
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional; default: "button"`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
