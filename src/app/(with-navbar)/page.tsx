import { ProductsList } from "@/components/product/ProductsList";
import { Filters } from "@/components/Filters";

export interface SearchParams {
  query?: string;
  page?: string;
  pageSize?: string;
  sortOrder?: "desc" | "asc";
  category?: string
}

export default async function Home(props: { searchParams?: Promise<SearchParams> }) {

  return (
    <>
      <div className="flex justify-between items-center mb-5">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Products</h2>
          <p className="text-gray-600">Discover our latest collection of premium tech accessories</p>
        </div>
        <Filters/>
      </div>
      <ProductsList {...props}/>
    </>
  );
}
