<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content';
import type { Ref } from 'vue';
import { PContentNavigation, PNavigationMenu, PSeparator } from '#components';
import { useHeader, useNavigation } from '#imports';
import { inject } from 'vue';

const navigation = inject<Ref<Array<ContentNavigationItem>>>('navigation');

const { mobileLinks } = useHeader();
const { activePackage, activeSection, contextLabel, sections, sectionTabs, navigationByCategory } = useNavigation(navigation!);
</script>

<template>
  <PNavigationMenu
    orientation="vertical"
    :items="mobileLinks"
    class="-mx-2.5"
  />

  <template v-if="sections.length">
    <PSeparator
      type="dashed"
      class="mb-6 mt-4"
    />

    <div class="mb-4">
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

    <PNavigationMenu
      v-if="sectionTabs.length > 1"
      orientation="vertical"
      :items="sectionTabs"
      class="-mx-2.5 mb-4"
    />

    <PContentNavigation
      :navigation="navigationByCategory"
      highlight
      :pohon="{ linkTrailingBadge: 'font-semibold uppercase' }"
    />
  </template>
</template>
