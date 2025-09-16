import { Menu } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import ProfileMenu from "@/components/navbars/ProfileMenu";
import { getServerSession } from "next-auth";
import { signOut } from "next-auth/react";
import {
  NavigationMenu,
  NavigationMenuItem, NavigationMenuLink, NavigationMenuList,
} from "@/components/ui/navigation-menu";
import NavigationMenuDropDown from "@/components/navbars/NavigationMenuDropDown";
import { SearchBar } from "@/components/filters/SearchBar";
import { ModeToggle } from "@/components/theme/ModeToggle";

export async function Navbar() {
  let session = undefined;

  try {
    session = await getServerSession();
  } catch (e) {
    await signOut()
  }

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
          <NavigationMenu viewport={false}>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/" className="font-medium transition-colors hover:text-primary">
                    Home
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuDropDown/>

              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link href="/best-sellers" className="font-medium transition-colors hover:text-primary">
                    Best sellers
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* Right side - Search and Sign in */}
        <div className="ml-auto flex items-center gap-4">
          <SearchBar/>
          <ModeToggle/>
          {session ? <ProfileMenu/> :
            <Link href="/login">
              <Button>
                Sign in
              </Button>
            </Link>
          }

        </div>
      </div>
    </nav>
  )
}