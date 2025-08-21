import { PaginationEllipsis, PaginationItem } from "@/components/ui/pagination";
import React from "react";

interface PaginationSeparatorProps {
  children: React.ReactNode;
  currentPage: number;
  totalPages: number;
  pagesOffset: number;
}

export default function PaginationSeparator(props: PaginationSeparatorProps) {
  const { children, currentPage, totalPages, pagesOffset } = props;

  return (
    <>
      {currentPage - pagesOffset > 2 &&
          <PaginationItem>
              <PaginationEllipsis/>
          </PaginationItem>
      }
      {children}
      {currentPage + pagesOffset < totalPages - pagesOffset &&
          <PaginationItem>
              <PaginationEllipsis/>
          </PaginationItem>
      }
    </>
  )
}