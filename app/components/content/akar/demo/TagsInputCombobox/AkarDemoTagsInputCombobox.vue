<script setup lang="ts">
import { ComboboxAnchor, ComboboxContent, ComboboxGroup, ComboboxInput, ComboboxItem, ComboboxItemIndicator, ComboboxLabel, ComboboxRoot, ComboboxTrigger, ComboboxViewport, TagsInputInput, TagsInputItem, TagsInputItemDelete, TagsInputItemText, TagsInputRoot, useFilter } from 'akar';
import { computed, ref, watch } from 'vue';

const { contains } = useFilter({ sensitivity: 'base' });

const query = ref('');
const values = ref(['Apple']);
const options = ['Apple', 'Banana', 'Blueberry', 'Grapes', 'Pineapple'];

const filteredOptions = computed(() => options.filter((option) => contains(option, query.value)));

watch(values, () => {
  query.value = '';
}, { deep: true });
</script>

<template>
  <div class="akar-demo akar-demo-TagsInputCombobox">
    <ComboboxRoot
      v-model="values"
      multiple
      class="mx-auto my-4 relative"
    >
      <ComboboxAnchor class="color-grass11 hover:bg-mauve3 data-[placeholder]:color-grass9 text-xs leading-none p-2 outline-none rounded-lg bg-white inline-flex gap-[5px] w-[400px] shadow-[0_2px_10px] shadow-black/10 items-center justify-between focus:shadow-[0_0_0_2px] focus:shadow-black">
        <TagsInputRoot
          v-model="values"
          delimiter=""
          class="rounded-lg flex flex-wrap gap-2 items-center"
        >
          <TagsInputItem
            v-for="item in values"
            :key="item"
            :value="item"
            class="bg-grass8 aria-[current=true]:bg-grass9 color-white px-2 py-1 rounded flex gap-2 items-center justify-center"
          >
            <TagsInputItemText class="text-sm" />
            <TagsInputItemDelete>
              <PIcon name="i-lucide-x" />
            </TagsInputItemDelete>
          </TagsInputItem>

          <ComboboxInput
            v-model="query"
            as-child
          >
            <TagsInputInput
              placeholder="Fruits..."
              class="placeholder:color-mauve10 px-1 rounded flex-1 focus:outline-none !bg-transparent"
              @keydown.enter.prevent
            />
          </ComboboxInput>
        </TagsInputRoot>

        <ComboboxTrigger>
          <PIcon
            name="i-lucide-chevron-down"
            class="color-grass11 h-4 w-4"
          />
        </ComboboxTrigger>
      </ComboboxAnchor>
      <ComboboxContent class="data-[side=top]:animate-slideDownAndFade data-[side=right]:animate-slideLeftAndFade data-[side=bottom]:animate-slideUpAndFade data-[side=left]:animate-slideRightAndFade mt-2 will-change-[opacity,transform] rounded bg-white w-full shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),_0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)] absolute z-10 overflow-hidden">
        <ComboboxViewport class="p-[5px]">
          <ComboboxGroup v-if="filteredOptions.length">
            <ComboboxLabel class="color-mauve11 text-xs leading-[25px] px-[25px]">
              Fruits
            </ComboboxLabel>

            <ComboboxItem
              v-for="(option, index) in filteredOptions"
              :key="index"
              class="color-grass11 data-[disabled]:color-mauve8 data-[highlighted]:bg-grass8 data-[highlighted]:color-grass1 text-xs leading-none pl-[25px] pr-[35px] rounded-[3px] flex h-[25px] select-none items-center relative data-[highlighted]:outline-none data-[disabled]:pointer-events-none"
              :value="option"
            >
              <ComboboxItemIndicator
                class="inline-flex w-[25px] items-center left-0 justify-center absolute"
              >
                <PIcon name="i-lucide-check" />
              </ComboboxItemIndicator>
              <span>
                {{ option }}
              </span>
            </ComboboxItem>
          </ComboboxGroup>
        </ComboboxViewport>
      </ComboboxContent>
    </ComboboxRoot>
  </div>
</template>
