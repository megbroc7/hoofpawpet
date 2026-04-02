import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
  async redirects() {
    return [
      // Old location pages → new area pages
      {
        source: "/weston-dog-sitting-and-walking",
        destination: "/areas/plantation",
        permanent: true,
      },
      {
        source: "/dog-walking-and-sitting-cooper-city-fl",
        destination: "/areas/cooper-city",
        permanent: true,
      },
      {
        source: "/davie-dog-walking-and-sitting",
        destination: "/areas/davie",
        permanent: true,
      },
      {
        source: "/sunrise-dog-sitting-and-walking",
        destination: "/areas/sunrise",
        permanent: true,
      },
      // Old location pages → new area pages (additional)
      {
        source: "/davie-horse-care",
        destination: "/areas/davie",
        permanent: true,
      },
      {
        source: "/horse-care-cooper-city",
        destination: "/areas/cooper-city",
        permanent: true,
      },
      {
        source: "/davie-dog-sitting",
        destination: "/areas/davie",
        permanent: true,
      },
      {
        source: "/sunrise-dog-sitting",
        destination: "/areas/sunrise",
        permanent: true,
      },
      {
        source: "/dog-sitting-cooper-city-fl",
        destination: "/areas/cooper-city",
        permanent: true,
      },
      {
        source: "/plantation-dog-sitting",
        destination: "/areas/plantation",
        permanent: true,
      },
      // Old pages → new equivalents
      {
        source: "/faq-pet-sitting-horse-care-broward",
        destination: "/faq",
        permanent: true,
      },
      {
        source: "/home",
        destination: "/",
        permanent: true,
      },
      // Old utility pages
      {
        source: "/appointments",
        destination: "/contact",
        permanent: true,
      },
      // Old blog category and tag pages → blog index
      {
        source: "/blog/category/:path*",
        destination: "/blog",
        permanent: true,
      },
      {
        source: "/blog/tag/:path*",
        destination: "/blog",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
