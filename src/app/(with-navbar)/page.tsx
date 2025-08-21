import { ProductCard } from "@/components/product/ProductCard";
import { DataFetchError } from "@/components/errorMessages/DataFetchError";
import { PaginationHandler } from "@/components/product/PaginationHandler";
import { fetchProducts, fetchProductsPages } from "@/lib/data/products";
import { Suspense } from "react";

const DEFAULT_PAGE_SIZE = 12

export default async function Home(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  let products: Awaited<ReturnType<typeof fetchProducts>> | undefined;

  try {
    products = await fetchProducts(DEFAULT_PAGE_SIZE, currentPage);
  } catch (e) {
    products = undefined
  }

  const totalPages = await fetchProductsPages(DEFAULT_PAGE_SIZE);


  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Products</h2>
      <p className="text-gray-600">Discover our latest collection of premium tech accessories</p>
      {!products ? <DataFetchError/> :
        <Suspense key={query + currentPage} fallback="loading">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products?.map((product) => (
              <ProductCard product={product} key={product.id}/>
            ))}
          </div>
          <PaginationHandler totalPages={totalPages}/>
        </Suspense>
      }
    </div>
  );
}
