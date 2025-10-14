import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge";

export async function ShoppingCartComponent() {

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className="relative">
          <ShoppingCart/>
          <Badge className="absolute -top-1 -right-1 rounded-full w-4 h-4" variant="secondary">3</Badge>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle className="flex flex-row gap-4 text-2xl">
            <ShoppingCart size={32}/>
            Shopping Cart
          </SheetTitle>
        </SheetHeader>
        <div>
        </div>
      </SheetContent>
    </Sheet>
  )
}