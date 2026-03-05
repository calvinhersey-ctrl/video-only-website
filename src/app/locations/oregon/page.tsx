import type { Metadata } from 'next';
import StoreCard from '@/components/StoreCard';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Oregon Store Locations',
  description: 'Find Video Only stores in Oregon — Portland, Clackamas, Beaverton, Salem, and Eugene.',
};

const stores = [
  { name: 'Portland', phone: '(503) 283-3400', address: '12365 N. Starlight Ave', city: 'Portland', state: 'OR', zip: '97217' },
  { name: 'Clackamas', phone: '(503) 653-8200', address: '8200 SE Sunnyside Rd', city: 'Clackamas', state: 'OR', zip: '97015' },
  { name: 'Beaverton', phone: '(503) 520-0520', address: '12000 SW Canyon Road', city: 'Beaverton', state: 'OR', zip: '97005' },
  { name: 'Salem', phone: '(503) 566-7777', address: '439 Lancaster Drive NE', city: 'Salem', state: 'OR', zip: '97301' },
  { name: 'Eugene', phone: '(541) 342-4444', address: '2823 Chad Drive', city: 'Eugene', state: 'OR', zip: '97408' },
];

export default function OregonLocations() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-black mb-2">Oregon Stores</h1>
        <p className="text-text-secondary text-lg">5 locations across Oregon</p>
        <p className="text-text-muted mt-2">Store Hours: 10:00 AM to 7:00 PM Daily</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {stores.map((store) => (
          <StoreCard key={store.name} {...store} />
        ))}
      </div>
      <div className="mt-8 flex gap-4 text-sm">
        <Link href="/locations/washington" className="text-brand-blue hover:text-brand-dark transition-colors font-semibold">Washington Stores →</Link>
        <Link href="/locations/california" className="text-brand-blue hover:text-brand-dark transition-colors font-semibold">California Stores →</Link>
      </div>
    </div>
  );
}
