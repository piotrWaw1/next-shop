import { db } from "@/lib/drizzleDbConnection";
import { and, asc, count, desc, eq, ilike } from "drizzle-orm";
import { productsCategoryTable, productsTable } from "@/db/schema/schema";

async function fetchCategoryId(category: string) {
  const [categoryId] = await db
    .select({ id: productsCategoryTable.id })
    .from(productsCategoryTable)
    .where(ilike(productsCategoryTable.title, category))
    .limit(1);

  return categoryId
}

async function fetchProductsPages(pageSize: number, categoryId?: number, query?: string) {
  const conditions = [];

  if (categoryId) {
    conditions.push(eq(productsTable.category, categoryId));
  }

  if (query) {
    conditions.push(ilike(productsTable.title, `%${query}%`));
  }

  const whereClause = conditions.length > 0 ? and(...conditions) : undefined;

  const productsCount = await db
    .select({ count: count() })
    .from(productsTable)
    .where(whereClause);

  return Math.ceil(productsCount[0].count / pageSize);
}

export async function fetchProducts(pageSize: number, page: number, sortOrder?: "asc" | "desc", category?: string, searchQuery?: string) {
  const offset = (page - 1) * pageSize;
  let categoryId;

  let baseQuery = db
    .select({
      id: productsTable.id,
      title: productsTable.title,
      price: productsTable.price,
    })
    .from(productsTable) as any;

  if (sortOrder) {
    baseQuery = baseQuery.orderBy(
      sortOrder === "asc" ? asc(productsTable.price) : desc(productsTable.price)
    );
  }

  if (category) {
    const normalizedCategory = decodeURIComponent(category).toLowerCase();
    const categoryResponse = await fetchCategoryId(normalizedCategory)
    if (categoryResponse) {
      categoryId = categoryResponse.id;
      const conditions = []
      conditions.push(eq(productsTable.category, categoryId));

      if (searchQuery) {
        console.log("Category query")
        conditions.push(ilike(productsTable.title, `%${searchQuery}%`))
      }
      baseQuery = baseQuery.where(and(...conditions));
    }
  } else if (searchQuery) {
    baseQuery = baseQuery.where(ilike(productsTable.title, `%${searchQuery}%`));
  }

  const products = await baseQuery.limit(pageSize).offset(offset);
  const totalPages = await fetchProductsPages(pageSize, categoryId, searchQuery)

  return { products, totalPages };
}