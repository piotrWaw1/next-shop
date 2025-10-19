import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Pencil, Trash2, Plus } from "lucide-react"
import { fetchProducts } from "@/lib/data/products";
import { PaginationHandler } from "@/components/products/PaginationHandler";
import { SearchParams } from "@/app/(navbar-with-search-bar)/page";
import { SortingByQuantity } from "@/components/admin-dashboard-table/SortingByQuantity";
import Link from "next/link";

const DEFAULT_PAGE_SIZE = 20

export default async function AdminDashboard(props: { searchParams?: Promise<SearchParams>; }) {

  const searchParams = await props.searchParams

  const searchQuery = searchParams?.query || "";
  const page = Number(searchParams?.page) || 1;

  const sortBy = searchParams?.sortBy;
  const sortOrder = searchParams?.sortOrder;

  const pageSize = Number(searchParams?.pageSize) || DEFAULT_PAGE_SIZE;

  const { products, totalPages } = await fetchProducts({
    page,
    pageSize,
    sortOrder,
    sortBy,
    searchQuery
  });

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-6">Admin dashboard</h1>
      <div className="rounded-lg border">
        <Table>
          <TableHeader className="table-fixed">
            <TableRow>
              <TableHead>Product Title</TableHead>
              <SortingByQuantity paramName="amount">Amount</SortingByQuantity>
              <TableHead>Availability</TableHead>
              <SortingByQuantity paramName="sold">Sold</SortingByQuantity>
              <SortingByQuantity paramName="price">Price</SortingByQuantity>
              <TableHead className="text-right">
                <Link href="/admin/add-product">
                  <Button size="sm">
                    <Plus/>
                  </Button>
                </Link>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell className="font-medium w-[30%]">{product.title}</TableCell>
                <TableCell>{product.amount}</TableCell>
                <TableCell>
                  <div className="flex items-center gap-2">
                    <div className={`h-3 w-3 rounded-full ${!!product.amount ? "bg-green-500" : "bg-red-500"}`}/>
                    <span className="text-sm text-muted-foreground">
                      {!!product.amount ? "Available" : "Out of Stock"}
                    </span>
                  </div>
                </TableCell>
                <TableCell>{product.sold}</TableCell>
                <TableCell>{product.price} PLN</TableCell>
                <TableCell className="text-right">
                  <div className="flex justify-end gap-2">
                    <Button variant="ghost" size="icon">
                      <Pencil className="h-4 w-4"/>
                      <span className="sr-only">Edit product</span>
                    </Button>
                    <Button variant="destructive" size="icon">
                      <Trash2 className="h-4 w-4"/>
                      <span className="sr-only">Delete product</span>
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <PaginationHandler totalPages={totalPages}/>
    </div>
  )
}