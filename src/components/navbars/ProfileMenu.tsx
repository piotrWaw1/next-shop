import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "lucide-react";
import { LogOutButton } from "@/components/navbars/LogOutButton";
import Link from "next/link";

export default function ProfileMenu({ admin }: { admin: boolean }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar>
          <AvatarImage/>
          <AvatarFallback className="border"><User/></AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="start">
        <DropdownMenuGroup>
          {admin ?
            <Link href="/admin">
              <DropdownMenuItem>
                Admin dashboard
              </DropdownMenuItem>
            </Link> :
            <Link href="/profile">
              <DropdownMenuItem>
                Profile
              </DropdownMenuItem>
            </Link>
          }

          <Link href="/profile/settings">
            <DropdownMenuItem>
              Settings
            </DropdownMenuItem>
          </Link>
        </DropdownMenuGroup>
        <DropdownMenuSeparator/>
        <LogOutButton/>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}