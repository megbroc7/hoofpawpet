export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface Service {
  id: string;
  name: string;
  tagline: string;
  description: string;
  includes: string[];
  image: string;
  imageAlt: string;
  /** Long-form content for the individual service page */
  longDescription: string;
  /** Second content block, different angle/topic */
  detailSection: {
    heading: string;
    body: string;
  };
  /** Service-specific FAQs */
  faqs: ServiceFAQ[];
  /** Which areas this service is most popular in */
  popularAreas: string[];
}

export const services: Service[] = [
  {
    id: "dog-walking",
    name: "Dog Walking",
    tagline: "Professional daily dog walks",
    description:
      "Keep your dog active and happy with professional dog walking. Sheryl offers flexible session lengths (20, 30, or 45 minutes) to fit your schedule and your dog's energy level.",
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
    longDescription:
      "A daily walk isn't just exercise for your dog. It's mental stimulation, routine, and one of the most important parts of their day. Dogs who don't get regular outdoor time tend to develop behavioral problems: excessive barking, destructive chewing, anxiety, and pent-up energy that comes out in ways nobody enjoys. Sheryl's dog walking visits give your dog the structured outdoor time they need, on a schedule that works for your life.\n\nEvery walk starts with a calm greeting at the door. Sheryl checks your dog's mood and energy, clips the leash, and heads out on a route she's planned for your specific neighborhood. She knows which streets have shade during the hottest parts of the day, which sidewalks are best maintained, and which routes work for dogs who are reactive or easily overstimulated. In South Florida, those details matter more than most people realize. A walk at noon in August is a completely different experience than one at 8 AM, and Sheryl adjusts accordingly.\n\nDuring the walk, she reinforces whatever leash manners you're working on at home. If you're training loose-leash walking, she'll use the same cues and techniques. If your dog tends to pull toward other dogs, she knows how to redirect without creating stress. After the walk, your dog gets fresh water, a paw check, and a few minutes to cool down. Then you get a photo and a quick text update so you know exactly how it went.",
    detailSection: {
      heading: "Why Walk Length Matters",
      body: "Not every dog needs the same walk. A senior Shih Tzu and a two-year-old Lab have completely different needs, and treating them the same would be a disservice to both. Sheryl offers 20, 30, and 45-minute sessions because she believes the walk should fit the dog, not the other way around.\n\nA 20-minute walk is ideal for older dogs, small breeds, or dogs who just need a bathroom break and a quick stretch during the day. Thirty minutes is the sweet spot for most adult dogs: enough time for real exercise, a few sniff breaks, and some mental enrichment along the way. The 45-minute option is for high-energy breeds or dogs who need serious physical activity to stay balanced. Sheryl will recommend the right length during your meet and greet, and you can always adjust as your dog's needs change with age or season.",
    },
    faqs: [
      {
        question: "What time of day does Sheryl walk dogs?",
        answer:
          "Sheryl offers walks throughout the day, starting as early as 7 AM. Most clients book mid-day walks between 10 AM and 2 PM, but she can work around your schedule. In the summer months, she recommends morning or late afternoon walks to avoid peak heat.",
      },
      {
        question: "Will Sheryl walk my dog in the rain?",
        answer:
          "Light rain is usually fine for most dogs. During heavy storms or lightning, Sheryl will do an indoor visit with a bathroom break in the yard instead. She'll always communicate with you if weather forces a change in plans.",
      },
      {
        question: "Can Sheryl walk two dogs from the same household?",
        answer:
          "Yes. If both dogs walk well together, she can handle them on the same visit. If they have very different energy levels or one is reactive, she may recommend separate walk times. She'll assess this during the meet and greet.",
      },
    ],
    popularAreas: ["Plantation", "Cooper City", "Weston", "Pembroke Pines"],
  },
  {
    id: "dog-sitting",
    name: "Pet Sitting",
    tagline: "In-home care while you're away",
    description:
      "Leave your dog in trusted hands. Sheryl provides daily in-home visits with exercise, feeding, and companionship, perfect for working professionals or trips away from home.",
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
    longDescription:
      "When you leave town, your pet's world doesn't stop. They still need to eat on schedule, go outside, take their medications, and spend time with someone who actually pays attention to them. Boarding facilities can handle the basics, but they can't replicate the comfort of your pet's own home, their own bed, their own smells, their own routine. That's what in-home pet sitting is for.\n\nSheryl's pet sitting visits are structured around your pet's existing schedule, not a facility's. She comes to your home, follows the routine you've laid out, and handles everything from feeding and bathroom breaks to playtime and medication. If your dog takes a pill with breakfast, it happens at breakfast time. If your cat likes to be brushed after dinner, that happens too. The goal is to keep your pet's day as close to normal as possible so they stay calm and comfortable while you're gone.\n\nEach visit includes a photo update sent directly to your phone. You'll see your pet relaxed, fed, and taken care of, not sitting in a kennel wondering where you went. Sheryl also handles light home care during visits: bringing in the mail, watering plants, rotating lights, and making sure everything looks lived-in while you're away.",
    detailSection: {
      heading: "In-Home Sitting vs. Boarding: What's Actually Better for Your Pet",
      body: "Boarding kennels serve a purpose, but they're not the right choice for every animal. Dogs with anxiety, older pets, animals on medication, and pets who are territorial or reactive often do much worse in a boarding environment than they would at home. The unfamiliar sounds, smells, and proximity to strange animals can turn a simple trip away into a stressful ordeal for your pet.\n\nIn-home pet sitting eliminates all of that. Your pet stays in their own space, sleeps in their own spot, and follows their own routine. The only thing that changes is who's handling the daily care, and with Sheryl, that person is someone your pet already knows and trusts from the meet and greet. For multi-pet households, in-home sitting is almost always the better option since all your animals stay together in a familiar environment rather than being separated across different boarding facilities.",
    },
    faqs: [
      {
        question: "How many visits per day does my pet need?",
        answer:
          "Most dogs need two to three visits per day: a morning visit for breakfast and a walk, a mid-day check-in, and an evening visit for dinner and another walk. Cats typically need one visit per day. Sheryl will help you figure out the right schedule during your meet and greet.",
      },
      {
        question: "What if my pet has a medical emergency while I'm away?",
        answer:
          "Sheryl will contact you immediately and take your pet to your preferred vet or the nearest emergency clinic. She keeps your vet's information and emergency contacts on file for every client. You'll be updated throughout the process.",
      },
      {
        question: "Can Sheryl do more than one visit per day?",
        answer:
          "Yes. For longer trips, Sheryl offers an extended care package with evening and morning check-ins. She handles dinner and a walk in the evening, then returns first thing in the morning for breakfast and another walk. Most pets do great with this routine.",
      },
    ],
    popularAreas: ["Plantation", "Davie", "Sunrise", "Weston"],
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
    longDescription:
      "There's a common misconception that cats are fine on their own for a few days. Leave out some extra food and water, and they'll figure it out. But anyone who actually lives with a cat knows that's not how it works. Cats are creatures of routine. When their environment changes or their person disappears for days without any interaction, they notice, and it affects them. Some cats stop eating. Others develop litter box problems. Many just become withdrawn and anxious in ways that aren't obvious until you come home and something feels off.\n\nSheryl's cat sitting visits keep your cat's world stable while you're away. She comes to your home on a consistent schedule, refreshes food and water, scoops the litter box, and spends real time with your cat. That last part is important. A lot of pet sitters treat cat visits like a chore: refill the bowl, scoop the box, leave. Sheryl sits with your cat, offers play and interaction, and actually observes their behavior. If something seems off, you'll hear about it right away, not three days later when you get home.\n\nFor cats on medication, Sheryl handles pills, liquids, and topical treatments without drama. She's calm, patient, and experienced enough to medicate even the most uncooperative cats without turning it into a wrestling match.",
    detailSection: {
      heading: "What Sheryl Actually Checks During a Cat Visit",
      body: "A good cat sitter does more than fill a bowl. Sheryl pays attention to the small details that tell her whether your cat is doing well or if something needs attention. She checks how much food your cat has eaten since the last visit, because a sudden drop in appetite is often the first sign of a health problem. She looks at litter box output to make sure everything is normal. She observes your cat's energy level, coat condition, and whether they're drinking enough water, which is especially important in South Florida's heat.\n\nIf your cat is hiding more than usual, vomiting, or showing any behavioral changes, Sheryl will let you know immediately and discuss next steps. She won't wait until the end of the trip to mention something concerning. That kind of attentiveness is the difference between a pet sitter and someone who just feeds your cat.",
    },
    faqs: [
      {
        question: "How often should my cat be checked on while I'm away?",
        answer:
          "Most cats do well with one visit per day. If your cat is on medication, elderly, or has health issues, Sheryl may recommend twice-daily visits. For trips longer than a week, more frequent visits help keep your cat socialized and comfortable.",
      },
      {
        question: "My cat hides from strangers. Will that be a problem?",
        answer:
          "Not at all. Sheryl is experienced with shy and skittish cats. She won't force interaction. She'll let your cat come to her on their own terms, and in the meantime, she'll still handle all the essentials. Most cats warm up to her within a visit or two.",
      },
      {
        question: "Can Sheryl give my cat insulin injections?",
        answer:
          "Yes. Sheryl is experienced with administering insulin and other injectable medications for cats. She'll follow your vet's instructions precisely and keep you updated after each dose.",
      },
    ],
    popularAreas: ["Sunrise", "Hollywood", "Plantation", "Weston"],
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
    longDescription:
      "Bringing home a new puppy is one of the most exciting things a family can do, and also one of the most exhausting. Puppies can't hold their bladder for a full workday. They need to go outside every two to three hours, sometimes more, and every accident inside is a setback in house training. If you're working eight or nine hours a day, that's a long time for a puppy to be alone, and it's a lot of potential setbacks piling up.\n\nSheryl's puppy visits are designed to fill that gap. She comes to your home during the day to take your puppy outside, reinforce the potty training routine you're building, and give them the attention and stimulation they need during those critical early months. A mid-day visit means your puppy isn't crossing their legs for hours, isn't getting bored and chewing on furniture, and isn't developing the anxious habits that come from too much time alone too early.\n\nBeyond the bathroom breaks, Sheryl uses each visit as a mini training session. She reinforces basic manners like sit, stay, and gentle greetings. She works on leash introduction if your puppy is old enough. And she provides calm, consistent socialization with a trusted adult, which is one of the most important things a young dog can experience during their first year.",
    detailSection: {
      heading: "The First Year Matters More Than You Think",
      body: "The experiences a puppy has between 8 weeks and 12 months shape the dog they become for the rest of their life. Dogs who are properly socialized, gently exposed to new people and environments, and given consistent routines during this window tend to be calmer, more confident, and better behaved as adults. Dogs who spend most of that first year alone in a crate or without structured interaction often struggle with anxiety, reactivity, and behavioral issues that are much harder to fix later.\n\nSheryl understands this because she's worked with dogs at every life stage. Her puppy visits aren't just about keeping your floors clean. They're about giving your puppy the foundation for a well-adjusted adult life. She'll coordinate with you on what you're working on at home so that the training is consistent across every interaction your puppy has, whether it's with you in the evening or with Sheryl at noon.",
    },
    faqs: [
      {
        question: "How old does my puppy need to be for visits?",
        answer:
          "Sheryl can start puppy visits as soon as your puppy has had their initial round of vaccinations, typically around 10 to 12 weeks. Before that age, she recommends keeping your puppy's exposure to outside environments limited per your vet's guidance.",
      },
      {
        question: "How many puppy visits per day do you recommend?",
        answer:
          "For puppies under 6 months, Sheryl recommends at least one mid-day visit, and ideally two visits if you're gone for more than 6 hours. Older puppies (6 to 12 months) usually do well with one visit. She'll help you find the right frequency based on your puppy's age and breed.",
      },
      {
        question: "Will Sheryl follow my trainer's instructions?",
        answer:
          "Absolutely. If you're working with a professional trainer, Sheryl will follow their protocols during her visits. Consistency across handlers is one of the most important factors in successful puppy training, and she takes that seriously.",
      },
    ],
    popularAreas: ["Cooper City", "Pembroke Pines", "Plantation", "Weston"],
  },
  {
    id: "overnight-sitting",
    name: "Extended Pet Care",
    tagline: "Evening and morning check-ins while you're away",
    description:
      "Going on vacation or traveling for work? Sheryl provides extended check-in visits, morning and evening, to keep your pets fed, exercised, and comfortable in their own home while you're gone.",
    includes: [
      "Evening visit with dinner, walk, and settling in",
      "Morning visit with breakfast, walk, and medications",
      "Multiple feeding schedules maintained",
      "Outdoor time and exercise at each visit",
      "Medication administration",
      "Photo updates after every visit",
    ],
    image: "/images/overnight-sitting.jpg",
    imageAlt: "Two dogs relaxing at home during a pet sitting visit",
    longDescription:
      "When you travel, your pet's daily routine doesn't have to fall apart. Sheryl's extended care visits bookend your pet's day with an evening check-in and a morning check-in, making sure they're fed, walked, medicated, and settled at the times that matter most. Your pet stays in their own home, their own bed, surrounded by their own smells and routines. That familiarity keeps them calmer and more comfortable than any boarding facility ever could.\n\nThe evening visit covers dinner, a walk or bathroom break, fresh water, and getting your pet settled for the night. In the morning, Sheryl returns for breakfast, another walk, any medications, and a quick check to make sure everything looks good. Between those visits, most dogs and cats do just fine on their own in a comfortable, familiar home. It's the same rhythm they're used to when you're around, just with Sheryl handling it instead of you.\n\nThis setup works especially well for multi-pet households. If you have a dog who needs walks, a cat who needs medication, and a senior pet who eats on a special schedule, Sheryl handles all of it across both visits. You get photo updates after each check-in so you always know how your animals are doing.",
    detailSection: {
      heading: "What a Typical Day Looks Like for Your Pet",
      body: "Sheryl's evening visit usually falls between 5 and 8 PM depending on your pet's dinner schedule. She handles feeding, takes the dog out for a solid walk, refreshes water bowls, scoops the litter box if you have cats, and makes sure everyone is comfortable before she leaves. She'll send you a photo and a quick update so you can see your pets happy and settled.\n\nThe morning visit is typically between 7 and 9 AM. Sheryl handles breakfast, the morning walk, any medications, and a quick once-over to check that your pet looks healthy and normal. She also takes care of light home tasks during visits: bringing in the mail and packages, watering plants, rotating lights, and putting out or bringing in trash bins. By the time you get home, your pets are well cared for and your house is in order.",
    },
    faqs: [
      {
        question: "What times does Sheryl visit in the morning and evening?",
        answer:
          "Evening visits are typically between 5 and 8 PM, and morning visits between 7 and 9 AM. Sheryl will work with you to find times that match your pet's existing routine as closely as possible.",
      },
      {
        question: "Will my dog be okay alone at night?",
        answer:
          "Most dogs do very well at home overnight, especially in their own familiar environment. Sheryl's evening visit makes sure they're walked, fed, and settled before bedtime, and she's back first thing in the morning. If your dog has severe separation anxiety, she can discuss more frequent visit options with you.",
      },
      {
        question: "What if my pet has a medical emergency between visits?",
        answer:
          "Sheryl keeps your vet's emergency contact information and the nearest 24-hour animal hospital on file. If you notice something concerning via a pet camera or if Sheryl observes anything off during a visit, she'll act quickly and keep you informed throughout.",
      },
    ],
    popularAreas: ["Plantation", "Hollywood", "Weston", "Davie"],
  },
  {
    id: "horse-care",
    name: "Horse Care & Turnout",
    tagline: "Comprehensive equine care",
    description:
      "Sheryl provides daily turnout, feeding, stall cleaning, medication administration, and barn sitting for horse owners in Southwest Ranches and the surrounding area. She also offers horse boarding at her own barn in Davie, FL.",
    includes: [
      "Daily turnout management",
      "Feeding & nutrition supervision",
      "Stall cleaning & maintenance",
      "Fly care & pest management",
      "Medication administration",
      "Overnight barn sitting available",
      "Horse boarding at Sheryl's barn in Davie",
    ],
    image: "/images/horse-care.jpg",
    imageAlt: "Two horses during daily turnout with fly mask in a green paddock",
    longDescription:
      "Horse care isn't something you learn from a weekend course. It takes years of daily, hands-on experience to develop the instincts and knowledge that keep horses healthy, safe, and comfortable. Sheryl has over 20 years of that experience. She owns and manages her own barn in Davie, where she cares for horses, along with chickens, pigs, dogs, and cats. This isn't a side gig for her. It's her life.\n\nWhen you hire Sheryl for horse care, you're getting someone who understands the full scope of what your horses need on a daily basis. She handles morning turnout and evening bring-in on whatever schedule your horses follow. She feeds according to your nutrition plan, manages fly care throughout South Florida's relentless bug season, cleans stalls thoroughly, and checks your horses visually every single visit. She knows what healthy hooves look like, what a change in coat condition might mean, and when a subtle behavioral shift warrants a call to the vet.\n\nSheryl also provides overnight barn sitting during hurricanes and severe weather, which any horse owner in Broward County knows is not optional during storm season. She'll be at your barn before the storm hits and stay through until conditions are safe, managing feeding, water, stall security, and any emergencies that come up.\n\nFor horse owners who need a longer-term solution or a change of scenery for their animals, Sheryl offers boarding at her own barn in Davie. Your horse gets the same daily hands-on care she gives her own animals: turnout, feeding, stall cleaning, fly management, and constant observation from someone who's on-site every day. It's a small, personal operation, not a large commercial facility, which means your horse gets individual attention rather than being one of dozens. If you're interested in boarding, call Sheryl to discuss availability and visit the barn in person.",
    detailSection: {
      heading: "What Sets Sheryl Apart from Other Horse Care Providers",
      body: "Most pet sitters in Broward County don't touch horses. The ones who do often lack the depth of experience that horse owners need to feel comfortable leaving their animals in someone else's hands. Sheryl is different because horses are part of her everyday reality, not an add-on service she offers because someone asked.\n\nShe understands the physical demands of turnout management on large properties. She can administer oral medications, topical treatments, and basic injectables following your vet's instructions. She recognizes early signs of colic, lameness, and respiratory issues. And she communicates directly with you and your vet if anything comes up, without delay and without sugarcoating. Horse owners trust Sheryl because she treats their animals with the same seriousness and attention she gives her own.",
    },
    faqs: [
      {
        question: "How often does Sheryl visit for horse care?",
        answer:
          "Most clients book daily visits, either once or twice a day depending on their horses' needs. Sheryl can handle a simple morning turnout or a full twice-daily schedule with feeding, stall cleaning, and medication. She'll design a plan around your horses' routine.",
      },
      {
        question: "Does Sheryl provide care during hurricane season?",
        answer:
          "Yes. Sheryl provides overnight barn sitting during severe weather events. She arrives before the storm and stays through until conditions are safe, handling all feeding, water, stall management, and emergency coordination.",
      },
      {
        question: "Can Sheryl handle both my horses and my household pets?",
        answer:
          "Absolutely. Many of her clients in Davie and Southwest Ranches have horses and dogs or cats on the same property. Sheryl manages everything in a single visit so you don't need to coordinate between providers.",
      },
      {
        question: "Does Sheryl offer horse boarding?",
        answer:
          "Yes. Sheryl boards horses at her own barn in Davie, FL. It's a small, personal facility where your horse receives daily hands-on care from Sheryl herself, including turnout, feeding, stall cleaning, and fly management. Call her to discuss availability and arrange a visit to see the barn.",
      },
    ],
    popularAreas: ["Southwest Ranches", "Davie"],
  },
  {
    id: "home-care",
    name: "Home Care Add-ons",
    tagline: "Light home care during visits",
    description:
      "Sheryl can help with light home care tasks while caring for your pets, so you come home to everything in order.",
    includes: [
      "Mail pickup",
      "Plant watering",
      "Trash day assistance",
    ],
    image: "/images/home-care.jpg",
    imageAlt: "Small dog curled up on the couch at home",
    longDescription:
      "When you're away from home, it's not just your pets that need attention. Mail piles up on the porch, plants dry out, trash bins need to go to the curb, and an empty-looking house can attract unwanted attention. Sheryl handles all of these small but important tasks during her regular pet care visits, so you don't have to bother a neighbor or come home to a week's worth of problems.\n\nThese home care add-ons are included as part of any pet sitting or overnight sitting booking at no extra charge. Sheryl does them naturally as part of each visit because she treats your home the way she'd want someone to treat hers. She brings in the mail and packages so nothing sits on your doorstep. She waters your indoor and outdoor plants on whatever schedule you leave for her. She puts the trash and recycling bins out on the right day and brings them back in. She rotates lights and adjusts blinds so the house doesn't look empty from the street.\n\nIt's a small thing, but clients consistently mention it as one of the reasons they keep coming back. Knowing that someone is looking after both your pets and your home while you're gone takes a real weight off your shoulders, especially during longer trips.",
    detailSection: {
      heading: "Security and Peace of Mind While You Travel",
      body: "A house that looks unoccupied is a target. Overflowing mailboxes, dark windows every night, and trash bins left at the curb for days all signal that nobody is home. Sheryl's regular visits and home care routine keep your house looking lived-in and cared for. She's in and out at consistent times, lights are on at appropriate hours, and the exterior stays tidy.\n\nThis isn't a formal home security service, but it's a practical layer of protection that comes naturally with having someone visit your home every day. Several of Sheryl's clients have told her they feel more comfortable traveling now than they did before, specifically because they know someone trustworthy is in their house daily, keeping an eye on things.",
    },
    faqs: [
      {
        question: "Is there an extra charge for home care tasks?",
        answer:
          "No. Light home care is included with any pet sitting or extended care booking. Sheryl handles mail, plants, trash, and basic home checks as a standard part of her visits.",
      },
      {
        question: "Can Sheryl accept packages or let in a repair person?",
        answer:
          "Sheryl can bring packages inside to keep them safe. For letting in contractors or repair people, she's happy to coordinate if you give her advance notice and clear instructions about what to expect.",
      },
      {
        question: "Will Sheryl notice if something is wrong with my home?",
        answer:
          "Yes. Sheryl checks for obvious issues during each visit: unusual sounds, water leaks, AC problems, or anything that looks out of place. If something seems off, she'll let you know right away so you can address it before it becomes a bigger problem.",
      },
    ],
    popularAreas: ["Plantation", "Weston", "Sunrise", "Hollywood"],
  },
];

export function getService(id: string): Service | undefined {
  return services.find((s) => s.id === id);
}
