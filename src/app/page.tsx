import React from "react";
import Greetings from "~/components/Greetings";
import Trivia from "~/components/Trivia";
import TopTags from "~/components/TopTags";

export default function Home() {
  return (
    <main className="mx-auto max-w-md">
      <section className="mt-16">
        <div className="container">
          <p className="text-sm text-neutral-500">
            <Greetings />
          </p>
          <h1 className="text-2xl font-semibold tracking-tight">
            Let&apos;s study together
          </h1>
        </div>
      </section>

      <section className="container my-16 mt-24">
        <Trivia />
      </section>

      <section className="my-16">
        <TopTags />
      </section>
    </main>
  );
}
