import type { Metadata } from "next";
import Link from "next/link";
import FAQItem from "@/components/FAQItem";
import StructuredData from "@/components/StructuredData";
import { breadcrumbSchema, faqSchema } from "@/lib/structured-data";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about Hoof & Paw Pet Services. Learn about booking, service areas, pricing, and pet care with Sheryl in Broward County.",
};

const petFaqs = [
  {
    question: "What areas does Sheryl serve?",
    answer:
      "Sheryl serves Plantation, Davie, Cooper City, Sunrise, and Southwest Ranches in Broward County, Florida. She's based in Plantation. If your location is outside these areas but nearby, call or text to discuss availability.",
  },
  {
    question: "How do I book a visit?",
    answer:
      "The easiest way is to call or text Sheryl directly at (954) 807-1716. You can also fill out the contact form on the Contact page. She'll get back to you within 24 hours to finalize scheduling and discuss your pet's specific needs.",
  },
  {
    question: "Is there a free meet and greet?",
    answer:
      "Yes! Sheryl recommends a meet and greet before your first service. This allows her to meet your pet, see your home, discuss expectations, and help your pet get comfortable. Call or text to schedule.",
  },
  {
    question: "What if my pet has special medical needs?",
    answer:
      "Sheryl can administer medications, follow special diets, and care for pets with medical conditions. Provide detailed instructions and any prescriptions. She works closely with you and your veterinarian to ensure proper care.",
  },
  {
    question: "Is Hoof & Paw insured?",
    answer:
      "Yes! Hoof & Paw is fully insured and bonded. Sheryl maintains liability insurance covering all services, giving you peace of mind that your pets and home are protected.",
  },
  {
    question: "What's included in dog walking?",
    answer:
      "Every walk includes a leash walk or yard potty break, fresh water, waste cleanup, paw checks, basic manners reinforcement, and a photo update. Choose 20, 30, or 45-minute sessions.",
  },
  {
    question: "How will I receive updates?",
    answer:
      "Sheryl sends photo updates and messages during every visit via text and/or email, depending on your preference. You'll always know your pet is safe and happy.",
  },
  {
    question: "What's the cancellation policy?",
    answer:
      "Please provide at least 24 hours notice for cancellations or reschedules. Cancellations with less than 24 hours notice may incur a service charge. Call or text Sheryl directly to discuss.",
  },
  {
    question: "Does Sheryl care for multiple pets?",
    answer:
      "Absolutely! Sheryl is experienced with multi-pet households and provides care for all your pets during visits. Different pet types may affect pricing — discuss your situation when booking.",
  },
  {
    question: "What should I prepare before the first visit?",
    answer:
      "Prepare a comfortable space for your pet, leave food/water/supplies accessible, provide clear routine instructions, and leave emergency contact info. Sheryl will discuss specifics during the meet and greet.",
  },
];

const horseFaqs = [
  {
    question: "Where does Sheryl provide horse care?",
    answer:
      "Sheryl provides horse care throughout Southwest Ranches and the surrounding Broward County area. Her own barn is in Davie. Contact her to discuss availability for your location.",
  },
  {
    question: "What does daily turnout include?",
    answer:
      "Daily turnout includes consistent scheduling regardless of weather, paddock and pasture safety checks, fresh water, supervision, weather-appropriate management, and photo updates.",
  },
  {
    question: "Can Sheryl administer medications to horses?",
    answer:
      "Yes — she's experienced with oral, injectable, and topical medications. Provide instructions from your vet and ensure all supplies are available. She coordinates directly with your veterinarian.",
  },
  {
    question: "Is overnight barn sitting available?",
    answer:
      "Yes! Sheryl provides overnight barn sitting during severe weather, equestrian events, or extended absences. This includes 24/7 monitoring, emergency response, all routine care, and vet coordination.",
  },
  {
    question: "Does Sheryl handle fly care?",
    answer:
      "Absolutely. South Florida's fly season is intense, and Sheryl manages fly care during turnout using fly spray and other methods to keep your horse comfortable.",
  },
];

const allFaqs = [...petFaqs, ...horseFaqs];

export default function FAQPage() {
  return (
    <>
      <StructuredData
        data={[
          faqSchema(allFaqs),
          breadcrumbSchema([
            { name: "Home", url: "/" },
            { name: "FAQ", url: "/faq" },
          ]),
        ]}
      />

      <section className="bg-surface py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="font-serif text-4xl font-bold text-forest mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-body-text text-lg">
            Common questions about Sheryl&apos;s pet and horse care services.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="font-serif text-2xl font-bold text-forest mb-6">
            Pet Services
          </h2>
          <div className="mb-12">
            {petFaqs.map((faq, i) => (
              <FAQItem key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>

          <h2 className="font-serif text-2xl font-bold text-forest mb-6">
            Horse Care
          </h2>
          <div className="mb-12">
            {horseFaqs.map((faq, i) => (
              <FAQItem key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 bg-surface">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-serif text-2xl font-bold text-forest mb-4">
            Still have questions?
          </h2>
          <p className="text-body-text mb-8">
            Sheryl is always happy to chat.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-sage hover:bg-sage-dark text-white font-bold py-3 px-6 rounded-lg transition-colors"
          >
            Contact Sheryl
          </Link>
        </div>
      </section>
    </>
  );
}
