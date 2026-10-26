<script setup lang="ts">
import type { TreeItem } from 'pohon-ui';

const items = [
  {
    label: 'app/',
    slot: 'app' as const,
    defaultExpanded: true,
    children: [
      {
        label: 'composables/',
        children: [
          { label: 'useAuth.ts', icon: 'i-vscode-icons-file-type-typescript' },
          { label: 'useUser.ts', icon: 'i-vscode-icons-file-type-typescript' },
        ],
      },
      {
        label: 'components/',
        defaultExpanded: true,
        children: [
          { label: 'Card.vue', icon: 'i-vscode-icons-file-type-vue' },
          { label: 'Button.vue', icon: 'i-vscode-icons-file-type-vue' },
        ],
      },
    ],
  },
  { label: 'app.vue', icon: 'i-vscode-icons-file-type-vue' },
  { label: 'nuxt.config.ts', icon: 'i-vscode-icons-file-type-nuxt' },
] satisfies Array<TreeItem>;
</script>

<template>
  <PTree :items="items">
    <template #app="{ item }">
      <p class="font-bold italic">
        {{ item.label }}
      </p>
    </template>
  </PTree>
</template>
