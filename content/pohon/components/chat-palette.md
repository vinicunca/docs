---
title: "ChatPalette"
description: "A chat palette to create a chatbot interface inside an overlay."
package: pohon
sourceTag: "v2.0.1"
sourceCommit: "ee987babf834bae617d75a9c6b9347bba1a494df"
sourceUrl: "https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/docs/content/docs/2.components/chat-palette.md"
---
## Usage

The ChatPalette component is a structured layout wrapper that organizes [ChatMessages](/pohon/components/chat-messages) in a scrollable content area and [ChatPrompt](/pohon/components/chat-prompt) in a fixed bottom section, creating cohesive chatbot interfaces for modals, slideovers, or drawers.

```vue
<template>
  <PChatPalette>
    <PChatMessages />

    <template #prompt>
      <PChatPrompt />
    </template>
  </PChatPalette>
</template>
```

## Examples

> [!TIP]
> See: /docs/components/chat
> 
> Check the **Chat** overview page for installation instructions, server setup and usage examples.

### Within a Modal

You can use the ChatPalette component inside a [Modal](/pohon/components/modal)'s content.

```vue [ChatPaletteModalExample.vue]
<script setup lang="ts">
import { isTextUIPart } from 'ai'
import type { UIMessage } from 'ai'
import { useChat } from '@ai-sdk/vue'
import { isPartStreaming } from 'pohon-ui/utils/ai'
import { Markdown } from '@comark/vue'
import shiki from '@comark/vue/plugins/shiki'
import security from '@comark/vue/plugins/security'

const plugins = [shiki(), security({ blockedTags: ['script', 'style', 'iframe', 'object', 'embed', 'form'] })]

const initialMessages: UIMessage[] = [{
  id: '1',
  role: 'user',
  parts: [{ type: 'text', text: 'What is Pohon UI?' }]
}, {
  id: '2',
  role: 'assistant',
  parts: [{ type: 'text', text: 'Pohon UI is a Vue component library built on Akar, UnoCSS, and UnoCSS Variants. It provides 125+ accessible components for building modern web apps.' }]
}]
const input = ref('')

const { messages, status, error, sendMessage } = useChat({
  messages: initialMessages
})

function onSubmit() {
  if (!input.value.trim()) return

  sendMessage({ text: input.value })

  input.value = ''
}

const ui = {
  prose: {
    p: { base: 'my-2 leading-6' },
    li: { base: 'my-0.5 leading-6' },
    ul: { base: 'my-2' },
    ol: { base: 'my-2' },
    h1: { base: 'text-xl my-2' },
    h2: { base: 'text-lg my-2' },
    h3: { base: 'text-base my-2' },
    h4: { base: 'text-sm my-2' },
    pre: { root: 'my-2' },
    table: { root: 'my-2' },
    hr: { base: 'my-2' }
  }
}
</script>

<template>
  <PModal open :ui="{ content: 'sm:max-w-3xl sm:h-[28rem]' }">
    <template #content>
      <PTheme :ui="ui">
        <PChatPalette>
          <PChatMessages
            :messages="messages"
            :status="status"
            :user="{ side: 'left', variant: 'naked', avatar: { src: 'https://github.com/benjamincanac.png', loading: 'lazy' as const } }"
            :assistant="{ icon: 'i-lucide-bot' }"
          >
            <template #content="{ message }">
              <template v-for="(part, index) in message.parts" :key="`${message.id}-${part.type}-${index}`">
                <template v-if="isTextUIPart(part)">
                  <Markdown
                    v-if="message.role === 'assistant'"
                    :value="part.text"
                    :streaming="isPartStreaming(part)"
                    :plugins="plugins"
                    class="*:first:mt-0 *:last:mb-0"
                  />
                  <p v-else-if="message.role === 'user'" class="whitespace-pre-wrap leading-6">
                    {{ part.text }}
                  </p>
                </template>
              </template>
            </template>
          </PChatMessages>

          <template #prompt>
            <PChatPrompt
              v-model="input"
              icon="i-lucide-search"
              variant="naked"
              :error="error"
              @submit="onSubmit"
            />
          </template>
        </PChatPalette>
      </PTheme>
    </template>
  </PModal>
</template>
```

### Within ContentSearch

You can use the ChatPalette component conditionally inside [ContentSearch](/pohon/components/content-search)'s content to display a chatbot interface when a user selects an item.

