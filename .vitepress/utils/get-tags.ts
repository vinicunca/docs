import type { DocumentedFunction } from '../utils/transform.typedoc';

export function getTags({
  methods: [method],
}: DocumentedFunction): ReadonlyArray<string> {
  const { indexed = false, pipeable = false, strict = false } = method ?? {};

  const out = [];

  if (pipeable) {
    out.push('pipeable');
  }

  if (indexed) {
    out.push('indexed');
  }

  if (strict) {
    out.push('strict');
  }

  return out;
}
