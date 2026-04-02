import Link from "next/link";
import Hero from "@/components/Hero";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Services",
  "Professional pet sitting and horse care services in Broward County. Dog walking, cat sitting, pet sitting, and horse turnout care."
);

export default function ServicesPage() {
  return (
    <>
      <Hero
        title="Our Professional Services"
        tagline="Comprehensive pet care and equine services tailored to your needs"
        background="light"
      />

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Dog Walking */}
          <div className="mb-20">
            <div className="flex gap-4 items-start mb-6">
              <span className="text-5xl">🐕</span>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Dog Walking</h2>
                <p className="text-amber-600 font-semibold">
                  Professional daily dog walks
                </p>
              </div>
            </div>
            <div className="bg-amber-50 rounded-lg p-8 border border-amber-200">
              <p className="text-gray-700 mb-6 leading-relaxed">
                Keep your dog active and happy with professional dog walking services.
                We offer flexible session lengths to fit your schedule and your dog's
                energy level.
              </p>
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <div>
                  <h3 className="font-bold text-lg mb-2">20-Minute Walk</h3>
                  <p className="text-gray-700">Quick potty break and exercise for
                    busy days</p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">30-Minute Walk</h3>
                  <p className="text-gray-700">Standard walk with good exercise and
                    enrichment</p>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">45-Minute Walk</h3>
                  <p className="text-gray-700">Extended walk for high-energy dogs and
                    adventures</p>
                </div>
              </div>
              <p className="text-gray-700 font-semibold mb-4">Every walk includes:</p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Leash walk or yard potty break</li>
                <li>✓ Fresh water offered</li>
                <li>✓ Waste pickup and cleanup</li>
                <li>✓ Paw checks</li>
                <li>✓ Basic manners reinforcement</li>
                <li>✓ Photo update after visit</li>
              </ul>
            </div>
          </div>

          {/* Dog Sitting */}
          <div className="mb-20">
            <div className="flex gap-4 items-start mb-6">
              <span className="text-5xl">🏠</span>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Dog Sitting</h2>
                <p className="text-amber-600 font-semibold">In-home care while you're away</p>
              </div>
            </div>
            <div className="bg-amber-50 rounded-lg p-8 border border-amber-200">
              <p className="text-gray-700 mb-6 leading-relaxed">
                Leave your dog in trusted hands. Our in-home dog sitting service provides
                daily visits with exercise, feeding, and companionship. Perfect for working
                professionals or occasional trips away from home.
              </p>
              <p className="text-gray-700 font-semibold mb-4">Included in every visit:</p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Multiple daily visits as needed</li>
                <li>✓ Exercise and playtime</li>
                <li>✓ Feeding and fresh water</li>
                <li>✓ Medication administration if needed</li>
                <li>✓ Outdoor bathroom breaks</li>
                <li>✓ Photo and text updates</li>
              </ul>
            </div>
          </div>

          {/* Cat Sitting */}
          <div className="mb-20">
            <div className="flex gap-4 items-start mb-6">
              <span className="text-5xl">🐱</span>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Cat Sitting</h2>
                <p className="text-amber-600 font-semibold">Attentive feline care</p>
              </div>
            </div>
            <div className="bg-amber-50 rounded-lg p-8 border border-amber-200">
              <p className="text-gray-700 mb-6 leading-relaxed">
                Cats deserve professional care too. Our cat sitting service ensures your
                feline friend stays healthy, happy, and comfortable while you're away.
              </p>
              <p className="text-gray-700 font-semibold mb-4">Included in every visit:</p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Fresh food and water daily</li>
                <li>✓ Litter box cleaning</li>
                <li>✓ Playtime and enrichment</li>
                <li>✓ Medication administration</li>
                <li>✓ Health monitoring</li>
                <li>✓ Photo updates</li>
              </ul>
            </div>
          </div>

          {/* Puppy Visits */}
          <div className="mb-20">
            <div className="flex gap-4 items-start mb-6">
              <span className="text-5xl">👶</span>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Puppy Visits</h2>
                <p className="text-amber-600 font-semibold">Special care for young pups</p>
              </div>
            </div>
            <div className="bg-amber-50 rounded-lg p-8 border border-amber-200">
              <p className="text-gray-700 mb-6 leading-relaxed">
                Puppies need frequent care and attention. Our specialized puppy visits
                support their development with potty training, basic manners, and socialization.
              </p>
              <p className="text-gray-700 font-semibold mb-4">Included in every visit:</p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Potty training support</li>
                <li>✓ Basic manners reinforcement</li>
                <li>✓ Play and socialization</li>
                <li>✓ Feeding assistance</li>
                <li>✓ Training guidance</li>
                <li>✓ Photo updates</li>
              </ul>
            </div>
          </div>

          {/* Overnight Pet Sitting */}
          <div className="mb-20">
            <div className="flex gap-4 items-start mb-6">
              <span className="text-5xl">🌙</span>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Overnight Pet Sitting</h2>
                <p className="text-amber-600 font-semibold">Extended care for extended absences</p>
              </div>
            </div>
            <div className="bg-amber-50 rounded-lg p-8 border border-amber-200">
              <p className="text-gray-700 mb-6 leading-relaxed">
                Vacation with confidence knowing your pets are in great hands. Our overnight
                pet sitting includes all the care your pet needs, in the comfort of their
                own home.
              </p>
              <p className="text-gray-700 font-semibold mb-4">Included in overnight care:</p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Extended overnight stays</li>
                <li>✓ Multiple feeding schedules</li>
                <li>✓ Outdoor time and exercise</li>
                <li>✓ Medication administration</li>
                <li>✓ Emergency care coordination</li>
                <li>✓ Daily photo updates</li>
              </ul>
            </div>
          </div>

          {/* Light Home Care Add-ons */}
          <div className="mb-20">
            <div className="flex gap-4 items-start mb-6">
              <span className="text-5xl">🏡</span>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Home Care Add-ons</h2>
                <p className="text-amber-600 font-semibold">Light home care during visits</p>
              </div>
            </div>
            <div className="bg-amber-50 rounded-lg p-8 border border-amber-200">
              <p className="text-gray-700 mb-6 leading-relaxed">
                We can help with light home care tasks while caring for your pets.
              </p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Mail pickup</li>
                <li>✓ Plant watering</li>
                <li>✓ Trash day assistance</li>
              </ul>
            </div>
          </div>

          {/* Horse Care CTA */}
          <div className="bg-green-900 text-white rounded-lg p-12 text-center">
            <h3 className="text-3xl font-bold mb-4">Looking for Horse Care?</h3>
            <p className="mb-6 text-lg">
              We provide comprehensive horse care and turnout services in Southwest Ranches.
            </p>
            <Link
              href="/horse-care"
              className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
            >
              Learn About Horse Care Services
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-amber-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">Ready to Book?</h2>
          <p className="text-lg text-gray-700 mb-8">
            Let us know which services interest you and we'll get in touch to discuss your
            pet's needs.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </>
  );
}
