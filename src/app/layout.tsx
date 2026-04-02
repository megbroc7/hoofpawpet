import type { Metadata } from "next";
import { Inter, Lora } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

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
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Hoof & Paw Pet Services",
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
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
