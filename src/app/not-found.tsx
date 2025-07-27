import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="flex flex-col items-center border p-20 rounded-lg">
        <h1 className="text-4xl font-bold">Not found 404</h1>
        <p>This page could not be found.</p>
        <Button className="mt-2">
          <ArrowLeft/> Go back
        </Button>
      </div>
    </div>
  )
}