"use client";

import { UpdateIcon } from "@radix-ui/react-icons";
import { api } from "~/trpc/react";
import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";

export default function Trivia() {
  const date = new Date();

  const res = api.trivia.date.useQuery(
    {
      month: date.getMonth() + 1,
      day: date.getDate(),
    },
    {
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
    },
  );

  return (
    <div className="relative overflow-hidden rounded-xl shadow-inner">
      <div className="rounded-xl border border-neutral-400/60 bg-gradient-to-b from-gray-200/40 to-gray-100/40 p-4 backdrop-blur-md">
        <div className="flex items-center justify-between">
          <h2 className="text-xs font-medium tracking-tight text-neutral-400/60">
            Today&apos;s Trivia
          </h2>
          <Button
            className="h-fit items-center text-xs font-normal tracking-tight text-neutral-400/60"
            variant={"ghost"}
            size={"sm"}
            onClick={() => res.refetch()}
          >
            <UpdateIcon
              className={cn(
                "mr-1.5 h-3 w-3",
                res.isFetching && "animate-spin select-none",
              )}
            />
            Refetch
          </Button>
        </div>
        <p className="mt-12 font-medium text-neutral-800/80">{res.data}</p>
      </div>

      <div className="absolute -right-10 -top-10 -z-10 h-24 w-24 rounded-full bg-gray-300" />
      <div className="absolute bottom-0 left-0 -z-20 h-32 w-32 bg-gray-200" />
    </div>
  );
}
