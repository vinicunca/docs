---
title: "Separator"
description: "Akar Separator components, props, slots, and events."
package: akar
sourceTag: "v2.0.20"
sourceCommit: "1c7a9cb424cb223b73bb75816fc5f0706f618963"
sourceUrl: "https://github.com/vinicunca/akar/tree/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Separator"
---

## Separator

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/Separator/Separator.vue)

### Props

- **orientation** — `DataOrientation | undefined; optional; default: "horizontal"`: Orientation of the component.  Either \`vertical\` or \`horizontal\`. Defaults to \`horizontal\`.
- **decorative** — `boolean | undefined; optional`: Whether or not the component is purely decorative. <br>When \`true\`, accessibility-related attributes are updated so that that the rendered element is removed from the accessibility tree.
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{}`

### Events

No events are declared.
