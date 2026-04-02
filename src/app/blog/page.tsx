import Hero from "@/components/Hero";
import BlogCard from "@/components/BlogCard";
import { getAllBlogPosts } from "@/content/blog";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Blog",
  "Pet care tips, horse care advice, and pet sitting insights from Hoof & Paw Pet Services in Broward County."
);

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <>
      <Hero
        title="Hoof & Paw Blog"
        tagline="Pet care tips, advice, and insights for pet and horse owners in Broward County"
        background="light"
      />

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {posts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-700 text-lg">No blog posts yet. Check back soon!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-amber-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            Questions About Pet Care or Horse Care?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Get personalized advice from our experienced team.
          </p>
          <a
            href="/contact"
            className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </>
  );
}
