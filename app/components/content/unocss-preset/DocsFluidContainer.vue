<script setup lang="ts">
const props = defineProps<{
  styleProperty: string
  contentClass?: string
}>()

const el = useTemplateRef<HTMLElement>('el')
const elValue = ref('')

function readValue() {
  const node = el.value
  if (!node) {
    return
  }

  const value = getComputedStyle(node)[props.styleProperty as keyof CSSStyleDeclaration]
  elValue.value = typeof value === 'string' ? value : ''
}

useResizeObserver(el, readValue)
useEventListener('resize', readValue)
onMounted(readValue)
</script>

<template>
  <div class="not-prose my-5 overflow-hidden rounded-lg border border-default">
    <div class="flex items-center justify-between gap-3 border-b border-default bg-muted/50 px-3 py-2 text-xs text-muted">
      <span class="font-mono">{{ styleProperty }}</span>
      <span class="font-mono text-highlighted">{{ elValue || '—' }}</span>
    </div>
    <div class="p-4">
      <div
        ref="el"
        :class="contentClass"
        class="rounded-md bg-primary/10 text-primary"
      >
        <slot :el-value="elValue" />
      </div>
    </div>
  </div>
</template>
