import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  return [
    {
      url: "https://madasacollective.com/our-team",
    },
    {
      url: "https://madasacollective.com/contact-us",
    },
  ];
}
