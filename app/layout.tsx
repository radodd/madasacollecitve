import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/components/Navbar";
import Navbar2Button from "@/components/Header/Nav2Button";
import Header from "../components/Header";
export const metadata: Metadata = {
  title: "Madasa",
  description: "Your digital powerhouse",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* <Header /> */}
        <Navbar />
        {children}
      </body>
    </html>
  );
}
