"use client";

import React from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";

import { cn } from "~/lib/utils";

import BackNav from "./BackNav";

export default function Header() {
  const [hasScrolled, setHasScrolled] = React.useState(false);

  const { data: session } = useSession();

  React.useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 75) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="container fixed inset-x-0 top-0 z-50 grid h-14 w-full max-w-md grid-cols-3 items-center bg-background">
      <section>
        <BackNav />
      </section>
      <section>
        <div
          className={cn(
            "text-center transition-all delay-100 duration-500 ease-in-out",
            hasScrolled ? "typo--h3" : "typo--h1"
          )}
        >
          <Link href={session ? "/dashboard" : "/"}>quizme</Link>
        </div>
      </section>
      <section></section>
    </header>
  );
}
