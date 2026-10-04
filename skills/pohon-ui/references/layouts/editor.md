# Editor Layout

Build a rich text editor with toolbars, slash commands, mentions, and drag-and-drop.

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

```vue
<script setup lang="ts">
const content = ref({
  type: 'doc',
  content: [
    {
      type: 'heading',
      attrs: { level: 1 },
      content: [{ type: 'text', text: 'Hello World' }]
    },
    {
      type: 'paragraph',
      content: [{ type: 'text', text: 'Start writing...' }]
    }
  ]
})
</script>

<template>
  <PEditor v-slot="{ editor }" v-model="content">
    <PEditorToolbar :editor="editor" />
    <PEditorSuggestionMenu :editor="editor" />
    <PEditorMentionMenu
      :editor="editor"
      :items="[
        { label: 'Benjamin', avatar: { src: 'https://github.com/benjamincanac.png' } },
        { label: 'Sébastien', avatar: { src: 'https://github.com/atinux.png' } }
      ]"
    />
    <PEditorEmojiMenu :editor="editor" />
    <PEditorDragHandle :editor="editor" />
  </PEditor>
</template>
```

> If you encounter prosemirror-related errors, add prosemirror packages to `vite.optimizeDeps.include` in `nuxt.config.ts`.

## Key components

- `PEditor` — rich text editor. `v-model` accepts JSON (default), HTML, or Markdown via `content-type` prop. Default slot provides `{ editor, handlers }` — `editor` is the Tiptap instance, `handlers` contains action functions for toolbar/menus.
- `PEditorToolbar` — toolbar with `layout`: `'fixed'` (default), `'bubble'` (on selection), `'floating'` (on empty lines).
- `PEditorDragHandle` — block drag-and-drop handle.
- `PEditorSuggestionMenu` — slash command menu (type `/` to open).
- `PEditorMentionMenu` — `@` mention menu.
- `PEditorEmojiMenu` — emoji picker (type `:` to open).

## Toolbar modes

```vue
<!-- Fixed (default) — always visible at top -->
<PEditorToolbar :editor="editor" />

<!-- Bubble — appears on text selection -->
<PEditorToolbar :editor="editor" layout="bubble" />

<!-- Floating — appears on empty lines -->
<PEditorToolbar :editor="editor" layout="floating" />
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
    <PDashboardSidebar collapsible resizable>
      <template #header>
        <PButton icon="i-lucide-plus" label="New document" block />
      </template>

      <template #default="{ collapsed }">
        <PNavigationMenu
          :collapsed="collapsed"
          :items="documents.map(doc => ({
            label: doc.title,
            to: `/editor/${doc.id}`,
            icon: 'i-lucide-file-text'
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
definePageMeta({ layout: 'editor' })

const content = ref({ type: 'doc', content: [] })
</script>

<template>
  <PDashboardPanel>
    <template #header>
      <PDashboardNavbar title="Editor">
        <template #right>
          <PButton label="Save" icon="i-lucide-save" />
        </template>
      </PDashboardNavbar>
    </template>

    <PContainer class="py-8">
      <PEditor v-slot="{ editor }" v-model="content">
        <PEditorToolbar :editor="editor" />
        <PEditorSuggestionMenu :editor="editor" />
        <PEditorEmojiMenu :editor="editor" />
        <PEditorDragHandle :editor="editor" />
      </PEditor>
    </PContainer>
  </PDashboardPanel>
</template>
```
