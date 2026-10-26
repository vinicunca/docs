<script setup lang="ts">
import { joinURL } from 'ufo';
import { decodeThemeDoc } from '../utils/theme/link';
import { snapshotStoredTheme, writeStoredTheme } from '../utils/theme/storage';

const { track } = useAnalytics();

const studioIcons = useStudioIcons();

const { view, views, applyDoc, presets, activePreset } = useThemeStudio();
const { past, future, undo, redo } = useThemeStudioHistory({ record: true });

const route = useRoute();
const router = useRouter();

// A theme travels in ?doc=, a query rather than a hash so the server sees
// it: the page renders in the linked theme and the boot restore stands down
// (plugins/theme.ts), so a shared link paints right on its first frame
// instead of after hydration. Applied on both sides, the app config writes
// don't ride the payload. Consumed on mount, or the URL would keep
// re-applying it. A link naming a preset that no longer exists applies
// nothing and is consumed all the same.
const linked = route.query.doc !== undefined;
const link = typeof route.query.doc === 'string' ? await decodeThemeDoc(route.query.doc) : undefined;
const linkedPreset = link?.preset ? presets.find((entry) => entry.id === link.preset) : undefined;
const linkApplied = !!link && (!link.preset || !!linkedPreset);
if (linkApplied) {
  applyDoc(linkedPreset?.doc ?? link!);
  activePreset.value = linkedPreset?.id;
}

// The boot restore stood down for the link (plugins/theme.ts). One that
// applied has to be stored: its state arrived in the payload rather than
// through a change, so nothing else trips the persistence watcher. One that
// turned out not to be a theme hands the visitor their own theme back.
if (import.meta.client && linked) {
  if (linkApplied) {
    onMounted(() => writeStoredTheme(snapshotStoredTheme()));
  } else {
    useNuxtApp().$restoreStoredTheme();
  }
}

// The preview mirrors into ?view=, so a reload (or a shared link) lands on
// the same page. Read during setup rather than on mount: the server renders
// the requested view, and hydration has nothing to correct.
const requested = route.query.view;
if (typeof requested === 'string' && views.some((tab) => tab.value === requested)) {
  view.value = requested as typeof view.value;
}
// grid is the default, so it stays out of the URL, and a consumed theme link
// leaves it too. Written on mount as well: the view is app-level state, so
// coming back to /theme from another page lands on the last view with a URL
// that doesn't say so.
const sync = (value: typeof view.value) => router.replace({ query: { ...route.query, doc: undefined, view: value === 'grid' ? undefined : value } });
watch(view, sync);
onMounted(() => {
  if (linked || (route.query.view ?? 'grid') !== view.value) {
    sync(view.value);
  }
});

// The studio's preview is a card floating on a recessed canvas, which is the
// one background the semantic tokens can't express: `--ui-color-bg-*` only ever
// elevates, so there is no "behind the surface" step (v5's elevation ladder).
// Unhead drops the class on navigate, so the canvas stays on this page.
useHead({
  bodyAttrs: { class: 'theme-studio' },
});

const { url } = useSiteConfig();

const title = 'Theme';
const description = 'Customize Pohon UI live: colors, radius, fonts and icons, then export only what you changed.';

useSeoMeta({
  titleTemplate: '%s - Pohon UI',
  title,
  description,
  ogTitle: `${title} - Pohon UI`,
  ogDescription: description,
  // A static file rather than defineOgImage: the page renders per request
  // for ?doc= (nuxt.config routeRules) and ogImage.zeroRuntime only builds
  // images for prerendered routes, so the call would be a no-op here.
  ogImage: joinURL(url, '/theme/og-image.png'),
  // a shared link is one visitor's theme, not a page to index
  robots: linked ? 'noindex' : undefined,
});

useCanonical();

onMounted(() => {
  track('Theme Studio Opened');
  if (linkApplied) {
    track('Theme Link Applied', { preset: linkedPreset?.id });
  }
});

defineShortcuts({
  meta_z: undo,
  meta_shift_z: redo,
  ctrl_y: redo,
});

const shareOpen = ref(false);
</script>

