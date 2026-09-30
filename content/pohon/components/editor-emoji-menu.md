---
title: "EditorEmojiMenu"
description: "An emoji picker menu that displays emoji suggestions when typing the : character in the editor."
package: pohon
sourceTag: "v2.0.1"
sourceCommit: "ee987babf834bae617d75a9c6b9347bba1a494df"
sourceUrl: "https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/docs/content/docs/2.components/editor-emoji-menu.md"
---
## Usage

The EditorEmojiMenu component displays a menu of emoji suggestions when typing the `:` character in the editor and inserts the selected emoji. It works alongside the `@tiptap/extension-emoji` package to provide emoji support.

> [!NOTE]
> 
> It uses the `useEditorMenu` composable built on top of TipTap's [Suggestion](https://tiptap.dev/docs/editor/api/utilities/suggestion) utility to filter items as you type and support keyboard navigation (arrow keys, enter to select, escape to close).

> [!CAUTION]
> 
> It must be used inside an [Editor](/pohon/components/editor) component's default slot to have access to the editor instance.

```vue [EditorEmojiMenuExample.vue]
<script setup lang="ts">
import type { EditorEmojiMenuItem } from 'pohon-ui'
import { Emoji, gitHubEmojis } from '@tiptap/extension-emoji'

const value = ref(`# Emoji Menu

Type : to insert emojis and select from the list of available emojis.`)

const items: EditorEmojiMenuItem[] = gitHubEmojis.filter(emoji => !emoji.name.startsWith('regional_indicator_'))

// SSR-safe function to append menus to body (avoids z-index issues in docs)
const appendToBody = false ? () => document.body : undefined
</script>

<template>
  <PEditor
    v-slot="{ editor }"
    v-model="value"
    :extensions="[Emoji]"
    content-type="markdown"
    placeholder="Type : to add emojis..."
    class="w-full min-h-21"
  >
    <PEditorEmojiMenu :editor="editor" :items="items" :append-to="appendToBody" />
  </PEditor>
</template>
```

> [!WARNING]
> 
> The `@tiptap/extension-emoji` package is not installed by default, you need to install it separately.

> [!NOTE]
> See: https://tiptap.dev/docs/editor/extensions/nodes/emoji
> 
> Learn more about the Emoji extension in the TipTap documentation.

### Items

Use the `items` prop as an array of objects with the following properties:

- `name: string`
- `emoji: string`
- `shortcodes?: string[]`
- `tags?: string[]`
- `group?: string`
- `fallbackImage?: string`

```vue [EditorEmojiMenuItemsExample.vue]
<script setup lang="ts">
import type { EditorEmojiMenuItem } from 'pohon-ui'
import { Emoji } from '@tiptap/extension-emoji'

const value = ref(`Type : to see a custom emoji set.

You can also install the \`@tiptap/extension-emoji\` extension to use a comprehensive set with over 1800 emojis.`)

const items: EditorEmojiMenuItem[] = [{
  name: 'smile',
  emoji: '😄',
  shortcodes: ['smile'],
  tags: ['happy', 'joy', 'pleased']
}, {
  name: 'heart',
  emoji: '❤️',
  shortcodes: ['heart'],
  tags: ['love', 'like']
}, {
  name: 'thumbsup',
  emoji: '👍',
  shortcodes: ['thumbsup', '+1'],
  tags: ['approve', 'ok']
}, {
  name: 'fire',
  emoji: '🔥',
  shortcodes: ['fire'],
  tags: ['hot', 'burn']
}, {
  name: 'rocket',
  emoji: '🚀',
  shortcodes: ['rocket'],
  tags: ['ship', 'launch']
}, {
  name: 'eyes',
  emoji: '👀',
  shortcodes: ['eyes'],
  tags: ['look', 'watch']
}, {
  name: 'tada',
  emoji: '🎉',
  shortcodes: ['tada'],
  tags: ['party', 'celebration']
}, {
  name: 'thinking',
  emoji: '🤔',
  shortcodes: ['thinking'],
  tags: ['hmm', 'think', 'consider']
}]
</script>

<template>
  <PEditor
    v-slot="{ editor }"
    v-model="value"
    :extensions="[Emoji]"
    content-type="markdown"
    placeholder="Type : to add emojis..."
    class="w-full min-h-26"
  >
    <PEditorEmojiMenu :editor="editor" :items="items" />
  </PEditor>
</template>
```

> [!NOTE]
> 
> You can also pass an array of arrays to the `items` prop to create separated groups of items.

### Char

Use the `char` prop to change the trigger character. Defaults to `:`.

```vue
<template>
  <PEditor v-slot="{ editor }">
    <PEditorEmojiMenu :editor="editor" :items="items" char=";" />
  </PEditor>
</template>
```

### Suggestion

Use the `suggestion` prop to customize TipTap's [Suggestion matching behavior](https://tiptap.dev/docs/editor/api/utilities/suggestion#settings).

This is useful when the trigger character should open directly after other characters instead of requiring the default whitespace prefix.

```vue
<template>
  <PEditor v-slot="{ editor }">
    <PEditorEmojiMenu
      :editor="editor"
      :items="items"
      :suggestion="{
        allowedPrefixes: null
      }"
    />
  </PEditor>
</template>
```

### Options

Use the `options` prop to customize the positioning behavior using [Floating UI options](https://floating-ui.com/docs/computeposition#options).

```vue
<template>
  <PEditor v-slot="{ editor }">
    <PEditorEmojiMenu
      :editor="editor"
      :items="items"
      :options="{
        placement: 'bottom-start',
        offset: 4
      }"
    />
  </PEditor>
