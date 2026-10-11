# Editor Layout

Build a rich text editor with toolbars, slash commands, mentions, and drag-and-drop. API: [editor](https://vinicunca.dev/raw/pohon/components/editor.md), [editor-toolbar](https://vinicunca.dev/raw/pohon/components/editor-toolbar.md).

## When to use

- Note-taking apps, CMS editors
- Collaborative editing interfaces
- Any rich text editing need (supports JSON, HTML, and Markdown)

## Component tree

```
PEditor
├── PEditorToolbar (fixed / bubble / floating)
├── PEditorDragHandle
├── PEditorSuggestionMenu
├── PEditorMentionMenu
└── PEditorEmojiMenu
```

## Basic editor

The toolbar and the menus render nothing until you pass `items`. Each item names a built-in action with `kind` (plus `mark`, `level`, … where needed); see [Editor handlers](https://vinicunca.dev/raw/pohon/components/editor.md).

```vue
<script setup lang="ts">
import type { EditorMentionMenuItem, EditorSuggestionMenuItem, EditorToolbarItem } from 'pohon-ui';
import { Emoji, gitHubEmojis } from '@tiptap/extension-emoji';

const content = ref('# Hello World\n\nStart writing...');

const toolbarItems: Array<Array<EditorToolbarItem>> = [
  [
    { kind: 'undo', icon: 'i-lucide-undo', tooltip: { text: 'Undo' } },
    { kind: 'redo', icon: 'i-lucide-redo', tooltip: { text: 'Redo' } }
  ],
  [
    { kind: 'mark', mark: 'bold', icon: 'i-lucide-bold', tooltip: { text: 'Bold' } },
    { kind: 'mark', mark: 'italic', icon: 'i-lucide-italic', tooltip: { text: 'Italic' } },
    { kind: 'mark', mark: 'code', icon: 'i-lucide-code', tooltip: { text: 'Code' } }
  ],
  [
    {
      icon: 'i-lucide-heading',
      tooltip: { text: 'Headings' },
      items: [
        { kind: 'heading', level: 1, icon: 'i-lucide-heading-1', label: 'Heading 1' },
        { kind: 'heading', level: 2, icon: 'i-lucide-heading-2', label: 'Heading 2' }
      ]
    },
    { kind: 'bulletList', icon: 'i-lucide-list', tooltip: { text: 'Bullet list' } },
    { kind: 'blockquote', icon: 'i-lucide-text-quote', tooltip: { text: 'Quote' } }
  ]
];

const suggestionItems: Array<Array<EditorSuggestionMenuItem>> = [[
  { type: 'label', label: 'Text' },
  { kind: 'paragraph', label: 'Paragraph', icon: 'i-lucide-type' },
  { kind: 'heading', level: 1, label: 'Heading 1', icon: 'i-lucide-heading-1' },
  { kind: 'bulletList', label: 'Bullet list', icon: 'i-lucide-list' }
], [
  { type: 'label', label: 'Insert' },
  { kind: 'codeBlock', label: 'Code block', icon: 'i-lucide-square-code' },
  { kind: 'horizontalRule', label: 'Divider', icon: 'i-lucide-separator-horizontal' }
]];

const mentionItems: Array<EditorMentionMenuItem> = [
  { label: 'alice', avatar: { src: 'https://i.pravatar.cc/64?u=alice' } },
  { label: 'bob', avatar: { src: 'https://i.pravatar.cc/64?u=bob' } }
];
</script>

<template>
  <PEditor
    v-slot="{ editor }"
    v-model="content"
    content-type="markdown"
    :extensions="[Emoji]"
    placeholder="Type / for commands..."
    class="min-h-48 w-full"
  >
    <PEditorToolbar
      :editor="editor"
      :items="toolbarItems"
    />
    <PEditorSuggestionMenu
      :editor="editor"
      :items="suggestionItems"
    />
    <PEditorMentionMenu
      :editor="editor"
      :items="mentionItems"
    />
    <PEditorEmojiMenu
      :editor="editor"
      :items="gitHubEmojis"
    />
    <PEditorDragHandle :editor="editor" />
  </PEditor>
</template>
```

If you hit prosemirror errors such as `Adding different instances of a keyed plugin`, pre-bundle the prosemirror packages in Nuxt:

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  vite: {
    optimizeDeps: {
      include: [
        'pohon-ui > prosemirror-state',
        'pohon-ui > prosemirror-transform',
        'pohon-ui > prosemirror-model',
        'pohon-ui > prosemirror-view',
        'pohon-ui > prosemirror-gapcursor'
      ]
    }
  }
});
```

## Key components

- `PEditor` — TipTap editor. `v-model` holds JSON, HTML, or Markdown; set `content-type` (`json`, `html`, `markdown`), otherwise strings are read as HTML and objects as JSON. Other props: `placeholder`, `extensions`, `starter-kit`, `handlers` (custom actions). The default slot provides `{ editor, handlers }`: `editor` is the TipTap instance.
- `PEditorToolbar` — toolbar built from `items` (Button props + `kind`, nested `items` for a dropdown) with `layout`: `'fixed'` (default), `'bubble'` (on selection), `'floating'` (on empty lines).
- `PEditorDragHandle` — block drag-and-drop handle.
- `PEditorSuggestionMenu` — command menu from `items`, opened with `/` (change with `char`).
- `PEditorMentionMenu` — mention menu from `items` (`label`, `avatar`), opened with `@`.
- `PEditorEmojiMenu` — emoji menu, opened with `:`. Needs the `Emoji` extension from `@tiptap/extension-emoji` and its `gitHubEmojis` (or your own list) as `items`.

## Toolbar modes

```vue
<!-- Fixed (default) — always visible at top -->
<PEditorToolbar :editor="editor" :items="toolbarItems" />

