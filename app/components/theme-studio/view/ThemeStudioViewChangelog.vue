<script setup lang="ts">
import { Markdown } from '@comark/vue'
import shiki from '@comark/vue/plugins/shiki'

// Example changelog layout for the theme preview
// in a single self-contained preview: app.vue's split layout with the sticky
// intro panel + SkyBg on the left, and pages/index.vue's PChangelogVersions
// feed on the right. Release notes are inlined since the template fetches them
// from GitHub and renders them with Comark, neither of which is available here.

// built once: in the template it would be a new plugin on every render
const plugins = [shiki()]

const appConfig = useAppConfig()
const studioIcons = useStudioIcons()

const introLinks = computed(() => [{
  label: 'Documentation',
  icon: studioIcons.bookOpen,
  color: 'neutral' as const,
  variant: 'ghost' as const,
  size: 'md' as const
}, {
  label: 'GitHub',
  icon: 'i-simple-icons-github',
  color: 'neutral' as const,
  variant: 'ghost' as const,
  size: 'md' as const
}])

/**
 * Invented releases in the shape the template fetches from GitHub: a tag, a
 * date, a one line summary under the title and a markdown body. The template
 * renders that body with Comark, and so does this, so the headings, code
 * blocks, callouts and commit links all come from the markdown rather than
 * from hand-written prose markup.
 */
interface Release {
  tag: string
  title: string
  description: string
  date: string
  body: string
}

const versions: Release[] = [{
  tag: 'sample-2',
  title: 'Sample release 2',
  description: 'Example release notes for the theme preview.',
  date: '2026-01-02T00:00:00Z',
  body: `## Changes

- Add a new component example.
- Improve keyboard navigation in a sample workflow.`
}, {
  tag: 'sample-1',
  title: 'Sample release 1',
  description: 'Example release notes for the theme preview.',
  date: '2026-01-01T00:00:00Z',
  body: `## Changes

- Set up the application shell.
- Add a theme with semantic colors.`
}]

// Inline replica of the template's SkyBg component: twinkling primary stars
// scattered across the sticky intro panel.
interface Star {
  x: number
  y: number
  size: number
  delay: number
}

const stars = ref<Star[]>([])

onMounted(() => {
  stars.value = Array.from({ length: 50 }, () => ({
    x: Math.floor(Math.random() * 100),
    y: Math.floor(Math.random() * 100),
    size: Math.random() * 2 + 1,
    delay: Math.random() * 5
  }))
})
</script>

<template>
  <!-- The pane is the scroll container; the intro panel sticks to it on xl. The
       color mode button sits outside it, the way the template's is fixed. -->
  <div class="relative h-full">
    <!-- Static: the studio toolbar owns color mode. -->
    <PButton
      color="neutral"
      variant="ghost"
      aria-label="Color mode"
      class="absolute top-4 right-4 z-20"
    >
      <template #leading="{ ui }">
        <PIcon :name="appConfig.ui.icons.dark" :class="ui.leadingIcon({ class: 'hidden dark:inline-block' })" />
        <PIcon :name="appConfig.ui.icons.light" :class="ui.leadingIcon({ class: 'dark:hidden' })" />
      </template>
    </PButton>

    <div class="h-full overflow-y-auto bg-background">
      <div class="min-h-full xl:grid xl:grid-cols-2">
        <PPageSection
          title="Release Notes"
          description="Display GitHub release notes as a beautiful changelog for any repository with this Pohon UI template."
          orientation="vertical"
          :links="introLinks"
          :ui="{
            root: 'border-b border-border xl:border-b-0 xl:sticky xl:top-0 xl:h-[calc(100dvh_-_var(--ui-header-height)_*_2_-_0.5rem)] overflow-hidden',
            container: 'h-full items-center justify-center',
            wrapper: 'flex flex-col',
            headline: 'mb-6',
            title: 'text-left text-4xl',
            description: 'text-left max-w-lg',
            links: 'gap-1 justify-start -ms-2.5'
          }"
        >
          <template #top>
            <!-- Template's SkyBg: twinkling primary stars. -->
            <div class="absolute inset-0 pointer-events-none z-[-1] overflow-hidden">
              <div
                v-for="(star, index) in stars"
                :key="index"
                class="star absolute rounded-full bg-primary"
                :style="{
                  'left': `${star.x}%`,
                  'top': `${star.y}%`,
                  'width': `${star.size}px`,
                  'height': `${star.size}px`,
                  'transform': 'translate(-50%, -50%)',
                  '--twinkle-delay': `${star.delay}s`
                }"
              />
            </div>

            <div class="absolute -right-1/2 z-[-1] rounded-full bg-primary blur-[300px] size-60 sm:size-100 transform -translate-y-1/2 top-1/2" />
          </template>

          <template #headline>
            <!-- Stand-in for the template's AppLogo wordmark. -->
            <div class="flex items-center gap-1.5">
              <PIcon name="i-simple-icons-nuxt" class="size-6 text-primary shrink-0" />
              <span class="text-xl font-bold"><span class="color-text-highlighted">Nuxt</span><span class="text-primary">UI</span></span>
            </div>
          </template>

          <template #default />
        </PPageSection>

        <section class="relative px-4 sm:px-6 xl:px-0 xl:-ms-30 xl:flex-1">
          <PChangelogVersions
            as="main"
            :indicator-motion="false"
            :ui="{
              root: 'py-16 sm:py-24 lg:py-32',
              indicator: 'inset-y-0'
            }"
          >
            <PChangelogVersion
              v-for="version in versions"
              :key="version.tag"
              :title="version.title"
              :description="version.description"
              :date="version.date"
              :ui="{
                root: 'flex items-start',
                container: 'max-w-xl min-w-0',
                header: 'border-b border-border pb-4 mb-8',
                title: 'text-3xl',
                description: 'mt-2',
                date: 'text-xs/9 color-text-highlighted font-mono',
                indicator: 'sticky top-0 pt-16 -mt-16 sm:pt-24 sm:-mt-24 lg:pt-32 lg:-mt-32'
              }"
            >
              <template #body>
                <Markdown :value="version.body" :plugins="plugins" class="*:first:mt-0 *:last:mb-0" />
              </template>
            </PChangelogVersion>
          </PChangelogVersions>
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped>
.star {
  animation: changelog-twinkle 2s ease-in-out infinite;
  animation-delay: var(--twinkle-delay);
  will-change: opacity;
}

@keyframes changelog-twinkle {
  0%, 100% {
    opacity: 0.2;
  }

  50% {
    opacity: 1;
  }
}
</style>
