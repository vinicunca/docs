---
title: Aspect Ratio
description: Displays content within a desired ratio.
links:
  - label: "GitHub"
    icon: "i-simple-icons-github"
    to: "https://github.com/vinicunca/akar/blob/v2.0.20/packages/core/src/AspectRatio"
    target: "_blank"
  - label: "npm"
    icon: "i-simple-icons-npm"
    to: "https://www.npmjs.com/package/akar"
    target: "_blank"
---
:akar-preview{name="AspectRatio"}

## Features

::akar-highlights
---
features: ["Accepts any custom ratio."]
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

Import the component.

```vue
<script setup>
import { AspectRatio } from 'akar';
</script>

<template>
  <AspectRatio />
</template>
```

## API Reference

### Root

Contains the content you want to constrain to a given ratio.

:akar-api{name="AspectRatio"}
