import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Navbar2Button from "@/components/Header/Nav2Button";
import Header from "../components/Header";
import { NavProvider } from "../context/NavContext";
import { Toaster } from "react-hot-toast";
import {
  WithContext,
  Organization,
  PostalAddress,
  ContactPoint,
  Person,
} from "schema-dts";
import Script from "next/script";

export const metadata: Metadata = {
  title: {
    default: "Madasa Collective",
    template: "%s - Madasa Collective",
  },
  description: "Your digital powerhouse",
};

const jsonLd: WithContext<Organization> = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Madasa Collective",
  description: "Description of your freelance web development business.",
  url: "https://www.madasacollective.com",
  logo: "/logo/short.png",

  sameAs: ["https://www.linkedin.com/company/madasa-collective"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Santa Barbara",
    addressRegion: "California",
    addressCountry: "USA",
  },
  keywords: [
    "freelance",
    "web design",
    "web development",
    "branding",
    "logo",
    "SEO",
  ],
  founder: [
    {
      "@type": "Person",
      name: "Ethan Flores",
      url: "https://www.linkedin.com/in/ethanf-flores/",
    },
    {
      "@type": "Person",
      name: "Serina Zepeda",
      url: "https://www.linkedin.com/in/serina-zepeda/",
    },
  ],
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
          {/* JSON-LD script */}
          <Script
            id="json-ld-schema"
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
        </NavProvider>
      </body>
    </html>
  );
}
{
  /* <Navbar /> */
}
