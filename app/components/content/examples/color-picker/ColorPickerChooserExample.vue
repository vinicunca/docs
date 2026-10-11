<script setup lang="ts">
const color = ref('#00C16A');

const chip = computed(() => ({ backgroundColor: color.value }));
</script>

<template>
  <PPopover>
    <PButton
      label="Choose color"
      color="neutral"
      variant="outline"
    >
      <template #leading>
        <span
          :style="chip"
          class="rounded-full size-3"
        />
      </template>
    </PButton>

    <template #content>
      <PColorPicker
        v-model="color"
        class="p-2"
      />
    </template>
  </PPopover>
</template>
