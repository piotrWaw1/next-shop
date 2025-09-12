import { SearchParams } from "@/app/(with-navbar)/page";
import { Filters } from "@/components/filters/Filters";
import { ProductsList } from "@/components/product/ProductsList";
import { isCategoryExist } from "@/lib/data/categories";
import { notFound } from "next/navigation";

interface CategoryParams {
  category: string;
}

interface CategoryParams {
  params: Promise<CategoryParams>,
  searchParams?: Promise<SearchParams>;
}

export default async function Category(props: CategoryParams) {

  const { category } = await props.params;
  const { exist, result } = await isCategoryExist(category);

  if (!exist) {
    notFound()
  }

  return (
    <>
      <div className="flex justify-between items-center mb-5">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-2">{result[0].title}</h2>
          <p className="text-gray-600">Category</p>
        </div>
        <Filters/>
      </div>
      <ProductsList {...props} />
    </>
  )

}