import { db } from "@/lib/drizzleDbConnection";
import { sql } from "drizzle-orm";
import { productsTable } from "@/db/schema/schema";

export async function fetchProductsPages(pageSize: number) {
  let productsCount = await db.select({ count: sql<number>`count(*)` })
    .from(productsTable)
  return Math.ceil(productsCount[0].count / pageSize);
}

export async function fetchProducts(pageSize: number, page: number) {
  const offset = (page - 1) * pageSize;
  return db
    .select({
      id: productsTable.id,
      title: productsTable.title,
      price: productsTable.price,
    })
    .from(productsTable)
    .limit(12)
    .offset(offset);
}