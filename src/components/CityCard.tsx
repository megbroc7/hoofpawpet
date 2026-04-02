import Link from "next/link";
import { Area } from "@/content/areas";

export default function CityCard({ slug, name, highlights }: Area) {
  return (
    <Link
      href={`/areas/${slug}`}
      className="bg-white rounded-xl border border-beige/50 p-6 hover:shadow-md transition-shadow group"
    >
      <h3 className="font-serif text-xl font-bold text-forest mb-3 group-hover:text-sage transition-colors">
        {name}
      </h3>
      <ul className="space-y-1.5 mb-4">
        {highlights.slice(0, 2).map((h) => (
          <li key={h} className="text-body-text text-sm flex items-start gap-2">
            <span className="text-sage font-bold mt-0.5">✓</span>
            <span>{h}</span>
          </li>
        ))}
      </ul>
      <span className="text-sage font-semibold text-sm">
        Learn more →
      </span>
    </Link>
  );
}
