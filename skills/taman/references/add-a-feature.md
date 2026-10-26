# Add a feature, layer by layer

This walkthrough uses `invoice` as the example resource. Every snippet mirrors the todo files it names, so open the todo file next to it when you need the full version. Replace `@taman/` with the project's scope.

Docs: https://vinicunca.dev/raw/taman/guides/adding-a-feature.md

## 1. RBAC (`packages/shared/rbac/src`)

```ts
// rbac.shared.ts — keep `as const`; better-auth infers the action names from these literals
export const sharedStatements = {
  todo: ['create', 'read', 'update', 'delete'],
  invoice: ['create', 'read', 'update', 'delete'],
} as const;
```

Grant the actions explicitly on each role. A spread of `sharedStatements` grants nothing by itself.

```ts
// rbac.admin.ts (platform role; `userRole` gets none by design)
const adminRole = adminAc.newRole({
  ...defaultAdminAc.statements,
  todo: ['create', 'read', 'update', 'delete'],
  invoice: ['create', 'read', 'update', 'delete'],
});

// rbac.organizations.ts (org roles; only `owner` and `member` exist)
const ownerRole = organizationAc.newRole({ ...ownerAc.statements, todo: [...], invoice: ['create', 'read', 'update', 'delete'] });
const memberRole = organizationAc.newRole({ ...memberAc.statements, todo: [...], invoice: ['read'] });
```

`PermissionRequest` picks up the new resource automatically, and `rbac.shared.test.ts` checks that admin and owner hold every shared action. Express row ownership ("this invoice is mine") as a check inside the service, not here.

## 2. Schema (`packages/server/db-pg/src/schemas`)

```ts
// invoice.schema.ts
import { sql } from 'drizzle-orm';
import { index, integer, pgTable, text, uuid } from 'drizzle-orm/pg-core';
import { organizationTable, userTable } from './auth.schema';
import { generateTimestampColumns } from './utils/utils.timestamps.schema';

const invoiceTable = pgTable('invoice', {
  id: uuid('id').primaryKey().default(sql`uuidv7()`), // Postgres 18 built-in
  organizationId: uuid('organization_id').notNull().references(() => organizationTable.id, { onDelete: 'cascade' }),
  number: text('number').notNull(),
  amountCents: integer('amount_cents').notNull(),
  createdBy: uuid('created_by').references(() => userTable.id, { onDelete: 'set null' }),
  ...generateTimestampColumns(), // createdAt, updatedAt ($onUpdate)
}, (table) => [
  index('invoice_organizationId_createdAt_idx').on(table.organizationId, table.createdAt),
]);

export { invoiceTable };
```

Add `export * from './invoice.schema';` to `schemas/index.ts`, then run `pnpm db-pg:migrate:dev`. That command is `drizzle-kit push` and reads `packages/server/db-pg/.env`.

## 3. Contract (`packages/shared/api-contract/src`)

```ts
// invoice/invoice.contract.ts
import { oc } from '@orpc/contract';
// invoice/invoice.schema.ts
import { z } from 'zod';

import { paginated, paginationInput } from '../shared/pagination';

// Leave organizationId out: the session supplies the scope
export const invoiceSchema = z.object({
  id: z.uuid(),
  number: z.string(),
  amountCents: z.number().int(),
  createdBy: z.uuid().nullable(),
  createdAt: z.date(),
  updatedAt: z.date(), // Dates survive the RPC protocol
});
export type Invoice = z.infer<typeof invoiceSchema>;
export const invoiceIdInput = z.object({ id: z.uuid() });
export const invoiceCreateInput = z.object({ number: z.string().trim().min(1), amountCents: z.number().int().min(0) });
export type InvoiceCreateInput = z.infer<typeof invoiceCreateInput>;
export const invoiceListInput = paginationInput.extend({ search: z.string().trim().optional() });
export type InvoiceListInput = z.infer<typeof invoiceListInput>;
export const invoicePageSchema = paginated(invoiceSchema);
export type InvoicePage = z.infer<typeof invoicePageSchema>;
const withNotFound = oc.errors({ NOT_FOUND: { message: 'Invoice not found.' } });
export const invoiceContract = {
  list: oc.input(invoiceListInput).output(invoicePageSchema),
  get: withNotFound.input(invoiceIdInput).output(invoiceSchema),
  create: oc.input(invoiceCreateInput).output(invoiceSchema),
  remove: withNotFound.input(invoiceIdInput).output(invoiceIdInput),
};
```

