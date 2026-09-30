---
title: "ChatShimmer"
description: "Display a text shimmer animation effect."
package: pohon
sourceTag: "v2.0.1"
sourceCommit: "ee987babf834bae617d75a9c6b9347bba1a494df"
sourceUrl: "https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/docs/content/docs/2.components/chat-shimmer.md"
---
## Usage

The ChatShimmer component renders an element with an animated shimmer gradient over text, commonly used to indicate streaming or loading states in chat interfaces.

> [!NOTE]
> 
> This component is automatically used by the [`ChatTool`](/pohon/components/chat-tool) and [`ChatReasoning`](/pohon/components/chat-reasoning) components when streaming.

> [!TIP]
> 
> The animation is automatically disabled when the user prefers reduced motion, the text is displayed as static muted text instead.

### Text

Use the `text` prop to set the shimmer text.

```vue
<template>
  <UChatShimmer text="Thinking..." />
</template>
```

### Duration

Use the `duration` prop to control the animation speed in seconds.

```vue
<template>
  <UChatShimmer text="Thinking..." :duration="4" />
</template>
```

### Spread

Use the `spread` prop to control the width of the shimmer highlight. The actual spread is computed as `text.length * spread` in pixels.

```vue
<template>
  <UChatShimmer text="Thinking..." :spread="5" />
</template>
```

## Examples

> [!TIP]
> See: /docs/components/chat
> 
> Check the **Chat** overview page for installation instructions, server setup and usage examples.

## API

### Props

## Theme

```ts [app.config.ts]
export default defineAppConfig({
  ui: {
    chatShimmer: {
      base: 'text-transparent bg-clip-text bg-no-repeat bg-size-[calc(200%+var(--spread)*2+2px)_100%,auto] bg-[image:linear-gradient(90deg,#0000_calc(50%-var(--spread)),var(--ui-text-highlighted),#0000_calc(50%+var(--spread))),linear-gradient(var(--ui-text-muted),var(--ui-text-muted))] animate-[shimmer_var(--duration)_linear_infinite] rtl:animate-[shimmer-rtl_var(--duration)_linear_infinite] will-change-[background-position]'
    }
  }
})
```

## Changelog

See commit history for [component](https://github.com/vinicunca/pohon/commits/main/src/runtime/components/ChatShimmer.vue) and [theme](https://github.com/vinicunca/pohon/commits/main/src/theme/chat-shimmer.ts).

---

- [GitHub](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/ChatShimmer.vue)


## Sitemap

See the full [sitemap](https://pohon.vinicunca.dev/sitemap.md) for all pages.

## Generated component API

[ChatShimmer source](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/ChatShimmer.vue)

### Props

- **as** — `any; optional; default: "span"`: The element or component this component should render as.
- **text** — `string; required`: The text to display with the shimmer effect.
- **duration** — `number | undefined; optional; default: 2`: The duration of the shimmer animation in seconds.
- **spread** — `number | undefined; optional; default: 2`: The spread multiplier for the shimmer highlight. The actual spread is computed as \`text.length * spread\` in pixels.
- **ui** — `{} | undefined; optional`

### Slots

No slots are declared.

### Events

No events are declared.
