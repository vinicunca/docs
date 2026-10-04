<script setup lang="ts">
import { useClipboard } from '@vueuse/core'

const value = ref('pnpm add pohon-ui')

const { copy, copied } = useClipboard()
</script>

<template>
  <PInput
    v-model="value"
    :ui="{ trailing: 'pr-0.5' }"
  >
    <template v-if="value?.length" #trailing>
      <PTooltip text="Copy to clipboard" :content="{ side: 'right' }">
        <PButton
          :color="copied ? 'success' : 'neutral'"
          variant="link"
          size="sm"
          :icon="copied ? 'i-lucide-copy-check' : 'i-lucide-copy'"
          aria-label="Copy to clipboard"
          @click="copy(value)"
        />
      </PTooltip>
    </template>
  </PInput>
</template>
