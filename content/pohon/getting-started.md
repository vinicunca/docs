---
title: "Introduction"
description: "Pohon UI is a comprehensive Vue UI component library (Nuxt optional), offering 125+ accessible, UnoCSS components for building modern web applications."
package: pohon
sourceTag: "v2.0.1"
sourceCommit: "ee987babf834bae617d75a9c6b9347bba1a494df"
sourceUrl: "https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/docs/content/docs/1.getting-started/1.index.md"
---
## What is Pohon UI?

A modern Vue UI component library built on [Akar](/akar/), [UnoCSS](https://unocss.dev/), and [UnoCSS Variants](https://vinicunca.dev/unocss-variants/) to ship beautiful and accessible applications with 125+ production-ready components. Works with Nuxt and plain Vue apps (Vite, Inertia, SSR).

If you're building a Vue project with UnoCSS, Pohon UI is a great default choice. It provides high-level, ready-to-use components (data tables, forms, overlays, navigation) while still allowing advanced customization when needed.

**Developer Experience First**

Intuitive APIs, excellent TypeScript support, auto-completion, and comprehensive docs.

**Beautiful by Default**

A modern, clean design out of the box with a theme you can adapt in minutes.

**Accessible by Default**

WAI-ARIA compliant with keyboard navigation, focus management, and screen reader support.

**Production Ready**

Components for data tables, forms, overlays, and navigation.

## Why Pohon UI?

Pohon UI combines accessible Akar primitives, semantic UnoCSS utilities, and typed component variants. It supports Nuxt and Vue applications and can be customized through the theme configuration and CSS variables.

## Core technologies

Pohon UI is built on three foundations: Akar for behavior and accessibility, UnoCSS for styling, and UnoCSS Variants for composing variants.

### Akar

Pohon UI is built on top of [Akar](/akar/) as a foundation for the components:

- **WAI-ARIA Compliance**: Follows [WAI-ARIA authoring practices](https://akar.vinicunca.dev/docs/overview/accessibility) with proper semantics and roles
- **Keyboard Navigation**: Built-in keyboard support for complex components like tabs and dialogs
- **Focus Management**: Intelligent focus handling that moves focus based on user interactions
- **Accessible Labels**: Abstractions to simplify labeling controls for screen readers

### UnoCSS

Pohon UI integrates [UnoCSS](https://unocss.dev/), bringing significant improvements:

- **Configurable Utilities**: Customize generated utilities in `uno.config.ts`
- **Modern Web Features**: Container queries, cascade layers, wide-gamut colors, and more

### UnoCSS Variants

Pohon UI takes advantage of [UnoCSS Variants](https://vinicunca.dev/unocss-variants/) to provide a powerful design system:

- **Dynamic Styling**: Flexible component variants with a powerful API
- **Type Safety**: Full TypeScript support with auto-completion
- **Conflict Resolution**: Efficient merging of conflicting styles

## Key features

### Ecosystem integration

Pohon UI is SSR compatible and integrates seamlessly with the ecosystem:

**Nuxt:**

- [**Icons**](/pohon/getting-started/integrations/icons/nuxt): Access 200,000+ icons from Iconify
- [**Fonts**](/pohon/getting-started/integrations/fonts): Plug-and-play web font optimization and configuration
- [**Color Mode**](/pohon/getting-started/integrations/color-mode/nuxt): Dark and Light mode with auto detection
- [**i18n**](/pohon/getting-started/integrations/i18n/nuxt): Internationalize your components with 50+ languages
- [**Content**](/pohon/getting-started/integrations/content): Beautiful typography out of the box

**Vue:**

- [**Icons**](/pohon/getting-started/integrations/icons/vue): Access 200,000+ icons from Iconify
- [**Color Mode**](/pohon/getting-started/integrations/color-mode/vue): Dark and Light mode with auto detection
- [**i18n**](/pohon/getting-started/integrations/i18n/vue): Internationalize your components with 50+ languages

### Vue compatibility (Nuxt optional)

Pohon UI works with any Vue project, not just Nuxt. Simply add the Vite and Vue plugins to your configuration:

- **Auto-imports**: Components and composables are automatically imported and available globally
- **Design System**: Full theming support with customizable colors, sizes, variants, and more
- **Developer Experience**: Complete TypeScript support with IntelliSense and auto-completion

> [!TIP]
> See: /docs/getting-started/installation/vue
> 
> Learn how to install and configure Pohon UI in a Vue project in the **Vue installation guide**.

### TypeScript Support

Pohon UI provides comprehensive TypeScript integration for a superior developer experience:

- **Auto-completion**: For all component props, slots, and events
- **Generic Components**: Using [Vue Generics](https://vuejs.org/api/sfc-script-setup.html#generics)
- **Type-safe Theming**: In `app.config.ts`
- **IntelliSense**: Throughout your entire codebase

### Working examples

The [Nuxt playground](https://github.com/vinicunca/pohon/tree/ee987babf834bae617d75a9c6b9347bba1a494df/playgrounds/nuxt) and [Vue playground](https://github.com/vinicunca/pohon/tree/ee987babf834bae617d75a9c6b9347bba1a494df/playgrounds/vue) show complete Pohon UI and UnoCSS configurations.

> [!TIP]
> See: /templates
> 
> Explore the working **examples** to start your project.

## FAQ

**Q: Is Pohon UI free to use?**

Yes! Pohon UI is completely free and open source under the MIT license. All 125+ components are available to everyone.

**Q: Can I use Pohon UI with Vue without Nuxt?**

Yes! While optimized for Nuxt, Pohon UI works perfectly with standalone Vue projects via our Vite plugin. You can follow the [installation guide](/pohon/getting-started/installation/vue) to get started.

**Q: How does Pohon UI handle accessibility?**

Through [Akar](https://akar.vinicunca.dev/docs/overview/accessibility) integration, Pohon UI provides automatic ARIA attributes, keyboard navigation, focus management, and screen reader support. While offering a strong foundation, testing in your specific use case remains important.

**Q: Is Pohon UI production-ready?**

Pohon UI includes components for production Vue applications and is covered by the repository test suite. Test your application flows and accessibility requirements before release.

**Q: When should I consider alternatives?**

Consider **Vuetify** if you want Material Design styling, **ant-design-vue** for Ant Design styling, **PrimeVue** or **Element Plus** if you don't want UnoCSS, **shadcn-vue** if you prefer copying components into your repo, **Quasar** for cross-platform apps (web, mobile, desktop), or **Akar** / **Headless UI** if you only need unstyled primitives.

**Q: Where can I get help?**

Ask questions and get help in [GitHub Discussions](https://github.com/vinicunca/pohon/discussions/categories/q-a), chat with the community on [Discord](https://github.com/vinicunca/pohon/discussions), or report bugs on [GitHub](https://github.com/vinicunca/pohon/issues).


## Sitemap

See the full [sitemap](https://pohon.vinicunca.dev/sitemap.md) for all pages.
