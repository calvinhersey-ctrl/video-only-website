import type { Metadata } from 'next';
import StoreCard from '@/components/StoreCard';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'California Store Locations',
  description: 'Find Video Only stores in Northern California — Mountain View, San Mateo, Dublin, San Rafael, and Union City.',
};

const stores = [
  { name: 'Mountain View', phone: '(650) 903-0300', address: '2485 Charleston Road', city: 'Mountain View', state: 'CA', zip: '94043' },
  { name: 'San Mateo', phone: '(650) 578-1212', address: '1801 S. Grant Street', city: 'San Mateo', state: 'CA', zip: '94402' },
  { name: 'Dublin', phone: '(925) 829-2900', address: '7922 Dublin Blvd.', city: 'Dublin', state: 'CA', zip: '94568' },
  { name: 'San Rafael', phone: '(415) 457-4518', address: '655 Du Bois St.', city: 'San Rafael', state: 'CA', zip: '94901' },
  { name: 'Union City', phone: '(510) 471-2001', address: '30701 Dyer St.', city: 'Union City', state: 'CA', zip: '94587' },
];

export default function CaliforniaLocations() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-black mb-2">California Stores</h1>
        <p className="text-text-secondary text-lg">5 locations in Northern California</p>
        <p className="text-text-muted mt-2">Store Hours: 10:00 AM to 7:00 PM Daily</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {stores.map((store) => (
          <StoreCard key={store.name} {...store} />
        ))}
      </div>
      <div className="mt-8 flex gap-4 text-sm">
        <Link href="/locations/washington" className="text-brand-blue hover:text-brand-dark transition-colors font-semibold">Washington Stores →</Link>
        <Link href="/locations/oregon" className="text-brand-blue hover:text-brand-dark transition-colors font-semibold">Oregon Stores →</Link>
      </div>
    </div>
  );
}
