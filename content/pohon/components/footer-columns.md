---
title: "FooterColumns"
description: "A list of links as columns to display in your Footer."
package: pohon
sourceTag: "v2.0.1"
sourceCommit: "ee987babf834bae617d75a9c6b9347bba1a494df"
sourceUrl: "https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/docs/content/docs/2.components/footer-columns.md"
---
## Usage

The FooterColumns component renders a list of columns to display in your Footer.

Use it in the `top` slot of the [Footer](/pohon/components/footer) component:

```vue
<template>
  <PFooter>
    <template #top>
      <PContainer>
        <PFooterColumns />
      </PContainer>
    </template>
  </PFooter>
</template>
```

### Columns

Use the `columns` prop as an array of objects with the following properties:

- `label: string`
- `children?: FooterColumnLink[]`

Each column contains a `children` array of objects that define the links. Each link can have the following properties:

- `label?: string`
- `icon?: string`
- `class?: any`
- `ui?: { item?: ClassNameValue, link?: ClassNameValue, linkLabel?: ClassNameValue, linkLabelExternalIcon?: ClassNameValue, linkLeadingIcon?: ClassNameValue }`

You can pass any property from the [Link](/pohon/components/link#props) component such as `to`, `target`, etc.

```vue [FooterColumnsExample.vue]
<script setup lang="ts">
import type { FooterColumn } from 'pohon-ui'

const columns: FooterColumn[] = [{
  label: 'Community',
  children: [{
    label: 'Nuxters',
    to: 'https://nuxters.nuxt.com',
    target: '_blank'
  }, {
    label: 'Video Courses',
    to: 'https://masteringnuxt.com/nuxt3?ref=nuxt',
    target: '_blank'
  }, {
    label: 'Nuxt on GitHub',
    to: 'https://github.com/nuxt',
    target: '_blank'
  }]
}, {
  label: 'Solutions',
  children: [{
    label: 'Nuxt Content',
    to: 'https://content.nuxt.com/',
    target: '_blank'
  }, {
    label: 'Nuxt DevTools',
    to: 'https://devtools.nuxt.com/',
    target: '_blank'
  }, {
    label: 'Nuxt Image',
    to: 'https://image.nuxt.com/',
    target: '_blank'
  }, {
    label: 'Pohon UI',
    to: '/pohon/',
    target: '_blank'
  }]
}]
</script>

<template>
  <PFooterColumns :columns="columns">
    <template #right>
      <PFormField name="email" label="Subscribe to our newsletter" size="lg">
        <PInput type="email" class="w-full">
          <template #trailing>
            <PButton type="submit" size="xs" color="neutral" label="Subscribe" />
          </template>
        </PInput>
      </PFormField>
    </template>
  </PFooterColumns>
</template>
```

## API

### Props

### Slots

## Theme

```ts [app.config.ts]
export default defineAppConfig({
  ui: {
    footerColumns: {
      slots: {
        root: 'xl:grid xl:grid-cols-3 xl:gap-8',
        left: 'mb-10 xl:mb-0',
        center: 'flex flex-col lg:grid grid-flow-col auto-cols-fr gap-8 xl:col-span-2',
        right: 'mt-10 xl:mt-0',
        label: 'text-sm font-600',
        list: 'mt-6 space-y-4',
        item: 'relative',
        link: 'group text-sm flex items-center gap-1.5 rounded-sm outline-primary/25 focus-visible:outline-3',
        linkLeadingIcon: 'size-5 shrink-0',
        linkLabel: 'truncate',
        linkLabelExternalIcon: 'size-3 absolute top-0 color-text-dimmed inline-block'
      },
      variants: {
        active: {
          true: {
            link: 'color-primary font-500'
          },
          false: {
            link: [
              'color-text-muted hover:color-text',
              'transition-colors'
            ]
          }
        }
      }
    }
  }
})
```

## Changelog

See commit history for [component](https://github.com/vinicunca/pohon/commits/main/src/runtime/components/FooterColumns.vue) and [theme](https://github.com/vinicunca/pohon/commits/main/src/theme/footer-columns.ts).

---

- [GitHub](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/FooterColumns.vue)


## Sitemap

See the full [sitemap](https://pohon.vinicunca.dev/sitemap.md) for all pages.

## Generated component API

[FooterColumns source](https://github.com/vinicunca/pohon/blob/ee987babf834bae617d75a9c6b9347bba1a494df/src/runtime/components/FooterColumns.vue)

### Props

- **as** — `any; optional; default: "nav"`: The element or component this component should render as.
- **columns** — `FooterColumn<T>[] | undefined; optional`
- **ui** — `{ root?: SlotClass; left?: SlotClass; center?: SlotClass; right?: SlotClass; label?: SlotClass; list?: SlotClass; item?: SlotClass; link?: SlotClass; linkLeadingIcon?: SlotClass; linkLabel?: SlotClass; linkLabelExternalIcon?: SlotClass; } | undefined; optional`

### Slots

- **left** — `{} | undefined`
- **default** — `{} | undefined`
- **right** — `{} | undefined`
- **column-label** — `{ column: FooterColumn<T>; }`
- **link** — `{ link: T; active: boolean; ui: { root: (props?: Record<string, any> | undefined) => string | undefined; left: (props?: Record<string, any> | undefined) => string | undefined; center: (props?: Record<string, any> | undefined) => string | undefined; right: (props?: Record<string, any> | undefined) => string | undefined; label: (props?: Record<string, any> | undefined) => string | undefined; list: (props?: Record<string, any> | undefined) => string | undefined; item: (props?: Record<string, any> | undefined) => string | undefined; link: (props?: Record<string, any> | undefined) => string | undefined; linkLeadingIcon: (props?: Record<string, any> | undefined) => string | undefined; linkLabel: (props?: Record<string, any> | undefined) => string | undefined; linkLabelExternalIcon: (props?: Record<string, any> | undefined) => string | undefined; }; }`
- **link-leading** — `{ link: T; active: boolean; ui: { root: (props?: Record<string, any> | undefined) => string | undefined; left: (props?: Record<string, any> | undefined) => string | undefined; center: (props?: Record<string, any> | undefined) => string | undefined; right: (props?: Record<string, any> | undefined) => string | undefined; label: (props?: Record<string, any> | undefined) => string | undefined; list: (props?: Record<string, any> | undefined) => string | undefined; item: (props?: Record<string, any> | undefined) => string | undefined; link: (props?: Record<string, any> | undefined) => string | undefined; linkLeadingIcon: (props?: Record<string, any> | undefined) => string | undefined; linkLabel: (props?: Record<string, any> | undefined) => string | undefined; linkLabelExternalIcon: (props?: Record<string, any> | undefined) => string | undefined; }; }`
- **link-label** — `{ link: T; active: boolean; }`
- **link-trailing** — `{ link: T; active: boolean; }`

### Events

No events are declared.
