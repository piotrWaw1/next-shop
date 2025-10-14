import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Pencil, Trash2, Plus } from "lucide-react"
import { fetchProducts } from "@/lib/data/products";
import { PaginationHandler } from "@/components/products/PaginationHandler";
import { SearchParams } from "@/app/(navbar-with-search-bar)/page";

const DEFAULT_PAGE_SIZE = 20

export default async function AdminDashboard(props: {searchParams?: Promise<SearchParams>;}) {

  const searchParams = await props.searchParams

  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  const sortOrder = searchParams?.sortOrder;
  const pageSize = Number(searchParams?.pageSize) || DEFAULT_PAGE_SIZE;

  const { products, totalPages } = await fetchProducts(pageSize, currentPage, sortOrder, query)

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Admin dashboard</h1>

      <div className="rounded-lg border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Product Title</TableHead>
              <TableHead>Quantity</TableHead>
              <TableHead>Availability</TableHead>
              <TableHead>Sold</TableHead>
              <TableHead className="text-right">
                <Button size="sm">
                  <Plus/>
                </Button>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell className="font-medium">{product.title}</TableCell>
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