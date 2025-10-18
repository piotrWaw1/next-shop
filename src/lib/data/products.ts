'use server'

import { db } from "@/lib/drizzleDbConnection";
import { and, asc, count, desc, eq, ilike } from "drizzle-orm";
import { Product, productsCategoryTable, productsTable } from "@/db/schema/schema";

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

type FetchProductsOptions = {
  page: number;
  pageSize: number;
  sortOrder?: "asc" | "desc";
  sortBy?: "price" | "sold" | "amount",
  category?: string;
  searchQuery?: string
}

export async function fetchProducts(props: FetchProductsOptions) {
  const {page, pageSize, sortOrder, sortBy, category, searchQuery} = props;

  const offset = (page - 1) * pageSize;
  let normalizedCategory;

  let baseQuery = db
    .select({
      id: productsTable.id,
      title: productsTable.title,
      price: productsTable.price,
      amount: productsTable.amount,
      category: productsCategoryTable.title,
      sold: productsTable.sold,
    })
    .from(productsTable)
    .innerJoin(
      productsCategoryTable,
      eq(productsTable.category, productsCategoryTable.id)
    ) as any;

  if (sortOrder && sortBy) {
    const direction = sortOrder === "asc" ? asc : desc;
    let columnToSort;
    switch (sortBy) {
      case "price":
        columnToSort = productsTable.price;
        break;
      case "sold":
        columnToSort = productsTable.sold;
        break;
      case "amount":
        columnToSort = productsTable.amount;
        break;
      default:
        columnToSort = productsTable.price;
        break;
    }
    baseQuery = baseQuery.orderBy(direction(columnToSort));
  }

  if (category) {
    normalizedCategory = decodeURIComponent(category).toLowerCase();
    const conditions = []
    conditions.push(ilike(productsCategoryTable.title, normalizedCategory));

    if (searchQuery) {
      conditions.push(ilike(productsTable.title, `%${searchQuery}%`))
    }
    baseQuery = baseQuery.where(and(...conditions));

  } else if (searchQuery) {
    baseQuery = baseQuery.where(ilike(productsTable.title, `%${searchQuery}%`));
  }

  const products: Product[] = await baseQuery.limit(pageSize).offset(offset);
  const totalPages = await fetchProductsPages(pageSize, normalizedCategory, searchQuery)

  return { products, totalPages };
}