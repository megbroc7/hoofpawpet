export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  city: string;
  service?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "sarah-m",
    quote:
      "Sheryl took wonderful care of our dog while we were traveling. The photo updates made us feel so connected. She treats our pets like her own family.",
    name: "Sarah M.",
    city: "Plantation",
    service: "dog-sitting",
  },
  {
    id: "james-k",
    quote:
      "Our horse has never been healthier thanks to the consistent daily turnout care. Sheryl is professional, knowledgeable, and genuinely loves what she does.",
    name: "James K.",
    city: "Southwest Ranches",
    service: "horse-care",
  },
  {
    id: "michelle-d",
    quote:
      "We trust Sheryl completely with our cats. She's reliable, caring, and always goes the extra mile. It's like having a friend check in on them.",
    name: "Michelle D.",
    city: "Davie",
    service: "cat-sitting",
  },
];

export function getTestimonials(): Testimonial[] {
  return testimonials;
}

export function getTestimonialsByCity(city: string): Testimonial[] {
  return testimonials.filter((t) => t.city === city);
}
