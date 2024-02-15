import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { getServerSession } from 'next-auth'
import { authOptions } from '@/utils/authOptions'
import Navbar from "@/components/Navbar";
import { Session } from "next-auth";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user:Session = await getServerSession(authOptions) as Session
  return (
    <html lang="en">
      <body className={inter.className}>
        {(user == undefined) ? "not signed in" : 
          <Navbar user={user}/>
        }
        {children}
      </body>
    </html>
  );
}
