---
title: "ColorSwatch"
description: "Akar ColorSwatch components, props, slots, and events."
package: akar
sourceTag: "v2.0.20"
sourceCommit: "1c7a9cb424cb223b73bb75816fc5f0706f618963"
sourceUrl: "https://github.com/vinicunca/akar/tree/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/ColorSwatch"
---

## ColorSwatch

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/ColorSwatch/ColorSwatch.vue)

### Props

- **color** — `string | Color | undefined; optional; default: ""`: The color to display in the swatch as a hex string or Color object. Example: \`#16a372\`, \`#ff5733\`, or \`{ space: 'hsl', h: 120, s: 100, l: 50, alpha: 1 }\`.
- **label** — `string | undefined; optional`: Optional accessible label for the color. If omitted, the color name will be derived from the color value.
- **asChild** — `boolean | undefined; optional`: Change the default rendered element for the one passed as a child, merging their props and behavior.  Read our [Composition](https://akar.vinicunca.dev/docs/guides/composition) guide for more details.
- **as** — `AsTag | Component | undefined; optional; default: "div"`: The element or component this component should render as. Can be overwritten by \`asChild\`.

### Slots

- **default** — `{ color: string; alpha: number; }`

### Events

No events are declared.
