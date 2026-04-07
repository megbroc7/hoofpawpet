import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PhoneCTA from "@/components/PhoneCTA";
import TestimonialCard from "@/components/TestimonialCard";
import FAQItem from "@/components/FAQItem";
import StructuredData from "@/components/StructuredData";
import { getAllAreas, getArea } from "@/content/areas";
import type { Area, UniqueSection } from "@/content/areas";
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

/* ── Accent color maps ── */
const heroBg: Record<Area["accentColor"], string> = {
  sage: "bg-sage/10",
  honey: "bg-honey/10",
  forest: "bg-forest/5",
  "sage-dark": "bg-sage-dark/10",
  "honey-light": "bg-honey-light/15",
};

const ctaBg: Record<Area["accentColor"], string> = {
  sage: "bg-sage",
  honey: "bg-honey",
  forest: "bg-forest",
  "sage-dark": "bg-sage-dark",
  "honey-light": "bg-honey",
};

const badgeBg: Record<Area["accentColor"], string> = {
  sage: "bg-sage text-white",
  honey: "bg-honey text-white",
  forest: "bg-forest text-white",
  "sage-dark": "bg-sage-dark text-white",
  "honey-light": "bg-honey text-white",
};

/* ── Hero variants ── */
function HeroBadge({ area }: { area: Area }) {
  return (
    <section className={`${heroBg[area.accentColor]} py-16 px-4 sm:px-6`}>
      <div className="max-w-3xl mx-auto">
        {area.heroBadge && (
          <span className={`inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4 ${badgeBg[area.accentColor]}`}>
            {area.heroBadge}
          </span>
        )}
        <h1 className="font-serif text-4xl font-bold text-forest mb-4">
          {area.headline}
        </h1>
        <p className="text-body-text text-lg leading-relaxed">{area.description}</p>
      </div>
    </section>
  );
}

