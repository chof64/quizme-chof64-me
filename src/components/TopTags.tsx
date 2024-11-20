"use client";

import React from "react";
import Link from "next/link";
import { api } from "~/trpc/react";

import { Button } from "~/components/ui/button";

export default function TopTags() {
  const tags = api.quiz.tagByQuestions.useQuery(
    { limit: 5 },
    {
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
    }
  );

  return (
    <div className="container">
      <h2 className="text-xl font-medium tracking-tight">Quiz</h2>
      <p className="text-sm text-neutral-400/80">
        Test your knowledge with a quiz on a wide range of topics. Select one
        and start.
      </p>

      <div className="mt-4 flex w-full flex-col items-center justify-center gap-3">
        {tags.data?.map((tag: [string, number]) => (
          <div
            className="relative w-full overflow-hidden rounded-md"
            key={tag[0]}
          >
            <Link href="/quiz">
              <Button
                className="group h-12 w-full items-center justify-between rounded-md border border-gray-200/60 bg-gray-100/40 backdrop-blur-md hover:border-gray-400/60 hover:bg-gray-50/40"
                variant={"secondary"}
              >
                <span className="uppercase">
                  {tag[0]}
                  <span className="ml-2 text-xs font-light text-neutral-400">
                    (
                    {tag[1].toLocaleString("en-US", {
                      maximumFractionDigits: 0,
                    })}
                    )
                  </span>
                </span>
                <span className="-translate-x-2 text-xs font-light text-neutral-400 transition delay-75 duration-200 ease-in-out group-hover:translate-x-0">
                  --&gt;
                </span>
              </Button>
            </Link>
            <div className="absolute -right-10 -top-10 -z-10 h-24 w-24 rounded-full bg-gray-300" />
          </div>
        ))}
        <div className="relative w-full overflow-hidden rounded-md">
          <Link href="/quiz">
            <Button
              className="group h-12 w-full items-center justify-between rounded-md border border-gray-200/60 bg-gray-100/40 backdrop-blur-md hover:border-gray-400/60 hover:bg-gray-50/40"
              variant={"secondary"}
            >
              <span className="uppercase">ANY TOPIC</span>
              <span className="-translate-x-2 text-xs font-light text-neutral-400 transition delay-75 duration-200 ease-in-out group-hover:translate-x-0">
                --&gt;
              </span>
            </Button>
          </Link>
          <div className="absolute -right-10 -top-10 -z-10 h-24 w-24 rounded-full bg-gray-300" />
        </div>
      </div>
    </div>
  );
}
