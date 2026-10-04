<script setup lang="ts">
import { ComboboxAnchor, ComboboxContent, ComboboxEmpty, ComboboxGroup, ComboboxInput, ComboboxItem, ComboboxItemIndicator, ComboboxLabel, ComboboxRoot, ComboboxSeparator, ComboboxTrigger, ComboboxViewport } from 'akar'
import './styles.css'

const options = [
  { name: 'Fruit', children: [
    { name: 'Apple' },
    { name: 'Banana' },
    { name: 'Orange' },
    { name: 'Honeydew' },
    { name: 'Grapes' },
    { name: 'Watermelon' },
    { name: 'Cantaloupe' },
    { name: 'Pear' },
  ] },
  { name: 'Vegetable', children: [
    { name: 'Cabbage' },
    { name: 'Broccoli' },
    { name: 'Carrots' },
    { name: 'Lettuce' },
    { name: 'Spinach' },
    { name: 'Bok Choy' },
    { name: 'Cauliflower' },
    { name: 'Potatoes' },
  ] },
]
</script>

<template>
  <div class="akar-demo akar-demo-Combobox">
    <ComboboxRoot class="ComboboxRoot">
        <ComboboxAnchor class="ComboboxAnchor">
          <ComboboxInput
            class="ComboboxInput"
            placeholder="Placeholder..."
          />
          <ComboboxTrigger>
            <PIcon
              name="i-lucide-chevron-down"
              class="ComboboxIcon"
            />
          </ComboboxTrigger>
        </ComboboxAnchor>

        <ComboboxContent class="ComboboxContent">
          <ComboboxViewport class="ComboboxViewport">
            <ComboboxEmpty class="ComboboxEmpty" />

            <template
              v-for="(group, index) in options"
              :key="group.name"
            >
              <ComboboxGroup v-if="group.children.length">
                <ComboboxSeparator
                  v-if="index !== 0"
                  class="ComboboxSeparator"
                />

                <ComboboxLabel class="ComboboxLabel">
                  {{ group.name }}
                </ComboboxLabel>

                <ComboboxItem
                  v-for="option in group.children"
                  :key="option.name"
                  :value="option.name"
                  class="ComboboxItem"
                >
                  <ComboboxItemIndicator
                    class="ComboboxItemIndicator"
                  >
                    <PIcon name="i-lucide-check" />
                  </ComboboxItemIndicator>
                  <span>
                    {{ option }}
                  </span>
                </ComboboxItem>
              </ComboboxGroup>
            </template>
          </ComboboxViewport>
        </ComboboxContent>
      </ComboboxRoot>
  </div>
</template>
