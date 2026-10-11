<script setup lang="ts">
const props = defineProps<{
  duration: number;
}>();

const toast = useToast();

function showToast() {
  toast.add({
    title: 'Uh oh! Something went wrong.',
    description: 'There was a problem with your request.',
    duration: props.duration,
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
