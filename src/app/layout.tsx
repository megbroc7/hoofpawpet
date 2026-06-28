import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StructuredData from "@/components/StructuredData";
import { websiteSchema } from "@/lib/structured-data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-lora",
});

export const metadata: Metadata = {
  title: {
    default: "Hoof & Paw Pet Services | Pet Sitting & Horse Care in Broward County",
    template: "%s | Hoof & Paw Pet Services",
  },
  description:
    "Personal pet sitting and horse care by Sheryl in Broward County, FL. Dog walking, cat sitting, overnight care, and horse turnout in Plantation, Davie, Cooper City, Sunrise, and Southwest Ranches.",
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || "https://www.hoofpawpet.com"
  ),
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Hoof & Paw Pet Services",
    images: [
      {
        url: "/images/dog-walking.jpg",
        width: 1200,
        height: 630,
        alt: "Hoof & Paw Pet Services — dog walking and pet care in Broward County, FL",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hoof & Paw Pet Services | Pet Sitting & Horse Care in Broward County",
    description:
      "Personal pet sitting and horse care by Sheryl in Broward County, FL.",
    images: ["/images/dog-walking.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${lora.variable} antialiased`}>
      <body className="min-h-screen flex flex-col bg-warm-white text-body-text font-sans">
        <StructuredData data={websiteSchema()} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
