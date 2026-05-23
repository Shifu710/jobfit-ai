// Prisma schema is included for the Phase 3 full-stack upgrade.
// Phase 1 intentionally uses mock data so the public demo works without DATABASE_URL.
export function isDatabaseConfigured() {
  return Boolean(process.env.DATABASE_URL);
}
