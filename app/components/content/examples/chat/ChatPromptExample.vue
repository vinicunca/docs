<script setup lang="ts">
import type { SelectItem } from 'pohon-ui';

const input = ref('');
const model = ref('opus-5-5');

const models = [
  { label: 'Opus 5.5', value: 'opus-5-5', icon: 'i-simple-icons-anthropic' },
  { label: 'Sonnet 5.5', value: 'sonnet-5-5', icon: 'i-simple-icons-anthropic' },
  { label: 'Haiku 5.5', value: 'haiku-5-5', icon: 'i-simple-icons-anthropic' },
] satisfies Array<SelectItem>;

function onSubmit() {
  input.value = '';
}
</script>

<template>
  <PChatPrompt
    v-model="input"
    :autofocus="false"
    class="w-full"
    @submit="onSubmit"
  >
    <template #footer>
      <PButton
        icon="i-lucide-plus"
        color="neutral"
        variant="ghost"
        size="sm"
      />

      <div class="flex gap-1.5 items-center">
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
