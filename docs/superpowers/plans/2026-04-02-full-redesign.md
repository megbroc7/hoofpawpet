# Hoof & Paw Full Website Redesign — Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Completely redesign hoofpawpet.com with the Soft Sage brand identity, mobile-first layout, real photo placeholders, location-based SEO pages, and personal tone centered on Sheryl.

**Architecture:** Static site using Next.js 16 App Router with Tailwind CSS 4. All pages are server components except interactive elements (mobile menu, FAQ accordion, contact form). Content lives in TypeScript data files. Structured data via JSON-LD script tags. Dynamic routes for `/areas/[city]` and `/blog/[slug]`.

**Tech Stack:** Next.js 16.2.2, React 19, Tailwind CSS 4, TypeScript 5

**Spec:** `docs/superpowers/specs/2026-04-02-full-redesign-design.md`

**IMPORTANT — Next.js 16 Notes:**
- `params` in page components is a `Promise` — must be awaited
- Font setup uses `className` property directly (see `node_modules/next/dist/docs/01-app/01-getting-started/13-fonts.md`)
- Sitemap uses `MetadataRoute.Sitemap` type (see `node_modules/next/dist/docs/01-app/03-api-reference/03-file-conventions/01-metadata/sitemap.md`)
- Read relevant docs in `node_modules/next/dist/docs/` if uncertain about any API

---

## File Structure

```
src/
  app/
    globals.css              — MODIFY: new palette, typography, Tailwind theme
    layout.tsx               — MODIFY: new fonts (Lora + Inter), updated metadata
    page.tsx                 — REWRITE: service-forward homepage
    about/page.tsx           — CREATE: Meet Sheryl page
    services/page.tsx        — REWRITE: photo-based service cards
    areas/
      page.tsx               — CREATE: areas hub with city cards
      [city]/page.tsx        — CREATE: dynamic location pages
    contact/page.tsx         — REWRITE: phone-first + working form
    faq/page.tsx             — REWRITE: animated accordion + structured data
    blog/page.tsx            — REWRITE: refreshed card grid
    blog/[slug]/page.tsx     — REWRITE: refreshed reading layout
    sitemap.ts               — CREATE: dynamic XML sitemap
  components/
    Header.tsx               — REWRITE: sticky, mobile menu, tap-to-call
    Footer.tsx               — REWRITE: new layout with area links
    PhoneCTA.tsx             — CREATE: reusable tap-to-call button
    TrustBar.tsx             — CREATE: trust indicators strip
    ServiceCard.tsx          — REWRITE: photo-based card with expandable details
    TestimonialCard.tsx      — CREATE: quote card
    MeetSherylTeaser.tsx     — CREATE: dark section with photo + quote
    FAQItem.tsx              — REWRITE: animated accordion
    BlogCard.tsx             — REWRITE: refreshed styling
    CityCard.tsx             — CREATE: for areas hub
    PhotoGrid.tsx            — CREATE: for about page gallery
    ContactForm.tsx          — REWRITE: Formspree integration
    StructuredData.tsx       — CREATE: JSON-LD script component
  content/
    blog.ts                  — KEEP: minor tone updates
    areas.ts                 — CREATE: city data with unique content
    services.ts              — CREATE: service data
    testimonials.ts          — CREATE: testimonial data
  lib/
    metadata.ts              — MODIFY: updated base metadata + helper
    structured-data.ts       — CREATE: JSON-LD generators
  Hero.tsx                   — DELETE: replaced by page-specific heroes
public/
    images/                  — CREATE: placeholder images directory
```

---

## Task 1: Foundation — Global Styles & Typography

**Files:**
- Modify: `src/app/globals.css`
- Modify: `src/app/layout.tsx`

- [ ] **Step 1: Update globals.css with Soft Sage palette and Tailwind theme**

```css
@import "tailwindcss";

:root {
  --color-sage: #7A9B76;
  --color-sage-light: #8fad8b;
  --color-sage-dark: #5f7f5b;
  --color-honey: #D4A574;
  --color-honey-light: #e0bb94;
  --color-forest: #2C3E2D;
  --color-warm-white: #FAF8F5;
  --color-beige: #C8B89A;
  --color-surface: #F0EDE6;
  --color-body-text: #4a5a4a;
}

@theme inline {
  --color-sage: var(--color-sage);
  --color-sage-light: var(--color-sage-light);
  --color-sage-dark: var(--color-sage-dark);
  --color-honey: var(--color-honey);
  --color-honey-light: var(--color-honey-light);
  --color-forest: var(--color-forest);
  --color-warm-white: var(--color-warm-white);
  --color-beige: var(--color-beige);
  --color-surface: var(--color-surface);
  --color-body-text: var(--color-body-text);
  --font-sans: var(--font-inter);
  --font-serif: var(--font-lora);
}

body {
  background: var(--color-warm-white);
  color: var(--color-body-text);
}

html {
  scroll-behavior: smooth;
}

a {
  transition: color 0.2s ease;
}

button {
  transition: all 0.2s ease;
}
```

- [ ] **Step 2: Update layout.tsx with new fonts and metadata**

```tsx
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
```

- [ ] **Step 3: Run dev server to verify fonts load and colors apply**

Run: `cd /Users/meganbroccoli/Desktop/Sabina/Web_Services/HoofPawPet && npm run build`
Expected: Build succeeds with no errors.

- [ ] **Step 4: Commit**

```bash
git add src/app/globals.css src/app/layout.tsx
git commit -m "feat: update brand identity — Soft Sage palette, Lora + Inter fonts"
```

---

## Task 2: Content Data Files

**Files:**
- Create: `src/content/services.ts`
- Create: `src/content/areas.ts`
- Create: `src/content/testimonials.ts`

- [ ] **Step 1: Create services data**

```ts
// src/content/services.ts

export interface Service {
  id: string;
  name: string;
  tagline: string;
  description: string;
  includes: string[];
  image: string; // path to image in public/images/
  imageAlt: string;
}

export const services: Service[] = [
  {
    id: "dog-walking",
    name: "Dog Walking",
    tagline: "Professional daily dog walks",
    description:
      "Keep your dog active and happy with professional dog walking. Sheryl offers flexible session lengths — 20, 30, or 45 minutes — to fit your schedule and your dog's energy level.",
    includes: [
      "Leash walk or yard potty break",
      "Fresh water offered",
      "Waste pickup and cleanup",
      "Paw checks",
      "Basic manners reinforcement",
      "Photo update after visit",
    ],
    image: "/images/dog-walking.jpg",
    imageAlt: "Dog on a walk in a Plantation neighborhood",
  },
  {
    id: "dog-sitting",
    name: "Pet Sitting",
    tagline: "In-home care while you're away",
    description:
      "Leave your dog in trusted hands. Sheryl provides daily in-home visits with exercise, feeding, and companionship — perfect for working professionals or trips away from home.",
    includes: [
      "Multiple daily visits as needed",
      "Exercise and playtime",
      "Feeding and fresh water",
      "Medication administration if needed",
      "Outdoor bathroom breaks",
      "Photo and text updates",
    ],
    image: "/images/pet-sitting.jpg",
    imageAlt: "Happy dog relaxing at home during a pet sitting visit",
  },
  {
    id: "cat-sitting",
    name: "Cat Sitting",
    tagline: "Attentive feline care",
    description:
      "Cats deserve professional care too. Sheryl ensures your feline friend stays healthy, happy, and comfortable while you're away.",
    includes: [
      "Fresh food and water daily",
      "Litter box cleaning",
      "Playtime and enrichment",
      "Medication administration",
      "Health monitoring",
      "Photo updates",
    ],
    image: "/images/cat-sitting.jpg",
    imageAlt: "Cat being cared for during a pet sitting visit",
  },
  {
    id: "puppy-visits",
    name: "Puppy Visits",
    tagline: "Special care for young pups",
    description:
      "Puppies need frequent attention. Sheryl's specialized puppy visits support their development with potty training, basic manners, and socialization.",
    includes: [
      "Potty training support",
      "Basic manners reinforcement",
      "Play and socialization",
      "Feeding assistance",
      "Training guidance",
      "Photo updates",
    ],
    image: "/images/puppy-visits.jpg",
    imageAlt: "Puppy during a training and socialization visit",
  },
  {
    id: "overnight-sitting",
    name: "Overnight Pet Sitting",
    tagline: "Extended care for extended absences",
    description:
      "Vacation with confidence knowing your pets are in great hands. Sheryl provides overnight care in the comfort of your pet's own home.",
    includes: [
      "Extended overnight stays",
      "Multiple feeding schedules",
      "Outdoor time and exercise",
      "Medication administration",
      "Emergency care coordination",
      "Daily photo updates",
    ],
    image: "/images/overnight-sitting.jpg",
    imageAlt: "Peaceful pet during an overnight sitting visit",
  },
  {
    id: "horse-care",
    name: "Horse Care & Turnout",
    tagline: "Comprehensive equine care",
    description:
      "Sheryl provides daily turnout, feeding, stall cleaning, medication administration, and barn sitting for horse owners in Southwest Ranches and the surrounding area.",
    includes: [
      "Daily turnout management",
      "Feeding & nutrition supervision",
      "Stall cleaning & maintenance",
      "Fly care & pest management",
      "Medication administration",
      "Overnight barn sitting available",
    ],
    image: "/images/horse-care.jpg",
    imageAlt: "Horse in paddock during daily turnout care",
  },
  {
    id: "home-care",
    name: "Home Care Add-ons",
    tagline: "Light home care during visits",
    description:
      "Sheryl can help with light home care tasks while caring for your pets — so you come home to everything in order.",
    includes: [
      "Mail pickup",
      "Plant watering",
      "Trash day assistance",
    ],
    image: "/images/home-care.jpg",
    imageAlt: "Well-maintained home during a pet sitting visit",
  },
];

export function getService(id: string): Service | undefined {
  return services.find((s) => s.id === id);
}
```

