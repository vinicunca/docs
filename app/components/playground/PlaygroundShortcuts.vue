<script setup lang="ts">
const shortcuts = [
  { label: 'Search', keys: ['meta', 'K'] },
  { label: 'Quick actions', keys: ['meta', 'J'] },
  { label: 'New file', keys: ['meta', 'N'] },
  { label: 'Save', keys: ['meta', 'S'] },
  { label: 'Toggle sidebar', keys: ['meta', 'B'] },
];
</script>

<template>
  <div>
    <div class="p-4">
      <p class="color-text-highlighted font-semibold">
        Shortcuts
      </p>
      <p class="text-sm color-text-muted">
        Work faster with the keyboard.
      </p>
    </div>

    <PSeparator />

    <ul class="divide-border divide-y">
      <li
        v-for="shortcut in shortcuts"
        :key="shortcut.label"
        class="px-4 py-2.5 flex items-center justify-between"
      >
        <span class="text-sm color-text">{{ shortcut.label }}</span>
        <div class="flex gap-1">
          <PKbd
            v-for="key in shortcut.keys"
            :key="key"
            :value="key"
          />
        </div>
      </li>
    </ul>
  </div>
</template>
