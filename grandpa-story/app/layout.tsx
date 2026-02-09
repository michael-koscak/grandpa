import type { Metadata } from "next";
import { Playfair_Display, Source_Serif_4, Source_Sans_3 } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import EnvDebug from "@/components/debug/EnvDebug";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const sourceSerif = Source_Serif_4({
  variable: "--font-source-serif",
  subsets: ["latin"],
  display: "swap",
});

const sourceSans = Source_Sans_3({
  variable: "--font-source-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "My Life Story | Mark F. Koscak",
  description: "A memoir documenting the Koscak family's origin and history, from Slovenia through war and immigration to America.",
  openGraph: {
    title: "My Life Story | Mark F. Koscak",
    description: "A memoir documenting the Koscak family's origin and history, from Slovenia through war and immigration to America.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${playfair.variable} ${sourceSerif.variable} ${sourceSans.variable} antialiased`}
      >
        <Header />
        <main>{children}</main>
        <EnvDebug />
      </body>
    </html>
  );
}
