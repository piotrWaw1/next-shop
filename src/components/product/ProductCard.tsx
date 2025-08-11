import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { Product } from "@/db/schema/schema";

interface ProductProps {
  product: Pick<Product, "id" | "title" | "price">
}

export function ProductCard({ product }: ProductProps) {

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
        <h3 className="font-semibold text-lg text-gray-900 line-clamp-2 leading-tight">{product.title}</h3>
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
        </div>
        <Button className="w-full" size="lg">
          <ShoppingCart className="w-4 h-4 mr-2"/>
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  )
}