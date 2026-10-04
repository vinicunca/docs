import { queryCollection } from '@nuxt/content/server'

/**
 * Every documentation page, prerendered as `/api/mcp/pages.json`: the index
 * the `/mcp` Worker searches. The Worker has no database, so this file is
 * the whole search corpus (titles, descriptions, keywords and headings).
 */
export default defineEventHandler(async (event) => {
  const pages = await queryCollection(event, 'docs')
    .select('path', 'title', 'description', 'category', 'keywords', 'framework', 'body')
    .where('to', 'IS NULL')
    .where('extension', '=', 'md')
    .all()

  return pages.map((page) => {
    const [, pkg = '', section = ''] = page.path.split('/')
    const headings = (page.body as any)?.toc?.links?.flatMap((link: any) => [link.text, ...(link.children?.map((child: any) => child.text) ?? [])]) ?? []

    return {
      path: page.path,
      package: pkg,
      section,
      title: page.title,
      description: page.description,
      category: page.category,
      framework: page.framework,
      keywords: page.keywords,
      headings
    }
  })
})
