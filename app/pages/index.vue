<script setup lang="ts">
const features = [
  {
    title: 'Perkakas',
    description: 'Essential JavaScript/TypeScript utility functions to speed up your development workflow.',
    icon: 'i-ph-wrench-duotone',
    to: '/perkakas',
    color: 'text-blue-500',
  },
  {
    title: 'UnoCSS Preset',
    description: 'A powerful, opinionated preset with fluid typography, custom animations, and theme management.',
    icon: 'i-ph-palette-duotone',
    to: '/unocss-preset',
    color: 'text-purple-500',
  },
  {
    title: 'ESLint Config',
    description: 'Strict yet flexible linting rules to ensure code quality and consistency across projects.',
    icon: 'i-ph-code-duotone',
    to: '/eslint',
    color: 'text-green-500',
  },
  {
    title: 'Windows Dev',
    description: 'A comprehensive guide to setting up a perfect development environment on Windows.',
    icon: 'i-ph-windows-logo-duotone',
    to: '/windows-dev',
    color: 'text-cyan-500',
  },
];
</script>

<template>
  <div class="relative overflow-hidden">
    <!-- Hero Section -->
    <div class="relative pt-20 pb-16 sm:pt-32 sm:pb-24">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-4xl sm:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-primary-500 to-purple-600 bg-clip-text text-transparent">
          Vinicunca
        </h1>
        <p class="mx-auto max-w-2xl text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-10">
          A curated collection of essential utilities, robust configurations, and design presets for modern web development.
        </p>
        <div class="flex justify-center gap-4">
          <NuxtLink
            to="/perkakas"
            class="px-6 py-3 rounded-lg bg-primary-600 text-white font-medium hover:bg-primary-700 transition-colors"
          >
            Get Started
          </NuxtLink>
          <NuxtLink
            to="https://github.com/vinicunca/vinicunca"
            target="_blank"
            class="px-6 py-3 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-medium hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors flex items-center gap-2"
          >
            <div class="i-ph-github-logo-duotone text-xl" />
            GitHub
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Features Grid -->
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-24">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        <NuxtLink
          v-for="feature in features"
          :key="feature.title"
          :to="feature.to"
          class="group relative p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-primary-500/50 dark:hover:border-primary-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/10"
        >
          <div class="flex items-start gap-4">
            <div
              class="p-3 rounded-xl bg-gray-50 dark:bg-gray-800 group-hover:bg-primary-50 dark:group-hover:bg-primary-900/20 transition-colors"
              :class="feature.color"
            >
              <div
                :class="feature.icon"
                class="text-2xl"
              />
            </div>
            <div>
              <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                {{ feature.title }}
              </h3>
              <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
                {{ feature.description }}
              </p>
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
