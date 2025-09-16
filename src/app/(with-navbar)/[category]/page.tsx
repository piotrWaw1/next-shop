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
      <div className="mb-8 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{result[0].title}</h2>
          <p className="text-gray-600 dark:text-gray-300">{result[0].description}</p>
        </div>
        <Filters/>
      </div>
      <ProductsList {...props} />
    </>
  )

}