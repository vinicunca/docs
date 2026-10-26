<script setup lang="ts">
import { TreeItem, TreeRoot } from 'akar';
import { akarDemoIcon } from '../akar-demo-icons';

const items = [
  {
    title: 'composables',
    icon: 'lucide:folder',
    children: [
      { title: 'useAuth.ts', icon: 'vscode-icons:file-type-typescript' },
      { title: 'useUser.ts', icon: 'vscode-icons:file-type-typescript' },
    ],
  },
  {
    title: 'components',
    icon: 'lucide:folder',
    children: [
      {
        title: 'Home',
        icon: 'lucide:folder',
        children: [
          { title: 'Card.vue', icon: 'vscode-icons:file-type-vue' },
          { title: 'Button.vue', icon: 'vscode-icons:file-type-vue' },
        ],
      },
    ],
  },
  { title: 'app.vue', icon: 'vscode-icons:file-type-vue' },
  { title: 'nuxt.config.ts', icon: 'vscode-icons:file-type-nuxt' },
];
</script>

<template>
  <div class="akar-demo akar-demo-Tree">
    <TreeRoot
      v-slot="{ flattenItems }"
      class="text-blackA11 text-sm font-medium p-2 list-none rounded-lg bg-white w-56 select-none"
      :items="items"
      :get-key="(item) => item.title"
      :default-expanded="['components']"
    >
      <h2 class="text-blackA11 font-semibold px-2 pt-1 !text-base">
        Directory Structure
      </h2>
      <TreeItem
        v-for="item in flattenItems"
        v-slot="{ isExpanded }"
        :key="item._id"
        :style="{ 'padding-left': `${item.level + 0.5}rem` }"
        v-bind="item.bind"
        class="focus:ring-grass8 data-[selected]:bg-grass4 my-0.5 px-2 py-1 outline-none rounded flex items-center focus:ring-2"
      >
        <template v-if="item.hasChildren">
          <PIcon
            v-if="!isExpanded"
            name="i-lucide-folder"
            class="h-4 w-4"
          />
          <PIcon
            v-else
            name="i-lucide-folder-open"
            class="h-4 w-4"
          />
        </template>
        <PIcon
          v-else
          :name="akarDemoIcon(item.value.icon || 'lucide:file')"
          class="h-4 w-4"
        />
        <div class="pl-2">
          {{ item.value.title }}
        </div>
      </TreeItem>
    </TreeRoot>
  </div>
</template>
