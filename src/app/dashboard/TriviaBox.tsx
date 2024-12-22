"use client";

import React from "react";
import { api } from "~/trpc/react";
import { ChevronsRightIcon } from "lucide-react";

import { Button } from "~/components/ui/button";

export default function TriviaBox() {
  const triviaData = api.trivia.date.useQuery({
    month: new Date().getMonth() + 1,
    day: new Date().getDate(),
  });

  return (
    <div>
      <div className="rounded-xl border border-foreground/60 p-5">
        <h2 className="text-xs font-medium text-neutral-500">
          Did you know that...
        </h2>
        <p className="typo--p !mt-1.5">{triviaData.data}</p>
      </div>
      <div className="mt-2 inline-flex w-full items-center justify-end gap-4">
        <Button
          className="rounded-xl"
          size={"sm"}
          onClick={() => void triviaData.refetch()}
        >
          Next{" "}
          {triviaData.isLoading ? <>asdf</> : <ChevronsRightIcon size={6} />}
        </Button>
      </div>
    </div>
  );
}
