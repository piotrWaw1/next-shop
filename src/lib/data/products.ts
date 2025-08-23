import { db } from "@/lib/drizzleDbConnection";
import { asc, desc, sql } from "drizzle-orm";
import { productsTable } from "@/db/schema/schema";

export async function fetchProductsPages(pageSize: number) {
  let productsCount = await db.select({ count: sql<number>`count(*)` })
    .from(productsTable)
  return Math.ceil(productsCount[0].count / pageSize);
}

export async function fetchProducts(pageSize: number, page: number, sortOrder?: "asc" | "desc") {
  const offset = (page - 1) * pageSize;
  let query

  if (sortOrder) {
    query = db
      .select({
        id: productsTable.id,
        title: productsTable.title,
        price: productsTable.price,
      })
      .from(productsTable)
      .orderBy(sortOrder === "asc" ? asc(productsTable.price) : desc(productsTable.price))
  } else {
    query = db
      .select({
        id: productsTable.id,
        title: productsTable.title,
        price: productsTable.price,
      })
      .from(productsTable)
  }

  return query.limit(pageSize).offset(offset);
}