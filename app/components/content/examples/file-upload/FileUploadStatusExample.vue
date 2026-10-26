<script setup lang="ts">
import type { FileUploadItem } from 'pohon-ui';

interface UploadFileItem extends FileUploadItem {
  progress: number;
  preview: string;
}

const uploadingAvatar = {
  icon: 'i-lucide-loader-circle',
  ui: { icon: 'animate-spin' },
};
const files = ref<Array<UploadFileItem>>([{
  name: 'nuxt.png',
  size: 1000,
  type: 'image/png',
  progress: 0,
  preview: 'https://github.com/nuxt.png',
  avatar: uploadingAvatar,
}]);
const objectUrls = new Set<string>();

function onUpdateFiles(value: Array<File | UploadFileItem> | null | undefined) {
  files.value = (value || []).map((file) => {
    if (!(file instanceof File)) {
      return file;
    }

    const preview = URL.createObjectURL(file);
    objectUrls.add(preview);

    return {
      name: file.name,
      size: file.size,
      type: file.type,
      progress: 0,
      preview,
      avatar: uploadingAvatar,
    };
  });

  for (const url of objectUrls) {
    if (files.value.some((file) => file.preview === url)) {
      continue;
    }
    URL.revokeObjectURL(url);
    objectUrls.delete(url);
  }
}

useIntervalFn(() => {
  for (const file of files.value) {
    if (file.progress === 100) {
      continue;
    }

    file.progress = Math.min(file.progress + 2, 100);
    if (file.progress === 100) {
      file.avatar = { src: file.preview, alt: file.name };
    }
  }
}, 100);

onScopeDispose(() => {
  for (const url of objectUrls) {
    URL.revokeObjectURL(url);
  }
});
</script>

<template>
  <PFileUpload
    :model-value="files"
    layout="list"
    label="Drop your images here"
    description="SVG, PNG, JPG or GIF"
    accept="image/*"
    multiple
    class="min-h-48 w-96"
    @update:model-value="onUpdateFiles"
  >
    <template #file-trailing="{ file, index, removeFile }">
      <div class="ms-auto flex gap-2 items-center">
        <PProgress
          v-if="'progress' in file && file.progress < 100"
          :model-value="file.progress"
          size="xs"
          class="w-20"
        />
        <PIcon
          v-else-if="'progress' in file && file.progress === 100"
          name="i-lucide-circle-check"
          class="color-success size-5"
        />
        <PButton
          color="neutral"
          variant="link"
          icon="i-lucide-x"
          :aria-label="`Remove ${file.name}`"
          @click.stop.prevent="removeFile(index)"
        />
      </div>
    </template>
  </PFileUpload>
</template>
