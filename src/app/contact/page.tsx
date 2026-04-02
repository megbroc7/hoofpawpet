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
