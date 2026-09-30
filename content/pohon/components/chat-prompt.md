---
title: "ChatPrompt"
description: "An enhanced Textarea for submitting prompts in AI chat interfaces."
package: pohon
sourceTag: "v2.0.1"
sourceCommit: "ee987babf834bae617d75a9c6b9347bba1a494df"
sourceUrl: "https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/docs/content/docs/2.components/chat-prompt.md"
---
## Usage

The ChatPrompt component renders a `<form>` element and extends the [Textarea](/pohon/components/textarea) component so you can pass any property such as `icon`, `placeholder`, `autofocus`, etc.

```vue [ChatPromptExample.vue]
<script setup lang="ts">
import type { SelectItem } from 'pohon-ui'

const input = ref('')
const model = ref('claude-opus-4.6')

const models = [
  { label: 'Claude Opus 4.6', value: 'claude-opus-4.6', icon: 'i-simple-icons-anthropic' },
  { label: 'Gemini 3 Pro', value: 'gemini-3-pro', icon: 'i-simple-icons-googlegemini' },
  { label: 'GPT-5', value: 'gpt-5', icon: 'i-simple-icons-openai' }
] satisfies SelectItem[]

function onSubmit() {
  input.value = ''
}
</script>

<template>
  <PChatPrompt v-model="input" class="w-full" @submit="onSubmit">
    <template #footer>
      <PButton icon="i-lucide-plus" color="neutral" variant="ghost" size="sm" />

      <div class="flex items-center gap-1.5">
        <PSelect
          v-model="model"
          :items="models"
          :icon="models.find(item => item.value === model)?.icon"
          placeholder="Select a model"
          variant="ghost"
          size="sm"
          square
        />

        <PChatPromptSubmit size="sm" />
      </div>
    </template>
  </PChatPrompt>
</template>
```

> [!NOTE]
> 
> The ChatPrompt handles the following events:
> 
> - The form is submitted when the user presses `Enter` or when the user clicks on the submit button. Set the `submit-on-enter` prop to `false` to submit with `Ctrl` + `Enter` (or `Cmd` + `Enter` on macOS) instead, allowing `Enter` to insert a newline.
> - The textarea is blurred when `Esc` is pressed and emits a `close` event.

### Variant

Use the `variant` prop to change the style of the prompt. Defaults to `outline`.

```vue
<template>
  <UChatPrompt variant="soft" />
</template>
```

## Examples

> [!TIP]
> See: /docs/components/chat
> 
> Check the **Chat** overview page for installation instructions, server setup and usage examples.

### With an Editor

Compose the `#header`, `#body` and `#footer` slots to build a rich prompt: file attachments, an [Editor](/pohon/components/editor) with `@` mentions and `/` commands through [EditorMentionMenu](/pohon/components/editor-mention-menu), and a mode selector.

