import { db } from "@/lib/drizzleDbConnection";
import { asc, desc, eq, ilike, sql } from "drizzle-orm";
import { productsCategoryTable, productsTable } from "@/db/schema/schema";

async function fetchCategoryId(category: string) {
  const [categoryId] = await db
    .select({ id: productsCategoryTable.id })
    .from(productsCategoryTable)
    .where(ilike(productsCategoryTable.title, category))
    .limit(1);

  return categoryId
}

async function fetchProductsPages(pageSize: number, categoryId?: number) {
  let productsCount;
  if (categoryId) {
    productsCount = await db.select({ count: sql<number>`count(*)` })
      .from(productsTable).where(eq(productsTable.category, categoryId))
  }
  else{
    productsCount = await db.select({ count: sql<number>`count(*)` })
      .from(productsTable)
  }
  return Math.ceil(productsCount[0].count / pageSize);
}

export async function fetchProducts(pageSize: number, page: number, sortOrder?: "asc" | "desc", category?: string) {
  const offset = (page - 1) * pageSize;
  let totalPages = 0

  let query = db
    .select({
      id: productsTable.id,
      title: productsTable.title,
      price: productsTable.price,
    })
    .from(productsTable) as any

  if (sortOrder) {
    query = query
      .orderBy(sortOrder === "asc" ? asc(productsTable.price) : desc(productsTable.price))
  }

  if (category) {
    const normalizedCategory = decodeURIComponent(category).toLowerCase();
    const categoryId = await fetchCategoryId(normalizedCategory)
    if (categoryId) {
      query = query.where(eq(productsTable.category, categoryId.id))
      totalPages = await fetchProductsPages(pageSize, categoryId.id)
    }
  } else {
    totalPages = await fetchProductsPages(pageSize)
  }

  const products = await query.limit(pageSize).offset(offset)

  return { products, totalPages };
}