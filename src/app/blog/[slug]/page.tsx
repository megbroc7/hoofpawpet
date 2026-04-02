import Link from "next/link";
import { getBlogPost, getAllBlogPosts } from "@/content/blog";
import { createPageMetadata } from "@/lib/metadata";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  const posts = getAllBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const post = getBlogPost(params.slug);

  if (!post) {
    return createPageMetadata("Post Not Found", "This blog post could not be found");
  }

  return createPageMetadata(post.title, post.excerpt);
}

export default async function BlogPostPage(props: {
  params: Promise<{ slug: string }>;
}) {
  const params = await props.params;
  const post = getBlogPost(params.slug);

  if (!post) {
    notFound();
  }

  const formattedDate = new Date(post.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      {/* Hero with Title */}
      <section className="bg-amber-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <Link
            href="/blog"
            className="text-amber-600 hover:text-amber-700 font-semibold inline-flex items-center gap-2 mb-6"
          >
            ← Back to Blog
          </Link>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            {post.title}
          </h1>
          <div className="flex items-center gap-6 text-gray-600">
            <div>
              <p className="font-semibold">{post.author}</p>
              <p className="text-sm">{formattedDate}</p>
            </div>
            <span>·</span>
            <p className="text-sm">{post.readingTime} min read</p>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <article className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto prose prose-lg max-w-none">
          <div className="text-gray-700 leading-relaxed whitespace-pre-wrap">
            {post.content.split("\n").map((line, idx) => {
              // Handle headings
              if (line.startsWith("## ")) {
                return (
                  <h2 key={idx} className="text-3xl font-bold text-gray-900 mt-8 mb-4">
                    {line.replace("## ", "")}
                  </h2>
                );
              }

              // Handle bold text and lists
              if (line.startsWith("- ")) {
                return (
                  <li key={idx} className="ml-6 mb-2">
                    {line.replace("- ", "")}
                  </li>
                );
              }

              // Handle empty lines
              if (line.trim() === "") {
                return <p key={idx}>&nbsp;</p>;
              }

              // Regular paragraphs
              return (
                <p key={idx} className="mb-4">
                  {line}
                </p>
              );
            })}
          </div>
        </div>
      </article>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-amber-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            Ready to Get Professional Pet Care?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Contact us today to learn more about our services and schedule your first visit.
          </p>
          <a
            href="/contact"
            className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">More Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {getAllBlogPosts()
              .filter((p) => p.slug !== post.slug)
              .map((relatedPost) => (
                <Link
                  key={relatedPost.id}
                  href={`/blog/${relatedPost.slug}`}
                  className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow border border-amber-100"
                >
                  <div className="mb-4 text-sm text-gray-600">
                    {new Date(relatedPost.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}{" "}
                    · {relatedPost.readingTime} min read
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-amber-600">
                    {relatedPost.title}
                  </h3>
                  <p className="text-gray-700">{relatedPost.excerpt}</p>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </>
  );
}
