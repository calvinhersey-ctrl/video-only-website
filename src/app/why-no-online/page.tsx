import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: "Why Can't I Buy Online?",
  description: 'Learn why Video Only focuses on in-store shopping for the best customer experience in TVs and audio.',
};

export default function WhyNoOnlinePage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-black mb-8">Why Can&apos;t I Buy Online?</h1>

      <div className="space-y-10">
        <section>
          <h2 className="text-2xl font-bold text-brand-blue mb-3">Long-term Customer Satisfaction</h2>
          <p className="text-text-secondary leading-relaxed mb-4">
            Customers remark on how much they enjoy personal, face-to-face relationships. Customer relationships are the heart and soul of our company&apos;s success. The most compelling reason for in-store sales is overall, long-term customer satisfaction.
          </p>
          <p className="text-text-secondary leading-relaxed">
            Current video technology choices suggest a customer should experience sight and sound first-hand in a showroom designed to give an &ldquo;at-home&rdquo; feel.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-blue mb-3">We Help You Research</h2>
          <p className="text-text-secondary leading-relaxed">
            We assist your shopping research by providing the necessary information online for making good decisions. Ads featuring specials on quality brands are available for download. Our online detailed specs for Samsung, LG, and Sony TVs can make any shopper an expert.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-brand-blue mb-3">&ldquo;Don&apos;t Be Sorry... Shop at Video Only.&rdquo;</h2>
          <p className="text-text-secondary leading-relaxed mb-4">
            We&apos;re confident of our low, competitive prices. Customers should add any shipping cost for accurate price comparisons. We welcome the opportunity to prove why &ldquo;come see for yourself&rdquo; is the right decision.
          </p>
        </section>

        <div className="bg-white rounded-xl p-8 border border-surface-light shadow-sm text-center mt-12">
          <p className="text-xl font-bold text-text-primary mb-2">Come See For Yourself</p>
          <p className="text-text-secondary mb-6">Visit one of our 16 showrooms and experience the difference</p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/locations/washington" className="cta-button">Find a Store</Link>
            <Link href="/deals" className="cta-button-outline">View This Week&apos;s Deals</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
