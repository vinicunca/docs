<script setup lang="ts">
const props = defineProps<{
  styleProperty: string;
  contentClass?: string;
}>();

const el = useTemplateRef<HTMLElement>('el');
const elValue = ref('');

function readValue() {
  const node = el.value;
  if (!node) {
    return;
  }

  const value = getComputedStyle(node)[props.styleProperty as keyof CSSStyleDeclaration];
  elValue.value = typeof value === 'string' ? value : '';
}

useResizeObserver(el, readValue);
useEventListener('resize', readValue);
onMounted(readValue);
</script>

<template>
  <div class="not-prose border-default my-5 border rounded-lg overflow-hidden">
    <div class="border-default bg-muted/50 text-muted text-xs px-3 py-2 border-b flex gap-3 items-center justify-between">
      <span class="font-mono">{{ styleProperty }}</span>
      <span class="text-highlighted font-mono">{{ elValue || '—' }}</span>
    </div>
    <div class="p-4">
      <div
        ref="el"
        :class="contentClass"
        class="text-primary rounded-md bg-primary/10"
      >
        <slot :el-value="elValue" />
      </div>
    </div>
  </div>
</template>
