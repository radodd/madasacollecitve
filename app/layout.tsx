import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
// import { NavProvider } from "../context/NavContext";
import { Toaster } from "react-hot-toast";
import { WithContext, Organization } from "schema-dts";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
// import dynamic from "next/dynamic";
import { Suspense, lazy } from "react";

export const metadata: Metadata = {
  metadataBase: new URL("https://madasacolletive.com"),
  title: {
    default: "Madasa Collective",
    template: "%s - Madasa Collective",
  },
  description:
    "Your digital powerhouse that launches your business to their full potential. We specialize in Logo Design and Branding, Web Design, and Web Development.",
  // twitter: {
  //   card: "summary_large_image",
  // },
};

const jsonLd: WithContext<Organization> = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Madasa Collective",
  description:
    "We create digital products that launch businesses to their full potential. Madasa is a Santa Barbara based collective that specializes in web design, web development, logo design, and SEO.",
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

const openSans = Open_Sans({
  weight: ["300", "400", "600", "700"],
  subsets: ["latin"],
});

// const NavProvider = dynamic(() => import("../context/NavContext"));
const LazyNavProvider = lazy(() =>
  import("../context/NavContext").then((module) => ({
    default: module.NavProvider,
  }))
);

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Add Open Graph meta tags */}
        <meta property="og:image" content="/opengraph-image.png" />
        <meta
          property="og:title"
          content="Launch your business to its full potential. We specialize in Branding, Web Design and Development."
        />
        <meta
          property="og:description"
          content="Your digital powerhouse that launches your business to their full potential. We specialize in Logo Design and Branding, Web Design, and Web Development."
        />
        {/* Add more Open Graph meta tags as needed */}
      </head>
      <body className={openSans.className}>
        <Suspense fallback={<div>Loading NavProvider...</div>}>
          <LazyNavProvider>
            <Header />
            {children}
            <Toaster position="top-right" />
            {/* JSON-LD script */}
            <Script
              id="json-ld-schema"
              type="application/ld+json"
              dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Analytics />
            <SpeedInsights />
          </LazyNavProvider>
        </Suspense>
      </body>
    </html>
  );
}
