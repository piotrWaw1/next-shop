import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { ProfileButtons } from "@/components/profile/ProfileButtons";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";

// Sample purchase data
const purchases = [
  {
    id: "PUR-001",
    item: "Wireless Headphones",
    date: "2024-01-15",
    amount: "$129.99",
    status: "Delivered"
  },
  {
    id: "PUR-002",
    item: "Smart Watch",
    date: "2024-01-12",
    amount: "$299.99",
    status: "Shipped"
  },
  {
    id: "PUR-003",
    item: "Laptop Stand",
    date: "2024-01-10",
    amount: "$49.99",
    status: "Delivered"
  },
  {
    id: "PUR-004",
    item: "USB-C Cable",
    date: "2024-01-08",
    amount: "$19.99",
    status: "Delivered"
  },
  {
    id: "PUR-005",
    item: "Bluetooth Speaker",
    date: "2024-01-05",
    amount: "$79.99",
    status: "Processing"
  }
]

export default async function Profile() {

  const session = await getServerSession(authOptions)
  console.log(session)
  return (
    <>
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Profile</h2>
        <ProfileButtons/>
      </div>

      {/* Main Content */}
      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Latest Purchases</CardTitle>
            <CardDescription>Your recent purchase history</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Order ID</TableHead>
                  <TableHead>Item</TableHead>
                  <TableHead>Date</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Status</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {purchases.map((purchase) => (
                  <TableRow key={purchase.id}>
                    <TableCell className="font-medium">{purchase.id}</TableCell>
                    <TableCell>{purchase.item}</TableCell>
                    <TableCell>{purchase.date}</TableCell>
                    <TableCell>{purchase.amount}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          purchase.status === "Delivered" ? "default" :
                            purchase.status === "Shipped" ? "secondary" :
                              purchase.status === "Processing" ? "outline" : "default"
                        }
                      >
                        {purchase.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </>
  )
}