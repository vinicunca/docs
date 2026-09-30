---
title: "EditorDragHandle"
description: "A draggable handle for reordering and selecting blocks in the editor."
package: pohon
sourceTag: "v2.0.1"
sourceCommit: "ee987babf834bae617d75a9c6b9347bba1a494df"
sourceUrl: "https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/docs/content/docs/2.components/editor-drag-handle.md"
---
## Usage

The EditorDragHandle component provides drag-and-drop functionality for reordering editor blocks using the `@tiptap/extension-drag-handle-vue-3` package.

> [!CAUTION]
> 
> It must be used inside an [Editor](/pohon/components/editor) component's default slot to have access to the editor instance.

It extends the [Button](/pohon/components/button) component, so you can pass any property such as `color`, `variant`, `size`, etc.

```vue [EditorDragHandleExample.vue]
<script setup lang="ts">
const value = ref(`# Drag Handle

Hover over the left side of this block to see the drag handle appear and reorder blocks.`)
</script>

<template>
  <PEditor
    v-slot="{ editor }"
    v-model="value"
    content-type="markdown"
    class="w-full min-h-21"
  >
    <PEditorDragHandle :editor="editor" />
  </PEditor>
</template>
```

> [!NOTE]
> See: https://tiptap.dev/docs/editor/extensions/functionality/drag-handle-vue
> 
> Learn more about the Drag Handle extension in the TipTap documentation.

### Icon

Use the `icon` prop to customize the drag handle icon.

```vue
<template>
  <PEditor v-slot="{ editor }">
    <PEditorDragHandle :editor="editor" icon="i-lucide-move" />
  </PEditor>
</template>
```

**Nuxt:**

> [!TIP]
> See: /docs/getting-started/integrations/icons/nuxt#theme
> 
> You can customize this icon globally in your `app.config.ts` under `ui.icons.drag` key.

**Vue:**

> [!TIP]
> See: /docs/getting-started/integrations/icons/vue#theme
> 
> You can customize this icon globally in your `vite.config.ts` under `ui.icons.drag` key.

### Options

