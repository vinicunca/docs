import { z } from 'zod'
import { defineCollection, defineContentConfig } from '@nuxt/content'
import { defineSitemapSchema } from '@nuxtjs/sitemap/content'

const Avatar = z.object({
  src: z.string(),
  alt: z.string().optional()
})

const Button = z.object({
  label: z.string(),
  icon: z.string().optional(),
  avatar: Avatar.optional(),
  leadingIcon: z.string().optional(),
  trailingIcon: z.string().optional(),
  to: z.string().optional(),
  target: z.enum(['_blank', '_self']).optional(),
  color: z.enum(['primary', 'neutral', 'success', 'warning', 'error', 'info']).optional(),
  size: z.enum(['xs', 'sm', 'md', 'lg', 'xl']).optional(),
  variant: z.enum(['solid', 'outline', 'subtle', 'soft', 'ghost', 'link']).optional(),
  id: z.string().optional(),
  class: z.string().optional()
})

export default defineContentConfig({
  collections: {
    // Every package lives in `content/<package>/<n>.<section>/**`, so a page's
    // first path segment is its package (see `app/utils/packages.ts`).
    docs: defineCollection({
      type: 'page',
      source: [{
        include: '**'
      }],
      schema: z.object({
        // Sidebar group inside a section, listed per package in `DOCS_PACKAGES`
        category: z.string().optional(),
        keywords: z.array(z.string()).optional(),
        index: z.boolean().optional(),
        // Pohon UI pages that only apply to Nuxt or to Vue
        framework: z.enum(['nuxt', 'vue']).optional(),
        navigation: z.object({
          title: z.string().optional(),
          badge: z.string().optional()
        }),
        links: z.array(Button),
        // External navigation entries: the sidebar link points at `to` instead
        // of the page's own path.
        to: z.string().optional(),
        target: z.string().optional(),
        // an entry that links out is not a page to index
        sitemap: defineSitemapSchema({ z, name: 'docs', filter: entry => !entry.to })
      })
    })
  }
})
