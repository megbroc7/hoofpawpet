# Local SEO Site Fixes — Handoff Instructions

**Written:** 2026-09-28, from a local SEO audit of https://www.hoofpawpet.com
**Base commit:** `bbf4fb4` on `main`
**Scope:** 7 code fixes in this repo. No content rewrites, no new pages, no dependency changes (except the optional Task 8, which needs Megan's approval).

## Before you start

1. Read `AGENTS.md`. This repo runs **Next.js 16.2.2**, which may differ from what you remember. For metadata, the source of truth is `node_modules/next/dist/docs/01-app/03-api-reference/04-functions/generate-metadata.md`. The sections that matter here are `alternates` (line ~823), `metadataBase` (line ~392) and **Merging** (line ~1324).
2. Create a branch: `git checkout -b fix/local-seo-site-fixes`
3. Make **one commit per task**, each with a message that says what it fixed.
4. **Do not push or deploy** until Megan approves. (Note: last time, `git push` did not trigger a Vercel deploy. Megan deployed with `vercel --prod`.)
5. Business facts that must stay exactly as they are: phone **(954) 804-1716** (never 807), and Sheryl is a **solo** operator, so never write "our team".

Line numbers below are as of `bbf4fb4`. Match on the quoted code, not only the line number.

---

## Task 1 — Fix legacy redirects that send Weston traffic to Plantation

**File:** `next.config.ts`

The old Weston URL currently 308-redirects to the Plantation page (confirmed live). Now that a Weston page exists, it should go there.

- Line 13–14: in the redirect with `source: "/weston-dog-sitting-and-walking"`, change
  `destination: "/areas/plantation"` → `destination: "/areas/weston"`
- In the redirect with `source: "/horse-care-cooper-city"`, change
  `destination: "/areas/cooper-city"` → `destination: "/services/horse-care"`
  (The old page was about horse care, and the Cooper City page doesn't cover horses.)

Leave every other redirect and `permanent: true` as they are.

**Verify:** `curl -sI http://localhost:3000/weston-dog-sitting-and-walking | grep -i location` should print `/areas/weston`.

---

## Task 2 — Make the LocalBusiness schema list all 8 service cities

**File:** `src/lib/structured-data.ts`

`areaServed` (lines 30–36) is hardcoded to 5 cities, but the site has 8 area pages (it's missing Weston, Pembroke Pines and Hollywood). Build the list from the area content so it can't drift again.

1. Add at the top of the file:
   ```ts
   import { getAllAreas } from "@/content/areas";
   ```
2. Replace the whole `areaServed: [ ... ],` array with:
   ```ts
   areaServed: [
     ...getAllAreas().map((area) => ({
       "@type": "City",
       name: area.name,
       addressRegion: area.state,
     })),
     { "@type": "AdministrativeArea", name: "Broward County", addressRegion: "FL" },
   ],
   ```

Don't change anything else in `localBusinessSchema()`. That means `address` (Plantation), `geo`, `telephone`, `openingHoursSpecification` and `sameAs` all stay as they are.

**Verify** (with the server running):
```bash
curl -s http://localhost:3000/ | python3 -c "import sys,re,json; [print([a['name'] for a in d['areaServed']]) for b in re.findall(r'<script type=\"application/ld\+json\">(.*?)</script>', sys.stdin.read(), re.S) for d in (json.loads(b) if isinstance(json.loads(b), list) else [json.loads(b)]) if d.get('@type')=='LocalBusiness']"
```
Expected output: the 8 cities followed by `Broward County`.

---

## Task 3 — Replace the 5-city lists in copy

Several descriptions still list only the original 5 cities. Replace the **whole string** with the exact text given (each one is already length-checked).

| File:line | Replace the string starting with… | New string (exact) |
|---|---|---|
| `src/app/layout.tsx:26` (root `description`) | `"Personal pet sitting and horse care by Sheryl in Broward County, FL. Dog walking…` | `"Personal pet sitting and horse care by Sheryl across Broward County, FL: dog walking, cat sitting, overnight care and horse turnout. Based in Plantation."` |
| `src/app/page.tsx:19` (home `description`) | `"Personal pet sitting and horse care by Sheryl in Broward County, FL. Dog walking…` | `"Pet sitting, dog walking and horse care by Sheryl in Broward County, FL: Plantation, Davie, Weston, Pembroke Pines, Hollywood and more. Call (954) 804-1716."` |
| `src/app/areas/page.tsx:11` (`description`) | `"Hoof & Paw Pet Services serves Plantation…` | `"Sheryl serves Plantation, Davie, Weston, Cooper City, Sunrise, Pembroke Pines, Hollywood and Southwest Ranches in Broward County, FL. Find pet sitting near you."` |
| `src/app/faq/page.tsx:17` (answer to "What areas does Sheryl serve?") | `"Sheryl serves Plantation, Davie, Cooper City, Sunrise, and Southwest Ranches…` | `"Sheryl serves Plantation, Davie, Cooper City, Sunrise, Southwest Ranches, Weston, Pembroke Pines, and Hollywood in Broward County, Florida. She's based in Plantation. If your location is outside these areas but nearby, call or text to discuss availability."` |

Do **not** edit `src/content/blog.ts`. The live blog is served from the Acta API, so editing the fallback posts changes nothing in production.

**Verify:** `grep -rn "Sunrise, and Southwest Ranches" src/app` should return nothing.

---

## Task 4 — Add canonical tags to every page

The live site has **no** `<link rel="canonical">` on any page. `metadataBase` is already set in `src/app/layout.tsx` (it uses `NEXT_PUBLIC_BASE_URL` and falls back to `https://www.hoofpawpet.com`), so relative paths are enough.

> ⚠️ **Do NOT put `alternates` in `src/app/layout.tsx`.** Metadata is shallow-merged, so every page without its own `alternates` would inherit the layout's canonical and point at the homepage. That would tell Google to drop those pages. Add it **per page only**.

Add `alternates: { canonical: <path> },` to each page's metadata object:

| File | Where | canonical |
|---|---|---|
| `src/app/page.tsx` | `export const metadata` | `"/"` |
| `src/app/services/page.tsx` | `export const metadata` | `"/services"` |
| `src/app/services/[service]/page.tsx` | object returned by `generateMetadata` (success path, ~line 23) | `` `/services/${service.id}` `` |
| `src/app/areas/page.tsx` | `export const metadata` | `"/areas"` |
| `src/app/areas/[city]/page.tsx` | object returned by `generateMetadata` (~line 25) | `` `/areas/${area.slug}` `` |
| `src/app/about/page.tsx` | `export const metadata` | `"/about"` |
| `src/app/blog/page.tsx` | `export const metadata` | `"/blog"` |
| `src/app/blog/[slug]/page.tsx` | object returned by `generateMetadata` (~line 22) | `` `/blog/${post.slug}` `` |
| `src/app/faq/page.tsx` | `export const metadata` | `"/faq"` |
| `src/app/contact/page.tsx` | `export const metadata` | `"/contact"` |

Leave the `{ title: "Not Found" }` early returns alone.

**Verify:** run this, and every line must show the page's **own** URL. In particular, `/about` must NOT show the homepage.
```bash
for p in / /services /services/dog-walking /areas /areas/weston /about /blog /faq /contact; do printf "%-22s " "$p"; curl -s "http://localhost:3000$p" | grep -o '<link rel="canonical"[^>]*>' || echo MISSING; done
```
Also check one blog post: take any slug from `curl -s http://localhost:3000/sitemap.xml` and run the same grep on it.

---

## Task 5 — Point the review button at the surviving Google listing

**File:** `src/components/ReviewCTA.tsx`

Google has finished merging the duplicate Business Profile. The current CID (`10828094684110906589`) only works because Google forwards it to the surviving listing, **CID `1085558871145528338`**. Link straight to the survivor so the button doesn't depend on that forward.

- Line 9: change the URL to `https://www.google.com/maps?cid=1085558871145528338`
- Lines 6–8: replace the comment with:
  ```ts
  // Opens the verified Google Business Profile (Maps) where customers can leave a review.
  // CID of the listing that survived Google's duplicate merge (Sep 2026). Swap for the
  // one-tap g.page review link from GBP's "Ask for reviews" once Sheryl copies it.
  ```

**Verify in a real browser, not with curl:** open `https://www.google.com/maps?cid=1085558871145528338`. It must show **"Hoof and Paw Pet Services"**, 5.0★ with 5 reviews and phone 954-804-1716. (From some networks, curl only gets as far as Google's consent redirect, so it can't confirm this.) If the listing doesn't match, **stop and tell Megan** instead of shipping.

---

## Task 6 — Link services to their dedicated pages, not the hub's anchors

The homepage and city pages link each service to `/services#<id>` (a spot on the Services hub). They should link to the service's own page so that page gets the internal link.

- `src/app/page.tsx:69`: `` href={`/services#${service.id}`} `` → `` href={`/services/${service.id}`} ``
- `src/app/areas/[city]/page.tsx:344`: the same change

**Verify:** `grep -rn 'services#' src` returns nothing, and clicking a service card on `/` and on `/areas/davie` opens `/services/<id>`.

---

## Task 7 — Write real meta descriptions for the city pages

**Files:** `src/content/areas.ts`, `src/app/areas/[city]/page.tsx`

Right now each city page's meta description is just the first 155 characters of its intro plus `...` (`areas/[city]/page.tsx:27`). That cuts off mid-sentence and often doesn't mention the service.

1. In `src/content/areas.ts`, add to the `Area` interface right after `heroBadge?: string;` (line 38):
   ```ts
   /** Meta description for search results (≤160 chars). Hand-written per city. */
   metaDescription: string;
   ```
   Keep it **required** so TypeScript flags any area that's missing one.
2. Add a `metaDescription` to each area object, directly under its `headline:` line, using these exact strings:

   | slug | metaDescription |
   |---|---|
   | `plantation` | `Pet sitting, dog walking and cat care in Plantation, FL from Sheryl, a Plantation local. Photo updates after every visit. Call or text (954) 804-1716.` |
   | `davie` | `Horse care, barn sitting and pet sitting in Davie, FL. Sheryl keeps her own barn in Davie and can care for horses, dogs and cats in one visit. (954) 804-1716.` |
   | `cooper-city` | `Mid-day dog walks, puppy visits and pet sitting in Cooper City, FL for busy families. The same trusted sitter, Sheryl, every visit. Call (954) 804-1716.` |
   | `sunrise` | `Dog walking and cat sitting in Sunrise, FL on your schedule: early morning, mid-day or evening visits from Sheryl. Call or text (954) 804-1716.` |
   | `southwest-ranches` | `Horse care in Southwest Ranches, FL: daily turnout, feeding, stall cleaning and overnight barn sitting from Sheryl, 20+ years with horses. (954) 804-1716.` |
   | `weston` | `Pet sitting and dog walking in Weston, FL, including gated communities. Same caregiver every visit, photo updates, flexible for travelers. (954) 804-1716.` |
   | `pembroke-pines` | `Dog walking and pet sitting in Pembroke Pines, FL. Patient with rescue dogs and anxious pets; mid-day walks for commuters. Call Sheryl at (954) 804-1716.` |
   | `hollywood` | `Pet sitting, dog walking and cat sitting in Hollywood, FL from Sheryl, who grew up here. Houses, townhomes and condos. Call or text (954) 804-1716.` |

3. In `src/app/areas/[city]/page.tsx:27`, replace
   `` description: `${area.description.slice(0, 155)}...`, `` → `description: area.metaDescription,`

**Verify:** `curl -s http://localhost:3000/areas/weston | grep -o '<meta name="description" content="[^"]*"'` prints the Weston string with no trailing `...`.

---

## Task 8 (OPTIONAL — ask Megan first) — Add Vercel Web Analytics

The site has no analytics, so there's no way to measure whether any of this helps. This task adds a dependency and needs a dashboard toggle, so **get Megan's yes before starting**.

1. `npm i @vercel/analytics`
2. Read the installed package's README (`node_modules/@vercel/analytics/README.md`) to confirm the Next.js App Router import path for this version. Don't rely on memory.
3. Render the `<Analytics />` component once in `src/app/layout.tsx`, inside `<body>` after `<Footer />`.
4. Tell Megan to enable Web Analytics in the Vercel dashboard (Project → Analytics → Enable). The component does nothing until she does.

---

## Final verification (run after all tasks)

```bash
npm run lint           # baseline at bbf4fb4 is clean (0 errors, 0 warnings) — anything it reports is from your changes. It's slow (~2+ min).
npm run build          # must succeed; blog falls back to static posts locally if ACTA_BLOG_API_URL is unset — that's expected
npm run start          # then run each task's Verify step against http://localhost:3000
```

Report back to Megan with:
- each task's commit hash
- the output of every Verify command
- anything you skipped, and why

## Out of scope — do NOT change

- Blog content, Acta posts and `src/content/blog.ts`
- Testimonials (`src/content/testimonials.ts`). Megan is checking whether they're real first.
- Page copy, headings, the H1s on service pages, and any "insured & bonded" wording
- The `sitemap.ts` / `robots.ts` structure
- Anything related to "Sessions with Ditto" (that's going to be a separate site)

## Manual steps for Megan (not code)

- **Apex redirect:** `hoofpawpet.com` → `www` currently answers with a **307** (temporary) instead of a permanent redirect. In Vercel → Project → Settings → Domains, set `hoofpawpet.com` to redirect to `www.hoofpawpet.com` as a **308 Permanent Redirect**.
- **Google Business Profile** website field: change it to `https://www.hoofpawpet.com/?utm_source=google&utm_medium=organic&utm_campaign=gbp`.

## Noticed while writing this (not a task, FYI)

- `src/app/blog/[slug]/page.tsx` sets its own `openGraph`. Because of the shallow merge, that wipes out the layout's `openGraph.images`, `siteName` and `locale`, so blog posts are shared without the site's OG image. It's a small follow-up if Megan wants it.
