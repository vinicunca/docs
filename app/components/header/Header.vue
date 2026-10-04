<script setup lang="ts">
const { desktopLinks, currentPackage } = useHeader()
const { packageSections } = useNavigation(inject('navigation')!)
</script>

<!-- eslint-disable vue/no-template-shadow -->
<template>
  <PHeader
    :ui="{
      right: 'gap-0.5'
    }"
    class="flex flex-col"
  >
    <template #left>
      <HeaderLogo />

      <VersionMenu v-if="currentPackage" :package="currentPackage" />
    </template>

    <PNavigationMenu :items="desktopLinks" variant="link" content-orientation="vertical" />

    <template #right>
      <PTooltip text="Search" :kbds="['meta', 'K']" class="max-lg:order-[-1]" ignore-non-keyboard-focus>
        <PContentSearchButton />
      </PTooltip>

      <!-- lazy for the theme engine it pulls: Vue keeps the server's button
           and hydrates it when the chunk lands -->
      <LazyThemeStudioPresetPicker />

      <PTooltip text="Open on GitHub" class="hidden lg:flex" ignore-non-keyboard-focus>
        <PButton
          color="neutral"
          variant="ghost"
          :to="currentPackage?.github || 'https://github.com/vinicunca'"
          target="_blank"
          icon="i-simple-icons-github"
          aria-label="Open on GitHub"
        />
      </PTooltip>
    </template>

    <template #toggle="{ open, toggle, ui }">
      <HeaderToggleButton
        :open="open"
        :class="ui.toggle({ toggleSide: 'right' })"
        @click="toggle"
      />
    </template>

    <template #body>
      <HeaderBody />
    </template>

    <template v-if="currentPackage && packageSections.length" #bottom>
      <HeaderBottom />
    </template>
  </PHeader>
</template>
