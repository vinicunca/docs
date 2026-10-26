# Environment and deployment

Docs: https://vinicunca.dev/raw/taman/getting-started/environment-variables.md, https://vinicunca.dev/raw/taman/guides/deployment.md, https://vinicunca.dev/raw/taman/guides/database-and-migrations.md, https://vinicunca.dev/raw/taman/getting-started/running-locally.md

`create-taman` copies every `.env*.example` file to `.env*` and never overwrites an existing one. Keep the `.example` files in sync when you add a variable.

## API (`apps/api/.env`, read via `useRuntimeConfig()`)

Nitro maps `NITRO_<SNAKE_KEY>` onto `runtimeConfig.<camelKey>`. Declare a new key in `nitro.config.ts` → `runtimeConfig` with an empty default, or Nitro never reads it.

| Var | Required | Default / note |
| --- | --- | --- |
| `NITRO_DATABASE_URL` | yes | `postgresql://postgres:postgres@localhost:5437/taman_db`. Seeds also accept `DATABASE_URL` |
| `NITRO_TRUSTED_ORIGINS` | yes | `http://localhost:5556,http://localhost:5560` (dev server, Playwright), comma-separated, exact origins. Empty means no origin is allowed |
| `NITRO_BASE_URL` | yes | Public API URL (better-auth `baseURL`), `http://localhost:8788` |
| `NITRO_APP_URL` | yes | Public web URL for invitation links, `http://localhost:5556` |
| `NITRO_BETTER_AUTH_SECRET` | yes | 32+ random characters (`openssl rand -base64 32`). The example value is a placeholder |
| `NITRO_GOOGLE_CLIENT_ID` / `_SECRET` | no | Google login fails until both are set |
| `NITRO_EMAIL_FROM` | yes | `no-reply@example.com` |
| `NITRO_EMAIL_FROM_NAME` | no | Project name |

Cloudflare bindings (`TODO_PUBLISHER`, `EMAIL_QUEUE`, `EMAIL`) are declared in `nitro.config.ts`, not in `.env`. In dev they are absent, so the app falls back to `MemoryPublisher`, the inline email dispatcher, and the console sender.

## DB package (`packages/server/db-pg/.env`)

`DATABASE_URL` is required, and `drizzle.config.ts` throws without it. The uat and prod nx configurations read `.env.uat` and `.env.prod`, which you create yourself.

## Web (`apps/web/.env*`)

| File | Vars |
| --- | --- |
| `.env` (always) | `VITE_APP_TITLE`, `VITE_APP_NAMESPACE` (storage-key prefix, unique per project), `VITE_APP_STORE_SECURE_KEY` (encrypts persisted Pinia state; replace it for prod) |
| `.env.development` | `VITE_PORT=5556`, `VITE_BASE=/`, `VITE_API_URL=http://localhost:8788`, `VITE_DEVTOOLS`, `VITE_INJECT_APP_LOADING` |
| `.env.production` | `VITE_API_URL` (the Worker URL), `VITE_BASE`, `VITE_ROUTER_HISTORY` (`hash` by default; `history` needs an SPA fallback on the host), `VITE_COMPRESS`, `VITE_PWA`, `VITE_ARCHIVER` |

`VITE_*` values are baked in at build time. Production builds also emit `_app-config-[version]-[hash].js` (`window._TAMAN_ADMIN_DEV_CONFIG_`) for `VITE_GLOB_*` values, which you can change without a rebuild.

## Deploy the API (Cloudflare Worker, `cloudflare-module`)

1. **Pin names before the first deploy.** In `nitro.config.ts`, the generated worker name is `<name>-api` and the queues are `<name>-email` and `<name>-email-dlq`. Renaming the worker later creates a new worker. If you rename the queue, also change `EMAIL_QUEUE_NAME` in `server/email/email.queue-consumer.ts`, because the consumer matches on it.
2. **Create the resources:** both queues, Email Routing / `send_email` for the `EMAIL` binding, and Postgres reachable from the Worker (Hyperdrive, Tunnel, or an allow-listed public host). The template does not choose a Postgres option. The Durable Object `TodoPublisherObject` (binding `TODO_PUBLISHER`) comes from the wrangler migration tag `v1` (`new_sqlite_classes`). That migration runs once; do not edit or replay it on an existing worker.
3. **Set vars and secrets with the `NITRO_` prefix**, for example `wrangler secret put NITRO_BETTER_AUTH_SECRET`. Do the same for `NITRO_DATABASE_URL`, `NITRO_TRUSTED_ORIGINS` (the production web origin), `NITRO_BASE_URL`, `NITRO_APP_URL`, `NITRO_EMAIL_FROM`, and optionally `NITRO_EMAIL_FROM_NAME` and the Google pair. Nitro's runtime config reads only `NITRO_<KEY>` (or `_<KEY>`), never the bare name, and `nodeCompat: true` exposes Worker vars on `process.env`. Confirm on the first deploy that `/readyz` returns OK.
4. **Build:** run `pnpm nx run api:build` (`nitro build` with `deployConfig: true`, which emits the wrangler config). Then run `wrangler deploy` from the output directory the build log names. That path changes between Nitro betas, so read it from the log rather than guessing.
5. **Migrate:** never use push in prod. Run `pnpm db:generate`, commit `packages/server/db-pg/migrations`, then run `pnpm db-pg:migrate:prod` (`drizzle-kit migrate` with `.env.prod`) from a trusted network or CI.
6. **Google:** the authorized redirect URI is `{NITRO_BASE_URL}/api/auth/callback/google`.

Health checks: `GET /healthz` returns `{ status: 'ok' }` when the process is up, and `GET /readyz` checks that the database is reachable.

## Deploy the web app (static)

```bash
pnpm --filter @taman/web build     # vite build --mode production → apps/web/dist
```

Host `apps/web/dist` on Workers Static Assets, Pages, or any static host over HTTPS. Add that exact origin to `NITRO_TRUSTED_ORIGINS`. The SPA sends better-auth cookies (prefix `taman`) cross-origin with `credentials: 'include'`. Browsers reject a wildcard origin when credentials are included.

## Ignore

`scripts/deploy/Dockerfile` and `.gitpod.yml` (nginx, `playground/dist`, port 5555) are stale and are removed on generate. No one-command deploy for both apps exists.