```vue [ChatPromptEditorExample.vue]
<script setup lang="ts">
import { Extension } from '@tiptap/core'
import type { EditorMentionMenuItem, SelectItem } from 'pohon-ui'

const input = ref('')
const mode = ref('auto')
const attachments = ref<{ name: string, src?: string }[]>([])
const fileInputRef = useTemplateRef('fileInputRef')

const files: EditorMentionMenuItem[] = [
  { label: 'app.vue', icon: 'i-vscode-icons-file-type-vue' },
  { label: 'nuxt.config.ts', icon: 'i-vscode-icons-file-type-nuxt' },
  { label: 'package.json', icon: 'i-vscode-icons-file-type-json' },
  { label: 'README.md', icon: 'i-vscode-icons-file-type-markdown' },
  { label: 'AuthForm.vue', icon: 'i-vscode-icons-file-type-vue' },
  { label: 'useChat.ts', icon: 'i-vscode-icons-file-type-typescript' }
]

const commands: EditorMentionMenuItem[] = [
  { label: 'init', icon: 'i-lucide-sparkles' },
  { label: 'review', icon: 'i-lucide-search-code' },
  { label: 'security-review', icon: 'i-lucide-shield-check' },
  { label: 'clear', icon: 'i-lucide-eraser' },
  { label: 'compact', icon: 'i-lucide-fold-vertical' },
  { label: 'config', icon: 'i-lucide-settings' }
]

const modes = [
  { label: 'Manual', value: 'manual', icon: 'i-lucide-hand' },
  { label: 'Edit automatically', value: 'edit', icon: 'i-lucide-code-xml' },
  { label: 'Plan mode', value: 'plan', icon: 'i-lucide-list-checks' },
  { label: 'Auto mode', value: 'auto', icon: 'i-lucide-zap' }
] satisfies SelectItem[]

// SSR-safe target so the menus aren't clipped by overflow
const appendToBody = false ? () => document.body : undefined

function onFilesChange(event: Event) {
  const target = event.target as HTMLInputElement
  for (const file of Array.from(target.files ?? [])) {
    attachments.value.push({
      name: file.name,
      src: file.type.startsWith('image/') ? URL.createObjectURL(file) : undefined
    })
  }
  target.value = ''
}

function onSubmit() {
  console.log('submit', input.value)

  input.value = ''
  attachments.value = []
}
</script>

<template>
  <PChatPrompt
    v-model="input"
    class="w-full p-0 gap-0"
    placeholder="Press / to open the command menu"
    :ui="{
      header: 'px-2.5 py-2 border-b border-border',
      footer: 'px-2.5 py-2 border-t border-border'
    }"
    @submit="onSubmit"
  >
    <template v-if="attachments.length" #header>
      <PButton
        v-for="(file, index) in attachments"
        :key="index"
        :label="file.name"
        :avatar="file.src ? { src: file.src } : undefined"
        :icon="file.src ? undefined : 'i-lucide-file'"
        color="neutral"
        variant="soft"
        size="xs"
        square
        trailing-icon="i-lucide-x"
        @click="attachments.splice(index, 1)"
      />
    </template>

    <template #body="{ submit, placeholder }">
      <PEditor
        v-slot="{ editor }"
        v-model="input"
        content-type="markdown"
        :starter-kit="false"
        :placeholder="placeholder"
        class="w-full min-h-12"
        :ui="{ base: 'p-2.5! [&_.mention]:bg-primary/5 [&_.mention]:rounded-sm [&_.mention]:px-0.5 [&_.mention]:py-0.25' }"
        :extensions="[Extension.create({
          name: 'chatPromptSubmit',
          priority: 1000,
          addKeyboardShortcuts: () => ({ Enter: () => (submit(), true) })
        })]"
      >
        <PEditorMentionMenu :editor="editor" char="@" plugin-key="mention" :items="files" :append-to="appendToBody" />
        <PEditorMentionMenu :editor="editor" char="/" plugin-key="command" :items="commands" :append-to="appendToBody" />
      </PEditor>
    </template>

    <template #footer>
      <div class="flex items-center gap-0.5">
        <PButton
          icon="i-lucide-plus"
          color="neutral"
          variant="ghost"
          aria-label="Attach files"
          size="sm"
          @click="fileInputRef?.click()"
        />
        <input ref="fileInputRef" type="file" multiple class="hidden" @change="onFilesChange">
      </div>

      <div class="flex items-center gap-1">
        <PSelect
          v-model="mode"
          :items="modes"
          :icon="modes.find(item => item.value === mode)?.icon"
          color="neutral"
          variant="ghost"
          size="sm"
          square
        />

        <PChatPromptSubmit size="sm" :disabled="!input.trim()" />
      </div>
    </template>
  </PChatPrompt>
</template>
```

> [!NOTE]
> 
> The `#body` slot replaces the internal textarea and exposes `submit` and `close` handlers, so you can wire the editor's keyboard shortcuts to the form. When a mention menu is open, pressing `Enter` selects the highlighted item instead of submitting.

### As home page

You can also use it in your chat interface home page.

```vue [pages/index.vue]
<script setup lang="ts">
import { useChat } from '@ai-sdk/vue'

const input = ref('')

const { messages, status, sendMessage } = useChat()

async function onSubmit() {
  sendMessage({ text: input.value })

  // Navigate to chat page after first message
  if (messages.value.length === 1) {
    await navigateTo('/chat')
  }
}
</script>

<template>
  <PDashboardPanel>
    <template #body>
      <PContainer>
        <h1>How can I help you today?</h1>

        <PChatPrompt v-model="input" @submit="onSubmit">
          <PChatPromptSubmit :status="status" />
        </PChatPrompt>
      </PContainer>
    </template>
  </PDashboardPanel>
</template>
```

## API

### Props

> [!NOTE]
> See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/textarea#attributes
> 
> This component also supports all native `<textarea>` HTML attributes.

### Slots

### Emits

No events available for this component.

### Expose

When accessing the component via a template ref, you can use the following:

| Name | Type |
| --- | --- |
| `textareaRef` | `Ref<HTMLTextAreaElement \| null>` |

## Theme

