import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

export type Product = {
  id: number;
  title: string;
  description: string;
  price: number;
}

function Product(props: { data: Product }) {

  const { data } = props

  return (
    <Card className="w-full max-w-sm mx-auto overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="relative aspect-square overflow-hidden bg-gray-50">
        <Image
          src={"/placeholder.svg"}
          alt="Image placeholder"
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
      <CardContent className="p-4 space-y-3">
        <h3 className="font-semibold text-lg text-gray-900 line-clamp-2 leading-tight">{data.title}</h3>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900">${data.price.toFixed(2)}</span>
        </div>
        <Button className="w-full" size="lg">
          <ShoppingCart className="w-4 h-4 mr-2"/>
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  )
}

export default async function Home() {
  let products: Product[] = [];
  try {
    const data = await fetch("http://localhost:3000/api/products");
    products = await data.json();
  } catch (e) {
    console.error(e);
    return (
      <main className="flex justify-center mt-10">
        <div className="container text-red-500 ">
          Failed to load products. Please try again later.
        </div>
      </main>

    );
  }

  // console.log(products);

  return (
    <main className="flex flex-col items-center mt-10">
      <div className="container">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Products</h2>
          <p className="text-gray-600">Discover our latest collection of premium tech accessories</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {products.map((product) => (
            <Product data={product} key={product.id}/>
          ))}
        </div>
      </div>
    </main>
  );
}
