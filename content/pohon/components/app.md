---
title: "App"
description: "A wrapper to provide global configuration, toasts and tooltips to your app."
package: pohon
sourceTag: "v2.0.1"
sourceCommit: "ee987babf834bae617d75a9c6b9347bba1a494df"
sourceUrl: "https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/docs/content/docs/2.components/app.md"
---
## Usage

This component implements Akar [ConfigProvider](/akar/components/config-provider) to provide global configuration to all components:

- Enables all primitives to inherit global reading direction.
- Enables changing the behavior of scroll body when setting body lock.
- Much more controls to prevent layout shifts.

It's also using [ToastProvider](/akar/components/toast#provider) and [TooltipProvider](/akar/components/tooltip#provider) to provide global toasts and tooltips, as well as programmatic modals and slideovers.

Wrap your entire application with the App component in your `app.vue` file:

```vue [app.vue]
<template>
  <PApp>
    <NuxtPage />
  </PApp>
</template>
```

**Nuxt:**

> [!TIP]
> See: /docs/getting-started/integrations/i18n/nuxt#locale
> 
> Learn how to use the `locale` prop to change the locale of your app. This also controls the date/time format in components like Calendar, InputDate, and InputTime.

**Vue:**

> [!TIP]
> See: /docs/getting-started/integrations/i18n/vue#locale
> 
> Learn how to use the `locale` prop to change the locale of your app. This also controls the date/time format in components like Calendar, InputDate, and InputTime.

## API

### Props

### Slots

## Changelog

See commit history for [component](https://github.com/vinicunca/pohon/commits/main/src/runtime/components/App.vue) and [theme](https://github.com/vinicunca/pohon/commits/main/src/theme/app.ts).

---

- [GitHub](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/App.vue)


## Sitemap

See the full [sitemap](https://pohon.vinicunca.dev/sitemap.md) for all pages.

## Generated component API

[App source](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/App.vue)

### Props

- **tooltip** — `TooltipProviderProps | undefined; optional`
- **toaster** — `ToasterProps | null | undefined; optional`
- **locale** — `Locale<T> | undefined; optional`
- **portal** — `string | boolean | HTMLElement | undefined; optional; default: "body"`
- **dir** — `Direction | undefined; optional`: The global reading direction of your application. This will be inherited by all primitives.
- **scrollBody** — `boolean | ScrollBodyOption | undefined; optional`: The global scroll body behavior of your application. This will be inherited by the related primitives.
- **nonce** — `string | undefined; optional`: The global \`nonce\` value of your application. This will be inherited by the related primitives.

### Slots

- **default** — `{} | undefined`

### Events

No events are declared.
