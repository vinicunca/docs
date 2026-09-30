---
title: "EditorMentionMenu"
description: "A mention menu that displays user suggestions when typing a trigger character in the editor."
package: pohon
sourceTag: "v2.0.1"
sourceCommit: "ee987babf834bae617d75a9c6b9347bba1a494df"
sourceUrl: "https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/docs/content/docs/2.components/editor-mention-menu.md"
---
## Usage

The EditorMentionMenu component displays a menu of user suggestions when typing a trigger character (defaults to `@`) in the editor and inserts the selected mention using the `@tiptap/extension-mention` package. The trigger character is also used as the prefix when rendering the inserted mention.

> [!NOTE]
> 
> It uses the `useEditorMenu` composable built on top of TipTap's [Suggestion](https://tiptap.dev/docs/editor/api/utilities/suggestion) utility to filter items as you type and support keyboard navigation (arrow keys, enter to select, escape to close).

> [!CAUTION]
> 
> It must be used inside an [Editor](/pohon/components/editor) component's default slot to have access to the editor instance.

```vue [EditorMentionMenuExample.vue]
<script setup lang="ts">
import type { EditorMentionMenuItem } from 'pohon-ui'

const value = ref(`# Mention Menu

Type @ to mention someone and select from the list of available users.`)

const items: EditorMentionMenuItem[] = [{
  label: 'benjamincanac',
  avatar: {
    src: 'https://avatars.githubusercontent.com/u/739984?v=4',
    loading: 'lazy' as const
  }
}, {
  label: 'atinux',
  avatar: {
    src: 'https://avatars.githubusercontent.com/u/904724?v=4',
    loading: 'lazy' as const
  }
}, {
  label: 'danielroe',
  avatar: {
    src: 'https://avatars.githubusercontent.com/u/28706372?v=4',
    loading: 'lazy' as const
  }
}, {
  label: 'pi0',
  avatar: {
    src: 'https://avatars.githubusercontent.com/u/5158436?v=4',
    loading: 'lazy' as const
  }
}]

// SSR-safe function to append menus to body (avoids z-index issues in docs)
const appendToBody = false ? () => document.body : undefined
</script>

<template>
  <PEditor
    v-slot="{ editor }"
    v-model="value"
    content-type="markdown"
    placeholder="Type @ to mention someone..."
    class="w-full min-h-21"
  >
    <PEditorMentionMenu :editor="editor" :items="items" :append-to="appendToBody" />
  </PEditor>
</template>
```

> [!NOTE]
> See: https://tiptap.dev/docs/editor/extensions/nodes/mention
> 
> Learn more about the Mention extension in the TipTap documentation.

### Items

Use the `items` prop as an array of objects with the following properties:

- `label: string`
- `avatar?: AvatarProps`
- `icon?: string`
- `description?: string`
- `disabled?: boolean`

```vue [EditorMentionMenuItemsExample.vue]
<script setup lang="ts">
import type { EditorMentionMenuItem } from 'pohon-ui'

const value = ref(`Type @ to mention a user.

You can customize the items with avatars, icons, and descriptions.`)

const items: EditorMentionMenuItem[] = [{
  label: 'benjamincanac',
  avatar: { src: 'https://avatars.githubusercontent.com/u/739984?v=4', loading: 'lazy' as const }
}, {
  label: 'HugoRCD',
  avatar: { src: 'https://avatars.githubusercontent.com/u/71938701?v=4', loading: 'lazy' as const }
}, {
  label: 'atinux',
  avatar: { src: 'https://avatars.githubusercontent.com/u/904724?v=4', loading: 'lazy' as const }
}, {
  label: 'romhml',
  avatar: { src: 'https://avatars.githubusercontent.com/u/25613751?v=4', loading: 'lazy' as const }
}, {
  label: 'sandros94',
  avatar: { src: 'https://avatars.githubusercontent.com/u/13056429?v=4', loading: 'lazy' as const }
}, {
  label: 'J-Michalek',
  avatar: { src: 'https://avatars.githubusercontent.com/u/71264422?v=4', loading: 'lazy' as const }
}, {
  label: 'hywax',
  avatar: { src: 'https://avatars.githubusercontent.com/u/149865959?v=4', loading: 'lazy' as const }
}]
</script>

<template>
  <PEditor
    v-slot="{ editor }"
    v-model="value"
    content-type="markdown"
    placeholder="Type @ to mention..."
    class="w-full min-h-19"
  >
    <PEditorMentionMenu :editor="editor" :items="items" />
  </PEditor>
</template>
```

> [!NOTE]
> 
> You can also pass an array of arrays to the `items` prop to create separated groups of items.

### Char

Use the `char` prop to change the trigger character. Defaults to `@`. The trigger character is also used as the prefix when rendering the inserted mention (e.g. `#channel` instead of `@channel`).

```vue
<template>
  <PEditor v-slot="{ editor }">
    <PEditorMentionMenu :editor="editor" :items="channels" char="#" />
  </PEditor>
</template>
```

