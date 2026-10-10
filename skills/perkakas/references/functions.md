# Function index

Every export of `@vinicunca/perkakas` 1.17.1, grouped by the category the docs use. Each entry shows the data-first call. Unless marked **one form**, the data-last form drops the first argument: `chunk(xs, 2)` becomes `chunk(2)`, and `unique(xs)` becomes `unique()`. **L** marks Lazy helpers that short-circuit inside `pipe`.

Full signatures and examples: https://vinicunca.dev/raw/perkakas/functions.md

## Array

- `allPass(data, fns)` / `anyPass(data, fns)`: all or any predicate returns true
- `chunk(xs, size)`: split into groups of `size`
- `concat(xs, other)`: join two arrays
- `countBy(xs, fn)`: count items per category key
- `difference(xs, other)` **L**, `differenceWith(xs, other, eq)` **L**: items not in `other`
- `drop(xs, n)` **L**, `dropLast(xs, n)`, `dropWhile(xs, pred)`, `dropLastWhile(xs, pred)`: remove from start or end
- `dropFirstBy(xs, n, ...rules)`: drop the `n` smallest by sort rules
- `filter(xs, pred)` **L**: keep matches; narrows with a guard
- `find(xs, pred)` **L**, `findIndex`, `findLast`, `findLastIndex`: first or last match
- `first(xs)` **L**, `last(xs)`: first or last item
- `firstBy(xs, ...rules)`: min (or max with `[fn, 'desc']`) without a full sort
- `flat(xs, depth?)` **L**: flatten nested arrays
- `flatMap(xs, fn)` **L**: map, then flatten one level
- `forEach(xs, fn)` **L**: side effect per item; returns the array
- `groupBy(xs, fn)`: group by returned key (`undefined` drops the item)
- `groupByProp(xs, 'key')`: group by a property's value
- `hasAtLeast(xs, n)`: guard that narrows to a tuple of at least `n`
- `indexBy(xs, fn)`: object keyed by `fn(item)`, last item wins (Lodash `keyBy`)
- `intersection(xs, other)` **L**, `intersectionWith(xs, other, eq)` **L**: items in both
- `join(xs, glue)`: join into a string with a typed result
- `length(xs)`: count items of an array or iterable
- `map(xs, fn)` **L**: map; tuples stay tuples
- `mapToObj(xs, x => [key, value])`: array to object
- `mapWithFeedback(xs, fn, initial)` **L**: running accumulation (scan)
- `meanBy(xs, fn)`, `sumBy(xs, fn)`: mean or sum of mapped values
- `mergeAll(objects)`: shallow merge of an array of objects. **One form.**
- `nthBy(xs, index, ...rules)`: item at `index` if sorted by rules
- `only(xs)`: the single item, or `undefined` when length is not 1
- `partition(xs, pred)`: `[matches, rest]`; narrows with a guard
- `range(start, end)`: numbers `[start, end)`; also `range(start, { end, step })`. Data-last: `range(end)(start)`
- `rankBy(xs, item, ...rules)`: rank of `item` among `xs`
- `reduce(xs, fn, initial)`: reduce
- `reverse(xs)`, `shuffle(xs)`, `sample(xs, size)`: reorder or pick at random
- `sort(xs, cmp)`: sort with a comparator, copy returned
- `sortBy(xs, ...rules)`: sort by rules; a rule is `fn` or `[fn, 'asc' | 'desc']`
- `sortedIndex(xs, item)`, `sortedIndexBy(xs, item, fn)`, `sortedIndexWith(xs, pred)`, `sortedLastIndex(xs, item)`, `sortedLastIndexBy(xs, item, fn)`: binary-search insertion index
- `splice(xs, start, deleteCount, replacement?)`: non-mutating splice
- `splitAt(xs, index)`, `splitWhen(xs, pred)`: split into two arrays
- `swapIndices(xs, i, j)`: swap two items (also works on strings)
- `take(xs, n)` **L**, `takeLast(xs, n)`, `takeWhile(xs, pred)`, `takeLastWhile(xs, pred)`: keep from start or end
- `takeFirstBy(xs, n, ...rules)`: the `n` smallest by sort rules
- `times(count, fn)`: array of `fn(index)` results
- `unique(xs)` **L**, `uniqueBy(xs, fn)` **L**, `uniqueWith(xs, eq)` **L**: dedupe
- `zip(a, b)` **L**: pairs; `zipWith(a, b, fn)` **L**: combine pairs with `fn`

## Function

