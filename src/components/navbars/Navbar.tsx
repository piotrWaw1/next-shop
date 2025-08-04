import { Menu, Search } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import Profile from "@/components/navbars/Profile";
import { getServerSession } from "next-auth";

export async function Navbar() {
  const session = await getServerSession();


  return (
    <nav className="flex justify-center  h-16 w-full shrink-0 border-b px-4 md:px-6">
      {/* Mobile menu */}
      <div className="container flex items-center justify-between">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden bg-transparent">
              <Menu className="h-5 w-5"/>
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <SheetTitle hidden={true}>Menu</SheetTitle>
            <div className="grid gap-4 py-4">
              <Link href="/" className="flex items-center gap-2">
                <span className="text-lg font-bold">Next-shop</span>
              </Link>
              <Link href="/" className="flex w-full items-center py-2 text-lg font-medium">
                Home
              </Link>
              <Link href="/categories" className="flex w-full items-center py-2 text-lg font-medium">
                Categories
              </Link>
              <Link href="/best-sellers" className="flex w-full items-center py-2 text-lg font-medium">
                Best sellers
              </Link>
            </div>
          </SheetContent>
        </Sheet>

        <Link href="/" className="mr-6 mb-1 ml-5 md:ml-0 flex items-center">
          <span className="text-2xl font-bold">Next-shop</span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="font-medium transition-colors hover:text-primary">
            Home
          </Link>
          <Link href="/bestsellers" className="font-medium transition-colors hover:text-primary">
            Categories
          </Link>
          <Link href="/best-sellers" className="font-medium transition-colors hover:text-primary">
            Best sellers
          </Link>
        </nav>

        {/* Right side - Search and Sign in */}
        <div className="ml-auto flex items-center gap-4">
          {/* Search bar */}
          <div className="relative hidden sm:block">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"/>
            <Input type="search" placeholder="Search products..." className="pl-8 w-[200px] lg:w-[300px]"/>
          </div>

          {/* Mobile search button */}
          <Button variant="outline" size="icon" className="sm:hidden bg-transparent">
            <Search className="h-4 w-4"/>
            <span className="sr-only">Search</span>
          </Button>
          {session ? <Profile/> :
            <Button>
              <Link href="/login">Sign in</Link>
            </Button>
          }

        </div>
      </div>
    </nav>
  )
}