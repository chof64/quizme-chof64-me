import React from "react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { auth } from "~/server/auth";

import { Button } from "~/components/ui/button";

import GoogleAuthButton from "./GoogleAuthButton";

export default async function Home() {
  const session = await auth();
  if (session) redirect("/dashboard");

  return (
    <div className="container my-24 flex min-h-[calc(100vh-12rem)] max-w-md flex-col-reverse items-center justify-between">
      <section className="w-full space-y-4">
        <h1 className="typo--h1 text-balance pb-24 text-muted-foreground">
          <span className="text-foreground">Learn something new today.</span>{" "}
          Take a quiz about a wide range of topics.
        </h1>
        <Button className="h-16 w-full" variant={"secondary"} asChild>
          <Link href="/quiz">Start an anonymous quiz</Link>
        </Button>
        <GoogleAuthButton />
      </section>
    </div>
  );
}
