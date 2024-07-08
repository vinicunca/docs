<script lang="ts" setup>
import { NumberFieldDecrement, NumberFieldIncrement, NumberFieldInput, NumberFieldRoot } from 'radix-vue';

defineProps<{
  label: string;
  disabled?: boolean;
}>();

const model = defineModel();
</script>

<template>
  <NumberFieldRoot
    :id="label"
    v-model="model"
    class="text-sm"
    :class="{
      'opacity-50': disabled,
    }"
    :min="1"
    :default-value="1"
  >
    <label :for="label">
      {{ label }}
    </label>

    <div class="mt-2 flex items-center border border-base rounded-md">
      <NumberFieldDecrement class="p-2 flex disabled:opacity-20">
        <i class="i-radix-icons:minus" />
      </NumberFieldDecrement>

      <NumberFieldInput
        class="text-center w-10 tabular-nums focus:outline-2 p-1"
      />

      <NumberFieldIncrement class="p-2 flex disabled:opacity-20">
        <i class="i-radix-icons:plus" />
      </NumberFieldIncrement>
    </div>
  </NumberFieldRoot>
</template>
