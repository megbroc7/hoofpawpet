import Hero from "@/components/Hero";
import FAQItem from "@/components/FAQItem";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "FAQ",
  "Frequently asked questions about Hoof & Paw Pet Services. Learn about booking, service areas, pricing, and more."
);

export default function FAQPage() {
  const faqs = [
    {
      question: "What areas do you serve?",
      answer:
        "We proudly serve Plantation, Davie, Cooper City, Sunrise, and Southwest Ranches in Broward County, Florida. Our office is based in Plantation. If your location is outside these areas but nearby, please contact us to discuss availability.",
    },
    {
      question: "How do I book a visit?",
      answer:
        "Getting started is easy! Fill out our contact form on the Contact page with your name, email, phone number, the service you're interested in, and any special details about your pet. We'll get back to you within 24 hours to finalize scheduling and discuss your pet's specific needs.",
    },
    {
      question: "Do you offer a free meet and greet?",
      answer:
        "Yes! We recommend scheduling a meet and greet before your first service. This allows us to meet your pet, see your home, discuss your expectations, and help your pet become comfortable with us. Contact us to schedule yours.",
    },
    {
      question: "What if my pet has special medical needs?",
      answer:
        "We can administer medications, special diets, and provide care for pets with medical conditions. Please provide detailed instructions and any prescriptions or medications. We'll work closely with you and your veterinarian to ensure proper care.",
    },
    {
      question: "Are you insured and bonded?",
      answer:
        "Yes! Hoof & Paw is fully insured and bonded for your protection. We maintain liability insurance covering all our services. This gives you peace of mind knowing your pets and home are protected.",
    },
    {
      question: "What's included in dog walking visits?",
      answer:
        "Every dog walk includes a leash walk or yard potty break, fresh water, waste pickup and cleanup, paw checks, basic manners reinforcement, and a photo update after the visit. Choose from 20, 30, or 45-minute sessions depending on your dog's needs.",
    },
    {
      question: "How do I receive updates during pet sitting?",
      answer:
        "We send photo updates and messages during every visit. You'll know your pet is safe, happy, and well cared for. Updates are sent via text and/or email, depending on your preference.",
    },
    {
      question: "What's your cancellation policy?",
      answer:
        "We understand that plans change. Please provide at least 24 hours notice for cancellations or reschedules whenever possible. Cancellations made with less than 24 hours notice may incur a service charge. Contact us directly to discuss your specific situation.",
    },
    {
      question: "Do you care for multiple pets in the same home?",
      answer:
        "Absolutely! We're experienced with multi-pet households. We provide care for all your pets during visits. Different pet types may affect pricing—please discuss your specific situation when booking.",
    },
    {
      question: "What should I prepare before the first visit?",
      answer:
        "Before your first visit, prepare a comfortable space for your pet, leave food/water bowls and supplies accessible, provide clear instructions for routines and preferences, and leave emergency contact information. We'll discuss any special setup details during the meet and greet.",
    },
    {
      question: "What if there's an emergency during a visit?",
      answer:
        "Your pet's safety is our top priority. If an emergency arises, we'll immediately contact you at the number provided. We're also prepared to take your pet to an emergency veterinary clinic if needed. Please provide the name and location of your preferred emergency vet.",
    },
    {
      question: "Do you offer discounts for recurring services?",
      answer:
        "Yes! We offer package pricing for regular dog walking and pet sitting services. The more frequently you use our services, the better the rate. Contact us to discuss pricing packages that fit your needs.",
    },
    {
      question: "What areas do you serve for horse care?",
      answer:
        "We provide comprehensive horse care services throughout Southwest Ranches and the surrounding Broward County area. If your property is outside our primary service zone, please contact us to discuss availability.",
    },
    {
      question: "What does daily horse turnout include?",
      answer:
        "Daily turnout includes consistent scheduling regardless of weather, paddock and pasture safety checks, fresh water availability, supervision and monitoring, weather-appropriate management, and photo updates. We ensure your horse gets the consistent routine necessary for optimal health.",
    },
    {
      question: "Can you administer medications to my horse?",
      answer:
        "Yes! We're experienced in administering oral, injectable, and topical medications. Please provide clear instructions from your veterinarian and ensure we have all necessary supplies. We'll coordinate with your vet regarding any special care requirements.",
    },
    {
      question: "Do you offer overnight barn sitting?",
      answer:
        "Yes! We provide overnight barn sitting services during severe weather, equestrian events, or extended absences. This includes 24/7 monitoring, emergency response capability, all routine care, and veterinary coordination if needed.",
    },
    {
      question: "Are you experienced with all horse types and temperaments?",
      answer:
        "Yes! We work with horses of all breeds, ages, and temperaments. We treat every horse with patience, respect, and care. During the meet and greet, we'll assess your horse's personality and discuss any special handling requirements.",
    },
    {
      question: "How often can you provide horse turnout?",
      answer:
        "We can provide daily turnout care seven days a week. We understand that horses need consistent routine for optimal health. Discuss your specific schedule during the booking process.",
    },
    {
      question: "Do you handle fly care during turnout?",
      answer:
        "Absolutely! South Florida's fly season is intense, and we manage fly care during turnout using fly spray and other appropriate methods. This keeps your horse comfortable and helps prevent fly-related issues.",
    },
    {
      question: "How can I get started with Hoof & Paw?",
      answer:
        "Getting started is simple! Visit our Contact page and fill out the service request form. Tell us about your pet, your service needs, and your service area. We'll respond within 24 hours to schedule a meet and greet and discuss your specific requirements.",
    },
  ];

  return (
    <>
      <Hero
        title="Frequently Asked Questions"
        tagline="Find answers to common questions about our pet and horse care services"
        background="light"
      />

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Pet Services FAQ */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Pet Services</h2>
              <div className="space-y-0">
                {faqs.slice(0, 10).map((faq, idx) => (
                  <FAQItem
                    key={idx}
                    question={faq.question}
                    answer={faq.answer}
                  />
                ))}
              </div>
            </div>

            {/* Horse Care & General FAQ */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">Horse Care & General</h2>
              <div className="space-y-0">
                {faqs.slice(10).map((faq, idx) => (
                  <FAQItem
                    key={idx + 10}
                    question={faq.question}
                    answer={faq.answer}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Additional Help Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-amber-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            Didn't find your answer?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            We're always happy to help! Reach out to us directly with any questions about our
            services, your pet's needs, or anything else.
          </p>
          <a
            href="/contact"
            className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            Contact Us
          </a>
        </div>
      </section>
    </>
  );
}
