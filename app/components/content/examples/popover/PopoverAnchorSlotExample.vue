<script lang="ts" setup>
const open = ref(false)
</script>

<template>
  <PPopover
    v-model:open="open"
    :dismissible="false"
    :ui="{ content: 'w-(--akar-popover-trigger-width) p-4' }"
  >
    <template #anchor>
      <PInput placeholder="Focus to open" @focus="open = true" @blur="open = false" />
    </template>

    <template #content>
      <Placeholder class="w-full aspect-square" />
    </template>
  </PPopover>
</template>
