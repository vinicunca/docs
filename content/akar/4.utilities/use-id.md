---
title: useId
description: Generate random id
---
::warning
**Deprecated**

[Vue 3.5](https://blog.vuejs.org/posts/vue-3-5#useid) released an official client-server stable solution for `useId`.
::

## Source order

`useId` resolves IDs in this order:

1. Explicit ID passed to `useId(id)`.
2. The `useId` function provided by `ConfigProvider`.
3. Vue's native `useId` when available.
4. Akar's fallback counter for older Vue versions.

Use `ConfigProvider` when your framework provides its own SSR-stable ID source, such as Nuxt's `useId`.

## Usage

```ts
import { useId } from 'akar'

const buttonId = useId() // reka-1
```

```ts
import { useId } from 'akar'

const buttonId = useId('test-id') // test-id
```
