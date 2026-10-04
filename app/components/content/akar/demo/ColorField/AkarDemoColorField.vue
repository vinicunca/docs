<script setup lang="ts">
import {
  ColorFieldInput,
  ColorFieldRoot,
} from 'akar'
import { ref } from 'vue'
import './styles.css'

const color = ref('#56d799')
</script>

<template>
  <div class="akar-demo akar-demo-ColorField">
    <div class="ColorFieldDemo">
        <ColorFieldRoot
          v-model="color"
          class="ColorFieldRoot"
        >
          <label class="ColorFieldLabel">
            Color
          </label>
          <div class="ColorFieldControl">
            <div
              class="ColorFieldSwatch"
              :style="{ background: color }"
            />
            <ColorFieldInput class="ColorFieldInput" />
          </div>
        </ColorFieldRoot>
      </div>
  </div>
</template>
