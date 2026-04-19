# HoofPawPet -- Acta AI Blog Integration

## What This Is

Acta AI (withacta.com) is an autoblogging platform. It generates blog posts and serves them via a **Content API**. HoofPawPet needs to fetch posts from this API at build time instead of using the static `src/content/blog.ts` file.

When Acta publishes a new post, it POSTs to a **Vercel Deploy Hook**, triggering a rebuild. During the rebuild, HoofPawPet fetches fresh posts from the Content API. New post goes live automatically.

## Before You Start

Two things need to happen on the Acta side first (done by Megan in the Acta dashboard at https://withacta.com):

1. **Create a Custom Website site** for HoofPawPet in Acta (Sites > Add Site > Custom Website). This generates a `site_key` UUID.
2. **Paste the Vercel Deploy Hook URL** into the Acta site's "Deploy Hook URL" field (you create this hook in step 3 below).

After that, Megan will give you two values:
- **Content API URL**: `https://withacta.com/api/public/blog/{site_key}` (the site_key is shown on the Acta edit page)
- **Deploy Hook URL**: Created by you in Vercel, pasted back into Acta

## Content API Response Shape

```
GET https://withacta.com/api/public/blog/{site_key}
```

No authentication required. Supports `?limit=N&offset=N&after=YYYY-MM-DD`.

```json
{
  "site": {
    "name": "Hoof & Paw Pet Services",
    "url": "https://hoofpawpet.com/"
  },
  "posts": [
    {
      "slug": "summer-pet-safety-tips",
      "title": "Summer Pet Safety Tips",
      "content": "<h2>...</h2><p>HTML content</p>",
      "excerpt": "Keep your pets safe...",
      "meta_title": "Summer Pet Safety Tips | Hoof & Paw",
      "meta_description": "Learn how to...",
      "featured_image_url": "https://...",
      "image_alt_text": "Dog drinking water",
      "faq_schema": "[{\"question\":\"...\",\"answer\":\"...\"}]",
      "published_at": "2026-04-15T09:00:00+00:00",
      "categories": [],
      "tags": [],
      "acta_score": 82
    }
  ],
  "total": 11,
  "limit": 50,
  "offset": 0
}
```

Key notes:
- `content` is **HTML**, not markdown. The current blog.ts uses markdown strings rendered by a custom `renderBlogContent()` function. You'll need to handle this difference.
- `published_at` is ISO datetime, not `YYYY-MM-DD` like the current `date` field.
- Posts are ordered by `published_at` DESC (newest first).
- CORS headers are set (`Access-Control-Allow-Origin: *`) so client-side fetching works too, but the primary path is server-side fetch at build time.

## Current HoofPawPet Blog Architecture

**Codebase:** `/Users/meganbroccoli/Desktop/Sabina/Web_Services/HoofPawPet/`

**Framework:** Next.js 16.2.2, React 19, TypeScript, Tailwind CSS v4

**Current data source:** `src/content/blog.ts`
- Exports `BlogPost` interface: `{ id, slug, title, date, author, excerpt, content, readingTime }`
- Exports `blogPosts` array (11 posts, hardcoded)
- Exports `getBlogPost(slug)` and `getAllBlogPosts()` helper functions
- Content is inline **markdown** strings

**Pages that consume blog data:**
- `src/app/blog/page.tsx` -- Blog listing. Imports `getAllBlogPosts` from `@/content/blog`.
- `src/app/blog/[slug]/page.tsx` -- Individual post. Imports `getBlogPost`, `getAllBlogPosts` from `@/content/blog`. Has a custom `renderBlogContent(content)` function that parses markdown to React elements (headings, lists, tables, bold).
- `src/app/sitemap.ts` -- Dynamic sitemap. Imports `getAllBlogPosts` from `@/content/blog`.

**Components:**
- `src/components/BlogCard.tsx` -- Used on listing page, receives `BlogPost` props.

## What Needs to Change

### 1. Create `src/lib/blog-api.ts`

A data-fetching module that calls the Acta Content API. This replaces the static data in `blog.ts`.

```typescript
const ACTA_BLOG_URL = process.env.ACTA_BLOG_API_URL;

// Fetch all published posts from Acta Content API
export async function fetchBlogPosts() {
  if (!ACTA_BLOG_URL) throw new Error("ACTA_BLOG_API_URL not configured");
  const res = await fetch(ACTA_BLOG_URL, { next: { revalidate: false } });
  if (!res.ok) throw new Error(`Acta API error: ${res.status}`);
  return res.json();
}
```

Transform Acta posts into the existing `BlogPost` interface so the rest of the app doesn't break:

```typescript
import type { BlogPost } from "@/content/blog"; // keep the interface

function transformPost(post: ActaPost): BlogPost {
  return {
    id: post.slug,
    slug: post.slug,
    title: post.title,
    date: post.published_at.split("T")[0], // "2026-04-15"
    author: "Hoof & Paw Team",
    excerpt: post.excerpt || "",
    content: post.content, // NOTE: this is now HTML, not markdown
    readingTime: Math.ceil(post.content.replace(/<[^>]*>/g, "").split(/\s+/).length / 200),
  };
}
```

### 2. Update `src/app/blog/page.tsx` and `src/app/blog/[slug]/page.tsx`

Replace `import { getAllBlogPosts } from "@/content/blog"` with the new API fetch.

**Critical:** The `[slug]/page.tsx` has a `renderBlogContent()` function that parses **markdown** to React. Since Acta returns **HTML**, you need to either:
- (A) Render HTML with `dangerouslySetInnerHTML` (simpler, Acta's HTML is trusted)
- (B) Parse HTML to React elements (more work, preserves current styling approach)

Option A is recommended. The HTML from Acta includes `<h2>`, `<h3>`, `<p>`, `<ul>`, `<ol>`, `<li>`, `<strong>`, `<em>`, `<table>`, etc. Style these with Tailwind's `prose` class or match the existing blog styles.

### 3. Update `src/app/sitemap.ts`

Currently calls synchronous `getAllBlogPosts()`. Needs to become async to fetch from the API. Next.js sitemap functions support async.

### 4. Keep `src/content/blog.ts` as fallback

Don't delete it yet. Keep the `BlogPost` interface export. The static posts can serve as fallback if the API is unreachable during a build (optional resilience).

### 5. Create Vercel Deploy Hook

In Vercel dashboard for the HoofPawPet project:
- Project Settings > Git > Deploy Hooks
- Name: "Acta Blog Publish"
- Branch: main
- Copy the generated URL
- Give it to Megan to paste into Acta's deploy hook URL field

### 6. Add Environment Variable

In Vercel dashboard > Settings > Environment Variables:
- Key: `ACTA_BLOG_API_URL`
- Value: `https://withacta.com/api/public/blog/{site_key}` (Megan provides the full URL with the site_key)
- Environments: Production, Preview, Development

### 7. Migrate Existing Posts

The 11 existing posts in `blog.ts` need to be created in Acta as published posts for this site so they appear in the Content API. Otherwise the blog goes empty after the integration. **Megan handles this on the Acta side.**

## Testing

1. Set `ACTA_BLOG_API_URL` in `.env.local` for local dev
2. Run `npm run dev`, visit `/blog` -- should show posts from Acta API (will be empty until Megan creates the site and migrates posts)
3. Visit `/blog/[slug]` -- individual post should render HTML content correctly
4. Run `npm run build` -- should succeed, sitemap should include blog URLs
5. After deploy hook is configured: publish a test post in Acta, verify the site rebuilds and the new post appears

## Optional Enhancements

- `src/app/robots.ts` -- Add a robots.txt (site doesn't have one currently)
- `src/app/feed.xml/route.ts` -- RSS feed generated from blog posts
- Use Acta's `meta_title`, `meta_description`, `featured_image_url` fields for richer SEO metadata on blog pages
- Use `faq_schema` for FAQ structured data on posts that have it
