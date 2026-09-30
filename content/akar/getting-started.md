---
title: Getting started
description: Install Akar and use its Vue primitives.
package: akar
---

## Install

```bash
pnpm add akar
```

```bash
npm install akar
```

Import the primitives you need in a Vue component:

```vue
<script setup lang="ts">
import { DialogContent, DialogRoot, DialogTrigger } from 'akar'
</script>

<template>
  <DialogRoot>
    <DialogTrigger>Open dialog</DialogTrigger>
    <DialogContent>Dialog content</DialogContent>
  </DialogRoot>
</template>
```

Akar also exports a Nuxt module from `akar/nuxt` and a resolver from `akar/resolver`. In Nuxt, add the module to `nuxt.config.ts` to register components automatically:

```ts
export default defineNuxtConfig({
  modules: ['akar/nuxt'],
})
```

For component options and events, use the [tagged component reference](/akar/components).
