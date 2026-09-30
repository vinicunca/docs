import { format } from 'prettier';
import PERKAKAS_METADATA from './data/metadata.json';
import { transformProject } from './perkakas.transform';

const prettierOptions = {
  parser: 'typescript',
  printWidth: 80,
  singleQuote: true,
  tabWidth: 4,
  trailingComma: 'all' as const,
};

async function loadPerkakasMethods() {
  return Promise.all(transformProject(PERKAKAS_METADATA).map(async (func) => ({
    ...func,
    methods: await Promise.all(func.methods.map(async (method) => ({
      ...method,
      example: await format(method.example ?? '', prettierOptions),
      signature: await format(method.signature ?? '', prettierOptions),
    }))),
  })));
}

let methods: ReturnType<typeof loadPerkakasMethods> | undefined;

export function getPerkakasMethods() {
  methods ??= loadPerkakasMethods();
  return methods;
}