```ts [app.config.ts]
export default defineAppConfig({
  ui: {
    chatPrompt: {
      slots: {
        root: 'relative flex flex-col items-stretch gap-2 px-2.5 py-2 w-full rounded-lg backdrop-blur-sm',
        header: 'flex items-center gap-1.5',
        body: 'items-start gap-1.5',
        footer: 'flex items-center justify-between gap-1.5',
        base: 'px-0'
      },
      variants: {
        color: {
          primary: '',
          secondary: '',
          success: '',
          info: '',
          warning: '',
          error: '',
          neutral: ''
        },
        variant: {
          outline: {
            root: 'bg-background/75 ring ring-ring'
          },
          soft: {
            root: 'bg-background-elevated/50'
          },
          subtle: {
            root: 'bg-background-elevated/50 ring ring-ring'
          },
          naked: {
            root: ''
          }
        }
      },
      compoundVariants: [
        {
          color: 'primary',
          variant: [
            'outline',
            'subtle'
          ],
          class: {
            root: 'outline-primary/25 has-[textarea:focus-visible]:outline-3 has-[textarea:focus-visible]:ring-primary has-[[contenteditable]:focus-visible]:outline-3 has-[[contenteditable]:focus-visible]:ring-primary'
          }
        },
        {
          color: 'secondary',
          variant: [
            'outline',
            'subtle'
          ],
          class: {
            root: 'outline-secondary/25 has-[textarea:focus-visible]:outline-3 has-[textarea:focus-visible]:ring-secondary has-[[contenteditable]:focus-visible]:outline-3 has-[[contenteditable]:focus-visible]:ring-secondary'
          }
        },
        {
          color: 'success',
          variant: [
            'outline',
            'subtle'
          ],
          class: {
            root: 'outline-success/25 has-[textarea:focus-visible]:outline-3 has-[textarea:focus-visible]:ring-success has-[[contenteditable]:focus-visible]:outline-3 has-[[contenteditable]:focus-visible]:ring-success'
          }
        },
        {
          color: 'info',
          variant: [
            'outline',
            'subtle'
          ],
          class: {
            root: 'outline-info/25 has-[textarea:focus-visible]:outline-3 has-[textarea:focus-visible]:ring-info has-[[contenteditable]:focus-visible]:outline-3 has-[[contenteditable]:focus-visible]:ring-info'
          }
        },
        {
          color: 'warning',
          variant: [
            'outline',
            'subtle'
          ],
          class: {
            root: 'outline-warning/25 has-[textarea:focus-visible]:outline-3 has-[textarea:focus-visible]:ring-warning has-[[contenteditable]:focus-visible]:outline-3 has-[[contenteditable]:focus-visible]:ring-warning'
          }
        },
        {
          color: 'error',
          variant: [
            'outline',
            'subtle'
          ],
          class: {
            root: 'outline-error/25 has-[textarea:focus-visible]:outline-3 has-[textarea:focus-visible]:ring-error has-[[contenteditable]:focus-visible]:outline-3 has-[[contenteditable]:focus-visible]:ring-error'
          }
        },
        {
          color: 'primary',
          variant: 'soft',
          class: {
            root: 'outline-primary/25 has-[textarea:focus-visible]:outline-3 has-[[contenteditable]:focus-visible]:outline-3'
          }
        },
        {
          color: 'secondary',
          variant: 'soft',
          class: {
            root: 'outline-secondary/25 has-[textarea:focus-visible]:outline-3 has-[[contenteditable]:focus-visible]:outline-3'
          }
        },
        {
          color: 'success',
          variant: 'soft',
          class: {
            root: 'outline-success/25 has-[textarea:focus-visible]:outline-3 has-[[contenteditable]:focus-visible]:outline-3'
          }
        },
        {
          color: 'info',
          variant: 'soft',
          class: {
            root: 'outline-info/25 has-[textarea:focus-visible]:outline-3 has-[[contenteditable]:focus-visible]:outline-3'
          }
        },
        {
          color: 'warning',
          variant: 'soft',
          class: {
            root: 'outline-warning/25 has-[textarea:focus-visible]:outline-3 has-[[contenteditable]:focus-visible]:outline-3'
          }
        },
        {
          color: 'error',
          variant: 'soft',
          class: {
            root: 'outline-error/25 has-[textarea:focus-visible]:outline-3 has-[[contenteditable]:focus-visible]:outline-3'
          }
        },
        {
          color: 'neutral',
          variant: [
            'outline',
            'subtle'
          ],
          class: {
            root: 'outline-outline-inverted/25 has-[textarea:focus-visible]:outline-3 has-[textarea:focus-visible]:ring-ring-inverted has-[[contenteditable]:focus-visible]:outline-3 has-[[contenteditable]:focus-visible]:ring-ring-inverted'
          }
        },
        {
          color: 'neutral',
          variant: 'soft',
          class: {
            root: 'outline-outline-inverted/25 has-[textarea:focus-visible]:outline-3 has-[[contenteditable]:focus-visible]:outline-3'
          }
        }
      ],
      defaultVariants: {
        color: 'primary',
        variant: 'outline'
      }
    }
  }
})
```

## Changelog

