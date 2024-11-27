"use client";

import React, { useState } from "react";
import { api } from "~/trpc/react";
import { ChevronsRightIcon, RefreshCcwIcon } from "lucide-react";

import { Button } from "~/components/ui/button";

export default function TriviaBoxRender({ trivia }: { trivia: string }) {
  const [currentTrivia, setCurrentTrivia] = useState(trivia);

  const refreshTrivia = api.trivia.date.useQuery(
    {
      month: new Date().getMonth() + 1,
      day: new Date().getDate(),
    },
    {
      enabled: false,
    }
  );

  const refresh = async () => {
    void (await refreshTrivia.refetch());
    setCurrentTrivia(
      refreshTrivia.data ??
        "Want to learn something new? Check out the next one!"
    );
  };

  return (
    <>
      <div className="rounded-xl border border-foreground/60 p-5">
        <h2 className="text-xs font-medium text-neutral-500">
          Did you know that...
        </h2>
        <p className="typo--p !mt-1.5">{currentTrivia}</p>
      </div>
      <div className="mt-2 inline-flex w-full items-center justify-end gap-4">
        <Button
          className="rounded-xl"
          size={"sm"}
          onClick={() => void refresh()}
        >
          Next <ChevronsRightIcon size={6} />
        </Button>
      </div>
    </>
  );
}
