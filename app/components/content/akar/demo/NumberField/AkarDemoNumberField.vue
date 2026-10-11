<script setup lang="ts">
import { NumberFieldDecrement, NumberFieldIncrement, NumberFieldInput, NumberFieldRoot } from 'akar';
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
      <div class="bg-blackA7 border-blackA9 mt-1 border rounded-md flex items-center">
        <NumberFieldDecrement class="p-2 disabled:opacity-20">
          <PIcon name="i-lucide-minus" />
        </NumberFieldDecrement>
        <NumberFieldInput class="p-1 bg-transparent w-20 tabular-nums focus:outline-0" />
        <NumberFieldIncrement class="p-2 disabled:opacity-20">
          <PIcon name="i-lucide-plus" />
        </NumberFieldIncrement>
      </div>
    </NumberFieldRoot>
  </div>
</template>
