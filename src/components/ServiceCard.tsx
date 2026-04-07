import Image from "next/image";
import Link from "next/link";
import { Service } from "@/content/services";

export default function ServiceCard({
  id,
  name,
  tagline,
  description,
  image,
  imageAlt,
}: Service) {
  return (
    <Link
      href={`/services/${id}`}
      id={id}
      className="block bg-white rounded-xl border border-beige/50 overflow-hidden scroll-mt-24 hover:shadow-md transition-shadow"
    >
      <div className="aspect-[16/9] overflow-hidden bg-surface">
        <Image
          src={image}
          alt={imageAlt}
          width={600}
          height={340}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="font-serif text-xl font-bold text-forest mb-1">{name}</h3>
        <p className="text-sage font-medium text-sm mb-3">{tagline}</p>
        <p className="text-body-text leading-relaxed mb-4">{description}</p>
        <span className="text-sage hover:text-sage-dark font-semibold text-sm">
          Learn more &rarr;
        </span>
      </div>
    </Link>
  );
}
