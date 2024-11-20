import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { z } from "zod";

export const triviaRouter = createTRPCRouter({
  date: publicProcedure
    .input(z.object({ month: z.number(), day: z.number() }))
    .query(async ({ input }) => {
      const req = await fetch(
        `http://numbersapi.com/${input.month}/${input.day}/date`
      );

      return req.text();
    }),
});
