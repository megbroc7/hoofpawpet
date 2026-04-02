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
            <p className="font-serif font-bold text-xl mb-3">Hoof &amp; Paw</p>
            <p className="text-white/70 text-sm mb-4">
              Personal pet sitting &amp; horse care in Broward County, FL
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
            <p className="text-white/50 text-xs mt-4">Insured &amp; Bonded</p>
          </div>
        </div>

        <div className="border-t border-white/20 pt-6">
          <p className="text-center text-white/50 text-sm">
            &copy; {currentYear} Hoof &amp; Paw Pet Services. All rights reserved.
            Located in Plantation, FL.
          </p>
        </div>
      </div>
    </footer>
  );
}
