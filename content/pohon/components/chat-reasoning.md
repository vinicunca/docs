---
title: "ChatReasoning"
description: "Display a collapsible AI reasoning or thinking process."
package: pohon
sourceTag: "v2.0.1"
sourceCommit: "ee987babf834bae617d75a9c6b9347bba1a494df"
sourceUrl: "https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/docs/content/docs/2.components/chat-reasoning.md"
---
## Usage

The ChatReasoning component renders a collapsible block that displays AI reasoning or thinking content. It auto-opens during streaming and auto-closes after.

```vue [ChatReasoningExample.vue]
<script setup lang="ts">
const streaming = ref(false)
const text = ref('')

async function simulateStreaming() {
  streaming.value = true
  text.value = ''

  const content = 'The user is asking about Vue components. I should explain the Composition API pattern and how it relates to their question about reactive state management. Let me think about the best way to structure this response.\n\nFirst, I need to consider the key differences between the Options API and Composition API. The Composition API was introduced in Vue 3 to address limitations of the Options API when building large-scale applications.\n\nFor reactive state management specifically, the Composition API offers ref() for primitive values and reactive() for objects.'

  for (const char of content) {
    text.value += char
    await new Promise(resolve => setTimeout(resolve, 10))
  }

  streaming.value = false
}

onMounted(simulateStreaming)
</script>

<template>
  <PChatReasoning
    :text="text"
    :streaming="streaming"
    class="w-60"
  />
</template>
```

> [!NOTE]
> See: /docs/composables/use-scroll-shadow
> 
> The body content uses the `useScrollShadow` composable to apply fade shadows when overflowing.

### Text

Use the `text` prop to set the reasoning content. The text is displayed inside the collapsible body.

```vue
<template>
  <UChatReasoning text="The user is asking about Vue components..." />
</template>
```

### Streaming

Use the `streaming` prop to indicate active reasoning. The component auto-opens when streaming starts and auto-closes when it ends.

```vue
<template>
  <UChatReasoning streaming text="The user is asking about Vue components..." />
</template>
```

> [!TIP]
> 
> Use the `isPartStreaming` utility from `pohon-ui/utils/ai` to determine if a part is currently being streamed.

### Shimmer

When streaming, the trigger label uses the [`ChatShimmer`](/pohon/components/chat-shimmer) component. Use the `shimmer` prop to customize its `duration` and `spread`.

```vue
<template>
  <UChatReasoning streaming text="The user is asking about Vue components..." :shimmer="{
  duration: 2,
  spread: 2
}" />
</template>
```

### Icon

Use the `icon` prop to display an [Icon](/pohon/components/icon) component next to the trigger.

```vue
<template>
  <UChatReasoning icon="i-lucide-brain" text="The user is asking about Vue components..." />
</template>
```

### Chevron

Use the `chevron` prop to change the position of the chevron icon.

> [!NOTE]
> 
> When `chevron` is set to `leading` with an `icon`, the icon swaps with the chevron on hover and when open.

```vue
<template>
  <UChatReasoning chevron="leading" icon="i-lucide-brain" text="The user is asking about Vue components..." />
</template>
```

### Chevron Icon

Use the `chevron-icon` prop to customize the chevron [Icon](/pohon/components/icon). Defaults to `i-lucide-chevron-down`.

```vue
<template>
  <UChatReasoning chevron-icon="i-lucide-arrow-down" text="The user is asking about Vue components..." />
</template>
```

**Nuxt:**

> [!TIP]
> See: /docs/getting-started/integrations/icons/nuxt#theme
> 
> You can customize this icon globally in your `app.config.ts` under `ui.icons.chevronDown` key.

**Vue:**

> [!TIP]
> See: /docs/getting-started/integrations/icons/vue#theme
> 
> You can customize this icon globally in your `vite.config.ts` under `ui.icons.chevronDown` key.

## Examples

> [!TIP]
> See: /docs/components/chat
> 
> Check the **Chat** overview page for installation instructions, server setup and usage examples.

## API

### Props

### Slots

### Emits

No events available for this component.

## Theme

