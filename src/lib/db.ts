import { PrismaClient } from "@prisma/client";

// Singleton Prisma client (avoids exhausting connections during dev HMR).
const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export const db =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"],
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = db;

// Models that carry a tenantId and must always be scoped to one tenant.
const TENANT_MODELS = new Set([
  "User",
  "Package",
  "Project",
  "Task",
  "Invoice",
  "Message",
  "Ticket",
  "FileAsset",
  "ProjectEvent",
]);

/**
 * Returns a Prisma client scoped to a single tenant. Every read on a
 * tenant-owned model is filtered by `tenantId`, and every create injects it.
 * Always use this in request handlers instead of the bare `db` client.
 *
 * NOTE: This is defense-in-depth. Continue to authorize by ownership/role in
 * `lib/rbac.ts` (Phase 3) — tenant scoping alone does not enforce per-user
 * access (a client must still only see their own projects).
 */
export function tenantDb(tenantId: string) {
  return db.$extends({
    query: {
      $allModels: {
        async $allOperations({ model, operation, args, query }) {
          if (!model || !TENANT_MODELS.has(model)) return query(args);

          const a = args as Record<string, unknown>;

          // Scope reads / updates / deletes.
          if (
            operation === "findMany" ||
            operation === "findFirst" ||
            operation === "findFirstOrThrow" ||
            operation === "count" ||
            operation === "updateMany" ||
            operation === "deleteMany" ||
            operation === "aggregate"
          ) {
            a.where = { ...(a.where as object), tenantId };
          }

          // Inject tenantId on creates.
          if (operation === "create") {
            a.data = { ...(a.data as object), tenantId };
          }
          if (operation === "createMany") {
            const data = a.data as Record<string, unknown> | Record<string, unknown>[];
            a.data = Array.isArray(data)
              ? data.map((d) => ({ ...d, tenantId }))
              : { ...data, tenantId };
          }

          return query(a);
        },
      },
    },
  });
}

export type TenantDb = ReturnType<typeof tenantDb>;
