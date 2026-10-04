<script setup lang="ts">
import { NumberFieldDecrement, NumberFieldIncrement, NumberFieldInput, NumberFieldRoot } from 'akar'
</script>

<template>
  <div class="akar-demo akar-demo-NumberField">
    <NumberFieldRoot
        id="age"
        class="text-sm text-white"
        :min="0"
        :default-value="18"
      >
        <label for="age">Age</label>
        <div class="mt-1 flex items-center border bg-blackA7 border-blackA9 rounded-md">
          <NumberFieldDecrement class="p-2 disabled:opacity-20">
            <PIcon name="i-lucide-minus" />
          </NumberFieldDecrement>
          <NumberFieldInput class="bg-transparent w-20 tabular-nums focus:outline-0 p-1" />
          <NumberFieldIncrement class="p-2 disabled:opacity-20">
            <PIcon name="i-lucide-plus" />
          </NumberFieldIncrement>
        </div>
      </NumberFieldRoot>
  </div>
</template>
