import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { z } from "zod";

import { hashStringMD5 } from "~/lib/hashStringMD5";

export const triviaRouter = createTRPCRouter({
  daily: publicProcedure
    .input(z.object({ month: z.number(), day: z.number() }))
    .query(async ({ ctx, input }) => {
      const res = await (
        await fetch(`http://numbersapi.com/${input.month}/${input.day}/date`)
      ).text();

      const dbRes = await ctx.db.triviaDaily.findUnique({
        where: {
          id: hashStringMD5(res),
        },
      });

      if (!dbRes) {
        return await ctx.db.triviaDaily.create({
          data: {
            id: hashStringMD5(res),
            dateMonth: input.month,
            dateDay: input.day,
            quote: res,
          },
        });
      }

      return dbRes;
    }),
});
