import "~/styles/globals.css";

import { type Metadata } from "next";
import { Inter } from "next/font/google";
import { TRPCReactProvider } from "~/trpc/react";
import { SessionProvider } from "next-auth/react";

import Header from "~/components/header/Header";

const inter = Inter({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "QuizMe",
  description:
    "A quiz app that lets you test your knowledge. Gamify learning with quizzes on a wide range of topics.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body>
        <TRPCReactProvider>
          <SessionProvider>
            <Header />
          </SessionProvider>
          <main>{children}</main>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
