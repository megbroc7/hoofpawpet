import Link from "next/link";
import Hero from "@/components/Hero";
import ServiceCard from "@/components/ServiceCard";
import { createMetadata } from "@/lib/metadata";

export const metadata = createMetadata();

export default function Home() {
  const services = [
    {
      icon: "🐕",
      title: "Dog Walking",
      description:
        "Professional dog walking with leash walks, yard breaks, water, and photo updates. 20, 30, or 45-minute sessions.",
    },
    {
      icon: "🏠",
      title: "Dog Sitting",
      description:
        "In-home dog care when you're away. Daily visits with exercise, feeding, and updates to keep your pup happy.",
    },
    {
      icon: "🐱",
      title: "Cat Sitting",
      description:
        "Attentive cat care including feeding, litter box maintenance, play, and medication administration if needed.",
    },
    {
      icon: "👶",
      title: "Puppy Visits",
      description:
        "Special care for young pups including potty training support, basic manners reinforcement, and socialization.",
    },
    {
      icon: "🌙",
      title: "Overnight Pet Sitting",
      description:
        "Extended overnight care for your pets. Perfect for vacations, emergencies, or when you need peace of mind.",
    },
    {
      icon: "🐴",
      title: "Horse Care & Turnout",
      description:
        "Comprehensive equine care in Southwest Ranches: turnout, feeding, stall cleaning, medication admin, and more.",
    },
  ];

  const whyChooseUs = [
    {
      icon: "✓",
      title: "Insured & Bonded",
      description: "Full insurance coverage for your peace of mind.",
    },
    {
      icon: "⭐",
      title: "Experienced Team",
      description: "Years of experience with dogs, cats, and horses.",
    },
    {
      icon: "📸",
      title: "Photo Updates",
      description: "Stay connected with photos and updates from every visit.",
    },
    {
      icon: "📍",
      title: "Local Expertise",
      description: "Based in Plantation, serving all of Broward County.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Dependable Pet & Barn Care"
        tagline="Professional pet sitting and horse care you can trust. Serving Broward County with insured, experienced care."
        ctaText="Book a Visit Today"
        ctaHref="/contact"
      />

      {/* Services Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <ServiceCard
                key={service.title}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="text-amber-600 hover:text-amber-700 font-semibold inline-flex items-center gap-2"
            >
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-amber-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-gray-900">
            Why Choose Hoof & Paw?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {whyChooseUs.map((item) => (
              <div key={item.title} className="flex gap-6">
                <div className="text-4xl flex-shrink-0">{item.icon}</div>
                <div>
                  <h3 className="font-bold text-xl mb-2 text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-gray-700">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8 text-gray-900">
            Serving Broward County
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-8">
            {["Plantation", "Davie", "Cooper City", "Sunrise", "Southwest Ranches"].map(
              (area) => (
                <div
                  key={area}
                  className="bg-amber-50 rounded-lg p-4 border border-amber-200"
                >
                  <p className="font-semibold text-gray-900">{area}</p>
                </div>
              )
            )}
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            We proudly serve Plantation, Davie, Cooper City, Sunrise, and Southwest
            Ranches. Located in Plantation, we're your local pet care experts.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-green-900 text-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">
            What Our Clients Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-green-800 rounded-lg p-8">
              <p className="mb-4 text-green-50">
                "Hoof & Paw took wonderful care of our dog while we were traveling. The
                photo updates made us feel so connected. Highly recommended!"
              </p>
              <p className="font-semibold">— Sarah M., Plantation</p>
            </div>
            <div className="bg-green-800 rounded-lg p-8">
              <p className="mb-4 text-green-50">
                "Our horse has never been healthier thanks to the consistent daily
                turnout care. Professional and knowledgeable team."
              </p>
              <p className="font-semibold">— James K., Southwest Ranches</p>
            </div>
            <div className="bg-green-800 rounded-lg p-8">
              <p className="mb-4 text-green-50">
                "We trust Hoof & Paw completely with our cats. They're reliable, caring,
                and always go the extra mile."
              </p>
              <p className="font-semibold">— Michelle D., Davie</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-amber-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Give Your Pet the Care They Deserve?</h2>
          <p className="mb-8 text-lg opacity-90">
            Contact us today to schedule your first visit or learn more about our services.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-amber-600 font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Get in Touch Today
          </Link>
        </div>
      </section>
    </>
  );
}
