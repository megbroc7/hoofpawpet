import { Metadata } from "next";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://www.hoofpawpet.com";
const businessName = "Hoof & Paw Pet Services";
const businessDescription =
  "Professional pet sitting and horse care in Broward County, Florida. Dog walking, cat sitting, pet care, and horse turnout services in Plantation, Davie, Cooper City, Sunrise, and Southwest Ranches.";

export function createMetadata(overrides: Metadata = {}): Metadata {
  return {
    title: businessName,
    description: businessDescription,
    metadataBase: new URL(baseUrl),
    openGraph: {
      type: "website",
      locale: "en_US",
      url: baseUrl,
      title: businessName,
      description: businessDescription,
      siteName: businessName,
    },
    twitter: {
      card: "summary_large_image",
      title: businessName,
      description: businessDescription,
    },
    ...overrides,
  };
}

export function createPageMetadata(
  title: string,
  description: string,
  overrides: Metadata = {}
): Metadata {
  return createMetadata({
    title: `${title} | ${businessName}`,
    description,
    openGraph: {
      title,
      description,
      type: "website",
    },
    ...overrides,
  });
}
