<script setup lang="ts">
defineProps<{
  count: number;
}>();

const emit = defineEmits<{ close: [boolean] }>();
</script>

<template>
  <PModal
    :close="{ onClick: () => emit('close', false) }"
    :title="`This modal was opened programmatically ${count} times`"
  >
    <template #footer>
      <div class="flex gap-2">
        <PButton
          color="neutral"
          label="Dismiss"
          @click="emit('close', false)"
        />
        <PButton
          label="Success"
          @click="emit('close', true)"
        />
      </div>
    </template>
  </PModal>
</template>
