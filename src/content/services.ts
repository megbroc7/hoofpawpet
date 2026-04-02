export interface Service {
  id: string;
  name: string;
  tagline: string;
  description: string;
  includes: string[];
  image: string;
  imageAlt: string;
}

export const services: Service[] = [
  {
    id: "dog-walking",
    name: "Dog Walking",
    tagline: "Professional daily dog walks",
    description:
      "Keep your dog active and happy with professional dog walking. Sheryl offers flexible session lengths — 20, 30, or 45 minutes — to fit your schedule and your dog's energy level.",
    includes: [
      "Leash walk or yard potty break",
      "Fresh water offered",
      "Waste pickup and cleanup",
      "Paw checks",
      "Basic manners reinforcement",
      "Photo update after visit",
    ],
    image: "/images/dog-walking.jpg",
    imageAlt: "Happy black dog with a floral harness smiling on a walk",
  },
  {
    id: "dog-sitting",
    name: "Pet Sitting",
    tagline: "In-home care while you're away",
    description:
      "Leave your dog in trusted hands. Sheryl provides daily in-home visits with exercise, feeding, and companionship — perfect for working professionals or trips away from home.",
    includes: [
      "Multiple daily visits as needed",
      "Exercise and playtime",
      "Feeding and fresh water",
      "Medication administration if needed",
      "Outdoor bathroom breaks",
      "Photo and text updates",
    ],
    image: "/images/pet-sitting.jpg",
    imageAlt: "Dog getting a bubble bath during a pet sitting visit",
  },
  {
    id: "cat-sitting",
    name: "Cat Sitting",
    tagline: "Attentive feline care",
    description:
      "Cats deserve professional care too. Sheryl ensures your feline friend stays healthy, happy, and comfortable while you're away.",
    includes: [
      "Fresh food and water daily",
      "Litter box cleaning",
      "Playtime and enrichment",
      "Medication administration",
      "Health monitoring",
      "Photo updates",
    ],
    image: "/images/cat-sitting.jpg",
    imageAlt: "Black cat snuggled in a blanket during a cat sitting visit",
  },
  {
    id: "puppy-visits",
    name: "Puppy Visits",
    tagline: "Special care for young pups",
    description:
      "Puppies need frequent attention. Sheryl's specialized puppy visits support their development with potty training, basic manners, and socialization.",
    includes: [
      "Potty training support",
      "Basic manners reinforcement",
      "Play and socialization",
      "Feeding assistance",
      "Training guidance",
      "Photo updates",
    ],
    image: "/images/puppy-visits.jpg",
    imageAlt: "Adorable black puppy on a leash in the grass during a puppy visit",
  },
  {
    id: "overnight-sitting",
    name: "Overnight Pet Sitting",
    tagline: "Extended care for extended absences",
    description:
      "Vacation with confidence knowing your pets are in great hands. Sheryl provides overnight care in the comfort of your pet's own home.",
    includes: [
      "Extended overnight stays",
      "Multiple feeding schedules",
      "Outdoor time and exercise",
      "Medication administration",
      "Emergency care coordination",
      "Daily photo updates",
    ],
    image: "/images/overnight-sitting.jpg",
    imageAlt: "Two dogs relaxing at home during an overnight pet sitting visit",
  },
  {
    id: "horse-care",
    name: "Horse Care & Turnout",
    tagline: "Comprehensive equine care",
    description:
      "Sheryl provides daily turnout, feeding, stall cleaning, medication administration, and barn sitting for horse owners in Southwest Ranches and the surrounding area.",
    includes: [
      "Daily turnout management",
      "Feeding & nutrition supervision",
      "Stall cleaning & maintenance",
      "Fly care & pest management",
      "Medication administration",
      "Overnight barn sitting available",
    ],
    image: "/images/horse-care.jpg",
    imageAlt: "Two horses during daily turnout with fly mask in a green paddock",
  },
  {
    id: "home-care",
    name: "Home Care Add-ons",
    tagline: "Light home care during visits",
    description:
      "Sheryl can help with light home care tasks while caring for your pets — so you come home to everything in order.",
    includes: [
      "Mail pickup",
      "Plant watering",
      "Trash day assistance",
    ],
    image: "/images/home-care.jpg",
    imageAlt: "Small dog curled up on the couch at home",
  },
];

export function getService(id: string): Service | undefined {
  return services.find((s) => s.id === id);
}
