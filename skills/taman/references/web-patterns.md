# Web app patterns (`apps/web`)

Docs: https://vinicunca.dev/raw/taman/guides/api-and-realtime.md, https://vinicunca.dev/raw/taman/guides/forms.md, https://vinicunca.dev/raw/taman/guides/dialogs-and-alerts.md, https://vinicunca.dev/raw/taman/guides/i18n.md, https://vinicunca.dev/raw/taman/guides/preferences-layouts-theming.md

## Where to import from

| Need | Import |
| --- | --- |
| RPC client, query utils | `client`, `orpc` from `#/api/orpc` |
| Error → message | `getErrors` from `#/api/errors` |
| Forms | `useTamanForm`, `z`, `TamanFormSchema` from `#/adapter/form` |
| Dialogs, drawers, alerts, page shells, toasts | `useTamanDialog`, `useTamanDrawer`, `tamanConfirm`, `AppPage`, `AppCard`, `useTamanToast` from `@taman/app-ui` (re-exports `@vinicunca/taman-ui`, `/form`, `/popup`) |
| Typed errors, live retry | `isDefinedError`, `safe`, `ORPCError`, `LIVE_RETRY` from `@vinicunca/request/orpc` |
| Contract types and Zod schemas | `@taman/api-contract` |
| Translate | `$t` from `#/locales` |
| Preferences | `@vinicunca/taman-core/preferences` |

## Queries and mutations

Copy `views/todo/use-todos-query.ts`:

```ts
import { useTamanToast } from '@taman/app-ui';
import { keepPreviousData, useMutation, useQuery, useQueryClient } from '@tanstack/vue-query';
import { isDefinedError } from '@vinicunca/request/orpc';
import { computed, toValue } from 'vue';
import { getErrors } from '#/api/errors';
import { orpc } from '#/api/orpc';

export function useInvoicesQuery(params: MaybeRefOrGetter<InvoiceListInput>) {
  const queryClient = useQueryClient();
  const { toaster } = useTamanToast();

  const list = useQuery(computed(() => orpc.invoice.list.queryOptions({
    input: toValue(params),
    placeholderData: keepPreviousData,
  })));

  // Keep it generic so isDefinedError can narrow to the contract's errors
  function onError<TError>(error: TError) {
    if (isDefinedError(error) && error.code === 'NOT_FOUND') {
      toaster.error('That invoice no longer exists.');
      return;
    }
    toaster.error(getErrors(error));
  }

  const callbacks = {
    onSuccess: () => queryClient.invalidateQueries({ queryKey: orpc.invoice.key() }),
    onError,
  };
  const create = useMutation(orpc.invoice.create.mutationOptions(callbacks));
  return { list, create };
}
```

- Query keys start with `['taman', …]` (`createRpcQueryUtils(client, { path: ['taman'] })`). Use `orpc.<feature>.key()` to invalidate the whole feature.
- `queryClient` in `src/query-client.ts` is shared by the router guard and the auth store. Queries default to `retry: 1`, and every query error shows a toast through `getErrors`. Pass `meta: { silentError: true }` to suppress it. Mutation errors are **not** toasted globally; handle them in `onError`.
- `queryOptions({...})` accepts unknown keys silently, so a typo such as `inptu` is never reported.
- To call outside Vue Query, use `const [error, data] = await safe(client.invoice.get({ id }))`.

## Live streams

```ts
const controller = new AbortController();
const stream = await client.todo.live(undefined, { signal: controller.signal, context: LIVE_RETRY });
for await (const event of stream) { /* apply event */ }
onScopeDispose(() => controller.abort());
```

`LIVE_RETRY` retries without limit on network errors and 5xx responses. A 4xx response (for example `UNAUTHORIZED` or `FORBIDDEN`) ends the stream. The stream resumes through `Last-Event-ID`, with 300 seconds of retention. A clean server close does not reconnect. See `views/todo/shared/use-todo-live.ts` and `apply-todo-event.ts` for patching the query cache from events.

## Forms

```vue
<script setup lang="ts">
import { invoiceCreateInput } from '@taman/api-contract';
import { useTamanForm, z } from '#/adapter/form';
import { $t } from '#/locales';

const [Form, formApi] = useTamanForm({
  showDefaultActions: false,
  submitOnEnter: true,
  handleSubmit: (values) => emit('submit', values),
  schema: [
    { component: 'Input', fieldName: 'number', label: $t('invoice.field.number'), rules: invoiceCreateInput.shape.number },
    { component: 'Switch', fieldName: 'paid', label: $t('invoice.field.paid'), defaultValue: false, rules: z.boolean().optional() },
  ],
});
</script>

<template>
  <Form />
</template>
```

