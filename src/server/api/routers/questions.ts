import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const questionsRouter = createTRPCRouter({
  single: publicProcedure.query(async () => {
    const req = await fetch("https://the-trivia-api.com/v2/questions?limit=1");
    const questions = (await req.json()) as Questions[];

    if (!questions?.[0]) {
      throw new Error("No questions found");
    }

    questions[0].choices = [
      ...questions[0].incorrectAnswers,
      questions[0].correctAnswer,
    ].sort(() => Math.random() - 0.5);

    return questions;
  }),
});

type Questions = {
  category: string;
  id: string;
  correctAnswer: string;
  incorrectAnswers: string[];
  question: {
    text: string;
  };
  tags: string[];
  type: string;
  choices: string[];
  difficulty: string;
  regions: unknown[];
  isNiche: boolean;
};
