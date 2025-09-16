// import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Star, Heart, Share2, Minus, Plus } from "lucide-react"
import { getProductInformation } from "@/lib/data/productDetails";
import { ProductAvailabilityAndPolicy } from "@/components/productView/productDescription/ProductAvailabilityAndPolicy";

interface ProductDetailsProps {
  productId: string;
}

export async function ProductDetails(props: ProductDetailsProps) {
  const { productId } = props
  const data = await getProductInformation(productId)

  // const [quantity, setQuantity] = useState(1)
  // const [selectedColor, setSelectedColor] = useState("black")
  // const [selectedSize, setSelectedSize] = useState("")

  const colors = [
    { name: "Black", value: "black", class: "bg-black" },
    { name: "White", value: "white", class: "bg-white border" },
    { name: "Blue", value: "blue", class: "bg-blue-600" },
  ]

  // const incrementQuantity = () => setQuantity((prev) => prev + 1)
  // const decrementQuantity = () => setQuantity((prev) => Math.max(1, prev - 1))


  return (
    <div className="space-y-6">
      {/* Product Title & Rating */}
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">{data.title}</h1>
        <div className="flex items-center gap-2 mb-4">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`w-4 h-4 ${i < 4 ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"}`}
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">(128 reviews)</span>
        </div>
        <Badge variant="secondary" className="mb-4">
          Best Seller
        </Badge>
      </div>

      {/* Price */}
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <span className="text-3xl font-bold text-accent dark:text-white">${data.price}</span>
          {/*<span className="text-lg text-muted-foreground line-through">$399.99</span>*/}
          {/*<Badge variant="destructive">25% OFF</Badge>*/}
        </div>
        {/*<p className="text-sm text-muted-foreground">Free shipping on orders over $50</p>*/}
      </div>

      {/* Color Selection */}
      {/*<div className="space-y-3">*/}
      {/*  <h3 className="font-semibold">Color</h3>*/}
      {/*  <div className="flex gap-3">*/}
      {/*    {colors.map((color) => (*/}
      {/*      <button*/}
      {/*        key={color.value}*/}
      {/*        onClick={() => setSelectedColor(color.value)}*/}
      {/*        className={`w-8 h-8 rounded-full ${color.class} ring-2 ring-offset-2 transition-all ${*/}
      {/*          selectedColor === color.value ? "ring-accent" : "ring-transparent hover:ring-accent/50"*/}
      {/*        }`}*/}
      {/*        title={color.name}*/}
      {/*      />*/}
      {/*    ))}*/}
      {/*  </div>*/}
      {/*</div>*/}

      {/* Size Selection */}
      {/*<div className="space-y-3">*/}
      {/*  <h3 className="font-semibold">Size</h3>*/}
      {/*  <Select>*/}
      {/*    <SelectTrigger className="w-full">*/}
      {/*      <SelectValue placeholder="Select size"/>*/}
      {/*    </SelectTrigger>*/}
      {/*    <SelectContent>*/}
      {/*      <SelectItem value="small">Small</SelectItem>*/}
      {/*      <SelectItem value="medium">Medium</SelectItem>*/}
      {/*      <SelectItem value="large">Large</SelectItem>*/}
      {/*    </SelectContent>*/}
      {/*  </Select>*/}
      {/*</div>*/}

      {/* Quantity */}
      <div className="space-y-3">
        <h3 className="font-semibold">Quantity</h3>
        <div className="flex items-center gap-3">
          <Button variant="outline" size="icon" /*onClick={decrementQuantity} disabled={quantity <= 1}*/>
            <Minus className="w-4 h-4"/>
          </Button>
          {/*<span className="w-12 text-center font-semibold">{quantity}</span>*/}
          <Button variant="outline" size="icon" /*onClick={incrementQuantity}*/>
            <Plus className="w-4 h-4"/>
          </Button>
          <p className="font-semibold">Available: {data.amount}</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-3">
        <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" size="lg">
          Add to Cart
        </Button>
        <div className="flex gap-3">
          <Button variant="outline" className="flex-1 bg-transparent">
            <Heart className="w-4 h-4 mr-2"/>
            Wishlist
          </Button>
          <Button variant="outline" className="flex-1 bg-transparent">
            <Share2 className="w-4 h-4 mr-2"/>
            Share
          </Button>
        </div>
      </div>

      {/* Product Features */}
      <ProductAvailabilityAndPolicy {...data}/>
    </div>
  )
}