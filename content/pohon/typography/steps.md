---
title: "ProseSteps"
description: "Transform headings into numbered step-by-step guides and tutorials."
package: pohon
sourceTag: "v2.0.1"
sourceCommit: "ee987babf834bae617d75a9c6b9347bba1a494df"
sourceUrl: "https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/docs/content/docs/4.typography/steps.md"
---
## Usage

Wrap your headings with the Steps component to display a list of steps.

Use the `level` prop to define which heading will be used for the steps.

````mdc
::steps{level="4"}

#### Add the Pohon UI module in your `nuxt.config.ts`

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  modules: ['pohon-ui']
})
```

#### Import UnoCSS in your CSS

```css [app/assets/css/main.css]
```

#### Start your development server

```bash
npm run dev
```

::
````

## API

### Props

```ts
/**
 * Props for the ProseProseSteps component
 */
interface ProseProseStepsProps {
  /**
   * The heading level to apply to the steps.
   * @default '3'
   */
  level?: "3" | "2" | "4" | undefined;
  ui?: { base?: any; } | undefined;
}
```

### Slots

```ts
/**
 * Slots for the ProseSteps component
 */
interface ProseStepsSlots {
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

See commit history for [component](https://github.com/vinicunca/pohon/commits/main/src/runtime/components/prose/ProseSteps.vue) and [theme](https://github.com/vinicunca/pohon/commits/main/src/theme/prose/prose-steps.ts).

---

- [GitHub](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/prose/Steps.vue)


## Sitemap

See the full [sitemap](https://pohon.vinicunca.dev/sitemap.md) for all pages.
