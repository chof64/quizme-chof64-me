import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const quizRouter = createTRPCRouter({
  question: publicProcedure
    .input(
      z.object({
        category: z.string().default("any"),
        limit: z.number().default(10),
      }),
    )
    .query(async ({ input }) => {
      const req = await fetch(
        `https://the-trivia-api.com/v2/questions?limit=${input.limit}&type=text_choice`,
      );

      const questions = (await req.json()) as Questions[];

      questions.forEach((question) => {
        question.choices = [
          ...question.incorrectAnswers,
          question.correctAnswer,
        ].sort(() => Math.random() - 0.5);
      });

      return questions;
    }),

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

  tagByQuestions: publicProcedure
    .input(
      z.object({
        limit: z.number().default(10),
      }),
    )
    .query(async ({ input }) => {
      const req = await fetch(`https://the-trivia-api.com/v2/totals-per-tag`);

      const tags = (await req.json()) as Record<string, number>;

      const sortedTags = Object.entries(tags).sort((a, b) => b[1] - a[1]);

      sortedTags.forEach((tag) => {
        tag[0] = tag[0].replaceAll("_", " ");
      });

      return sortedTags.slice(0, input.limit === 0 ? undefined : input.limit);
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
