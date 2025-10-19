'use client'

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const DEFAULT_PAGE_SIZE = "12";

export function Filters() {

  const { replace } = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const currentPageSize = searchParams.get('pageSize') || DEFAULT_PAGE_SIZE;
  const sortOrder = searchParams.get("sortOrder")
  const currentSortOrder = searchParams.get("sortBy") === "price" ? (sortOrder || "default") : "default";

  const setPageSize = (value: string) => {
    const params = new URLSearchParams(searchParams);
    value === DEFAULT_PAGE_SIZE
      ? params.delete("pageSize")
      : params.set("pageSize", value);

    params.delete("page");

    replace(`${pathname}?${params.toString()}`)
  }

  const setSortBy = (value: string) => {
    const params = new URLSearchParams(searchParams);
    params.delete("page");

    if (value === "default") {
      params.delete("sortBy")
      params.delete("sortOrder")
    } else {
      params.set("sortBy", "price");
      params.set("sortOrder", value);
    }

    replace(`${pathname}?${params.toString()}`)
  }

  return (
    <div className="flex flex-col sm:flex-row gap-4 min-w-0">
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Page size</label>
        <Select value={currentPageSize} onValueChange={setPageSize}>
          <SelectTrigger className="w-full sm:w-[120px]">
            <SelectValue/>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="12">12 items</SelectItem>
            <SelectItem value="24">24 items</SelectItem>
            <SelectItem value="36">36 items</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex flex-col gap-2">
        <label className="text-sm font-medium text-gray-700 dark:text-gray-300">Sort price</label>
        <Select value={currentSortOrder} onValueChange={setSortBy}>
          <SelectTrigger className="w-full sm:w-[140px]">
            <SelectValue/>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="default">Default</SelectItem>
            <SelectItem value="asc">Ascending</SelectItem>
            <SelectItem value="desc">Descending</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  )
}