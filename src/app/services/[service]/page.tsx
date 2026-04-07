import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PhoneCTA from "@/components/PhoneCTA";
import FAQItem from "@/components/FAQItem";
import StructuredData from "@/components/StructuredData";
import { services, getService } from "@/content/services";
import { getTestimonials } from "@/content/testimonials";
import { breadcrumbSchema, localBusinessSchema } from "@/lib/structured-data";

export async function generateStaticParams() {
  return services.map((s) => ({ service: s.id }));
}

export async function generateMetadata(props: {
  params: Promise<{ service: string }>;
}): Promise<Metadata> {
  const { service: serviceId } = await props.params;
  const service = getService(serviceId);
  if (!service) return { title: "Not Found" };

  return {
    title: `${service.name} in Broward County`,
    description: `${service.description} Serving Plantation, Davie, Cooper City, Sunrise, and more. Call (954) 807-1716.`,
  };
}

export default async function ServicePage(props: {
  params: Promise<{ service: string }>;
}) {
  const { service: serviceId } = await props.params;
  const service = getService(serviceId);
  if (!service) notFound();

  // Find a testimonial related to this service
  const relatedTestimonial = getTestimonials().find(
    (t) => t.service === service.id
  );

  // Split long description into paragraphs
  const paragraphs = service.longDescription.split("\n\n");

  return (
    <>
      <StructuredData
        data={[
          localBusinessSchema(),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Services", url: "/services" },
            { name: service.name, url: `/services/${service.id}` },
          ]),
        ]}
      />

      {/* Hero */}
      <section className="bg-surface py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2 rounded-xl overflow-hidden border border-beige/30">
            <Image
              src={service.image}
              alt={service.imageAlt}
              width={600}
              height={400}
              className="w-full h-auto object-cover"
              priority
            />
          </div>
          <div className="w-full md:w-1/2">
            <Link
              href="/services"
              className="text-sage hover:text-sage-dark text-sm font-medium mb-3 inline-block"
            >
              &larr; All Services
            </Link>
            <h1 className="font-serif text-4xl font-bold text-forest mb-3">
              {service.name}
            </h1>
            <p className="text-sage font-medium mb-4">{service.tagline}</p>
            <p className="text-body-text leading-relaxed">{service.description}</p>
            <div className="mt-6">
              <PhoneCTA />
            </div>
          </div>
        </div>
      </section>

      {/* Long-form content */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto space-y-6 text-body-text leading-relaxed">
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
      </section>

      {/* What's Included */}
      <section className="py-12 px-4 sm:px-6 bg-surface">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-2xl font-bold text-forest mb-6">
            What&apos;s Included
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {service.includes.map((item) => (
              <div key={item} className="flex items-start gap-3 text-body-text">
                <span className="text-sage font-bold mt-0.5">✓</span>
                <span className="leading-relaxed">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dog Walking Photos */}
      {service.id === "dog-walking" && (
        <section className="py-12 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-2xl font-bold text-forest mb-6 text-center">
              Happy Walkers
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="rounded-xl overflow-hidden border border-beige/30">
                <Image
                  src="/images/german-shepherd-walk.jpg"
                  alt="Happy German Shepherd smiling on a walk in Broward County"
                  width={500}
                  height={600}
                  className="w-full h-72 object-cover object-top"
                />
              </div>
              <div className="rounded-xl overflow-hidden border border-beige/30">
                <Image
                  src="/images/doodle-walk-park.jpg"
                  alt="Goldendoodle on a leash enjoying a walk at a Broward County park"
                  width={500}
                  height={600}
                  className="w-full h-72 object-cover object-top"
                />
              </div>
              <div className="rounded-xl overflow-hidden border border-beige/30">
                <Image
                  src="/images/yorkie-smiling.jpg"
                  alt="Smiling Yorkie being held outdoors after a visit"
                  width={500}
                  height={600}
                  className="w-full h-72 object-cover object-top"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Pet Sitting Photo */}
      {service.id === "dog-sitting" && (
        <section className="py-12 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl font-bold text-forest mb-6 text-center">
              Comfortable at Home
            </h2>
            <div className="rounded-xl overflow-hidden border border-beige/30 max-w-lg mx-auto">
              <Image
                src="/images/two-dogs-home.jpg"
                alt="Two dogs relaxing together at home during a pet sitting visit"
                width={600}
                height={500}
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </section>
      )}

      {/* Horse Care Photo Gallery - only on horse-care page */}
      {service.id === "horse-care" && (
        <section className="py-12 px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-serif text-2xl font-bold text-forest mb-6 text-center">
              Life at the Barn
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="rounded-xl overflow-hidden border border-beige/30">
                <video
                  src="/images/horse-hay-stall.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden border border-beige/30">
                <Image
                  src="/images/horse-bath-sunlight.jpg"
                  alt="Grey horse getting bathed in the sunlight"
                  width={400}
                  height={500}
                  className="w-full h-64 object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden border border-beige/30">
                <Image
                  src="/images/pony-stall-door.jpg"
                  alt="White pony peeking over a stall door"
                  width={400}
                  height={500}
                  className="w-full h-64 object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Detail Section */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-2xl font-bold text-forest mb-4">
            {service.detailSection.heading}
          </h2>
          <div className="space-y-6 text-body-text leading-relaxed">
            {service.detailSection.body.split("\n\n").map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      {relatedTestimonial && (
        <section className="py-12 px-4 sm:px-6 bg-surface">
          <div className="max-w-3xl mx-auto">
            <div className="bg-warm-white rounded-xl p-8 border border-beige/50 text-center">
              <div className="text-sage text-3xl mb-4" aria-hidden="true">
                &ldquo;
              </div>
              <p className="text-body-text leading-relaxed text-lg mb-4">
                {relatedTestimonial.quote}
              </p>
              <p className="text-forest font-semibold text-sm">
                - {relatedTestimonial.name}, {relatedTestimonial.city}
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Popular Areas */}
      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-2xl font-bold text-forest mb-4">
            Where This Service Is Most Popular
          </h2>
          <p className="text-body-text leading-relaxed mb-4">
            Sheryl provides {service.name.toLowerCase()} across Broward County,
            with especially strong demand in these communities:
          </p>
          <div className="flex flex-wrap gap-2">
            {service.popularAreas.map((area) => {
              const slug = area.toLowerCase().replace(/\s+/g, "-");
              return (
                <Link
                  key={area}
                  href={`/areas/${slug}`}
                  className="bg-sage text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-sage-dark transition-colors"
                >
                  {area}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-12 px-4 sm:px-6 bg-surface">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-2xl font-bold text-forest mb-6">
            Common Questions About {service.name}
          </h2>
          <div className="divide-y divide-beige/50">
            {service.faqs.map((faq) => (
              <FAQItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 sm:px-6 bg-sage">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-white/90 mb-8">
            Every new client starts with a free meet and greet. Call or text
            Sheryl to schedule yours.
          </p>
          <PhoneCTA
            variant="secondary"
            className="bg-white !text-sage hover:bg-warm-white"
          />
        </div>
      </section>
    </>
  );
}