In `src/index.ts`, add `invoice: invoiceContract` to `contract`, plus `export * from './invoice/invoice.contract'` and `export * from './invoice/invoice.schema'`. For streams, use `oc.output(eventIterator(eventSchema))` as `todo.live` does. Pagination helpers (`toOffset`, `toTotalPages`, `PAGE_SIZE_MAX = 100`) live in `shared/pagination.ts`.

## 4. Repo and service (`apps/api/server/domains/invoice/`)

```ts
import { invoiceTable } from '@taman/db-pg';
import { and, count, desc, eq } from 'drizzle-orm';
// invoice.repo.ts — drizzle only; every query takes organizationId
import { CoreRepo } from '#domains/core/core.repo.ts';

export type InvoiceRow = typeof invoiceTable.$inferSelect;
export interface InvoiceRepoPort { findById: (organizationId: string, id: string) => Promise<InvoiceRow | null> /* … */ }

export class InvoiceRepo extends CoreRepo implements InvoiceRepoPort {
  async findById(organizationId: string, id: string) {
    const rows = await this.db.select().from(invoiceTable).where(and(eq(invoiceTable.organizationId, organizationId), eq(invoiceTable.id, id))).limit(1);
    return rows[0] ?? null;
  }
}
```

The `*RepoPort` interface lets tests swap in a fake (`todo.repo.fake.ts`). For text search, use `escapeLike` from `todo.repo.ts` with `ilike`. For a stable page order, sort by `createdAt` and then `id`.

```ts
// invoice.service.ts
import type { TamanContext } from '#lib/context.ts';
import { ORPCError } from '@orpc/server';
import { ORG_REQUIRED } from '@taman/api-contract';
import { CoreService } from '#domains/core/core.service.ts';
import { InvoiceRepo } from './invoice.repo.ts';

type InvoiceAction = 'create' | 'read' | 'update' | 'delete';

export class InvoiceService extends CoreService {
  private readonly repo: InvoiceRepoPort;

  constructor(ctx: TamanContext, deps: { repo?: InvoiceRepoPort } = {}) {
    super(ctx);
    this.repo = deps.repo ?? new InvoiceRepo(ctx.db);
  }

  async get(id: string): Promise<Invoice | null> {
    const row = await this.repo.findById(this.authorize('read'), id);
    return row ? toInvoice(row) : null; // map row → contract type; null, never NOT_FOUND
  }

  /** Copied from TodoService: role check, then the org every query is scoped to. */
  private authorize(action: InvoiceAction): string {
    if (!this.member) {
      throw new ORPCError('FORBIDDEN', { message: 'Organization required', data: { code: ORG_REQUIRED } });
    }
    if (!this.can({ invoice: [action] })) {
      throw new ORPCError('FORBIDDEN', { message: `You may not ${action} invoices.` });
    }
    return this.member.organizationId;
  }
}
```

`CoreService` provides `this.auth` (better-auth `user` and `session`), `this.db`, `this.member` (`{ role, organizationId } | null`), `this.isPlatformAdmin`, and `this.can(permission)`. `can` returns true when the caller is a platform admin and `adminRole` grants the permission. Otherwise it checks the organization role, and a `null` member is denied.

For realtime, publish from the service after the write commits, and catch publish failures so a committed write never reports an error (see `TodoService.publish`). The publisher in `server/realtime/publisher.ts` and the Durable Object in `exports.cloudflare.ts` are typed to `TodoEvent`. To add a stream for another resource, generalize the publisher or add a sibling publisher and binding in `nitro.config.ts`.

