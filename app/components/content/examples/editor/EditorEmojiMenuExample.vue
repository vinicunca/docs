<script setup lang="ts">
import type { EditorEmojiMenuItem } from 'pohon-ui';
import { Emoji, gitHubEmojis } from '@tiptap/extension-emoji';

const value = ref(`# Emoji Menu

Type : to insert emojis and select from the list of available emojis.`);

const items: Array<EditorEmojiMenuItem> = gitHubEmojis.filter((emoji) => !emoji.name.startsWith('regional_indicator_'));

// SSR-safe function to append menus to body (avoids z-index issues in docs)
const appendToBody = import.meta.client ? () => document.body : undefined;
</script>

<template>
  <PEditor
    v-slot="{ editor }"
    v-model="value"
    :extensions="[Emoji]"
    content-type="markdown"
    placeholder="Type : to add emojis..."
    class="min-h-21 w-full"
  >
    <PEditorEmojiMenu
      :editor="editor"
      :items="items"
      :append-to="appendToBody"
    />
  </PEditor>
</template>
