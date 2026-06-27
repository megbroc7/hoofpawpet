"use client";

import { useState } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
}

export default function FAQItem({ question, answer }: FAQItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-beige/50">
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-between items-center w-full text-left py-5 gap-4"
        aria-expanded={open}
      >
        <h3 className="font-semibold text-forest pr-4">{question}</h3>
        <span
          className={`flex-shrink-0 text-sage transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
          aria-hidden="true"
        >
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </span>
      </button>
      {/*
        CSS grid accordion: animates grid-template-rows between 0fr and 1fr.
        This needs no JS height measurement, so it reflows correctly on resize
        and avoids measuring the DOM in an effect.
      */}
      <div
        className={`grid transition-[grid-template-rows] duration-200 ease-in-out ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="pb-5 text-body-text leading-relaxed">{answer}</div>
        </div>
      </div>
    </div>
  );
}
