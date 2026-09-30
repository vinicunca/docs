---
title: "ConfigProvider"
description: "Akar ConfigProvider components, props, slots, and events."
package: akar
sourceTag: "v2.0.20"
sourceCommit: "1c7a9cb424cb223b73bb75816fc5f0706f618963"
sourceUrl: "https://github.com/vinicunca/akar/tree/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/ConfigProvider"
---

## ConfigProvider

[Source](https://github.com/vinicunca/akar/blob/1c7a9cb424cb223b73bb75816fc5f0706f618963/packages/core/src/ConfigProvider/ConfigProvider.vue)

### Props

- **dir** — `Direction | undefined; optional; default: "ltr"`: The global reading direction of your application. This will be inherited by all primitives.
- **locale** — `string | undefined; optional; default: "en"`: The global locale of your application. This will be inherited by all primitives.
- **scrollBody** — `boolean | ScrollBodyOption | undefined; optional; default: true`: The global scroll body behavior of your application. This will be inherited by the related primitives.
- **nonce** — `string | undefined; optional; default: undefined`: The global \`nonce\` value of your application. This will be inherited by the related primitives.
- **teleportTo** — `string | HTMLElement | undefined; optional`: The global default teleport target for all portalled primitives (e.g. \`Dialog\`, \`Popover\`, \`Tooltip\`). Individual \`*Portal\` components can still override this via their own \`to\` prop. Useful when rendering inside a custom element / shadow DOM.
- **useId** — `(() => string) | undefined; optional; default: undefined`: The global \`useId\` injection as a workaround for preventing hydration issue.

### Slots

- **default** — `{}`

### Events

No events are declared.
