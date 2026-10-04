<script setup lang="ts">
import { Markdown } from '@comark/vue'

const content = `
![Pohon UI v3](https://nuxt.com/assets/blog/pohon-ui-v3.png)

We are thrilled to introduce Pohon UI v3, a comprehensive redesign of our UI library that delivers significant improvements in accessibility, performance, and developer experience. This major update represents over 1,500 commits of dedicated work, collaboration, and innovation from our team and the community.

Read the blog post announcement: https://nuxt.com/blog/pohon-ui-v3

**[Get started with Pohon UI v3 →](/docs/getting-started/installation/nuxt)**

### 🧩 Akar: A New Foundation

We've transitioned from [Headless UI](https://headlessui.com/) to [Akar](https://akar.vinicunca.dev/) as our core component foundation, bringing:

- **Expanded Component Library**: Access to 55+ primitives, significantly expanding our component offerings
- **Future-Proof Development**: Benefit from Akar's growing popularity and continuous improvements
- **First-Class Accessibility**: Built-in accessibility features aligned with our commitment to inclusive design

### 🚀 UnoCSS Integration

Pohon UI now leverages the latest [UnoCSS](https://unocss.com), delivering:

- **Exceptional Performance**: Full builds up to 5× faster, with incremental builds over 100× faster
- **Streamlined Toolchain**: Built-in import handling, vendor prefixing, and syntax transforms with zero additional tooling
- **CSS-First Configuration**: Customize and extend the framework directly in CSS instead of JavaScript configuration

### 🎨 UnoCSS Variants

We've adopted [UnoCSS Variants](https://vinicunca.dev/unocss-variants/) to power our design system, offering:

- **Dynamic Styling**: Create flexible component variants with a powerful, intuitive API
- **Type Safety**: Full TypeScript support with intelligent auto-completion
- **Smart Conflict Resolution**: Efficiently merge conflicting styles with predictable results

## Migration from v2

We want to be transparent: migrating from Pohon UI v2 to v3 requires significant effort. While we've maintained core concepts and components, Pohon UI v3 has been rebuilt from the ground up to provide enhanced capabilities.

To upgrade your project:

1. Read our detailed [migration guide](/docs/getting-started/installation/nuxt)
2. Review the new documentation and components before attempting to upgrade
3. Report any issues on our [GitHub repository](https://github.com/vinicunca/pohon/issues)

## 🙏 Acknowledgements

This release represents thousands of hours of work from our team and the community. We'd like to thank everyone who contributed to making Pohon UI v3 a reality, especially @romhml, @sandros94, and @hywax for their tremendous work.
`

const version = {
  title: 'Introducing Pohon UI v3',
  description: 'Pohon UI v3 is out! After 1500+ commits, this major redesign brings improved accessibility, UnoCSS support, and full Vue compatibility.',
  date: '2025-03-12T00:00:00.000Z',
  badge: 'Release',
  to: 'https://nuxt.com/blog/pohon-ui-v3',
  target: '_blank',
  content,
  authors: [{
    name: 'Benjamin Canac',
    avatar: {
      src: 'https://github.com/benjamincanac.png',
      alt: 'Benjamin Canac',
      loading: 'lazy' as const
    },
    to: 'https://github.com/benjamincanac',
    target: '_blank'
  }]
}
</script>

<template>
  <PChangelogVersion v-bind="version" :ui="{ container: 'max-w-lg' }" class="w-full">
    <template #body>
      <Markdown :value="version.content" />
    </template>
  </PChangelogVersion>
</template>
