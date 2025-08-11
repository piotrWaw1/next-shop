import { db } from "@/lib/drizzleDbConnection";
import { productsTable } from "@/db/schema/schema";
import { ProductCard } from "@/components/product/ProductCard";

export default async function Home() {
  let products = await db.select({
    id: productsTable.id,
    title: productsTable.title,
    price: productsTable.price
  }).from(productsTable).limit(10);

  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Products</h2>
      <p className="text-gray-600">Discover our latest collection of premium tech accessories</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard product={product} key={product.id}/>
        ))}

      </div>
    </div>
  );
}
