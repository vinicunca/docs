<script setup lang="ts">
import { iconSetSamples } from '../../../utils/theme/icons';

/** The icon-pack select, every set previewing a strip of its own glyphs. */
defineProps<{ vertical?: boolean }>();

const { icon, icons } = useTheme();
const { groupDirtyFlags } = useThemeStudioToolbar();
</script>

<template>
  <ThemeStudioToolbarSelect
    v-model="icon"
    :items="icons"
    :icon="icons.find(entry => entry.value === icon)?.icon"
    :dirty="groupDirtyFlags.icons.value"
    aria-label="Icon set"
    :vertical="vertical"
    :class="vertical ? 'w-full' : 'w-38'"
  >
    <template #item-description="{ item }">
      <span class="flex shrink-0 gap-1 items-center">
        <PIcon
          v-for="name in iconSetSamples(String(item.value))"
          :key="name"
          :name="name"
          class="color-text-dimmed size-3"
        />
      </span>
    </template>
  </ThemeStudioToolbarSelect>
</template>
