import Link from "next/link";
import Image from "next/image";

export default function MeetSherylTeaser() {
  return (
    <section className="bg-forest text-white py-16 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center gap-8">
        <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0 border-4 border-sage">
          <Image
            src="/images/sheryl-portrait.jpg"
            alt="Sheryl, owner of Hoof & Paw Pet Services"
            width={128}
            height={128}
            className="w-full h-full object-cover object-top scale-[2] translate-y-[45%]"
          />
        </div>
        <div className="text-center sm:text-left">
          <h2 className="font-serif text-2xl font-bold mb-3">Meet Sheryl</h2>
          <p className="text-white/80 leading-relaxed mb-4">
            &ldquo;Animals have been part of my life for as long as I can remember. I
            wanted to create a service where pets are looked after with the same
            love and attention I give my own.&rdquo;
          </p>
          <Link
            href="/about"
            className="inline-block bg-sage hover:bg-sage-dark text-white font-semibold py-2 px-6 rounded-lg transition-colors"
          >
            Read Sheryl&apos;s Story
          </Link>
        </div>
      </div>
    </section>
  );
}
