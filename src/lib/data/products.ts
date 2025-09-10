import { db } from "@/lib/drizzleDbConnection";
import { and, asc, count, desc, eq, ilike } from "drizzle-orm";
import { productsCategoryTable, productsTable } from "@/db/schema/schema";

async function fetchProductsPages(pageSize: number, category?: string, query?: string) {
  const conditions = [];

  if (category) {
    conditions.push(ilike(productsCategoryTable.title, category));
  }

  if (query) {
    conditions.push(ilike(productsTable.title, `%${query}%`));
  }

  const productsCount = await db
    .select({ count: count() })
    .from(productsTable)
    .innerJoin(
      productsCategoryTable,
      eq(productsTable.category, productsCategoryTable.id)
    )
    .where(and(...conditions));

  return Math.ceil(productsCount[0].count / pageSize);
}

export async function fetchProducts(pageSize: number, page: number, sortOrder?: "asc" | "desc", category?: string, searchQuery?: string) {
  const offset = (page - 1) * pageSize;
  let normalizedCategory;

  let baseQuery = db
    .select({
      id: productsTable.id,
      title: productsTable.title,
      price: productsTable.price,
    })
    .from(productsTable)
    .innerJoin(
      productsCategoryTable,
      eq(productsTable.category, productsCategoryTable.id)
    ) as any;

  if (sortOrder) {
    baseQuery = baseQuery.orderBy(
      sortOrder === "asc" ? asc(productsTable.price) : desc(productsTable.price)
    );
  }

  if (category) {
    normalizedCategory = decodeURIComponent(category).toLowerCase();
    const conditions = []
    conditions.push(ilike(productsCategoryTable.title, normalizedCategory));

    if (searchQuery) {
      console.log("Category query")
      conditions.push(ilike(productsTable.title, `%${searchQuery}%`))
    }
    baseQuery = baseQuery.where(and(...conditions));

  } else if (searchQuery) {
    baseQuery = baseQuery.where(ilike(productsTable.title, `%${searchQuery}%`));
  }

  const products = await baseQuery.limit(pageSize).offset(offset);
  const totalPages = await fetchProductsPages(pageSize, normalizedCategory, searchQuery)

  return { products, totalPages };
}