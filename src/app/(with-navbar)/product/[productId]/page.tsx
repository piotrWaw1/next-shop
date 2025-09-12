import { ProductGallery } from "@/components/productViewComponents/ProductGallery";
import { ProductDetails } from "@/components/productViewComponents/ProductDetails";
import { ProductDescription } from "@/components/productViewComponents/ProductDescription";
import { ProductReviews } from "@/components/productViewComponents/ProductReviews";

export default function ProductId(){
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Product Header Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <ProductGallery/>
        <ProductDetails/>
      </div>

      {/* Product Description */}
      <ProductDescription/>

      {/* Customer Reviews */}
      <ProductReviews/>
    </div>
  )
}