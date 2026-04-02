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
    <article className="bg-white rounded-xl p-6 border border-beige/50 hover:shadow-md transition-shadow">
      <div className="mb-3 flex items-center gap-3 text-xs text-body-text/70">
        <time dateTime={date}>{formattedDate}</time>
        <span>·</span>
        <span>{readingTime} min read</span>
      </div>
      <h3 className="font-serif text-xl font-bold text-forest mb-3">
        <Link href={`/blog/${slug}`} className="hover:text-sage transition-colors">
          {title}
        </Link>
      </h3>
      <p className="text-body-text text-sm leading-relaxed mb-4">{excerpt}</p>
      <Link
        href={`/blog/${slug}`}
        className="text-sage hover:text-sage-dark font-semibold text-sm"
      >
        Read More →
      </Link>
    </article>
  );
}
