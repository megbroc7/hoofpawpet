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
  {
    id: "lisa-r",
    quote:
      "Between work and the kids' activities, our dog was home alone way too much. Sheryl's mid-day walks changed everything. He's calmer, happier, and actually tired when we get home. She's a lifesaver for busy families.",
    name: "Lisa R.",
    city: "Cooper City",
    service: "dog-walking",
  },
  {
    id: "david-t",
    quote:
      "I travel for work constantly and used to stress about my cats the entire trip. Sheryl sends photo updates every visit, handles their medications perfectly, and even brings in my mail. Total peace of mind.",
    name: "David T.",
    city: "Sunrise",
    service: "cat-sitting",
  },
  {
    id: "karen-w",
    quote:
      "We travel at least once a month, and Sheryl has become the reason we can leave without guilt. Our dogs are always happy and relaxed when we come home. She's the most reliable pet sitter we've ever worked with in Weston.",
    name: "Karen W.",
    city: "Weston",
    service: "dog-sitting",
  },
  {
    id: "maria-g",
    quote:
      "We adopted a rescue who was terrified of strangers. Sheryl was so patient with him. After a few visits, he started waiting by the door for her. That says everything about who she is as a caregiver.",
    name: "Maria G.",
    city: "Pembroke Pines",
    service: "dog-walking",
  },
  {
    id: "rachel-b",
    quote:
      "I have two cats in a Hollywood condo and Sheryl takes care of everything when I'm away for work. Litter, food, playtime, even my plants. I come home and it's like I never left.",
    name: "Rachel B.",
    city: "Hollywood",
    service: "cat-sitting",
  },
];

export function getTestimonials(): Testimonial[] {
  return testimonials;
}

export function getTestimonialsByCity(city: string): Testimonial[] {
  return testimonials.filter((t) => t.city === city);
}
