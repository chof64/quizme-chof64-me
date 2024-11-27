"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ChevronLeftIcon } from "lucide-react";

import { Button } from "~/components/ui/button";

export default function Header() {
  const router = useRouter();

  return (
    <header className="container max-w-md">
      <div className="flex items-center py-6">
        <Button variant={"ghost"} size={"icon"} onClick={() => router.back()}>
          <ChevronLeftIcon />
        </Button>
        <div className="ml-2 font-semibold">Study Buddy</div>
      </div>
    </header>
  );
}
