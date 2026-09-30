---
title: "Link"
description: "A wrapper around NuxtLink with extra props."
package: pohon
sourceTag: "v2.0.1"
sourceCommit: "ee987babf834bae617d75a9c6b9347bba1a494df"
sourceUrl: "https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/docs/content/docs/2.components/link.md"
---
## Usage

The Link component is a wrapper around [`<NuxtLink>`](https://nuxt.com/docs/api/components/nuxt-link) using the [`custom`](https://router.vuejs.org/api/interfaces/RouterLinkProps.html#Properties-custom) prop. It provides a few extra props:

- `inactive-class` prop to set a class when the link is inactive, `active-class` is used when active.
- `exact` prop to style with `active-class` when the link is active and the route is exactly the same as the current route.
- `exact-query` and `exact-hash` props to style with `active-class` when the link is active and the query or hash is exactly the same as the current query or hash.

  - use `exact-query="partial"` to style with `active-class` when the link is active and the query partially match the current query.

The incentive behind this is to provide the same API as NuxtLink back in Nuxt 2 / Vue 2. You can read more about it in the Vue Router [migration from Vue 2](https://router.vuejs.org/guide/migration/#removal-of-the-exact-prop-in-router-link) guide.

> [!NOTE]
> 
> It is used by the [`Breadcrumb`](/pohon/components/breadcrumb), [`Button`](/pohon/components/button), [`ContextMenu`](/pohon/components/context-menu), [`DropdownMenu`](/pohon/components/dropdown-menu) and [`NavigationMenu`](/pohon/components/navigation-menu) components.

### Tag

The `Link` components renders an `<a>` tag when a `to` prop is provided, otherwise it renders a `<button>` tag. You can use the `as` prop to change fallback tag.

```vue
<template>
  <ULink as="button">
    Link
  </ULink>
</template>
```

> [!NOTE]
> 
> You can inspect the rendered HTML by changing the `to` prop.

### Style

By default, the link has default active and inactive styles, check out the [#theme](#theme) section.

```vue
<template>
  <ULink to="/pohon/components/link">
    Link
  </ULink>
</template>
```

> [!NOTE]
> 
> Try changing the `to` prop to see the active and inactive states.

You can override this behavior by using the `raw` prop and provide your own styles using `class`, `active-class` and `inactive-class`.

```vue
<template>
  <ULink raw to="/pohon/components/link" active-class="font-bold" inactive-class="color-text-muted">
    Link
  </ULink>
</template>
```

### Locale

The Link component automatically integrates with [`@nuxtjs/i18n`](https://i18n.nuxtjs.org/) when installed. Internal links are automatically localized using the `$localePath` helper without requiring manual wrapping.

```vue
<template>
  <!-- Automatically becomes /en/about or /fr/about based on current locale -->
  <PLink to="/about">About</PLink>
</template>
```

> [!TIP]
> 
> You can still manually use `localePath()` or `localeRoute()` if needed.

> [!NOTE]
> See: /docs/getting-started/integrations/i18n/nuxt#dynamic-locale
> 
> Learn more about Internationalization in Pohon UI.

## API

### Props

{:ignore="["custom"]"}> [!NOTE]
> See: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a#attributes
> 
> This component also supports all native `<a>` HTML attributes.

### Slots

## Theme

```ts [app.config.ts]
export default defineAppConfig({
  ui: {
    link: {
      base: 'outline-primary/25 focus-visible:outline-3 rounded-md',
      variants: {
        active: {
          true: 'color-primary',
          false: 'color-text-muted'
        },
        disabled: {
          true: 'cursor-not-allowed opacity-75'
        }
      },
      compoundVariants: [
        {
          active: false,
          disabled: false,
          class: [
            'hover:color-text',
            'transition-colors'
          ]
        }
      ]
    }
  }
})
```

## Changelog

See commit history for [component](https://github.com/vinicunca/pohon/commits/main/src/runtime/components/Link.vue) and [theme](https://github.com/vinicunca/pohon/commits/main/src/theme/link.ts).

---

- [GitHub](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/Link.vue)


## Sitemap

See the full [sitemap](https://pohon.vinicunca.dev/sitemap.md) for all pages.

## Generated component API

[Link source](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/Link.vue)

### Props

- **as** — `any; optional; default: "button"`: The element or component this component should render as when not a link.
- **type** — `"button" | "reset" | "submit" | undefined; optional; default: "button"`: The type of the button when not a link.
- **disabled** — `boolean | undefined; optional`
- **active** — `boolean | undefined; optional; default: undefined`: Force the link to be active independent of the current route.
- **exact** — `boolean | undefined; optional`: Will only be active if the current route is an exact match.
- **exactQuery** — `boolean | "partial" | undefined; optional`: Allows controlling how the current route query sets the link as active.
- **exactHash** — `boolean | undefined; optional`: Will only be active if the current route hash is an exact match.
- **inactiveClass** — `string | undefined; optional`: The class to apply when the link is inactive.
- **custom** — `boolean | undefined; optional`: Whether RouterLink should not wrap its content in an \`a\` tag. Useful when using \`v-slot\` to create a custom RouterLink
- **raw** — `boolean | undefined; optional`: When \`true\`, only styles from \`class\`, \`activeClass\`, and \`inactiveClass\` will be applied.
- **locale** — `string | boolean | undefined; optional; default: undefined`: Control i18n auto-localization when \`@nuxtjs/i18n\` is installed. - \`undefined\` / \`true\` (default): auto-localizes to the current locale using \`$localePath\`.   Paths already carrying a locale prefix (from e.g. \`switchLocalePath()\`) are detected   and left untouched to prevent double-prefixing. - \`false\`: explicitly disables auto-localization. - \`string\`: localizes to a specific locale (e.g. \`'fr'\`).
- **to** — `string | it | et | undefined; optional`: Route Location the link should navigate to when clicked on.
- **href** — `string | it | et | undefined; optional`: An alias for \`to\`. If used with \`to\`, \`href\` will be ignored
- **external** — `boolean | undefined; optional`: Forces the link to be considered as external (true) or internal (false). This is helpful to handle edge-cases
- **target** — `(string & {}) | "_blank" | "_parent" | "_self" | "_top" | null | undefined; optional`: Where to display the linked URL, as the name for a browsing context.
- **rel** — `(string & {}) | "noopener" | "noreferrer" | "nofollow" | "sponsored" | "ugc" | null | undefined; optional`: A rel attribute value to apply on the link. Defaults to "noopener noreferrer" for external links.
- **noRel** — `boolean | undefined; optional`: If set to true, no rel attribute will be added to the link
- **prefetchedClass** — `string | undefined; optional`: A class to apply to links that have been prefetched.
- **prefetch** — `boolean | undefined; optional`: When enabled will prefetch middleware, layouts and payloads of links in the viewport.
- **prefetchOn** — `"visibility" | "interaction" | Partial<{ visibility: boolean; interaction: boolean; }> | undefined; optional`: Allows controlling when to prefetch links. By default, prefetch is triggered only on visibility.
- **noPrefetch** — `boolean | undefined; optional`: Escape hatch to disable \`prefetch\` attribute.
- **trailingSlash** — `"append" | "remove" | undefined; optional`: An option to either add or remove trailing slashes in the \`href\` for this specific link. Overrides the global \`trailingSlash\` option if provided.
- **replace** — `boolean | undefined; optional`: Calls \`router.replace\` instead of \`router.push\`.
- **ariaCurrentValue** — `"page" | "step" | "date" | "time" | "true" | "false" | "location" | undefined; optional; default: "page"`: Value passed to the attribute \`aria-current\` when the link is exact active.
- **activeClass** — `string | undefined; optional`: Class to apply when the link is active
- **exactActiveClass** — `string | undefined; optional`: Class to apply when the link is exact active
- **viewTransition** — `boolean | undefined; optional`: Pass the returned promise of \`router.push()\` to \`document.startViewTransition()\` if supported.
- **name** — `string | undefined; optional`
- **form** — `string | undefined; optional`
- **autofocus** — `Booleanish | undefined; optional`
- **formaction** — `string | undefined; optional`
- **formenctype** — `string | undefined; optional`
- **formmethod** — `string | undefined; optional`
- **formnovalidate** — `Booleanish | undefined; optional`
- **formtarget** — `string | undefined; optional`
- **referrerpolicy** — `HTMLAttributeReferrerPolicy | undefined; optional`
- **download** — `any; optional`
- **ping** — `string | undefined; optional`
- **hreflang** — `string | undefined; optional`
- **media** — `string | undefined; optional`

### Slots

- **default** — `{ active: boolean; }`

### Events

No events are declared.
