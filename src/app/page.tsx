import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import PhoneCTA from "@/components/PhoneCTA";
import TrustBar from "@/components/TrustBar";
import TestimonialCard from "@/components/TestimonialCard";
import MeetSherylTeaser from "@/components/MeetSherylTeaser";
import StructuredData from "@/components/StructuredData";
import BlogCard from "@/components/BlogCard";
import { services } from "@/content/services";
import { getAllAreas } from "@/content/areas";
import { getTestimonials } from "@/content/testimonials";
import { getAllBlogPosts } from "@/content/blog";
import { localBusinessSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Hoof & Paw Pet Services | Pet Sitting & Horse Care in Broward County",
  description:
    "Personal pet sitting and horse care by Sheryl in Broward County, FL. Dog walking, cat sitting, overnight care, and horse turnout in Plantation, Davie, Cooper City, Sunrise, and Southwest Ranches. Call (954) 807-1716.",
};

export default function Home() {
  const featuredServices = services.filter((s) =>
    ["dog-walking", "dog-sitting", "cat-sitting", "horse-care"].includes(s.id)
  );
  const areas = getAllAreas();
  const testimonials = getTestimonials();
  const latestPosts = getAllBlogPosts().slice(0, 2);

  return (
    <>
      <StructuredData data={localBusinessSchema()} />

      {/* Hero */}
      <section className="bg-warm-white py-16 sm:py-20 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-forest mb-4 leading-tight">
            Dependable pet care, right in your neighborhood.
          </h1>
          <p className="text-body-text text-lg sm:text-xl mb-8 leading-relaxed">
            Dog walking, pet sitting &amp; horse care in Broward County. Personally
            handled by Sheryl — insured, experienced, and truly local.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <PhoneCTA variant="primary" />
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 border-2 border-sage text-sage hover:bg-sage hover:text-white font-bold py-3 px-6 rounded-lg transition-colors"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <TrustBar />

      {/* Featured Services */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-forest text-center mb-10">
            How Sheryl Can Help
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {featuredServices.map((service) => (
              <Link
                key={service.id}
                href={`/services#${service.id}`}
                className="bg-white rounded-xl border border-beige/50 overflow-hidden hover:shadow-md transition-shadow group"
              >
                <div className="aspect-[4/3] overflow-hidden bg-surface">
                  <Image
                    src={service.image}
                    alt={service.imageAlt}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-forest text-sm sm:text-base">
                    {service.name}
                  </h3>
                  <p className="text-body-text text-xs sm:text-sm mt-1 line-clamp-2">
                    {service.tagline}
                  </p>
                </div>
              </Link>
            ))}
          </div>
          <p className="text-center mt-6">
            <Link
              href="/services"
              className="text-sage hover:text-sage-dark font-semibold text-sm"
            >
              See all services including puppy visits, overnight care &amp; more →
            </Link>
          </p>
        </div>
      </section>

      {/* Meet Sheryl Teaser */}
      <MeetSherylTeaser />

      {/* Testimonials */}
      <section className="py-16 px-4 sm:px-6 bg-surface">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-3xl font-bold text-forest text-center mb-10">
            What Pet Owners Say
          </h2>
          <div className="flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory sm:grid sm:grid-cols-3 sm:overflow-visible">
            {testimonials.map((t) => (
              <div key={t.id} className="snap-start">
                <TestimonialCard {...t} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas Served */}
      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-3xl font-bold text-forest mb-8">
            Serving Your Neighborhood
          </h2>
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {areas.map((area) => (
              <Link
                key={area.slug}
                href={`/areas/${area.slug}`}
                className="bg-sage text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-sage-dark transition-colors"
              >
                {area.name}
              </Link>
            ))}
          </div>
          <p className="text-body-text text-sm">
            Based in Plantation, serving all of Broward County
          </p>
        </div>
      </section>

      {/* Blog Preview */}
      {latestPosts.length > 0 && (
        <section className="py-16 px-4 sm:px-6 bg-surface">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-serif text-3xl font-bold text-forest text-center mb-10">
              Pet Care Tips
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {latestPosts.map((post) => (
                <BlogCard
                  key={post.id}
                  title={post.title}
                  excerpt={post.excerpt}
                  date={post.date}
                  slug={post.slug}
                  readingTime={post.readingTime}
                />
              ))}
            </div>
            <p className="text-center mt-6">
              <Link
                href="/blog"
                className="text-sage hover:text-sage-dark font-semibold text-sm"
              >
                More pet care tips →
              </Link>
            </p>
          </div>
        </section>
      )}

      {/* Bottom CTA */}
      <section className="py-16 px-4 sm:px-6 bg-honey">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl font-bold text-white mb-4">
            Ready to Meet Sheryl?
          </h2>
          <p className="text-white/90 text-lg mb-8">
            Call or text anytime to schedule your first visit.
          </p>
          <PhoneCTA variant="secondary" className="bg-white !text-honey hover:bg-warm-white" />
        </div>
      </section>
    </>
  );
}
