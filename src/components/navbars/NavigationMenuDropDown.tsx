import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import { fetchAllCategories } from "@/lib/data/categories";

export default async function NavigationMenuDropDown() {
  const categories = await fetchAllCategories();

  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger>Categories</NavigationMenuTrigger>
      <NavigationMenuContent>
        <ul className="grid w-[200px] gap-4">
          <li>
            {categories.map((category) => (
              <NavigationMenuLink key={category.id} asChild>
                <Link href={`/${category.title.toLowerCase()}`}>{category.title}</Link>
              </NavigationMenuLink>
            ))}
          </li>
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  )
}