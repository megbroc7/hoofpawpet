# Content cleanup — 28 September 2026

## Changes

Megan confirmed in this conversation that Sheryl does **not** have insurance or bonding. Removed positive claims from the homepage, trust bar, footer, Sunrise/Hollywood area copy, fallback blog and three live-feed articles. The FAQ now gives an explicit accurate answer. Testimonials remain unchanged, interpreting Megan's “yes” as confirmation that they are genuine and approved; no independent source validation was performed.

The live blog had 30 posts. Retained 18 and permanently redirected 12 overlapping articles using the map below. Decisions are based on article text and topical overlap; Search Console traffic/backlink data was not available for selecting targets. Kept specialist lizard, sniffing, leash-training, horse-care and puppy articles distinct.

Implementation: `src/content/blog-redirects.json` feeds Next.js 308 redirects and the publishing filter. `src/content/blog-corrections.json` applies exact corrections to known Acta text. The same editorial processing runs on the Acta feed and fallback, removing retired entries from the index, homepage, related posts, sitemap and static route generation. Internal links in retained articles are updated. Original Acta posts have **not** been deleted or edited in the CMS. Corrections are applied by the website; future rewritten CMS text needs review because exact text corrections cannot cover unknown future wording.

Acta's editorial calendar/instructions should use one article per search intent, update existing topics instead of repeating them, and never describe Sheryl as insured or bonded. No Acta schedule/account settings were changed because the browser presented its sign-in screen.

## Redirect map

| Retired article | Main article retained |
|---|---|
| `how-to-keep-your-pup-cool-in-south-florida-heat` | `how-to-keep-your-dog-cool-during-south-florida-summers` |
| `10-tips-for-caring-for-dogs-in-south-florida-heat` | `how-to-keep-your-dog-cool-during-south-florida-summers` |
| `how-to-train-your-dog-for-south-florida-heat` | `how-to-keep-your-dog-cool-during-south-florida-summers` |
| `6-essential-tips-for-dog-owners-in-south-florida` | `summer-pet-safety-broward` |
| `how-to-protect-dogs-from-south-florida-hazards` | `9-hidden-dangers-for-dogs-in-south-florida` |
| `caring-for-big-vs-small-dogs-a-complete-guide` | `5-key-differences-between-big-and-small-dogs` |
| `boost-your-dogs-health-with-diy-meals` | `8-homemade-dog-food-recipes-your-pup-will-love` |
| `happier-walks-taming-difficult-dogs-easily` | `my-struggle-managing-a-reactive-dog-on-walks` |
| `my-journey-to-happier-dogs-with-daily-walks` | `5-ways-regular-walks-enhance-your-dogs-health` |
| `how-to-prepare-your-dog-for-hurricane-season` | `hurricane-prep-for-pets-in-broward-what-to-pack-and-where-to-go` |
| `ensure-your-dogs-safety-with-expert-walkers` | `hire-a-dog-walker-broward-county` |
| `my-experience-with-hoof-paw-a-trustworthy-choice` | `why-hoofpaw-pet-service-best-dog-walking-broward` |

## Verification

- `npm run lint`: passed.
- `npm run build`: passed with the production Acta feed; 18 blog article paths generated.
- `node scripts/verify-seo-cleanup.mjs`: passed, checking 42 built HTML pages, all 12 one-hop redirects, destination existence, internal links and known insurance corrections.
- Vercel domain configuration saved with `redirectStatusCode: 308`; public HTTP readback returned 308 and preserved `/blog` plus all three UTM parameters.
- Production deployment and full public-page verification: recorded below after publishing.

## Google work

See `2026-09-28-google-profile-and-reviews.md` for the current access blocker, exact category/website edits, client request routine and six reply drafts. Nothing was sent to Sheryl or clients.
