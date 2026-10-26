<script setup lang="ts">
import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectItemIndicator,
  SelectItemText,
  SelectLabel,
  SelectPortal,
  SelectRoot,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
  SelectViewport,
} from 'akar';
import { ref } from 'vue';
import './styles.css';

const fruit = ref();

const options = ['Apple', 'Banana', 'Blueberry', 'Grapes', 'Pineapple'];
const vegetables = ['Aubergine', 'Broccoli', 'Carrot', 'Courgette', 'Leek'];
</script>

<template>
  <div class="akar-demo akar-demo-Select">
    <SelectRoot v-model="fruit">
      <SelectTrigger
        class="SelectTrigger"
        aria-label="Customise options"
      >
        <SelectValue placeholder="Select a fruit..." />
        <PIcon name="i-lucide-chevron-down" />
      </SelectTrigger>

      <SelectPortal>
        <SelectContent
          class="SelectContent"
          :side-offset="5"
        >
          <SelectScrollUpButton class="SelectScrollButton">
            <PIcon name="i-lucide-chevron-up" />
          </SelectScrollUpButton>

          <SelectViewport class="SelectViewport">
            <SelectLabel class="SelectLabel">
              Fruits
            </SelectLabel>
            <SelectGroup>
              <SelectItem
                v-for="(option, index) in options"
                :key="index"
                class="SelectItem"
                :value="option"
              >
                <SelectItemIndicator class="SelectItemIndicator">
                  <PIcon name="i-lucide-check" />
                </SelectItemIndicator>
                <SelectItemText>
                  {{ option }}
                </SelectItemText>
              </SelectItem>
            </SelectGroup>
            <SelectSeparator class="SelectSeparator" />
            <SelectLabel class="SelectLabel">
              Vegetables
            </SelectLabel>
            <SelectGroup>
              <SelectItem
                v-for="(option, index) in vegetables"
                :key="index"
                class="SelectItem"
                :value="option"
                :disabled="option === 'Courgette'"
              >
                <SelectItemIndicator class="SelectItemIndicator">
                  <PIcon name="i-lucide-check" />
                </SelectItemIndicator>
                <SelectItemText>
                  {{ option }}
                </SelectItemText>
              </SelectItem>
            </SelectGroup>
          </SelectViewport>

          <SelectScrollDownButton class="SelectScrollButton">
            <PIcon name="i-lucide-chevron-down" />
          </SelectScrollDownButton>
        </SelectContent>
      </SelectPortal>
    </SelectRoot>
  </div>
</template>