Use the `options` prop to customize the positioning behavior using [Floating UI options](https://floating-ui.com/docs/computeposition#options).

> [!NOTE]
> 
> The offset is automatically calculated to center the handle for small blocks and align it to the top for taller blocks.

```vue
<template>
  <PEditor v-slot="{ editor }">
    <PEditorDragHandle
      :editor="editor"
      :options="{
        placement: 'left'
      }"
    />
  </PEditor>
</template>
```

## Examples

### With dropdown menu

Use the default slot to add a [DropdownMenu](/pohon/components/dropdown-menu) with block-level actions like duplicate, delete, move up/down, or transform blocks into different types.

Listen to the `@node-change` event to track the currently hovered node and its position, then use `editor.chain().setMeta('lockDragHandle', open).run()` to lock the handle position while the menu is open.

```vue [EditorDragHandleDropdownMenuExample.vue]
<script setup lang="ts">
import { upperFirst } from 'scule'
import type { DropdownMenuItem } from 'pohon-ui'
import { mapEditorItems } from 'pohon-ui/utils/editor'
import type { Editor, JSONContent } from '@tiptap/vue-3'

const value = ref(`Hover over the left side to see both drag handle and menu button.

Click the menu to see block actions. Try duplicating or deleting a block.`)

const selectedNode = ref<{ node: JSONContent, pos: number }>()

const items = (editor: Editor): DropdownMenuItem[][] => {
  if (!selectedNode.value?.node?.type) {
    return []
  }

  return mapEditorItems(editor, [[
    {
      type: 'label',
      label: upperFirst(selectedNode.value.node.type)
    },
    {
      label: 'Turn into',
      icon: 'i-lucide-repeat-2',
      children: [
        { kind: 'paragraph', label: 'Paragraph', icon: 'i-lucide-type' },
        { kind: 'heading', level: 1, label: 'Heading 1', icon: 'i-lucide-heading-1' },
        { kind: 'heading', level: 2, label: 'Heading 2', icon: 'i-lucide-heading-2' },
        { kind: 'heading', level: 3, label: 'Heading 3', icon: 'i-lucide-heading-3' },
        { kind: 'heading', level: 4, label: 'Heading 4', icon: 'i-lucide-heading-4' },
        { kind: 'bulletList', label: 'Bullet List', icon: 'i-lucide-list' },
        { kind: 'orderedList', label: 'Ordered List', icon: 'i-lucide-list-ordered' },
        { kind: 'blockquote', label: 'Blockquote', icon: 'i-lucide-text-quote' },
        { kind: 'codeBlock', label: 'Code Block', icon: 'i-lucide-square-code' }
      ]
    },
    {
      kind: 'clearFormatting',
      pos: selectedNode.value?.pos,
      label: 'Reset formatting',
      icon: 'i-lucide-rotate-ccw'
    }
  ], [
    {
      kind: 'duplicate',
      pos: selectedNode.value?.pos,
      label: 'Duplicate',
      icon: 'i-lucide-copy'
    },
    {
      label: 'Copy to clipboard',
      icon: 'i-lucide-clipboard',
      onSelect: async () => {
        if (!selectedNode.value) return

        const pos = selectedNode.value.pos
        const node = editor.state.doc.nodeAt(pos)
        if (node) {
          await navigator.clipboard.writeText(node.textContent)
        }
      }
    }
  ], [
    {
      kind: 'moveUp',
      pos: selectedNode.value?.pos,
      label: 'Move up',
      icon: 'i-lucide-arrow-up'
    },
    {
      kind: 'moveDown',
      pos: selectedNode.value?.pos,
      label: 'Move down',
      icon: 'i-lucide-arrow-down'
    }
  ], [
    {
      kind: 'delete',
      pos: selectedNode.value?.pos,
      label: 'Delete',
      icon: 'i-lucide-trash'
    }
  ]]) as DropdownMenuItem[][]
}
</script>

<template>
  <PEditor
    v-slot="{ editor }"
    v-model="value"
    content-type="markdown"
    class="w-full min-h-19"
  >
    <PEditorDragHandle v-slot="{ ui }" :editor="editor" @node-change="selectedNode = $event">
      <PDropdownMenu
        v-slot="{ open }"
        :modal="false"
        :items="items(editor)"
        :content="{ side: 'left' }"
        :ui="{ content: 'w-48', label: 'text-xs' }"
        @update:open="editor.chain().setMeta('lockDragHandle', $event).run()"
      >
        <PButton
          icon="i-lucide-grip-vertical"
          color="neutral"
          variant="ghost"
          active-variant="soft"
          size="sm"
          :active="open"
          :class="ui.handle()"
        />
      </PDropdownMenu>
    </PEditorDragHandle>
  </PEditor>
</template>
```

> [!NOTE]
> 
> This example uses the `mapEditorItems` utility from `pohon-ui/utils/editor` to automatically map handler kinds (like `duplicate`, `delete`, `moveUp`, etc.) to their corresponding editor commands with proper state management.

### With suggestion menu

Use the default slot to add a [Button](/pohon/components/button) next to the drag handle to open the [EditorSuggestionMenu](/pohon/components/editor-suggestion-menu).

Call the `onClick` slot function to get the current node position, then use `handlers.suggestion?.execute(editor, { pos: node?.pos }).run()` to insert new blocks at that position.

```vue [EditorDragHandleSuggestionMenuExample.vue]
<script setup lang="ts">
import type { EditorSuggestionMenuItem } from 'pohon-ui'

const value = ref(`Click the plus button to open the suggestion menu and add new blocks.

The button appears when hovering over blocks.`)

const suggestionItems: EditorSuggestionMenuItem[][] = [[{
  kind: 'heading',
  level: 1,
  label: 'Heading 1',
  icon: 'i-lucide-heading-1'
}, {
  kind: 'heading',
  level: 2,
  label: 'Heading 2',
  icon: 'i-lucide-heading-2'
}, {
  kind: 'bulletList',
  label: 'Bullet List',
  icon: 'i-lucide-list'
}, {
  kind: 'blockquote',
  label: 'Blockquote',
  icon: 'i-lucide-text-quote'
}]]
</script>

<template>
  <PEditor
    v-slot="{ editor, handlers }"
    v-model="value"
    content-type="markdown"
    class="w-full min-h-35"
    :ui="{ base: 'p-8 sm:px-16' }"
  >
    <PEditorSuggestionMenu :editor="editor" :items="suggestionItems" />

    <PEditorDragHandle v-slot="{ ui, onClick }" :editor="editor">
      <PButton
        icon="i-lucide-plus"
        color="neutral"
        variant="ghost"
        size="sm"
        :class="ui.handle()"
        @click="(e) => {
          e.stopPropagation()

          const selected = onClick()
          handlers.suggestion?.execute(editor, { pos: selected?.pos }).run()
        }"
      />

      <PButton
        icon="i-lucide-grip-vertical"
        color="neutral"
        variant="ghost"
        size="sm"
        :class="ui.handle()"
      />
    </PEditorDragHandle>
  </PEditor>
</template>
```

## API

### Props

### Slots

### Emits

No events available for this component.

## Theme

```ts [app.config.ts]
export default defineAppConfig({
  ui: {
    editorDragHandle: {
      slots: {
        root: 'hidden sm:flex items-center justify-center transition-all duration-280 ease-out',
        handle: 'cursor-grab px-1'
      }
    }
  }
})
```

## Changelog

See commit history for [component](https://github.com/vinicunca/pohon/commits/main/src/runtime/components/EditorDragHandle.vue) and [theme](https://github.com/vinicunca/pohon/commits/main/src/theme/editor-drag-handle.ts).

---

- [GitHub](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/EditorDragHandle.vue)


## Sitemap

See the full [sitemap](https://pohon.vinicunca.dev/sitemap.md) for all pages.

## Generated component API

[EditorDragHandle source](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/EditorDragHandle.vue)

### Props

- **icon** — `any; optional`
- **color** — `"primary" | "secondary" | "success" | "info" | "warning" | "error" | "neutral" | undefined; optional; default: "neutral"`
- **variant** — `"link" | "solid" | "outline" | "soft" | "subtle" | "ghost" | undefined; optional; default: "ghost"`
- **options** — `FloatingUIOptions | undefined; optional`: The options for positioning the drag handle. Those are passed to Floating UI and include options for the placement, offset, flip, shift, size, autoPlacement, hide, and inline middleware.
- **editor** — `Editor; required`
- **ui** — `({ root?: SlotClass; handle?: SlotClass; } & { base?: SlotClass; label?: SlotClass; leadingIcon?: SlotClass; leadingAvatar?: SlotClass; leadingAvatarSize?: SlotClass; trailingIcon?: SlotClass; }) | undefined; optional`
- **nested** — `boolean | NestedOptions | undefined; optional`: Enable drag handles for nested content (list items, blockquotes, etc.).  When enabled, the drag handle will appear for nested blocks, not just top-level blocks. A rule-based scoring system determines which node to target based on cursor position and configured rules.
- **pluginKey** — `string | PluginKey<any> | undefined; optional`
- **nestedOptions** — `NormalizedNestedOptions | undefined; optional`
- **onElementDragStart** — `((e: DragEvent) => void) | undefined; optional`
- **onElementDragEnd** — `((e: DragEvent) => void) | undefined; optional`
- **getReferencedVirtualElement** — `(() => VirtualElement | null) | undefined; optional`
- **dragImageProperties** — `string[] | undefined; optional`
- **type** — `"button" | "reset" | "submit" | undefined; optional`: The type of the button when not a link.
- **disabled** — `boolean | undefined; optional`
- **as** — `any; optional`: The element or component this component should render as when not a link.
- **trailingIcon** — `any; optional`: Display an icon on the right side.
- **name** — `string | undefined; optional`
- **leadingIcon** — `any; optional`: Display an icon on the left side.
- **label** — `string | undefined; optional`
- **leading** — `boolean | undefined; optional`: When \`true\`, the icon will be displayed on the left side.
- **trailing** — `boolean | undefined; optional`: When \`true\`, the icon will be displayed on the right side.
- **avatar** — `AvatarProps | undefined; optional`: Display an avatar on the left side.
- **loading** — `boolean | undefined; optional`: When \`true\`, the loading icon will be displayed.
- **onClick** — `((event: MouseEvent) => void) | ((event: MouseEvent) => void)[] | undefined; optional`
- **form** — `string | undefined; optional`
- **size** — `"md" | "xs" | "sm" | "lg" | "xl" | undefined; optional; default: "sm"`
- **block** — `boolean | undefined; optional`: Render the button full width.
- **exactActiveClass** — `string | undefined; optional`: Class to apply when the link is exact active
- **viewTransition** — `boolean | undefined; optional`: Pass the returned promise of \`router.push()\` to \`document.startViewTransition()\` if supported.
- **autofocus** — `Booleanish | undefined; optional`
- **formaction** — `string | undefined; optional`
- **formenctype** — `string | undefined; optional`
- **formmethod** — `string | undefined; optional`
- **formnovalidate** — `Booleanish | undefined; optional`
- **formtarget** — `string | undefined; optional`
- **activeColor** — `"primary" | "secondary" | "success" | "info" | "warning" | "error" | "neutral" | undefined; optional`
- **activeVariant** — `"link" | "solid" | "outline" | "soft" | "subtle" | "ghost" | undefined; optional`
- **square** — `boolean | undefined; optional`: Render the button with equal padding on all sides.
- **loadingAuto** — `boolean | undefined; optional`: Set loading state automatically based on the \`@click\` promise state
- **loadingIcon** — `any; optional`: The icon when the \`loading\` prop is \`true\`.

### Slots

- **default** — `{ ui: { root: (props?: Record<string, any> | undefined) => string | undefined; handle: (props?: Record<string, any> | undefined) => string | undefined; }; onClick: () => { node: JSONContent; pos: number; } | undefined; }`

### Events

- **nodeChange** — `[{ node: JSONContent; pos: number; }]`
- **hover** — `[{ node: JSONContent; pos: number; }]`
