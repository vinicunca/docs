---
title: "LocaleSelect"
description: "A Select to switch between locales."
package: pohon
sourceTag: "v2.0.1"
sourceCommit: "ee987babf834bae617d75a9c6b9347bba1a494df"
sourceUrl: "https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/docs/content/docs/2.components/locale-select.md"
---
## Usage

The LocaleSelect component extends the [SelectMenu](/pohon/components/select-menu) component, so you can pass any property such as `color`, `variant`, `size`, etc.

**Nuxt:**

> [!NOTE]
> See: /docs/getting-started/integrations/i18n/nuxt
> 
> This component is meant to be used with the **i18n** system. Learn more about it in the guide.

**Vue:**

> [!NOTE]
> See: /docs/getting-started/integrations/i18n/vue
> 
> This component is meant to be used with the **i18n** system. Learn more about it in the guide.

> [!WARNING]
> 
> The flags are displayed using Unicode characters. This may result in a different display, e.g. Microsoft Edge under Windows displays the ISO 3166-1 alpha-2 code instead, as no flag icons are shipped with the OS fonts.

### Locales

Use the `locales` prop with an array of locales from `pohon-ui/locale`.

```vue [LocaleSelectExample.vue]
<script setup lang="ts">
import * as locales from 'pohon-ui/locale'

const locale = ref('en')
</script>

<template>
  <PLocaleSelect v-model="locale" :locales="Object.values(locales)" class="w-48" />
</template>
```

You can pass only the locales you need in your application:

```vue
<script setup lang="ts">
import { en, es, fr } from 'pohon-ui/locale'

const locale = ref('en')
</script>

<template>
  <PLocaleSelect v-model="locale" :locales="[en, es, fr]" />
</template>
```

### Dynamic locale

**Nuxt:**

You can use it with Nuxt i18n:

```vue
<script setup lang="ts">
import * as locales from 'pohon-ui/locale'

const { locale, setLocale } = useI18n()
</script>

<template>
  <PLocaleSelect
    :model-value="locale"
    :locales="Object.values(locales)"
    @update:model-value="setLocale($event)"
  />
</template>
```

**Vue:**

You can use it with Vue i18n:

```vue
<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import * as locales from 'pohon-ui/locale'

const { locale, setLocale } = useI18n()
</script>

<template>
  <PLocaleSelect
    :model-value="locale"
    :locales="Object.values(locales)"
    @update:model-value="setLocale($event)"
  />
</template>
```

## API

### Props

## Changelog

See commit history for [component](https://github.com/vinicunca/pohon/commits/main/src/runtime/components/locale/LocaleSelect.vue) and [theme](https://github.com/vinicunca/pohon/commits/main/src/theme/locale/locale-select.ts).

---

- [SelectMenu](/pohon/components/select-menu)
- [GitHub](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/locale/LocaleSelect.vue)


## Sitemap

See the full [sitemap](https://pohon.vinicunca.dev/sitemap.md) for all pages.
