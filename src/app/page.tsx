import Link from 'next/link';
import Image from 'next/image';

const tvCategories = [
  { name: 'Samsung OLED', href: '/samsung-oled', logo: '/images/samsung-logo-blue.svg', label: 'OLED TV FEATURES', wide: true },
  { name: 'Samsung LCD', href: '/samsung-lcd', logo: '/images/samsung-logo-blue.svg', label: 'LCD TV FEATURES', wide: true },
  { name: 'LG TVs', href: '/lg-tvs', logo: '/images/lg-logo.svg', label: 'FEATURES & PRICES', wide: false },
  { name: 'Sony TVs', href: '/sony-tvs', logo: '/images/sony-logo.svg', label: 'FEATURES & PRICES', wide: false },
  { name: 'TCL TVs', href: '/tcl-tvs', logo: '/images/tcl-logo.svg', label: 'FEATURES & PRICES', wide: false },
];

const soundbarCategories = [
  { name: 'Samsung Soundbars', href: '/samsung-soundbars', logo: '/images/samsung-logo-blue.svg', label: 'SOUNDBAR FEATURES', wide: true },
  { name: 'LG Soundbars', href: '/lg-soundbars', logo: '/images/lg-logo.svg', label: 'SOUNDBAR FEATURES', wide: false },
];

const locations = [
  { state: 'Washington', count: 6, href: '/locations/washington' },
  { state: 'Oregon', count: 5, href: '/locations/oregon' },
  { state: 'California', count: 5, href: '/locations/california' },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-brand-blue">
        <div className="max-w-7xl mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="max-w-3xl">
            <p className="text-brand-yellow font-semibold text-sm uppercase tracking-widest mb-4">
              West Coast&apos;s Premier Home Electronics Retailer
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-black leading-tight mb-6 text-white">
              Expert Advice.<br />
              <span className="text-brand-yellow">Rock Bottom Prices.</span>
            </h1>
            <p className="text-xl text-white/80 mb-4 max-w-xl">
              Since 1982, Video Only has been the West Coast&apos;s trusted source for TVs, soundbars, and audio equipment. Compare specs, find deals, and visit one of our 16 showrooms.
            </p>
            <p className="text-brand-yellow italic font-semibold text-lg mb-8">
              &ldquo;Don&apos;t Be Sorry... Shop at Video Only.&rdquo;
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/deals" className="cta-button text-lg">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                This Week&apos;s Deals
              </Link>
              <Link href="/locations/washington" className="inline-flex items-center gap-2 border-2 border-white text-white font-bold px-6 py-3 rounded-lg hover:bg-white hover:text-brand-blue transition-colors text-lg">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                Find a Store
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TV Categories — matches videoonly.com style */}
      <section className="bg-[#ffffaa] py-16">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-white rounded-lg border-2 border-brand-yellow/60 p-8 md:p-10 shadow-md">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 text-center mb-8">Which TV is right for you?</h2>
            <div className="flex flex-col items-center gap-4">
              {tvCategories.map((cat) => (
                <Link
                  key={cat.href}
                  href={cat.href}
                  className={`brand-button group ${cat.wide ? 'w-full md:w-[90%]' : 'w-full md:w-[70%]'}`}
                >
                  <Image src={cat.logo} alt={cat.name} width={160} height={50} className={`${cat.wide ? 'h-10 md:h-12' : 'h-8 md:h-10'} w-auto`} />
                  <span className="text-sm md:text-base font-black text-gray-900 tracking-wide leading-tight">{cat.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Soundbars — same card style */}
      <section className="bg-[#ffffaa] pb-16 -mt-1">
        <div className="max-w-2xl mx-auto px-4">
          <div className="bg-white rounded-lg border-2 border-brand-yellow/60 p-8 md:p-10 shadow-md">
            <h2 className="text-3xl md:text-4xl font-black text-gray-900 text-center mb-8">Sound Systems</h2>
            <div className="flex flex-col items-center gap-4">
              {soundbarCategories.map((cat) => (
                <Link
                  key={cat.href}
                  href={cat.href}
                  className={`brand-button group ${cat.wide ? 'w-full md:w-[90%]' : 'w-full md:w-[70%]'}`}
                >
                  <Image src={cat.logo} alt={cat.name} width={160} height={50} className={`${cat.wide ? 'h-10 md:h-12' : 'h-8 md:h-10'} w-auto`} />
                  <span className="text-sm md:text-base font-black text-gray-900 tracking-wide leading-tight">{cat.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Weekly Deals Banner */}
      <section className="bg-gradient-to-r from-brand-red to-red-700">
        <div className="max-w-7xl mx-auto px-4 py-12 text-center">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-3">This Week&apos;s Deals</h2>
          <p className="text-white/80 text-lg mb-6">TVs, soundbars, speakers, receivers &amp; more — all at rock bottom prices</p>
          <Link href="/deals" className="inline-flex items-center gap-2 bg-white text-brand-red font-bold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors text-lg">
            View All Deals
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
          </Link>
        </div>
      </section>

      {/* Store Locations */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-black mb-2">Visit a Showroom</h2>
        <p className="text-text-secondary mb-8">16 locations across Washington, Oregon, and California</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {locations.map((loc) => (
            <Link
              key={loc.state}
              href={loc.href}
              className="group bg-white rounded-xl p-8 border border-surface-light hover:border-brand-accent transition-all text-center shadow-sm"
            >
              <svg className="w-10 h-10 mx-auto mb-4 text-brand-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <h3 className="text-xl font-bold group-hover:text-brand-blue transition-colors">{loc.state}</h3>
              <p className="text-text-muted mt-1">{loc.count} stores</p>
            </Link>
          ))}
        </div>
        <div className="text-center mt-8">
          <p className="text-text-secondary">
            <span className="font-semibold text-text-primary">Store Hours:</span> 10:00 AM to 7:00 PM Daily
          </p>
          <p className="text-sm text-text-muted mt-2">Curbside pick-up &bull; Delivery &bull; Old TV haul-away</p>
        </div>
      </section>

      {/* Trade-In Banner */}
      <section className="bg-brand-blue">
        <div className="max-w-7xl mx-auto px-4 py-12 text-center">
          <h2 className="text-2xl md:text-3xl font-black text-brand-yellow mb-3">Holiday Trade-In Special</h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto">
            Get cash off your new TV when you trade in your old one. Check in store for details.
          </p>
        </div>
      </section>

      {/* Why Video Only */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: '🏪', title: 'Since 1982', desc: 'Predating Costco, Best Buy, and Amazon' },
            { icon: '💰', title: 'Rock Bottom Prices', desc: 'We welcome you to shop around and compare' },
            { icon: '🎯', title: 'Specialty Experts', desc: 'Focused exclusively on TVs and audio' },
            { icon: '📦', title: 'Take It Home Today', desc: 'Huge inventory — no waiting for special orders' },
          ].map((item) => (
            <div key={item.title} className="text-center p-6">
              <div className="text-4xl mb-4">{item.icon}</div>
              <h3 className="font-bold text-lg mb-2">{item.title}</h3>
              <p className="text-sm text-text-secondary">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
