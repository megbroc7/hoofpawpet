export interface AreaFAQ {
  question: string;
  answer: string;
}

export interface UniqueSection {
  heading: string;
  body: string;
  style: "callout" | "narrative" | "checklist";
  items?: string[];
}

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
  /** Accent color class used for hero/CTA backgrounds, keeps each page visually distinct */
  accentColor: "sage" | "honey" | "forest" | "sage-dark" | "honey-light";
  /** Long-form paragraph about the specific neighborhoods Sheryl serves in this city */
  neighborhoodGuide: string;
  /** What kind of clients typically hire Sheryl in this area */
  typicalClients: string;
  /** Local landmarks, parks, or features that anchor the page to the real geography */
  localLandmarks: string[];
  /** Content sections unique to this area, rendered in order between highlights and services */
  uniqueSections: UniqueSection[];
  /** City-specific FAQs, different questions per area */
  faqs: AreaFAQ[];
  /** Hero layout variant */
  heroVariant: "badge" | "split" | "centered" | "wide" | "bold";
  /** Short badge/tagline shown in the hero */
  heroBadge?: string;
}

export const areas: Area[] = [
  {
    slug: "plantation",
    name: "Plantation",
    state: "FL",
    accentColor: "sage",
    heroVariant: "badge",
    heroBadge: "Sheryl's Home Base",
    headline: "Pet Sitting in Plantation, FL",
    description:
      "Sheryl lives right here in Plantation: this is her home turf. She's not driving in from another city or dispatching a stranger. When you hire Hoof & Paw for pet care in Plantation, you're getting a neighbor who knows your streets, your parks, and probably your mail carrier. That's the kind of personal care you can't get from an app.",
    neighborhoodGuide:
      "Sheryl regularly cares for pets in neighborhoods throughout Plantation, from the tree-lined streets near Plantation Central Park and the family communities around Jacaranda to the quieter pockets near Plantation Preserve. She knows which sidewalks have shade for summer walks, which yards have surprise gaps in the fence, and where the best grassy spots are for a bathroom break. That local knowledge makes every visit safer and more comfortable for your pet.",
    typicalClients:
      "Most of Sheryl's Plantation clients are working professionals and retirees who want reliable mid-day dog walks, vacation pet sitting, or regular check-ins for their cats. Many have been with her for years.",
    localLandmarks: [
      "Plantation Central Park",
      "Plantation Preserve Linear Trail",
      "Jacaranda neighborhood",
      "Plantation Heritage Park",
      "Deicke Park",
    ],
    highlights: [
      "Sheryl's home base, with the fastest response times of any service area",
      "Serving Plantation neighborhoods from Central Park to Jacaranda and beyond",
      "Well-known in the local pet community with years of repeat clients",
      "Available for same-day requests when schedule allows",
    ],
    popularServices: ["dog-walking", "dog-sitting", "cat-sitting"],
    uniqueSections: [
      {
        heading: "Your Neighbor, Not a Stranger",
        body: "Big pet care companies send whoever is available. Sheryl is always the one who shows up. She knows your pet's name, their favorite spot on the couch, and what treats they go crazy for. That kind of consistency matters, especially for anxious dogs or shy cats who don't warm up to new people easily. When you call Hoof & Paw in Plantation, you're calling your neighbor.",
        style: "narrative",
      },
      {
        heading: "What Plantation Clients Love",
        body: "Here's what keeps Plantation families coming back to Sheryl year after year:",
        style: "checklist",
        items: [
          "Photo updates after every single visit, so there's no wondering how your pet is doing",
          "Flexible scheduling that works around your life, not the other way around",
          "A calm, patient approach that even the most nervous pets respond to",
          "Real availability for last-minute requests because she's right down the road",
        ],
      },
    ],
    faqs: [
      {
        question: "How quickly can Sheryl get to my Plantation home?",
        answer:
          "Since Sheryl lives in Plantation, she can typically reach any address in the city within 10–15 minutes. For established clients, same-day visits are often possible when her schedule allows.",
      },
      {
        question: "Does Sheryl serve all Plantation neighborhoods?",
        answer:
          "Yes. From the areas near Plantation Central Park and Jacaranda to Plantation Preserve, Pine Island Ridge, and everything in between. If you're in Plantation, you're in her core service zone.",
      },
      {
        question: "Can I book recurring daily walks in Plantation?",
        answer:
          "Absolutely. Many of Sheryl's Plantation clients book recurring weekday walks, either mid-day while they're at work or morning walks for older dogs who need a gentle routine. She'll work out a schedule that fits.",
      },
    ],
  },
  {
    slug: "davie",
    name: "Davie",
    state: "FL",
    accentColor: "honey",
    heroVariant: "split",
    heroBadge: "Where the Barn Is",
    headline: "Pet Sitting & Horse Care in Davie, FL",
    description:
      "Davie is where Sheryl keeps her barn: horses, chickens, pigs, and a rotating cast of rescued animals. She's not just passing through this community; she's rooted in it. That connection to Davie's equestrian culture means she understands what horse owners need, and she brings that same hands-on dedication to every dog walk and pet sitting visit in the area.",
    neighborhoodGuide:
      "Sheryl serves Davie from the neighborhoods around Flamingo Gardens and Nova Southeastern University down to the rural properties along Stirling Road and Griffin Road. She's equally comfortable walking a golden retriever through a Davie subdivision and managing morning turnout on a five-acre horse property. The mix of suburban and rural that defines Davie is exactly the range Hoof & Paw was built for.",
    typicalClients:
      "Davie clients are a mix of horse owners who need daily equine care, suburban families with dogs and cats, and snowbirds who need someone trustworthy watching their animals while they're up north for the season.",
    localLandmarks: [
      "Flamingo Gardens",
      "Bergeron Rodeo Grounds",
      "Tree Tops Park",
      "Davie Ranch neighborhood",
      "Old Davie School Historical Museum",
    ],
    highlights: [
      "Sheryl's barn is in Davie, and she's deeply connected to the local community",
      "One of the few providers offering both horse care and pet sitting",
      "Experienced with Davie's mix of suburban and rural properties",
      "Trusted by horse owners for daily turnout, feeding, and stall care",
    ],
    popularServices: ["horse-care", "dog-walking", "dog-sitting"],
    uniqueSections: [
      {
        heading: "From the Barn to Your Door",
        body: "Not many pet sitters in Broward County can go from cleaning stalls at 6 AM to walking your Labrador at noon. Sheryl can, because that's her actual life. Her barn in Davie houses horses, pigs, chickens, and cats, and she's been caring for animals of all sizes for over two decades. That range of experience means she's calm under pressure, comfortable with animals that outweigh her by a thousand pounds, and attentive to the small details that keep your pets healthy.",
        style: "narrative",
      },
      {
        heading: "Horse & Pet Care Under One Roof",
        body: "If you're a Davie property owner with both horses and household pets, Sheryl can handle everything in one visit. No need to coordinate between a horse care provider and a separate pet sitter. Services Sheryl provides for Davie horse and pet owners:",
        style: "checklist",
        items: [
          "Daily horse turnout, feeding, fly care, and stall cleaning",
          "Dog walking and pet sitting during the same property visit",
          "Medication administration for horses and pets alike",
          "Overnight barn sitting during storms or when you travel",
          "Snowbird packages for seasonal residents who need year-round animal care",
        ],
      },
    ],
    faqs: [
      {
        question: "Can Sheryl care for my horses and my dogs on the same visit?",
        answer:
          "Yes. That's one of the things Davie clients love about Hoof & Paw. If you have horses and household pets on the same property, Sheryl handles everything in one visit. No need for multiple providers.",
      },
      {
        question: "Does Sheryl serve the rural parts of Davie?",
        answer:
          "Absolutely. Sheryl's barn is in Davie, so she's very familiar with the rural properties along Stirling Road, Griffin Road, and the areas near Bergeron Rodeo Grounds. She's comfortable with large-acreage properties and multi-animal setups.",
      },
      {
        question: "What if I'm a snowbird and need care while I'm away for months?",
        answer:
          "Many of Sheryl's Davie clients are seasonal residents. She offers consistent, long-term care packages that cover daily visits for horses and pets while you're away. You'll get regular photo updates and direct communication throughout.",
      },
    ],
  },
  {
    slug: "cooper-city",
    name: "Cooper City",
    state: "FL",
    accentColor: "sage-dark",
    heroVariant: "centered",
    headline: "Pet Sitting in Cooper City, FL",
    description:
      "Cooper City is one of the most family-friendly communities in Broward County, and Sheryl has been caring for its pets for years. Between school drop-offs, sports practices, and work schedules, Cooper City parents are busy, and their pets still need attention, exercise, and love during the day. That's where Sheryl comes in.",
    neighborhoodGuide:
      "Sheryl serves the neighborhoods that make Cooper City feel like a small town: Embassy Lakes, Rock Creek, Country Glen, and the communities near Brian Piccolo Park. She's a familiar face on these streets and knows the walking routes that work best for different breeds and energy levels. The well-maintained sidewalks and shaded streets in these neighborhoods make Cooper City one of the best areas for dog walking in Broward.",
    typicalClients:
      "Cooper City clients are mostly dual-income families with dogs who need mid-day walks, new puppy owners who need potty break visits, and families heading on vacation who want someone they trust checking on their pets at home.",
    localLandmarks: [
      "Brian Piccolo Park",
      "Embassy Lakes neighborhood",
      "Rock Creek neighborhood",
      "Country Glen neighborhood",
      "Flamingo West shopping area",
    ],
    highlights: [
      "Popular with families in Embassy Lakes, Rock Creek, and Country Glen",
      "Mid-day dog walks for working parents who can't get home at lunch",
      "Short drive from Plantation, reliable and on-time",
      "Experienced with puppies and the extra visits young dogs need",
    ],
    popularServices: ["dog-walking", "puppy-visits", "dog-sitting"],
    uniqueSections: [
      {
        heading: "Built for Busy Families",
        body: "You're juggling work, the kids' schedules, and somehow also trying to make sure the dog gets enough exercise and the cat has fresh water. Sheryl gets it. She raised two daughters in Plantation while caring for a houseful of animals. She's the kind of help that actually reduces your stress instead of adding to it. No apps to figure out, no revolving door of strangers. Just one person you trust, showing up when she says she will.",
        style: "narrative",
      },
      {
        heading: "Perfect for New Puppy Owners",
        body: "Cooper City families often call Sheryl when they bring home a new puppy and realize just how much attention a young dog needs during the workday. Sheryl's puppy visits help with the critical early months:",
        style: "checklist",
        items: [
          "Mid-day potty breaks to reinforce house training",
          "Short play sessions to burn off puppy energy",
          "Basic manners reinforcement between your own training sessions",
          "Socialization with a calm, experienced handler",
          "Photo updates so the kids can see how their new best friend is doing",
        ],
      },
    ],
    faqs: [
      {
        question: "Can Sheryl do mid-day walks while I'm at work?",
        answer:
          "That's one of the most common requests from Cooper City families. Sheryl can visit between 10 AM and 2 PM (or whatever window works for you) to walk your dog, refresh water, and send you a photo update.",
      },
      {
        question: "How does Sheryl handle puppies differently from adult dogs?",
        answer:
          "Puppies get shorter, more frequent visits focused on potty training, gentle play, and basic manners. Sheryl adjusts her approach based on the puppy's age and your training goals; she'll reinforce whatever you're working on at home.",
      },
      {
        question: "My kids want to be involved. Can they meet Sheryl first?",
        answer:
          "Absolutely, and Sheryl encourages it. The meet and greet is a great time for the whole family to be there so everyone is comfortable. Kids especially love getting the photo updates during the day.",
      },
    ],
  },
  {
    slug: "sunrise",
    name: "Sunrise",
    state: "FL",
    accentColor: "honey-light",
    heroVariant: "wide",
    headline: "Pet Sitting in Sunrise, FL",
    description:
      "Sunrise is a working city: busy professionals, long commutes, and pets waiting at home. Sheryl provides the flexible, reliable care that Sunrise pet owners need to get through the week without worrying about their animals. Whether you're near Sawgrass Mills, off University Drive, or in the communities around Markham Park, she's close by and available on your schedule.",
    neighborhoodGuide:
      "Sheryl covers Sunrise from the residential areas near Markham Park and Sawgrass Mills to the communities along Sunrise Boulevard and the neighborhoods off Nob Hill Road. She serves both single-family homes and townhome communities, and she's experienced with the kind of scheduling flexibility that Sunrise residents need: early morning walks before long commutes, mid-day visits, and evening check-ins.",
    typicalClients:
      "Sunrise clients tend to be working professionals with long hours, remote workers who need their dog walked while they're on calls, and cat owners who travel for work and need someone checking in daily.",
    localLandmarks: [
      "Markham Park",
      "Sawgrass Mills",
      "Sunrise Civic Center",
      "Nob Hill Road corridor",
      "BB&T Center area",
    ],
    highlights: [
      "Flexible scheduling: early morning, mid-day, or evening visits",
      "Serving communities near Markham Park, Sawgrass, and Nob Hill",
      "Great for busy professionals and remote workers",
      "Insured and experienced with cats, dogs, and multi-pet households",
    ],
    popularServices: ["dog-walking", "cat-sitting", "overnight-sitting"],
    uniqueSections: [
      {
        heading: "Flexible Care on Your Schedule",
        body: "Sunrise runs on work schedules, and so does Sheryl. Unlike big pet care platforms that assign you a random 2-hour arrival window, Sheryl gives you a specific time and sticks to it. If your dog needs a walk at 11:30 before your afternoon meetings, that's when she'll be there. If your cat needs a check-in at 5 PM while you're stuck in traffic on I-595, she's got it. Consistency and punctuality aren't bonuses; they're the baseline.",
        style: "narrative",
      },
      {
        heading: "Why Sunrise Cat Owners Love Hoof & Paw",
        body: "A lot of Sunrise residents travel for work and need someone reliable checking on their cats. Sheryl's cat sitting visits go beyond the basics:",
        style: "checklist",
        items: [
          "Fresh food and water, litter box cleaning, and a quick health check",
          "Playtime and interaction so your cat doesn't get lonely or bored",
          "Medication administration for cats who need daily meds",
          "Mail and package pickup, plant watering, and light home care",
          "Text updates with photos so you know everything's fine while you're away",
        ],
      },
    ],
    faqs: [
      {
        question: "Can I book an early morning walk before I leave for work?",
        answer:
          "Yes. Sheryl offers walks starting as early as 7 AM for Sunrise clients who need their dog taken care of before they head out. Just let her know your schedule and she'll build a consistent routine.",
      },
      {
        question: "I work from home but can't walk my dog during the day. Can Sheryl help?",
        answer:
          "Definitely. Several of her Sunrise clients work remotely and book mid-day walks so their dog gets exercise and outdoor time without interrupting their workday. Sheryl is quiet and efficient. She'll handle the walk and send you a photo without disrupting your calls.",
      },
      {
        question: "Do you serve the areas near Sawgrass Mills and BB&T Center?",
        answer:
          "Yes. Sheryl covers all of Sunrise, including the neighborhoods near Sawgrass Mills, BB&T Center, Markham Park, and along Nob Hill Road and Sunrise Boulevard.",
      },
    ],
  },
  {
    slug: "southwest-ranches",
    name: "Southwest Ranches",
    state: "FL",
    accentColor: "forest",
    heroVariant: "bold",
    heroBadge: "Equine Care Specialist",
    headline: "Horse Care & Pet Sitting in Southwest Ranches, FL",
    description:
      "Southwest Ranches is horse country, and Sheryl belongs here. With her own barn, over 20 years of hands-on equine experience, and a deep understanding of what large-property animal ownership demands, she's not learning on the job; she's been doing this her entire adult life. From daily turnout to overnight barn sitting during hurricane season, Hoof & Paw provides the kind of dependable, knowledgeable horse care that Southwest Ranches owners expect.",
    neighborhoodGuide:
      "Sheryl serves properties throughout Southwest Ranches, from the larger estates along Volunteer Road and Dykes Road to the equestrian properties near Sunshine Ranches and the residential areas closer to Griffin Road. She understands the unique logistics of working on large acreage, managing multiple animals, and navigating the unpaved roads and gated properties that are common in this community.",
    typicalClients:
      "Southwest Ranches clients are primarily horse owners who need daily turnout and barn care, large-property owners with multiple animal types, and families who need both equine and household pet care from one trusted provider.",
    localLandmarks: [
      "Sunshine Ranches",
      "Rolling Oaks Equestrian Center",
      "Volunteer Road corridor",
      "Country Estates neighborhood",
      "Dykes Road properties",
    ],
    highlights: [
      "Over 20 years of hands-on equine experience",
      "Daily turnout, feeding, stall cleaning, and fly care",
      "Overnight barn sitting during storms and extended absences",
      "Medication administration and vet coordination",
      "Household pet care also available: dogs, cats, and small animals",
    ],
    popularServices: ["horse-care", "overnight-sitting", "dog-walking"],
    isHorseCare: true,
    uniqueSections: [
      {
        heading: "Storm-Ready Horse Care",
        body: "South Florida hurricane season runs from June through November, and Southwest Ranches horse owners know the anxiety of wondering who will check on their animals when a storm hits. Sheryl provides overnight barn sitting during severe weather: she'll be on-site before, during, and after the storm to monitor your horses, manage feeding and water, handle any emergencies, and coordinate with your vet if needed. This isn't a service she added to a brochure; it's something she's done firsthand, many times, with her own horses.",
        style: "narrative",
      },
      {
        heading: "Complete Daily Horse Care",
        body: "Sheryl's horse care isn't a quick check-in; it's thorough, consistent, and built on real experience. Here's what a typical daily visit includes for Southwest Ranches horse owners:",
        style: "checklist",
        items: [
          "Morning turnout and evening bring-in on your preferred schedule",
          "Feeding and hay according to your horse's nutrition plan",
          "Stall cleaning and fresh bedding",
          "Fly spray and seasonal pest management",
          "Visual health checks: hooves, eyes, coat, behavior changes",
          "Medication administration including oral, topical, and injectable",
          "Direct communication with you and your vet if anything comes up",
        ],
      },
      {
        heading: "More Than Just Horses",
        body: "Many Southwest Ranches properties have dogs, cats, chickens, goats, and other animals alongside their horses. Sheryl handles the full mix: she'll manage horse turnout, walk the dogs, feed the barn cats, and check on the chickens all in the same visit. You don't need to coordinate between multiple providers when one person can do it all, and do it well.",
        style: "narrative",
      },
    ],
    faqs: [
      {
        question: "Will Sheryl stay overnight at my barn during a hurricane?",
        answer:
          "Yes. Sheryl provides overnight barn sitting during severe weather events. She'll be on-site before the storm arrives and will stay through until conditions are safe, handling all feeding, watering, stall management, and emergency response.",
      },
      {
        question: "Can Sheryl administer medications to my horse?",
        answer:
          "Yes. Sheryl is experienced with oral medications, topical treatments, eye drops, and basic injectable medications. She'll follow your vet's instructions precisely and will contact you and/or your vet immediately if she has any concerns.",
      },
      {
        question: "Do you handle multiple animal types on the same property?",
        answer:
          "Absolutely. Many of her Southwest Ranches clients have horses, dogs, cats, chickens, and other animals. Sheryl cares for everything on the property in a single visit, with no need for separate providers.",
      },
      {
        question: "How often do you visit for horse care?",
        answer:
          "Most Southwest Ranches clients book daily visits, either once or twice a day depending on their horses' needs. Sheryl will work out a schedule that matches your horses' routine, whether that's a simple morning turnout or full twice-daily care with feeding and stall work.",
      },
    ],
  },
  {
    slug: "weston",
    name: "Weston",
    state: "FL",
    accentColor: "sage-dark",
    heroVariant: "wide",
    headline: "Pet Sitting & Dog Walking in Weston, FL",
    description:
      "Weston is one of the most desirable communities in Broward County, and its residents expect a high standard of care for their pets. Sheryl provides exactly that: personal, one-on-one attention from someone who treats your animals like family. No rotating staff, no app-based strangers. Just a trusted, experienced pet sitter who knows your neighborhood and your pets by name.",
    neighborhoodGuide:
      "Sheryl cares for pets throughout Weston's planned communities, including Weston Hills Country Club, The Ridges, Savanna, and the neighborhoods surrounding Bonaventure Town Center. She's familiar with the gated entries, the walking paths along the canal trails, and the shaded sidewalks that make Weston such a great place for dog walks year-round. Whether you're near Weston Regional Park or tucked into one of the quieter cul-de-sacs off Weston Road, she'll come directly to you.",
    typicalClients:
      "Weston clients are often dual-income professionals, frequent travelers, and active families who need dependable pet care during busy workweeks and vacations. Many have multiple pets and value the consistency of having the same caregiver every visit.",
    localLandmarks: [
      "Weston Hills Country Club",
      "Weston Regional Park",
      "Bonaventure Town Center",
      "The Ridges at Weston",
      "Weston Commons",
    ],
    highlights: [
      "Trusted by families in Weston Hills, The Ridges, Savanna, and Bonaventure",
      "Consistent one-on-one care, never a revolving door of pet sitters",
      "Experienced with multi-pet households including dogs, cats, and small animals",
      "Flexible scheduling for travel-heavy professionals and busy families",
    ],
    popularServices: ["dog-walking", "dog-sitting", "cat-sitting"],
    uniqueSections: [
      {
        heading: "The Standard of Care Weston Families Expect",
        body: "Weston residents put thought into everything about their homes and families, and pet care is no exception. Sheryl understands that. She's not going to rush through a visit or treat it like a checklist. Every walk is the right length for your dog's energy level. Every sitting visit includes real interaction, not just a bowl refill. And every visit ends with a photo update so you can see exactly how your pet is doing. That level of detail is what separates personal pet care from the corporate alternative.",
        style: "narrative",
      },
      {
        heading: "Ideal for Frequent Travelers",
        body: "If your work or lifestyle takes you out of town regularly, Sheryl can be the consistent presence your pets rely on while you're away. What Weston travelers love about working with Hoof & Paw:",
        style: "checklist",
        items: [
          "Same trusted caregiver every time, so your pets stay comfortable and calm",
          "Flexible visit schedules that match your travel patterns, whether weekly or seasonal",
          "Medication management for pets with ongoing health needs",
          "Light home care during visits: mail, packages, plants, and trash bins",
          "Direct text communication and photo updates throughout your trip",
        ],
      },
    ],
    faqs: [
      {
        question: "Does Sheryl serve gated communities in Weston?",
        answer:
          "Yes. Sheryl serves all of Weston's gated communities, including Weston Hills, The Ridges, Savanna, and Bonaventure. She'll coordinate gate access with you before the first visit so everything runs smoothly.",
      },
      {
        question: "How far is Weston from Sheryl's home base?",
        answer:
          "Weston is a short drive from Plantation, where Sheryl is based. She serves Weston regularly and many of her longest-standing clients live there. Travel time doesn't affect the quality or length of her visits.",
      },
      {
        question: "Can Sheryl handle both our dog and our cat in the same visit?",
        answer:
          "Absolutely. Many Weston families have multi-pet households, and Sheryl cares for all of them during a single visit. She'll walk the dog, check on the cat, refresh food and water for everyone, and send you photos of the whole crew.",
      },
    ],
  },
  {
    slug: "pembroke-pines",
    name: "Pembroke Pines",
    state: "FL",
    accentColor: "sage",
    heroVariant: "centered",
    headline: "Pet Sitting & Dog Walking in Pembroke Pines, FL",
    description:
      "Pembroke Pines is one of the largest cities in Broward County, but good pet care here still comes down to one thing: finding someone you trust. Sheryl has been caring for animals professionally for over 20 years, and she brings that same personal, attentive approach to every Pembroke Pines home she visits. Your pet gets a dedicated caregiver who remembers their routine, their quirks, and their favorite way to be greeted at the door.",
    neighborhoodGuide:
      "Sheryl provides dog walking and pet sitting across Pembroke Pines, from the established neighborhoods near C.B. Smith Park and Chapel Trail to the communities around Pembroke Lakes Mall and the residential streets off Pines Boulevard. She also serves the newer developments near Century Village and the townhome communities along Sheridan Street. The well-maintained parks and sidewalks throughout Pembroke Pines make it one of the best cities in Broward for daily dog walks.",
    typicalClients:
      "Pembroke Pines clients include working families who need mid-day dog walking, retirees in Century Village and similar communities who want help during medical appointments or travel, and new pet owners looking for an experienced hand with puppies or recently adopted rescue dogs.",
    localLandmarks: [
      "C.B. Smith Park",
      "Chapel Trail neighborhood",
      "Pembroke Lakes Mall area",
      "Pines Boulevard corridor",
      "Century Village",
    ],
    highlights: [
      "Over 20 years of professional pet care experience",
      "Serving Chapel Trail, Pembroke Lakes, Century Village, and surrounding areas",
      "Great with rescue dogs, anxious pets, and animals adjusting to new homes",
      "Affordable, transparent pricing with no hidden fees or app surcharges",
    ],
    popularServices: ["dog-walking", "dog-sitting", "puppy-visits"],
    uniqueSections: [
      {
        heading: "A Calming Presence for Rescue Dogs and Anxious Pets",
        body: "Pembroke Pines has a strong rescue and adoption community, and Sheryl has worked with dozens of dogs who came from shelters or difficult backgrounds. She knows that a rescue dog's first few months in a new home are critical, and she approaches every visit with patience and consistency. If your dog is still learning to trust new people, Sheryl will earn that trust at the dog's pace, not hers. That calm, experienced approach makes all the difference for anxious animals.",
        style: "narrative",
      },
      {
        heading: "Reliable Mid-Day Dog Walks in Pembroke Pines",
        body: "Pembroke Pines is a commuter city, and many pet owners are away from home eight to ten hours a day. Sheryl's mid-day dog walking visits keep your dog active, comfortable, and on a healthy bathroom schedule while you're at work:",
        style: "checklist",
        items: [
          "Scheduled walks at the same time each day so your dog knows what to expect",
          "20, 30, or 45-minute sessions based on your dog's breed and energy level",
          "Waste cleanup, fresh water, and a quick check of your dog's overall condition",
          "Photo updates sent directly to your phone after every walk",
          "Basic manners reinforcement to support your at-home training",
        ],
      },
    ],
    faqs: [
      {
        question: "Does Sheryl serve all of Pembroke Pines?",
        answer:
          "Yes. Sheryl covers Pembroke Pines from Chapel Trail and C.B. Smith Park in the west to the neighborhoods near Pembroke Lakes Mall and Century Village in the east. If you're in Pembroke Pines, she can reach you.",
      },
      {
        question: "I just adopted a rescue dog. Can Sheryl help with the transition?",
        answer:
          "Absolutely. Sheryl has extensive experience with rescue dogs and understands the patience and consistency they need during the adjustment period. She'll take things at your dog's pace and reinforce the routines you're building at home.",
      },
      {
        question: "Is Sheryl available for pet sitting during school breaks and holidays?",
        answer:
          "Yes. School break and holiday periods are some of the busiest times for Pembroke Pines families, and Sheryl books up quickly during those weeks. She recommends reaching out at least two weeks in advance for vacation pet sitting during peak travel times.",
      },
    ],
  },
  {
    slug: "hollywood",
    name: "Hollywood",
    state: "FL",
    accentColor: "honey",
    heroVariant: "badge",
    heroBadge: "Where Sheryl Grew Up",
    headline: "Pet Sitting & Dog Walking in Hollywood, FL",
    description:
      "Hollywood holds a special place in Sheryl's story. She moved here as a little girl, attended Hollywood Hills High School, and spent her formative years in this community before eventually settling in nearby Plantation. When she visits Hollywood homes to care for pets, she's not navigating unfamiliar streets. She's coming back to a city she knows in her bones.",
    neighborhoodGuide:
      "Sheryl provides pet sitting and dog walking throughout Hollywood, from the residential neighborhoods west of I-95 near Hollywood Hills and Emerald Hills to the areas around T.Y. Park and the communities off Hollywood Boulevard. She's familiar with the mix of single-family homes, townhouses, and condos that make up Hollywood's diverse housing landscape, and she adjusts her approach to fit each setting, whether that's a backyard play session or a leash walk through a condo-friendly route.",
    typicalClients:
      "Hollywood clients are a diverse mix: young professionals in townhomes near downtown, established families in Hollywood Hills and Emerald Hills, and retirees who need pet care help during medical appointments or extended travel. Sheryl's range of experience means she's equally comfortable in all of these settings.",
    localLandmarks: [
      "T.Y. Park",
      "Hollywood Hills neighborhood",
      "Emerald Hills",
      "Hollywood Boulevard corridor",
      "David Park",
    ],
    highlights: [
      "Sheryl grew up in Hollywood and knows the city personally",
      "Experienced with the full range of Hollywood housing: houses, townhomes, and condos",
      "Overnight pet sitting available for vacations and extended trips",
      "Insured, bonded, and backed by over 20 years of animal care experience",
    ],
    popularServices: ["dog-walking", "cat-sitting", "overnight-sitting"],
    uniqueSections: [
      {
        heading: "A Local Who Never Really Left",
        body: "There's a difference between a pet sitter who serves an area and one who grew up there. Sheryl walked these streets as a kid, and that familiarity shows in the small details: she knows which parks have the best shade for afternoon walks, which neighborhoods are quieter for noise-sensitive dogs, and how to navigate Hollywood's mix of residential and commercial streets safely with a leash in hand. Choosing a pet sitter with real roots in your community means fewer surprises and more trust from day one.",
        style: "narrative",
      },
      {
        heading: "Overnight Pet Sitting for Hollywood Residents",
        body: "Hollywood residents who travel, whether for work or vacation, need someone who can step in and keep their pets on a normal routine. Sheryl's overnight pet sitting keeps everything stable while you're away:",
        style: "checklist",
        items: [
          "Evening and morning visits that match your pet's established routine",
          "Feeding, medications, and exercise handled exactly how you'd do it yourself",
          "Companionship and interaction so your pet doesn't feel isolated",
          "Home care basics: mail pickup, plant watering, lights, and trash",
          "Daily photo updates and direct text communication throughout your trip",
        ],
      },
      {
        heading: "Cat Sitting for Hollywood Condos and Townhomes",
        body: "Hollywood's condo and townhome residents often have cats who thrive in smaller spaces but still need daily attention and enrichment when their owners are away. Sheryl's cat sitting visits include fresh food and water, litter box cleaning, interactive play, and a health check to make sure your cat is eating, drinking, and behaving normally. She'll send you a photo and a quick update after every visit so you never have to wonder how things are going.",
        style: "narrative",
      },
    ],
    faqs: [
      {
        question: "Did Sheryl really grow up in Hollywood?",
        answer:
          "Yes. Sheryl's family moved to Hollywood from Michigan when she was a little girl. She attended Hollywood Hills High School and spent years in the community before eventually settling in nearby Plantation, where she lives today.",
      },
      {
        question: "Can Sheryl care for my cat in a condo or apartment?",
        answer:
          "Absolutely. Sheryl is experienced with condo and apartment settings and knows how to work within those environments. She'll coordinate building access with you ahead of time and handle everything discreetly and respectfully.",
      },
      {
        question: "Is Hollywood too far from Plantation for reliable service?",
        answer:
          "Not at all. Hollywood is a quick drive from Plantation, and Sheryl serves the area regularly. Many of her Hollywood clients have been with her for years, and she maintains the same reliability and punctuality she offers in her closer service areas.",
      },
    ],
  },
];

export function getArea(slug: string): Area | undefined {
  return areas.find((a) => a.slug === slug);
}

export function getAllAreas(): Area[] {
  return areas;
}
