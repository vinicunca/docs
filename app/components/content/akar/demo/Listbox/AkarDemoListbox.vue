<script setup lang="ts">
import { ListboxContent, ListboxItem, ListboxRoot } from 'akar';
</script>

<template>
  <div class="akar-demo akar-demo-Listbox">
    <ListboxRoot class="text-green9 mx-auto p-1 border rounded-lg bg-white flex flex-col h-72 w-48 overflow-auto">
      <ListboxContent>
        <ListboxItem
          v-for="i in 20"
          :key="i"
          :value="i"
          class="text-green9 data-[highlighted]:outline-green9 focus:outline-green9 data-[state=checked]:bg-green9 text-sm px-2 py-1 rounded w-full select-none data-[state=checked]:text-white data-[highlighted]:outline-1 data-[highlighted]:outline data-[disabled]:opacity-50 focus:ring-0"
        >
          {{ i }}
        </ListboxItem>
      </ListboxContent>
    </ListboxRoot>
  </div>
</template>
