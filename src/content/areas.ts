export interface Area {
  slug: string;
  name: string;
  state: string;
  headline: string;
  description: string;
  highlights: string[];
  popularServices: string[];
  testimonialId?: string;
  isHorseCare?: boolean;
}

export const areas: Area[] = [
  {
    slug: "plantation",
    name: "Plantation",
    state: "FL",
    headline: "Pet Sitting in Plantation, FL",
    description:
      "Sheryl is based right here in Plantation and has been caring for pets in the community for over three years. From the neighborhoods around Plantation Central Park to the quiet streets near Jacaranda, she knows the area and the families who live here. As your neighbor, she provides truly personal pet care — not a stranger from across town.",
    highlights: [
      "Sheryl's home base — fastest response times",
      "Serving neighborhoods from Central Park to Jacaranda",
      "Well-known in the local Plantation pet community",
    ],
    popularServices: ["dog-walking", "dog-sitting", "cat-sitting"],
  },
  {
    slug: "davie",
    name: "Davie",
    state: "FL",
    headline: "Pet Sitting & Horse Care in Davie, FL",
    description:
      "Davie's rural character and horse-friendly community make it a natural fit for Hoof & Paw. Sheryl's barn is located in Davie, so she's deeply connected to the area's equestrian roots. Whether you need daily dog walks near Flamingo Gardens or horse turnout care on your Davie property, she's just around the corner.",
    highlights: [
      "Sheryl's barn is in Davie — strong local presence",
      "Experienced with Davie's equestrian community",
      "Pet and horse care from the same trusted provider",
    ],
    popularServices: ["dog-walking", "horse-care", "dog-sitting"],
  },
  {
    slug: "cooper-city",
    name: "Cooper City",
    state: "FL",
    headline: "Pet Sitting in Cooper City, FL",
    description:
      "Cooper City families love their pets, and Sheryl loves caring for them. The family-oriented neighborhoods around Brian Piccolo Park and Embassy Lakes are home to many of her regular clients. If you're a busy Cooper City parent juggling school drop-offs and work, Sheryl is the reliable pet care you've been looking for.",
    highlights: [
      "Popular with families in Embassy Lakes and Rock Creek",
      "Mid-day dog walks for working professionals",
      "Short drive from Plantation — quick and reliable",
    ],
    popularServices: ["dog-walking", "dog-sitting", "puppy-visits"],
  },
  {
    slug: "sunrise",
    name: "Sunrise",
    state: "FL",
    headline: "Pet Sitting in Sunrise, FL",
    description:
      "From the neighborhoods near Markham Park to the communities around Sawgrass Mills, Sunrise pet owners trust Sheryl for dependable care. She provides consistent, personal service for busy Sunrise families and professionals who want their pets looked after by someone who genuinely cares.",
    highlights: [
      "Serving communities near Markham Park and Sawgrass",
      "Consistent care for busy professionals",
      "Insured and experienced with all pet types",
    ],
    popularServices: ["dog-walking", "cat-sitting", "overnight-sitting"],
  },
  {
    slug: "southwest-ranches",
    name: "Southwest Ranches",
    state: "FL",
    headline: "Horse Care & Pet Sitting in Southwest Ranches, FL",
    description:
      "Southwest Ranches is horse country, and Sheryl is right at home here. With her own barn and years of hands-on equine experience, she understands the unique needs of Southwest Ranches horse owners. From daily turnout and feeding to overnight barn sitting during storms, she provides the consistent, knowledgeable care your horses need.",
    highlights: [
      "Specialized equine care from an experienced horse person",
      "Daily turnout, feeding, stall cleaning, and medication",
      "Overnight barn sitting for storms and extended absences",
      "Pet sitting also available for dogs and cats",
    ],
    popularServices: ["horse-care", "dog-walking", "overnight-sitting"],
    isHorseCare: true,
  },
];

export function getArea(slug: string): Area | undefined {
  return areas.find((a) => a.slug === slug);
}

export function getAllAreas(): Area[] {
  return areas;
}
