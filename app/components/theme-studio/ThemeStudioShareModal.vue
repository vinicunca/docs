<script setup lang="ts">
import type { MarkdownDoc } from '../../utils/markdown';
import { useClipboard } from '@vueuse/core';
import { parseCode } from '../../utils/markdown';
import { encodeThemeDoc } from '../../utils/theme/link';

/**
 * The export modal: a link that carries the whole theme, then the generated
 * files, one tab each, to copy or download.
 */
const open = defineModel<boolean>('open', { default: false });

const appConfig = useAppConfig();
const studioIcons = useStudioIcons();
const { exportCSS, exportConfig, configLabel, currentDoc } = useTheme();
const { presets, activePreset, dirty } = useThemeStudio();
const { framework } = useFrameworks();
const { track } = useAnalytics();

// One clipboard per action, or copying a file would light up the link button.
const { copy: copyToClipboard, copied: linkCopied } = useClipboard();
const { copy: copyFileToClipboard, copied: fileCopied } = useClipboard();

const css = ref('');
const config = ref('');
const link = ref('');

/** The URL the studio reads back on load, theme and all. */
async function buildLink() {
  const doc = currentDoc();
  const preset = presets.find((entry) => entry.id === activePreset.value);
  // the id only while nothing has been touched since, so a tweak still
  // travels whole; the studio's own measure, a raw comparison would miss
  // every preset whose tokens applyDoc promotes into shades
  const payload = preset && !dirty.value ? { version: 1 as const, preset: preset.id } : doc;
  // a query, not a hash, so the server renders the linked theme (pages/theme.vue)
  return `${window.location.origin}${window.location.pathname}?doc=${await encodeThemeDoc(payload)}`;
}

function copyThemeLink() {
  copyToClipboard(link.value);
  track('Theme Exported', { type: 'Link' });
}

// the pane shows the plain file for the frame the highlighter takes to arrive
const docs = shallowRef<Partial<Record<'css' | 'config', MarkdownDoc>>>({});

const panes = computed(() => [
  { key: 'css' as const, filename: 'main.css', code: css.value },
  { key: 'config' as const, filename: configLabel.value, code: config.value },
]);

const tab = ref<'css' | 'config'>('css');
const pane = computed(() => panes.value.find((entry) => entry.key === tab.value) ?? panes.value[0]!);

/** Copy and Download both act on the file the tab is showing. */
function copyFile() {
  copyFileToClipboard(pane.value.code);
  track('Theme Exported', { type: pane.value.key === 'css' ? 'CSS' : 'Config', action: 'Copy' });
}

function downloadFile() {
  const url = URL.createObjectURL(new Blob([pane.value.code], { type: 'text/plain;charset=utf-8' }));
  const anchor = Object.assign(document.createElement('a'), { href: url, download: pane.value.filename });
  // in the document for the click, and the URL outlives the handler: Safari
  // starts the download after the click returns
  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();
  setTimeout(() => URL.revokeObjectURL(url), 0);
  track('Theme Exported', { type: pane.value.key === 'css' ? 'CSS' : 'Config', action: 'Download' });
}

// framework too: only one half of the export is framework-agnostic. The last
// change wins: a run for a framework that has moved on is dropped.
let version = 0;
watch([open, framework], async ([isOpen]) => {
  const current = ++version;
  css.value = '';
  config.value = '';
  docs.value = {};

  if (!isOpen) {
    return;
  }

  const [nextCss, nextConfig] = await Promise.all([exportCSS(), exportConfig()]);
  const [cssDoc, configDoc] = await Promise.all([parseCode(nextCss, 'css'), parseCode(nextConfig, 'ts')]);
  if (current !== version) {
    return;
  }

  css.value = nextCss;
  config.value = nextConfig;
  docs.value = { css: cssDoc, config: configDoc };
});

// The theme can't change while the modal covers the studio, so the link is
// built once per open.
watch(open, async (isOpen) => {
  link.value = isOpen ? await buildLink() : '';
});
</script>

<template>
  <PModal
    v-model:open="open"
    title="Export theme"
    :ui="{ content: 'max-w-4xl', body: 'p-0 sm:p-0' }"
  >
    <template #actions>
      <FrameworkTabs class="me-8 ms-auto w-40" />
    </template>

    <template #body>
      <div class="p-4 border-b border-border bg-background-elevated/50 flex flex-col gap-2 sm:px-6">
        <div class="flex gap-2 items-center">
          <PIcon
            :name="studioIcons.link"
            class="color-text-dimmed shrink-0 size-4"
          />
          <span class="text-sm color-text-highlighted font-semibold">Share link</span>
          <span class="text-sm color-text-muted hidden truncate sm:block">Opens the editor with this theme applied</span>
        </div>

        <div class="flex gap-2 items-center">
          <PInput
            :model-value="link"
            readonly
            class="flex-1 min-w-0"
            :ui="{ base: 'font-mono text-xs py-2' }"
            aria-label="Link to this theme"
            @focus="($event.target as HTMLInputElement).select()"
          />

          <PButton
            :icon="linkCopied ? appConfig.ui.icons.copyCheck : appConfig.ui.icons.copy"
            label="Copy link"
            color="neutral"
            @click="copyThemeLink"
          />
        </div>
      </div>

      <div class="p-4 flex flex-col gap-3 sm:p-6">
        <div class="flex gap-2 items-center">
          <PButton
            v-for="entry in panes"
            :key="entry.key"
            color="neutral"
            variant="ghost"
            :active="tab === entry.key"
            active-variant="soft"
            :label="entry.filename"
            @click="tab = entry.key"
          >
            <template #leading>
              <ProseCodeIcon
                :filename="entry.filename"
                class="shrink-0 size-5"
              />
            </template>
          </PButton>

          <div class="ms-auto flex gap-2 items-center">
            <PButton
              :icon="fileCopied ? appConfig.ui.icons.copyCheck : appConfig.ui.icons.copy"
              label="Copy"
              color="neutral"
              variant="outline"
              :ui="{ base: 'px-1.5 sm:px-2.5', label: 'hidden sm:inline-flex' }"
              :disabled="!pane.code"
              @click="copyFile"
            />

            <PButton
              :icon="studioIcons.download"
              label="Download"
              color="neutral"
              variant="outline"
              class="hidden lg:inline-flex"
              :disabled="!pane.code"
              @click="downloadFile"
            />
          </div>
        </div>

        <!-- A fixed pane height: the files and the highlighter both land after
             the modal paints, a box that sized to them would jump. -->
        <CodePane
          v-if="docs[pane.key]"
          :doc="docs[pane.key]!"
          :ui="{ root: 'my-0', base: 'h-96 whitespace-pre text-xs/5' }"
        />
        <ProsePre
          v-else
          :code="pane.code"
          :copy="false"
          :ui="{ root: 'my-0', base: 'h-96 whitespace-pre text-xs/5' }"
        >
          {{ pane.code }}
        </ProsePre>
      </div>
    </template>
  </PModal>
</template>
