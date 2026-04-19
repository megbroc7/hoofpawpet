import type { Metadata } from "next";
import Link from "next/link";
import BlogCard from "@/components/BlogCard";
import { getAllBlogPosts } from "@/lib/blog-api";
import StructuredData from "@/components/StructuredData";
import { breadcrumbSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Pet care tips, horse care advice, and local insights from Sheryl at Hoof & Paw Pet Services in Broward County, FL.",
};

export default async function BlogPage() {
  const posts = await getAllBlogPosts();

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

      <section className="py-12 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6 text-body-text leading-relaxed">
            <p>
              Caring for pets and horses in South Florida comes with its own
              set of challenges. The heat, the humidity, hurricane season,
              the local wildlife, and the unique rhythms of life in Broward
              County all shape how responsible pet owners need to think about
              their animals. Sheryl writes from over 20 years of firsthand
              experience working with dogs, cats, and horses across
              Plantation, Davie, Cooper City, Sunrise, Southwest Ranches,
              Weston, Pembroke Pines, and Hollywood.
            </p>
            <p>
              These articles cover topics that come up in real conversations
              with clients: how to keep your dog safe during the hottest
              months, what consistent daily turnout actually does for a
              horse&apos;s health, why enrichment matters just as much as
              exercise on a walk, and how to prepare your animals for
              hurricane season before the first storm watch appears on the
              radar. You&apos;ll also find practical advice on hiring a dog
              walker, choosing a pet sitter, and understanding your pet&apos;s
              behavior at a deeper level.
            </p>
            <p>
              Everything here is grounded in what Sheryl sees and does every
              day on the job. No generic advice pulled from a textbook. If
              something on this blog sparks a question about your own pet,
              don&apos;t hesitate to reach out. Sheryl is always happy to
              talk through your specific situation.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          {posts.length === 0 ? (
            <p className="text-center text-body-text">
              No posts yet. Check back soon!
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