<!-- Bubble — appears on text selection -->
<PEditorToolbar :editor="editor" :items="toolbarItems" layout="bubble" />

<!-- Floating — appears on empty lines; pass block items (headings, lists, code block) -->
<PEditorToolbar :editor="editor" :items="blockItems" layout="floating" />
```

## Content types

```vue
<!-- JSON (default) -->
<PEditor v-model="jsonContent" />

<!-- HTML -->
<PEditor v-model="htmlContent" content-type="html" />

<!-- Markdown -->
<PEditor v-model="markdownContent" content-type="markdown" />
```

## With document sidebar

Combine with Dashboard layout for a multi-document editor:

```vue [layouts/editor.vue]
<template>
  <PDashboardGroup>
    <PDashboardSidebar
      collapsible
      resizable
    >
      <template #header>
        <PButton
          icon="i-lucide-plus"
          label="New document"
          block
        />
      </template>

      <template #default="{ collapsed }">
        <PNavigationMenu
          :collapsed="collapsed"
          :items="documents.map(doc => ({
            label: doc.title,
            to: `/editor/${doc.id}`,
            icon: 'i-lucide-file-text',
          }))"
          orientation="vertical"
        />
      </template>
    </PDashboardSidebar>

    <slot />
  </PDashboardGroup>
</template>
```

```vue [pages/editor/[id].vue]
<script setup lang="ts">
definePageMeta({ layout: 'editor' });

const content = ref({ type: 'doc', content: [] });
// toolbarItems and suggestionItems as in the basic example
</script>

<template>
  <PDashboardPanel>
    <template #header>
      <PDashboardNavbar title="Editor">
        <template #right>
          <PButton
            label="Save"
            icon="i-lucide-save"
          />
        </template>
      </PDashboardNavbar>
    </template>

    <PContainer class="py-8">
      <PEditor
        v-slot="{ editor }"
        v-model="content"
      >
        <PEditorToolbar
          :editor="editor"
          :items="toolbarItems"
        />
        <PEditorSuggestionMenu
          :editor="editor"
          :items="suggestionItems"
        />
        <PEditorDragHandle :editor="editor" />
      </PEditor>
    </PContainer>
  </PDashboardPanel>
</template>
```
