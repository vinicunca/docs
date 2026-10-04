<script setup lang="ts">
import { PopoverArrow, PopoverClose, PopoverContent, PopoverPortal, PopoverRoot, PopoverTrigger } from 'akar'
import './styles.css'
</script>

<template>
  <div class="akar-demo akar-demo-Popover">
    <PopoverRoot>
        <PopoverTrigger
          class="IconButton"
          aria-label="Update dimensions"
        >
          <PIcon name="i-lucide-sliders-horizontal" />
        </PopoverTrigger>
        <PopoverPortal>
          <PopoverContent
            side="bottom"
            :side-offset="5"
            class="PopoverContent"
          >
            <div :style="{ display: 'flex', flexDirection: 'column', gap: 10 }">
              <p class="Text">
                Dimensions
              </p>
              <fieldset class="Fieldset">
                <label
                  class="Label"
                  for="width"
                > Width </label>
                <input
                  id="width"
                  class="Input"
                  defaultValue="100%"
                >
              </fieldset>
              <fieldset class="Fieldset">
                <label
                  class="Label"
                  for="maxWidth"
                > Max. width </label>
                <input
                  id="maxWidth"
                  class="Input"
                  defaultValue="300px"
                >
              </fieldset>
              <fieldset class="Fieldset">
                <label
                  class="Label"
                  for="height"
                > Height </label>
                <input
                  id="height"
                  class="Input"
                  defaultValue="25px"
                >
              </fieldset>
              <fieldset class="Fieldset">
                <label
                  class="Label"
                  for="maxHeight"
                > Max. height </label>
                <input
                  id="maxHeight"
                  class="Input"
                  defaultValue="none"
                >
              </fieldset>
            </div>
            <PopoverClose
              class="PopoverClose"
              aria-label="Close"
            >
              <PIcon name="i-lucide-x" />
            </PopoverClose>
            <PopoverArrow class="PopoverArrow" />
          </PopoverContent>
        </PopoverPortal>
      </PopoverRoot>
  </div>
</template>
