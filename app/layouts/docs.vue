<script lang="ts" setup>
import type { Ref } from '#imports';
import type { ContentNavigationItem } from '@nuxt/content';
import { PContainer, PContentNavigation, PMain } from '#components';
import { computed, defineShortcuts, inject, onMounted, ref, useNavigation, useRoute, useTemplateRef, watch } from '#imports';
import { useDebounceFn } from '@vueuse/core';
import { useFilter } from 'akar';

const route = useRoute();

const navigation = inject<Ref<Array<ContentNavigationItem>>>('navigation');

const { activePackage, activeSection, contextLabel, navigationByCategory } = useNavigation(navigation!);

const { contains } = useFilter({ sensitivity: 'base' });

function countPages(items: Array<ContentNavigationItem>): number {
  return items.reduce((count, item) => count + (item.children?.length ? countPages(item.children) : 1), 0);
}

function filterItems(items: Array<ContentNavigationItem>, term: string): Array<ContentNavigationItem> {
  return items.flatMap((item) => {
    const children = item.children ? filterItems(item.children, term) : [];
    const matches = contains(item.title ?? '', term)
      || contains(String(item.description ?? ''), term);

    if (!matches && !children.length) {
      return [];
    }

    return [{ ...item, children: matches ? item.children : children }];
  });
}

const isActiveSearch = computed(() =>
  countPages(navigationByCategory.value) > 1,
);
const searchTerm = ref('');
const input = useTemplateRef('input');

const filteredNavigation = computed(() => {
  if (!searchTerm.value) {
    return navigationByCategory.value;
  }

  return filterItems(navigationByCategory.value, searchTerm.value);
});

const refNav = useTemplateRef('refNav');

function scrollToActiveItem() {
  if (import.meta.server || !refNav.value) {
    return;
  }
  // Find the anchor tag inside the li tag and check if the href matches the current route
  const activeElement = document.querySelector(`nav[data-akar="content-nav"] li a[href="${route.path}"]`) as HTMLElement;

  if (activeElement) {
    const containerRect = refNav.value.getBoundingClientRect();
    const elementRect = activeElement.getBoundingClientRect();

    // Calculate the scroll position to center the element in the container
    const scrollTop = refNav.value.scrollTop + (elementRect.top - containerRect.top) - (containerRect.height / 2) + (elementRect.height / 2);

    refNav.value.scrollTo({
      behavior: 'smooth',
      top: scrollTop,
    });
  }
}

const debouncedScroll = useDebounceFn(scrollToActiveItem, 320);

watch(
  () => route.path,
  () => {
    debouncedScroll();

    if (!isActiveSearch.value) {
      searchTerm.value = '';
    }
  },
  { immediate: true },
);

defineShortcuts({
  '/': {
    usingInput: true,
    handler: () => {
      input.value?.inputRef?.focus();
    },
  },
});

onMounted(() => {
  scrollToActiveItem();
});

const slug = computed(() => route.params.slug?.[0] as string);
</script>

<template>
  <PMain>
    <PContainer>
      <div class="flex flex-col lg:(gap-10 grid grid-cols-10)">
        <!-- Left Aside -->
        <aside
          ref="refNav"
          class="docs-sidebar py-8 hidden overflow-y-auto lg:(pe-6.5 ps-4 col-span-2 block sticky -ms-4)"
        >
          <div class="relative">
            <div class="mb-6">
              <p class="font-semibold color-text-highlighted">
                {{ contextLabel }}
                <span
                  v-if="activePackage?.status === 'work-in-progress'"
                  class="text-xs color-text-muted ms-2"
                >WIP</span>
              </p>
              <p class="text-sm color-text-muted">
                {{ activeSection?.label }}
              </p>
            </div>

            <div
              v-if="isActiveSearch"
              class="pointer-events-none sticky z-1 -mt-8 -top-8"
            >
              <div class="px-4 bg-background h-8 -mx-4" />

              <div class="px-4 bg-background flex flex-col pointer-events-auto relative -mx-4">
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
                      class="color-text-muted bg-transparent ring-ring-muted"
                    />
                  </template>
                </PInput>
              </div>

              <div class="px-4 h-8 from-background bg-gradient-to-b -mx-4" />
            </div>

            <PContentNavigation
              :key="route.path"
              data-akar="content-nav"
              :variant="slug === 'perkakas' ? 'link' : 'pill'"
              :highlight="slug !== 'perkakas'"
              :color="slug === 'perkakas' ? 'neutral' : 'primary'"
              :navigation="filteredNavigation"
              :pohon="{
                linkTrailingBadge: 'font-semibold uppercase',
              }"
            />
          </div>
        </aside>

        <div class="lg:col-span-8">
          <slot />
        </div>
      </div>
    </PContainer>
  </PMain>
</template>
