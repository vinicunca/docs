---
name: taman
description: Work inside a generated Taman admin monorepo (Vue SPA + Nitro API on Cloudflare). Use when adding features, auth, oRPC, drizzle, forms, or deploying Taman.
---

# Taman

Full-stack Vue admin template. Generated code is the user's; only `@vinicunca/*` packages receive npm updates.

Hub docs (raw markdown for agents): [https://vinicunca.dev/raw/taman/getting-started.md](https://vinicunca.dev/raw/taman/getting-started.md)

## When to use

- Adding a product feature to a Taman app
- Changing auth, RBAC, oRPC contracts, drizzle schema, email, or Cloudflare deploy
- Using `@vinicunca/taman-core`, `taman-ui`, or `request` inside the template

## Layer map (where code goes)

| Layer | Path |
| --- | --- |
| Permissions | `packages/shared/rbac` (`sharedStatements`, admin + org roles) |
| DB schema | `packages/server/db-pg/src/schemas` |
| Contract | `packages/shared/api-contract` |
| Repo + service | `apps/api/server/domains/<feature>/` |
| RPC | `apps/api/server/rpc/procedures/` then `router.ts` |
| Web routes | `apps/web/src/router/routes/modules/<feature>.ts` (eager `*.ts` only, not nested) |
| Views | `apps/web/src/views/<feature>/` |
| i18n | `apps/web/src/locales/langs/{en-US,id-ID}/<feature>.json` |
| API client | `apps/web/src/api/orpc.ts` (`client` + `orpc` query utils) |

Copy **todo**, not the example gallery (stripped on generate).

Procedure owns `NOT_FOUND`; service returns `null` for missing rows. Scope queries by `organizationId`. `authed` requires an active org unless `user.role === admin`.

## Add-a-feature checklist

1. `sharedStatements` + role grants (`as const` tuples)
2. drizzle table → `pnpm db-pg:migrate:dev` (push; no migrations dir yet)
3. Zod schemas + `oc` contract on the root `contract` object
4. Repo → Service (`CoreService.authorize`) → `os.<feature>.use(authed)` handlers
5. Route module + views + `$t` titles
6. Tests next to repo/service/procedure

Full walkthrough: [https://vinicunca.dev/raw/taman/guides/adding-a-feature.md](https://vinicunca.dev/raw/taman/guides/adding-a-feature.md)

## Commands

```bash
docker compose up -d          # Postgres :5437
pnpm db-pg:migrate:dev
pnpm nx run api:seed          # bun — undeclared; admin@taman.local / Admin123! DEV ONLY
pnpm dev:api                  # :8788
pnpm dev:web                  # :5556
pnpm test:unit
```

Home path in the app is `/todos/manage`, not core default `/dashboard`.

## Do

- Keep `@taman/` (or the generated scope) for workspace packages; `@vinicunca/*` for published libs
- Use `credentials: 'include'` on oRPC; list the web origin in `NITRO_TRUSTED_ORIGINS`
- `vitePohon({ scanPackages: ['@vinicunca/taman-ui', '@taman/app-ui'] })` + `TAMAN_UI_CONTENT` in UnoCSS
- Prefer `formApi.validateAndSubmit()`; render `<Form />` before awaiting formApi
- Document current gaps instead of inventing UI (no profile/onboarding/org pages; no `organizationClient`)

## Don't

- Don't run `drizzle-kit push` in production; generate SQL then `migrate`
- Don't trust `pnpm db:generate:auth` output path (`src/schema` vs `src/schemas`)
- Don't follow `scripts/deploy/Dockerfile` or `.gitpod.yml` (stale; removed on generate)
- Don't assume backend access mode works — `fetchMenuListAsync` is still TODO
- Don't put user/session data on `globalShareState`

## Key APIs

- oRPC: `createRpcClient`, `createRpcQueryUtils`, `safe`, `LIVE_RETRY` — [request](https://vinicunca.dev/raw/taman/packages/request.md)
- Forms: `useTamanForm`, `setupTamanForm` — [forms](https://vinicunca.dev/raw/taman/guides/forms.md)
- Dialogs: `useTamanDialog`, `tamanConfirm` — [dialogs](https://vinicunca.dev/raw/taman/guides/dialogs-and-alerts.md)
- Prefs: `initPreferences`, `updatePreferences` — [preferences](https://vinicunca.dev/raw/taman/guides/preferences-layouts-theming.md)

## More raw pages

- Architecture: https://vinicunca.dev/raw/taman/getting-started/architecture.md
- Auth: https://vinicunca.dev/raw/taman/guides/authentication-and-organizations.md
- Env vars: https://vinicunca.dev/raw/taman/getting-started/environment-variables.md
- Deploy: https://vinicunca.dev/raw/taman/guides/deployment.md
- taman-core: https://vinicunca.dev/raw/taman/packages/taman-core.md
- taman-ui: https://vinicunca.dev/raw/taman/packages/taman-ui.md
- create-taman: https://vinicunca.dev/raw/taman/packages/create-taman.md
