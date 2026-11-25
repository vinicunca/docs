<script setup lang="ts">
import type { EditorMentionMenuItem, SelectItem } from 'pohon-ui';
import { Extension } from '@tiptap/core';

const input = ref('');
const mode = ref('auto');
const attachments = ref<Array<File>>([]);

const files: Array<EditorMentionMenuItem> = [
  { label: 'app.vue', icon: 'i-vscode-icons-file-type-vue' },
  { label: 'nuxt.config.ts', icon: 'i-vscode-icons-file-type-nuxt' },
  { label: 'package.json', icon: 'i-vscode-icons-file-type-json' },
  { label: 'README.md', icon: 'i-vscode-icons-file-type-markdown' },
  { label: 'AuthForm.vue', icon: 'i-vscode-icons-file-type-vue' },
  { label: 'useChat.ts', icon: 'i-vscode-icons-file-type-typescript' },
];

const commands: Array<EditorMentionMenuItem> = [
  { label: 'init', icon: 'i-lucide-sparkles' },
  { label: 'review', icon: 'i-lucide-search-code' },
  { label: 'security-review', icon: 'i-lucide-shield-check' },
  { label: 'clear', icon: 'i-lucide-eraser' },
  { label: 'compact', icon: 'i-lucide-fold-vertical' },
  { label: 'config', icon: 'i-lucide-settings' },
];

const modes = [
  { label: 'Manual', value: 'manual', icon: 'i-lucide-hand' },
  { label: 'Edit automatically', value: 'edit', icon: 'i-lucide-code-xml' },
  { label: 'Plan mode', value: 'plan', icon: 'i-lucide-list-checks' },
  { label: 'Auto mode', value: 'auto', icon: 'i-lucide-zap' },
] satisfies Array<SelectItem>;

// SSR-safe target so the menus aren't clipped by overflow
const appendToBody = import.meta.client
  ? () => document.body
  : undefined;

function onSubmit() {
  console.log('submit', input.value, attachments.value);

  input.value = '';
  attachments.value = [];
}
</script>

<template>
  <PChatPrompt
    v-model="input"
    v-model:files="attachments"
    class="p-0 gap-0 w-full"
    placeholder="Press / to open the command menu"
    :ui="{
      files: 'px-2.5 py-2 border-b border-border',
      footer: 'px-2.5 py-2 border-t border-border',
    }"
    @submit="onSubmit"
  >
    <template #body="{ submit, placeholder }">
      <PEditor
        v-slot="{ editor }"
        v-model="input"
        content-type="markdown"
        :starter-kit="false"
        :placeholder="placeholder"
        class="min-h-12 w-full"
        :ui="{ base: 'p-2.5! [&_.mention]:bg-primary/5 [&_.mention]:rounded-sm [&_.mention]:px-0.5 [&_.mention]:py-0.25' }"
        :extensions="[Extension.create({
          name: 'chatPromptSubmit',
          priority: 1000,
          addKeyboardShortcuts: () => ({ Enter: () => (submit(), true) }),
        })]"
      >
        <PEditorMentionMenu
          :editor="editor"
          char="@"
          plugin-key="mention"
          :items="files"
          :append-to="appendToBody"
        />
        <PEditorMentionMenu
          :editor="editor"
          char="/"
          plugin-key="command"
          :items="commands"
          :append-to="appendToBody"
        />
      </PEditor>
    </template>

    <template #footer="{ open }">
      <div class="flex gap-0.5 items-center">
        <PButton
          icon="i-lucide-plus"
          color="neutral"
          variant="ghost"
          aria-label="Attach files"
          size="sm"
          @click="open"
        />
      </div>

      <div class="flex gap-1 items-center">
        <PSelect
          v-model="mode"
          :items="modes"
          :icon="modes.find(item => item.value === mode)?.icon"
          color="neutral"
          variant="ghost"
          size="sm"
          square
        />

        <PChatPromptSubmit
          size="sm"
          :disabled="!input.trim() && !attachments.length"
        />
      </div>
    </template>
  </PChatPrompt>
</template>
