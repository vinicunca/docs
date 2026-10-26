<script setup lang="ts">
const items = [
  {
    id: '/',
    label: 'Introduction',
    level: 1,
  },
  {
    id: '/pohon/getting-started#whats-new-in-v3',
    label: 'What\'s new in v3?',
    level: 2,
  },
  {
    id: '/pohon/getting-started#akar',
    label: 'Akar',
    level: 3,
  },
  {
    id: '/pohon/getting-started/installation/nuxt',
    label: 'UnoCSS',
    level: 3,
  },
  {
    id: '/pohon/getting-started#unocss-variants',
    label: 'UnoCSS Variants',
    level: 3,
  },
  {
    id: '/pohon/getting-started/installation',
    label: 'Installation',
    level: 1,
  },
];

function postFilter(searchTerm: string, items: Array<any>) {
  // Filter only first level items if no searchTerm
  if (!searchTerm) {
    return items?.filter((item) => item.level === 1);
  }

  return items;
}
</script>

<template>
  <PCommandPalette
    :groups="[{ id: 'files', items, postFilter }]"
    class="flex-1"
  />
</template>
