<script setup lang="ts">
import type { EditorToolbarItem } from 'pohon-ui';
import EditorLinkPopover from './EditorLinkPopover.vue';

const value = ref(`Select text and click the link button to add a link with the custom popover.

You can also edit existing links like [this one](https://pohon.vinicunca.dev).`);

const toolbarItems = [[{
  kind: 'mark',
  mark: 'bold',
  icon: 'i-lucide-bold',
}, {
  kind: 'mark',
  mark: 'italic',
  icon: 'i-lucide-italic',
}, {
  slot: 'link' as const,
}]] satisfies Array<Array<EditorToolbarItem>>;
</script>

<template>
  <PEditor
    v-slot="{ editor }"
    v-model="value"
    content-type="markdown"
    class="flex flex-col gap-4 min-h-30 w-full"
  >
    <PEditorToolbar
      :editor="editor"
      :items="toolbarItems"
      class="sm:px-8"
    >
      <template #link>
        <EditorLinkPopover
          :editor="editor"
          auto-open
        />
      </template>
    </PEditorToolbar>
  </PEditor>
</template>
