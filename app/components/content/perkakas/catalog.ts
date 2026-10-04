import catalog from '~/data/perkakas-functions.json'

export type PerkakasParam = {
  name: string
  optional?: boolean
  description?: string
}

export type PerkakasReturns = {
  type?: string
  description?: string
}

export type PerkakasSignature = {
  variant: 'data-first' | 'data-last' | null
  signature?: string
  signatureHtml?: string
  example?: string
  exampleHtml?: string
  params: PerkakasParam[]
  returns?: PerkakasReturns
}

export type PerkakasFunction = {
  name: string
  kind: 'function' | 'constant' | 'type'
  category: string
  summary?: string
  tags: {
    lazy: boolean
    strict: boolean
    indexed: boolean
    deprecated: boolean
  }
  signatures: PerkakasSignature[]
  sourceUrl?: string
}

export type PerkakasCatalog = {
  version: string
  generatedAt: string
  functions: PerkakasFunction[]
}

export const perkakasCatalog = catalog as PerkakasCatalog

export const perkakasVersion = perkakasCatalog.version

export const perkakasFunctions = perkakasCatalog.functions

export const perkakasNames = new Set(perkakasFunctions.map(({ name }) => name))

export type PerkakasGroup = {
  category: string
  functions: PerkakasFunction[]
}

export function groupPerkakasFunctions(functions: readonly PerkakasFunction[]): PerkakasGroup[] {
  const groups = new Map<string, PerkakasFunction[]>()
  for (const fn of functions) {
    const list = groups.get(fn.category)
    if (list) {
      list.push(fn)
    } else {
      groups.set(fn.category, [fn])
    }
  }
  return [...groups.entries()].map(([category, grouped]) => ({ category, functions: grouped }))
}

export const perkakasGroups = groupPerkakasFunctions(perkakasFunctions)

export const perkakasCategories = perkakasGroups.map(({ category }) => category)

export function matchesPerkakasQuery(fn: PerkakasFunction, query: string): boolean {
  if (!query) return true
  const haystack = [
    fn.name,
    fn.category,
    fn.summary ?? '',
    ...fn.signatures.flatMap(({ signature, example }) => [signature ?? '', example ?? ''])
  ].join('\n').toLowerCase()
  return haystack.includes(query)
}
