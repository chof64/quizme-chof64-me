"use client";

import React from "react";

export default function Greetings() {
  const hour = new Date().getHours();
  const greeting =
    hour >= 0 && hour < 12
      ? "Good morning"
      : hour >= 12 && hour < 18
        ? "Good afternoon"
        : "Good evening";

  return <>{greeting}</>;
}
