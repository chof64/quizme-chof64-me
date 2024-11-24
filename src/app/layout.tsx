import "~/styles/globals.css";

import { Crimson_Pro, Inter, Roboto_Serif } from "next/font/google";
import { TRPCReactProvider } from "~/trpc/react";

import Header from "~/components/Header";

const inter = Inter({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-inter",
});

const robotoSerif = Roboto_Serif({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-roboto-serif",
});

const crimsonPro = Crimson_Pro({
  display: "swap",
  subsets: ["latin"],
  variable: "--font-crimson-pro",
});

export const metadata = {
  title: "QuizMe",
  description:
    "A quiz app that lets you test your knowledge. Gamify learning with quizzes on a wide range of topics.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${robotoSerif.variable} ${crimsonPro.variable} antialiased}`}
    >
      <body>
        <TRPCReactProvider>
          <Header />
          <main>{children}</main>
        </TRPCReactProvider>
      </body>
    </html>
  );
}
