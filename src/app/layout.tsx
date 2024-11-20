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
  title: "Study Buddy",
  description: "Study Buddy to help you learn new things.",
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
          {children}
        </TRPCReactProvider>
      </body>
    </html>
  );
}
