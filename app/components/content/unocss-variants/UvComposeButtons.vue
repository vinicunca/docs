<script lang="ts" setup>
import { uv } from 'unocss-variants';

const baseButton = uv({
  base: [
    'font-semibold',
    'dark:text-white',
    'py-1',
    'px-3',
    'rounded-full',
    'active:opacity-80',
    'bg-zinc-100',
    'hover:bg-zinc-200',
    'dark:bg-zinc-800',
    'dark:hover:bg-zinc-800',
  ],
});

const buyButton = uv({
  extend: baseButton,
  base: [
    'text-sm',
    'text-white',
    'rounded-lg',
    'shadow-lg',
    'uppercase',
    'tracking-wider',
    'uno-layer-uv:bg-blue-500',
    'uno-layer-uv:hover:bg-blue-600',
    'shadow-blue-500/50',
    'uno-layer-uv:dark:bg-blue-500',
    'uno-layer-uv:dark:hover:bg-blue-600',
  ],
});
</script>

<template>
  <div class="flex flex-wrap items-center gap-3">
    <button :class="baseButton()">
      Button
    </button>
    <button :class="buyButton()">
      Buy button
    </button>
  </div>
</template>
