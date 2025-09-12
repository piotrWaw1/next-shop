import { db } from "@/lib/drizzleDbConnection";
import { productsCategoryTable } from "@/db/schema/schema";
import { ilike } from "drizzle-orm";

export async function fetchAllCategories() {
  return db.select().from(productsCategoryTable);
}

export async function isCategoryExist(category: string) {
  const result = await db.select().from(productsCategoryTable).where(ilike(productsCategoryTable.title, category));

  return result.length > 0;
}