---
title: "Internationalization (i18n)"
description: "Pohon UI supports 50+ locales and multi-directional (LTR/RTL) internationalization."
package: pohon
sourceTag: "v2.0.1"
sourceCommit: "ee987babf834bae617d75a9c6b9347bba1a494df"
sourceUrl: "https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/docs/content/docs/1.getting-started/6.integrations/4.i18n/1.nuxt.md"
---
> [!NOTE]
> See: /docs/getting-started/integrations/i18n/vue
> 
> Looking for the **Vue** version?

## Usage

> [!NOTE]
> See: /docs/components/app
> 
> Pohon UI provides an **App** component that wraps your app to provide global configurations, including the `locale` prop.

### Locale

Use the `locale` prop with the locale you want to use from `pohon-ui/locale`:

```vue [app.vue]
<script setup lang="ts">
import { fr } from 'pohon-ui/locale'
</script>

<template>
  <PApp :locale="fr">
    <NuxtPage />
  </PApp>
</template>
```

> [!TIP]
> 
> Each locale has a `code` property (e.g. `en`, `en-GB`, `fr`) that determines the date/time format in components like [Calendar](/pohon/components/calendar), [InputDate](/pohon/components/input-date) and [InputTime](/pohon/components/input-time).

### Custom locale

You can create your own locale using the [defineLocale](/pohon/composables/define-locale) utility:

```vue [app.vue]
<script setup lang="ts">
import type { Messages } from 'pohon-ui'

const locale = defineLocale<Messages>({
  name: 'My custom locale',
  code: 'en',
  dir: 'ltr',
  messages: {
    // implement pairs
  }
})
</script>

<template>
  <PApp :locale="locale">
    <NuxtPage />
  </PApp>
</template>
```

> [!TIP]
> 
> Look at the `code` parameter, there you need to pass the iso code of the language. Example:
> 
> - `hi` Hindi (language)
> - `de-AT`: German (language) as used in Austria (region)

### Extend locale

You can customize an existing locale by overriding its `messages` or `code` using the [extendLocale](/pohon/composables/extend-locale) utility:

```vue [app.vue]
<script setup lang="ts">
import { en } from 'pohon-ui/locale'

const locale = extendLocale(en, {
  code: 'en-AU',
  messages: {
    commandPalette: {
      placeholder: 'Search a component...'
    }
  }
})
</script>

<template>
  <PApp :locale="locale">
    <NuxtPage />
  </PApp>
</template>
```

### Dynamic locale

To dynamically switch between languages, you can use the [Nuxt I18n](https://i18n.nuxtjs.org/) module.

#### Install the Nuxt I18n package

```bash [pnpm]
pnpm add @nuxtjs/i18n
```

```bash [yarn]
yarn add @nuxtjs/i18n
```

```bash [npm]
npm install @nuxtjs/i18n
```

```bash [bun]
bun add @nuxtjs/i18n
```

#### Add the Nuxt I18n module in your `nuxt.config.ts`

```ts [nuxt.config.ts]
export default defineNuxtConfig({
  modules: [
    'pohon-ui',
    '@nuxtjs/i18n'
  ],
  css: ['~/assets/css/main.css'],
  i18n: {
    locales: [{
      code: 'de',
      name: 'Deutsch'
    }, {
      code: 'en',
      name: 'English'
    }, {
      code: 'fr',
      name: 'Français'
    }]
  }
})
```

#### Set the `locale` prop using `useI18n`

```vue [app.vue]
<script setup lang="ts">
import * as locales from 'pohon-ui/locale'

const { locale } = useI18n()
</script>

<template>
  <PApp :locale="locales[locale]">
    <NuxtPage />
  </PApp>
</template>
```

#### Automatic link localization

When `@nuxtjs/i18n` is installed, the [Link](/pohon/components/link) component automatically localizes internal links using the `$localePath` helper. This means you don't need to manually wrap your links with `localePath()` or `localeRoute()`.

```vue
<template>
  <!-- Automatically becomes /en/about or /fr/about based on current locale -->
  <PLink to="/about">About</PLink>
  <PButton to="/contact">Contact</PButton>
</template>
```

> [!TIP]
> 
> External links and absolute URLs are automatically detected and skip localization. You can still manually use `localePath()` or `localeRoute()` if needed.

### Dynamic direction

Each locale has a `dir` property which will be used by the `App` component to set the directionality of all components.

In a multilingual application, you might want to set the `lang` and `dir` attributes on the `<html>` element dynamically based on the user's locale, which you can do with the [useHead](https://nuxt.com/docs/api/composables/use-head) composable:

```vue [app.vue]
<script setup lang="ts">
import * as locales from 'pohon-ui/locale'

const { locale } = useI18n()

const lang = computed(() => locales[locale.value].code)
const dir = computed(() => locales[locale.value].dir)

useHead({
  htmlAttrs: {
    lang,
    dir
  }
})
</script>

<template>
  <PApp :locale="locales[locale]">
    <NuxtPage />
  </PApp>
</template>
```

## Supported languages

*See the full list of supported languages on the documentation website.*


## Sitemap

See the full [sitemap](https://pohon.vinicunca.dev/sitemap.md) for all pages.
