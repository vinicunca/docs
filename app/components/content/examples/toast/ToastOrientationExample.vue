<script setup lang="ts">
const props = defineProps<{
  orientation: 'horizontal' | 'vertical';
}>();

const toast = useToast();

function showToast() {
  toast.add({
    title: 'Uh oh! Something went wrong.',
    orientation: props.orientation,
    actions: [{
      icon: 'i-lucide-refresh-cw',
      label: 'Retry',
      color: 'neutral',
      variant: 'outline',
      onClick: (e) => {
        e?.stopPropagation();
      },
    }],
  });
}
</script>

<template>
  <PButton
    label="Show toast"
    color="neutral"
    variant="outline"
    @click="showToast"
  />
</template>
