'use client'

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";

export function PaginationHandler({ totalPages }: { totalPages: number }) {

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  const { replace } = useRouter();

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    replace(`${pathname}?${params.toString()}`)
  };

  const previousPage = () => {
    const params = new URLSearchParams(searchParams);
    const previousPage = currentPage - 1 || 1;
    params.set('page', `${previousPage}`);
    replace(`${pathname}?${params.toString()}`)
  }

  const nextPage = () => {
    const params = new URLSearchParams(searchParams);
    const nextPage = currentPage + 1 > totalPages ? totalPages : currentPage + 1;
    params.set('page', `${nextPage}`);
    replace(`${pathname}?${params.toString()}`)
  }

  return (
    <Pagination className="mt-5">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious onClick={previousPage}/>
        </PaginationItem>
        {pages.map((page) => (
          <PaginationItem key={page}>
            <Button disabled={currentPage === page} onClick={() => createPageURL(page)}
                    variant="outline">{page}</Button>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationEllipsis/>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext onClick={nextPage}/>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}