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
