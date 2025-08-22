import { ProductCard } from "@/components/product/ProductCard";
import { fetchProducts } from "@/lib/data/products";

interface ProductsListProps {
  currentPage: number;
  pageSize: number;
  query: string;
}

export async function ProductsList(props: ProductsListProps) {

  const { query, currentPage, pageSize } = props;
  let products: Awaited<ReturnType<typeof fetchProducts>> | undefined = await fetchProducts(pageSize, currentPage);


  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {products?.map((product) => (
        <ProductCard product={product} key={product.id}/>
      ))}
    </div>
  )
}