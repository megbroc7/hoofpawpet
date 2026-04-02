import type { Metadata } from "next";
import { getAllAreas } from "@/content/areas";
import CityCard from "@/components/CityCard";
import PhoneCTA from "@/components/PhoneCTA";
import StructuredData from "@/components/StructuredData";
import { breadcrumbSchema, localBusinessSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Areas We Serve",
  description:
    "Hoof & Paw Pet Services serves Plantation, Davie, Cooper City, Sunrise, and Southwest Ranches in Broward County, FL. Find pet sitting near you.",
};

export default function AreasPage() {
  const areas = getAllAreas();

  return (
    <>
      <StructuredData
        data={[
          localBusinessSchema(),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Areas We Serve", url: "/areas" },
          ]),
        ]}
      />

      <section className="bg-surface py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-serif text-4xl font-bold text-forest mb-4">
            Areas We Serve
          </h1>
          <p className="text-body-text text-lg leading-relaxed">
            Sheryl is based in Plantation and personally serves families and pet
            owners across Broward County.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area) => (
            <CityCard key={area.slug} {...area} />
          ))}
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 bg-surface">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-2xl font-bold text-forest mb-4">
            Outside these areas?
          </h2>
          <p className="text-body-text mb-8">
            If you&apos;re nearby in Broward County, reach out — Sheryl may still be
            able to help.
          </p>
          <PhoneCTA />
        </div>
      </section>
    </>
  );
}
