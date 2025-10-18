import { ProductsList } from "@/components/products/ProductsList";
import { Filters } from "@/components/filters/Filters";

type SortOrder = "asc" | "desc";

export interface SearchParams {
  query?: string;
  page?: string;
  pageSize?: string;
  price?: SortOrder;
  amount?: SortOrder;
  sold?: SortOrder;
  category?: string
}

export default function Home(props: { searchParams?: Promise<SearchParams> }) {

  return (
    <>
      <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Featured Products</h2>
          <p className="text-gray-600 dark:text-gray-300">
            Discover our latest collection of premium tech accessories
          </p>
        </div>
        <Filters/>
      </div>
      <ProductsList {...props} />
    </>
  );
}
