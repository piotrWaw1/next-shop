'use client'

import { TableHead } from "@/components/ui/table";
import { ReactNode } from "react";
import {ArrowDownUp, ArrowDownWideNarrow, ArrowUpNarrowWide } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface SortingByQuantityProps {
  children: ReactNode;
  paramName: string;
}

const ICON_SIZE= 22;

export function SortingByQuantity(props: SortingByQuantityProps) {
  const { children, paramName } = props;

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentSort = searchParams.get(paramName)


  const setParams = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete('page');

    for (const [key, value] of searchParams.entries()) {
      if ((value === 'asc' || value === 'desc') && key !== pathname) {
        params.delete(key)
      }
    }

    if (currentSort === 'asc') {
      params.set(paramName, 'desc');
    } else if (currentSort === 'desc') {
      params.delete(paramName);
    } else {
      params.set(paramName, 'asc');
    }

    router.push(pathname + '?' + params.toString());
  }

  return (
    <TableHead onClick={setParams} className="flex items-center gap-1 cursor-pointer">
      {children}
      {currentSort === 'asc' && <ArrowUpNarrowWide size={ICON_SIZE}/>}
      {currentSort === 'desc' && <ArrowDownWideNarrow size={ICON_SIZE}/>}
      {!currentSort && <ArrowDownUp size={ICON_SIZE}/>}
    </TableHead>
  )
}