import type { Metadata } from "next";
import Image from "next/image";
import PhoneCTA from "@/components/PhoneCTA";
import PhotoGrid from "@/components/PhotoGrid";
import StructuredData from "@/components/StructuredData";
import { breadcrumbSchema, localBusinessSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "About Sheryl",
  description:
    "Meet Sheryl, the heart behind Hoof & Paw Pet Services. A Plantation resident and lifelong animal lover providing personal pet care in Broward County, FL.",
};

export default function AboutPage() {
  const barnPhotos = [
    { src: "/images/gallery-1.svg", alt: "Sheryl's horses at the Davie barn" },
    { src: "/images/gallery-2.svg", alt: "Chickens at Sheryl's barn" },
    { src: "/images/gallery-3.svg", alt: "Sheryl's dogs at home" },
    { src: "/images/gallery-4.svg", alt: "Sheryl with her grandson Isaac" },
  ];

  return (
    <>
      <StructuredData
        data={[
          localBusinessSchema(),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "About Sheryl", url: "/about" },
          ]),
        ]}
      />

      {/* Hero */}
      <section className="bg-surface py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="w-48 h-48 md:w-64 md:h-64 rounded-2xl overflow-hidden flex-shrink-0 border-4 border-sage/30">
            <Image
              src="/images/sheryl-hero.svg"
              alt="Sheryl with animals at her barn"
              width={256}
              height={256}
              className="w-full h-full object-cover"
              priority
            />
          </div>
          <div>
            <h1 className="font-serif text-4xl font-bold text-forest mb-4">
              Meet Sheryl
            </h1>
            <p className="text-body-text text-lg leading-relaxed">
              The heart behind Hoof &amp; Paw Pet Services. Animals have been part
              of her life for as long as she can remember.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto space-y-8 text-body-text leading-relaxed">
          <p>
            Sheryl is the heart behind Hoof &amp; Paw Pet Services. Animals have
            been part of her life for as long as she can remember, and she
            quickly noticed that so many families struggled to find pet care that
            felt truly personal. She wanted to change that — to create a service
            where pets are looked after with the same love and attention she
            gives her own.
          </p>

          <p>
            Originally from Michigan, Sheryl grew up right here in South Florida
            after her family moved to Hollywood when she was a little girl. She
            attended Hollywood Hills High School and eventually settled in
            Plantation, where she raised two daughters. Today, Plantation is
            still home.
          </p>

          <p>
            Her barn in Davie is filled with life — horses, chickens, pigs,
            dogs, and cats — and caring for them keeps her grounded in the daily
            rhythms of animal life. That same devotion extends to every home and
            barn she visits. Clients often say it feels like she treats their
            pets as if they were her own, and the glowing reviews reflect the
            care she pours into each visit.
          </p>

          <p>
            When she isn&apos;t busy tending to four-legged friends, you&apos;ll find
            Sheryl with her grandson, Isaac, who brings just as much joy and
            energy as the barnyard.
          </p>
        </div>
      </section>

      {/* Photo Grid */}
      <section className="py-12 px-4 sm:px-6 bg-surface">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-2xl font-bold text-forest text-center mb-8">
            Life at the Barn
          </h2>
          <PhotoGrid photos={barnPhotos} />
        </div>
      </section>

      {/* Closing CTA */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl font-bold text-forest mb-4">
            A Neighbor&apos;s Promise
          </h2>
          <p className="text-body-text text-lg mb-8 leading-relaxed">
            Hoof &amp; Paw Pet Services isn&apos;t just a business for Sheryl — it&apos;s a
            neighbor&apos;s promise. She&apos;s local, she&apos;s trusted, and she&apos;s ready to
            be there for you and your animals whenever you need her.
          </p>
          <PhoneCTA />
        </div>
      </section>
    </>
  );
}
