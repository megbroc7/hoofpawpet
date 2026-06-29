import type { Metadata } from "next";
import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import ReviewCTA from "@/components/ReviewCTA";
import StructuredData from "@/components/StructuredData";
import { PHONE_DISPLAY, PHONE_NUMBER } from "@/components/PhoneCTA";
import { breadcrumbSchema, localBusinessSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Sheryl at Hoof & Paw Pet Services. Call or text (954) 804-1716 for pet sitting and horse care in Broward County, FL.",
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
          <p className="text-white/60 text-sm mt-2">
            or email{" "}
            <a
              href="mailto:Hoofandpawpetservice@gmail.com"
              className="text-honey hover:text-honey-light transition-colors"
            >
              Hoofandpawpetservice@gmail.com
            </a>
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

      {/* What to Expect */}
      <section className="py-16 px-4 sm:px-6 bg-surface">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-2xl font-bold text-forest mb-6">
            What Happens When You Reach Out
          </h2>
          <div className="space-y-6 text-body-text leading-relaxed">
            <p>
              When you call, text, or send a message through the form above,
              you&apos;re reaching Sheryl directly. There&apos;s no call center,
              no automated system, and no middleman. She reads every message
              herself and responds personally, usually within a few hours
              during the day or by the next morning if you reach out in the
              evening.
            </p>
            <p>
              If you&apos;re a new client, Sheryl will want to learn a little
              about your pets, your schedule, and what kind of care you&apos;re
              looking for. From there, she&apos;ll set up a meet and greet at
              your home so she can get to know your animals in person, see
              their environment, and go over any specific instructions or
              concerns. This visit is free, and there&apos;s no obligation to
              book. It&apos;s simply a chance for everyone, including your pets,
              to get comfortable before the first real visit.
            </p>
            <p>
              Sheryl serves pet owners across Broward County, including
              Plantation, Davie, Cooper City, Sunrise, Southwest Ranches,
              Weston, Pembroke Pines, and Hollywood. Whether you need daily
              dog walking, vacation pet sitting, cat care, puppy visits, or
              horse turnout and barn care, she can help. If you&apos;re unsure
              what service fits your situation, just ask. She&apos;s happy to
              talk it through and recommend what makes the most sense for
              your pets and your schedule.
            </p>
            <p>
              The best time to reach Sheryl by phone is between 8 AM and 7 PM,
              but text messages and form submissions are welcome anytime. If
              you&apos;re planning a vacation or have an upcoming trip, it&apos;s
              a good idea to reach out at least two weeks in advance so she
              can reserve your dates. For recurring services like daily walks,
              she&apos;ll work with you to set up a consistent schedule that
              fits your routine.
            </p>
          </div>
        </div>
      </section>

      {/* Leave a Review */}
      <section className="bg-forest text-white py-14 px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-serif text-2xl font-bold mb-3">
            Already one of Sheryl&apos;s clients?
          </h2>
          <p className="text-white/80 mb-6">
            A quick Google review means the world to a small, local business
            &mdash; and helps other Broward pet owners find trustworthy care.
          </p>
          <ReviewCTA variant="secondary" />
        </div>
      </section>

      {/* Info */}
      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="font-semibold text-forest mb-2">Located In</h3>
            <p className="text-body-text text-sm">Plantation, FL</p>
          </div>
          <div>
            <h3 className="font-semibold text-forest mb-2">Service Areas</h3>
            <p className="text-body-text text-sm">
              Plantation, Davie, Cooper City, Sunrise, SW Ranches, Weston, Pembroke Pines, Hollywood
            </p>
          </div>
          <div>
            <h3 className="font-semibold text-forest mb-2">Find Us</h3>
            <div className="space-y-1">
              <a
                href="https://www.facebook.com/p/Hoof-and-Paw-Pet-Service-61574051387096/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-sage hover:text-sage-dark text-sm font-medium"
              >
                Facebook
              </a>
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
