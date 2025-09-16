import { ProductGallery } from "@/components/productView/ProductGallery";
import { ProductDetails } from "@/components/productView/ProductDetails";
import { ProductDescription } from "@/components/productView/productDescription/ProductDescription";
import { ProductReviews } from "@/components/productView/ProductReviews";

interface ProductParams {
  productId: string;
}

interface ProductProps {
  params: Promise<ProductParams>;
}


export default async function Product(props: ProductProps) {

  const { productId } = await props.params;

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Product Header Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
        <ProductGallery/>
        <ProductDetails productId={productId}/>
      </div>

      {/* Product Description */}
      <ProductDescription/>

      {/* Customer Reviews */}
      <ProductReviews/>
    </div>
  )
}