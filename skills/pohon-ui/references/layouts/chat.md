# Chat Layout

Build AI chat interfaces with message streams, reasoning, tool calling, and Vercel AI SDK integration.

## When to use

- AI chatbot interfaces
- Customer support chat
- Any conversational UI with streaming responses

## Setup

### Install dependencies

**Nuxt:**

```bash
pnpm add ai @ai-sdk/gateway @ai-sdk/vue @comark/nuxt
```

**Vue (Vite):**

```bash
pnpm add ai @ai-sdk/gateway @ai-sdk/vue @comark/vue
```

### Register Comark module

**Nuxt:**

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  modules: [
    'pohon-ui',
    '@comark/nuxt'
  ]
})
```

**Vue (Vite):** No module registration needed, import directly from `@comark/vue`.

> `@comark/nuxt` (or `@comark/vue` for Vue projects) provides the `Comark` component used to render AI responses as streaming Markdown, it incrementally renders tokens as they arrive and automatically enables Pohon UI's prose components.

### Dark mode for syntax highlighting

When using the `highlight` plugin, add the following CSS to your stylesheet:

```css [main.css]
html.dark .shiki span {
  color: var(--shiki-dark) !important;
  background-color: var(--shiki-dark-bg) !important;
  font-style: var(--shiki-dark-font-style) !important;
  font-weight: var(--shiki-dark-font-weight) !important;
  text-decoration: var(--shiki-dark-text-decoration) !important;
}
```

### Server endpoint

These examples target AI SDK v7 (`instructions`, `toUIMessageStream`).

Using [Vercel AI Gateway](https://vercel.com/ai-gateway) (recommended):

```ts [server/api/chat.post.ts]
import { streamText, convertToModelMessages, toUIMessageStream, createUIMessageStreamResponse } from 'ai'
import { gateway } from '@ai-sdk/gateway'

export default defineEventHandler(async (event) => {
  const { messages } = await readBody(event)

  const result = streamText({
    model: gateway('anthropic/claude-sonnet-5'),
    instructions: 'You are a helpful assistant.',
    messages: await convertToModelMessages(messages)
  })

  const stream = toUIMessageStream({ stream: result.stream })
  return createUIMessageStreamResponse({ stream })
})
```

Or with a direct provider (e.g., `pnpm add @ai-sdk/openai`):

```ts [server/api/chat.post.ts]
import { streamText, convertToModelMessages, toUIMessageStream, createUIMessageStreamResponse } from 'ai'
import { openai } from '@ai-sdk/openai'

export default defineEventHandler(async (event) => {
  const { messages } = await readBody(event)

  const result = streamText({
    model: openai('gpt-5-nano'),
    instructions: 'You are a helpful assistant.',
    messages: await convertToModelMessages(messages)
  })

  const stream = toUIMessageStream({ stream: result.stream })
  return createUIMessageStreamResponse({ stream })
})
```

## Component tree

```
PDashboardPanel
├── #header → PDashboardNavbar
├── #body → PContainer → PChatMessages
│                         ├── #content → PChatReasoning, PChatTool, Comark
│                         └── #indicator (loading)
└── #footer → PContainer → PChatPrompt
                            └── PChatPromptSubmit
```

## Full page chat

```vue [pages/chat/[id].vue]
<script setup lang="ts">
import { isReasoningUIPart, isTextUIPart, isToolUIPart, getToolName } from 'ai'
import { useChat } from '@ai-sdk/vue'
import { isPartStreaming, isToolStreaming } from 'pohon-ui/utils/ai'
import highlight from '@comark/nuxt/plugins/highlight'

definePageMeta({ layout: 'dashboard' })

const input = ref('')

const { messages, status, error, sendMessage, stop, regenerate } = useChat({
  onError(error) {
    console.error(error)
  }
})

function onSubmit() {
  if (!input.value.trim()) return
  sendMessage({ text: input.value })
  input.value = ''
}
</script>

