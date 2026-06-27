"use client";

import { useState, useEffect, useCallback } from "react";
import type { Testimonial } from "@/content/testimonials";

export default function TestimonialCarousel({
  testimonials,
}: {
  testimonials: Testimonial[];
}) {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = testimonials.length;

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % total);
  }, [total]);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + total) % total);
  }, [total]);

  /* Auto-advance every 6 seconds, paused while the user is hovering or
     keyboard-focused on the carousel so it doesn't yank the view away.
     NOTE: the empty-array early return below is the single source of truth
     for `total === 0`; this effect must stay below all hooks so the return
     remains rules-of-hooks-safe. */
  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next, paused]);

  // Guard: nothing sensible to render without testimonials. This must stay
  // after all hooks above.
  if (total === 0) {
    return (
      <div className="bg-warm-white rounded-xl p-8 border border-beige/50 text-center text-body-text">
        No testimonials yet.
      </div>
    );
  }

  const t = testimonials[current];

  return (
    <div
      className="relative max-w-2xl mx-auto"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      {/* Card */}
      <div className="bg-warm-white rounded-xl p-8 border border-beige/50 text-center min-h-[200px] flex flex-col justify-center">
        <div className="text-sage text-3xl mb-4" aria-hidden="true">
          &ldquo;
        </div>
        <p className="text-body-text leading-relaxed text-lg mb-6">
          {t.quote}
        </p>
        <p className="text-forest font-semibold text-sm">
          - {t.name}, {t.city}
        </p>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-center gap-6 mt-6">
        <button
          onClick={prev}
          aria-label="Previous testimonial"
          className="w-10 h-10 rounded-full border border-beige/50 flex items-center justify-center text-sage hover:bg-sage hover:text-white transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Dots */}
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to testimonial ${i + 1}`}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                i === current ? "bg-sage" : "bg-beige/50"
              }`}
            />
          ))}
        </div>

        <button
          onClick={next}
          aria-label="Next testimonial"
          className="w-10 h-10 rounded-full border border-beige/50 flex items-center justify-center text-sage hover:bg-sage hover:text-white transition-colors"
        >
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  );
}
