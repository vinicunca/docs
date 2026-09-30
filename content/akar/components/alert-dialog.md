---
title: "AlertDialog"
description: "Akar AlertDialog components, props, slots, and events."
package: akar
sourceTag: "v2.0.20"
sourceCommit: "1c7a9cb424cb223b73bb75816fc5f0706f618963"
sourceUrl: "https://github.com/vinicunca/akar/tree/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/AlertDialog"
---

## AlertDialogAction

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/AlertDialog/AlertDialogAction.vue)

### Props

- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional; default: "button"`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
## AlertDialogCancel

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/AlertDialog/AlertDialogCancel.vue)

### Props

- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional; default: "button"`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
## AlertDialogContent

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/AlertDialog/AlertDialogContent.vue)

### Props

- **forceMount** — `boolean | undefined; optional`: Used to force mounting when more control is needed. Useful when controlling animation with Vue animation libraries.
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional`: The element or component this component should render as. Can be overwritten by \`asChild\`.
- **disableOutsidePointerEvents** — `boolean | undefined; optional; default: undefined`: When \`true\`, hover/focus/click interactions will be disabled on elements outside the \`DismissableLayer\`. Users will need to click twice on outside elements to interact with them: once to close the \`DismissableLayer\`, and again to trigger the element.

### Slots

- **default** — `{}`

### Events

- **escapeKeyDown** — `[event: KeyboardEvent]`
- **pointerDownOutside** — `[event: PointerDownOutsideEvent]`
- **focusOutside** — `[event: FocusOutsideEvent]`
- **interactOutside** — `[event: PointerDownOutsideEvent | FocusOutsideEvent]`
- **openAutoFocus** — `[event: Event]`
- **closeAutoFocus** — `[event: Event]`
## AlertDialogDescription

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/AlertDialog/AlertDialogDescription.vue)

### Props

- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional; default: "p"`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
## AlertDialogOverlay

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/AlertDialog/AlertDialogOverlay.vue)

### Props

- **forceMount** — `boolean | undefined; optional`: Used to force mounting when more control is needed. Useful when controlling animation with Vue animation libraries.
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
## AlertDialogPortal

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/AlertDialog/AlertDialogPortal.vue)

### Props

- **to** — `string | HTMLElement | undefined; optional`: Vue native teleport component prop \`:to\`  {@link https://vuejs.org/guide/built-ins/teleport.html#basic-usage}
- **disabled** — `boolean | undefined; optional`: Disable teleport and render the component inline  {@link https://vuejs.org/guide/built-ins/teleport.html#disabling-teleport}
- **defer** — `boolean | undefined; optional`: Defer the resolving of a Teleport target until other parts of the application have mounted (requires Vue 3.5.0+)  {@link https://vuejs.org/guide/built-ins/teleport.html#deferred-teleport}
- **forceMount** — `boolean | undefined; optional`: Used to force mounting when more control is needed. Useful when controlling animation with Vue animation libraries.

### Slots

- **default** — `{}`

### Events

No events are declared.
## AlertDialogRoot

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/AlertDialog/AlertDialogRoot.vue)

### Props

- **open** — `boolean | undefined; optional`: The controlled open state of the dialog. Can be binded as \`v-model:open\`.
- **defaultOpen** — `boolean | undefined; optional`: The open state of the dialog when it is initially rendered. Use when you do not need to control its open state.
- **unmountOnHide** — `boolean | undefined; optional`: When set to \`false\`, the dialog content will not be unmounted when closed, but instead hidden with CSS. <br> Useful for SEO or when you want to improve performance by not remounting the component on every open.

### Slots

- **default** — `{ open: boolean; close: () => void; }`

### Events

- **update:open** — `[value: boolean]`
## AlertDialogTitle

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/AlertDialog/AlertDialogTitle.vue)

### Props

- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional; default: "h2"`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
## AlertDialogTrigger

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/AlertDialog/AlertDialogTrigger.vue)

### Props

- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional; default: "button"`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