> [!NOTE]
> 
> You can use multiple `EditorMentionMenu` components on the same editor with different `char` and `plugin-key` props to support different mention types.
> 
> ```vue
> <template>
>   <PEditor v-slot="{ editor }">
>     <PEditorMentionMenu :editor="editor" :items="users" plugin-key="mentionMenu" />
>     <PEditorMentionMenu :editor="editor" :items="tags" char="#" plugin-key="tagMenu" />
>   </PEditor>
> </template>
> ```

### Suggestion

Use the `suggestion` prop to customize TipTap's [Suggestion matching behavior](https://tiptap.dev/docs/editor/api/utilities/suggestion#settings).

This is useful when the trigger character should open directly after other characters instead of requiring the default whitespace prefix.

```vue
<template>
  <PEditor v-slot="{ editor }">
    <PEditorMentionMenu
      :editor="editor"
      :items="items"
      char="#"
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
    <PEditorMentionMenu
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

## Examples

### With ignore filter

You can set the `ignore-filter` prop to `true` to disable the internal search and use your own search logic. Use `v-model:search-term` to access the current search term and fetch items from an API.

```vue [EditorMentionMenuIgnoreFilterExample.vue]
<script setup lang="ts">
import { refDebounced } from '@vueuse/core'

const value = ref(`# Async Mention Menu

Type @ to mention someone. Results are fetched from an API as you type.`)

const searchTerm = ref('')
const searchTermDebounced = refDebounced(searchTerm, 200)

const { data: items } = useLazyFetch('https://dummyjson.com/users/search?limit=10', {
  key: 'editor-mention-users-search',
  params: { q: searchTermDebounced },
  transform: (data: { users: { id: number, firstName: string, lastName: string, image: string }[] }) => {
    return data.users?.map(user => ({ id: user.id, label: `${user.firstName} ${user.lastName}`, avatar: { src: user.image, loading: 'lazy' as const } })) || []
  },
  server: false
})

// SSR-safe function to append menus to body (avoids z-index issues in docs)
const appendToBody = false ? () => document.body : undefined
</script>

<template>
  <PEditor
    v-slot="{ editor }"
    v-model="value"
    content-type="markdown"
    placeholder="Type @ to mention someone..."
    class="w-full min-h-21"
  >
    <PEditorMentionMenu
      v-model:search-term="searchTerm"
      :editor="editor"
      :items="items"
      :append-to="appendToBody"
      ignore-filter
    />
  </PEditor>
</template>
```

> [!NOTE]
> 
> This example uses [`refDebounced`](https://vueuse.org/shared/refDebounced/) to debounce the API calls.

## API

### Props

## Theme

```ts [app.config.ts]
export default defineAppConfig({
  ui: {
    editorMentionMenu: {
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

See commit history for [component](https://github.com/vinicunca/pohon/commits/main/src/runtime/components/EditorMentionMenu.vue) and [theme](https://github.com/vinicunca/pohon/commits/main/src/theme/editor-mention-menu.ts).

---

- [GitHub](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/EditorMentionMenu.vue)


## Sitemap

See the full [sitemap](https://pohon.vinicunca.dev/sitemap.md) for all pages.

## Generated component API

[EditorMentionMenu source](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/EditorMentionMenu.vue)

### Props

- **size** — `"md" | "xs" | "sm" | "lg" | "xl" | undefined; optional`
- **items** — `T[] | T[][] | undefined; optional`
- **ui** — `{ content?: SlotClass; viewport?: SlotClass; group?: SlotClass; label?: SlotClass; separator?: SlotClass; item?: SlotClass; itemLeadingIcon?: SlotClass; itemLeadingAvatar?: SlotClass; itemLeadingAvatarSize?: SlotClass; itemWrapper?: SlotClass; itemLabel?: SlotClass; itemDescription?: SlotClass; itemLabelExternalIcon?: SlotClass; } | undefined; optional`
- **editor** — `Editor | undefined; optional`
- **options** — `FloatingUIOptions | undefined; optional`: The options for positioning the menu. Those are passed to Floating UI and include options for the placement, offset, flip, shift, size, autoPlacement, hide, and inline middleware.
- **filterFields** — `string[] | undefined; optional`: Fields to filter items by.
- **ignoreFilter** — `boolean | undefined; optional`: Whether to ignore the default filtering. When \`true\`, items will not be filtered which is useful for custom filtering (useAsyncData, useFetch, etc.).
- **suggestion** — `Omit<Partial<SuggestionOptions<any, any>>, "items" | "editor" | "command" | "pluginKey" | "char" | "render"> | undefined; optional`: Optional TipTap Suggestion matching options.
- **pluginKey** — `string | undefined; optional; default: "mentionMenu"`: Plugin key to identify this menu
- **char** — `string | undefined; optional; default: "@"`: The trigger character (e.g., '/', '@', ':')
- **limit** — `number | undefined; optional`: Maximum number of items to display
- **appendTo** — `HTMLElement | (() => HTMLElement) | undefined; optional`: The DOM element to append the menu to. Default is the editor's parent element.  Sometimes the menu needs to be appended to a different DOM context due to accessibility, clipping, or z-index issues.
- **searchTerm** — `string | undefined; optional; default: ""`

### Slots

No slots are declared.

### Events

- **update:searchTerm** — `[value: string]`
