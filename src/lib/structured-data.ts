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
    email: "Hoofandpawpetservice@gmail.com",
    image: `${BASE_URL}/images/dog-walking.jpg`,
    logo: `${BASE_URL}/icon-512.png`,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Plantation",
      addressRegion: "FL",
      addressCountry: "US",
    },
    // Service-area business: clients' homes across Broward County, no
    // storefront. Geo pin on Plantation (base) + explicit service area.
    geo: {
      "@type": "GeoCoordinates",
      latitude: 26.1342,
      longitude: -80.2339,
    },
    areaServed: [
      { "@type": "City", name: "Plantation", addressRegion: "FL" },
      { "@type": "City", name: "Davie", addressRegion: "FL" },
      { "@type": "City", name: "Cooper City", addressRegion: "FL" },
      { "@type": "City", name: "Sunrise", addressRegion: "FL" },
      { "@type": "City", name: "Southwest Ranches", addressRegion: "FL" },
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "07:00",
        closes: "20:00",
      },
    ],
    // Pet-sitting has no dedicated LocalBusiness sub-type, so we keep the
    // generic LocalBusiness type and express the services explicitly via a
    // catalog (Google's recommended pattern).
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Pet Care Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Dog Walking",
            serviceType: "Dog Walking",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Pet Sitting",
            serviceType: "Pet Sitting",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Horse Care",
            serviceType: "Horse Care",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Extended Pet Care",
            serviceType: "Overnight Pet Sitting",
          },
        },
      ],
    },
    sameAs: [
      "https://www.facebook.com/p/Hoof-and-Paw-Pet-Service-61574051387096/",
      "https://www.yelp.com/biz/hoof-and-paw-pet-services-plantation",
      "https://nextdoor.com/pages/hoof-and-paw-pet-service-plantation-fl/",
      "https://www.mapquest.com/us/florida/hoof-and-paw-pet-services-778722709",
    ],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Hoof & Paw Pet Services",
    url: BASE_URL,
    publisher: {
      "@type": "Organization",
      name: "Hoof & Paw Pet Services",
      url: BASE_URL,
      logo: `${BASE_URL}/icon-512.png`,
    },
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
