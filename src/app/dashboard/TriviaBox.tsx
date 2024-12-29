"use client";

import React from "react";
import Link from "next/link";
import { api } from "~/trpc/react";
import { LightbulbIcon, Repeat2Icon, Share2Icon } from "lucide-react";

import { Button } from "~/components/ui/button";

export default function TriviaBox() {
  const triviaData = api.trivia.daily.useQuery(
    {
      month: new Date().getMonth() + 1,
      day: new Date().getDate(),
    },
    {
      enabled: false,
    }
  );

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Trivia of the Day",
          text: triviaData.data?.quote,
          url: `${window.location.hostname}/trivia/${triviaData.data?.id}`,
        });
        console.log("Trivia shared successfully!");
      } catch (error) {
        console.info("Error sharing the trivia: ", error);
      }
    } else {
      alert("Your browser doesn't support the Share feature.");
    }
  };

  return (
    <div className="rounded-3xl border-2 bg-muted/20 p-5">
      <div className="inline-flex items-center gap-1.5">
        <LightbulbIcon className="!size-4 stroke-muted-foreground !stroke-2" />
        <h3 className="typo--h3 !text-xs !font-medium tracking-tight text-muted-foreground">
          Did you know?
        </h3>
      </div>
      <p className="typo--h4 mt-2.5 !text-base !font-medium tracking-tight text-muted-foreground">
        <Link className="rounded-3xl" href={`/trivia/${triviaData.data?.id}`}>
          {triviaData.data?.quote}
        </Link>
      </p>
      <div className="mt-6 flex items-center justify-between">
        <Button
          className="rounded-3xl shadow-none"
          variant={"secondary"}
          size={"lg"}
          onClick={() => triviaData.refetch()}
        >
          <Repeat2Icon className="!size-5 stroke-muted-foreground !stroke-2" />
        </Button>
        <Button
          className="rounded-3xl shadow-none"
          variant={"secondary"}
          size={"lg"}
          onClick={() => handleShare()}
        >
          <Share2Icon className="!size-5 stroke-muted-foreground !stroke-2" />
        </Button>
      </div>
    </div>
  );
}
