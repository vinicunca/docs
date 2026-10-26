---
name: taman
description: Work inside a generated Taman project, the Vue 3 admin SPA plus Nitro/oRPC API on Cloudflare that create-taman scaffolds. Use when adding a feature or resource, changing auth, organizations, or permissions, editing drizzle schema or oRPC contracts, building forms and dialogs with @vinicunca/taman-ui, running or seeding the app locally, or deploying the Worker API and static web build.
---

# Taman

A generated Taman project is a pnpm + nx monorepo the user owns outright. Edit `apps/` and `packages/{shell,server,shared}` freely. Only the `@vinicunca/*` packages (`taman-core`, `taman-ui`, `request`, `vite-config`, `tsconfig`, `node-utils`, `commitlint-config`) come from npm and receive updates through `pnpm update`. Never patch them in `node_modules`. Wrap or override them in workspace code.

Workspace packages use the scope the user picked at generate time (`@<scope>/…`, default `@taman/`). Check the root `package.json` before you write an import. The examples below use `@taman/`.

**todo** is the reference feature. It goes through every layer, so copy it. The example gallery (`views/examples`, `routes/modules/dev/examples.ts`) is removed when the project is generated.

## Layout

| Layer | Path | Notes |
| --- | --- | --- |
| Permissions | `packages/shared/rbac/src/rbac.{shared,admin,organizations}.ts` | `sharedStatements` (`as const`) plus a grant on each role |
| DB schema | `packages/server/db-pg/src/schemas/<feature>.schema.ts` | Re-export it from `schemas/index.ts` |
| Contract | `packages/shared/api-contract/src/<feature>/<feature>.{schema,contract}.ts` | Mount it on `contract` in `src/index.ts` |
| Repo + service | `apps/api/server/domains/<feature>/` | Repo extends `CoreRepo`, service extends `CoreService` |
| RPC | `apps/api/server/rpc/procedures/<feature>.ts` | Register it in `server/rpc/router.ts` |
| Auth (API) | `apps/api/server/auth/better-auth.instance.ts` | better-auth with the admin and organization plugins |
| Route module | `apps/web/src/router/routes/modules/<feature>.ts` | Top-level `*.ts` files only, default-exports `RouteRecordRaw[]` |
| Views | `apps/web/src/views/<feature>/` | |
| i18n | `apps/web/src/locales/langs/{en-US,id-ID}/<feature>.json` | The filename becomes the namespace: `$t('<feature>.title')` |
| API client | `apps/web/src/api/orpc.ts` | `client` (plain calls) and `orpc` (TanStack Query utils) |
| Form adapter | `apps/web/src/adapter/form.ts` | The app's `useTamanForm` and `z` |
| Prefs | `apps/web/src/preferences.ts` | `defaultHomePath: '/todos/manage'` |

Import aliases: `#/*` → `apps/web/src/*`, and `#*` → `apps/api/server/*`. The API imports with explicit `.ts` extensions, for example `#domains/todo/todo.service.ts`.

## Add a feature

Work through the layers in this order. Each layer's types feed the next one.

1. **RBAC.** Add `<feature>: ['create', 'read', 'update', 'delete']` to `sharedStatements`. Grant it on `adminRole` in `rbac.admin.ts` and on `ownerRole`/`memberRole` in `rbac.organizations.ts`.
2. **Schema.** Add an org-scoped table (`organizationId` referencing `organizationTable.id`, `onDelete: 'cascade'`) and export it. Then run `pnpm db-pg:migrate:dev`.
3. **Contract.** Write Zod schemas and an `oc` contract. Put typed errors on the contract with `oc.errors({ NOT_FOUND: … })`. Add `export *` lines and the key on `contract`.
4. **Repo → service.** The repo holds only drizzle queries, each scoped by `organizationId`. The service copies todo's private `authorize(action)`, which fails closed on a missing membership, checks `this.can({ <feature>: [action] })`, and returns the org id. The service returns `null` when a row is missing.
5. **Procedure.** Write `const x = os.<feature>.use(authed)`, and turn `null` into `throw errors.NOT_FOUND()`. Add it to `os.router({...})`. Typecheck fails until every contract procedure is implemented.
6. **Web.** Add a route module (`meta.icon`, `meta.order` from `ROUTE_ORDER`, `meta.title: $t(...)`), the views, and the locale JSON for both languages.
7. **Tests.** Copy `todo.repo.fake.ts`, `todo.service.test.ts`, and `procedures/todo.test.ts`.

You are done when `pnpm check:type` and `pnpm test:unit` pass and the new menu item loads data for a user who belongs to an organization.

Code for every step: [references/add-a-feature.md](references/add-a-feature.md).

## Commands

