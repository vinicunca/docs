---
name: perkakas
description: Write TypeScript with @vinicunca/perkakas, a typed Remeda fork of data-first/data-last utilities, `pipe`, and type guards. Use when code imports `@vinicunca/perkakas`, when transforming arrays or objects (map, filter, groupBy, sortBy, pick, merge) with typed helpers, or when migrating from Remeda, Lodash, Ramda, or Just.
---

# Perkakas

`@vinicunca/perkakas` (current: 1.17.1) is a fork of [Remeda](https://remeda.org): the Remeda v2 runtime API plus a few extras. Every function is a named export from the package root. There is no default export and no subpath.

```ts
import { filter, isNonNullish, map, pipe } from '@vinicunca/perkakas'
import type { DeepPartial } from '@vinicunca/perkakas'
```

The one rename from Remeda: `purry` is `curry`.

## Data-first and data-last

Most functions have two forms on the same import. Data-first passes the data as the first argument. Data-last omits the data and returns a unary function to pass to `pipe`.

```ts
map(users, u => u.name) // data-first
pipe(users, map(u => u.name)) // data-last

sortBy(users, [prop('age'), 'desc'], prop('name'))
pipe(users, sortBy([prop('age'), 'desc'], prop('name')))
```

Rules that trip agents:

- **Zero-argument data-last helpers must be called.** Write `pipe(xs, unique(), sum())`, not `pipe(xs, unique, sum)`. This applies to `unique`, `first`, `last`, `length`, `reverse`, `shuffle`, `only`, `sum`, `mean`, `median`, `product`, `keys`, `values`, `entries`, `fromEntries`, `invert`, `clone`, `flat`, and the string case helpers (`toCamelCase()`, `toLowerCase()`, `capitalize()`, …).
- **`identity()` and `doNothing()` are factories.** Write `firstBy(xs, identity())` and `onClick: doNothing()`. `constant(value)` returns a function that always returns `value`.
- **Some exports have one form only.** `slugify(str)`, `humanReadableFileSize(bytes, base?)`, `sleep(ms)`, `randomInteger(from, to)`, `randomBigInt(from, to)`, `mergeAll(objects)`, `once(fn)`, `funnel(cb, opts)`, `partialBind`, and `partialLastBind` take their data directly. A single-argument one drops into `pipe` uncalled: `pipe(title, slugify)`.
- **Type guards are plain predicates.** Pass them uncalled: `filter(xs, isString)`, `pipe(xs, filter(isNonNullish))`.
- **Any unary function works in `pipe`.** Wrap other calls in an arrow: `($) => validate($, CONFIG)`. Use `piped(...fns)` to build a reusable pipeline without the data: `map(rows, piped(prop('a'), add(1)))`.
- **Functions never mutate input.** `set`, `setPath`, `merge`, `splice`, `swapIndices`, and the rest return new values. Reassign the result.

## Lazy evaluation in `pipe`

The Lazy helpers are `map`, `filter`, `flatMap`, `forEach`, `find`, `first`, `take`, `drop`, `unique`, `uniqueBy`, `uniqueWith`, `difference`, `differenceWith`, `intersection`, `intersectionWith`, `flat`, `zip`, `zipWith`, and `mapWithFeedback`. When consecutive lazy steps sit in a `pipe` in data-last form, Perkakas walks the input one item at a time. A later `take(n)` or `find` stops iteration early, so expensive callbacks run only on the items needed.

```ts
pipe(hugeArray, map(expensive), filter(isValid), take(2)) // stops after 2 matches
```

Two consequences:

- Inside a lazy pipe, the third callback argument (`data`) holds only the items processed so far, not the whole array. Use the data-first form when the callback needs the full array.
- To force eager evaluation of one step, call it data-first in an arrow: `($) => map($, fn)`.

## Type guards

Guards narrow the type, including through `filter`, `partition`, `find`, and `conditional`.

| Need | Use | Notes |
|---|---|---|
| Drop `null` and `undefined` | `isNonNullish` | `filter(xs, isNonNullish)` yields `T[]` |
| Drop only `undefined` | `isDefined` | `isDefined` is `!== undefined`; `null` passes |
| Drop only `null` | `isNonNull` | |
| Match `null \| undefined` | `isNullish` | Lodash `isNil` |
| Drop falsy values | `isTruthy` | Lodash `compact` is `filter(isTruthy)` |
| Negate a guard | `isNot(isString)` | Returns a guard |
| Narrow to a literal set | `isIncludedIn(value, ['a', 'b'] as const)` | Narrows `value` to `'a' \| 'b'` |
| Non-empty array or tuple | `hasAtLeast(xs, 1)` | Makes `xs[0]` non-optional |
| Empty string, array, or object | `isEmpty` | Narrow, type-safe inputs. `isEmptyish` also accepts `null`, `Map`, `Set`, and anything with `length`/`size` |
| Key exists | `hasProp(obj, 'key')` | Single key only |
| Equality | `isDeepEqual`, `isShallowEqual`, `isStrictEqual` | Lodash `isEqual` is `isDeepEqual` |
| Primitive and object checks | `isString`, `isNumber`, `isBoolean`, `isBigInt`, `isSymbol`, `isDate`, `isError`, `isFunction`, `isPromise`, `isArray`, `isPlainObject`, `isObjectType` | |

## Common tasks

| Task | Function |
|---|---|
| Group, index, count | `groupBy(xs, fn)`, `groupByProp(xs, 'key')`, `indexBy(xs, fn)`, `countBy(xs, fn)` |
| Sort (multi-key, asc/desc) | `sortBy(xs, fn, [fn2, 'desc'])`. `sort(xs, cmp)` takes a comparator |
| Min / max by | `firstBy(xs, fn)` (min), `firstBy(xs, [fn, 'desc'])` (max), `takeFirstBy(xs, n, ...rules)` |
| Dedupe | `unique(xs)`, `uniqueBy(xs, fn)`, `uniqueWith(xs, eq)` |
| Split | `partition(xs, pred)`, `chunk(xs, n)`, `splitAt(xs, i)`, `splitWhen(xs, pred)` |
| Array to object | `mapToObj(xs, x => [k, v])`, `pullObject(xs, keyFn, valueFn)`, `fromKeys(keys, fn)`, `fromEntries(pairs)` |
| Read nested value | `prop(obj, 'a', 'b', 0)` (variadic, typed path). For a string path: `prop(obj, ...stringToPath('a.b[0]'))` |
| Write nested value | `setPath(obj, ['a', 'b'], value)`; one key: `set(obj, 'a', value)` |
| Fallback for nullish | `defaultTo(value, fallback)` (a typed `??`; `NaN` is not nullish) |
| Pick / omit keys | `pick(obj, ['a', 'b'])`, `omit(obj, ['c'])`, `pickBy(obj, pred)`, `omitBy(obj, pred)` |
| Transform object | `mapValues(obj, fn)`, `mapKeys(obj, fn)`, `evolve(obj, { count: add(1) })` |
| Merge | `merge(a, b)` and `mergeAll([a, b, c])` are shallow; `mergeDeep(a, b)` replaces arrays instead of merging them |
| Deep copy | `clone(obj)` |
| Numbers | `sum`, `sumBy`, `mean`, `meanBy`, `median`, `product`, `clamp(n, { min, max })`, `round(n, precision)`, `range(0, 5)` |
| Strings | `toCamelCase`, `toKebabCase`, `toSnakeCase`, `toTitleCase`, `capitalize`, `truncate(s, n)`, `slugify`, `humanReadableFileSize` |
| Branching | `conditional(x, [isString, fn], [isNumber, fn2], constant(fallback))`, `when(x, pred, fn)` |
| Side effect in a pipe | `tap(fn)` |
| Debounce / throttle | `funnel(cb, { minQuietPeriodMs: 300 })` debounces; `funnel(cb, { minGapMs: 300, triggerAt: 'start' })` throttles. Trigger with `.call()`; also `.cancel()`, `.flush()`, `.isIdle` |

`conditional` throws when no case matches, unless the last argument is a fallback function such as `constant(undefined)`.

`funnel`'s `.call()` takes no arguments unless you add a `reducer`; the callback then receives the reducer's result: `funnel(q => search(q!), { reducer: (_, q: string) => q, minQuietPeriodMs: 300 })`.

## Perkakas-only exports

Not in Remeda: `curry`, `slugify`, `humanReadableFileSize`, `sleep`, `isBrowser`, `KEY_CODES`, and the type `DeepPartial<T>`.

- `isBrowser` is a `boolean` constant, not a function: `if (isBrowser) { … }`.
- `KEY_CODES` values mostly match `KeyboardEvent.key` (`ENTER: 'Enter'`, `ESC: 'Escape'`, `CTRL: 'Control'`). `SPACE` is `'Space'` (an `event.code` value) and `KEY_F` is `'KEY_F'`, which matches neither, so check those two before comparing.
- `curry(impl, args)` builds the data-first/data-last pair for your own helpers. It is untyped: declare both overloads yourself and type the implementation's return as `unknown`. It dispatches on `impl.length`, so `impl` must declare every parameter.

```ts
function double(data: number): number
function double(): (data: number) => number
function double(...args: ReadonlyArray<unknown>): unknown {
  return curry((n: number) => n * 2, args)
}
```

## Deprecated

- `debounce`: replace with `funnel`.
- `pathOr(obj, path, fallback)`: replace with `defaultTo(prop(obj, ...path), fallback)`.

## Migrating

- **Remeda:** swap the package, rename imports, and replace `purry` with `curry`. Nothing else changes.
- **Lodash:** many names differ. `get` → `prop` (variadic keys), `set` → `setPath`, `keyBy` → `indexBy`, `orderBy` → `sortBy`, `uniq` → `unique`, `flatten` → `flat`, `cloneDeep` → `clone`, `isEqual` → `isDeepEqual`, `isNil` → `isNullish`, `isEmpty` → `isEmptyish`, `compact` → `filter(isTruthy)`, `flow` → `pipe`, `cond` → `conditional`, `noop` → `doNothing()`, `debounce`/`throttle` → `funnel`, `camelCase` → `toCamelCase`, `startCase` → `toTitleCase`.
- **Ramda:** data-first moves the data to the front (`R.pick(keys, obj)` → `pick(obj, keys)`). The data-last form takes all remaining arguments in one call; there is no partial currying. `R.pipe(f, g)` returns a function, so it maps to `piped(f, g)`; `R.pipe(f, g)(x)` is `pipe(x, f, g)`. `R.path` → `prop` with variadic keys.
- **Just:** `extend` mutates; `merge`/`mergeDeep` return new objects. A deep-path `has` has no direct equivalent (`hasProp` checks one key).

For any function not covered here, open the per-library migration page before guessing a name.

## Reference

- [Function index](references/functions.md): every export by category with its call shape. Load it when you need a function this page does not name, or the exact argument order.
- Full signatures, parameters, and examples: https://vinicunca.dev/raw/perkakas/functions.md
- Introduction (install, pipe, laziness, guards): https://vinicunca.dev/raw/perkakas/getting-started.md
- Migration hub: https://vinicunca.dev/raw/perkakas/migrate.md
  - Remeda: https://vinicunca.dev/raw/perkakas/migrate/remeda.md
  - Lodash: https://vinicunca.dev/raw/perkakas/migrate/lodash.md
  - Ramda: https://vinicunca.dev/raw/perkakas/migrate/ramda.md
  - Just: https://vinicunca.dev/raw/perkakas/migrate/just.md