See commit history for [component](https://github.com/vinicunca/pohon/commits/main/src/runtime/components/ChatPrompt.vue) and [theme](https://github.com/vinicunca/pohon/commits/main/src/theme/chat-prompt.ts).

---

- [Textarea](/pohon/components/textarea)
- [GitHub](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/ChatPrompt.vue)


## Sitemap

See the full [sitemap](https://pohon.vinicunca.dev/sitemap.md) for all pages.

## Generated component API

[ChatPrompt source](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/ChatPrompt.vue)

### Props

- **as** — `any; optional; default: "form"`: The element or component this component should render as.
- **placeholder** — `string | undefined; optional`: The placeholder text for the textarea.
- **color** — `"primary" | "secondary" | "success" | "info" | "warning" | "error" | "neutral" | undefined; optional`
- **variant** — `"outline" | "soft" | "subtle" | "naked" | undefined; optional`
- **submitOnEnter** — `boolean | undefined; optional; default: true`: When \`true\`, pressing \`Enter\` submits and \`Shift+Enter\` inserts a newline. When \`false\`, pressing \`Enter\` inserts a newline and \`Ctrl+Enter\` / \`Cmd+Enter\` submits.
- **error** — `Error | undefined; optional`
- **ui** — `({ root?: SlotClass; header?: SlotClass; body?: SlotClass; footer?: SlotClass; base?: SlotClass; } & { root?: SlotClass; base?: SlotClass; leading?: SlotClass; leadingIcon?: SlotClass; leadingAvatar?: SlotClass; leadingAvatarSize?: SlotClass; trailing?: SlotClass; trailingIcon?: SlotClass; }) | undefined; optional`
- **disabled** — `boolean | undefined; optional`
- **icon** — `any; optional`: Display an icon based on the \`leading\` and \`trailing\` props.
- **avatar** — `AvatarProps | undefined; optional`: Display an avatar on the left side.
- **loading** — `boolean | undefined; optional`: When \`true\`, the loading icon will be displayed.
- **autofocus** — `boolean | undefined; optional; default: true`
- **loadingIcon** — `any; optional`: The icon when the \`loading\` prop is \`true\`.
- **autofocusDelay** — `number | undefined; optional`
- **rows** — `number | undefined; optional; default: 1`
- **autoresize** — `boolean | undefined; optional; default: true`
- **autoresizeDelay** — `number | undefined; optional`
- **maxrows** — `number | undefined; optional`
- **modelValue** — `string | undefined; optional; default: ""`

### Slots

- **header** — `{} | undefined`
- **footer** — `{} | undefined`
- **body** — `{ submit: (event?: Event | undefined) => void; close: (event?: Event | undefined) => void; placeholder: string; disabled: boolean; ui: any; }`: Replace the internal textarea, e.g. to render an [Editor](/pohon/components/editor) with mentions.
- **leading** — `{ ui: { root: (props?: Record<string, any> | undefined) => string | undefined; base: (props?: Record<string, any> | undefined) => string | undefined; leading: (props?: Record<string, any> | undefined) => string | undefined; leadingIcon: (props?: Record<string, any> | undefined) => string | undefined; leadingAvatar: (props?: Record<string, any> | undefined) => string | undefined; leadingAvatarSize: (props?: Record<string, any> | undefined) => string | undefined; trailing: (props?: Record<string, any> | undefined) => string | undefined; trailingIcon: (props?: Record<string, any> | undefined) => string | undefined; }; }`
- **default** — `{ ui: { root: (props?: Record<string, any> | undefined) => string | undefined; base: (props?: Record<string, any> | undefined) => string | undefined; leading: (props?: Record<string, any> | undefined) => string | undefined; leadingIcon: (props?: Record<string, any> | undefined) => string | undefined; leadingAvatar: (props?: Record<string, any> | undefined) => string | undefined; leadingAvatarSize: (props?: Record<string, any> | undefined) => string | undefined; trailing: (props?: Record<string, any> | undefined) => string | undefined; trailingIcon: (props?: Record<string, any> | undefined) => string | undefined; }; }`
- **trailing** — `{ ui: { root: (props?: Record<string, any> | undefined) => string | undefined; base: (props?: Record<string, any> | undefined) => string | undefined; leading: (props?: Record<string, any> | undefined) => string | undefined; leadingIcon: (props?: Record<string, any> | undefined) => string | undefined; leadingAvatar: (props?: Record<string, any> | undefined) => string | undefined; leadingAvatarSize: (props?: Record<string, any> | undefined) => string | undefined; trailing: (props?: Record<string, any> | undefined) => string | undefined; trailingIcon: (props?: Record<string, any> | undefined) => string | undefined; }; }`

### Events

- **update:modelValue** — `[value: string]`
- **close** — `[event: Event]`
- **submit** — `[event: Event]`