## 5. Procedure (`apps/api/server/rpc/procedures/invoice.ts`)

```ts
import { InvoiceService } from '#domains/invoice/invoice.service.ts';
import { authed, os } from '#rpc/base.ts';

const invoice = os.invoice.use(authed); // session + org gate (admins skip the org gate here only)

export const invoiceRouter = {
  list: invoice.list.handler(async ({ context, input }) => new InvoiceService(context.taman).list(input)),
  get: invoice.get.handler(async ({ context, input, errors }) => {
    const found = await new InvoiceService(context.taman).get(input.id);
    if (!found) {
      throw errors.NOT_FOUND();
    }
    return found;
  }),
  // create, remove …
};
```

In `server/rpc/router.ts`, write `os.router({ menu: menuRouter, todo: todoRouter, invoice: invoiceRouter })`. `os.<feature>` exists only after the contract key exists. `os` already maps unknown errors and turns database outages into `SERVICE_UNAVAILABLE`.

## 6. Web

```ts
// apps/web/src/router/routes/routes.constants.ts — add an order slot
// apps/web/src/router/routes/modules/invoice.ts
import type { RouteRecordRaw } from 'vue-router';
import { $t } from '#/locales';
import { ROUTE_ORDER } from '../routes.constants';

export const ROUTE_ORDER = { DASHBOARD: 100, TODO: 101, INVOICE: 102, /* … */ } as const;

const routes: Array<RouteRecordRaw> = [{
  meta: { icon: 'lucide:receipt', order: ROUTE_ORDER.INVOICE, title: $t('invoice.title') },
  name: 'Invoices',
  path: '/invoices',
  redirect: '/invoices/manage',
  children: [{
    name: 'InvoiceManage',
    path: 'manage',
    component: () => import('#/views/invoice/manage.vue'),
    meta: { title: $t('invoice.manage') },
    // optional: authority: ['admin']  (platform role only)
  }],
}];

export default routes;
```

Route names must be unique, because mixed access mode merges routes by name. Icons use the Iconify `collection:name` form. In views, wrap content in `AppPage`/`AppCard` from `@taman/app-ui`, as `views/todo/crud.vue` does. For data hooks, copy `views/todo/use-todos-query.ts` (see [web-patterns.md](web-patterns.md)).

Locale files go in `apps/web/src/locales/langs/en-US/invoice.json` and `id-ID/invoice.json`, keyed as `{ "title": "…", "manage": "…" }`.

To make the new page the landing page, set `defaultHomePath` in `apps/web/src/preferences.ts`.

## 7. Tests (vitest, colocated)

| Copy | For |
| --- | --- |
| `domains/todo/todo.repo.fake.ts` | In-memory `RepoPort` with static rows and `reset()` |
| `domains/todo/todo.service.test.ts` | Role, org-scope, and `member: null` → FORBIDDEN cases |
| `rpc/procedures/todo.test.ts` | `vi.mock('#lib/context.ts')` + mock the repo module, then `call(router.invoice.get, input, { context: { event } })` |
| `packages/shared/rbac/src/rbac.todo.test.ts` | Per-role grants |
| `apps/web/src/router/routes/todo-routes.test.ts` | Route module shape |

API tests need `// @vitest-environment node`, because the root config defaults to happy-dom. Run `pnpm test:unit`.

## Checklist

- [ ] `sharedStatements` entry plus grants on `adminRole`, `ownerRole`, `memberRole`
- [ ] Table exported from `schemas/index.ts`, pushed locally
- [ ] Contract schemas, `export *`, and the key on `contract`
- [ ] Repo (org-scoped), service (`authorize` → `can`), procedures, router entry
- [ ] `ROUTE_ORDER` slot, route module, views, `en-US` and `id-ID` JSON
- [ ] Tests next to the repo, service, and procedure
- [ ] `pnpm check:type`, `pnpm test:unit`, `pnpm lint` pass
- [ ] Before uat/prod: `pnpm db:generate`, commit the SQL
