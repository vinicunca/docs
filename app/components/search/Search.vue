<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content';

defineProps<{
  navigation?: Array<ContentNavigationItem>;
}>();

const { status, search, init } = useSearchCollection('docs', {
  immediate: false,
  ignoredTags: ['style'],
});

const { links, groups, searchTerm } = useSearch();
const { open } = useContentSearch();
const { track } = useAnalytics();

const fuse = {
  resultLimit: 20,
  fuseOptions: {
    useTokenSearch: false,
    threshold: 0,
  },
};

const opened = ref(false);
watch(open, (value) => {
  if (!value) {
    return;
  }
  opened.value = true;
  if (status.value === 'idle') {
    init();
  }
}, { immediate: true });

watchDebounced(searchTerm, (term) => {
  if (term) {
    track('Search Performed', { term });
  }
}, { debounce: 500 });
</script>

<template>
  <PContentSearch
    v-model:search-term="searchTerm"
    :links="links"
    :groups="groups"
    :navigation="navigation"
    :search="search"
    :search-status="status"
    :fuse="fuse"
    :transition="false"
    :unmount-on-hide="!opened"
  />
</template>
