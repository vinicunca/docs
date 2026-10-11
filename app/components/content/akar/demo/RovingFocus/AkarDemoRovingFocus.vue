<script setup lang="ts">
import { RovingFocusGroup, RovingFocusItem } from 'akar';
</script>

<template>
  <div class="akar-demo akar-demo-RovingFocus">
    <div class="flex flex-col gap-4 justify-center">
      <p class="text-xs dark:text-stone-200">
        Tab to focus
      </p>
      <RovingFocusGroup
        orientation="horizontal"
        class="flex gap-2 items-center"
      >
        <RovingFocusItem
          class="font-medium px-4 py-2 rounded-lg bg-neutral-700 transition dark:text-white focus:bg-neutral-800 hover:bg-neutral-800"
          as="button"
        >
          Button 1
        </RovingFocusItem>
        <RovingFocusItem
          class="font-medium px-4 py-2 rounded-lg bg-neutral-700 transition dark:text-white focus:bg-neutral-800 hover:bg-neutral-800"
          as="button"
        >
          Button 2
        </RovingFocusItem>
        <RovingFocusItem
          class="font-medium px-4 py-2 rounded-lg bg-neutral-700 transition dark:text-white focus:bg-neutral-800 hover:bg-neutral-800"
          as="button"
        >
          Button 3
        </RovingFocusItem>
      </RovingFocusGroup>
    </div>
  </div>
</template>
