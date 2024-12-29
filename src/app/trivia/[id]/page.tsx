import React from "react";
import { redirect } from "next/navigation";
import { api } from "~/trpc/server";

export default async function TrivaById() {
  return redirect("/");
}