```ts [app.config.ts]
export default defineAppConfig({
  ui: {
    chatReasoning: {
      slots: {
        root: '',
        trigger: [
          'group flex w-full items-center gap-1.5 color-text-muted text-sm disabled:cursor-default disabled:hover:color-text-muted hover:color-text rounded-sm outline-primary/25 focus-visible:outline-3 min-w-0',
          'transition-colors'
        ],
        leading: 'relative size-4 shrink-0',
        leadingIcon: 'size-4 shrink-0',
        chevronIcon: 'size-4 shrink-0 group-data-[state=open]:rotate-180 transition-transform duration-280',
        label: 'truncate',
        trailingIcon: 'size-4 shrink-0 group-data-[state=open]:rotate-180 transition-transform duration-280',
        content: 'data-[state=open]:animate-[collapsible-down_200ms_ease-out] data-[state=closed]:animate-[collapsible-up_200ms_ease-out] data-[state=closed]:overflow-hidden rounded-sm outline-primary/25 has-focus-visible:outline-3',
        body: 'max-h-[200px] pt-2 overflow-y-auto text-sm color-text-dimmed whitespace-pre-wrap focus:outline-none'
      },
      variants: {
        chevron: {
          leading: {
            leadingIcon: 'group-hover:opacity-0'
          },
          trailing: ''
        },
        alone: {
          false: {
            leadingIcon: [
              'absolute inset-0 group-data-[state=open]:opacity-0',
              'transition-opacity duration-280'
            ],
            chevronIcon: [
              'absolute inset-0 opacity-0 group-hover:opacity-100 group-data-[state=open]:opacity-100',
              'transition-[rotate,opacity] duration-280'
            ]
          }
        }
      }
    }
  }
})
```

## Changelog

See commit history for [component](https://github.com/vinicunca/pohon/commits/main/src/runtime/components/ChatReasoning.vue) and [theme](https://github.com/vinicunca/pohon/commits/main/src/theme/chat-reasoning.ts).

---

- [Collapsible](/akar/components/collapsible)
- [GitHub](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/ChatReasoning.vue)


## Sitemap

See the full [sitemap](https://pohon.vinicunca.dev/sitemap.md) for all pages.

## Generated component API

[ChatReasoning source](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/ChatReasoning.vue)

### Props

- **text** — `string | undefined; optional`: The reasoning text content to display.
- **streaming** — `boolean | undefined; optional; default: false`: Whether the reasoning content is currently streaming.
- **duration** — `number | undefined; optional`: The duration in seconds that the AI spent reasoning. If not provided, it will be calculated automatically based on streaming time.
- **icon** — `any; optional`: The icon displayed next to the trigger.
- **chevron** — `"leading" | "trailing" | undefined; optional; default: "trailing"`: The position of the chevron icon.
- **chevronIcon** — `any; optional`: The icon displayed as the chevron.
- **autoCloseDelay** — `number | undefined; optional; default: 500`: The delay in milliseconds before auto-closing when streaming ends. Set to \`0\` to disable auto-close.
- **shimmer** — `Partial<Omit<ChatShimmerProps, "text">> | undefined; optional`: Customize the [\`ChatShimmer\`](/pohon/components/chat-shimmer) component when streaming.
- **ui** — `{ root?: SlotClass; trigger?: SlotClass; leading?: SlotClass; leadingIcon?: SlotClass; chevronIcon?: SlotClass; label?: SlotClass; trailingIcon?: SlotClass; content?: SlotClass; body?: SlotClass; } | undefined; optional`
- **disabled** — `boolean | undefined; optional`: When \`true\`, prevents the user from interacting with the collapsible.
- **unmountOnHide** — `boolean | undefined; optional; default: false`: When \`true\`, the element will be unmounted on closed state.
- **open** — `boolean | undefined; optional; default: undefined`: The controlled open state of the collapsible. Can be binded with \`v-model\`.
- **defaultOpen** — `boolean | undefined; optional`: The open state of the collapsible when it is initially rendered. <br> Use when you do not need to control its open state.

### Slots

- **default** — `{ open: boolean; }`

### Events

- **update:open** — `[value: boolean]`