```bash
docker compose up -d             # Postgres 18 on localhost:5437
pnpm db-pg:migrate:dev           # drizzle-kit push (local only)
pnpm nx run api:seed             # admin@taman.local / Admin123!; runs under bun (not a declared dependency)
pnpm nx run api:seed:todos       # needs an existing organization
pnpm dev:api                     # Nitro on :8788
pnpm dev:web                     # Vite on :5556
pnpm check:type && pnpm test:unit && pnpm lint
pnpm db:generate                 # SQL migrations for uat/prod
pnpm dev:db-pg:studio            # Drizzle Studio
```

If Bun is not installed, run the seed with `pnpm exec tsx --env-file=apps/api/.env apps/api/scripts/seed-admin.ts`.

## Gotchas

- **The seeded admin has no organization, so the todo pages return FORBIDDEN (`ORG_REQUIRED`).** `authed` lets platform admins through without an active org, but `TodoService.authorize` still requires a `member` row. No UI creates organizations yet. Create an org and an `owner` membership, then sign in again. See [references/auth-and-access.md](references/auth-and-access.md).
- **`CoreService` exposes `can(permission)`, not `authorize`.** `authorize` is private to each service. Copy it from `TodoService`.
- **Grant a new resource on `adminRole` as well.** Otherwise platform admins fall through to their organization role.
- **`meta.authority` matches only the platform role** (`session.user.role`: `admin` | `user`), never the organization role. Enforce org permissions on the API.
- **Route modules are discovered only as `routes/modules/*.ts`.** Files in nested folders are not loaded (except `modules/dev/**`). The `/dashboard` path is the taman-core default and has no page. After you change `preferences.ts` overrides, clear the cached preferences in localStorage.
- **Forms:** import `useTamanForm` and `z` from `#/adapter/form`. That wrapper adds localized `required`/`selectRequired` rules and a default `calendarDateTimeCodec`. Render `<Form />` before you await any `formApi` method.
- **`tamanConfirm`/`tamanAlert` reject with `Error('dialog cancelled')`** when the user dismisses them. Catch that error.
- **Query errors already show a toast** through the global `QueryCache`. Pass `meta: { silentError: true }` to opt out, or you get duplicate toasts.
- **Realtime uses `MemoryPublisher` under `nitro dev`,** which works only within one process. On Cloudflare it uses the `TODO_PUBLISHER` Durable Object. `getTodoPublisher` is specific to todo.
- **There is no `migrations/` folder until you run `pnpm db:generate`.** Never use push in production. `pnpm db:generate:auth` writes to `src/schema/` (singular), so move the output into `src/schemas/`.
- **`uuidv7()` column defaults** need Postgres 18 (the Docker image version).
- **CORS:** `NITRO_TRUSTED_ORIGINS` must list the exact web origin. When it is empty, no origin is allowed. The oRPC client sends `credentials: 'include'`.
- **Worker vars and secrets keep the `NITRO_` prefix**, because Nitro reads `NITRO_<KEY>`. Renaming the worker in `nitro.config.ts` creates a new worker.
- **There is no profile, onboarding, or organization UI.** The client has no `organizationClient`. `accessMode: 'backend'` has no menu fetch yet (TODO in `router/access.ts`). Tell the user about these gaps rather than inventing UI around them.
- **If taman-ui components render without their utility classes,** check that `apps/web/uno.config.ts` still lists `TAMAN_UI_CONTENT` from `@vinicunca/taman-ui/unocss` in `content.pipeline.include`. Generated projects install taman-ui from npm, so its compiled `.mjs` files are only scanned through that entry.
- **Ignore any `scripts/deploy/Dockerfile` or `.gitpod.yml` you find.** They are stale and are removed on generate.

## References

Load only the file the task needs:

- [references/add-a-feature.md](references/add-a-feature.md): code for each layer, with an `invoice` example.
- [references/auth-and-access.md](references/auth-and-access.md): better-auth, organizations and the local org setup, RBAC axes, route `meta.auth`/`authority`, `v-access`, `useAccess`.
- [references/web-patterns.md](references/web-patterns.md): oRPC queries and mutations, typed errors, live streams, forms, dialogs, toasts, i18n, preferences, theming.
- [references/deploy-and-env.md](references/deploy-and-env.md): every env var, the Worker build and resources, secrets, production migrations, the static web build.

Docs (raw markdown):

- Hub: https://vinicunca.dev/raw/taman/getting-started.md
- Structure: https://vinicunca.dev/raw/taman/getting-started/project-structure.md
- Scripts: https://vinicunca.dev/raw/taman/getting-started/scripts.md
- Architecture: https://vinicunca.dev/raw/taman/getting-started/architecture.md
- Testing: https://vinicunca.dev/raw/taman/guides/testing.md
- Email: https://vinicunca.dev/raw/taman/guides/email.md
- Packages: https://vinicunca.dev/raw/taman/packages/taman-core.md, https://vinicunca.dev/raw/taman/packages/taman-ui.md, https://vinicunca.dev/raw/taman/packages/request.md, https://vinicunca.dev/raw/taman/packages/tooling.md, https://vinicunca.dev/raw/taman/packages/create-taman.md
