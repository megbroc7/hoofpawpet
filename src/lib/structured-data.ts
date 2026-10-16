import { getAllAreas } from "@/content/areas";

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || "https://www.hoofpawpet.com";

// Public Maps URL of the Google Business Profile that survived the Sep 2026
// duplicate merge. Kept separate from ReviewCTA's link, which may later become
// a g.page review short link.
const GOOGLE_MAPS_URL = "https://www.google.com/maps?cid=1085558871145528338";

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Hoof & Paw Pet Services",
    description:
      "Personal pet sitting and horse care by Sheryl in Broward County, FL.",
    url: BASE_URL,
    // Solo business: naming Sheryl ties the brand to a real person for
    // search engines and AI assistants.
    founder: {
      "@type": "Person",
      name: "Sheryl",
      jobTitle: "Owner",
      url: `${BASE_URL}/about`,
      image: `${BASE_URL}/images/sheryl-hero.jpg`,
      knowsAbout: ["Pet sitting", "Dog walking", "Cat care", "Horse care"],
    },
    foundingDate: "2023",
    telephone: "+19548041716",
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
      ...getAllAreas().map((area) => ({
        "@type": "City",
        name: area.name,
        addressRegion: area.state,
      })),
      { "@type": "AdministrativeArea", name: "Broward County", addressRegion: "FL" },
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
      GOOGLE_MAPS_URL,
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
    // Posts are bylined to the business, not a person.
    author: {
      "@type": "Organization",
      name: post.author,
      url: BASE_URL,
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
