<script setup lang="ts">
import type { Ref } from 'vue';
import type { ContentNavigationItem } from '@nuxt/content';
import { inject } from 'vue';
import { PContainer, PNavigationMenu, PSeparator } from '#components';
import { useNavigation } from '#imports';

const navigation = inject<Ref<Array<ContentNavigationItem>>>('navigation');
const { activePackage, sectionTabs } = useNavigation(navigation!);
</script>

<template>
  <template v-if="activePackage && sectionTabs.length > 1">
    <PSeparator class="hidden lg:flex" />

    <PContainer class="docs-section-nav hidden lg:flex items-center">
      <PNavigationMenu
        :items="sectionTabs"
        variant="pill"
        highlight
        class="-mx-2.5 -mb-px"
      />
    </PContainer>
  </template>
</template>
