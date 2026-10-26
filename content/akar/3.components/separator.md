---
title: Separator
description: Visually or semantically separates content.
links:
  - label: "ARIA"
    icon: "i-lucide-accessibility"
    to: "https://www.w3.org/TR/wai-aria-1.2/#separator"
    target: "_blank"
  - label: "GitHub"
    icon: "i-simple-icons-github"
    to: "https://github.com/vinicunca/akar/blob/v2.0.20/packages/core/src/Separator"
    target: "_blank"
  - label: "npm"
    icon: "i-simple-icons-npm"
    to: "https://www.npmjs.com/package/akar"
    target: "_blank"
---
:akar-preview{name="Separator"}

## Features

::akar-highlights
---
features: ["Supports horizontal and vertical orientations."]
---
::

## Installation

Install the component from your command line.

::code-group{sync="pm"}

```bash [pnpm]
pnpm add akar
```

```bash [yarn]
yarn add akar
```

```bash [npm]
npm install akar
```

```bash [bun]
bun add akar
```

::

## Anatomy

Import all parts and piece them together.

```vue
<script setup>
import { Separator } from 'akar';
</script>

<template>
  <Separator />
</template>
```

## API Reference

### Root

The separator.

:akar-api{name="Separator"}

::akar-data-attributes
---
data: [{"attribute":"[data-orientation]","values":["vertical","horizontal"]}]
---
::

## Accessibility

Adheres to the [`separator` role requirements](https://www.w3.org/TR/wai-aria-1.2/#separator).
