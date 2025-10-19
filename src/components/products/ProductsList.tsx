import { ProductCard } from "@/components/products/ProductCard";
import { fetchProducts } from "@/lib/data/products";
import { Product } from "@/db/schema/schema";
import { Suspense } from "react";
import { PaginationHandler } from "@/components/products/PaginationHandler";
import { SearchParams } from "@/app/(navbar-with-search-bar)/page";

interface Params {
  category?: string;
}

const DEFAULT_PAGE_SIZE = 12

export async function ProductsList(props: {
  searchParams?: Promise<SearchParams>;
  params?: Promise<Params>;
}) {

  const searchParams = await props.searchParams
  const params = await props.params;

  const searchQuery = searchParams?.query || "";
  const page = Number(searchParams?.page) || 1;
  const sortOrder = searchParams?.sortOrder;
  const pageSize = Number(searchParams?.pageSize) || DEFAULT_PAGE_SIZE;
  const sortBy = searchParams?.sortBy;

  const category = params?.category;

  const { products, totalPages }: {
    products: Awaited<Product[]>,
    totalPages: number
  } = await fetchProducts({ page, pageSize, sortOrder, sortBy, category, searchQuery });

  return (
    <Suspense key={searchQuery + page + sortOrder + pageSize} fallback="loading">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products?.map((product) => (
          <ProductCard product={product} key={product.id}/>
        ))}
      </div>
      {/*TODO: Fix pagination performance Desktop*/}
      <PaginationHandler totalPages={totalPages}/>
    </Suspense>
  )
}