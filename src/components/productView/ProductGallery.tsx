'use client'

import Image from "next/image"
import { cn } from "@/lib/utils"
import { useState } from "react";

const productImages = [
  "/product/premium-wireless-headphones.png",
  "/product/premium-wireless-headphones-side.png",
  "/product/premium-wireless-headphones-back-view.jpg",
  "/product/premium-wireless-headphones-case-view.jpg",
]

export function ProductGallery() {
  const [selectedImage, setSelectedImage] = useState(0)

  return (
    <div className="space-y-4">
      {/* Main Image */}
      <div className="aspect-square bg-card rounded-lg overflow-hidden border">
        <Image
          src={productImages[selectedImage] || "/placeholder.svg"}
          alt="Product main view"
          width={600}
          height={600}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Thumbnail Images */}
      <div className="grid grid-cols-4 gap-4">
        {productImages.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(index)}
            className={cn(
              "aspect-square bg-card rounded-lg overflow-hidden border-2 transition-colors",
              selectedImage === index ? "opacity-50" : "border-border hover:opacity-50",
            )}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={`Product view ${index + 1}`}
              width={150}
              height={150}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  )
}