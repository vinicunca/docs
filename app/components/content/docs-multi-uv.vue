<script lang="ts" setup>
const uvConfig = {
  base: 'font-semibold color-white rounded-full active:opacity-80',
  variants: {
    color: {
      primary: 'bg-blue-500 hover:bg-blue-700',
      secondary: 'bg-purple-500 hover:bg-purple-700',
      success: 'bg-green-500 hover:bg-green-700',
    },
    size: {
      sm: 'py-1 px-3 text-xs',
      md: 'py-1.5 px-4 text-sm',
      lg: 'py-2 px-6 text-md',
    },
  },
};
</script>

<template>
  <div class="flex items-center gap-3">
    <DocsUvComponent
      as="button"
      color="primary"
      size="sm"
      :uv="uvConfig"
    >
      Primary
    </DocsUvComponent>
    <DocsUvComponent
      as="button"
      color="secondary"
      size="md"
      :uv="uvConfig"
    >
      Secondary
    </DocsUvComponent>
    <DocsUvComponent
      as="button"
      color="success"
      size="lg"
      :uv="uvConfig"
    >
      Success
    </DocsUvComponent>
  </div>
</template>
