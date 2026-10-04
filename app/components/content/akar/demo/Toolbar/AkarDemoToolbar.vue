<script setup lang="ts">
import {
  ToolbarButton,
  ToolbarLink,
  ToolbarRoot,
  ToolbarSeparator,
  ToolbarToggleGroup,
  ToolbarToggleItem,
} from 'akar'
import { ref } from 'vue'
import './styles.css'

const toggleStateSingle = ref('center')
const toggleStateMultiple = ref([])
</script>

<template>
  <div class="akar-demo akar-demo-Toolbar">
    <ToolbarRoot
        class="ToolbarRoot"
        aria-label="Formatting options"
      >
        <ToolbarToggleGroup
          v-model="toggleStateMultiple"
          type="multiple"
          aria-label="Text formatting"
        >
          <ToolbarToggleItem
            class="ToolbarToggleItem"
            value="bold"
            aria-label="Bold"
          >
            <PIcon name="i-lucide-bold" />
          </ToolbarToggleItem>
          <ToolbarToggleItem
            class="ToolbarToggleItem"
            value="italic"
            aria-label="Italic"
          >
            <PIcon name="i-lucide-italic" />
          </ToolbarToggleItem>
          <ToolbarToggleItem
            class="ToolbarToggleItem"
            value="strikethrough"
            aria-label="Strike through"
          >
            <PIcon name="i-lucide-strikethrough" />
          </ToolbarToggleItem>
        </ToolbarToggleGroup>
        <ToolbarSeparator class="ToolbarSeparator" />
        <ToolbarToggleGroup
          v-model="toggleStateSingle"
          type="single"
          aria-label="Text Alignment"
        >
          <ToolbarToggleItem
            class="ToolbarToggleItem"
            value="left"
            aria-label="Left Aligned"
          >
            <PIcon name="i-lucide-align-left" />
          </ToolbarToggleItem>
          <ToolbarToggleItem
            class="ToolbarToggleItem"
            value="center"
            aria-label="Center Aligned"
          >
            <PIcon name="i-lucide-align-center" />
          </ToolbarToggleItem>
          <ToolbarToggleItem
            class="ToolbarToggleItem"
            value="right"
            aria-label="Right Aligned"
          >
            <PIcon name="i-lucide-align-right" />
          </ToolbarToggleItem>
        </ToolbarToggleGroup>
        <ToolbarSeparator class="ToolbarSeparator" />
        <ToolbarLink
          class="ToolbarLink"
          href="#"
          target="_blank"
          style="margin-right: 10"
        >
          Edited 2 hours ago
        </ToolbarLink>
        <ToolbarButton
          class="ToolbarButton"
          style="margin-left: auto"
        >
          Share
        </ToolbarButton>
      </ToolbarRoot>
  </div>
</template>
