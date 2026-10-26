# Auth, organizations, and access

Docs: https://vinicunca.dev/raw/taman/guides/authentication-and-organizations.md and https://vinicunca.dev/raw/taman/guides/permissions.md

## Two role axes

| Axis | Values | Source | Checked by |
| --- | --- | --- | --- |
| Platform role | `admin`, `user` (`USER_ROLES`) | `user.role` (better-auth admin plugin) | `authed` org-gate bypass, `CoreService.can`, web `meta.authority`, `v-access:role` |
| Organization role | `owner`, `member` (`ORGANIZATION_ROLES`) | `member.role` for `session.activeOrganizationId` | `CoreService.can` through `this.member` |

better-auth's default organization `admin` role is deliberately dropped. Passing `roles` replaces the plugin's defaults. Any other `member.role` value makes `toOrganizationRole` (`server/lib/context.ts`) return `null`, which fails closed and logs a warning.

## API request path

1. `server/routes/api/rpc/[...path].ts` → oRPC handler → `router`.
2. `os` (`server/rpc/base.ts`) maps errors: an `ORPCError` passes through, and a database connection failure becomes `SERVICE_UNAVAILABLE`.
3. `authed` calls `resolveContext(event)` → `{ db, auth: { user, session }, member }`. A missing session raises `UNAUTHORIZED`. A non-admin without `activeOrganizationId` gets `FORBIDDEN` with `data.code = ORG_REQUIRED`.
4. The service's `authorize(action)` requires `this.member`, even for platform admins in the todo pattern, and then calls `this.can(...)`.

better-auth serves REST at `/api/auth/*` (`server/routes/api/auth/[...all].ts`). The instance lives in `server/auth/better-auth.instance.ts`:

- Email/password with `requireEmailVerification: true`, and `autoSignInAfterVerification`.
- Google (`prompt: 'select_account'`), account linking, and an extra user field `phoneNumber`.
- Cookie prefix `taman` and UUIDv7 ids.
- An `organization` plugin with teams enabled and no default team.
- A session `create.after` hook: when a session has no active org, `resolveActiveOrganizationId` sets the user's first membership as active. Memberships created after sign-in therefore need a fresh session.

Emails go through `useEmail().dispatcher`: a Cloudflare Queue when `EMAIL_QUEUE` is bound, otherwise inline delivery. With no `EMAIL` binding (local dev), the console sender logs the HTML in the API terminal. Use that output to complete verification or reset links locally.

## Local org setup (required for the todo pages)

Todo procedures need a membership, even for the platform admin; without one they throw `FORBIDDEN`/`ORG_REQUIRED`. `pnpm nx run api:seed` creates a verified `admin` user **and** a `demo` organization with that user as `owner`, so a fresh seed is enough. If the user was signed in before seeding, they must sign out and back in so the session hook sets `activeOrganizationId`. Then `pnpm nx run api:seed:todos` fills the oldest organization (`SEED_ORG_SLUG=<slug>` picks another).

For another user, while signed in as them, `POST {API}/api/auth/organization/create` with `{ name, slug }` and `credentials: 'include'` makes the caller `owner`.

## Web client

`apps/web/src/auth/auth.client.ts` uses `createAuthClient({ baseURL: apiUrl, plugins: [adminClient({ ac: adminAc, roles: adminRoles })] })`. **The client does not install `organizationClient`**, so `authClient.organization.*` is unavailable. To build org UI, add `organizationClient({ ac: organizationAc, roles: organizationRoles })` from `better-auth/client/plugins` first.

Session helpers come from `#/auth`: `ensureSession()`, `refreshSession()`, `clearAuthCache()`, `sessionQueryOptions`, and `useSessionStore()` (which exposes `roles`). The router guard (`router/guard.ts`) awaits `ensureSession()` on every navigation and then builds the menu and routes once through `generateAccess`.

Missing UI: profile, onboarding (no route, page, or `meta.auth` mode exists), and organization create, switch, invite, and member views. When an RPC returns `ORG_REQUIRED`, the app only shows a toast (`api/errors.ts`).

## Route meta

`meta.auth` (typed in `@vinicunca/taman-core/typings`), resolved leaf-first by `resolveAuthMetaFromMatched`:

| Value | Behavior in `router/auth-middleware.ts` |
| --- | --- |
| omitted / `{ only: 'user' }` | Requires a session; the route takes part in access generation |
| `{ only: 'guest' }` | Guests only; signed-in users go to `redirectUserTo ?? defaultHomePath` |
| `false` | No check; excluded from access generation |

`redirectGuestTo` and `redirectUserTo` override the targets. If you give a layout-shell route its own `meta.auth`, add its name to `AUTH_LAYOUT_ROUTE_NAMES`, or the value leaks to its children.

`meta.authority` takes `Array<'admin' | 'user'>` or `(roles) => boolean`. It is matched against `[session.user.role]` only. `apps/web/src/types/taman-core.d.ts` narrows `TamanRoleRegistry` to `AuthRoleNames`. A forbidden route is removed, or, with `meta.menuVisibleWithForbidden: true`, stays in the menu and renders `views/_core/fallback/forbidden.vue`.

## Access mode

`preferences.app.accessMode` is `frontend` (the default), `backend`, or `mixed`. Only `frontend` works today. `router/access.ts` never passes `fetchMenuListAsync`, so `backend` and `mixed` cannot load a server menu. The API has a `menu.all` procedure that returns mock data (`server/utils/mock-data.ts`).

## `v-access` and `useAccess`

```vue
<button v-access:role="'admin'">
Admin only
</button>

<button v-access:code="'invoice:create'">
Needs access code
</button>
```

In frontend mode, `v-access:role` matches session roles. In other modes, and for `v-access:code`, it matches `accessStore.accessCodes`. An element that fails the check is **removed** from the DOM on mount.

```ts
import { useAccess } from '@taman/access';

const { hasAccessByRoles, hasAccessByCodes, accessMode, toggleAccessMode } = useAccess();
```

Both are UI hints. Enforce every permission again in the API service.

## Google OAuth

Set `NITRO_GOOGLE_CLIENT_ID` and `NITRO_GOOGLE_CLIENT_SECRET`. The authorized redirect URI is `{NITRO_BASE_URL}/api/auth/callback/google`. The web origin must be in `NITRO_TRUSTED_ORIGINS`.
