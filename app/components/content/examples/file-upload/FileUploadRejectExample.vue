<script setup lang="ts">
const value = ref<Array<File>>([]);

const toast = useToast();

function onReject(files: Array<File>) {
  toast.add({
    title: 'Only images are allowed',
    description: files.map((file) => file.name).join(', '),
    color: 'error',
  });
}
</script>

<template>
  <PFileUpload
    v-model="value"
    accept="image/*"
    icon="i-lucide-image"
    label="Drop your images here"
    description="SVG, PNG, JPG or GIF"
    multiple
    class="min-h-48 w-96"
    @reject="onReject"
  />
</template>
