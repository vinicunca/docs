---
title: "NavigationMenu"
description: "Akar NavigationMenu components, props, slots, and events."
package: akar
sourceTag: "v2.0.20"
sourceCommit: "1c7a9cb424cb223b73bb75816fc5f0706f618963"
sourceUrl: "https://github.com/vinicunca/akar/tree/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/NavigationMenu"
---

## NavigationMenuContent

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/NavigationMenu/NavigationMenuContent.vue)

### Props

- **forceMount** — `boolean | undefined; optional`: Used to force mounting when more control is needed. Useful when controlling animation with Vue animation libraries.
- **disableOutsidePointerEvents** — `boolean | undefined; optional`: When \`true\`, hover/focus/click interactions will be disabled on elements outside the \`DismissableLayer\`. Users will need to click twice on outside elements to interact with them: once to close the \`DismissableLayer\`, and again to trigger the element.
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

- **escapeKeyDown** — `[event: KeyboardEvent]`
- **pointerDownOutside** — `[event: PointerDownOutsideEvent]`
- **focusOutside** — `[event: FocusOutsideEvent]`
- **interactOutside** — `[event: PointerDownOutsideEvent | FocusOutsideEvent]`
## NavigationMenuIndicator

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/NavigationMenu/NavigationMenuIndicator.vue)

### Props

- **forceMount** — `boolean | undefined; optional`: Used to force mounting when more control is needed. Useful when controlling animation with Vue animation libraries.
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
## NavigationMenuItem

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/NavigationMenu/NavigationMenuItem.vue)

### Props

- **value** — `string | undefined; optional`: A unique value that associates the item with an active value when the navigation menu is controlled.   This prop is managed automatically when uncontrolled.
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional; default: "li"`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
## NavigationMenuLink

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/NavigationMenu/NavigationMenuLink.vue)

### Props

- **active** — `boolean | undefined; optional`: Used to identify the link as the currently active page.
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional; default: "a"`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

- **select** — `[payload: CustomEvent<{ originalEvent: Event; }>]`
## NavigationMenuList

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/NavigationMenu/NavigationMenuList.vue)

### Props

- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional; default: "ul"`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
## NavigationMenuRoot

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/NavigationMenu/NavigationMenuRoot.vue)

### Props

- **modelValue** — `string | undefined; optional; default: undefined`: The controlled value of the menu item to activate. Can be used as \`v-model\`.
- **defaultValue** — `string | undefined; optional`: The value of the menu item that should be active when initially rendered.  Use when you do not need to control the value state.
- **dir** — `Direction | undefined; optional`: The reading direction of the combobox when applicable.   If omitted, inherits globally from \`ConfigProvider\` or assumes LTR (left-to-right) reading mode.
- **orientation** — `Orientation | undefined; optional; default: "horizontal"`: The orientation of the menu.
- **delayDuration** — `number | undefined; optional; default: 200`: The duration from when the pointer enters the trigger until the tooltip gets opened.
- **skipDelayDuration** — `number | undefined; optional; default: 300`: How much time a user has to enter another trigger without incurring a delay again.
- **disableClickTrigger** — `boolean | undefined; optional; default: false`: If \`true\`, menu cannot be open by click on trigger
- **disableHoverTrigger** — `boolean | undefined; optional; default: false`: If \`true\`, menu cannot be open by hover on trigger
- **disablePointerLeaveClose** — `boolean | undefined; optional`: If \`true\`, menu will not close during pointer leave event
- **unmountOnHide** — `boolean | undefined; optional; default: true`: When \`true\`, the element will be unmounted on closed state.
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional; default: "nav"`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{ modelValue: string; }`

### Events

- **update:modelValue** — `[value: string]`
## NavigationMenuSub

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/NavigationMenu/NavigationMenuSub.vue)

### Props

- **modelValue** — `string | undefined; optional`: The controlled value of the sub menu item to activate. Can be used as \`v-model\`.
- **defaultValue** — `string | undefined; optional`: The value of the menu item that should be active when initially rendered.  Use when you do not need to control the value state.
- **orientation** — `Orientation | undefined; optional; default: "horizontal"`: The orientation of the menu.
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{ modelValue: string; }`

### Events

- **update:modelValue** — `[value: string]`
## NavigationMenuTrigger

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/NavigationMenu/NavigationMenuTrigger.vue)

### Props

- **disabled** — `boolean | undefined; optional`: When \`true\`, prevents the user from interacting with item
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional; default: "button"`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
## NavigationMenuViewport

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/NavigationMenu/NavigationMenuViewport.vue)

### Props

- **forceMount** — `boolean | undefined; optional`: Used to force mounting when more control is needed. Useful when controlling animation with Vue animation libraries.
- **align** — `"start" | "center" | "end" | undefined; optional; default: "center"`: Placement of the viewport for css variables \`(--akar-navigation-menu-viewport-left, --akar-navigation-menu-viewport-top)\`.
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
