import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PhoneCTA from "@/components/PhoneCTA";
import TestimonialCard from "@/components/TestimonialCard";
import StructuredData from "@/components/StructuredData";
import { getAllAreas, getArea } from "@/content/areas";
import { services } from "@/content/services";
import { getTestimonialsByCity } from "@/content/testimonials";
import { breadcrumbSchema, localBusinessSchema } from "@/lib/structured-data";

export async function generateStaticParams() {
  return getAllAreas().map((area) => ({ city: area.slug }));
}

export async function generateMetadata(props: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city } = await props.params;
  const area = getArea(city);
  if (!area) return { title: "Not Found" };

  return {
    title: area.headline,
    description: `${area.description.slice(0, 155)}...`,
  };
}

export default async function CityPage(props: {
  params: Promise<{ city: string }>;
}) {
  const { city } = await props.params;
  const area = getArea(city);
  if (!area) notFound();

  const cityTestimonials = getTestimonialsByCity(area.name);
  const areaServices = area.popularServices
    .map((id) => services.find((s) => s.id === id))
    .filter(Boolean);

  return (
    <>
      <StructuredData
        data={[
          localBusinessSchema(),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Areas We Serve", url: "/areas" },
            { name: area.name, url: `/areas/${area.slug}` },
          ]),
        ]}
      />

      {/* Hero */}
      <section className="bg-surface py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-serif text-4xl font-bold text-forest mb-4">
            {area.headline}
          </h1>
          <p className="text-body-text text-lg leading-relaxed">
            {area.description}
          </p>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-2xl font-bold text-forest mb-6">
            Why {area.name} Pet Owners Choose Sheryl
          </h2>
          <ul className="space-y-3">
            {area.highlights.map((h) => (
              <li key={h} className="flex items-start gap-3 text-body-text">
                <span className="text-sage font-bold mt-1">✓</span>
                <span className="leading-relaxed">{h}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Popular Services */}
      <section className="py-12 px-4 sm:px-6 bg-surface">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-2xl font-bold text-forest mb-6">
            Popular Services in {area.name}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {areaServices.map(
              (service) =>
                service && (
                  <Link
                    key={service.id}
                    href={`/services#${service.id}`}
                    className="bg-white rounded-xl border border-beige/50 p-4 hover:shadow-md transition-shadow text-center"
                  >
                    <h3 className="font-semibold text-forest">{service.name}</h3>
                    <p className="text-body-text text-sm mt-1">
                      {service.tagline}
                    </p>
                  </Link>
                )
            )}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      {cityTestimonials.length > 0 && (
        <section className="py-12 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl font-bold text-forest mb-6">
              From a {area.name} Client
            </h2>
            <TestimonialCard {...cityTestimonials[0]} />
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 bg-honey">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl font-bold text-white mb-4">
            Need Pet Care in {area.name}?
          </h2>
          <p className="text-white/90 mb-8">
            {area.slug === "plantation"
              ? "Sheryl is right here in Plantation — call or text anytime."
              : `Sheryl serves ${area.name} regularly from nearby Plantation.`}
          </p>
          <PhoneCTA variant="secondary" className="bg-white !text-honey hover:bg-warm-white" />
        </div>
      </section>
    </>
  );
}
