---
name: perkakas
description: Use @vinicunca/perkakas for typed data-first/data-last utilities, pipes, and type guards in TypeScript. Reach for this skill when mapping, filtering, grouping, picking, or piping data, or when replacing Lodash, Ramda, Just, or Remeda.
---

# Perkakas

`@vinicunca/perkakas` is a TypeScript utility library (Remeda fork). Same function works **data-first** (`map(array, fn)`) and **data-last** (`pipe(array, map(fn))`). Remeda's `purry` is `curry` here.

## When to use

- Transforming arrays/objects with typed helpers instead of ad-hoc loops
- Building a `pipe` of steps that should stay typed
- Type guards that narrow (`isString`, `isDefined`, `isPlainObject`, …)
- Migrating Lodash / Ramda / Just / Remeda

Prefer native JS when it is already clear (`array.filter`, `Object.keys`). Use Perkakas when you want data-last + `pipe`, lazy short-circuit, or stricter types than `Array.prototype`.

## Import style

```ts
import { filter, map, pipe } from '@vinicunca/perkakas'
```

Named imports only. Tree-shaking drops unused helpers.

## Idioms

```ts
// data-first
map([1, 2, 3], n => n * 2)

// data-last in a pipe
pipe(
  users,
  filter(user => user.active),
  map(user => user.name)
)
```

Lazy helpers (`map`, `filter`, `take`, `unique`, …) short-circuit inside `pipe` in data-last form. Force eager with `($) => map($, fn)`.

## Useful functions by category

- **Array:** `map`, `filter`, `flatMap`, `reduce`, `sortBy`, `unique`, `uniqueBy`, `groupBy`, `partition`, `take`, `drop`, `chunk`, `zip`, `difference`, `first`, `last`
- **Object:** `pick`, `omit`, `pickBy`, `mapKeys`, `mapValues`, `merge`, `mergeDeep`, `keys`, `values`, `entries`, `prop`, `set`, `hasProp`
- **Function:** `pipe`, `piped`, `curry` (not `purry`), `debounce`, `once`, `partialBind`, `sleep`
- **Guard:** `isString`, `isNumber`, `isDefined`, `isNullish`, `isArray`, `isPlainObject`, `isDeepEqual`, `isIncludedIn`
- **String:** `capitalize`, `toCamelCase`, `toKebabCase`, `toSnakeCase`, `slugify`, `truncate`, `humanReadableFileSize`
- **Number:** `clamp`, `round`, `sum`, `mean`, `randomInteger`, `range`
- **Other:** `tap`, `defaultTo`, `isBrowser`, `KEY_CODES`, `DeepPartial`

Full signatures, examples, and params: [Functions (raw)](https://vinicunca.dev/raw/perkakas/functions.md).

## Docs

- Intro + install: https://vinicunca.dev/raw/perkakas/getting-started.md
- Function reference: https://vinicunca.dev/raw/perkakas/functions.md
- Coming from Remeda: https://vinicunca.dev/raw/perkakas/migrate/remeda.md
- Lodash: https://vinicunca.dev/raw/perkakas/migrate/lodash.md
- Ramda: https://vinicunca.dev/raw/perkakas/migrate/ramda.md
- Just: https://vinicunca.dev/raw/perkakas/migrate/just.md
