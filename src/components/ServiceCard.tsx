"use client";

import { useState } from "react";
import Image from "next/image";
import { Service } from "@/content/services";

export default function ServiceCard({
  id,
  name,
  tagline,
  description,
  includes,
  image,
  imageAlt,
}: Service) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div id={id} className="bg-white rounded-xl border border-beige/50 overflow-hidden scroll-mt-24">
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
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-sage hover:text-sage-dark font-semibold text-sm flex items-center gap-1 transition-colors"
        >
          {expanded ? "Hide details" : "What's included"}
          <span
            className={`transition-transform duration-200 ${
              expanded ? "rotate-180" : ""
            }`}
          >
            ▾
          </span>
        </button>
        {expanded && (
          <ul className="mt-4 space-y-2">
            {includes.map((item) => (
              <li key={item} className="flex items-start gap-2 text-body-text text-sm">
                <span className="text-sage font-bold mt-0.5">✓</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
