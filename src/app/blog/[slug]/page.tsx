import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import BlogCard from "@/components/BlogCard";
import StructuredData from "@/components/StructuredData";
import PhoneCTA from "@/components/PhoneCTA";
import { getBlogPost, getAllBlogPosts } from "@/content/blog";
import { articleSchema, breadcrumbSchema } from "@/lib/structured-data";
import React from "react";

/** Parse inline markdown: **bold** */
function renderInline(text: string): React.ReactNode {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return <strong key={i}>{part.slice(2, -2)}</strong>;
    }
    return part;
  });
}

/** Render markdown-ish blog content to React elements */
function renderBlogContent(content: string): React.ReactNode[] {
  const lines = content.split("\n");
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Table: starts with |
    if (line.startsWith("|")) {
      const tableLines: string[] = [];
      while (i < lines.length && lines[i].startsWith("|")) {
        tableLines.push(lines[i]);
        i++;
      }
      // Filter out separator rows (|---|---|)
      const dataRows = tableLines.filter((r) => !r.match(/^\|[\s-|]+\|$/));
      if (dataRows.length > 0) {
        const headerCells = dataRows[0].split("|").filter((c) => c.trim());
        const bodyRows = dataRows.slice(1);
        elements.push(
          <div key={`table-${i}`} className="overflow-x-auto my-6">
            <table className="w-full text-sm border border-beige/50 rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-surface">
                  {headerCells.map((cell, ci) => (
                    <th
                      key={ci}
                      className="text-left text-forest font-semibold px-4 py-2 border-b border-beige/50"
                    >
                      {renderInline(cell.trim())}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {bodyRows.map((row, ri) => {
                  const cells = row.split("|").filter((c) => c.trim());
                  return (
                    <tr key={ri} className={ri % 2 === 0 ? "bg-white" : "bg-surface/50"}>
                      {cells.map((cell, ci) => (
                        <td key={ci} className="px-4 py-2 border-b border-beige/30">
                          {renderInline(cell.trim())}
                        </td>
                      ))}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        );
      }
      continue;
    }

    if (line.startsWith("## ")) {
      elements.push(
        <h2 key={i} className="font-serif text-2xl font-bold text-forest mt-10 mb-4">
          {renderInline(line.replace("## ", ""))}
        </h2>
      );
    } else if (line.startsWith("### ")) {
      elements.push(
        <h3 key={i} className="font-serif text-xl font-bold text-forest mt-8 mb-3">
          {renderInline(line.replace("### ", ""))}
        </h3>
      );
    } else if (line.match(/^\d+\.\s/)) {
      elements.push(
        <li key={i} className="ml-6 mb-2 list-decimal">
          {renderInline(line.replace(/^\d+\.\s/, ""))}
        </li>
      );
    } else if (line.startsWith("- ")) {
      elements.push(
        <li key={i} className="ml-6 mb-2 list-disc">
          {renderInline(line.replace("- ", ""))}
        </li>
      );
    } else if (line.trim() === "") {
      elements.push(<br key={i} />);
    } else {
      elements.push(
        <p key={i} className="mb-4">
          {renderInline(line)}
        </p>
      );
    }
    i++;
  }
  return elements;
}

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
          {renderBlogContent(post.content)}
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
