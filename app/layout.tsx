import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Navbar2Button from "@/components/Header/Nav2Button";
import Header from "../components/Header";
import { NavProvider } from "../context/NavContext";
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
        <NavProvider>
          <Header />
          {children}
        </NavProvider>
      </body>
    </html>
  );
}
{
  /* <Navbar /> */
}
