'use client'

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Category } from "@/db/schema/schema";
import { use } from "react";

interface CategorySelectProps {
  categories: Promise<Category[]>
}

export function CategorySelect({ categories }: CategorySelectProps) {

  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const currentCategory = searchParams.get('category') || "all";
  const allCategories = use(categories)

  const setCategory = (value: string) => {
    const params = new URLSearchParams(searchParams);
    params.delete("page")

    if (value === "all") {
      params.delete("category")
    } else {
      params.set("category", value);
    }

    replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Category</label>
      <Select value={currentCategory} onValueChange={setCategory}>
        <SelectTrigger className="w-full sm:w-[150px]">
          <SelectValue/>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All</SelectItem>
          {allCategories.map(category => (
            <SelectItem key={category.id} value={category.title}>{category.title}</SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  )
}