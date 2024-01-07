"use client";

import { api } from "~/trpc/react";
import { useEffect, useState } from "react";
import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";

export default function Choose() {
  const [triggerRefetch, setTriggerRefetch] = useState(0);
  const [hasAnswered, setHasAnswered] = useState(false);

  const questions = api.questions.single.useQuery(undefined, {
    refetchInterval: false,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });
  const { data, refetch } = questions;

  useEffect(() => {
    const timer = setTimeout(() => {
      void refetch();
    }, 1500);
    return () => clearTimeout(timer);
  }, [triggerRefetch, refetch]);

  useEffect(() => {
    setHasAnswered(false);
  }, [data]);

  if (!data?.[0]) {
    async () => await refetch();
    return;
  }

  const isAnswer = (choice: string) => {
    return choice === data[0]?.correctAnswer;
  };

  const onChoice = (_choice: string) => {
    if (hasAnswered) {
      return;
    }
    setHasAnswered(true);
    setTriggerRefetch(triggerRefetch + 1);
  };

  const choicesStyle = (choice: string) => {
    if (!hasAnswered) {
      return "";
    }

    if (isAnswer(choice)) {
      return "bg-green-200 hover:bg-green-300";
    } else {
      return "bg-red-200 hover:bg-red-300";
    }
  };

  return (
    <main>
      <section className="my-16">
        <div className="container max-w-screen-sm">
          <h1 className="text-lg font-medium text-neutral-800">Choose</h1>
          <p className="text-sm text-neutral-500">
            Test your knowledge by answwering the questions. You can answer as
            many questions as you like.
          </p>
          <p className="text-xs text-neutral-400">
            After you have answered a question, we&apos;ll show you the correct
            answer and fetch a new question for you.
          </p>
        </div>
      </section>

      <section className="my-8">
        <div className="container max-w-screen-sm">
          <div className="min-h-48 rounded-xl bg-gray-900 p-4 pt-8">
            <h2 className="text-center font-serif text-xl font-semibold text-white">
              {data[0].question.text}
            </h2>
          </div>
        </div>
      </section>

      <section className="my-8">
        <div className="container grid max-w-screen-sm grid-cols-1 gap-4">
          {data[0].choices.map((choice) => (
            <Button
              className={cn(
                "h-fit min-h-24 text-wrap border border-neutral-400 bg-white px-4 text-black shadow-none hover:bg-gray-100",
                choicesStyle(choice),
              )}
              key={choice}
              onClick={() => onChoice(choice)}
            >
              {choice}
            </Button>
          ))}
        </div>
      </section>
    </main>
  );
}
