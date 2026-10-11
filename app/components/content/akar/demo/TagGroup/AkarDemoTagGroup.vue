<script setup lang="ts">
import { TagGroupItem, TagGroupItemDelete, TagGroupItemText, TagGroupRoot } from 'akar';
import { ref } from 'vue';

const tags = ref(['Apple', 'Banana', 'Blueberry', 'Grape']);
const selected = ref<Array<string>>(['Banana']);

function onRemove(values: Array<string>) {
  tags.value = tags.value.filter((tag) => !values.includes(tag));
}
</script>

<template>
  <div class="akar-demo akar-demo-TagGroup">
    <TagGroupRoot
      v-model="selected"
      selection-mode="multiple"
      aria-label="Fruits"
      class="flex flex-wrap gap-2 w-[380px] items-center"
      @remove="onRemove"
    >
      <TagGroupItem
        v-for="tag in tags"
        :key="tag"
        :value="tag"
        class="text-grass11 data-[state=checked]:bg-grass9 focus-visible:ring-grass7 text-sm font-medium px-2 py-1 outline-none rounded-lg bg-white flex gap-1.5 cursor-default shadow-md items-center justify-center data-[state=checked]:text-white data-[disabled]:opacity-50 focus-visible:ring-2"
      >
        <TagGroupItemText>{{ tag }}</TagGroupItemText>
        <TagGroupItemDelete
          class="hover:bg-blackA4 focus-visible:ring-grass7 p-0.5 rounded bg-transparent focus-visible:outline-none focus-visible:ring-2"
        >
          <PIcon
            name="i-lucide-x"
            class="size-3"
          />
        </TagGroupItemDelete>
      </TagGroupItem>
      <span
        v-if="!tags.length"
        class="text-mauve11 text-sm"
      >No fruits</span>
    </TagGroupRoot>
  </div>
</template>
