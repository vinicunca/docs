---
title: Avatar
description: An image element with a fallback for representing the user.
links:
  - label: "GitHub"
    icon: "i-simple-icons-github"
    to: "https://github.com/vinicunca/akar/blob/v2.0.20/packages/core/src/Avatar"
    target: "_blank"
  - label: "npm"
    icon: "i-simple-icons-npm"
    to: "https://www.npmjs.com/package/akar"
    target: "_blank"
---
:akar-preview{name="Avatar"}

## Features

::akar-highlights
---
features: ["Automatic and manual control over when the image renders.","Fallback part accepts any children.","Optionally delay fallback rendering to avoid content flashing."]
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
import { AvatarImage, AvatarRoot } from 'akar';
</script>

<template>
  <AvatarRoot>
    <AvatarImage />
    <AvatarFallback />
  </AvatarRoot>
</template>
```

## API Reference

### Root

Contains all the parts of an avatar

:akar-api{name="AvatarRoot"}

### Image

The image to render. By default it will only render when it has loaded. You can use the `@loadingStatusChange` handler if you need more control.

:akar-api{name="AvatarImage"}

### Fallback

An element that renders when the image hasn't loaded. This means whilst it's loading, or if there was an error. If you notice a flash during loading, you can provide a `delayMs` prop to delay its rendering so it only renders for those with slower connections. For more control, use the `@loadingStatusChange` emit on `AvatarImage`.

:akar-api{name="AvatarFallback"}

## Examples

### Clickable Avatar with tooltip

You can compose the Avatar with a [Tooltip](/akar/components/tooltip) to display extra information.

```vue{6-7,9,11-15}
<script setup>
import { AvatarImage, AvatarRoot, TooltipArrow, TooltipRoot, TooltipTrigger } from 'akar'
</script>

<template>
  <TooltipRoot>
    <TooltipTrigger>
      <AvatarRoot>…</AvatarRoot>
    </TooltipTrigger>

    <TooltipContent side="top">
      Tooltip content
      <TooltipArrow />
    </TooltipContent>
  </TooltipRoot>
</template>
```
