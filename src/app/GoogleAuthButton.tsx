"use client";

import React from "react";
import { signIn } from "next-auth/react";

import { Button } from "~/components/ui/button";

export default function GoogleAuthButton() {
  return (
    <Button
      className="h-16 w-full"
      onClick={() => signIn("google", { redirectTo: "/dashboard" })}
    >
      Login with Google
    </Button>
  );
}
