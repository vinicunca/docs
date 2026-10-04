---
title: ChatPalette
description: 'A chat palette to create a chatbot interface inside an overlay.'
category: chat
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/vinicunca/pohon/blob/main/src/runtime/components/ChatPalette.vue
---

## Usage

The ChatPalette component is a structured layout wrapper that organizes [ChatMessages](/pohon/components/chat-messages) in a scrollable content area and [ChatPrompt](/pohon/components/chat-prompt) in a fixed bottom section, creating cohesive chatbot interfaces for modals, slideovers, or drawers.

```vue{2,8}
<template>
  <PChatPalette>
    <PChatMessages />

    <template #prompt>
      <PChatPrompt />
    </template>
  </PChatPalette>
</template>
```

## Examples

::tip{to="/pohon/components/chat"}
Check the **Chat** overview page for installation instructions, server setup and usage examples.
::

### Within a Modal

You can use the ChatPalette component inside a [Modal](/pohon/components/modal)'s content.

::component-example
---
collapse: true
iframe:
  height: 500px;
iframeMobile: true
overflowHidden: true
name: 'chat-palette-modal-example'
---
::

### Within ContentSearch

You can use the ChatPalette component conditionally inside [ContentSearch](/pohon/components/content-search)'s content to display a chatbot interface when a user selects an item.

::component-example
---
collapse: true
iframe:
  height: 500px;
iframeMobile: true
overflowHidden: true
name: 'chat-palette-content-search-example'
---
::


## API

### Props

:component-props

### Slots

:component-slots

## Theme

:component-theme

## Changelog

:component-changelog
