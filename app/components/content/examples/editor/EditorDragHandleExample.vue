<script setup lang="ts">
const value = ref(`# Drag Handle

Hover over the left side of this block to see the drag handle appear and reorder blocks.`);
</script>

<template>
  <PEditor
    v-slot="{ editor }"
    v-model="value"
    content-type="markdown"
    class="min-h-21 w-full"
  >
    <PEditorDragHandle :editor="editor" />
  </PEditor>
</template>