- [ ] **Step 2: Create areas data with unique content per city**

```ts
// src/content/areas.ts

export interface Area {
  slug: string;
  name: string;
  state: string;
  headline: string;
  description: string;
  highlights: string[];
  popularServices: string[]; // service IDs
  testimonialId?: string;
  isHorseCare?: boolean;
}

export const areas: Area[] = [
  {
    slug: "plantation",
    name: "Plantation",
    state: "FL",
    headline: "Pet Sitting in Plantation, FL",
    description:
      "Sheryl is based right here in Plantation and has been caring for pets in the community for over three years. From the neighborhoods around Plantation Central Park to the quiet streets near Jacaranda, she knows the area and the families who live here. As your neighbor, she provides truly personal pet care — not a stranger from across town.",
    highlights: [
      "Sheryl's home base — fastest response times",
      "Serving neighborhoods from Central Park to Jacaranda",
      "Well-known in the local Plantation pet community",
    ],
    popularServices: ["dog-walking", "dog-sitting", "cat-sitting"],
  },
  {
    slug: "davie",
    name: "Davie",
    state: "FL",
    headline: "Pet Sitting & Horse Care in Davie, FL",
    description:
      "Davie's rural character and horse-friendly community make it a natural fit for Hoof & Paw. Sheryl's barn is located in Davie, so she's deeply connected to the area's equestrian roots. Whether you need daily dog walks near Flamingo Gardens or horse turnout care on your Davie property, she's just around the corner.",
    highlights: [
      "Sheryl's barn is in Davie — strong local presence",
      "Experienced with Davie's equestrian community",
      "Pet and horse care from the same trusted provider",
    ],
    popularServices: ["dog-walking", "horse-care", "dog-sitting"],
  },
  {
    slug: "cooper-city",
    name: "Cooper City",
    state: "FL",
    headline: "Pet Sitting in Cooper City, FL",
    description:
      "Cooper City families love their pets, and Sheryl loves caring for them. The family-oriented neighborhoods around Brian Piccolo Park and Embassy Lakes are home to many of her regular clients. If you're a busy Cooper City parent juggling school drop-offs and work, Sheryl is the reliable pet care you've been looking for.",
    highlights: [
      "Popular with families in Embassy Lakes and Rock Creek",
      "Mid-day dog walks for working professionals",
      "Short drive from Plantation — quick and reliable",
    ],
    popularServices: ["dog-walking", "dog-sitting", "puppy-visits"],
  },
  {
    slug: "sunrise",
    name: "Sunrise",
    state: "FL",
    headline: "Pet Sitting in Sunrise, FL",
    description:
      "From the neighborhoods near Markham Park to the communities around Sawgrass Mills, Sunrise pet owners trust Sheryl for dependable care. She provides consistent, personal service for busy Sunrise families and professionals who want their pets looked after by someone who genuinely cares.",
    highlights: [
      "Serving communities near Markham Park and Sawgrass",
      "Consistent care for busy professionals",
      "Insured and experienced with all pet types",
    ],
    popularServices: ["dog-walking", "cat-sitting", "overnight-sitting"],
  },
  {
    slug: "southwest-ranches",
    name: "Southwest Ranches",
    state: "FL",
    headline: "Horse Care & Pet Sitting in Southwest Ranches, FL",
    description:
      "Southwest Ranches is horse country, and Sheryl is right at home here. With her own barn and years of hands-on equine experience, she understands the unique needs of Southwest Ranches horse owners. From daily turnout and feeding to overnight barn sitting during storms, she provides the consistent, knowledgeable care your horses need.",
    highlights: [
      "Specialized equine care from an experienced horse person",
      "Daily turnout, feeding, stall cleaning, and medication",
      "Overnight barn sitting for storms and extended absences",
      "Pet sitting also available for dogs and cats",
    ],
    popularServices: ["horse-care", "dog-walking", "overnight-sitting"],
    isHorseCare: true,
  },
];

export function getArea(slug: string): Area | undefined {
  return areas.find((a) => a.slug === slug);
}

export function getAllAreas(): Area[] {
  return areas;
}
```

- [ ] **Step 3: Create testimonials data**

```ts
// src/content/testimonials.ts

export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  city: string;
  service?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "sarah-m",
    quote:
      "Sheryl took wonderful care of our dog while we were traveling. The photo updates made us feel so connected. She treats our pets like her own family.",
    name: "Sarah M.",
    city: "Plantation",
    service: "dog-sitting",
  },
  {
    id: "james-k",
    quote:
      "Our horse has never been healthier thanks to the consistent daily turnout care. Sheryl is professional, knowledgeable, and genuinely loves what she does.",
    name: "James K.",
    city: "Southwest Ranches",
    service: "horse-care",
  },
  {
    id: "michelle-d",
    quote:
      "We trust Sheryl completely with our cats. She's reliable, caring, and always goes the extra mile. It's like having a friend check in on them.",
    name: "Michelle D.",
    city: "Davie",
    service: "cat-sitting",
  },
];

export function getTestimonials(): Testimonial[] {
  return testimonials;
}

export function getTestimonialsByCity(city: string): Testimonial[] {
  return testimonials.filter((t) => t.city === city);
}
```

- [ ] **Step 4: Commit**

```bash
git add src/content/services.ts src/content/areas.ts src/content/testimonials.ts
git commit -m "feat: add content data files for services, areas, and testimonials"
```

---

## Task 3: Placeholder Images

**Files:**
- Create: `public/images/` directory with placeholder files

- [ ] **Step 1: Create placeholder images directory and SVG placeholders**

Create simple SVG placeholder images that clearly indicate where real photos should go. These will be replaced with Sheryl's actual photos later.

```bash
mkdir -p public/images
```

Then create a helper script to generate placeholder SVGs. Create each file:

`public/images/dog-walking.jpg` — For now, create a single reusable placeholder SVG and copy it for each needed image:

```bash
# Generate simple colored placeholder SVGs for each service
for name in dog-walking pet-sitting cat-sitting puppy-visits overnight-sitting horse-care home-care sheryl-hero sheryl-portrait gallery-1 gallery-2 gallery-3 gallery-4; do
  cat > "public/images/${name}.svg" << 'SVGEOF'
<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600" viewBox="0 0 800 600">
  <rect width="800" height="600" fill="#C8B89A"/>
  <text x="400" y="280" text-anchor="middle" font-family="system-ui" font-size="24" fill="#7A9B76">Photo Placeholder</text>
  <text x="400" y="320" text-anchor="middle" font-family="system-ui" font-size="16" fill="#4a5a4a">Replace with real photo</text>
</svg>
SVGEOF
done
```

Update the service image paths in `src/content/services.ts` to use `.svg` extension instead of `.jpg` (these will be swapped to real photos later).

- [ ] **Step 2: Update next.config.ts to allow SVG in Image component**

Read the current config first, then update:

