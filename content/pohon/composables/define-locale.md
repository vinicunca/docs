---
title: "defineLocale"
description: "A utility to create a custom locale for your app."
package: pohon
sourceTag: "v2.0.1"
sourceCommit: "ee987babf834bae617d75a9c6b9347bba1a494df"
sourceUrl: "https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/docs/content/docs/3.composables/define-locale.md"
---
## Usage

Use the auto-imported `defineLocale` utility to create a custom locale with your own translations.

```vue
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

**Nuxt:**

> [!TIP]
> See: /docs/getting-started/integrations/i18n/nuxt
> 
> Learn more about internationalization in the **i18n integration** documentation.

**Vue:**

> [!TIP]
> See: /docs/getting-started/integrations/i18n/vue
> 
> Learn more about internationalization in the **i18n integration** documentation.

## API

`defineLocale<M>(options: DefineLocaleOptions<M>): Locale<M>`

Creates a new locale object with the provided options.

#### Parameters

**options** (`DefineLocaleOptions<M>`) *required*: The locale configuration object with the following properties:The display name of the locale (e.g. 'English', 'Français').The ISO code of the locale (e.g. 'en', 'fr', 'de-AT').The text direction of the locale. Defaults to 'ltr'.The translation messages object. Use the Messages type from pohon-ui for type safety.

**Returns:** A `Locale<M>` object that can be passed to the `locale` prop of the [App](/pohon/components/app) component.

## Example

Here's a complete example of creating a custom locale:

```vue
<script setup lang="ts">
import type { Messages } from 'pohon-ui'

const locale = defineLocale<Messages>({
  name: 'Español',
  code: 'es',
  dir: 'ltr',
  messages: {
    alert: {
      close: 'Cerrar'
    },
    modal: {
      close: 'Cerrar'
    },
    commandPalette: {
      back: 'Atrás',
      close: 'Cerrar',
      noData: 'Sin datos',
      noMatch: 'Sin resultados',
      placeholder: 'Escribe un comando o busca…'
    }
    // ... other component messages
  }
})
</script>

<template>
  <PApp :locale="locale">
    <NuxtPage />
  </PApp>
</template>
```

> [!NOTE]
> 
> You can look at the [built-in locales](https://github.com/vinicunca/pohon/tree/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/locale) for reference on how to structure the messages object.


## Sitemap

See the full [sitemap](https://pohon.vinicunca.dev/sitemap.md) for all pages.
