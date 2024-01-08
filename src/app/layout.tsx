import "~/styles/globals.css";

import { Inter, Roboto_Serif, Crimson_Pro } from "next/font/google";
import { cookies } from "next/headers";
import Header from "~/components/Header";
import { TRPCReactProvider } from "~/trpc/react";

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
        <TRPCReactProvider cookies={cookies().toString()}>
          <Header />
          {children}
        </TRPCReactProvider>
      </body>
    </html>
  );
}
