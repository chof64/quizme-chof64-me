import React from "react";
import { redirect } from "next/navigation";
import { auth } from "~/server/auth";
import { api, HydrateClient } from "~/trpc/server";

import QuizTags from "./QuizTags";
import TriviaBox from "./TriviaBox";

export default async function LearnPage() {
  const session = await auth();
  if (!session) redirect("/");

  await api.trivia.date.prefetch({
    month: new Date().getMonth() + 1,
    day: new Date().getDate(),
  });

  return (
    <div className="container my-24 max-w-md">
      <section className="mt-52">
        <h2 className="typo--h1 text-muted-foreground">
          Another day, another opportunity to{" "}
          <span className="text-foreground">learn something new.</span>
        </h2>
      </section>
      <section className="mt-16">
        <HydrateClient>
          <TriviaBox />
        </HydrateClient>
      </section>
      <section className="mt-16">
        <h2 className="typo--h4">Test your knowledge</h2>
        <QuizTags />
      </section>
    </div>
  );
}
