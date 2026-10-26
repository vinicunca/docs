<script lang="ts" setup>
import { uv } from 'unocss-variants';

const button = uv({
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
});
</script>

<template>
  <div class="flex flex-wrap gap-3 items-center">
    <button :class="button({ color: 'primary', size: 'sm' })">
      Primary
    </button>
    <button :class="button({ color: 'secondary', size: 'md' })">
      Secondary
    </button>
    <button :class="button({ color: 'success', size: 'lg' })">
      Success
    </button>
  </div>
</template>
