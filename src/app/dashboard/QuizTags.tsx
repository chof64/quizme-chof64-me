import React from "react";
import Image from "next/image";
import Link from "next/link";
import { api } from "~/trpc/server";

import { spaceToUnderscore } from "~/lib/spaceToUnderscore";

export default async function QuizTags() {
  const categories = await api.quiz.tagByQuestions({ limit: 10 });

  return (
    <div className="mt-6 flex flex-col gap-2">
      {categories.map((category: [string, number]) => (
        <Link
          href={`/quiz?tag=${spaceToUnderscore(category[0])}`}
          key={category[0]}
        >
          <div className="flex h-32 items-center rounded-l-md rounded-r-xl border">
            <div className="relative h-full w-40 shrink-0 rounded-l-md">
              <Image
                className="rounded-l-md object-cover"
                src={`/tags/${spaceToUnderscore(category[0])}.jpg`}
                fill
                alt={`${category[0]} picture`}
              />
            </div>
            <div className="inline-flex h-full w-full flex-col justify-center rounded-r-xl bg-white py-4 pl-6 pr-4">
              <h4 className="font-medium uppercase">{category[0]}</h4>
              <p className="text-xs text-muted-foreground/80">
                {category[1]} questions
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
