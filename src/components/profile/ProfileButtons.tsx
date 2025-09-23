import { Button } from "@/components/ui/button";
import { Pencil, Plus, Settings } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import Link from "next/link";

export interface SessionData {
  user: {
    id: number;
    email: string;
    sellerStatus: boolean;
  }
}

export async function ProfileButtons() {
  const session: SessionData | null = await getServerSession(authOptions);

  return (
    <div className="flex gap-3">
      <TooltipProvider>
        {session?.user?.sellerStatus &&
            <>
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
            </>
        }
        <Tooltip>
          <TooltipTrigger asChild>
            <Link href="/profile/settings">
              <Button variant="outline">
                <Settings className="h-4 w-4"/>
              </Button>
            </Link>
          </TooltipTrigger>
          <TooltipContent>
            <p>Settings</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  )
}