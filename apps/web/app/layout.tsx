import { AppBar } from "@repo/ui/components";
import "@repo/ui/globals.css";
import { useGetUser } from "@repo/ui/hooks";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { redirect } from "next/navigation";

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
  const session = await useGetUser();
  return (
    <html lang="en">
      <body className={inter.className}>
      <AppBar session={session}/>
        {children}
      </body>
    </html>
  );
}
