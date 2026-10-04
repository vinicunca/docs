import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { replaceNodeWithMarkdown, visitAndReplace } from '../utils/transformMDC'

type Param = { name: string, optional?: boolean, description?: string }
type Returns = { type?: string, description?: string }
type Signature = {
  variant: 'data-first' | 'data-last' | null
  signature?: string
  example?: string
  params: Param[]
  returns?: Returns
}
type Fn = {
  name: string
  kind: string
  category: string
  summary?: string
  tags: { lazy: boolean, strict: boolean, indexed: boolean, deprecated: boolean }
  signatures: Signature[]
  sourceUrl?: string
}

const catalog = JSON.parse(readFileSync(resolve('app/data/perkakas-functions.json'), 'utf8')) as {
  version: string
  functions: Fn[]
}

const functions = catalog.functions

function groupByCategory(list: Fn[]) {
  const groups = new Map<string, Fn[]>()
  for (const fn of list) {
    const grouped = groups.get(fn.category)
    if (grouped) grouped.push(fn)
    else groups.set(fn.category, [fn])
  }
  return [...groups.entries()]
}

function fence(code: string) {
  const ticks = code.includes('```') ? '````' : '```'
  return `${ticks}ts\n${code}\n${ticks}`
}

function renderFunction(fn: Fn) {
  const badges = [
    fn.tags.deprecated ? 'deprecated' : '',
    fn.tags.strict ? 'strict' : '',
    fn.tags.indexed ? 'indexed' : '',
    fn.tags.lazy ? 'lazy' : '',
    fn.kind !== 'function' ? fn.kind : ''
  ].filter(Boolean)
  const header = badges.length ? `${fn.name} (${badges.join(', ')})` : fn.name
  const parts = [`### ${header}`, '']
  if (fn.summary) parts.push(fn.summary.trim(), '')
  if (fn.sourceUrl) parts.push(`Source: <${fn.sourceUrl}>`, '')
  for (const signature of fn.signatures) {
    if (signature.variant === 'data-first') parts.push('**Data First**', '')
    if (signature.variant === 'data-last') parts.push('**Data Last**', '')
    if (signature.signature) parts.push(fence(signature.signature), '')
    if (signature.params.length) {
      parts.push('**Parameters**', '')
      for (const param of signature.params) {
        const optional = param.optional ? ' (optional)' : ''
        const desc = param.description ? `: ${param.description}` : ''
        parts.push(`- \`${param.name}\`${optional}${desc}`)
      }
      parts.push('')
    }
    if (signature.returns?.type || signature.returns?.description) {
      const type = signature.returns.type ? ` \`${signature.returns.type}\`` : ''
      const desc = signature.returns.description ? ` — ${signature.returns.description}` : ''
      parts.push(`**Returns**${type}${desc}`, '')
    }
    if (signature.example) parts.push('**Example**', '', fence(signature.example), '')
  }
  return parts.join('\n').trimEnd()
}

function renderReference() {
  const blocks = [`@vinicunca/perkakas ${catalog.version}. One heading per export, grouped by category.`, '']
  for (const [category, list] of groupByCategory(functions)) {
    blocks.push(`## ${category}`, '')
    for (const fn of list) blocks.push(renderFunction(fn), '')
  }
  return `${blocks.join('\n').trimEnd()}\n`
}

function renderCategoryList(category: string) {
  const list = functions.filter(fn => fn.category === category)
  if (!list.length) return `_No Perkakas exports in category ${category}._`
  return list.map((fn) => {
    const summary = fn.summary?.split('\n')[0]
    return `- [\`${fn.name}\`](/perkakas/functions#${fn.name})${summary ? ` — ${summary}` : ''}`
  }).join('\n')
}

export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('agent-discovery:document', async (_event, page) => {
    const doc = page as { body: unknown }

    for (const tag of ['perkakas-functions', 'PerkakasFunctions', 'perkakas-perkakas-functions']) {
      visitAndReplace(doc as any, tag, (node) => {
        replaceNodeWithMarkdown(node, renderReference())
      })
    }

    for (const tag of ['perkakas-category-list', 'PerkakasCategoryList', 'perkakas-perkakas-category-list']) {
      visitAndReplace(doc as any, tag, (node) => {
        const attrs = (node[1] ?? {}) as Record<string, string>
        replaceNodeWithMarkdown(node, renderCategoryList(attrs.category ?? ''))
      })
    }
  })
})
