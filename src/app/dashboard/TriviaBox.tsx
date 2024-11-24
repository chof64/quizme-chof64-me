import React from "react";
import { api, HydrateClient } from "~/trpc/server";

import TriviaBoxRender from "./TriviaBoxRender";

export default async function TriviaBox() {
  const trivia = await api.trivia.date({
    month: new Date().getMonth() + 1,
    day: new Date().getDate(),
  });

  return (
    <HydrateClient>
      <TriviaBoxRender trivia={trivia} />
    </HydrateClient>
  );
}
