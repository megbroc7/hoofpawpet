import type { Metadata } from "next";
import PhoneCTA from "@/components/PhoneCTA";
import ServiceCard from "@/components/ServiceCard";
import StructuredData from "@/components/StructuredData";
import { services } from "@/content/services";
import { breadcrumbSchema, localBusinessSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Pet sitting and horse care services in Broward County by Sheryl. Dog walking, cat sitting, puppy visits, overnight care, horse turnout, and more.",
};

export default function ServicesPage() {
  return (
    <>
      <StructuredData
        data={[
          localBusinessSchema(),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Services", url: "/services" },
          ]),
        ]}
      />

      {/* Hero */}
      <section className="bg-surface py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-serif text-4xl font-bold text-forest mb-4">
            Services
          </h1>
          <p className="text-body-text text-lg leading-relaxed">
            Every service is personally handled by Sheryl. No strangers, no
            subcontractors — just trusted, attentive care for your pets.
          </p>
        </div>
      </section>

      {/* Service Cards */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.id} {...service} />
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 px-4 sm:px-6 bg-surface">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-2xl font-bold text-forest mb-4">
            Not sure which service you need?
          </h2>
          <p className="text-body-text mb-8">
            Call or text Sheryl — she&apos;s happy to chat about your pet&apos;s needs and
            recommend the right plan.
          </p>
          <PhoneCTA />
        </div>
      </section>
    </>
  );
}
