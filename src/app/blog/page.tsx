import type { Metadata } from "next";
import Link from "next/link";
import BlogCard from "@/components/BlogCard";
import { getAllBlogPosts } from "@/content/blog";
import StructuredData from "@/components/StructuredData";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Pet care tips, horse care advice, and local insights from Sheryl at Hoof & Paw Pet Services in Broward County, FL.",
};

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <>
      <StructuredData
        data={breadcrumbSchema([
          { name: "Home", url: "/" },
          { name: "Blog", url: "/blog" },
        ])}
      />

      <section className="bg-surface py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-serif text-4xl font-bold text-forest mb-4">
            Pet Care Tips &amp; Advice
          </h1>
          <p className="text-body-text text-lg">
            Practical advice from Sheryl for pet and horse owners in Broward
            County.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          {posts.length === 0 ? (
            <p className="text-center text-body-text">
              No posts yet — check back soon!
            </p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {posts.map((post) => (
                <BlogCard
                  key={post.id}
                  title={post.title}
                  excerpt={post.excerpt}
                  date={post.date}
                  slug={post.slug}
                  readingTime={post.readingTime}
                />
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 bg-surface">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-2xl font-bold text-forest mb-4">
            Have a pet care question?
          </h2>
          <p className="text-body-text mb-8">
            Sheryl is happy to help with personalized advice.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-sage hover:bg-sage-dark text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            Ask Sheryl
          </Link>
        </div>
      </section>
    </>
  );
}
