---
title: "Drawer"
description: "Akar Drawer components, props, slots, and events."
package: akar
sourceTag: "v2.0.20"
sourceCommit: "1c7a9cb424cb223b73bb75816fc5f0706f618963"
sourceUrl: "https://github.com/vinicunca/akar/tree/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Drawer"
---

## DrawerBackdrop

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Drawer/DrawerOverlay.vue)

### Props

- **forceMount** — `boolean | undefined; optional; default: false`: Keep mounted for animation control.
- **forceRender** — `boolean | undefined; optional; default: false`: Render even when inside a nested drawer.
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
## DrawerClose

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Drawer/DrawerClose.vue)

### Props

- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional; default: "button"`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
## DrawerContent

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Drawer/DrawerContent.vue)

### Props

- **forceMount** — `boolean | undefined; optional`
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional`: The element or component this component should render as. Can be overwritten by \`asChild\`.
- **disableOutsidePointerEvents** — `boolean | undefined; optional`: When \`true\`, hover/focus/click interactions will be disabled on elements outside the \`DismissableLayer\`. Users will need to click twice on outside elements to interact with them: once to close the \`DismissableLayer\`, and again to trigger the element.
- **initialFocus** — `boolean | HTMLElement | null | undefined; optional; default: true`: Initial focus target when the drawer opens. - \`true\` / default: focus the first focusable element inside - \`false\`: do not focus anything - element ref: focus that specific element
- **finalFocus** — `boolean | HTMLElement | null | undefined; optional; default: true`: Final focus target when the drawer closes. - \`true\` / default: focus the trigger - \`false\`: do not restore focus - element ref: focus that specific element

### Slots

- **default** — `{}`

### Events

- **escapeKeyDown** — `[event: KeyboardEvent]`
- **pointerDownOutside** — `[event: PointerDownOutsideEvent]`
- **focusOutside** — `[event: FocusOutsideEvent]`
- **interactOutside** — `[event: PointerDownOutsideEvent | FocusOutsideEvent]`
- **openAutoFocus** — `[event: Event]`
- **closeAutoFocus** — `[event: Event]`
## DrawerDescription

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Drawer/DrawerDescription.vue)

### Props

- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional; default: "p"`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
## DrawerHandle

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Drawer/DrawerHandle.vue)

### Props

- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional; default: "div"`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
## DrawerIndent

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Drawer/DrawerIndent.vue)

### Props

- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional; default: "div"`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
## DrawerIndentBackground

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Drawer/DrawerIndentBackground.vue)

### Props

- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional; default: "div"`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
## DrawerOverlay

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Drawer/DrawerOverlay.vue)

### Props

- **forceMount** — `boolean | undefined; optional; default: false`: Keep mounted for animation control.
- **forceRender** — `boolean | undefined; optional; default: false`: Render even when inside a nested drawer.
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
## DrawerPopup

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Drawer/DrawerContent.vue)

### Props

- **forceMount** — `boolean | undefined; optional`
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional`: The element or component this component should render as. Can be overwritten by \`asChild\`.
- **disableOutsidePointerEvents** — `boolean | undefined; optional`: When \`true\`, hover/focus/click interactions will be disabled on elements outside the \`DismissableLayer\`. Users will need to click twice on outside elements to interact with them: once to close the \`DismissableLayer\`, and again to trigger the element.
- **initialFocus** — `boolean | HTMLElement | null | undefined; optional; default: true`: Initial focus target when the drawer opens. - \`true\` / default: focus the first focusable element inside - \`false\`: do not focus anything - element ref: focus that specific element
- **finalFocus** — `boolean | HTMLElement | null | undefined; optional; default: true`: Final focus target when the drawer closes. - \`true\` / default: focus the trigger - \`false\`: do not restore focus - element ref: focus that specific element

### Slots

- **default** — `{}`

### Events

- **escapeKeyDown** — `[event: KeyboardEvent]`
- **pointerDownOutside** — `[event: PointerDownOutsideEvent]`
- **focusOutside** — `[event: FocusOutsideEvent]`
- **interactOutside** — `[event: PointerDownOutsideEvent | FocusOutsideEvent]`
- **openAutoFocus** — `[event: Event]`
- **closeAutoFocus** — `[event: Event]`
## DrawerPortal

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Drawer/DrawerPortal.vue)

### Props

- **to** — `string | HTMLElement | undefined; optional`: Vue native teleport component prop \`:to\`  {@link https://vuejs.org/guide/built-ins/teleport.html#basic-usage}
- **disabled** — `boolean | undefined; optional`: Disable teleport and render the component inline  {@link https://vuejs.org/guide/built-ins/teleport.html#disabling-teleport}
- **defer** — `boolean | undefined; optional`: Defer the resolving of a Teleport target until other parts of the application have mounted (requires Vue 3.5.0+)  {@link https://vuejs.org/guide/built-ins/teleport.html#deferred-teleport}
- **forceMount** — `boolean | undefined; optional`: Used to force mounting when more control is needed. Useful when controlling animation with Vue animation libraries.

### Slots

- **default** — `{}`

### Events

No events are declared.
## DrawerProvider

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Drawer/DrawerProvider.vue)

### Props

No props are declared.

### Slots

- **default** — `{}`

### Events

No events are declared.
## DrawerRoot

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Drawer/DrawerRoot.vue)

### Props

- **open** — `boolean | undefined; optional; default: undefined`: v-model:open
- **defaultOpen** — `boolean | undefined; optional; default: false`
- **modal** — `DrawerModal | undefined; optional; default: true`: Modality of the drawer. - \`true\` (default): modal with focus trap, scroll lock, and outside-press dismiss - \`'trap-focus'\`: traps focus but allows outside pointer events (non-modal side panels) - \`false\`: non-modal
- **swipeDirection** — `SwipeDirection | undefined; optional; default: "down"`: Direction to swipe to dismiss.
- **snapPoints** — `DrawerSnapPoint[] | undefined; optional; default: undefined`: Preset snap positions (fractions 0-1, pixels >1, or '148px'/'30rem' strings)
- **snapPoint** — `DrawerSnapPoint | null | undefined; optional; default: undefined`: v-model:snapPoint
- **defaultSnapPoint** — `DrawerSnapPoint | null | undefined; optional; default: undefined`
- **snapToSequentialPoints** — `boolean | undefined; optional; default: false`: When true, snaps to the next sequential snap point (one step at a time). When false, snaps to the nearest snap point by distance.

### Slots

- **default** — `{ open: boolean; close: () => void; }`

### Events

- **update:open** — `[value: boolean, details?: DrawerOpenChangeDetails | undefined]`
- **update:openComplete** — `[value: boolean]`
- **update:snapPoint** — `[value: DrawerSnapPoint | null]`
## DrawerSwipeArea

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Drawer/DrawerSwipeArea.vue)

### Props

- **swipeDirection** — `SwipeDirection | undefined; optional`: Override the open swipe direction (defaults to opposite of Root's swipeDirection).
- **disabled** — `boolean | undefined; optional; default: false`: Disable swipe-to-open.
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional; default: "div"`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
## DrawerTitle

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Drawer/DrawerTitle.vue)

### Props

- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional; default: "h2"`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
## DrawerTrigger

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Drawer/DrawerTrigger.vue)

### Props

- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional; default: "button"`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
## DrawerViewport

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Drawer/DrawerViewport.vue)

### Props

- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional; default: "div"`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
## DrawerVirtualKeyboardProvider

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Drawer/DrawerVirtualKeyboardProvider.vue)

### Props

No props are declared.

### Slots

- **default** — `any`

### Events

No events are declared.
