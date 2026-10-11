---
title: ProseCodeGroup
description: 'Group multiple code examples in tabbed interfaces for easy comparison.'
category: components
navigation.title: CodeGroup
links:
  - label: GitHub
    icon: i-simple-icons-github
    to: https://github.com/vinicunca/pohon/blob/main/src/runtime/components/prose/CodeGroup.vue
---

## Usage

Wrap your code blocks around a `code-group` component to group them together in tabs.

::code-preview{class="[&>div]:*:my-0 [&>div]:*:w-full"}

:::code-group

```bash [pnpm]
pnpm add pohon-ui
```

```bash [yarn]
yarn add pohon-ui
```

```bash [npm]
npm install pohon-ui
```

```bash [bun]
bun add pohon-ui
```

:::

# code

````mdc
::code-group

```bash [pnpm]
pnpm add pohon-ui
```

```bash [yarn]
yarn add pohon-ui
```

```bash [npm]
npm install pohon-ui
```

```bash [bun]
bun add pohon-ui
```

::
````

::

::note{to="/pohon/typography/code#code-blocks"}
Like the `ProsePre` component, the `CodeGroup` handles filenames, icons and copy button.
::

## API

### Props

:component-props{prose}

### Slots

:component-slots{prose}

## Theme

:component-theme{prose}

## Changelog

:component-changelog{prefix="prose"}
