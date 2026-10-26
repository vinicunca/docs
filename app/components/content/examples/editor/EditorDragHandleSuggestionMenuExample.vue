<script setup lang="ts">
import type { EditorSuggestionMenuItem } from 'pohon-ui';

const value = ref(`Click the plus button to open the suggestion menu and add new blocks.

The button appears when hovering over blocks.`);

const suggestionItems: Array<Array<EditorSuggestionMenuItem>> = [[{
  kind: 'heading',
  level: 1,
  label: 'Heading 1',
  icon: 'i-lucide-heading-1',
}, {
  kind: 'heading',
  level: 2,
  label: 'Heading 2',
  icon: 'i-lucide-heading-2',
}, {
  kind: 'bulletList',
  label: 'Bullet List',
  icon: 'i-lucide-list',
}, {
  kind: 'blockquote',
  label: 'Blockquote',
  icon: 'i-lucide-text-quote',
}]];
</script>

<template>
  <PEditor
    v-slot="{ editor, handlers }"
    v-model="value"
    content-type="markdown"
    class="min-h-35 w-full"
    :ui="{ base: 'p-8 sm:px-16' }"
  >
    <PEditorSuggestionMenu
      :editor="editor"
      :items="suggestionItems"
    />

    <PEditorDragHandle
      v-slot="{ ui, onClick }"
      :editor="editor"
    >
      <PButton
        icon="i-lucide-plus"
        color="neutral"
        variant="ghost"
        size="sm"
        :class="ui.handle()"
        @click="(e) => {
          e.stopPropagation()

          const selected = onClick()
          handlers.suggestion?.execute(editor, { pos: selected?.pos }).run()
        }"
      />

      <PButton
        icon="i-lucide-grip-vertical"
        color="neutral"
        variant="ghost"
        size="sm"
        :class="ui.handle()"
      />
    </PEditorDragHandle>
  </PEditor>
</template>
