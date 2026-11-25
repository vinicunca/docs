<script setup lang="ts">
import type { ChatPromptQueueItem } from 'pohon-ui';

const input = ref('');
const queue = ref<Array<ChatPromptQueueItem>>([
  { text: 'Can you also add a dark mode toggle?' },
  { text: 'And write the tests for it' },
]);
</script>

<template>
  <PChatPrompt
    v-model="input"
    v-model:queue="queue"
    status="streaming"
    placeholder="Send a message while it answers..."
    :autofocus="false"
    class="w-full"
  >
    <PChatPromptSubmit status="streaming" />
  </PChatPrompt>
</template>
