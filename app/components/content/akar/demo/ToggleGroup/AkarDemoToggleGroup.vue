<script setup lang="ts">
import { ToggleGroupItem, ToggleGroupRoot } from 'akar'
import { ref } from 'vue'
import './styles.css'

const toggleStateSingle = ref('left')
const toggleStateMultiple = ref(['italic'])
</script>

<template>
  <div class="akar-demo akar-demo-ToggleGroup">
    <div>
        <ToggleGroupRoot
          v-model="toggleStateSingle"
          type="single"
          class="ToggleGroup"
        >
          <ToggleGroupItem
            value="left"
            aria-label="Toggle italic"
            class="ToggleGroupItem"
          >
            <PIcon name="i-lucide-align-left" />
          </ToggleGroupItem>
          <ToggleGroupItem
            value="center"
            aria-label="Toggle italic"
            class="ToggleGroupItem"
          >
            <PIcon name="i-lucide-align-center" />
          </ToggleGroupItem>
          <ToggleGroupItem
            value="right"
            aria-label="Toggle italic"
            class="ToggleGroupItem"
          >
            <PIcon name="i-lucide-align-right" />
          </ToggleGroupItem>
        </ToggleGroupRoot>
        <br>
        <ToggleGroupRoot
          v-model="toggleStateMultiple"
          type="multiple"
          class="ToggleGroup"
        >
          <ToggleGroupItem
            value="bold"
            aria-label="Toggle italic"
            class="ToggleGroupItem"
          >
            <PIcon name="i-lucide-bold" />
          </ToggleGroupItem>
          <ToggleGroupItem
            value="italic"
            aria-label="Toggle italic"
            class="ToggleGroupItem"
          >
            <PIcon name="i-lucide-italic" />
          </ToggleGroupItem>
          <ToggleGroupItem
            value="strikethrough"
            aria-label="Toggle italic"
            class="ToggleGroupItem"
          >
            <PIcon name="i-lucide-strikethrough" />
          </ToggleGroupItem>
        </ToggleGroupRoot>
      </div>
  </div>
</template>
