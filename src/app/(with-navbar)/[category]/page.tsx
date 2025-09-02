import { SearchParams } from "@/app/(with-navbar)/page";
import { Filters } from "@/components/filters/Filters";
import { ProductsList } from "@/components/product/ProductsList";

interface CategoryParams {
  category: string;
}

interface CategoryParams {
  params: Promise<CategoryParams>,
  searchParams?: Promise<SearchParams>;
}

export default async function Category(props: CategoryParams) {

  const params = await props.params

  return (
    <>
      <div className="flex justify-between items-center mb-5">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">{params.category}</h2>
          <p className="text-gray-600">Category</p>
        </div>
        <Filters/>
      </div>
      <ProductsList {...props} />
    </>
  )
}