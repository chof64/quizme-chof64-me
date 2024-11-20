"use client";

import { useState } from "react";
import { api } from "~/trpc/react";

import { Button } from "~/components/ui/button";
import { cn } from "~/lib/utils";

export default function Choose() {
  const [hasAnswered, setHasAnswered] = useState(false);
  const [answer, setAnswer] = useState("");

  const questions = api.quiz.question.useQuery(
    { limit: 1 },
    {
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
    }
  );

  if (!questions.data?.[0]) {
    void questions.refetch();
    return;
  }

  const isAnswer = (choice: string) => {
    return choice === questions.data[0]?.correctAnswer;
  };

  const hasSelected = (choice: string) => {
    if (hasAnswered) {
      return;
    }

    setAnswer(choice);
    setHasAnswered(true);

    setTimeout(() => {
      setHasAnswered(false);
      void questions.refetch();
    }, 5000);
    return;
  };

  const choiceStyle = (choice: string) => {
    if (choice === answer) {
      return isAnswer(choice)
        ? "border-green-500/60 bg-green-300/40 hover:border-green-600/60 hover:bg-green-400/40"
        : "border-red-500/60 bg-red-300/40 hover:border-red-600/60 hover:bg-red-400/40";
    }

    if (hasAnswered) {
      return isAnswer(choice)
        ? "border-green-300/60 bg-green-100/40 hover:border-green-400/60 hover:bg-green-200/40"
        : "border-red-300/60 bg-red-100/40 hover:border-red-400/60 hover:bg-red-200/40";
    }
    return "";
  };

  return (
    <main className="mx-auto max-w-md">
      <section className="my-8 mt-16">
        <div className="container">
          <div
            className={cn(
              "pattern-random-shapes mt-2 rounded-xl border border-neutral-200/60 bg-white p-8 pt-4",
              hasAnswered
                ? isAnswer(answer)
                  ? "bg-green-100/40"
                  : "bg-red-100/40"
                : ""
            )}
          >
            <p className="text-xs">
              {questions.data[0].category.replaceAll("_", " ")}
            </p>
            <h2 className="mt-3 text-xl font-semibold">
              {questions.data[0].question.text}
            </h2>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-4">
            {questions.data[0].choices.map((choice) => (
              <Button
                className={cn(
                  "h-fit min-h-12 items-center justify-start border-neutral-300/60 bg-gray-100/40 px-4 shadow-none hover:border-neutral-400/60 hover:bg-gray-200/40",
                  choiceStyle(choice)
                )}
                variant={"outline"}
                onClick={() => hasSelected(choice)}
                key={choice}
              >
                <span className="mr-2">
                  {hasAnswered ? (isAnswer(choice) ? "✅" : "❌") : "⚫️"}
                </span>
                <span className="text-wrap text-left">{choice}</span>
              </Button>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
