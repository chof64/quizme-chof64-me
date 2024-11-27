import React from "react";
import Link from "next/link";

import { Button } from "~/components/ui/button";

export default function Home() {
  return (
    <div className="container max-w-md">
      <section className="mt-16">
        <h1 className="typo--h1 text-balance text-center">
          Gamify learning with quizzes on a wide range of topics.
        </h1>
        <p className="typo--lead mt-6 text-center">
          Test your knowledge with quizzes on a wide range of topics. Select one
          and start.
        </p>
        <div className="mx-auto mt-8 w-fit">
          <Button asChild>
            <Link href="/dashboard">Start Learning</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
