import { PaginationHandler } from "@/components/product/PaginationHandler";
import { fetchProductsPages } from "@/lib/data/products";
import { Suspense } from "react";
import { ProductsList } from "@/components/product/ProductsList";
import { Filters } from "@/components/Filters";

const DEFAULT_PAGE_SIZE = 12

interface SearchParams {
  query?: string;
  page?: string;
  pageSize?: string;
  sortOrder?: "desc" | "asc";
}

export default async function Home(props: {
  searchParams?: Promise<SearchParams>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  const pageSize = Number(searchParams?.pageSize || DEFAULT_PAGE_SIZE);
  const sortOrder = searchParams?.sortOrder;

  const totalPages = await fetchProductsPages(pageSize);


  return (
    <>
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Products</h2>
          <p className="text-gray-600">Discover our latest collection of premium tech accessories</p>
        </div>
        <Filters/>
      </div>
      <Suspense key={query + currentPage} fallback="loading">
        <ProductsList query={query} currentPage={currentPage} pageSize={pageSize} sortOrder={sortOrder}/>
      </Suspense>
      {/*TODO: Fix pagination performance Desktop*/}
      <PaginationHandler totalPages={totalPages}/>
    </>
  );
}
