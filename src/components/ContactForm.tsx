"use client";

import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "dog-walking",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // This is a frontend-only form. To make it functional, you would:
    // 1. Use a service like Formspree (https://formspree.io/)
    // 2. Use EmailJS (https://www.emailjs.com/)
    // 3. Use your own backend API
    // For now, we just show a success message

    console.log("Form submitted:", formData);
    setSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "dog-walking",
        message: "",
      });
    }, 3000);
  };

  const services = [
    { value: "dog-walking", label: "Dog Walking" },
    { value: "dog-sitting", label: "Dog Sitting" },
    { value: "cat-sitting", label: "Cat Sitting" },
    { value: "puppy-visits", label: "Puppy Visits" },
    { value: "overnight-sitting", label: "Overnight Pet Sitting" },
    { value: "horse-care", label: "Horse Care" },
    { value: "other", label: "Other Service" },
  ];

  return (
    <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
      {submitted && (
        <div className="mb-8 p-4 bg-green-100 border border-green-400 text-green-800 rounded-lg">
          Thank you for your message! We'll get back to you soon.
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-500"
            placeholder="Your name"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-500"
            placeholder="your@email.com"
          />
        </div>
      </div>

      <div className="mb-6">
        <label htmlFor="phone" className="block text-sm font-semibold mb-2">
          Phone Number
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-500"
          placeholder="(555) 123-4567"
        />
      </div>

      <div className="mb-6">
        <label htmlFor="service" className="block text-sm font-semibold mb-2">
          Service Interested In *
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-500"
        >
          {services.map((service) => (
            <option key={service.value} value={service.value}>
              {service.label}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-6">
        <label htmlFor="message" className="block text-sm font-semibold mb-2">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-500"
          placeholder="Tell us about your pets and what you're looking for..."
        />
      </div>

      <button
        type="submit"
        className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-6 rounded-lg transition-colors"
      >
        Send Message
      </button>

      <p className="text-sm text-gray-600 mt-4">
        Note: This form is frontend-only. To receive messages, please integrate
        with{" "}
        <a
          href="https://formspree.io/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-amber-600 hover:underline"
        >
          Formspree
        </a>
        ,{" "}
        <a
          href="https://www.emailjs.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-amber-600 hover:underline"
        >
          EmailJS
        </a>
        , or your own backend.
      </p>
    </form>
  );
}
