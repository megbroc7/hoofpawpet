# Hoof & Paw Pet Services — Full Website Redesign

## Overview

Complete redesign of hoofpawpet.com for Sheryl's solo pet care business in Broward County, FL. The current site uses emoji icons, no real photos, amber/green colors, and generic "team" language. The redesign replaces everything with a warm, personal, mobile-first site that puts Sheryl front and center alongside her real animal photos.

**Owner:** Sheryl (solo operator, 3 years in business)
**Developer:** Megan (Sheryl's daughter)
**Target audience:** Busy professionals and families in Broward County
**Primary CTA:** Call/text Sheryl at 954-807-1716
**Tech stack:** Next.js 16, Tailwind CSS 4, TypeScript (existing stack, no changes)

## Brand Identity

### Color Palette — Soft Sage

| Role | Color | Hex | Usage |
|------|-------|-----|-------|
| Primary | Sage green | `#7A9B76` | Buttons, links, accents, service area pills |
| Secondary | Honey | `#D4A574` | Highlights, secondary CTAs, warm accents, testimonial borders |
| Dark | Deep forest | `#2C3E2D` | Headings, footer, dark sections, nav text |
| Background | Warm white | `#FAF8F5` | Page backgrounds |
| Neutral | Warm beige | `#C8B89A` | Borders, subtle card backgrounds, trust bar |
| Surface | Light beige | `#F0EDE6` | Card backgrounds, section alternation |
| Body text | Dark green | `#4a5a4a` | Paragraph text |

### Typography

- **Headings:** Warm serif — Lora or Merriweather (replaces Playfair Display)
- **Body:** Clean sans-serif — Inter or Source Sans 3 (replaces Poppins)
- **Phone number:** Always bold, always prominent, uses heading font

### Logo

- Typographic wordmark "Hoof & Paw" in the serif heading font
- Small illustrated mark: hand-drawn-style paw + horseshoe icon
- Must work at small sizes (mobile nav ~32px) and large (hero)

### Design Principles

- Mobile-first: design for phone screens, enhance for desktop
- Real photos only: no emoji icons, no stock photos — use Sheryl's actual animal photos
- Personal tone: "Sheryl" not "our team", "I" not "we" where appropriate
- Phone-forward: tap-to-call links everywhere the number appears
- Sticky header with CTA always visible
- Minimum 44px touch targets
- Single-column mobile layouts expanding to multi-column on desktop

## Page Structure

### Navigation

**Mobile (primary):**
- Sticky header: logo left, "Call/Text" sage green button right (tap-to-call `tel:9548071716`), hamburger menu
- Slide-in menu: Home, Services, About Sheryl, Areas We Serve, Blog, FAQ, Contact

**Desktop:**
- Horizontal nav: logo left, links center, phone number as highlighted button right

### Sitemap

| Page | URL | Purpose |
|------|-----|---------|
| Home | `/` | Service-forward landing, dual CTAs, social proof |
| Services | `/services` | All services with photo cards and expandable details |
| About Sheryl | `/about` | Her story, photos, the barn, builds trust |
| Areas We Serve | `/areas` | Hub page linking to 5 city pages |
| — Plantation | `/areas/plantation` | Local SEO: pet care in Plantation |
| — Davie | `/areas/davie` | Local SEO: pet care in Davie, barn connection |
| — Cooper City | `/areas/cooper-city` | Local SEO: pet care in Cooper City |
| — Sunrise | `/areas/sunrise` | Local SEO: pet care in Sunrise |
| — SW Ranches | `/areas/southwest-ranches` | Local SEO: horse care emphasis |
| Blog | `/blog` | Pet care tips, local SEO content |
| Blog Post | `/blog/[slug]` | Individual articles |
| FAQ | `/faq` | Accordion FAQ with structured data |
| Contact | `/contact` | Phone number prominent, backup contact form |

**Future expansion:** `/areas/[city]/[service]` for service+city combo pages (architecture supports this but not built at launch).

### Footer

- Phone number (tap-to-call)
- Service area links to each location page
- Quick links: Services, About, Blog, FAQ, Contact
- Yelp + Nextdoor external links
- "Insured & Bonded" text
- Copyright line

## Page Designs

### Homepage (`/`)

Mobile layout, top to bottom:

1. **Sticky Header** — Logo + "Call/Text Sheryl" button + hamburger
2. **Hero** — Light warm-white background. Headline: "Dependable pet care, right in your neighborhood." Subhead mentions Sheryl by name, insured, local. Two buttons: "Call or Text Sheryl" (primary, sage green) + "View Services" (outlined). No hero photo — clean and fast.
3. **Trust Bar** — Beige strip: "Insured & Bonded" | "3 Years Experience" | "Photo Updates Every Visit"
4. **Service Cards** — 2x2 grid mobile, 4 across desktop. Each card: real photo, service name, one-line description. Cards: Dog Walking, Pet Sitting, Cat Sitting, Horse Care. Tap → anchored section on `/services`. Below: "See all services including puppy visits, overnight care & more" link.
5. **Meet Sheryl Teaser** — Dark forest green background. Circular photo. Pull quote: "Animals have been part of my life for as long as I can remember." Button → `/about`.
6. **Testimonials** — 3 cards, horizontally scrollable on mobile. Real quotes with name + city.
7. **Areas Served** — "Serving your neighborhood" heading. 5 clickable city pills → location pages. "Based in Plantation, serving all of Broward County."
8. **Blog Preview** — 2 latest post cards. "More pet care tips" link.
9. **Bottom CTA** — Honey background. "Ready to meet Sheryl?" + large phone number + tap-to-call button.
10. **Footer**

### About Sheryl (`/about`)

- Large hero photo of Sheryl at the barn with animals
- Full bio broken into sections with photos interspersed:
  - Her background (Michigan → Hollywood → Plantation)
  - Why she started Hoof & Paw
  - The barn life (horses, chickens, pigs, dogs, cats)
  - Personal touch (grandson Isaac)
- Photo grid/gallery of her animals
- "A neighbor's promise" closing with CTA to call

### Services (`/services`)

- No emoji icons — each service gets a card with real photo
- Each card: photo, service name, short description, expandable "What's included" list
- Services listed:
  - Dog Walking (20/30/45-min sessions)
  - Dog Sitting (in-home daily visits)
  - Cat Sitting
  - Puppy Visits
  - Overnight Pet Sitting
  - Horse Care & Turnout (links to SW Ranches area page for details)
  - Home Care Add-ons (mail, plants, trash)
- Bottom CTA: "Not sure which service? Call Sheryl"

### Location Pages (`/areas/[city]`)

Template-based with unique content per city:

- City-specific H1: "Pet Sitting in [City], FL"
- Neighborhood-specific intro paragraph (unique per city, not template-swapped)
- Which services are most popular in that area
- Mention of local landmarks/neighborhoods where relevant
- Testimonial from a client in that city (if available)
- "Sheryl is based in Plantation and serves [city] regularly" for non-Plantation pages
- Services quick-links
- CTA with phone number
- **Southwest Ranches:** Horse-care focused with barn/equine content, replaces the current standalone `/horse-care` page

### Areas Hub (`/areas`)

- Simple hub page with cards for each of the 5 cities
- Brief intro about Sheryl's coverage area
- Links to all city pages

### Contact (`/contact`)

- Phone number large and tappable at the top (primary action)
- "Call or text anytime" messaging
- Lightweight backup form connected to Formspree (or similar) — actually functional
- Form fields: Name, Email, Phone, Service interested in, Message
- Service areas listed
- Yelp/Nextdoor links

### FAQ (`/faq`)

- Proper accordion component (animated open/close)
- Split into "Pet Care" and "Horse Care" sections
- Same question content as current site, rewritten for personal tone where needed
- FAQ structured data (JSON-LD) for Google rich results

### Blog (`/blog` and `/blog/[slug]`)

- Card grid with space for photos on each card
- Existing 2 blog posts carry over with refreshed styling
- Each post: proper Open Graph tags, article structured data
- Blog post pages: clean reading experience with the new typography

## SEO Requirements

### Technical SEO

- **Structured data (JSON-LD):**
  - LocalBusiness schema on every page (with service area, phone, address)
  - FAQPage schema on `/faq`
  - Article schema on blog posts
  - BreadcrumbList on all inner pages
- **Sitemap:** Auto-generated XML sitemap including all location pages
- **Meta tags:** Unique title + description for every page, Open Graph + Twitter cards
- **Location pages:** Each targets "[service] in [city], FL" keywords
- **Semantic HTML:** Proper heading hierarchy (h1 → h2 → h3), landmark elements
- **Performance:** Target 90+ Lighthouse score on mobile

### Content SEO

- Every location page has unique, non-templated intro content
- Blog supports ongoing content marketing
- FAQ content targets long-tail question queries
- Internal linking between related pages (services ↔ areas, blog ↔ services)

## Components to Build/Rebuild

| Component | Status | Notes |
|-----------|--------|-------|
| Header | Rebuild | Sticky, mobile hamburger, tap-to-call button |
| Footer | Rebuild | New layout with area links, phone CTA |
| Hero | Remove | Replace with page-specific hero sections |
| ServiceCard | Rebuild | Photo-based cards, expandable details |
| FAQItem | Rebuild | Animated accordion |
| BlogCard | Rebuild | New styling with photo support |
| ContactForm | Rebuild | Connect to Formspree, simplified fields |
| TrustBar | New | Horizontal trust indicators |
| TestimonialCard | New | Quote card with attribution |
| CityCard | New | For areas hub page |
| AreaPage template | New | Reusable location page layout |
| PhoneCTA | New | Reusable tap-to-call component |
| MeetSherylTeaser | New | Dark section with photo + quote |
| PhotoGrid | New | For about page gallery |
| StructuredData | New | JSON-LD components for each schema type |

## What Gets Removed

- `/horse-care` page — content moves to `/areas/southwest-ranches`
- All emoji icons — replaced with real photos
- Playfair Display + Poppins fonts — replaced with Lora/Merriweather + Inter/Source Sans
- Amber/gold color scheme — replaced with Soft Sage palette
- "Our team" / "we" language — replaced with personal Sheryl-first copy
- Non-functional contact form note — form will actually work

## Photos Needed

Sheryl has photos available. Recommended shots to gather:

- **Hero/About:** Sheryl with animals at the barn
- **Services:** One photo per service type (dog on walk, cat being held, puppy, horse in paddock)
- **Location pages:** Any recognizable local shots if available
- **About page gallery:** The barn, each animal, Isaac
- **Blog:** Relevant pet photos for each post

Photos should be optimized for web (WebP format, responsive sizes via Next.js Image component).
