import { AppBar, Toaster } from "@repo/ui/components";
import "@repo/ui/globals.css";
import type { Metadata } from "next";
import { getServerSession } from "next-auth";
import { Inter } from "next/font/google";
import { NEXT_AUTH_CONFIG } from "../lib/auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CryptoGig",
  description: "Where talent meets blockchain: revolutionizing freelance.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(NEXT_AUTH_CONFIG);
  return (
    <html lang="en">
      <body className={inter.className}>
        <Toaster/>
        <AppBar session={session}/>
          {children}
        </body>
    </html>
  );
}
