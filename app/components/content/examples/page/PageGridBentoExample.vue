<script setup lang="ts">
const cards = ref([
  {
    title: 'Theme',
    description: 'Learn how to customize Pohon UI components using UnoCSS.',
    icon: 'i-lucide-swatch-book',
    to: '/pohon/getting-started/theme/design-system',
    class: 'lg:col-span-2',
    orientation: 'horizontal' as const,
  },
  {
    title: 'Fonts',
    description: 'Pohon UI integrates with Nuxt Fonts to provide plug-and-play font optimization.',
    icon: 'i-lucide-a-large-small',
    to: '/pohon/getting-started/integrations/fonts',
    variant: 'soft' as const,
  },
  {
    title: 'Color Mode',
    description: 'Pohon UI integrates with Nuxt Color Mode to switch between light and dark.',
    icon: 'i-lucide-sun-moon',
    to: '/pohon/getting-started/integrations/color-mode/nuxt',
    variant: 'soft' as const,
  },
  {
    title: 'Icons',
    description: 'Pohon UI integrates with Nuxt Icon to access over 200,000+ icons from Iconify.',
    icon: 'i-lucide-smile',
    to: '/pohon/getting-started/integrations/icons/nuxt',
    class: 'lg:col-span-2',
    orientation: 'horizontal' as const,
    reverse: true,
  },
]);
</script>

<template>
  <PPageGrid>
    <PPageCard
      v-for="(card, index) in cards"
      :key="index"
      v-bind="card"
    />
  </PPageGrid>
</template>
