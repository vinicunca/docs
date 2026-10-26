<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content';
import { useFilter } from 'pohon-ui/composables';

const navigation = inject<Ref<Array<ContentNavigationItem>>>('navigation');

const route = useRoute();
const { scoreItem } = useFilter();
const { navigationByCategory } = useNavigation(navigation!);

const filteredNavigation = computed(() => {
  if (!cleanedSearchTerm.value) {
    return navigationByCategory.value;
  }

  return navigationByCategory.value.map((item) => ({
    ...item,
    children: item.children?.filter((child) => scoreItem(child, cleanedSearchTerm.value, ['title', 'description']) !== null),
  })).filter((item) => item.children && item.children.length > 0);
});

const searchTerm = ref('');
const FILTERABLE_SECTIONS = ['/pohon/components', '/akar/components', '/akar/utilities'];
const isSearchActive = computed(() => FILTERABLE_SECTIONS.some((section) => route.path.startsWith(section)));
const navigationKey = computed(() => `${route.path}-${searchTerm.value ? 'filtered' : 'unfiltered'}`);
const cleanedSearchTerm = computed(() => {
  return searchTerm.value
    .replace(/^P(?=[A-Z])/, '')
    .replace(/^p-/, '');
});

watch(() => route.path, () => {
  if (!isSearchActive.value) {
    searchTerm.value = '';
  }
});

const input = useTemplateRef('input');

defineShortcuts({
  '/': {
    usingInput: false,
    handler: () => {
      input.value?.inputRef?.focus();
    },
  },
});
</script>

<template>
  <PMain>
    <PContainer>
      <PPage>
        <template #left>
          <PPageAside>
            <template
              v-if="isSearchActive"
              #top
            >
              <PInput
                ref="input"
                v-model="searchTerm"
                variant="soft"
                placeholder="Filter..."
                class="group"
              >
                <template #trailing>
                  <PKbd
                    value="/"
                    variant="subtle"
                    class="color-text-muted bg-transparent ring-border-muted"
                  />
                </template>
              </PInput>
            </template>

            <PContentNavigation
              :key="navigationKey"
              :collapsible="false"
              :navigation="filteredNavigation"
              highlight
              :ui="{
                linkTrailingBadge: 'font-semibold uppercase',
              }"
            />
          </PPageAside>
        </template>

        <slot />
      </PPage>
    </PContainer>
  </PMain>
</template>
