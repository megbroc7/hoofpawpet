export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  date: string;
  author: string;
  excerpt: string;
  content: string;
  readingTime: number;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    slug: "back-to-school-pet-sitting-tips",
    title: "Back-to-School Pet Sitting Tips for Broward County Families",
    date: "2026-03-15",
    author: "Hoof & Paw Team",
    excerpt:
      "Heading back to school? Your pets might experience separation anxiety. Learn how professional pet sitting can help your furry friends adjust to a new routine.",
    content: `As families in Broward County prepare for the back-to-school season, many pet owners are worried about how their beloved companions will handle the change in routine. When children return to school and parents are busy with work, pets can experience separation anxiety and stress.

## Why Routine Changes Matter

Dogs and cats thrive on consistency. When your daily schedule shifts dramatically, your pets may feel confused and anxious. This can lead to destructive behavior, excessive barking, or litter box issues.

## How Professional Pet Sitting Helps

Our professional pet sitters provide:

- **Consistent Care**: Regular visits maintain your pet's routine, reducing anxiety.
- **Exercise & Enrichment**: Dogs get their needed walks and playtime, preventing destructive behavior.
- **Stress Relief**: Knowing your pet is being cared for by a trusted professional gives you peace of mind.
- **Updates**: Photos and updates keep you connected throughout the day.

## Tips for a Smooth Transition

1. **Schedule a meet and greet** with your pet sitter before school starts.
2. **Start with a trial visit** while you're still home to help your pet get comfortable.
3. **Maintain feeding schedules** - consistency is key.
4. **Leave familiar items** like blankets or toys that smell like home.
5. **Consider mid-day visits** during the first few weeks of adjustment.

## Our Service Areas

We serve Plantation, Davie, Cooper City, Sunrise, and Southwest Ranches. Whether you need daily dog walking, in-home pet sitting, or cat care, we're here to help your pets adjust to the school year.

This back-to-school season, let Hoof & Paw handle the pet care so you can focus on what matters most. Contact us today to book your pet's first visit!`,
    readingTime: 4,
  },
  {
    id: "2",
    slug: "why-horses-need-consistent-turnout",
    title: "Why Your Horse Needs Consistent Turnout Care",
    date: "2026-03-01",
    author: "Hoof & Paw Team",
    excerpt:
      "Consistent turnout is essential for horse health and behavior. Learn how our turnout care services in Southwest Ranches keep your horse happy and healthy.",
    content: `Horse owners in Southwest Ranches know that proper turnout is crucial for their equine companions. Yet many horse owners struggle to maintain consistent daily turnout, especially when life gets busy. Here's why your horse needs reliable turnout care and how we can help.

## The Health Benefits of Daily Turnout

Daily turnout isn't just a luxury—it's essential for your horse's wellbeing:

### Physical Health
- **Exercise**: Natural movement strengthens muscles and improves cardiovascular health.
- **Hoof Health**: Movement on varied terrain promotes healthy hoof growth and circulation.
- **Digestion**: Horses evolved to graze and move constantly. Regular turnout supports digestive health.
- **Mental Health**: Time outside reduces stress and prevents behavioral issues.

### Mental & Behavioral Benefits
- **Stress Reduction**: Horses are herd animals who need social interaction and environmental stimulation.
- **Behavioral Issues Prevention**: Stall vices like cribbing, weaving, and pacing often develop from insufficient turnout.
- **Natural Behavior**: Turnout allows horses to express natural behaviors like grazing, rolling, and interacting with herd mates.

## Weather Challenges in Florida

South Florida's climate presents unique challenges:
- **Heat & Humidity**: Summer months can make turnout timing critical.
- **Afternoon Storms**: Unpredictable weather requires flexible scheduling.
- **Fly Season**: Proper fly care during turnout is essential.

## Our Southwest Ranches Turnout Service

We understand the demands of horse care. Our turnout services include:

- **Daily Turnout**: We handle turnout regardless of weather (within safety limits).
- **Feeding Supervision**: Ensuring proper nutrition during turnout.
- **Water Checks**: Your horse always has access to fresh water.
- **Fly Care**: Application of fly spray and management during peak season.
- **Paddock & Pasture Checks**: We inspect for hazards and maintain safety.
- **Photo Updates**: You stay informed about your horse's wellbeing.

## Barn Sitting & Extended Care

Beyond daily turnout, we offer:
- **Overnight Barn Sitting**: Peace of mind during storms or events.
- **Stall Cleaning**: Daily stall maintenance for optimal health.
- **Medication Administration**: Reliable care for horses requiring daily medications.
- **Blanketing**: Seasonal blanket management.

## The Hoof & Paw Difference

Located right here in Southwest Ranches, we understand the local equine community. We're insured, experienced with all horse types, and dedicated to your horse's welfare. We treat every horse as if it were our own.

Don't let a busy schedule compromise your horse's health. Contact Hoof & Paw today to learn how our turnout care services can keep your horse thriving year-round.`,
    readingTime: 6,
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllBlogPosts(): BlogPost[] {
  return [...blogPosts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}
