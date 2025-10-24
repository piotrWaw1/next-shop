import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { Product } from "@/db/schema/schema";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface ProductProps {
  product: Pick<Product, "id" | "title" | "price" | "amount">
}

export function ProductCard({ product }: ProductProps) {
  const isAvailable = Boolean(product.amount);

  return (
    <Card
      className={cn("w-full max-w-sm mx-auto overflow-hidden hover:shadow-lg transition-shadow duration-300",
        isAvailable && "transition duration-200 dark:hover:bg-zinc-800")}>
      <Link href={`/product/${product.id}`} >
        <div className="relative aspect-square overflow-hidden bg-gray-50">
          <Image
            src={"/placeholder.svg"}
            alt="Image placeholder"
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
          />
        </div>
        <CardContent className="p-4 space-y-3">
          <h3 className="font-semibold text-lg line-clamp-2 leading-tight">
            {product.title}
          </h3>
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-gray-900 dark:text-white">${product.price}</span>
          </div>
          {!isAvailable  && "Not available"}
        </CardContent>
      </Link>
    </Card>
  )
}