import { db } from "@/lib/drizzleDbConnection";
import { productsCategoryTable } from "@/db/schema/schema";

export async function fetchAllCategories() {
  return db.select().from(productsCategoryTable);
}