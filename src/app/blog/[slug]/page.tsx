import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import BlogCard from "@/components/BlogCard";
import StructuredData from "@/components/StructuredData";
import PhoneCTA from "@/components/PhoneCTA";
import { getBlogPost, getAllBlogPosts } from "@/content/blog";
import { articleSchema, breadcrumbSchema } from "@/lib/structured-data";

export async function generateStaticParams() {
  return getAllBlogPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await props.params;
  const post = getBlogPost(slug);
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
  const post = getBlogPost(slug);
  if (!post) notFound();

  const relatedPosts = getAllBlogPosts().filter((p) => p.slug !== post.slug);
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
        <div className="max-w-3xl mx-auto text-body-text leading-relaxed">
          {post.content.split("\n").map((line, idx) => {
            if (line.startsWith("## ")) {
              return (
                <h2
                  key={idx}
                  className="font-serif text-2xl font-bold text-forest mt-10 mb-4"
                >
                  {line.replace("## ", "")}
                </h2>
              );
            }
            if (line.startsWith("### ")) {
              return (
                <h3
                  key={idx}
                  className="font-serif text-xl font-bold text-forest mt-8 mb-3"
                >
                  {line.replace("### ", "")}
                </h3>
              );
            }
            if (line.startsWith("- ")) {
              return (
                <li key={idx} className="ml-6 mb-2">
                  {line.replace("- ", "")}
                </li>
              );
            }
            if (line.trim() === "") return <br key={idx} />;
            return (
              <p key={idx} className="mb-4">
                {line}
              </p>
            );
          })}
        </div>
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
