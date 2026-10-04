<script setup lang="ts">
import {
  blue,
  green,
  orange,
  pink,
  red,
  violet,
  yellow,
} from '@radix-ui/colors'
import { ColorSwatchPickerItem, ColorSwatchPickerItemIndicator, ColorSwatchPickerItemSwatch, ColorSwatchPickerRoot } from 'akar'
import './styles.css'

const colors = [
  red.red9,
  pink.pink9,
  violet.violet9,
  blue.blue9,
  green.green9,
  orange.orange9,
  yellow.yellow9,
]
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
