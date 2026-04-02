import { Testimonial } from "@/content/testimonials";

export default function TestimonialCard({
  quote,
  name,
  city,
}: Testimonial) {
  return (
    <div className="bg-warm-white rounded-xl p-6 border border-beige/50 flex flex-col min-w-[280px]">
      <div className="text-sage text-2xl mb-3" aria-hidden="true">&ldquo;</div>
      <p className="text-body-text leading-relaxed mb-4 flex-1">{quote}</p>
      <p className="text-forest font-semibold text-sm">
        — {name}, {city}
      </p>
    </div>
  );
}
