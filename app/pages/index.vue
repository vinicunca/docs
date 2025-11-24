<script setup lang="ts">
const features = [
  {
    title: 'Perkakas',
    description: 'Essential JavaScript/TypeScript utility functions to speed up your development workflow.',
    icon: 'i-lucide:wrench',
    to: '/perkakas',
    color: 'text-blue-500',
    bg: 'bg-blue-500/10',
    border: 'group-hover:border-blue-500/50',
  },
  {
    title: 'UnoCSS Preset',
    description: 'A powerful, opinionated preset with fluid typography, custom animations, and theme management.',
    icon: 'i-lucide:palette',
    to: '/unocss-preset',
    color: 'text-purple-500',
    bg: 'bg-purple-500/10',
    border: 'group-hover:border-purple-500/50',
  },
  {
    title: 'UnoCSS Variants',
    description: 'Advanced variant configurations for complex styling needs and responsive design patterns.',
    icon: 'i-lucide:sliders',
    to: '/unocss-variants',
    color: 'text-pink-500',
    bg: 'bg-pink-500/10',
    border: 'group-hover:border-pink-500/50',
  },
  {
    title: 'ESLint Config',
    description: 'Strict yet flexible linting rules to ensure code quality and consistency across projects.',
    icon: 'i-lucide:code',
    to: '/eslint',
    color: 'text-green-500',
    bg: 'bg-green-500/10',
    border: 'group-hover:border-green-500/50',
  },
  {
    title: 'Windows Dev',
    description: 'A comprehensive guide to setting up a perfect development environment on Windows.',
    icon: 'i-logos:microsoft-windows-icon',
    to: '/windows-dev',
    color: 'text-cyan-500',
    bg: 'bg-cyan-500/10',
    border: 'group-hover:border-cyan-500/50',
  },
];
</script>

<template>
  <div class="bg-gray-50 min-h-screen relative overflow-hidden dark:bg-gray-950">
    <!-- Background Effects -->
    <div class="pointer-events-none inset-0 absolute">
      <div class="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] inset-0 absolute from-primary-500/10 to-transparent via-transparent dark:from-primary-400/10" />
      <div class="bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] h-[600px] w-full left-1/2 top-0 absolute from-purple-500/10 to-transparent via-transparent blur-3xl -translate-x-1/2" />
      <!-- Grid Pattern -->
      <div class="bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 inset-0 absolute mix-blend-soft-light" />
    </div>

    <!-- Hero Section -->
    <div class="pb-16 pt-24 relative sm:pb-24 sm:pt-32">
      <div class="mx-auto px-4 text-center max-w-7xl lg:px-8 sm:px-6">
        <h1 class="text-5xl tracking-tight font-bold mb-8 sm:text-7xl">
          <span class="text-transparent from-gray-900 to-gray-900 via-gray-700 bg-gradient-to-r bg-clip-text dark:from-white dark:to-white dark:via-gray-200">
            Vinicunca
          </span>
        </h1>

        <p class="text-lg text-gray-600 leading-relaxed mx-auto mb-10 max-w-2xl sm:text-xl dark:text-gray-400">
          A curated collection of essential utilities, robust configurations, and design presets for modern web development.
        </p>

        <div class="flex flex-col gap-4 justify-center sm:flex-row">
          <NuxtLink
            to="https://github.com/vinicunca"
            target="_blank"
            class="text-gray-900 font-medium px-8 py-4 border border-gray-200 rounded-xl bg-white flex gap-2 transition-all items-center justify-center dark:text-white dark:border-gray-800 dark:bg-gray-900 hover:bg-gray-50 active:scale-95 hover:scale-105 dark:hover:bg-gray-800"
          >
            <i class="i-simple-icons:github text-xl" />
            GitHub
          </NuxtLink>
        </div>
      </div>
    </div>

    <!-- Features Grid -->
    <div class="mx-auto px-4 pb-32 max-w-7xl lg:px-8 sm:px-6">
      <div class="gap-6 grid grid-cols-1 lg:gap-8 lg:grid-cols-3 md:grid-cols-2">
        <NuxtLink
          v-for="feature in features"
          :key="feature.title"
          :to="feature.to"
          class="group p-8 border border-gray-200 rounded-3xl bg-white/50 transition-all duration-300 relative backdrop-blur-sm dark:border-gray-800 dark:bg-gray-900/50 hover:shadow-gray-200/50 hover:shadow-xl dark:hover:shadow-black/50 hover:-translate-y-1"
          :class="feature.border"
        >
          <div class="flex flex-col gap-6">
            <div
              class="rounded-2xl flex h-14 w-14 transition-colors duration-300 items-center justify-center"
              :class="[feature.bg, feature.color]"
            >
              <div
                :class="feature.icon"
                class="text-3xl"
              />
            </div>
            <div>
              <h3 class="text-xl text-gray-900 font-bold mb-3 transition-colors dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400">
                {{ feature.title }}
              </h3>
              <p class="text-gray-600 leading-relaxed dark:text-gray-400">
                {{ feature.description }}
              </p>
            </div>
            <div class="text-sm text-gray-500 font-medium mt-auto pt-4 flex transition-colors items-center dark:text-gray-500 group-hover:text-primary-600 dark:group-hover:text-primary-400">
              Learn more
              <i class="i-lucide:arrow-right ml-2 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