<template>
  <main class="mx-auto max-w-(--ui-container) w-full">
    <PHeader
      :menu="{ modal: false }"
      :ui="{ root: () => 'h-(--ui-header-height) border-b border-transparent' }"
    >
      <template #left>
        <HeaderLogo />
      </template>

      <ThemeStudioViewSwitcher />

      <template #right>
        <PButton
          color="neutral"
          variant="solid"
          label="Export"
          class="hidden lg:inline-flex"
          @click="shareOpen = true"
        />
      </template>

      <template #toggle="{ open, toggle, ui }">
        <HeaderToggleButton
          :open="open"
          variant="soft"
          :class="ui.toggle({ toggleSide: 'right' })"
          @click="toggle"
        />
      </template>

      <!-- below `lg` the centre slot and the footer bar are both hidden, so
           the menu is the only way to reach the views and the controls -->
      <template #body>
        <div class="flex flex-col gap-3">
          <PFormField
            label="View"
            :ui="{ root: 'text-xs', container: 'mt-1' }"
          >
            <ThemeStudioViewSwitcher
              vertical
              class="w-full"
            />
          </PFormField>

          <ThemeStudioToolbar vertical />

          <PFormField
            label="Color mode"
            :ui="{ root: 'text-xs', container: 'mt-1' }"
          >
            <ThemeStudioColorModeTabs
              size="sm"
              class="w-full"
            />
          </PFormField>

          <PSeparator class="my-5" />

          <ThemeStudioShuffleButton
            variant="outline"
            vertical
          />
          <ThemeStudioResetButton
            variant="outline"
            vertical
          />

          <PButton
            :icon="studioIcons.export"
            color="neutral"
            label="Export theme"
            block
            @click="shareOpen = true"
          />
        </div>
      </template>
    </PHeader>

    <div class="mx-2 rounded-xl bg-background flex flex-col h-[calc(100dvh-var(--ui-header-height)-0.5rem)] ring ring-border shadow overflow-hidden lg:h-[calc(100dvh-var(--ui-header-height)-var(--ui-header-height)-0.5rem)]">
      <!-- [contain:paint]: Chromium won't clip nested composited layers by
             an ancestor's overflow alone -->
      <div class="flex-1 min-h-0 overflow-hidden *:contain-[paint]">
        <Playground v-if="view === 'grid'" />
        <LazyThemeStudioViewDashboard v-else-if="view === 'dashboard'" />
        <LazyThemeStudioViewChat v-else-if="view === 'chat'" />
        <LazyThemeStudioViewSaas v-else-if="view === 'saas'" />
        <LazyThemeStudioViewLanding v-else-if="view === 'landing'" />
        <LazyThemeStudioViewDocs v-else-if="view === 'docs'" />
        <LazyThemeStudioViewPortfolio v-else-if="view === 'portfolio'" />
        <LazyThemeStudioViewChangelog v-else-if="view === 'changelog'" />
        <LazyThemeStudioViewEditor v-else-if="view === 'editor'" />
      </div>
    </div>

    <!-- the centre takes every pixel the two clusters leave and shrinks
         (min-w-0), so the toolbar inside it scrolls instead of widening the bar -->
    <PFooter
      class="mx-2 mt-2 rounded-xl bg-background hidden ring ring-border lg:block"
      :ui="{ container: 'py-3! px-6!', left: 'mt-0 gap-0 lg:flex-none', center: 'flex-1 min-w-0 justify-start', right: 'mt-0 lg:flex-none' }"
    >
      <template #left>
        <div class="p-0.5 rounded-lg bg-background-elevated/50 flex gap-0.5 ring ring-border items-center">
          <PTooltip
            text="Undo"
            :kbds="['meta', 'Z']"
          >
            <PButton
              :icon="studioIcons.undo"
              color="neutral"
              variant="ghost"
              size="sm"
              :disabled="!past.length"
              aria-label="Undo theme change"
              @click="undo"
            />
          </PTooltip>

          <PTooltip
            text="Redo"
            :kbds="['meta', 'shift', 'Z']"
          >
            <PButton
              :icon="studioIcons.redo"
              color="neutral"
              variant="ghost"
              size="sm"
              :disabled="!future.length"
              aria-label="Redo theme change"
              @click="redo"
            />
          </PTooltip>

          <PSeparator
            orientation="vertical"
            class="mx-0.5 h-4"
          />

          <ThemeStudioResetButton size="sm" />
          <ThemeStudioShuffleButton size="sm" />
        </div>

        <PSeparator
          orientation="vertical"
          class="me-1.5 ms-4.5 py-1 h-auto self-stretch"
        />
      </template>

      <ThemeStudioToolbar />

      <template #right>
        <PTooltip
          text="Switch color mode"
          :kbds="['d']"
        >
          <ThemeStudioColorModeTabs
            data-keep-panels
            class="shrink-0"
          />
        </PTooltip>
      </template>
    </PFooter>

    <ThemeStudioShareModal v-model:open="shareOpen" />
  </main>
</template>
