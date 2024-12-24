import React from "react";
import { usePathname, useRouter } from "next/navigation";
import { ChevronLeftIcon } from "lucide-react";

import { Button } from "../ui/button";

const hiddenRoutes = ["/", "/dashboard"];

export default function BackNav() {
  const router = useRouter();

  const pathname = usePathname();

  if (hiddenRoutes.includes(pathname)) {
    return null;
  }

  return (
    <Button
      className=""
      variant={"ghost"}
      size="icon"
      onClick={() => router.back()}
    >
      <ChevronLeftIcon className="!size-5 stroke-2" />
    </Button>
  );
}
