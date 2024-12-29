"use client";

import React from "react";
import { signOut, useSession } from "next-auth/react";

import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";

export default function ProfileNav() {
  const { data: session } = useSession();

  if (!session) {
    return null;
  }

  return (
    <div className="ml-auto w-fit">
      <DropdownMenu>
        <DropdownMenuTrigger className="rounded-full">
          <Avatar className="h-8 w-8">
            <AvatarImage src={session.user.image ?? undefined} />
            <AvatarFallback>
              {(session.user.name?.[0] ?? "??").toUpperCase()}
            </AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-screen max-w-xs shadow" align="end">
          <DropdownMenuItem disabled>Profile</DropdownMenuItem>
          <DropdownMenuItem disabled>Settings</DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => signOut({ redirectTo: "/" })}>
            Sign out
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