- Reuse the contract's Zod fields as `rules`, so the client and server validate the same way. `rules: 'required'` uses the localized named rule.
- `formApi.validateAndSubmit()` is the preferred submit. It returns `undefined` when the form is invalid.
- Render `<Form />` before you await any `formApi` method. Those methods wait for the first mount, so without the render they wait forever.
- To load a different record, call `formApi.reset()` and then `formApi.setValues(record)`, as `todo-form.vue` does. `setValues` patches values within the same session.
- Use `formApi.setFieldError(name, message)` to show server-side field errors.
- The adapter applies `calendarDateTimeCodec` by default. Submit values are ISO strings and raw values are `CalendarDateTime`. Pass your own `codec` to change that.
- The available `component` names come from `src/adapter/components.ts`.

## Dialogs, drawers, alerts

```ts
const [Dialog, dialogApi] = useTamanDialog({
  title: 'Edit invoice',
  onConfirm: async () => {
    dialogApi.lock();
    try {
      await save(); dialogApi.close();
    } finally {
      dialogApi.unlock();
    }
  },
});
// <Dialog /> in the template; dialogApi.setData(payload) / getData() to pass a record
```

Use `useTamanDrawer` for wide forms. `tamanConfirm` rejects when the user cancels, so guard it:

```ts
try {
  await tamanConfirm({ title: $t('invoice.remove.title'), content: '…' });
} catch {
  return;
}
remove.mutate({ id });
```

Toasts come from `useTamanToast().toaster`, which has `info`, `success`, and `error`.

## i18n

- `src/locales/langs/<locale>/<ns>.json` → `$t('<ns>.key')`. Create files for both `en-US` and `id-ID`.
- Write route titles as `meta.title: $t('ns.key')`. Messages are not loaded yet when route modules evaluate, so `$t` returns the key at that point. The tabbar and `document.title` (in `bootstrap.ts`) translate the key when they render.
- Shared strings (`ui.formRules.*`, `ui.fallback.*`, auth and preferences copy) live in `packages/shell/locales`.
- To add a language, update `SUPPORTED_LANGUAGES` and the `LanguageOption['value']` union in `packages/shared/constants`, then add JSON for the app, `packages/shell/locales`, and `packages/server/emails/src/locales`.

## Preferences, layout, theming

- `main.ts` awaits `initPreferences({ namespace: \`${VITE_APP_NAMESPACE}-${version}-${dev|prod}\`, overrides })` before the dynamic `bootstrap` import.
- Overrides live in `src/preferences.ts` (`defineOverridesPreferences`). Cached values fill only the fields you did not set. If a change does not show up, clear the preferences key in localStorage.
- `updatePreferences(partial)` merges and persists, debounced by 150 ms. Read reactive values with `preferences.*` or `usePreferences()` computeds. `usePreferences().app` is a snapshot, not a reactive value.
- Layouts: `app.layout` is one of `sidebar-nav` (the default), `sidebar-mixed-nav`, `header-nav`, `header-mixed-nav`, `header-sidebar-nav`, `mixed-nav`, `full-content`. `layouts/core.vue` wraps `TamanCoreLayout`.
- Theming: `vite.config.ts` runs `vitePohon` with `theme: { unstyled: true }`, the colors and `ui` from `@taman/designs/theme`, and `scanPackages: ['@vinicunca/taman-ui', '@taman/app-ui']`. Put design changes in `packages/shell/designs`. Use semantic Pohon/UnoCSS tokens rather than raw palette colors.
- Global state: `globalShareState` (taman-core) is for cross-package UI pieces only. Keep user and session data in `useSessionStore` and the session query.

## e2e

`cd apps/web && pnpm test:e2e` starts Vite on **5560** and needs the API running plus `E2E_EMAIL`/`E2E_PASSWORD`. Set `E2E_REUSE_SERVER=1` when port 5560 is already taken. Only Chromium is configured. The default `NITRO_TRUSTED_ORIGINS` lists only `http://localhost:5556`. Add `http://localhost:5560` if login or RPC calls fail with CORS errors during e2e runs.