<template>
  <PDashboardPanel>
    <template #header>
      <PDashboardNavbar title="Chat" />
    </template>

    <template #body>
      <PContainer>
        <PChatMessages :messages="messages" :status="status">
          <template #content="{ message }">
            <template v-for="(part, index) in message.parts" :key="`${message.id}-${part.type}-${index}`">
              <PChatReasoning
                v-if="isReasoningUIPart(part)"
                :text="part.text"
                :streaming="isPartStreaming(part)"
              >
                <Comark
                  :markdown="part.text"
                  :streaming="isPartStreaming(part)"
                  :plugins="[highlight()]"
                  class="*:first:mt-0 *:last:mb-0"
                />
              </PChatReasoning>

              <PChatTool
                v-else-if="isToolUIPart(part)"
                :text="getToolName(part)"
                :streaming="isToolStreaming(part)"
              />

              <template v-else-if="isTextUIPart(part)">
                <Comark
                  v-if="message.role === 'assistant'"
                  :markdown="part.text"
                  :streaming="isPartStreaming(part)"
                  :plugins="[highlight()]"
                  class="*:first:mt-0 *:last:mb-0"
                />
                <p v-else-if="message.role === 'user'" class="whitespace-pre-wrap">
                  {{ part.text }}
                </p>
              </template>
            </template>
          </template>
        </PChatMessages>
      </PContainer>
    </template>

    <template #footer>
      <PContainer class="pb-4 sm:pb-6">
        <PChatPrompt v-model="input" :error="error" @submit="onSubmit">
          <PChatPromptSubmit :status="status" @stop="stop()" @reload="regenerate()" />
        </PChatPrompt>
      </PContainer>
    </template>
  </PDashboardPanel>
</template>
```

## Key components

- `PChatMessages` — scrollable message list with auto-scroll. Props: `messages`, `status`. Slots: `#content` (per message), `#actions`, `#indicator`.
- `PChatMessage` — individual bubble. Props: `message`, `side` (`'left'`/`'right'`).
- `PChatReasoning` — collapsible reasoning block. Auto-opens during streaming, auto-closes when done. Use `isPartStreaming(part)` from `pohon-ui/utils/ai`.
- `PChatTool` — tool invocation status. Use `isToolStreaming(part)`. Variants: `'inline'` (default), `'card'`.
- `PChatPrompt` — enhanced textarea for chat. Its typed API exposes a selected subset of `PTextarea` props, forwards additional attributes to the underlying textarea, and adds chat-specific props such as `error` and `submitOnEnter`.
- `PChatPromptSubmit` — submit button with automatic status handling (send/stop/reload).
- `PChatPalette` — layout wrapper for chat inside overlays.

## Chat in a modal

```vue
<PModal v-model:open="isOpen">
  <template #content>
    <PChatPalette>
      <PChatMessages :messages="messages" :status="status" />

      <template #prompt>
        <PChatPrompt v-model="input" @submit="onSubmit">
          <PChatPromptSubmit :status="status" />
        </PChatPrompt>
      </template>
    </PChatPalette>
  </template>
</PModal>
```

## With model selector

```vue
<PChatPrompt v-model="input" @submit="onSubmit">
  <PChatPromptSubmit :status="status" />

  <template #footer>
    <PSelect
      v-model="model"
      :icon="models.find(m => m.value === model)?.icon"
      placeholder="Select a model"
      variant="ghost"
      :items="models"
    />
  </template>
</PChatPrompt>
```

## Conversation sidebar

Combine with dashboard layout for a ChatGPT-like interface:

```vue [layouts/dashboard.vue]
<template>
  <PDashboardGroup>
    <PDashboardSidebar collapsible resizable>
      <template #header>
        <PButton icon="i-lucide-plus" label="New chat" block />
      </template>

      <template #default>
        <PNavigationMenu :items="conversations" orientation="vertical" />
      </template>
    </PDashboardSidebar>

    <slot />
  </PDashboardGroup>
</template>
```
