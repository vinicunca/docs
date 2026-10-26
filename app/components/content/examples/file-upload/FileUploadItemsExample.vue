<script setup lang="ts">
import type { FileUploadItem } from 'pohon-ui';

const files = ref<Array<FileUploadItem>>([{
  name: 'nuxt.png',
  size: 1000,
  type: 'image/png',
  avatar: {
    src: 'https://github.com/nuxt.png',
    alt: 'Nuxt',
  },
}]);
</script>

<template>
  <PFileUpload
    v-model="files"
    layout="list"
    label="Drop your images here"
    description="SVG, PNG, JPG or GIF"
    accept="image/*"
    multiple
    class="min-h-48 w-96"
  />
</template>
