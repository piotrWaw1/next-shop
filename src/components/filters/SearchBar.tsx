'use client'

import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export function SearchBar() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  console.log(pathname);
  const search = useDebouncedCallback((value: string) => {
    const params = new URLSearchParams(searchParams);
    if (value) {
      params.set('query', value);
    } else {
      params.delete('query');
    }
    replace(`${pathname}?${params.toString()}`);
  }, 1000)

  return (
    <>
      {/*Desktop*/}
      <div className="relative hidden sm:block">
        <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground"/>
        <Input onChange={(e) => search(e.target.value)} type="search" placeholder="Search products..."
               className="pl-8 w-[200px] lg:w-[300px]"/>
      </div>
      {/*Mobile*/}
      <Button variant="outline" size="icon" className="sm:hidden bg-transparent">
        <Search className="h-4 w-4"/>
        <span className="sr-only">Search</span>
      </Button>
    </>

  )
}