import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import BlogCard from "@/components/BlogCard";
import StructuredData from "@/components/StructuredData";
import PhoneCTA from "@/components/PhoneCTA";
import { getBlogPost, getAllBlogPosts } from "@/lib/blog-api";
import { articleSchema, breadcrumbSchema } from "@/lib/structured-data";

export async function generateStaticParams() {
  const posts = await getAllBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const post = await getBlogPost(slug);
  if (!post) return { title: "Not Found" };

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date,
    },
  };
}

export default async function BlogPostPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await props.params;
  const post = await getBlogPost(slug);
  if (!post) notFound();

  const relatedPosts = (await getAllBlogPosts()).filter(
    (p) => p.slug !== post.slug
  );
  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      <StructuredData
        data={[
          articleSchema(post),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "Blog", url: "/blog" },
            { name: post.title, url: `/blog/${post.slug}` },
          ]),
        ]}
      />

      {/* Header */}
      <section className="bg-surface py-12 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="text-sage hover:text-sage-dark font-medium text-sm mb-6 inline-block"
          >
            ← Back to Blog
          </Link>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-forest mb-4">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-body-text/70 text-sm">
            <span>{post.author}</span>
            <span>·</span>
            <time dateTime={post.date}>{formattedDate}</time>
            <span>·</span>
            <span>{post.readingTime} min read</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="py-12 px-4 sm:px-6">
        <div
          className="max-w-3xl mx-auto text-body-text leading-relaxed [&_h2]:font-serif [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-forest [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:font-serif [&_h3]:text-xl [&_h3]:font-bold [&_h3]:text-forest [&_h3]:mt-8 [&_h3]:mb-3 [&_p]:mb-4 [&_ul]:ml-6 [&_ul]:mb-4 [&_ul]:list-disc [&_ol]:ml-6 [&_ol]:mb-4 [&_ol]:list-decimal [&_li]:mb-2 [&_strong]:font-semibold [&_em]:italic [&_table]:my-6 [&_table]:w-full [&_table]:border [&_table]:border-beige/50 [&_table]:text-sm [&_thead]:bg-surface [&_th]:border-b [&_th]:border-beige/50 [&_th]:px-4 [&_th]:py-2 [&_th]:text-left [&_th]:font-semibold [&_th]:text-forest [&_td]:border-b [&_td]:border-beige/30 [&_td]:px-4 [&_td]:py-2 [&_a]:text-sage [&_a]:underline [&_a]:decoration-sage/70 [&_a:hover]:text-sage-dark [&_img]:my-8 [&_img]:rounded-xl [&_img]:border [&_img]:border-beige/30"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
      </article>

      {/* CTA */}
      <section className="py-12 px-4 sm:px-6 bg-surface">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-2xl font-bold text-forest mb-4">
            Need Professional Pet Care?
          </h2>
          <p className="text-body-text mb-6">
            Call or text Sheryl to learn about services and schedule a visit.
          </p>
          <PhoneCTA />
        </div>
      </section>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="py-12 px-4 sm:px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="font-serif text-2xl font-bold text-forest mb-6">
              More Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPosts.map((p) => (
                <BlogCard
                  key={p.id}
                  title={p.title}
                  excerpt={p.excerpt}
                  date={p.date}
                  slug={p.slug}
                  readingTime={p.readingTime}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
