---
title: "Toast"
description: "Akar Toast components, props, slots, and events."
package: akar
sourceTag: "v2.0.20"
sourceCommit: "1c7a9cb424cb223b73bb75816fc5f0706f618963"
sourceUrl: "https://github.com/vinicunca/akar/tree/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Toast"
---

## ToastAction

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Toast/ToastAction.vue)

### Props

- **altText** — `string; required`: A short description for an alternate way to carry out the action. For screen reader users who will not be able to navigate to the button easily/quickly.
- **closeOnClick** — `boolean | undefined; optional; default: true`: Whether the action should close the toast when clicked.
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional; default: "button"`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
## ToastClose

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Toast/ToastClose.vue)

### Props

- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional; default: "button"`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
## ToastDescription

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Toast/ToastDescription.vue)

### Props

- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
## ToastPortal

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Toast/ToastPortal.vue)

### Props

- **to** — `string | HTMLElement | undefined; optional`: Vue native teleport component prop \`:to\`  {@link https://vuejs.org/guide/built-ins/teleport.html#basic-usage}
- **disabled** — `boolean | undefined; optional`: Disable teleport and render the component inline  {@link https://vuejs.org/guide/built-ins/teleport.html#disabling-teleport}
- **defer** — `boolean | undefined; optional`: Defer the resolving of a Teleport target until other parts of the application have mounted (requires Vue 3.5.0+)  {@link https://vuejs.org/guide/built-ins/teleport.html#deferred-teleport}
- **forceMount** — `boolean | undefined; optional`: Used to force mounting when more control is needed. Useful when controlling animation with Vue animation libraries.

### Slots

- **default** — `{}`

### Events

No events are declared.
## ToastProvider

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Toast/ToastProvider.vue)

### Props

- **label** — `string | undefined; optional; default: "Notification"`: An author-localized label for each toast. Used to help screen reader users associate the interruption with a toast.
- **duration** — `number | undefined; optional; default: 5000`: Time in milliseconds that each toast should remain visible for.
- **disableSwipe** — `boolean | undefined; optional`: Whether to disable the ability to swipe to close the toast.
- **swipeDirection** — `SwipeDirection | undefined; optional; default: "right"`: Direction of pointer swipe that should close the toast.
- **swipeThreshold** — `number | undefined; optional; default: 50`: Distance in pixels that the swipe must pass before a close is triggered.

### Slots

- **default** — `{}`

### Events

No events are declared.
## ToastRoot

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Toast/ToastRoot.vue)

### Props

- **defaultOpen** — `boolean | undefined; optional; default: true`: The open state of the dialog when it is initially rendered. Use when you do not need to control its open state.
- **forceMount** — `boolean | undefined; optional`: Used to force mounting when more control is needed. Useful when controlling animation with Vue animation libraries.
- **type** — `"foreground" | "background" | undefined; optional; default: "foreground"`: Control the sensitivity of the toast for accessibility purposes.  For toasts that are the result of a user action, choose \`foreground\`. Toasts generated from background tasks should use \`background\`.
- **open** — `boolean | undefined; optional; default: undefined`: The controlled open state of the dialog. Can be bind as \`v-model:open\`.
- **duration** — `number | undefined; optional`: Time in milliseconds that toast should remain visible for. Overrides value given to \`ToastProvider\`.
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional; default: "li"`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{ open: boolean; remaining: number; duration: number; }`

### Events

- **escapeKeyDown** — `[event: KeyboardEvent]`
- **update:open** — `[value: boolean]`
- **pause** — `[]`
- **resume** — `[]`
- **swipeStart** — `[event: SwipeEvent]`
- **swipeMove** — `[event: SwipeEvent]`
- **swipeCancel** — `[event: SwipeEvent]`
- **swipeEnd** — `[event: SwipeEvent]`
## ToastTitle

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Toast/ToastTitle.vue)

### Props

- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
## ToastViewport

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Toast/ToastViewport.vue)

### Props

- **hotkey** — `string[] | undefined; optional; default: ["F8"]`: The keys to use as the keyboard shortcut that will move focus to the toast viewport.
- **label** — `string | ((hotkey: string) => string) | undefined; optional; default: "Notifications ({hotkey})"`: An author-localized label for the toast viewport to provide context for screen reader users when navigating page landmarks. The available \`{hotkey}\` placeholder will be replaced for you. Alternatively, you can pass in a custom function to generate the label.
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional; default: "ol"`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
