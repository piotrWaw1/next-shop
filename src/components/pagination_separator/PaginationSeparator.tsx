import { PaginationEllipsis, PaginationItem } from "@/components/ui/pagination";
import React from "react";

interface PaginationSeparatorProps {
  children: React.ReactNode;
  currentPage: number;
  totalPages: number;
}

export default function PaginationSeparator(props: PaginationSeparatorProps) {
  const { children, currentPage, totalPages } = props;

  return (
    <>
      {currentPage - 1 > 2 &&
          <PaginationItem>
              <PaginationEllipsis/>
          </PaginationItem>
      }
      {children}
      {currentPage + 1 < totalPages - 1 &&
          <PaginationItem>
              <PaginationEllipsis/>
          </PaginationItem>
      }
    </>
  )
}