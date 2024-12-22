import type { Metadata } from "next";
import { Quicksand, Dosis } from "next/font/google";
import "./globals.css";

import Header from "@/components/Header";

const dosisFont = Dosis({
  variable: "--font-dosis",
  subsets: ["latin"],
  weight: ["500"],
});

export const metadata: Metadata = {
  title: "Care+",
  description: "Com a gente você se sente mais leve!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${dosisFont.className} antialiased`}
      >
              <Header/>
        {children}
      </body>
    </html>
  );
}
