"use client";

import { useState } from "react";

interface FAQItemProps {
  question: string;
  answer: string;
}

export default function FAQItem({ question, answer }: FAQItemProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-6">
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-between items-start w-full text-left"
      >
        <h3 className="text-lg font-semibold text-gray-900 pr-8">{question}</h3>
        <span
          className={`flex-shrink-0 text-2xl transition-transform ${
            open ? "rotate-180" : ""
          }`}
        >
          ▼
        </span>
      </button>
      {open && <p className="mt-4 text-gray-700 leading-relaxed">{answer}</p>}
    </div>
  );
}
