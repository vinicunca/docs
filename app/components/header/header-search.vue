<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content';
import { useSearch } from '#imports';

interface ContentSearchFile {
  id: string;
  title: string;
  titles: Array<string>;
  level: number;
  content: string;
}

defineProps<{
  files?: Array<ContentSearchFile>;
  navigation?: Array<ContentNavigationItem>;
}>();

const { links, searchTerm } = useSearch();
</script>

<template>
  <PContentSearch
    v-model:search-term="searchTerm"
    :links="links"
    :files="files"
    :navigation="navigation"
    :fuse="{ resultLimit: 115 }"
    :fullscreen="false"
  />
</template>
