<script setup lang="ts">
import type { UIMessage } from 'ai'
import { isTextUIPart } from 'ai'
import { useChat } from '@ai-sdk/vue'
import { isPartStreaming } from 'pohon-ui/utils/ai'
import { Markdown } from '@comark/vue'
import shiki from '@comark/vue/plugins/shiki'
import security from '@comark/vue/plugins/security'

const plugins = [shiki(), security({ blockedTags: ['script', 'style', 'iframe', 'object', 'embed', 'form'] })]

const open = ref(true)
const input = ref('')

const initialMessages: UIMessage[] = [{
  id: '1',
  role: 'user',
  parts: [{ type: 'text', text: 'What is Pohon UI?' }]
}, {
  id: '2',
  role: 'assistant',
  parts: [{ type: 'text', text: 'Pohon UI is a Vue component library built on Akar, UnoCSS, and UnoCSS Variants. It provides 125+ accessible components for building modern web apps.' }]
}]

const { messages, status, error, sendMessage, regenerate, stop } = useChat({
  messages: initialMessages
})

function onSubmit() {
  if (!input.value.trim()) return

  sendMessage({ text: input.value })

  input.value = ''
}

const ui = {
  prose: {
    p: { base: 'my-2 text-sm/6' },
    li: { base: 'my-0.5 text-sm/6' },
    ul: { base: 'my-2' },
    ol: { base: 'my-2' },
    h1: { base: 'text-xl mb-4' },
    h2: { base: 'text-lg mt-6 mb-3' },
    h3: { base: 'text-base mt-4 mb-2' },
    h4: { base: 'text-sm mt-3 mb-1.5' },
    code: { base: 'text-xs' },
    pre: { root: 'my-2', base: 'text-xs/5' },
    table: { root: 'my-2' },
    hr: { base: 'my-4' }
  }
}
</script>

<template>
  <div class="flex flex-1">
    <div class="flex-1 flex flex-col">
      <div class="h-(--ui-header-height) shrink-0 flex items-center justify-end px-4 border-b border-border">
        <PButton
          icon="i-lucide-panel-right"
          color="neutral"
          variant="ghost"
          aria-label="Toggle sidebar"
          @click="open = !open"
        />
      </div>

      <div class="flex-1 p-4">
        <Placeholder class="size-full" />
      </div>
    </div>

    <PSidebar
      v-model:open="open"
      side="right"
      title="AI Chat"
      close
      :style="{ '--sidebar-width': '20rem' }"
      :ui="{ container: 'h-full' }"
    >
      <PTheme :ui="ui">
        <PChatMessages
          :messages="messages"
          :status="status"
          compact
          class="px-0"
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
                <p v-else-if="message.role === 'user'" class="whitespace-pre-wrap text-sm/6">
                  {{ part.text }}
                </p>
              </template>
            </template>
          </template>
        </PChatMessages>
      </PTheme>

      <template #footer>
        <PChatPrompt
          v-model="input"
          :error="error"
          :autofocus="false"
          variant="subtle"
          size="sm"
          @submit="onSubmit"
        >
          <PChatPromptSubmit
            size="sm"
            :status="status"
            @stop="stop()"
            @reload="regenerate()"
          />
        </PChatPrompt>
      </template>
    </PSidebar>
  </div>
</template>
