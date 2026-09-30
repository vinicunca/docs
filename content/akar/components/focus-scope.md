---
title: "FocusScope"
description: "Akar FocusScope components, props, slots, and events."
package: akar
sourceTag: "v2.0.20"
sourceCommit: "1c7a9cb424cb223b73bb75816fc5f0706f618963"
sourceUrl: "https://github.com/vinicunca/akar/tree/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/FocusScope"
---

## FocusScope

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/FocusScope/FocusScope.vue)

### Props

- **loop** — `boolean | undefined; optional; default: false`: When \`true\`, tabbing from last item will focus first tabbable and shift+tab from first item will focus last tababble.
- **trapped** — `boolean | undefined; optional; default: false`: When \`true\`, focus cannot escape the focus scope via keyboard, pointer, or a programmatic focus.
- **present** — `boolean | undefined; optional; default: true`: Whether the scope is currently visible. Lets a consumer keep the scope mounted but hidden (e.g. \`display: none\`) and still get correct auto-focus: the mount auto-focus is skipped while not present, and re-runs when it becomes present again. Defaults to \`true\` so consumers that mount the scope only while visible are unaffected.
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

- **mountAutoFocus** — `[event: Event]`
- **unmountAutoFocus** — `[event: Event]`
