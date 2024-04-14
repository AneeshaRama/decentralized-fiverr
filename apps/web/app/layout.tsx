import { AppBar } from "@repo/ui/components";
import "@repo/ui/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CryptoGig",
  description: "Where talent meets blockchain: revolutionizing freelance.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <AppBar/>
        {children}
      </body>
    </html>
  );
}