```ts
// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
```

- [ ] **Step 3: Commit**

```bash
git add public/images/ next.config.ts src/content/services.ts
git commit -m "feat: add placeholder images and configure Next.js image handling"
```

---

## Task 4: Shared Components — PhoneCTA, TrustBar, StructuredData

**Files:**
- Create: `src/components/PhoneCTA.tsx`
- Create: `src/components/TrustBar.tsx`
- Create: `src/components/StructuredData.tsx`
- Create: `src/lib/structured-data.ts`

- [ ] **Step 1: Create PhoneCTA component**

```tsx
// src/components/PhoneCTA.tsx
import Link from "next/link";

interface PhoneCTAProps {
  variant?: "primary" | "secondary" | "header";
  className?: string;
}

const PHONE_NUMBER = "9548071716";
const PHONE_DISPLAY = "(954) 807-1716";

export default function PhoneCTA({
  variant = "primary",
  className = "",
}: PhoneCTAProps) {
  const styles = {
    primary:
      "bg-sage text-white hover:bg-sage-dark font-bold py-3 px-6 rounded-lg",
    secondary:
      "bg-honey text-white hover:bg-honey-light font-bold py-3 px-6 rounded-lg",
    header:
      "bg-sage text-white hover:bg-sage-dark font-semibold py-2 px-4 rounded-lg text-sm",
  };

  return (
    <Link
      href={`tel:${PHONE_NUMBER}`}
      className={`inline-flex items-center gap-2 transition-colors ${styles[variant]} ${className}`}
    >
      <span aria-hidden="true">📞</span>
      <span>Call/Text Sheryl</span>
      <span className="hidden sm:inline">— {PHONE_DISPLAY}</span>
    </Link>
  );
}

export { PHONE_NUMBER, PHONE_DISPLAY };
```

- [ ] **Step 2: Create TrustBar component**

```tsx
// src/components/TrustBar.tsx

const trustItems = [
  { label: "Insured & Bonded" },
  { label: "3 Years Experience" },
  { label: "Photo Updates Every Visit" },
];

export default function TrustBar() {
  return (
    <div className="bg-surface py-4 px-4 border-y border-beige/50">
      <div className="max-w-5xl mx-auto flex flex-wrap justify-center gap-x-8 gap-y-2">
        {trustItems.map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-2 text-sm text-forest font-medium"
          >
            <span className="text-sage font-bold">✓</span>
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
```

- [ ] **Step 3: Create structured data utilities**

```ts
// src/lib/structured-data.ts

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || "https://www.hoofpawpet.com";

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Hoof & Paw Pet Services",
    description:
      "Personal pet sitting and horse care by Sheryl in Broward County, FL.",
    url: BASE_URL,
    telephone: "+19548071716",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Plantation",
      addressRegion: "FL",
      addressCountry: "US",
    },
    areaServed: [
      { "@type": "City", name: "Plantation", addressRegion: "FL" },
      { "@type": "City", name: "Davie", addressRegion: "FL" },
      { "@type": "City", name: "Cooper City", addressRegion: "FL" },
      { "@type": "City", name: "Sunrise", addressRegion: "FL" },
      { "@type": "City", name: "Southwest Ranches", addressRegion: "FL" },
    ],
    priceRange: "$$",
    sameAs: [
      "https://www.yelp.com/biz/hoof-and-paw-pet-services-plantation",
      "https://nextdoor.com/pages/hoof-and-paw-pet-service-plantation-fl/",
    ],
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function articleSchema(post: {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  author: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      "@type": "Person",
      name: post.author,
    },
    publisher: {
      "@type": "Organization",
      name: "Hoof & Paw Pet Services",
    },
    url: `${BASE_URL}/blog/${post.slug}`,
  };
}

export function breadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${BASE_URL}${item.url}`,
    })),
  };
}
```

- [ ] **Step 4: Create StructuredData component**

```tsx
// src/components/StructuredData.tsx

interface StructuredDataProps {
  data: Record<string, unknown> | Record<string, unknown>[];
}

export default function StructuredData({ data }: StructuredDataProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
```

- [ ] **Step 5: Verify build passes**

Run: `npm run build`
Expected: Build succeeds.

- [ ] **Step 6: Commit**

```bash
git add src/components/PhoneCTA.tsx src/components/TrustBar.tsx src/components/StructuredData.tsx src/lib/structured-data.ts
git commit -m "feat: add PhoneCTA, TrustBar, and StructuredData components"
```

---

## Task 5: Header & Footer Rebuild

**Files:**
- Rewrite: `src/components/Header.tsx`
- Rewrite: `src/components/Footer.tsx`

- [ ] **Step 1: Rewrite Header — sticky, mobile menu, tap-to-call**

```tsx
// src/components/Header.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import PhoneCTA from "./PhoneCTA";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About Sheryl" },
  { href: "/areas", label: "Areas" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-warm-white/95 backdrop-blur-sm border-b border-beige/50">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
        <Link
          href="/"
          className="font-serif font-bold text-xl text-forest hover:text-sage transition-colors"
        >
          Hoof & Paw
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-body-text hover:text-sage font-medium text-sm transition-colors"
            >
              {link.label}
            </Link>
          ))}
          <PhoneCTA variant="header" />
        </div>

        {/* Mobile: CTA + Hamburger */}
        <div className="flex lg:hidden items-center gap-3">
          <PhoneCTA variant="header" />
          <button
            className="text-forest p-2"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="lg:hidden border-t border-beige/50 bg-warm-white">
          <div className="flex flex-col px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-body-text hover:text-sage font-medium py-2 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
