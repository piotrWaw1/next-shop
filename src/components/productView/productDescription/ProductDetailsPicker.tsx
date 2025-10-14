'use client'

import { Button } from "@/components/ui/button";
import {  Minus, Plus } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface ProductDetailsPickerProps {
  amount?: number | null;
}

export function ProductDetailsPicker({ amount }: ProductDetailsPickerProps) {
  const [quantity, setQuantity] = useState(1);

  return (
    <>
      {/* Quantity */}
      <div className="space-y-3">
        <h3 className="font-semibold">Quantity</h3>
        <div className="flex items-center gap-3">
          <Button
            variant="outline" size="icon"
            onClick={() => setQuantity(quantity - 1)}
            disabled={amount ? quantity <= 1 : true}
          >
            <Minus className="w-4 h-4"/>
          </Button>
          <span className={cn("w-12 text-center font-semibold", amount ? "" : "text-gray-400 dark:text-gray-500")}>
            {quantity}
          </span>
          <Button
            variant="outline"
            size="icon"
            onClick={() => setQuantity(quantity + 1)}
            disabled={amount ? quantity >= amount : true}
          >
            <Plus className="w-4 h-4"/>
          </Button>
          {amount ?
            <p className="font-semibold">Available: {amount}</p>
            :
            <p className="font-semibold text-gray-400 dark:text-gray-500">Not available</p>
          }

        </div>
      </div>
    </>
  )
}