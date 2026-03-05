import type { Metadata } from 'next';
import StoreCard from '@/components/StoreCard';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Washington Store Locations',
  description: 'Find Video Only stores in Washington — Lynnwood, Bellevue, Southcenter, Federal Way, Tacoma, and Spokane.',
};

const stores = [
  { name: 'Lynnwood', phone: '(425) 776-5900', address: '19220 Alderwood Mall Pkwy', city: 'Lynnwood', state: 'WA', zip: '98036' },
  { name: 'Bellevue', phone: '(425) 644-9400', address: '14339 NE 20th St.', city: 'Bellevue', state: 'WA', zip: '98007' },
  { name: 'Southcenter', phone: '(206) 444-1650', address: '290 Andover Park East', city: 'Seattle', state: 'WA', zip: '98188' },
  { name: 'Federal Way', phone: '(253) 661-7700', address: '1643 S. 352nd St.', city: 'Federal Way', state: 'WA', zip: '98003' },
  { name: 'Tacoma', phone: '(253) 671-0737', address: '2218 S. 41st St.', city: 'Tacoma', state: 'WA', zip: '98409' },
  { name: 'Spokane', phone: '(509) 466-0300', address: '7755 N. Division St.', city: 'Spokane', state: 'WA', zip: '99208' },
];

export default function WashingtonLocations() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl md:text-4xl font-black mb-2">Washington Stores</h1>
        <p className="text-text-secondary text-lg">6 locations across Washington state</p>
        <p className="text-text-muted mt-2">Store Hours: 10:00 AM to 7:00 PM Daily</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {stores.map((store) => (
          <StoreCard key={store.name} {...store} />
        ))}
      </div>
      <div className="mt-8 flex gap-4 text-sm">
        <Link href="/locations/oregon" className="text-brand-blue hover:text-brand-dark transition-colors font-semibold">Oregon Stores →</Link>
        <Link href="/locations/california" className="text-brand-blue hover:text-brand-dark transition-colors font-semibold">California Stores →</Link>
      </div>
    </div>
  );
}