```

- [ ] **Step 2: Rewrite Footer with area links and phone CTA**

```tsx
// src/components/Footer.tsx
import Link from "next/link";
import { PHONE_DISPLAY, PHONE_NUMBER } from "./PhoneCTA";
import { getAllAreas } from "@/content/areas";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const areas = getAllAreas();

  return (
    <footer className="bg-forest text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Brand */}
          <div>
            <p className="font-serif font-bold text-xl mb-3">Hoof & Paw</p>
            <p className="text-white/70 text-sm mb-4">
              Personal pet sitting & horse care in Broward County, FL
            </p>
            <Link
              href={`tel:${PHONE_NUMBER}`}
              className="text-honey hover:text-honey-light font-semibold transition-colors"
            >
              {PHONE_DISPLAY}
            </Link>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/services", label: "Services" },
                { href: "/about", label: "About Sheryl" },
                { href: "/blog", label: "Blog" },
                { href: "/faq", label: "FAQ" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-honey transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-semibold mb-3">Service Areas</h3>
            <ul className="space-y-2 text-sm">
              {areas.map((area) => (
                <li key={area.slug}>
                  <Link
                    href={`/areas/${area.slug}`}
                    className="text-white/70 hover:text-honey transition-colors"
                  >
                    {area.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-semibold mb-3">Connect</h3>
            <div className="space-y-2 text-sm">
              <a
                href="https://www.yelp.com/biz/hoof-and-paw-pet-services-plantation"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white/70 hover:text-honey transition-colors"
              >
                Yelp Reviews
              </a>
              <a
                href="https://nextdoor.com/pages/hoof-and-paw-pet-service-plantation-fl/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white/70 hover:text-honey transition-colors"
              >
                Nextdoor
              </a>
            </div>
            <p className="text-white/50 text-xs mt-4">Insured & Bonded</p>
          </div>
        </div>

        <div className="border-t border-white/20 pt-6">
          <p className="text-center text-white/50 text-sm">
            &copy; {currentYear} Hoof & Paw Pet Services. All rights reserved.
            Located in Plantation, FL.
          </p>
        </div>
      </div>
    </footer>
  );
}
```

- [ ] **Step 3: Verify build passes**

Run: `npm run build`
Expected: Build succeeds.

- [ ] **Step 4: Commit**

```bash
git add src/components/Header.tsx src/components/Footer.tsx
git commit -m "feat: rebuild Header (sticky, mobile menu, tap-to-call) and Footer (area links)"
```

---

## Task 6: Homepage Rebuild

**Files:**
- Rewrite: `src/app/page.tsx`
- Create: `src/components/TestimonialCard.tsx`
- Create: `src/components/MeetSherylTeaser.tsx`
- Delete: `src/components/Hero.tsx`

- [ ] **Step 1: Create TestimonialCard component**

```tsx
// src/components/TestimonialCard.tsx

import { Testimonial } from "@/content/testimonials";

export default function TestimonialCard({
  quote,
  name,
  city,
}: Testimonial) {
  return (
    <div className="bg-warm-white rounded-xl p-6 border border-beige/50 flex flex-col min-w-[280px]">
      <div className="text-sage text-2xl mb-3" aria-hidden="true">"</div>
      <p className="text-body-text leading-relaxed mb-4 flex-1">{quote}</p>
      <p className="text-forest font-semibold text-sm">
        — {name}, {city}
      </p>
    </div>
  );
}
```

- [ ] **Step 2: Create MeetSherylTeaser component**

```tsx
// src/components/MeetSherylTeaser.tsx
import Link from "next/link";
import Image from "next/image";

export default function MeetSherylTeaser() {
  return (
    <section className="bg-forest text-white py-16 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-8">
        <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0 border-4 border-sage">
          <Image
            src="/images/sheryl-portrait.svg"
            alt="Sheryl, owner of Hoof & Paw Pet Services"
            width={128}
            height={128}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="text-center sm:text-left">
          <h2 className="font-serif text-2xl font-bold mb-3">Meet Sheryl</h2>
          <p className="text-white/80 leading-relaxed mb-4">
            "Animals have been part of my life for as long as I can remember. I
            wanted to create a service where pets are looked after with the same
            love and attention I give my own."
          </p>
          <Link
            href="/about"
            className="inline-block bg-sage hover:bg-sage-dark text-white font-semibold py-2 px-6 rounded-lg transition-colors"
          >
            Read Sheryl's Story
          </Link>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Rewrite homepage**

```tsx
// src/app/page.tsx
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import PhoneCTA from "@/components/PhoneCTA";
import TrustBar from "@/components/TrustBar";
import TestimonialCard from "@/components/TestimonialCard";
import MeetSherylTeaser from "@/components/MeetSherylTeaser";
import StructuredData from "@/components/StructuredData";
import BlogCard from "@/components/BlogCard";
import { services } from "@/content/services";
import { getAllAreas } from "@/content/areas";
import { getTestimonials } from "@/content/testimonials";
import { getAllBlogPosts } from "@/content/blog";
import { localBusinessSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Hoof & Paw Pet Services | Pet Sitting & Horse Care in Broward County",
  description:
    "Personal pet sitting and horse care by Sheryl in Broward County, FL. Dog walking, cat sitting, overnight care, and horse turnout in Plantation, Davie, Cooper City, Sunrise, and Southwest Ranches. Call (954) 807-1716.",
};

export default function Home() {
  const featuredServices = services.filter((s) =>
    ["dog-walking", "dog-sitting", "cat-sitting", "horse-care"].includes(s.id)
  );
  const areas = getAllAreas();
  const testimonials = getTestimonials();
  const latestPosts = getAllBlogPosts().slice(0, 2);

  return (
    <>
      <StructuredData data={localBusinessSchema()} />

      {/* Hero */}
      <section className="bg-warm-white py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-forest mb-4 leading-tight">
            Dependable pet care, right in your neighborhood.
          </h1>
          <p className="text-body-text text-lg sm:text-xl mb-8 leading-relaxed">
            Dog walking, pet sitting & horse care in Broward County. Personally
            handled by Sheryl — insured, experienced, and truly local.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <PhoneCTA variant="primary" />
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 border-2 border-sage text-sage hover:bg-sage hover:text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <TrustBar />

      {/* Featured Services */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-forest text-center mb-10">
            How Sheryl Can Help
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {featuredServices.map((service) => (
              <Link
                key={service.id}
                href={`/services#${service.id}`}
                className="bg-white rounded-xl border border-beige/50 overflow-hidden hover:shadow-md transition-shadow group"
              >
                <div className="aspect-[4/3] overflow-hidden bg-surface">
                  <Image
                    src={service.image.replace(".jpg", ".svg")}
                    alt={service.imageAlt}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-forest text-sm sm:text-base">
                    {service.name}
                  </h3>
                  <p className="text-body-text text-xs sm:text-sm mt-1 line-clamp-2">
                    {service.tagline}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <p className="text-center mt-6">
            <Link
              href="/services"
              className="text-sage hover:text-sage-dark font-semibold text-sm"
            >
              See all services including puppy visits, overnight care & more →
            </Link>
          </p>
        </div>
      </section>

      {/* Meet Sheryl Teaser */}
      <MeetSherylTeaser />

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 bg-surface">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-forest text-center mb-10">
            What Pet Owners Say
          </h2>
          <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory sm:grid sm:grid-cols-3 sm:overflow-visible">
            {testimonials.map((t) => (
              <div key={t.id} className="snap-start">
                <TestimonialCard {...t} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas Served */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl font-bold text-forest mb-8">
            Serving Your Neighborhood
          </h2>
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {areas.map((area) => (
              <Link
                key={area.slug}
                href={`/areas/${area.slug}`}
                className="bg-sage text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-sage-dark transition-colors"
              >
                {area.name}
              </Link>
            ))}
          </div>
          <p className="text-body-text text-sm">
            Based in Plantation, serving all of Broward County
          </p>
        </div>
      </section>

      {/* Blog Preview */}
      {latestPosts.length > 0 && (
        <section className="py-16 px-4 sm:px-6 bg-surface">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-serif text-3xl font-bold text-forest text-center mb-10">
              Pet Care Tips
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {latestPosts.map((post) => (
                <BlogCard
                  key={post.id}
                  title={post.title}
                  excerpt={post.excerpt}
                  date={post.date}
                  slug={post.slug}
                  readingTime={post.readingTime}
                />
              ))}
            </div>
            <p className="text-center mt-6">
              <Link
                href="/blog"
                className="text-sage hover:text-sage-dark font-semibold text-sm"
              >
                More pet care tips →
              </Link>
            </p>
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section className="py-16 px-4 sm:px-6 bg-honey">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl font-bold text-white mb-4">
            Ready to Meet Sheryl?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Call or text anytime to schedule your first visit.
          </p>
          <PhoneCTA variant="secondary" className="bg-white text-honey hover:bg-warm-white" />
        </div>
      </section>
    </>
  );
}
```

- [ ] **Step 4: Delete the old Hero.tsx component**

```bash
rm src/components/Hero.tsx
```

- [ ] **Step 5: Update BlogCard with new styling**

```tsx
// src/components/BlogCard.tsx
import Link from "next/link";

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  readingTime: number;
}

export default function BlogCard({
  title,
  excerpt,
  date,
  slug,
  readingTime,
}: BlogCardProps) {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="bg-white rounded-xl p-6 border border-beige/50 hover:shadow-md transition-shadow">
      <div className="mb-3 flex items-center gap-3 text-xs text-body-text/70">
        <time dateTime={date}>{formattedDate}</time>
        <span>·</span>
        <span>{readingTime} min read</span>
      </div>
      <h3 className="font-serif text-xl font-bold text-forest mb-3">
        <Link href={`/blog/${slug}`} className="hover:text-sage transition-colors">
          {title}
        </Link>
      </h3>
      <p className="text-body-text text-sm leading-relaxed mb-4">{excerpt}</p>
      <Link
        href={`/blog/${slug}`}
        className="text-sage hover:text-sage-dark font-semibold text-sm"
      >
        Read More →
      </Link>
    </article>
  );
}
```

- [ ] **Step 6: Verify build passes**

Run: `npm run build`
Expected: Build succeeds.

- [ ] **Step 7: Commit**

```bash
git add -A
git commit -m "feat: rebuild homepage — service-forward layout with Sheryl's personal touch"
```

---

## Task 7: About Sheryl Page

**Files:**
- Create: `src/app/about/page.tsx`
- Create: `src/components/PhotoGrid.tsx`

- [ ] **Step 1: Create PhotoGrid component**

```tsx
// src/components/PhotoGrid.tsx
import Image from "next/image";

interface PhotoGridProps {
  photos: { src: string; alt: string }[];
}

export default function PhotoGrid({ photos }: PhotoGridProps) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {photos.map((photo, i) => (
        <div
          key={i}
          className="aspect-square rounded-xl overflow-hidden bg-surface"
        >
          <Image
            src={photo.src}
            alt={photo.alt}
            width={400}
            height={400}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}
```

- [ ] **Step 2: Create About page**

```tsx
// src/app/about/page.tsx
import type { Metadata } from "next";
import Image from "next/image";
import PhoneCTA from "@/components/PhoneCTA";
import PhotoGrid from "@/components/PhotoGrid";
import StructuredData from "@/components/StructuredData";
import { breadcrumbSchema, localBusinessSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "About Sheryl",
  description:
    "Meet Sheryl, the heart behind Hoof & Paw Pet Services. A Plantation resident and lifelong animal lover providing personal pet care in Broward County, FL.",
};

export default function AboutPage() {
  const barnPhotos = [
    { src: "/images/gallery-1.svg", alt: "Sheryl's horses at the Davie barn" },
    { src: "/images/gallery-2.svg", alt: "Chickens at Sheryl's barn" },
    { src: "/images/gallery-3.svg", alt: "Sheryl's dogs at home" },
    { src: "/images/gallery-4.svg", alt: "Sheryl with her grandson Isaac" },
  ];

  return (
    <>
      <StructuredData
        data={[
          localBusinessSchema(),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "About Sheryl", url: "/about" },
          ]),
        ]}
      />

      {/* Hero */}
      <section className="bg-surface py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden flex-shrink-0 border-4 border-sage/30">
            <Image
              src="/images/sheryl-hero.svg"
              alt="Sheryl with animals at her barn"
              width={256}
              height={256}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <div>
            <h1 className="font-serif text-4xl font-bold text-forest mb-4">
              Meet Sheryl
            </h1>
            <p className="text-body-text text-lg leading-relaxed">
              The heart behind Hoof & Paw Pet Services. Animals have been part
              of her life for as long as she can remember.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto space-y-8 text-body-text leading-relaxed">
          <p>
            Sheryl is the heart behind Hoof & Paw Pet Services. Animals have
            been part of her life for as long as she can remember, and she
            quickly noticed that so many families struggled to find pet care that
            felt truly personal. She wanted to change that — to create a service
            where pets are looked after with the same love and attention she
            gives her own.
          </p>

          <p>
            Originally from Michigan, Sheryl grew up right here in South Florida
            after her family moved to Hollywood when she was a little girl. She
            attended Hollywood Hills High School and eventually settled in
            Plantation, where she raised two daughters. Today, Plantation is
            still home.
          </p>

          <p>
            Her barn in Davie is filled with life — horses, chickens, pigs,
            dogs, and cats — and caring for them keeps her grounded in the daily
            rhythms of animal life. That same devotion extends to every home and
            barn she visits. Clients often say it feels like she treats their
            pets as if they were her own, and the glowing reviews reflect the
            care she pours into each visit.
          </p>

          <p>
            When she isn't busy tending to four-legged friends, you'll find
            Sheryl with her grandson, Isaac, who brings just as much joy and
            energy as the barnyard.
          </p>
        </div>
      </section>

      {/* Photo Grid */}
      <section className="py-12 px-4 sm:px-6 bg-surface">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-2xl font-bold text-forest text-center mb-8">
            Life at the Barn
          </h2>
          <PhotoGrid photos={barnPhotos} />
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl font-bold text-forest mb-4">
            A Neighbor's Promise
          </h2>
          <p className="text-body-text text-lg mb-8 leading-relaxed">
            Hoof & Paw Pet Services isn't just a business for Sheryl — it's a
            neighbor's promise. She's local, she's trusted, and she's ready to
            be there for you and your animals whenever you need her.
          </p>
          <PhoneCTA />
        </div>
      </section>
    </>
  );
}
```

- [ ] **Step 3: Verify build passes**

Run: `npm run build`
Expected: Build succeeds.

- [ ] **Step 4: Commit**

```bash
git add src/app/about/page.tsx src/components/PhotoGrid.tsx
git commit -m "feat: add About Sheryl page with bio and photo grid"
```

---

## Task 8: Services Page Rebuild

**Files:**
- Rewrite: `src/app/services/page.tsx`
- Rewrite: `src/components/ServiceCard.tsx`

- [ ] **Step 1: Rebuild ServiceCard with photo and expandable details**

```tsx
// src/components/ServiceCard.tsx
"use client";

import { useState } from "react";
import Image from "next/image";
import { Service } from "@/content/services";

export default function ServiceCard({
  id,
  name,
  tagline,
  description,
  includes,
  image,
  imageAlt,
}: Service) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div id={id} className="bg-white rounded-xl border border-beige/50 overflow-hidden scroll-mt-24">
      <div className="aspect-[16/9] overflow-hidden bg-surface">
        <Image
          src={image.replace(".jpg", ".svg")}
          alt={imageAlt}
          width={600}
          height={340}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="font-serif text-xl font-bold text-forest mb-1">{name}</h3>
        <p className="text-sage font-medium text-sm mb-3">{tagline}</p>
        <p className="text-body-text leading-relaxed mb-4">{description}</p>
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-sage hover:text-sage-dark font-semibold text-sm flex items-center gap-1 transition-colors"
        >
          {expanded ? "Hide details" : "What's included"}
          <span
            className={`transition-transform duration-200 ${
              expanded ? "rotate-180" : ""
            }`}
          >
            ▾
          </span>
        </button>
        {expanded && (
          <ul className="mt-4 space-y-2">
            {includes.map((item) => (
              <li key={item} className="flex items-start gap-2 text-body-text text-sm">
                <span className="text-sage font-bold mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Rewrite Services page**

```tsx
// src/app/services/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import PhoneCTA from "@/components/PhoneCTA";
import ServiceCard from "@/components/ServiceCard";
import StructuredData from "@/components/StructuredData";
import { services } from "@/content/services";
import { breadcrumbSchema, localBusinessSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Pet sitting and horse care services in Broward County by Sheryl. Dog walking, cat sitting, puppy visits, overnight care, horse turnout, and more.",
};

export default function ServicesPage() {
  return (
    <>
      <StructuredData
        data={[
          localBusinessSchema(),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Services", url: "/services" },
          ]),
        ]}
      />

      {/* Hero */}
      <section className="bg-surface py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-serif text-4xl font-bold text-forest mb-4">
            Services
          </h1>
          <p className="text-body-text text-lg leading-relaxed">
            Every service is personally handled by Sheryl. No strangers, no
            subcontractors — just trusted, attentive care for your pets.
          </p>
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 px-4 sm:px-6 bg-surface">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-2xl font-bold text-forest mb-4">
            Not sure which service you need?
          </h2>
          <p className="text-body-text mb-8">
            Call or text Sheryl — she's happy to chat about your pet's needs and
            recommend the right plan.
          </p>
          <PhoneCTA />
        </div>
      </section>
    </>
  );
}
```

- [ ] **Step 3: Verify build passes**

Run: `npm run build`
Expected: Build succeeds.

- [ ] **Step 4: Commit**

```bash
git add src/app/services/page.tsx src/components/ServiceCard.tsx
git commit -m "feat: rebuild services page with photo cards and expandable details"
```

---

## Task 9: Location Pages — Areas Hub + Dynamic City Pages

**Files:**
- Create: `src/app/areas/page.tsx`
- Create: `src/app/areas/[city]/page.tsx`
- Create: `src/components/CityCard.tsx`
- Delete: `src/app/horse-care/page.tsx`

- [ ] **Step 1: Create CityCard component**

```tsx
// src/components/CityCard.tsx
import Link from "next/link";
import { Area } from "@/content/areas";

export default function CityCard({ slug, name, highlights }: Area) {
  return (
    <Link
      href={`/areas/${slug}`}
      className="bg-white rounded-xl border border-beige/50 p-6 hover:shadow-md transition-shadow group"
    >
      <h3 className="font-serif text-xl font-bold text-forest mb-3 group-hover:text-sage transition-colors">
        {name}
      </h3>
      <ul className="space-y-1.5 mb-4">
        {highlights.slice(0, 2).map((h) => (
          <li key={h} className="text-body-text text-sm flex items-start gap-2">
            <span className="text-sage font-bold mt-0.5">✓</span>
            <span>{h}</span>
          </li>
        ))}
      </ul>
      <span className="text-sage font-semibold text-sm">
        Learn more →
      </span>
    </Link>
  );
}
```

- [ ] **Step 2: Create Areas hub page**

```tsx
// src/app/areas/page.tsx
import type { Metadata } from "next";
import { getAllAreas } from "@/content/areas";
import CityCard from "@/components/CityCard";
import PhoneCTA from "@/components/PhoneCTA";
import StructuredData from "@/components/StructuredData";
import { breadcrumbSchema, localBusinessSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Areas We Serve",
  description:
    "Hoof & Paw Pet Services serves Plantation, Davie, Cooper City, Sunrise, and Southwest Ranches in Broward County, FL. Find pet sitting near you.",
};

export default function AreasPage() {
  const areas = getAllAreas();

  return (
    <>
      <StructuredData
        data={[
          localBusinessSchema(),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Areas We Serve", url: "/areas" },
          ]),
        ]}
      />

      <section className="bg-surface py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-serif text-4xl font-bold text-forest mb-4">
            Areas We Serve
          </h1>
          <p className="text-body-text text-lg leading-relaxed">
            Sheryl is based in Plantation and personally serves families and pet
            owners across Broward County.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area) => (
            <CityCard key={area.slug} {...area} />
          ))}
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 bg-surface">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-2xl font-bold text-forest mb-4">
            Outside these areas?
          </h2>
          <p className="text-body-text mb-8">
            If you're nearby in Broward County, reach out — Sheryl may still be
            able to help.
          </p>
          <PhoneCTA />
        </div>
      </section>
    </>
  );
}
```

- [ ] **Step 3: Create dynamic city page**

```tsx
// src/app/areas/[city]/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PhoneCTA from "@/components/PhoneCTA";
import TestimonialCard from "@/components/TestimonialCard";
import StructuredData from "@/components/StructuredData";
import { getAllAreas, getArea } from "@/content/areas";
import { services } from "@/content/services";
import { getTestimonialsByCity } from "@/content/testimonials";
import { breadcrumbSchema, localBusinessSchema } from "@/lib/structured-data";

export async function generateStaticParams() {
  return getAllAreas().map((area) => ({ city: area.slug }));
}

export async function generateMetadata(props: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city } = await props.params;
  const area = getArea(city);
  if (!area) return { title: "Not Found" };

  return {
    title: area.headline,
    description: `${area.description.slice(0, 155)}...`,
  };
}

export default async function CityPage(props: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await props.params;
  const area = getArea(city);
  if (!area) notFound();

  const cityTestimonials = getTestimonialsByCity(area.name);
  const areaServices = area.popularServices
    .map((id) => services.find((s) => s.id === id))
    .filter(Boolean);

  return (
    <>
      <StructuredData
        data={[
          localBusinessSchema(),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Areas We Serve", url: "/areas" },
            { name: area.name, url: `/areas/${area.slug}` },
          ]),
        ]}
      />

      {/* Hero */}
      <section className="bg-surface py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-serif text-4xl font-bold text-forest mb-4">
            {area.headline}
          </h1>
          <p className="text-body-text text-lg leading-relaxed">
            {area.description}
          </p>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-2xl font-bold text-forest mb-6">
            Why {area.name} Pet Owners Choose Sheryl
          </h2>
          <ul className="space-y-3">
            {area.highlights.map((h) => (
              <li key={h} className="flex items-start gap-3 text-body-text">
                <span className="text-sage font-bold mt-1">✓</span>
                <span className="leading-relaxed">{h}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Popular Services */}
      <section className="py-12 px-4 sm:px-6 bg-surface">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-2xl font-bold text-forest mb-6">
            Popular Services in {area.name}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {areaServices.map(
              (service) =>
                service && (
                  <Link
                    key={service.id}
                    href={`/services#${service.id}`}
                    className="bg-white rounded-xl border border-beige/50 p-4 hover:shadow-md transition-shadow text-center"
                  >
                    <h3 className="font-semibold text-forest">{service.name}</h3>
                    <p className="text-body-text text-sm mt-1">
                      {service.tagline}
                    </p>
                  </Link>
                )
            )}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      {cityTestimonials.length > 0 && (
        <section className="py-12 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl font-bold text-forest mb-6">
              From a {area.name} Client
            </h2>
            <TestimonialCard {...cityTestimonials[0]} />
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 bg-honey">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl font-bold text-white mb-4">
            Need Pet Care in {area.name}?
          </h2>
          <p className="text-white/90 mb-8">
            {area.slug === "plantation"
              ? "Sheryl is right here in Plantation — call or text anytime."
              : `Sheryl serves ${area.name} regularly from nearby Plantation.`}
          </p>
          <PhoneCTA variant="secondary" className="bg-white text-honey hover:bg-warm-white" />
        </div>
      </section>
    </>
  );
}
```

- [ ] **Step 4: Delete old horse-care page**

```bash
rm src/app/horse-care/page.tsx
rmdir src/app/horse-care
```

- [ ] **Step 5: Verify build passes**

Run: `npm run build`
Expected: Build succeeds. All 5 city pages are generated statically.

- [ ] **Step 6: Commit**

```bash
git add src/app/areas/ src/components/CityCard.tsx
git rm src/app/horse-care/page.tsx
git commit -m "feat: add location pages — areas hub + 5 city pages for local SEO"
```

---

## Task 10: Contact Page Rebuild

**Files:**
- Rewrite: `src/app/contact/page.tsx`
- Rewrite: `src/components/ContactForm.tsx`

- [ ] **Step 1: Rebuild ContactForm with Formspree integration**

```tsx
// src/components/ContactForm.tsx
"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(false);

    const form = e.currentTarget;
    const data = new FormData(form);

    // Replace YOUR_FORM_ID with actual Formspree form ID
    const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID || "YOUR_FORM_ID";

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    }
  }

  if (submitted) {
    return (
      <div className="bg-sage/10 border border-sage rounded-xl p-8 text-center">
        <p className="text-forest font-semibold text-lg mb-2">
          Message sent!
        </p>
        <p className="text-body-text">
          Sheryl will get back to you soon. Thank you!
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg p-4 text-sm">
          Something went wrong. Please try calling Sheryl directly or try again.
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-forest mb-1">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-2.5 rounded-lg border border-beige bg-white focus:outline-none focus:border-sage focus:ring-1 focus:ring-sage transition-colors"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-forest mb-1">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-2.5 rounded-lg border border-beige bg-white focus:outline-none focus:border-sage focus:ring-1 focus:ring-sage transition-colors"
            placeholder="you@email.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-forest mb-1">
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="w-full px-4 py-2.5 rounded-lg border border-beige bg-white focus:outline-none focus:border-sage focus:ring-1 focus:ring-sage transition-colors"
          placeholder="(555) 123-4567"
        />
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-forest mb-1">
          Service Interested In
        </label>
        <select
          id="service"
          name="service"
          className="w-full px-4 py-2.5 rounded-lg border border-beige bg-white focus:outline-none focus:border-sage focus:ring-1 focus:ring-sage transition-colors"
        >
          <option value="">Select a service...</option>
          <option value="dog-walking">Dog Walking</option>
          <option value="pet-sitting">Pet Sitting</option>
          <option value="cat-sitting">Cat Sitting</option>
          <option value="puppy-visits">Puppy Visits</option>
          <option value="overnight-sitting">Overnight Pet Sitting</option>
          <option value="horse-care">Horse Care</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-forest mb-1">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="w-full px-4 py-2.5 rounded-lg border border-beige bg-white focus:outline-none focus:border-sage focus:ring-1 focus:ring-sage transition-colors resize-none"
          placeholder="Tell Sheryl about your pets and what you're looking for..."
        />
      </div>

      <button
        type="submit"
        className="w-full bg-sage hover:bg-sage-dark text-white font-bold py-3 px-6 rounded-lg transition-colors"
      >
        Send Message
      </button>
    </form>
  );
}
```

- [ ] **Step 2: Rewrite Contact page**

```tsx
// src/app/contact/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import StructuredData from "@/components/StructuredData";
import { PHONE_DISPLAY, PHONE_NUMBER } from "@/components/PhoneCTA";
import { breadcrumbSchema, localBusinessSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Sheryl at Hoof & Paw Pet Services. Call or text (954) 807-1716 for pet sitting and horse care in Broward County, FL.",
};

export default function ContactPage() {
  return (
    <>
      <StructuredData
        data={[
          localBusinessSchema(),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Contact", url: "/contact" },
          ]),
        ]}
      />

      {/* Phone-First Hero */}
      <section className="bg-forest text-white py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-serif text-4xl font-bold mb-4">Get in Touch</h1>
          <p className="text-white/80 text-lg mb-6">
            The fastest way to reach Sheryl is a quick call or text.
          </p>
          <Link
            href={`tel:${PHONE_NUMBER}`}
            className="inline-block bg-honey hover:bg-honey-light text-white font-bold text-2xl py-4 px-8 rounded-xl transition-colors"
          >
            {PHONE_DISPLAY}
          </Link>
          <p className="text-white/60 text-sm mt-3">
            Call or text anytime
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-2xl font-bold text-forest mb-2">
            Or send a message
          </h2>
          <p className="text-body-text mb-8">
            Sheryl typically responds within 24 hours.
          </p>
          <ContactForm />
        </div>
      </section>

      {/* Info */}
      <section className="py-12 px-4 sm:px-6 bg-surface">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="font-semibold text-forest mb-2">Located In</h3>
            <p className="text-body-text text-sm">Plantation, FL</p>
          </div>
          <div>
            <h3 className="font-semibold text-forest mb-2">Service Areas</h3>
            <p className="text-body-text text-sm">
              Plantation, Davie, Cooper City, Sunrise, SW Ranches
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-forest mb-2">Reviews</h3>
            <div className="space-y-1">
              <a
                href="https://www.yelp.com/biz/hoof-and-paw-pet-services-plantation"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sage hover:text-sage-dark text-sm font-medium"
              >
                Yelp
              </a>
              <a
                href="https://nextdoor.com/pages/hoof-and-paw-pet-service-plantation-fl/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sage hover:text-sage-dark text-sm font-medium"
              >
                Nextdoor
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
```

- [ ] **Step 3: Verify build passes**

Run: `npm run build`
Expected: Build succeeds.

- [ ] **Step 4: Commit**

```bash
git add src/app/contact/page.tsx src/components/ContactForm.tsx
git commit -m "feat: rebuild contact page — phone-first design with Formspree form"
```

---

## Task 11: FAQ Page Rebuild with Structured Data

**Files:**
- Rewrite: `src/app/faq/page.tsx`
- Rewrite: `src/components/FAQItem.tsx`

- [ ] **Step 1: Rebuild FAQItem with animated accordion**

```tsx
// src/components/FAQItem.tsx
"use client";

import { useState, useRef, useEffect } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
}

export default function FAQItem({ question, answer }: FAQItemProps) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [answer]);

  return (
    <div className="border-b border-beige/50">
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center w-full text-left py-5 gap-4"
        aria-expanded={open}
      >
        <h3 className="font-semibold text-forest pr-4">{question}</h3>
        <span
          className={`flex-shrink-0 text-sage transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
          aria-hidden="true"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      <div
        className="overflow-hidden transition-[max-height] duration-200 ease-in-out"
        style={{ maxHeight: open ? `${height}px` : "0px" }}
      >
        <div ref={contentRef} className="pb-5 text-body-text leading-relaxed">
          {answer}
        </div>
      </div>
    </div>
  );
}
```

- [ ] **Step 2: Rewrite FAQ page with structured data**

```tsx
// src/app/faq/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import FAQItem from "@/components/FAQItem";
import StructuredData from "@/components/StructuredData";
import { breadcrumbSchema, faqSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about Hoof & Paw Pet Services. Learn about booking, service areas, pricing, and pet care with Sheryl in Broward County.",
};

const petFaqs = [
  {
    question: "What areas does Sheryl serve?",
    answer:
      "Sheryl serves Plantation, Davie, Cooper City, Sunrise, and Southwest Ranches in Broward County, Florida. She's based in Plantation. If your location is outside these areas but nearby, call or text to discuss availability.",
  },
  {
    question: "How do I book a visit?",
    answer:
      "The easiest way is to call or text Sheryl directly at (954) 807-1716. You can also fill out the contact form on the Contact page. She'll get back to you within 24 hours to finalize scheduling and discuss your pet's specific needs.",
  },
  {
    question: "Is there a free meet and greet?",
    answer:
      "Yes! Sheryl recommends a meet and greet before your first service. This allows her to meet your pet, see your home, discuss expectations, and help your pet get comfortable. Call or text to schedule.",
  },
  {
    question: "What if my pet has special medical needs?",
    answer:
      "Sheryl can administer medications, follow special diets, and care for pets with medical conditions. Provide detailed instructions and any prescriptions. She works closely with you and your veterinarian to ensure proper care.",
  },
  {
    question: "Is Hoof & Paw insured?",
    answer:
      "Yes! Hoof & Paw is fully insured and bonded. Sheryl maintains liability insurance covering all services, giving you peace of mind that your pets and home are protected.",
  },
  {
    question: "What's included in dog walking?",
    answer:
      "Every walk includes a leash walk or yard potty break, fresh water, waste cleanup, paw checks, basic manners reinforcement, and a photo update. Choose 20, 30, or 45-minute sessions.",
  },
  {
    question: "How will I receive updates?",
    answer:
      "Sheryl sends photo updates and messages during every visit via text and/or email, depending on your preference. You'll always know your pet is safe and happy.",
  },
  {
    question: "What's the cancellation policy?",
    answer:
      "Please provide at least 24 hours notice for cancellations or reschedules. Cancellations with less than 24 hours notice may incur a service charge. Call or text Sheryl directly to discuss.",
  },
  {
    question: "Does Sheryl care for multiple pets?",
    answer:
      "Absolutely! Sheryl is experienced with multi-pet households and provides care for all your pets during visits. Different pet types may affect pricing — discuss your situation when booking.",
  },
  {
    question: "What should I prepare before the first visit?",
    answer:
      "Prepare a comfortable space for your pet, leave food/water/supplies accessible, provide clear routine instructions, and leave emergency contact info. Sheryl will discuss specifics during the meet and greet.",
  },
];

const horseFaqs = [
  {
    question: "Where does Sheryl provide horse care?",
    answer:
      "Sheryl provides horse care throughout Southwest Ranches and the surrounding Broward County area. Her own barn is in Davie. Contact her to discuss availability for your location.",
  },
  {
    question: "What does daily turnout include?",
    answer:
      "Daily turnout includes consistent scheduling regardless of weather, paddock and pasture safety checks, fresh water, supervision, weather-appropriate management, and photo updates.",
  },
  {
    question: "Can Sheryl administer medications to horses?",
    answer:
      "Yes — she's experienced with oral, injectable, and topical medications. Provide instructions from your vet and ensure all supplies are available. She coordinates directly with your veterinarian.",
  },
  {
    question: "Is overnight barn sitting available?",
    answer:
      "Yes! Sheryl provides overnight barn sitting during severe weather, equestrian events, or extended absences. This includes 24/7 monitoring, emergency response, all routine care, and vet coordination.",
  },
  {
    question: "Does Sheryl handle fly care?",
    answer:
      "Absolutely. South Florida's fly season is intense, and Sheryl manages fly care during turnout using fly spray and other methods to keep your horse comfortable.",
  },
];

const allFaqs = [...petFaqs, ...horseFaqs];

export default function FAQPage() {
  return (
    <>
      <StructuredData
        data={[
          faqSchema(allFaqs),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "FAQ", url: "/faq" },
          ]),
        ]}
      />

      <section className="bg-surface py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-serif text-4xl font-bold text-forest mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-body-text text-lg">
            Common questions about Sheryl's pet and horse care services.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-2xl font-bold text-forest mb-6">
            Pet Services
          </h2>
          <div className="mb-12">
            {petFaqs.map((faq, i) => (
              <FAQItem key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>

          <h2 className="font-serif text-2xl font-bold text-forest mb-6">
            Horse Care
          </h2>
          <div className="mb-12">
            {horseFaqs.map((faq, i) => (
              <FAQItem key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 bg-surface">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-2xl font-bold text-forest mb-4">
            Still have questions?
          </h2>
          <p className="text-body-text mb-8">
            Sheryl is always happy to chat.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-sage hover:bg-sage-dark text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            Contact Sheryl
          </Link>
        </div>
      </section>
    </>
  );
}
```

- [ ] **Step 3: Verify build passes**

Run: `npm run build`
Expected: Build succeeds.

- [ ] **Step 4: Commit**

```bash
git add src/app/faq/page.tsx src/components/FAQItem.tsx
git commit -m "feat: rebuild FAQ page with animated accordion and JSON-LD structured data"
```

---

## Task 12: Blog Pages Refresh

**Files:**
- Rewrite: `src/app/blog/page.tsx`
- Rewrite: `src/app/blog/[slug]/page.tsx`

- [ ] **Step 1: Rewrite blog index page**

```tsx
// src/app/blog/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import BlogCard from "@/components/BlogCard";
import { getAllBlogPosts } from "@/content/blog";
import StructuredData from "@/components/StructuredData";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Pet care tips, horse care advice, and local insights from Sheryl at Hoof & Paw Pet Services in Broward County, FL.",
};

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <>
      <StructuredData
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
        ])}
      />

      <section className="bg-surface py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-serif text-4xl font-bold text-forest mb-4">
            Pet Care Tips & Advice
          </h1>
          <p className="text-body-text text-lg">
            Practical advice from Sheryl for pet and horse owners in Broward
            County.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          {posts.length === 0 ? (
            <p className="text-center text-body-text">
              No posts yet — check back soon!
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {posts.map((post) => (
                <BlogCard
                  key={post.id}
                  title={post.title}
                  excerpt={post.excerpt}
                  date={post.date}
                  slug={post.slug}
                  readingTime={post.readingTime}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 bg-surface">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-2xl font-bold text-forest mb-4">
            Have a pet care question?
          </h2>
          <p className="text-body-text mb-8">
            Sheryl is happy to help with personalized advice.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-sage hover:bg-sage-dark text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            Ask Sheryl
          </Link>
        </div>
      </section>
    </>
  );
}
```

- [ ] **Step 2: Rewrite blog post page**

```tsx
// src/app/blog/[slug]/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import BlogCard from "@/components/BlogCard";
import StructuredData from "@/components/StructuredData";
import PhoneCTA from "@/components/PhoneCTA";
import { getBlogPost, getAllBlogPosts } from "@/content/blog";
import { articleSchema, breadcrumbSchema } from "@/lib/structured-data";

export async function generateStaticParams() {
  return getAllBlogPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const post = getBlogPost(slug);
  if (!post) return { title: "Not Found" };

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const post = getBlogPost(slug);
  if (!post) notFound();

  const relatedPosts = getAllBlogPosts().filter((p) => p.slug !== post.slug);
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <StructuredData
        data={[
          articleSchema(post),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Blog", url: "/blog" },
            { name: post.title, url: `/blog/${post.slug}` },
          ]),
        ]}
      />

      {/* Header */}
      <section className="bg-surface py-12 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="text-sage hover:text-sage-dark font-medium text-sm mb-6 inline-block"
          >
            ← Back to Blog
          </Link>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-forest mb-4">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-body-text/70 text-sm">
            <span>{post.author}</span>
            <span>·</span>
            <time dateTime={post.date}>{formattedDate}</time>
            <span>·</span>
            <span>{post.readingTime} min read</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="py-12 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-body-text leading-relaxed">
          {post.content.split("\n").map((line, idx) => {
            if (line.startsWith("## ")) {
              return (
                <h2
                  key={idx}
                  className="font-serif text-2xl font-bold text-forest mt-10 mb-4"
                >
                  {line.replace("## ", "")}
                </h2>
              );
            }
            if (line.startsWith("### ")) {
              return (
                <h3
                  key={idx}
                  className="font-serif text-xl font-bold text-forest mt-8 mb-3"
                >
                  {line.replace("### ", "")}
                </h3>
              );
            }
            if (line.startsWith("- ")) {
              return (
                <li key={idx} className="ml-6 mb-2">
                  {line.replace("- ", "")}
                </li>
              );
            }
            if (line.trim() === "") return <br key={idx} />;
            return (
              <p key={idx} className="mb-4">
                {line}
              </p>
            );
          })}
        </div>
      </article>

      {/* CTA */}
      <section className="py-12 px-4 sm:px-6 bg-surface">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-2xl font-bold text-forest mb-4">
            Need Professional Pet Care?
          </h2>
          <p className="text-body-text mb-6">
            Call or text Sheryl to learn about services and schedule a visit.
          </p>
          <PhoneCTA />
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-12 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-serif text-2xl font-bold text-forest mb-6">
              More Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPosts.map((p) => (
                <BlogCard
                  key={p.id}
                  title={p.title}
                  excerpt={p.excerpt}
                  date={p.date}
                  slug={p.slug}
                  readingTime={p.readingTime}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
```

- [ ] **Step 3: Verify build passes**

Run: `npm run build`
Expected: Build succeeds.

- [ ] **Step 4: Commit**

```bash
git add src/app/blog/page.tsx src/app/blog/\\[slug\\]/page.tsx
git commit -m "feat: refresh blog pages with new styling and article structured data"
```

---

## Task 13: Sitemap & Metadata Cleanup

**Files:**
- Create: `src/app/sitemap.ts`
- Modify: `src/lib/metadata.ts`

- [ ] **Step 1: Create dynamic sitemap**

```ts
// src/app/sitemap.ts
import type { MetadataRoute } from "next";
import { getAllAreas } from "@/content/areas";
import { getAllBlogPosts } from "@/content/blog";

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || "https://www.hoofpawpet.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const areas = getAllAreas().map((area) => ({
    url: `${BASE_URL}/areas/${area.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  const posts = getAllBlogPosts().map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "yearly" as const,
    priority: 0.5,
  }));

  return [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/areas`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...areas,
    {
      url: `${BASE_URL}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.6,
    },
    ...posts,
    {
      url: `${BASE_URL}/faq`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.7,
    },
  ];
}
```

- [ ] **Step 2: Clean up old metadata.ts**

Replace the old metadata utilities with a simpler version since we now use Next.js built-in metadata in each page:

```ts
// src/lib/metadata.ts
// Legacy file — kept for reference during migration.
// Each page now exports its own metadata object directly.
// This file can be deleted once all pages are migrated.

export {};
```

- [ ] **Step 3: Verify sitemap generates correctly**

Run: `npm run build`
Expected: Build succeeds. Sitemap should be generated at `/sitemap.xml`.

- [ ] **Step 4: Commit**

```bash
git add src/app/sitemap.ts src/lib/metadata.ts
git commit -m "feat: add dynamic XML sitemap and clean up legacy metadata helper"
```

---

## Task 14: Final Cleanup & Verification

**Files:**
- Various cleanup across project

- [ ] **Step 1: Remove unused files and imports**

Remove any remaining references to the old `Hero` component, old `createMetadata`/`createPageMetadata` imports, and the horse-care directory:

```bash
# Verify Hero.tsx is deleted
ls src/components/Hero.tsx 2>/dev/null && echo "STILL EXISTS" || echo "OK - deleted"

# Verify horse-care is deleted
ls src/app/horse-care/ 2>/dev/null && echo "STILL EXISTS" || echo "OK - deleted"
```

- [ ] **Step 2: Run full build**

Run: `npm run build`
Expected: Build succeeds with zero errors. All pages render:
- `/` (homepage)
- `/services`
- `/about`
- `/areas` + 5 city pages
- `/contact`
- `/faq`
- `/blog` + 2 blog posts
- `/sitemap.xml`

- [ ] **Step 3: Run lint**

Run: `npm run lint`
Expected: No lint errors.

- [ ] **Step 4: Start dev server and spot-check**

Run: `npm run dev`
Manually verify in browser:
- Sticky header with tap-to-call button
- Homepage sections render in order
- Mobile hamburger menu works
- Service cards expand
- FAQ accordion animates
- Location pages have unique content
- Contact form submits (will fail without Formspree ID — expected)
- Footer area links work

- [ ] **Step 5: Commit all remaining changes**

```bash
git add -A
git commit -m "feat: complete Hoof & Paw website redesign — Soft Sage brand, mobile-first, local SEO"
```

---

## Summary

| Task | What it builds |
|------|---------------|
| 1 | Foundation: Soft Sage palette, Lora + Inter fonts |
| 2 | Content data: services, areas, testimonials |
| 3 | Placeholder images for development |
| 4 | Shared components: PhoneCTA, TrustBar, StructuredData |
| 5 | Header (sticky, mobile) + Footer (area links) |
| 6 | Homepage: service-forward with Sheryl's personal touch |
| 7 | About Sheryl page with bio and photo grid |
| 8 | Services page with photo cards + expandable details |
| 9 | Location pages: areas hub + 5 city pages for SEO |
| 10 | Contact page: phone-first + working Formspree form |
| 11 | FAQ page: animated accordion + JSON-LD structured data |
| 12 | Blog pages: refreshed styling + article structured data |
| 13 | Dynamic XML sitemap + metadata cleanup |
| 14 | Final cleanup, build verification, spot-check |
