---
title: Visually Hidden
description: Hides content from the screen in an accessible way.
---
::akar-highlights
---
features: ["Visually hides content while preserving it for assistive technology."]
---
::

## Anatomy

Import the component.

```vue
<script setup lang="ts">
import { VisuallyHidden } from 'akar';
</script>

<template>
  <VisuallyHidden>
    <slot />
  </VisuallyHidden>
</template>
```

## Basic example

Use the visually hidden primitive.

```vue
<script setup lang="ts">
import { GearIcon } from '@radix-icons/vue';
import { VisuallyHidden } from 'akar';
</script>

<template>
  <button>
    <GearIcon />
    <VisuallyHidden>Settings</VisuallyHidden>
  </button>
</template>
```

## API Reference

### Root

Anything you put inside this component will be hidden from the screen but will be announced by screen readers.

| Prop | Default | Type | Description |
| --- | --- | --- | --- |
          <br />
          Read our <a href=&quot;/akar/guides/composition&quot;>Composition</a> guide for more details.</p>`
    },
  ]"
/>

## Accessibility

This is useful in certain scenarios as an alternative to traditional labelling with `aria-label` or `aria-labelledby`.
