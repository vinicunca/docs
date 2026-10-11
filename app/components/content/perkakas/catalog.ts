import catalog from '~/data/perkakas-functions.json';

export interface PerkakasParam {
  name: string;
  optional?: boolean;
  description?: string;
}

export interface PerkakasReturns {
  type?: string;
  description?: string;
}

export interface PerkakasSignature {
  variant: 'data-first' | 'data-last' | null;
  signature?: string;
  signatureHtml?: string;
  example?: string;
  exampleHtml?: string;
  params: Array<PerkakasParam>;
  returns?: PerkakasReturns;
}

export interface PerkakasFunction {
  name: string;
  kind: 'function' | 'constant' | 'type';
  category: string;
  summary?: string;
  tags: {
    lazy: boolean;
    strict: boolean;
    indexed: boolean;
    deprecated: boolean;
  };
  signatures: Array<PerkakasSignature>;
  sourceUrl?: string;
}

export interface PerkakasCatalog {
  version: string;
  generatedAt: string;
  functions: Array<PerkakasFunction>;
}

export const perkakasCatalog = catalog as PerkakasCatalog;

export const perkakasVersion = perkakasCatalog.version;

export const perkakasFunctions = perkakasCatalog.functions;

export const perkakasNames = new Set(perkakasFunctions.map(({ name }) => name));

export interface PerkakasGroup {
  category: string;
  functions: Array<PerkakasFunction>;
}

export function groupPerkakasFunctions(functions: ReadonlyArray<PerkakasFunction>): Array<PerkakasGroup> {
  const groups = new Map<string, Array<PerkakasFunction>>();
  for (const fn of functions) {
    const list = groups.get(fn.category);
    if (list) {
      list.push(fn);
    } else {
      groups.set(fn.category, [fn]);
    }
  }
  return [...groups.entries()].map(([category, grouped]) => ({ category, functions: grouped }));
}

export const perkakasGroups = groupPerkakasFunctions(perkakasFunctions);

export const perkakasCategories = perkakasGroups.map(({ category }) => category);

export function matchesPerkakasQuery(fn: PerkakasFunction, query: string): boolean {
  if (!query) {
    return true;
  }
  const haystack = [
    fn.name,
    fn.category,
    fn.summary ?? '',
    ...fn.signatures.flatMap(({ signature, example }) => [signature ?? '', example ?? '']),
  ].join('\n').toLowerCase();
  return haystack.includes(query);
}
