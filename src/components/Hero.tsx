"use client";

import Link from "next/link";

interface HeroProps {
  title: string;
  tagline: string;
  ctaText?: string;
  ctaHref?: string;
  background?: "light" | "dark";
}

export default function Hero({
  title,
  tagline,
  ctaText = "Book a Visit",
  ctaHref = "/contact",
  background = "light",
}: HeroProps) {
  const bgClass =
    background === "light" ? "bg-amber-50" : "bg-green-900 text-white";

  return (
    <section className={`${bgClass} py-20 px-4 sm:px-6 lg:px-8`}>
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          {title}
        </h1>
        <p className="text-xl sm:text-2xl mb-8 leading-relaxed opacity-90">
          {tagline}
        </p>
        <Link
          href={ctaHref}
          className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
        >
          {ctaText}
        </Link>
      </div>
    </section>
  );
}
