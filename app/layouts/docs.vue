<script lang="ts" setup>
import type { Ref } from '#imports';
import type { ContentNavigationItem } from '@nuxt/content';
import { PContainer, PContentNavigation, PMain } from '#components';
import { computed, defineShortcuts, inject, onMounted, ref, useNavigation, useRoute, useTemplateRef, watch } from '#imports';
import { useDebounceFn } from '@vueuse/core';
import { useFilter } from 'akar';

const route = useRoute();

const navigation = inject<Ref<Array<ContentNavigationItem>>>('navigation');

const { navigationByCategory } = useNavigation(navigation!);

const { contains } = useFilter({ sensitivity: 'base' });

const isActiveSearch = computed(() =>
  route.path !== '/',
);
const searchTerm = ref('');
const input = useTemplateRef('input');

const filteredNavigation = computed(() => {
  if (!searchTerm.value) {
    return navigationByCategory.value;
  }

  return navigationByCategory.value.map((item) => ({
    ...item,
    children: item.children?.filter((child) => contains({ string: child.title as string, substring: searchTerm.value }) || contains({ string: child.description as string, substring: searchTerm.value })),
  })).filter((item) => item.children && item.children.length > 0);
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
</script>

<template>
  <PMain>
    <PContainer>
      <div class="flex flex-col lg:(gap-10 grid grid-cols-10)">
        <!-- Left Aside -->
        <aside
          ref="refNav"
          class="py-8 hidden overflow-y-auto lg:(pe-6.5 ps-4 col-span-2 max-h-[calc(100vh-var(--pohon-header-height))] block sticky -ms-4 lg:top-$pohon-header-height)"
        >
          <div class="relative">
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
