---
title: Progress
description: Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.
links:
  - label: "ARIA"
    icon: "i-lucide-accessibility"
    to: "https://www.w3.org/WAI/ARIA/apg/patterns/meter"
    target: "_blank"
  - label: "GitHub"
    icon: "i-simple-icons-github"
    to: "https://github.com/vinicunca/akar/blob/v2.0.20/packages/core/src/Progress"
    target: "_blank"
  - label: "npm"
    icon: "i-simple-icons-npm"
    to: "https://www.npmjs.com/package/akar"
    target: "_blank"
---
:akar-preview{name="Progress"}

## Features

::akar-highlights
---
features: ["Provides context for assistive technology to read the progress of a task."]
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

### Anatomy

Import all parts and piece them together.

```vue
<script setup>
import { ProgressIndicator, ProgressRoot } from 'akar'
</script>

<template>
  <ProgressRoot>
    <ProgressIndicator />
  </ProgressRoot>
</template>
```

## Accessibility

Adheres to the [`progressbar` role requirements](https://www.w3.org/WAI/ARIA/apg/patterns/meter).

## API Reference

### Root

Contains all of the progress parts.

:akar-api{name="ProgressRoot"}

::akar-data-attributes
---
data: [{"attribute":"[data-state]","values":["complete","indeterminate","loading"]},{"attribute":"[data-value]","values":"The current value"},{"attribute":"[data-max]","values":"The max value"}]
---
::

### Indicator

Used to show the progress visually. It also makes progress accessible to assistive technologies.

:akar-api{name="ProgressIndicator"}

::akar-data-attributes
---
data: [{"attribute":"[data-state]","values":["complete","indeterminate","loading"]},{"attribute":"[data-value]","values":"The current value"},{"attribute":"[data-max]","values":"The max value"}]
---
::
