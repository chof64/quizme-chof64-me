import React from "react";
import { api, HydrateClient } from "~/trpc/server";

import Greetings from "~/components/Greetings";

import QuizTags from "./QuizTags";
import TriviaBox from "./TriviaBox";

export default async function LearnPage() {
  await api.trivia.date.prefetch({
    month: new Date().getMonth() + 1,
    day: new Date().getDate(),
  });

  return (
    <div className="container my-8 max-w-md">
      <section className="mt-8">
        <p className="text-sm text-neutral-500">
          <Greetings />
        </p>
        <h1 className="typo--h2">Let&apos;s study together</h1>
      </section>
      <section className="mt-8">
        <HydrateClient>
          <TriviaBox />
        </HydrateClient>
      </section>
      <section className="mt-8">
        <h2 className="typo--h3">Quiz</h2>
        <QuizTags />
      </section>
    </div>
  );
}
