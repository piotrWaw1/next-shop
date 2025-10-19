'use client'

import { TableHead } from "@/components/ui/table";
import { ReactNode } from "react";
import { ArrowDownUp, ArrowDownWideNarrow, ArrowUpNarrowWide } from "lucide-react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface SortingByQuantityProps {
  children: ReactNode;
  className?: string;
  paramName: string;
}

const ICON_SIZE = 22;

export function SortingByQuantity(props: SortingByQuantityProps) {
  const { children, paramName, className } = props;

  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentSortOrder = searchParams.get("sortBy") === paramName ? searchParams.get("sortOrder") : null;

  const setParams = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.delete('page');

    if (currentSortOrder === 'asc') {
      params.set('sortBy', paramName);
      params.set('sortOrder', 'desc');
    } else if (currentSortOrder === 'desc') {
      params.delete('sortOrder');
      params.delete('sortBy');
    } else {
      params.set('sortBy', paramName);
      params.set('sortOrder', 'asc');
    }

    router.push(pathname + '?' + params.toString());
  }

  return (
    <TableHead onClick={setParams} className={className}>
      <div className="flex items-center gap-1 cursor-pointer">
        {children}
        {currentSortOrder === 'asc' && <ArrowUpNarrowWide size={ICON_SIZE}/>}
        {currentSortOrder === 'desc' && <ArrowDownWideNarrow size={ICON_SIZE}/>}
        {!currentSortOrder && <ArrowDownUp size={ICON_SIZE}/>}
      </div>
    </TableHead>
  )
}