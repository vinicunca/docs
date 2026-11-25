<script setup lang="ts">
const input = ref('');
const files = ref<Array<File>>([]);

function onSubmit() {
  input.value = '';
  files.value = [];
}
</script>

<template>
  <PChatPrompt
    v-model="input"
    v-model:files="files"
    accept="image/*,application/pdf"
    placeholder="Paste or drop files here..."
    :autofocus="false"
    class="w-full"
    @submit="onSubmit"
  >
    <template #footer="{ open }">
      <PButton
        icon="i-lucide-paperclip"
        color="neutral"
        variant="ghost"
        size="sm"
        aria-label="Attach files"
        @click="open"
      />

      <PChatPromptSubmit size="sm" />
    </template>
  </PChatPrompt>
</template>
