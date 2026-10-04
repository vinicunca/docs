<script setup lang="ts">
import {
  ColorAreaArea,
  ColorAreaRoot,
  ColorAreaThumb,
} from 'akar'
import { ref } from 'vue'
import './styles.css'

const color = ref('#56d799')
</script>

<template>
  <div class="akar-demo akar-demo-ColorArea">
    <div class="ColorAreaDemo">
        <div class="ColorAreaValue">
          Current: {{ color }}
        </div>

        <ColorAreaRoot
          v-slot="{ style }"
          v-model="color"
          class="ColorAreaRoot"
        >
          <ColorAreaArea
            class="ColorAreaArea"
            :style="style"
          >
            <ColorAreaThumb class="ColorAreaThumb" />
          </ColorAreaArea>
        </ColorAreaRoot>
      </div>
  </div>
</template>
