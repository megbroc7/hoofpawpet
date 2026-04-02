import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl">🐾</span>
              <span className="font-bold text-2xl">Hoof & Paw</span>
            </div>
            <p className="text-gray-400">
              Dependable Pet & Barn Care in Broward County, Florida
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/services"
                  className="text-gray-400 hover:text-amber-400 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/horse-care"
                  className="text-gray-400 hover:text-amber-400 transition-colors"
                >
                  Horse Care
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-400 hover:text-amber-400 transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-gray-400 hover:text-amber-400 transition-colors"
                >
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="font-bold text-lg mb-4">Service Areas</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Plantation</li>
              <li>Davie</li>
              <li>Cooper City</li>
              <li>Sunrise</li>
              <li>Southwest Ranches</li>
            </ul>
          </div>

          {/* Social & Contact */}
          <div>
            <h3 className="font-bold text-lg mb-4">Connect With Us</h3>
            <div className="space-y-3">
              <a
                href="https://www.yelp.com/biz/hoof-and-paw-pet-services-plantation"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-400 hover:text-amber-400 transition-colors"
              >
                Yelp Reviews
              </a>
              <a
                href="https://nextdoor.com/pages/hoof-and-paw-pet-service-plantation-fl/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-gray-400 hover:text-amber-400 transition-colors"
              >
                Nextdoor Community
              </a>
              <Link
                href="/contact"
                className="block text-gray-400 hover:text-amber-400 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 pt-8">
          <p className="text-center text-gray-400">
            &copy; {currentYear} Hoof & Paw Pet Services. All rights reserved.
            Located in Plantation, FL | Serving Broward County
          </p>
        </div>
      </div>
    </footer>
  );
}
