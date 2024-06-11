<script lang="ts" setup>
import { useData } from 'vitepress';

/**
 * The page data has been modified in `.vitepress/perkakas/perkakas.mapping.ts` file.
 */
const { page } = useData();
</script>

<template>
  <div v-html="page.rawDesc" />
</template>
