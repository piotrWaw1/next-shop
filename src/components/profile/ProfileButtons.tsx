import { Button } from "@/components/ui/button";
import { Pencil, Plus, Settings } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

export function ProfileButtons() {
  return (
    <div className="flex gap-3">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">
              <Plus className="h-4 w-4"/>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Add product</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">
              <Pencil className="h-4 w-4"/>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Edit product</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="outline">
              <Settings className="h-4 w-4"/>
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Settings</p>
          </TooltipContent>
        </Tooltip>

      </TooltipProvider>
    </div>
  )
}