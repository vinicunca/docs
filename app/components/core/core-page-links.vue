<!-- eslint-disable sonar/no-nested-template-literals -->
<script lang="ts" setup>
import { useRoute } from '#app';
import { PButton, PFieldGroup } from '#components';
import { useSiteConfig, useToast } from '#imports';
import { useClipboard } from '@vueuse/core';
import { computed } from 'vue';

const route = useRoute();
const toast = useToast();
const site = useSiteConfig();
const { copy, copied } = useClipboard();

const mdPath = computed(() => `${site.url}/raw${route.path}.md`);

const items = [
  {
    label: 'Copy Markdown link',
    icon: 'i-lucide-link',
    onSelect() {
      copy(mdPath.value);
      toast.add({
        title: 'Copied to clipboard',
        icon: 'i-lucide-check-circle',
      });
    },
  },
  {
    label: 'View as Markdown',
    icon: 'i-simple-icons:markdown',
    target: '_blank',
    to: `/raw${route.path}.md`,
  },
  {
    label: 'Open in Claude',
    icon: 'i-simple-icons:anthropic',
    target: '_blank',
    to: `https://claude.ai/new?q=${encodeURIComponent(`Read ${mdPath.value} so I can ask questions about it.`)}`,
  },
  {
    label: 'Open in ChatGPT',
    icon: 'i-simple-icons:openai',
    target: '_blank',
    to: `https://chatgpt.com/?hints=search&q=${encodeURIComponent(`Read ${mdPath.value} so I can ask questions about it.`)}`,
  },
];

async function copyPage() {
  copy(await $fetch<string>(`/raw${route.path}.md`));
}
</script>

<template>
  <PFieldGroup>
    <PButton
      label="Copy page"
      :icon="copied ? 'i-lucide:copy-check' : 'i-lucide:copy'"
      color="neutral"
      variant="outline"
      loading-auto
      :pohon="{
        leadingIcon: [copied ? 'color-primary' : 'color-neutral', 'size-3.5'],
      }"
      @click="copyPage"
    />

    <PDropdownMenu
      :items="items"
      :content="{
        align: 'end',
        side: 'bottom',
        sideOffset: 8,
      }"
      :class="{
        content: 'w-48',
      }"
    >
      <PButton
        icon="i-lucide-chevron-down"
        size="sm"
        color="neutral"
        variant="outline"
        aria-label="Open copy actions menu"
      />
    </PDropdownMenu>
  </PFieldGroup>
</template>
