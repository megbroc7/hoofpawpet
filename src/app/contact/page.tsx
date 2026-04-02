import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Contact Us",
  "Get in touch with Hoof & Paw Pet Services in Plantation, FL. Schedule your pet sitting or horse care services today."
);

export default function ContactPage() {
  return (
    <>
      <Hero
        title="Get in Touch"
        tagline="Schedule your pet or horse care services with Hoof & Paw"
        background="light"
      />

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <div className="space-y-12">
                {/* Location */}
                <div>
                  <h3 className="font-bold text-xl text-gray-900 mb-3">Location</h3>
                  <p className="text-gray-700">
                    Plantation, FL
                    <br />
                    Broward County, Florida
                  </p>
                </div>

                {/* Service Areas */}
                <div>
                  <h3 className="font-bold text-xl text-gray-900 mb-3">Service Areas</h3>
                  <ul className="space-y-2 text-gray-700">
                    <li>✓ Plantation</li>
                    <li>✓ Davie</li>
                    <li>✓ Cooper City</li>
                    <li>✓ Sunrise</li>
                    <li>✓ Southwest Ranches</li>
                  </ul>
                </div>

                {/* Social & Reviews */}
                <div>
                  <h3 className="font-bold text-xl text-gray-900 mb-3">Connect With Us</h3>
                  <div className="space-y-3">
                    <a
                      href="https://www.yelp.com/biz/hoof-and-paw-pet-services-plantation"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-amber-600 hover:text-amber-700 font-semibold"
                    >
                      Read Reviews on Yelp
                    </a>
                    <a
                      href="https://nextdoor.com/pages/hoof-and-paw-pet-service-plantation-fl/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-amber-600 hover:text-amber-700 font-semibold"
                    >
                      Follow on Nextdoor
                    </a>
                  </div>
                </div>

                {/* Business Info */}
                <div>
                  <h3 className="font-bold text-xl text-gray-900 mb-3">About Us</h3>
                  <p className="text-gray-700 text-sm leading-relaxed">
                    Hoof & Paw Pet Services provides professional, insured pet sitting and
                    horse care in Broward County. We're experienced with dogs, cats, and horses,
                    and dedicated to your pet's wellbeing.
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl shadow-lg p-8 border border-amber-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">Send us a Message</h2>
                <ContactForm />
              </div>
            </div>
          </div>

          {/* FAQs Quick Link */}
          <div className="bg-amber-50 rounded-lg p-8 border border-amber-200 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Have Questions?</h3>
            <p className="text-gray-700 mb-6">
              Check out our FAQ page for answers to common questions about our services,
              booking process, and pet care.
            </p>
            <a
              href="/faq"
              className="inline-block text-amber-600 hover:text-amber-700 font-semibold"
            >
              Visit FAQ →
            </a>
          </div>
        </div>
      </section>

      {/* Response Time Notice */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-green-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">We're Here to Help</h2>
          <p className="text-lg">
            We typically respond to inquiries within 24 hours during business days. Thank you
            for your interest in Hoof & Paw Pet Services!
          </p>
        </div>
      </section>
    </>
  );
}
