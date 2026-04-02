"use client";

import { useState } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(false);

    const form = e.currentTarget;
    const data = new FormData(form);

    const FORMSPREE_ID = process.env.NEXT_PUBLIC_FORMSPREE_ID || "YOUR_FORM_ID";

    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    }
  }

  if (submitted) {
    return (
      <div className="bg-sage/10 border border-sage rounded-xl p-8 text-center">
        <p className="text-forest font-semibold text-lg mb-2">
          Message sent!
        </p>
        <p className="text-body-text">
          Sheryl will get back to you soon. Thank you!
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {error && (
        <div className="bg-red-50 border border-red-200 text-red-700 rounded-lg p-4 text-sm">
          Something went wrong. Please try calling Sheryl directly or try again.
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-forest mb-1">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-2.5 rounded-lg border border-beige bg-white focus:outline-none focus:border-sage focus:ring-1 focus:ring-sage transition-colors"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-forest mb-1">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-2.5 rounded-lg border border-beige bg-white focus:outline-none focus:border-sage focus:ring-1 focus:ring-sage transition-colors"
            placeholder="you@email.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-forest mb-1">
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="w-full px-4 py-2.5 rounded-lg border border-beige bg-white focus:outline-none focus:border-sage focus:ring-1 focus:ring-sage transition-colors"
          placeholder="(555) 123-4567"
        />
      </div>

      <div>
        <label htmlFor="service" className="block text-sm font-medium text-forest mb-1">
          Service Interested In
        </label>
        <select
          id="service"
          name="service"
          className="w-full px-4 py-2.5 rounded-lg border border-beige bg-white focus:outline-none focus:border-sage focus:ring-1 focus:ring-sage transition-colors"
        >
          <option value="">Select a service...</option>
          <option value="dog-walking">Dog Walking</option>
          <option value="pet-sitting">Pet Sitting</option>
          <option value="cat-sitting">Cat Sitting</option>
          <option value="puppy-visits">Puppy Visits</option>
          <option value="overnight-sitting">Overnight Pet Sitting</option>
          <option value="horse-care">Horse Care</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-forest mb-1">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="w-full px-4 py-2.5 rounded-lg border border-beige bg-white focus:outline-none focus:border-sage focus:ring-1 focus:ring-sage transition-colors resize-none"
          placeholder="Tell Sheryl about your pets and what you're looking for..."
        />
      </div>

      <button
        type="submit"
        className="w-full bg-sage hover:bg-sage-dark text-white font-bold py-3 px-6 rounded-lg transition-colors"
      >
        Send Message
      </button>
    </form>
  );
}
