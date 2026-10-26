<script setup lang="ts">
import { TagsInputInput, TagsInputItem, TagsInputItemDelete, TagsInputItemText, TagsInputRoot } from 'akar';
import { ref } from 'vue';

const modelValue = ref(['Apple', 'Banana']);
</script>

<template>
  <div class="akar-demo akar-demo-TagsInput">
    <TagsInputRoot
      v-model="modelValue"
      class="border-blackA7 p-2 border rounded-lg bg-white flex flex-wrap gap-2 w-[380px] w-full items-center"
    >
      <TagsInputItem
        v-for="item in modelValue"
        :key="item"
        :value="item"
        class="bg-green8 aria-[current=true]:bg-green9 color-white p-1 rounded flex gap-2 shadow-md items-center justify-center"
      >
        <TagsInputItemText class="text-sm pl-1" />
        <TagsInputItemDelete class="hover:bg-blackA4 p-0.5 rounded bg-transparent">
          <PIcon name="i-lucide-x" />
        </TagsInputItemDelete>
      </TagsInputItem>

      <TagsInputInput
        placeholder="Fruits..."
        class="color-green9 placeholder:color-mauve9 text-sm px-1 rounded bg-transparent flex-1 focus:outline-none"
      />
    </TagsInputRoot>
  </div>
</template>
