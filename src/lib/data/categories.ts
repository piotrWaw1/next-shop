import { db } from "@/lib/drizzleDbConnection";
import { productsCategoryTable } from "@/db/schema/schema";
import { ilike } from "drizzle-orm";

export async function fetchAllCategories() {
  return db.select().from(productsCategoryTable);
}

export async function isCategoryExist(category: string) {
  const normalizeCategory = decodeURIComponent(category).toLowerCase();
  const result = await db.select().from(productsCategoryTable).where(ilike(productsCategoryTable.title, normalizeCategory));
  const exist = result.length > 0;

  return { exist, result };
}