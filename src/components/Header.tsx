"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Button } from "~/components/ui/button";
import { ChevronLeftIcon } from "@radix-ui/react-icons";

export default function Header() {
  const router = useRouter();

  return (
    <header className="mx-auto max-w-md">
      <div className="container flex items-center py-6">
        <Button variant={"ghost"} size={"icon"} onClick={() => router.back()}>
          <ChevronLeftIcon />
        </Button>
        <div className="ml-2 font-semibold">Study Buddy</div>
      </div>
    </header>
  );
}
