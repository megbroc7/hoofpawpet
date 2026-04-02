"use client";

import { useState, useRef, useEffect } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
}

export default function FAQItem({ question, answer }: FAQItemProps) {
  const [open, setOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    }
  }, [answer]);

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
      <div
        className="overflow-hidden transition-[max-height] duration-200 ease-in-out"
        style={{ maxHeight: open ? `${height}px` : "0px" }}
      >
        <div ref={contentRef} className="pb-5 text-body-text leading-relaxed">
          {answer}
        </div>
      </div>
    </div>
  );
}
