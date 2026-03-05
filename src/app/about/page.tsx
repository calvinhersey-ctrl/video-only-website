import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Video Only',
  description: 'Learn about Video Only — the West Coast\'s premier home electronics retailer since 1982. 16 stores in Washington, Oregon, and California.',
};

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-black mb-8">About Video Only</h1>

      <div className="space-y-10">
        <section>
          <h2 className="text-2xl font-bold text-brand-blue mb-3">Established in 1982</h2>
          <p className="text-text-secondary leading-relaxed">
            Video Only began business in the early 1980&apos;s, before Costco, Best Buy, or even Amazon. As an industry leader with a solid, long-established reputation, we consider ourselves the premier home-electronics retailer on the west coast with stores in Washington, Oregon and Northern California.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-blue mb-3">Huge Inventory</h2>
          <p className="text-text-secondary leading-relaxed">
            With a large inventory of products, customers have a much better chance of taking purchased products home immediately — no special orders or waiting.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-blue mb-3">Lowest Possible Price</h2>
          <p className="text-text-secondary leading-relaxed">
            Video Only means rock bottom prices. We strive to offer the widest range of high quality products from brand names you know at the lowest possible price.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-blue mb-3">Specialty Store Customer Service</h2>
          <p className="text-text-secondary leading-relaxed">
            We don&apos;t want to be like the &ldquo;sell everything under the sun&rdquo; mass merchants. As the name implies, &ldquo;Video Only&rdquo; states a clear focus on Video and Audio related products. Our goal is to help customers cut through the jungle of electronic double-talk by clarifying, assisting, and enabling customers to get more than they thought was possible. Sales professionals provide solutions for individual situations and needs — from programming a TV to building a state of the art home theater system.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-blue mb-3">Security &amp; Privacy</h2>
          <p className="text-text-secondary leading-relaxed">
            Video Only does not share any personal information.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-blue mb-3">Services We Offer</h2>
          <ul className="list-disc list-inside text-text-secondary space-y-2">
            <li>Curbside pick-up</li>
            <li>Delivery</li>
            <li>Old TV haul-away</li>
          </ul>
        </section>

        <div className="bg-brand-blue rounded-xl p-8 text-center mt-12">
          <p className="text-2xl font-bold text-brand-yellow italic mb-4">&ldquo;Don&apos;t Be Sorry... Shop at Video Only.&rdquo;</p>
          <Link href="/locations/washington" className="cta-button">
            Find a Store Near You
          </Link>
        </div>
      </div>
    </div>
  );
}
