'use client'

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import PaginationSeparator from "@/components/pagination_separator/PaginationSeparator";

const PAGES_OFFSET = 1;

export function PaginationHandler({ totalPages }: { totalPages: number }) {

  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  const { replace } = useRouter();

  const createPageURL = (pageNumber: number | string) => {
    const params = new URLSearchParams(searchParams);
    params.set('page', pageNumber.toString());
    replace(`${pathname}?${params.toString()}`)
  };

  const previous = () => {
    const params = new URLSearchParams(searchParams);
    const previousPage = currentPage - 1 || 1;
    params.set('page', `${previousPage}`);
    replace(`${pathname}?${params.toString()}`)
  }

  const next = () => {
    const params = new URLSearchParams(searchParams);
    const nextPage = currentPage + 1 > totalPages ? totalPages : currentPage + 1;
    params.set('page', `${nextPage}`);
    replace(`${pathname}?${params.toString()}`)
  }

  const generateArray = (start: number, end: number): number[] =>
    Array.from({ length: end - start + 1 }, (_, i) => start + i);

  const pagesToDisplay = (): number[] => {
    if (totalPages <= 5) {
      return generateArray(2, totalPages - 1);
    }

    if (currentPage === 1) {
      return generateArray(2, 3);
    }

    if (currentPage === totalPages) {
      return generateArray(totalPages - 2, totalPages - 1);
    }

    return generateArray(
      Math.max(2, currentPage - PAGES_OFFSET),
      Math.min(totalPages - 1, currentPage + PAGES_OFFSET)
    );
  };

  return (
    <Pagination className="mt-5">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious onClick={previous}/>
        </PaginationItem>
        <PaginationItem>
          <Button disabled={currentPage === 1} onClick={() => createPageURL(1)}
                  variant="outline">{1}</Button>
        </PaginationItem>
        <PaginationSeparator currentPage={currentPage} totalPages={totalPages} pagesOffset={PAGES_OFFSET}>
          {pagesToDisplay().map((page) => (
            <PaginationItem key={page}>
              <Button disabled={currentPage === page} onClick={() => createPageURL(page)}
                      variant="outline">{page}</Button>
            </PaginationItem>
          ))}
        </PaginationSeparator>
        <PaginationItem>
          <Button disabled={currentPage === totalPages}
                  hidden={totalPages <= 1}
                  onClick={() => createPageURL(totalPages)}
                  variant="outline">{totalPages}</Button>
        </PaginationItem>
        <PaginationItem>
          <PaginationNext onClick={next}/>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  )
}