- `pipe(data, ...fns)`: run functions left to right on `data`. **One form.**
- `piped(...fns)`: headless `pipe`; returns `(data) => result`
- `conditional(data, ...cases)`: `[guard, fn]` cases like `if/else if`; throws without a fallback case
- `when(data, pred, onTrue)` or `when(data, pred, { onTrue, onFalse })`: ternary as a function
- `constant(value)`: function that always returns `value`
- `identity()`: returns the identity function. **Call it.**
- `doNothing()`: returns a no-op function. **Call it.**
- `once(fn)`: call `fn` at most once, cache the result. **One form.**
- `funnel(callback, options)`: debounce, throttle, or batch; returns `{ call, cancel, flush, isIdle }`. **One form.**
- `debounce(fn, options)`: deprecated, use `funnel`
- `partialBind(fn, ...args)`, `partialLastBind(fn, ...args)`: bind leading or trailing arguments. **One form.**
- `sleep(ms)`: `Promise<void>` that resolves after `ms`. **One form.**
- `curry(impl, args)`: build a data-first/data-last helper (Remeda `purry`). **One form.**

## Guard

All single-argument guards are **one form**: pass them uncalled (`filter(xs, isString)`).

- Nullish: `isNullish`, `isNonNullish`, `isDefined` (`!== undefined` only), `isNonNull` (`!== null` only)
- Primitives: `isString`, `isNumber`, `isBoolean`, `isBigInt`, `isSymbol`
- Objects: `isArray`, `isPlainObject`, `isObjectType` (`typeof 'object'`, not `null`), `isDate`, `isError`, `isFunction`, `isPromise`
- Truthiness and emptiness: `isTruthy`, `isEmpty` (narrow inputs), `isEmptyish` (any input, including nullish, `Map`, `Set`)
- `isNot(guard)`: negated guard. **Data-last only.**
- Two-argument (both forms): `isDeepEqual(a, b)`, `isShallowEqual(a, b)`, `isStrictEqual(a, b)`, `isIncludedIn(value, container)`, `hasProp(obj, key)`, `hasSubObject(obj, subObject)`

## Number

- `add(a, b)`, `subtract(a, b)`, `multiply(a, b)`, `divide(a, b)`: arithmetic; data-last `add(1)` is handy in `map`
- `ceil(n, precision)`, `floor(n, precision)`, `round(n, precision)`: round to a precision
- `clamp(n, { min, max })`: clamp within inclusive bounds
- `sum(xs)` (0 when empty), `product(xs)` (1 when empty): numbers or bigints
- `mean(xs)`, `median(xs)`: numbers only
- `randomInteger(from, to)`, `randomBigInt(from, to)`: inclusive random value. **One form.**

## Object

- `keys(obj)`, `values(obj)`, `entries(obj)`: typed `Object.*`
- `fromEntries(pairs)`, `fromKeys(keys, fn)`: build an object
- `pick(obj, keys)`, `omit(obj, keys)`, `pickBy(obj, pred)`, `omitBy(obj, pred)`: select keys
- `prop(obj, ...keys)`: read a (nested) property with a typed path
- `pathOr(obj, path, fallback)`: deprecated, use `defaultTo(prop(obj, ...path), fallback)`
- `set(obj, key, value)`, `setPath(obj, path, value)`, `addProp(obj, key, value)`: write a property, returning a new object
- `mapKeys(obj, fn)`, `mapValues(obj, fn)`: transform keys or values
- `evolve(obj, evolver)`: apply per-key transforms from a nested evolver object
- `merge(a, b)`: shallow merge; `mergeDeep(a, b)`: recursive for plain objects only (arrays are replaced)
- `clone(obj)`: deep copy
- `invert(obj)`: swap keys and values
- `objOf(value, key)`: `{ [key]: value }`
- `pullObject(xs, keyFn, valueFn)`: array to object with separate key and value extractors
- `swapProps(obj, k1, k2)`: swap two values
- `forEachObj(obj, fn)`: iterate entries for side effects

## String

- `toCamelCase(s)`, `toKebabCase(s)`, `toSnakeCase(s)`, `toTitleCase(s)`: change case (camel and title accept `{ preserveConsecutiveUppercase }`)
- `toLowerCase(s)`, `toUpperCase(s)`, `capitalize(s)`, `uncapitalize(s)`: typed case helpers
- `truncate(s, n, { omission, separator })`: cut to length `n` with `...` by default
- `split(s, separator, limit?)`, `sliceString(s, start, end?)`: typed `String` methods
- `startsWith(s, prefix)`, `endsWith(s, suffix)`: narrow to template literal types
- `randomString(length)`: random alphanumeric string
- `slugify(s)`: URL/DOM-safe slug (`'FooBar'` → `'foobar'`). **One form.**
- `humanReadableFileSize(bytes, base = 1000)`: `'1.0 kB'`, or binary units with `1024` (`'2.0 MiB'`). **One form.**

## Utility

- `stringToPath('a.b[0].c')`: `['a', 'b', 0, 'c']`, for spreading into `prop` or `setPath`. **One form.**

## Other

These have no `@category` tag in source, so the docs list them under Other.

- `defaultTo(value, fallback)`: typed `??`; only accepts nullable input
- `tap(value, fn)`: run a side effect and return `value` unchanged
- `isBrowser`: `boolean` constant (`typeof window !== 'undefined'`)
- `KEY_CODES`: key name constants (`ENTER`, `ESC`, `ARROW_UP`, `TAB`, …)
- `DeepPartial<T>`: recursive `Partial` type. Import with `import type`.