```vue [ChatPaletteContentSearchExample.vue]
<script setup lang="ts">
import { isTextUIPart } from 'ai'
import { useChat } from '@ai-sdk/vue'
import { isPartStreaming } from 'pohon-ui/utils/ai'
import { Markdown } from '@comark/vue'
import shiki from '@comark/vue/plugins/shiki'
import security from '@comark/vue/plugins/security'

const plugins = [shiki(), security({ blockedTags: ['script', 'style', 'iframe', 'object', 'embed', 'form'] })]

const input = ref('')

const { messages, status, error, sendMessage, regenerate } = useChat()

const groups = computed(() => [{
  id: 'ai',
  ignoreFilter: true,
  items: [{
    label: searchTerm.value ? `Ask AI for “${searchTerm.value}”` : 'Ask AI',
    icon: 'i-lucide-bot',
    onSelect: (e: any) => {
      e.preventDefault()

      ai.value = true

      if (searchTerm.value) {
        messages.value = [...messages.value, {
          id: '1',
          role: 'user',
          parts: [{ type: 'text', text: searchTerm.value }]
        }]

        regenerate()
      }
    }
  }]
}])

const ai = ref(false)
const searchTerm = ref('')

function onSubmit() {
  if (!input.value.trim()) return

  sendMessage({ text: input.value })

  input.value = ''
}

function onClose(e: Event) {
  e.preventDefault()

  ai.value = false
}

const ui = {
  prose: {
    p: { base: 'my-2 leading-6' },
    li: { base: 'my-0.5 leading-6' },
    ul: { base: 'my-2' },
    ol: { base: 'my-2' },
    h1: { base: 'text-xl my-2' },
    h2: { base: 'text-lg my-2' },
    h3: { base: 'text-base my-2' },
    h4: { base: 'text-sm my-2' },
    pre: { root: 'my-2' },
    table: { root: 'my-2' },
    hr: { base: 'my-2' }
  }
}
</script>

<template>
  <PContentSearch v-model:search-term="searchTerm" open :groups="groups">
    <template v-if="ai" #content>
      <PTheme :ui="ui">
        <PChatPalette>
          <PChatMessages
            :messages="messages"
            :status="status"
            :user="{ side: 'left', variant: 'naked', avatar: { src: 'https://github.com/benjamincanac.png', loading: 'lazy' as const } }"
            :assistant="{ icon: 'i-lucide-bot' }"
          >
            <template #content="{ message }">
              <template v-for="(part, index) in message.parts" :key="`${message.id}-${part.type}-${index}`">
                <template v-if="isTextUIPart(part)">
                  <Markdown
                    v-if="message.role === 'assistant'"
                    :value="part.text"
                    :streaming="isPartStreaming(part)"
                    :plugins="plugins"
                    class="*:first:mt-0 *:last:mb-0"
                  />
                  <p v-else-if="message.role === 'user'" class="whitespace-pre-wrap leading-6">
                    {{ part.text }}
                  </p>
                </template>
              </template>
            </template>
          </PChatMessages>

          <template #prompt>
            <PChatPrompt
              v-model="input"
              icon="i-lucide-search"
              variant="naked"
              :error="error"
              @submit="onSubmit"
              @close="onClose"
            />
          </template>
        </PChatPalette>
      </PTheme>
    </template>
  </PContentSearch>
</template>
```

## API

### Props

### Slots

## Theme

```ts [app.config.ts]
export default defineAppConfig({
  ui: {
    chatPalette: {
      slots: {
        root: 'relative flex-1 flex flex-col min-h-0 min-w-0',
        prompt: 'px-0 rounded-t-none border-t border-border',
        close: '',
        content: 'overflow-y-auto flex-1 flex flex-col py-3'
      }
    }
  }
})
```

## Changelog

See commit history for [component](https://github.com/vinicunca/pohon/commits/main/src/runtime/components/ChatPalette.vue) and [theme](https://github.com/vinicunca/pohon/commits/main/src/theme/chat-palette.ts).

---

- [GitHub](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/ChatPalette.vue)


## Sitemap

See the full [sitemap](https://pohon.vinicunca.dev/sitemap.md) for all pages.

## Generated component API

[ChatPalette source](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/ChatPalette.vue)

### Props

- **as** — `any; optional`: The element or component this component should render as.
- **ui** — `{ root?: SlotClass; prompt?: SlotClass; close?: SlotClass; content?: SlotClass; } | undefined; optional`

### Slots

- **default** — `{} | undefined`
- **prompt** — `{} | undefined`

### Events

No events are declared.
