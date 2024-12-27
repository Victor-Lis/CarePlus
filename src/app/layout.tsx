import type { Metadata } from "next";
import { Quicksand, Dosis } from "next/font/google";
import "./globals.css";

import { SessionProvider } from "next-auth/react";

import Header from "@/components/global/Header";
import { AuthProvider } from "@/providers/auth";

const dosisFont = Dosis({
  variable: "--font-dosis",
  subsets: ["latin"],
  weight: ["500"],
});

export const metadata: Metadata = {
  title: "Care+",
  description: "Com a gente você se sente mais leve!",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${dosisFont.className} antialiased`}>
        <AuthProvider>
          <Header />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
