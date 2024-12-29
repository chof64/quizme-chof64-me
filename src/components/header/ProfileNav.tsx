"use client";

import React from "react";
import { useSession } from "next-auth/react";

import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

export default function ProfileNav() {
  const { data: session } = useSession();

  if (!session) {
    return null;
  }

  return (
    <div className="ml-auto w-fit">
      <Avatar className="h-8 w-8">
        <AvatarImage src={session.user.image ?? undefined} />
        <AvatarFallback>
          {(session.user.name?.[0] ?? "??").toUpperCase()}
        </AvatarFallback>
      </Avatar>
    </div>
  );
}
