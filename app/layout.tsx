import type { Metadata } from "next";

import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";

import MainWrapper from "@/components/layout/MainWrapper";

import "./globals.css";
import ClientAuthWrapper from "@/components/layout/ClientAuthWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Matrimony App",
  description: "Find your perfect match",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/svg+xml"
          href="data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Cpath fill='%23FF3366' d='M16 27s-10-6.667-10-14c0-4 3-7 7-7 2.333 0 4 1.167 5.333 2.917C20 7.167 21.667 6 24 6c4 0 7 3 7 7 0 7.667-10 14-10 14z'/%3E%3C/svg%3E"
        />
      </head>
      <body className={inter.className}>
        <MainWrapper>
          <ClientAuthWrapper>{children}</ClientAuthWrapper>
        </MainWrapper>
        <Toaster />
      </body>
    </html>
  );
}
