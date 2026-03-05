import Link from 'next/link';
import Image from 'next/image';

const brandLogos = [
  { name: 'Samsung', src: '/images/samsung-logo-blue.svg' },
  { name: 'LG', src: '/images/lg-logo.svg' },
  { name: 'Sony', src: '/images/sony-logo.svg' },
  { name: 'TCL', src: '/images/tcl-logo.svg' },
  { name: 'Sonos', src: '/images/sonos-logo.svg' },
  { name: 'Bose', src: '/images/bose-logo.svg' },
  { name: 'Denon', src: '/images/denon-logo.svg' },
  { name: 'Yamaha', src: '/images/yamaha-logo.svg' },
  { name: 'JBL', src: '/images/jbl-logo.svg' },
  { name: 'Klipsch', src: '/images/klipsch-logo.svg' },
  { name: 'Polk', src: '/images/polk-logo.svg' },
  { name: 'Sanus', src: '/images/sanus-logo.svg' },
  { name: 'Hisense', src: '/images/hisense-logo.svg' },
];

const storeGroups = [
  {
    state: 'Washington',
    href: '/locations/washington',
    cities: ['Lynnwood', 'Bellevue', 'Southcenter', 'Federal Way', 'Tacoma', 'Spokane'],
  },
  {
    state: 'Oregon',
    href: '/locations/oregon',
    cities: ['Portland', 'Clackamas', 'Beaverton', 'Salem', 'Eugene'],
  },
  {
    state: 'California',
    href: '/locations/california',
    cities: ['Mountain View', 'San Mateo', 'Dublin', 'San Rafael', 'Union City'],
  },
];

export default function Footer() {
  return (
    <footer className="bg-white border-t-2 border-brand-accent mt-16" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center mb-10">
          <p className="text-2xl font-bold text-brand-red mb-2">Video Only means rock bottom prices.</p>
          <p className="text-text-secondary">Established in 1982 — The West Coast&apos;s premier home electronics retailer</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          {storeGroups.map((group) => (
            <div key={group.state}>
              <Link href={group.href} className="text-lg font-bold text-brand-blue hover:text-brand-dark transition-colors">
                {group.state}
              </Link>
              <ul className="mt-2 space-y-1">
                {group.cities.map((city) => (
                  <li key={city}>
                    <Link href={group.href} className="text-sm text-text-secondary hover:text-brand-blue transition-colors">
                      {city}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mb-8">
          <p className="text-sm text-text-muted mb-1">Store Hours</p>
          <p className="text-text-primary font-semibold">10:00 AM to 7:00 PM Daily</p>
          <p className="text-sm text-text-secondary mt-1">Curbside pick-up &bull; Delivery &bull; Old TV haul-away</p>
        </div>

        <div className="border-t border-gray-200 pt-8 mb-8">
          <p className="text-center text-sm text-text-muted mb-4">Brands We Carry</p>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
            {brandLogos.map((brand) => (
              <Image
                key={brand.name}
                src={brand.src}
                alt={brand.name}
                width={80}
                height={30}
                className="h-5 md:h-6 w-auto opacity-70 hover:opacity-100 transition-opacity"
              />
            ))}
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Image src="/images/video-only-logo.png" alt="Video Only" width={120} height={30} className="h-6 w-auto" />
          </div>
          <div className="flex items-center gap-6 text-sm text-text-muted">
            <Link href="/about" className="hover:text-brand-blue transition-colors">About</Link>
            <Link href="/why-no-online" className="hover:text-brand-blue transition-colors">Why No Online Sales?</Link>
            <Link href="/employment" className="hover:text-brand-blue transition-colors">Employment</Link>
          </div>
          <p className="text-xs text-text-muted">&copy; {new Date().getFullYear()} Video Only. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
