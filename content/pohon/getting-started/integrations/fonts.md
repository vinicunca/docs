---
title: "Fonts"
description: "Pohon UI integrates with Nuxt Fonts to provide plug-and-play font optimization."
package: pohon
sourceTag: "v2.0.1"
sourceCommit: "ee987babf834bae617d75a9c6b9347bba1a494df"
sourceUrl: "https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/docs/content/docs/1.getting-started/6.integrations/2.fonts.md"
---
## Usage

Pohon UI automatically registers the [`@nuxt/fonts`](https://github.com/nuxt/fonts) module for you, so there's no additional setup required.

### Declaration

To use a font in your Pohon UI application, you can simply declare it in your CSS. It will be automatically loaded and optimized for you.

```css [app/assets/css/main.css]
:root {
  --font-sans: 'Public Sans', sans-serif;
}
```

### Configuration

You can disable the `@nuxt/fonts` module with the `ui.fonts` option in your `nuxt.config.ts`:

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  ui: {
    fonts: false
  }
})
```

---

- [nuxt/fonts](https://github.com/nuxt/fonts)


## Sitemap

See the full [sitemap](https://pohon.vinicunca.dev/sitemap.md) for all pages.
