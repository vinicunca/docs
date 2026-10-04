<script setup lang="ts">
import type { ButtonProps } from 'pohon-ui'

withDefaults(defineProps<ButtonProps & {
  vertical?: boolean
}>(), {
  variant: 'ghost'
})

const studioIcons = useStudioIcons()
const { canReset, resetLabel, resetToBaseline } = useThemeStudioToolbar()
</script>

<template>
  <PTooltip :text="resetLabel" :disabled="vertical">
    <PButton
      :icon="studioIcons.reset"
      :label="vertical ? resetLabel : undefined"
      color="neutral"
      :variant="vertical ? 'outline' : variant"
      :size="size"
      :block="vertical"
      :disabled="!canReset"
      :aria-label="resetLabel"
      :ui="{ leadingIcon: vertical && 'color-text-dimmed' }"
      @click="resetToBaseline"
    />
  </PTooltip>
</template>
