import React from "react";
import Image from "next/image";
import Link from "next/link";

export default async function QuizTags() {
  return (
    <div className="mt-4 flex flex-col gap-2">
      <div className="overflow-clip rounded-3xl">
        <Link href={`/quiz`}>
          <div className="rounded-3xl border-2 bg-muted/40 p-4 py-5">
            <div className="flex items-center gap-2">
              <div className="relative aspect-square w-14 rounded-full border-2 border-muted">
                <Image
                  className="rounded-full object-cover"
                  src={`/tags/all.jpg`}
                  fill
                  alt={`All picture`}
                />
              </div>
              <div>
                <h4 className="text-sm font-semibold tracking-tight">
                  Random Quiz
                </h4>
                <p className="text-xs leading-tight text-muted-foreground/80">
                  Take a quiz on random topics covering a variety of subjects.
                </p>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
