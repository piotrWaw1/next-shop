import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Loader2 } from "lucide-react"
// TODO: Make this better
export function DataFetchError() {
  return (
    <div className="flex justify-center mt-10">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl text-red-600">Error</CardTitle>
        </CardHeader>
        <CardContent className="p-6 space-y-4">
          <p>Loading data error. Try again later.</p>
          <Button className="w-full">
            <Loader2/>Get data
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}