import Link from "next/link";

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  slug: string;
  readingTime: number;
}

export default function BlogCard({
  title,
  excerpt,
  date,
  slug,
  readingTime,
}: BlogCardProps) {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow border border-amber-100">
      <div className="mb-4 flex items-center gap-4 text-sm text-gray-600">
        <time dateTime={date}>{formattedDate}</time>
        <span>·</span>
        <span>{readingTime} min read</span>
      </div>
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        <Link href={`/blog/${slug}`} className="hover:text-amber-600">
          {title}
        </Link>
      </h2>
      <p className="text-gray-700 mb-6 leading-relaxed">{excerpt}</p>
      <Link
        href={`/blog/${slug}`}
        className="text-amber-600 hover:text-amber-700 font-semibold inline-flex items-center gap-2"
      >
        Read More →
      </Link>
    </article>
  );
}
