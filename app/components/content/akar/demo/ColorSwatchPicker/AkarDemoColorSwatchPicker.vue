<script setup lang="ts">
import { ColorSwatchPickerItem, ColorSwatchPickerItemIndicator, ColorSwatchPickerItemSwatch, ColorSwatchPickerRoot } from 'akar';
import './styles.css';

// Step 9 of the Radix scales the other demos use (`../_colors`)
const colors = [
  '#e5484d', // red
  '#d6409f', // pink
  '#6e56cf', // violet
  '#0090ff', // blue
  '#30a46c', // green
  '#f76b15', // orange
  '#ffe629', // yellow
];
</script>

<template>
  <div class="akar-demo akar-demo-ColorSwatchPicker">
    <ColorSwatchPickerRoot class="root">
      <ColorSwatchPickerItem
        v-for="color in colors"
        :key="color"
        :value="color"
        class="item"
      >
        <ColorSwatchPickerItemSwatch
          class="swatch"
        />
        <ColorSwatchPickerItemIndicator class="indicator">
          <PIcon name="i-lucide-check" />
        </ColorSwatchPickerItemIndicator>
      </ColorSwatchPickerItem>
    </ColorSwatchPickerRoot>
  </div>
</template>
