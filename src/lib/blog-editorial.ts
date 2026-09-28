import type { BlogPost } from "@/content/blog";
import blogRedirects from "@/content/blog-redirects.json";
import blogCorrections from "@/content/blog-corrections.json";

const redirects: Record<string, string> = blogRedirects;
const corrections: Record<string, string[][]> = blogCorrections;

// Applies to the Acta feed and the local fallback alike. Source posts remain
// recoverable in Acta; retired URLs are handled by next.config.ts.
export function prepareBlogPosts(posts: BlogPost[]): BlogPost[] {
  return posts
    .filter((post) => !Object.hasOwn(redirects, post.slug))
    .map((post) => {
      const correct = (text: string) =>
        (corrections[post.slug] ?? []).reduce(
          (result, [before, after]) => result.replaceAll(before, after),
          text
        );

      // Avoid internal links through retired URLs in retained articles.
      const content = Object.entries(redirects).reduce(
        (html, [source, destination]) =>
          html.replaceAll(`/blog/${source}`, `/blog/${destination}`),
        correct(post.content)
      );

      return {
        ...post,
        content,
        excerpt: correct(post.excerpt),
      };
    });
}
