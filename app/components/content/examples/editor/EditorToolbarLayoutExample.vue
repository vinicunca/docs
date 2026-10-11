<script setup lang="ts">
import type { EditorToolbarItem } from 'pohon-ui';

defineProps<{
  layout: 'fixed' | 'bubble' | 'floating';
}>();

const value = ref(`Switch between layouts to see the different toolbar modes.

The **fixed** layout displays the toolbar above the editor. The **bubble** layout shows the toolbar when you select text. The **floating** layout appears on empty lines.`);

const items: Array<Array<EditorToolbarItem>> = [[{
  kind: 'mark',
  mark: 'bold',
  icon: 'i-lucide-bold',
}, {
  kind: 'mark',
  mark: 'italic',
  icon: 'i-lucide-italic',
}, {
  kind: 'mark',
  mark: 'code',
  icon: 'i-lucide-code',
}]];
</script>

<template>
  <PEditor
    v-slot="{ editor }"
    v-model="value"
    content-type="markdown"
    class="flex flex-col gap-4 min-h-26 w-full"
  >
    <PEditorToolbar
      :key="layout"
      :editor="editor"
      :items="items"
      :layout="layout"
      :data-layout="layout"
      class="data-[layout=fixed]:sm:px-8"
    />
  </PEditor>
</template>
