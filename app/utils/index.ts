import { capitalize, toCamelCase } from '@vinicunca/perkakas';

export function upperName(name: string) {
  return capitalize(toCamelCase(name));
}
