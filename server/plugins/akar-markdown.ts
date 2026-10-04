import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import meta from '../../app/data/akar-meta.json'

type AkarMetaEntry = {
  source: string
  description: string
  props: { name: string, type: string, required: boolean, default: string | null, description: string }[]
  emits: { name: string, type: string, description: string }[]
  slots: { name: string, type: string, description: string }[]
  methods: { name: string, type: string, description: string }[]
}

const components = (meta as { components: Record<string, AkarMetaEntry> }).components

let demoSources: Record<string, { vue?: string, css?: string }> | null = null

async function loadDemoSources() {
  if (demoSources) return demoSources
  try {
    const raw = await readFile(join(process.cwd(), 'app/data/akar-demo-sources.json'), 'utf8')
    demoSources = JSON.parse(raw)
  } catch {
    demoSources = {}
  }
  return demoSources
}

function attr<T = any>(node: any[], key: string): T | undefined {
  const attrs = node[1] || {}
  if (attrs[key] !== undefined) return attrs[key] as T
  if (attrs[`:${key}`] !== undefined) {
    try {
      return JSON.parse(attrs[`:${key}`]) as T
    } catch {
      return attrs[`:${key}`] as T
    }
  }
  return undefined
}

function escapeCell(value: string) {
  return String(value ?? '').replace(/\|/g, '\\|').replace(/\n/g, '<br>')
}

function mdTable(headers: string[], rows: string[][]) {
  const line = (cells: string[]) => `| ${cells.map(escapeCell).join(' | ')} |`
  return [line(headers), line(headers.map(() => '---')), ...rows.map(line)].join('\n')
}

function payload(type: string) {
  return type.replace(/^\[(.*)\]$/s, '$1')
}

function apiMarkdown(name: string) {
  const entry = components[name]
  if (!entry) return `_No API metadata for \`${name}\`._`

  const blocks: string[] = []

  if (entry.props.length) {
    blocks.push('**Props**\n\n' + mdTable(
      ['Prop', 'Default', 'Type', 'Description'],
      entry.props.map(prop => [
        `\`${prop.name}${prop.required ? '*' : ''}\``,
        prop.default ? `\`${prop.default}\`` : '',
        prop.type ? `\`${prop.type}\`` : '',
        prop.description || ''
      ])
    ))
  }

  if (entry.emits.length) {
    blocks.push('**Events**\n\n' + mdTable(
      ['Event', 'Payload', 'Description'],
      entry.emits.map(emit => [
        `\`${emit.name}\``,
        payload(emit.type) ? `\`${payload(emit.type)}\`` : '',
        emit.description || ''
      ])
    ))
  }

  if (entry.slots.length) {
    blocks.push('**Slots**\n\n' + mdTable(
      ['Slot', 'Payload', 'Description'],
      entry.slots.map(slot => [
        `\`${slot.name}\``,
        slot.type ? `\`${slot.type}\`` : '',
        slot.description || ''
      ])
    ))
  }

  if (entry.methods.length) {
    blocks.push('**Methods**\n\n' + mdTable(
      ['Method', 'Type', 'Description'],
      entry.methods.map(method => [
        `\`${method.name}\``,
        method.type ? `\`${method.type}\`` : '',
        method.description || ''
      ])
    ))
  }

  if (entry.source) {
    blocks.push(`[${name}.vue source](${entry.source})`)
  }

  return blocks.join('\n\n') || `_No API fields for \`${name}\`._`
}

function highlightsMarkdown(features: string[] = []) {
  return features.map(feature => `- ${feature}`).join('\n')
}

function dataAttributesMarkdown(data: { attribute: string, values: string | string[] }[] = []) {
  return mdTable(
    ['Data attribute', 'Value'],
    data.map(item => [
      `\`${item.attribute}\``,
      Array.isArray(item.values) ? item.values.map(value => `"${value}"`).join(' \\| ') : item.values
    ])
  )
}

function keyboardMarkdown(data: { keys: string[], description: string }[] = []) {
  return mdTable(
    ['Key', 'Description'],
    data.map(item => [item.keys.map(key => `<kbd>${key}</kbd>`).join(' / '), item.description])
  )
}

function cssVariablesMarkdown(data: { cssVariable: string, description: string }[] = []) {
  return mdTable(
    ['CSS variable', 'Description'],
    data.map(item => [`\`${item.cssVariable}\``, item.description])
  )
}

export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('agent-discovery:document', async (_event, page) => {
    const path = String((page as any).path || (page as any).stem || '')
    if (!path.includes('akar')) return

    const doc = page as { body: any, title?: string }

    visitAndReplace(doc, 'akar-api', (node) => {
      const name = attr<string>(node, 'name')
      replaceNodeWithMarkdown(node, name ? apiMarkdown(name) : '_Missing `name` on akar-api._')
    })

    visitAndReplace(doc, 'akar-highlights', (node) => {
      replaceNodeWithMarkdown(node, highlightsMarkdown(attr<string[]>(node, 'features') || []))
    })

    visitAndReplace(doc, 'akar-data-attributes', (node) => {
      replaceNodeWithMarkdown(node, dataAttributesMarkdown(attr(node, 'data') || []))
    })

    visitAndReplace(doc, 'akar-keyboard', (node) => {
      replaceNodeWithMarkdown(node, keyboardMarkdown(attr(node, 'data') || []))
    })

    visitAndReplace(doc, 'akar-css-variables', (node) => {
      replaceNodeWithMarkdown(node, cssVariablesMarkdown(attr(node, 'data') || []))
    })

    const demos = await loadDemoSources()
    visitAndReplace(doc, 'akar-preview', (node) => {
      const name = attr<string>(node, 'name')
      const demo = name ? demos[name] : undefined
      if (!demo?.vue) {
        replaceNodeWithMarkdown(node, name ? `_No demo source for \`${name}\`._` : '_Missing `name` on akar-preview._')
        return
      }
      const blocks = [fencedBlock(demo.vue, 'vue', 'index.vue')]
      if (demo.css) blocks.push(fencedBlock(demo.css, 'css', 'styles.css'))
      replaceNodeWithMarkdown(node, blocks.join('\n\n'))
    })
  })
})
