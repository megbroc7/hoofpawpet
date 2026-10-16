import { getAllAreas } from "@/content/areas";
import { services } from "@/content/services";
import { getAllBlogPosts } from "@/lib/blog-api";

// Plain-text site summary for AI assistants (https://llmstxt.org), generated
// from the same content as the site so it never drifts.
export const dynamic = "force-static";

const BASE_URL =
  process.env.NEXT_PUBLIC_BASE_URL || "https://www.hoofpawpet.com";

export async function GET() {
  const areas = getAllAreas();
  const posts = await getAllBlogPosts();

  const body = `# Hoof & Paw Pet Services

> One-person pet sitting, dog walking and horse care business in Broward County, Florida, owned and run by Sheryl. Based in Plantation, with her own barn in Davie. Call or text (954) 804-1716.

- Every visit is handled by Sheryl personally, never a staff member or substitute sitter
- In business since 2023; 20+ years of hands-on animal care experience
- Cares for dogs, cats, puppies and horses; horse boarding at her barn in Davie
- Photo update after every visit
- Phone (call or text): (954) 804-1716
- Email: Hoofandpawpetservice@gmail.com

## Services

${services
  .map((s) => `- [${s.name}](${BASE_URL}/services/${s.id}): ${s.description}`)
  .join("\n")}

## Service Areas

${areas
  .map((a) => `- [${a.name}, ${a.state}](${BASE_URL}/areas/${a.slug})`)
  .join("\n")}

## About & Booking

- [About Sheryl](${BASE_URL}/about): Sheryl's background and her barn in Davie
- [FAQ](${BASE_URL}/faq): Booking, service areas and pet care questions
- [Contact](${BASE_URL}/contact): Call, text or send a booking request

## Optional

${posts
  .map((p) => `- [${p.title}](${BASE_URL}/blog/${p.slug}): ${p.excerpt}`)
  .join("\n")}
`;

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
