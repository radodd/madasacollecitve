import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Navbar2Button from "@/components/Header/Nav2Button";
import Header from "../components/Header";
import { NavProvider } from "../context/NavContext";
import { Toaster } from "react-hot-toast";

export const metadata: Metadata = {
  title: {
    default: "Madasa Collective",
    template: "%s - Madasa Collective",
  },
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
          <Toaster position="top-right" />
        </NavProvider>
      </body>
    </html>
  );
}
{
  /* <Navbar /> */
}
