import Link from "next/link";
import Hero from "@/components/Hero";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata(
  "Horse Care Services",
  "Professional horse care, turnout, and barn sitting services in Southwest Ranches, Florida. Daily turnout, feeding, stall cleaning, medication administration, and more."
);

export default function HorseCarePage() {
  return (
    <>
      <Hero
        title="Equine Care & Turnout Services"
        tagline="Professional horse care in Southwest Ranches. Turnout, feeding, barn sitting, and specialized equine services."
        background="light"
      />

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Introduction */}
          <div className="mb-16">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Located right here in Southwest Ranches, Hoof & Paw understands the unique
              needs of horse owners in Broward County. Whether you need daily turnout
              management, full barn sitting, or specialized care, we're here to keep your
              horses healthy and happy.
            </p>
          </div>

          {/* Daily Turnout */}
          <div className="mb-20">
            <div className="flex gap-4 items-start mb-6">
              <span className="text-5xl">🐴</span>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Daily Turnout Management</h2>
                <p className="text-amber-600 font-semibold">
                  Consistent daily turnout for healthy horses
                </p>
              </div>
            </div>
            <div className="bg-amber-50 rounded-lg p-8 border border-amber-200">
              <p className="text-gray-700 mb-6 leading-relaxed">
                Daily turnout is essential for horse health. We handle your horse's turnout
                routine consistently, regardless of weather, schedule, or other demands on
                your time. This means healthier, happier horses and peace of mind for you.
              </p>
              <p className="text-gray-700 font-semibold mb-4">Daily turnout includes:</p>
              <ul className="space-y-2 text-gray-700 mb-8">
                <li>✓ Consistent daily turnout scheduling</li>
                <li>✓ Paddock and pasture safety checks</li>
                <li>✓ Fresh water availability</li>
                <li>✓ Supervision and monitoring</li>
                <li>✓ Weather-appropriate management</li>
                <li>✓ Photo updates</li>
              </ul>
            </div>
          </div>

          {/* Feeding & Nutrition */}
          <div className="mb-20">
            <div className="flex gap-4 items-start mb-6">
              <span className="text-5xl">🥕</span>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Feeding & Nutrition</h2>
                <p className="text-amber-600 font-semibold">Proper nutrition supervision</p>
              </div>
            </div>
            <div className="bg-amber-50 rounded-lg p-8 border border-amber-200">
              <p className="text-gray-700 mb-6 leading-relaxed">
                We manage feeding schedules according to your horse's specific needs and your
                veterinarian's recommendations.
              </p>
              <p className="text-gray-700 font-semibold mb-4">Feeding services include:</p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Scheduled hay and grain feeding</li>
                <li>✓ Supplement administration</li>
                <li>✓ Fresh water maintenance</li>
                <li>✓ Feed storage management</li>
                <li>✓ Nutritional monitoring</li>
              </ul>
            </div>
          </div>

          {/* Fly Care & Pest Management */}
          <div className="mb-20">
            <div className="flex gap-4 items-start mb-6">
              <span className="text-5xl">🦟</span>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Fly Care & Pest Management</h2>
                <p className="text-amber-600 font-semibold">
                  Florida-specific fly and pest protection
                </p>
              </div>
            </div>
            <div className="bg-amber-50 rounded-lg p-8 border border-amber-200">
              <p className="text-gray-700 mb-6 leading-relaxed">
                South Florida's fly season is intense. We manage fly care during turnout to
                keep your horses comfortable and healthy.
              </p>
              <p className="text-gray-700 font-semibold mb-4">Fly care services include:</p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Fly spray application</li>
                <li>✓ Seasonal pest management</li>
                <li>✓ Shaded rest area management</li>
                <li>✓ Monitoring for insect-related issues</li>
                <li>✓ Summer turnout optimization</li>
              </ul>
            </div>
          </div>

          {/* Stall Cleaning & Barn Maintenance */}
          <div className="mb-20">
            <div className="flex gap-4 items-start mb-6">
              <span className="text-5xl">🧹</span>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Stall Cleaning & Maintenance</h2>
                <p className="text-amber-600 font-semibold">Daily stall and barn care</p>
              </div>
            </div>
            <div className="bg-amber-50 rounded-lg p-8 border border-amber-200">
              <p className="text-gray-700 mb-6 leading-relaxed">
                Clean, dry stalls are essential for horse health. We handle daily stall
                cleaning and barn maintenance.
              </p>
              <p className="text-gray-700 font-semibold mb-4">Stall maintenance includes:</p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Daily stall cleaning and bedding changes</li>
                <li>✓ Paddock and pasture cleaning</li>
                <li>✓ Water bucket cleaning and refilling</li>
                <li>✓ Tack and equipment organization</li>
                <li>✓ Barn area management</li>
              </ul>
            </div>
          </div>

          {/* Medication & Special Care */}
          <div className="mb-20">
            <div className="flex gap-4 items-start mb-6">
              <span className="text-5xl">💊</span>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Medication & Special Care</h2>
                <p className="text-amber-600 font-semibold">
                  Reliable medication administration
                </p>
              </div>
            </div>
            <div className="bg-amber-50 rounded-lg p-8 border border-amber-200">
              <p className="text-gray-700 mb-6 leading-relaxed">
                If your horse requires daily medication, you can rely on us. We administer
                medications exactly as prescribed by your veterinarian.
              </p>
              <p className="text-gray-700 font-semibold mb-4">Medication services include:</p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Oral medication administration</li>
                <li>✓ Injectable medication administration</li>
                <li>✓ Topical treatments</li>
                <li>✓ Health monitoring</li>
                <li>✓ Veterinary communication</li>
              </ul>
            </div>
          </div>

          {/* Blanketing & Seasonal Care */}
          <div className="mb-20">
            <div className="flex gap-4 items-start mb-6">
              <span className="text-5xl">🧥</span>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Blanketing & Seasonal Care</h2>
                <p className="text-amber-600 font-semibold">Seasonal coat and blanket management</p>
              </div>
            </div>
            <div className="bg-amber-50 rounded-lg p-8 border border-amber-200">
              <p className="text-gray-700 mb-6 leading-relaxed">
                While Florida's winters are mild, we manage blankets and seasonal care according
                to your horse's needs.
              </p>
              <p className="text-gray-700 font-semibold mb-4">Seasonal care includes:</p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Blanket application and removal</li>
                <li>✓ Coat condition monitoring</li>
                <li>✓ Grooming and care</li>
                <li>✓ Seasonal health checks</li>
              </ul>
            </div>
          </div>

          {/* Overnight & Extended Barn Sitting */}
          <div className="mb-20">
            <div className="flex gap-4 items-start mb-6">
              <span className="text-5xl">🌙</span>
              <div>
                <h2 className="text-3xl font-bold text-gray-900">Overnight & Extended Barn Sitting</h2>
                <p className="text-amber-600 font-semibold">
                  Peace of mind during storms and events
                </p>
              </div>
            </div>
            <div className="bg-amber-50 rounded-lg p-8 border border-amber-200">
              <p className="text-gray-700 mb-6 leading-relaxed">
                During South Florida's severe weather, equestrian events, or extended absences,
                we offer overnight barn sitting. Sleep soundly knowing your horses are monitored
                and cared for 24/7.
              </p>
              <p className="text-gray-700 font-semibold mb-4">Overnight barn sitting includes:</p>
              <ul className="space-y-2 text-gray-700">
                <li>✓ Overnight presence and monitoring</li>
                <li>✓ Emergency response capability</li>
                <li>✓ Storm management</li>
                <li>✓ All routine care services</li>
                <li>✓ Veterinary coordination if needed</li>
                <li>✓ Regular updates</li>
              </ul>
            </div>
          </div>

          {/* Why Choose Us for Horse Care */}
          <div className="mb-20 bg-green-900 text-white rounded-lg p-12">
            <h2 className="text-3xl font-bold mb-8">Why Choose Hoof & Paw for Equine Care?</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
                  <span>✓</span> Local Expertise
                </h3>
                <p>
                  We're based right here in Southwest Ranches and understand the local equine community.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
                  <span>✓</span> Experience
                </h3>
                <p>
                  Years of experience with all horse types and temperaments.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
                  <span>✓</span> Insured & Professional
                </h3>
                <p>
                  Full insurance coverage and professional liability protection.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
                  <span>✓</span> Photo Updates
                </h3>
                <p>
                  Stay connected with photos and updates from every visit.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
                  <span>✓</span> Reliable & Consistent
                </h3>
                <p>
                  Your horse thrives on routine, and we deliver consistency.
                </p>
              </div>
              <div>
                <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
                  <span>✓</span> Care & Dedication
                </h3>
                <p>
                  We treat every horse as if it were our own.
                </p>
              </div>
            </div>
          </div>

          {/* Service Area Note */}
          <div className="bg-amber-50 rounded-lg p-8 border border-amber-200 mb-12">
            <h3 className="font-bold text-xl mb-4">Service Area</h3>
            <p className="text-gray-700">
              We provide specialized equine care throughout Southwest Ranches and the surrounding
              Broward County area. If your property is outside our primary service zone, please
              contact us to discuss availability.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-amber-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-gray-900">
            Ready to Provide Your Horse with Professional Care?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Contact us today to discuss your horse's specific needs and schedule a consultation.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