function HeroSplit({ area }: { area: Area }) {
  return (
    <section className={`${heroBg[area.accentColor]} py-16 px-4 sm:px-6`}>
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-8 items-start">
        <div className="flex-1">
          {area.heroBadge && (
            <span className={`inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4 ${badgeBg[area.accentColor]}`}>
              {area.heroBadge}
            </span>
          )}
          <h1 className="font-serif text-4xl font-bold text-forest mb-4">
            {area.headline}
          </h1>
          <p className="text-body-text text-lg leading-relaxed">{area.description}</p>
        </div>
        <div className="flex-shrink-0 w-full md:w-64 bg-white rounded-xl border border-beige/50 p-5">
          <h2 className="font-semibold text-forest text-sm uppercase tracking-wide mb-3">At a Glance</h2>
          <ul className="space-y-2 text-sm text-body-text">
            {area.localLandmarks.slice(0, 4).map((l) => (
              <li key={l} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-honey flex-shrink-0" />
                {l}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function HeroCentered({ area }: { area: Area }) {
  return (
    <section className={`${heroBg[area.accentColor]} py-16 px-4 sm:px-6`}>
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="font-serif text-4xl font-bold text-forest mb-4">
          {area.headline}
        </h1>
        <p className="text-body-text text-lg leading-relaxed">{area.description}</p>
        <div className="mt-6">
          <PhoneCTA />
        </div>
      </div>
    </section>
  );
}

function HeroWide({ area }: { area: Area }) {
  return (
    <section className={`${heroBg[area.accentColor]} py-16 px-4 sm:px-6`}>
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-wrap gap-2 mb-4">
          {area.localLandmarks.map((l) => (
            <span key={l} className="text-xs bg-white/80 text-body-text px-2.5 py-1 rounded-full border border-beige/30">
              {l}
            </span>
          ))}
        </div>
        <h1 className="font-serif text-4xl font-bold text-forest mb-4">
          {area.headline}
        </h1>
        <p className="text-body-text text-lg leading-relaxed max-w-3xl">{area.description}</p>
      </div>
    </section>
  );
}

function HeroBold({ area }: { area: Area }) {
  return (
    <section className="bg-forest py-16 px-4 sm:px-6">
      <div className="max-w-3xl mx-auto">
        {area.heroBadge && (
          <span className="inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4 bg-honey text-white">
            {area.heroBadge}
          </span>
        )}
        <h1 className="font-serif text-4xl font-bold text-white mb-4">
          {area.headline}
        </h1>
        <p className="text-white/85 text-lg leading-relaxed">{area.description}</p>
      </div>
    </section>
  );
}

const heroMap: Record<Area["heroVariant"], React.FC<{ area: Area }>> = {
  badge: HeroBadge,
  split: HeroSplit,
  centered: HeroCentered,
  wide: HeroWide,
  bold: HeroBold,
};

/* ── Unique section renderer ── */
function RenderUniqueSection({ section }: { section: UniqueSection }) {
  if (section.style === "narrative") {
    return (
      <div>
        <h2 className="font-serif text-2xl font-bold text-forest mb-4">
          {section.heading}
        </h2>
        <p className="text-body-text leading-relaxed">{section.body}</p>
      </div>
    );
  }

  if (section.style === "callout") {
    return (
      <div className="bg-sage/10 rounded-xl p-6 border border-sage/20">
        <h2 className="font-serif text-xl font-bold text-forest mb-3">
          {section.heading}
        </h2>
        <p className="text-body-text leading-relaxed">{section.body}</p>
      </div>
    );
  }

  /* checklist */
  return (
    <div>
      <h2 className="font-serif text-2xl font-bold text-forest mb-3">
        {section.heading}
      </h2>
      <p className="text-body-text leading-relaxed mb-4">{section.body}</p>
      {section.items && (
        <ul className="space-y-2.5">
          {section.items.map((item) => (
            <li key={item} className="flex items-start gap-3 text-body-text">
              <span className="text-sage font-bold mt-0.5">✓</span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

/* ── Page ── */
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

  const Hero = heroMap[area.heroVariant];

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

      {/* Hero - different layout per area */}
      <Hero area={area} />

      {/* Neighborhood Guide - unique long-form content per city */}
      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-2xl font-bold text-forest mb-4">
            {area.isHorseCare
              ? `Serving ${area.name} Properties`
              : `Neighborhoods Sheryl Serves in ${area.name}`}
          </h2>
          <p className="text-body-text leading-relaxed mb-6">
            {area.neighborhoodGuide}
          </p>
          <div className="flex flex-wrap gap-2">
            {area.localLandmarks.map((landmark) => (
              <span
                key={landmark}
                className="text-sm bg-surface text-forest px-3 py-1.5 rounded-full border border-beige/30"
              >
                {landmark}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Unique Sections - city-specific content blocks */}
      <section className="py-12 px-4 sm:px-6 bg-surface">
        <div className="max-w-3xl mx-auto space-y-10">
          {area.uniqueSections.map((section) => (
            <RenderUniqueSection key={section.heading} section={section} />
          ))}
        </div>
      </section>

      {/* Typical Clients */}
      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-2xl font-bold text-forest mb-4">
            Who Hires Sheryl in {area.name}?
          </h2>
          <p className="text-body-text leading-relaxed">{area.typicalClients}</p>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-12 px-4 sm:px-6 bg-surface">
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
      <section className="py-12 px-4 sm:px-6">
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
        <section className="py-12 px-4 sm:px-6 bg-surface">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl font-bold text-forest mb-6">
              What a {area.name} Client Says
            </h2>
            <TestimonialCard {...cityTestimonials[0]} />
          </div>
        </section>
      )}

      {/* City-Specific FAQs */}
      {area.faqs.length > 0 && (
        <section className="py-12 px-4 sm:px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-2xl font-bold text-forest mb-6">
              Common Questions About Pet Care in {area.name}
            </h2>
            <div className="divide-y divide-beige/50">
              {area.faqs.map((faq) => (
                <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA - accent color varies per area */}
      <section className={`py-16 px-4 sm:px-6 ${ctaBg[area.accentColor]}`}>
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-3xl font-bold text-white mb-4">
            {area.isHorseCare
              ? `Need Horse Care in ${area.name}?`
              : `Need Pet Care in ${area.name}?`}
          </h2>
          <p className="text-white/90 mb-8">
            {area.slug === "plantation"
              ? "Sheryl is right here in Plantation. Call or text anytime."
              : area.slug === "davie"
                ? "Sheryl's barn is right here in Davie, so she's as local as it gets."
                : area.slug === "southwest-ranches"
                  ? "Sheryl has over 20 years of experience with horses. Call to discuss your needs."
                  : `Sheryl serves ${area.name} regularly from nearby Plantation. Call or text to get started.`}
          </p>
          <PhoneCTA variant="secondary" className="bg-white !text-forest hover:bg-warm-white" />
        </div>
      </section>
    </>
  );
}
