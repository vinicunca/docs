<script setup lang="ts">
const value = ref<Array<File>>([]);
</script>

<template>
  <PFileUpload
    v-model="value"
    icon="i-lucide-image"
    label="Drop your images here"
    description="SVG, PNG, JPG or GIF (max. 2MB)"
    layout="grid"
    multiple
    :interactive="false"
    class="min-h-48 w-96"
  >
    <template #actions="{ open }">
      <PButton
        label="Select images"
        icon="i-lucide-upload"
        color="neutral"
        variant="outline"
        @click="open()"
      />
    </template>

    <template #files-top="{ open, files }">
      <div
        v-if="files?.length"
        class="mb-2 flex items-center justify-between"
      >
        <p class="font-bold">
          Files ({{ files?.length }})
        </p>

        <PButton
          icon="i-lucide-plus"
          label="Add more"
          color="neutral"
          variant="outline"
          class="-my-2"
          @click="open()"
        />
      </div>
    </template>
  </PFileUpload>
</template>