</template>
```

## API

### Props

## Theme

```ts [app.config.ts]
export default defineAppConfig({
  ui: {
    editorEmojiMenu: {
      slots: {
        content: 'min-w-48 max-w-60 max-h-96 bg-background shadow-lg rounded-md ring ring-ring overflow-hidden data-[state=open]:animate-[scale-in_100ms_ease-out] data-[state=closed]:animate-[scale-out_100ms_ease-in] origin-(--akar-dropdown-menu-content-transform-origin) flex flex-col',
        viewport: 'relative divide-y divide-divide scroll-py-1 overflow-y-auto flex-1',
        group: 'p-1 isolate',
        label: 'w-full flex items-center font-600 color-text-highlighted',
        separator: '-mx-1 my-1 h-px bg-border',
        item: 'group relative w-full flex items-start select-none outline-none before:absolute before:z-[-1] before:inset-px before:rounded-md data-disabled:cursor-not-allowed data-disabled:opacity-75',
        itemLeadingIcon: 'shrink-0 flex items-center justify-center',
        itemLeadingAvatar: 'shrink-0',
        itemLeadingAvatarSize: '',
        itemWrapper: 'flex-1 flex flex-col text-start min-w-0',
        itemLabel: 'truncate',
        itemDescription: 'truncate color-text-muted',
        itemLabelExternalIcon: 'inline-block size-3 align-top color-text-dimmed'
      },
      variants: {
        size: {
          xs: {
            label: 'p-1 text-[10px]/3 gap-1',
            item: 'p-1 text-xs gap-1',
            itemLeadingIcon: 'size-4 text-sm',
            itemLeadingAvatarSize: '3xs'
          },
          sm: {
            label: 'p-1.5 text-[10px]/3 gap-1.5',
            item: 'p-1.5 text-xs gap-1.5',
            itemLeadingIcon: 'size-4 text-sm',
            itemLeadingAvatarSize: '3xs'
          },
          md: {
            label: 'p-1.5 text-xs gap-1.5',
            item: 'p-1.5 text-sm gap-1.5',
            itemLeadingIcon: 'size-5 text-base',
            itemLeadingAvatarSize: '2xs'
          },
          lg: {
            label: 'p-2 text-xs gap-2',
            item: 'p-2 text-sm gap-2',
            itemLeadingIcon: 'size-5 text-base',
            itemLeadingAvatarSize: '2xs'
          },
          xl: {
            label: 'p-2 text-sm gap-2',
            item: 'p-2 text-base gap-2',
            itemLeadingIcon: 'size-6 text-xl',
            itemLeadingAvatarSize: 'xs'
          }
        },
        active: {
          true: {
            item: 'color-text-highlighted before:bg-background-elevated/75',
            itemLeadingIcon: 'color-text'
          },
          false: {
            item: [
              'color-text data-highlighted:not-data-disabled:color-text-highlighted data-highlighted:not-data-disabled:before:bg-background-elevated/50',
              'transition-colors before:transition-colors'
            ],
            itemLeadingIcon: [
              'color-text-dimmed group-data-highlighted:not-group-data-disabled:color-text',
              'transition-colors'
            ]
          }
        }
      },
      defaultVariants: {
        size: 'md'
      }
    }
  }
})
```

## Changelog

See commit history for [component](https://github.com/vinicunca/pohon/commits/main/src/runtime/components/EditorEmojiMenu.vue) and [theme](https://github.com/vinicunca/pohon/commits/main/src/theme/editor-emoji-menu.ts).

---

- [GitHub](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/EditorEmojiMenu.vue)


## Sitemap

See the full [sitemap](https://pohon.vinicunca.dev/sitemap.md) for all pages.

## Generated component API

[EditorEmojiMenu source](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/EditorEmojiMenu.vue)

### Props

- **size** — `"md" | "xs" | "sm" | "lg" | "xl" | undefined; optional`
- **items** — `T[] | T[][] | undefined; optional`
- **ui** — `{ content?: SlotClass; viewport?: SlotClass; group?: SlotClass; label?: SlotClass; separator?: SlotClass; item?: SlotClass; itemLeadingIcon?: SlotClass; itemLeadingAvatar?: SlotClass; itemLeadingAvatarSize?: SlotClass; itemWrapper?: SlotClass; itemLabel?: SlotClass; itemDescription?: SlotClass; itemLabelExternalIcon?: SlotClass; } | undefined; optional`
- **editor** — `Editor | undefined; optional`
- **options** — `FloatingUIOptions | undefined; optional`: The options for positioning the menu. Those are passed to Floating UI and include options for the placement, offset, flip, shift, size, autoPlacement, hide, and inline middleware.
- **filterFields** — `string[] | undefined; optional; default: ["name", "shortcodes", "tags"]`: Fields to filter items by.
- **suggestion** — `Omit<Partial<SuggestionOptions<any, any>>, "items" | "editor" | "command" | "pluginKey" | "char" | "render"> | undefined; optional`: Optional TipTap Suggestion matching options.
- **pluginKey** — `string | undefined; optional; default: "emojiMenu"`: Plugin key to identify this menu
- **char** — `string | undefined; optional; default: ":"`: The trigger character (e.g., '/', '@', ':')
- **limit** — `number | undefined; optional`: Maximum number of items to display
- **appendTo** — `HTMLElement | (() => HTMLElement) | undefined; optional`: The DOM element to append the menu to. Default is the editor's parent element.  Sometimes the menu needs to be appended to a different DOM context due to accessibility, clipping, or z-index issues.

### Slots

No slots are declared.

### Events

No events are declared.
