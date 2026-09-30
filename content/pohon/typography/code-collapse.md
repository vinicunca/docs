---
title: "ProseCodeCollapse"
description: "Make long code blocks collapsible to save space and improve readability."
package: pohon
sourceTag: "v2.0.1"
sourceCommit: "ee987babf834bae617d75a9c6b9347bba1a494df"
sourceUrl: "https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/docs/content/docs/4.typography/code-collapse.md"
---
## Usage

Wrap your code-block with a `code-collapse` component to display a collapsible code block.

````mdc
::code-collapse

```css [app/assets/css/main.css]

:root {
  --font-sans: 'Public Sans', sans-serif;

  --breakpoint-3xl: 1920px;

  --color-green-50: #EFFDF5;
  --color-green-100: #D9FBE8;
  --color-green-200: #B3F5D1;
  --color-green-300: #75EDAE;
  --color-green-400: #00DC82;
  --color-green-500: #00C16A;
  --color-green-600: #00A155;
  --color-green-700: #007F45;
  --color-green-800: #016538;
  --color-green-900: #0A5331;
  --color-green-950: #052E16;
}
```

::
````

## API

### Props

```ts
/**
 * Props for the ProseProseCodeCollapse component
 */
interface ProseProseCodeCollapseProps {
  /**
   * The icon displayed to toggle the code.
   * @default appConfig.ui.icons.chevronDown
   */
  icon?: any;
  /**
   * The name displayed in the trigger label.
   * @default t('prose.codeCollapse.name')
   */
  name?: string | undefined;
  /**
   * The text displayed when the code is collapsed.
   * @default t('prose.codeCollapse.openText')
   */
  openText?: string | undefined;
  /**
   * The text displayed when the code is expanded.
   * @default t('prose.codeCollapse.closeText')
   */
  closeText?: string | undefined;
  ui?: { root?: SlotClass; footer?: SlotClass; trigger?: SlotClass; triggerIcon?: SlotClass; } | undefined;
  /**
   * @default false
   */
  open?: boolean | undefined;
}
```

### Slots

```ts
/**
 * Slots for the ProseCodeCollapse component
 */
interface ProseCodeCollapseSlots {
  default(): any;
}
```

## Theme

```ts [app.config.ts]
export default defineAppConfig({
  ui: {
    prose: {}
  }
})
```

## Changelog

See commit history for [component](https://github.com/vinicunca/pohon/commits/main/src/runtime/components/prose/ProseCodeCollapse.vue) and [theme](https://github.com/vinicunca/pohon/commits/main/src/theme/prose/prose-code-collapse.ts).

---

- [GitHub](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/prose/CodeCollapse.vue)


## Sitemap

See the full [sitemap](https://pohon.vinicunca.dev/sitemap.md) for all pages.
