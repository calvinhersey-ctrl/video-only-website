import ComparisonTable from '@/components/ComparisonTable';

export const metadata = {
  title: 'TCL TVs',
  description:
    'Compare TCL S551G, Q651G, QM6K, QM7K, and QM8K TVs.',
};

export default function TCLTVsPage() {
  return (
    <ComparisonTable
      title="TCL TVs"
      subtitle="Compare TCL S551G, Q651G, QM6K, QM7K, and QM8K TVs."
      columns={[
        { key: 's551g', label: 'S551G' },
        { key: 'q651g', label: 'Q651G' },
        { key: 'qm6k', label: 'QM6K' },
        { key: 'qm7k', label: 'QM7K', badge: 'picture' },
        { key: 'qm8k', label: 'QM8K', badge: 'premium' },
      ]}
      sections={[
        {
          title: 'Specifications',
          rows: [
            {
              label: 'Performance',
              values: {
                s551g: '64',
                q651g: '68',
                qm6k: '75',
                qm7k: '84',
                qm8k: '90',
              },
            },
            {
              label: 'Panel',
              values: {
                s551g: 'LCD',
                q651g: 'LCD',
                qm6k: 'New HVA',
                qm7k: 'New HVA Anti-Reflective',
                qm8k: 'Wide Angle HVA Anti-Reflective',
              },
            },
            {
              label: 'Panel Speed',
              values: {
                s551g: '60 Hz',
                q651g: '60 Hz',
                qm6k: '120 Hz',
                qm7k: '120 Hz',
                qm8k: '120 Hz',
              },
            },
            {
              label: 'Variable Refresh Rate',
              values: {
                s551g: '—',
                q651g: '—',
                qm6k: 'Up to 144 Hz',
                qm7k: 'Up to 144 Hz',
                qm8k: 'Up to 144 Hz',
              },
            },
            {
              label: 'Backlight',
              values: {
                s551g: 'Direct',
                q651g: 'Direct',
                qm6k: 'Full Array',
                qm7k: 'Full Array Mini LED',
                qm8k: 'Full Array Mini LED',
              },
            },
            {
              label: 'Dimming Zones',
              values: {
                s551g: '—',
                q651g: '—',
                qm6k: 'Up to 500',
                qm7k: 'Up to 2500',
                qm8k: 'Up to 3800',
              },
            },
            {
              label: 'Processor',
              values: {
                s551g: 'AIPQ',
                q651g: 'AIPQ',
                qm6k: 'AIPQ Pro',
                qm7k: 'AIPQ Pro with Deep Learning',
                qm8k: 'AIPQ Pro with Deep Learning',
              },
            },
            {
              label: 'Color Filter',
              values: {
                s551g: 'Standard',
                q651g: 'Quantum Dot',
                qm6k: 'Quantum Dot',
                qm7k: 'Full Quantum Dot',
                qm8k: 'Full Quantum Dot',
              },
            },
            {
              label: 'Google Smart TV',
              values: {
                s551g: 'YES',
                q651g: 'YES',
                qm6k: 'YES',
                qm7k: 'YES',
                qm8k: 'Gemini Ready',
              },
            },
            {
              label: 'Remote',
              values: {
                s551g: 'Voice',
                q651g: 'Voice',
                qm6k: 'Voice',
                qm7k: 'Illuminated Voice',
                qm8k: 'Illuminated Voice',
              },
            },
            {
              label: 'TV Microphone',
              values: {
                s551g: '—',
                q651g: 'YES',
                qm6k: 'YES',
                qm7k: 'YES',
                qm8k: 'YES',
              },
            },
            {
              label: 'Next Gen Tuner',
              values: {
                s551g: '—',
                q651g: '—',
                qm6k: '—',
                qm7k: '—',
                qm8k: 'YES',
              },
            },
            {
              label: 'Audio Power',
              values: {
                s551g: '20W',
                q651g: '30W',
                qm6k: '40W',
                qm7k: '40W',
                qm8k: 'TBD',
              },
            },
            {
              label: 'Speakers',
              values: {
                s551g: '2',
                q651g: '2',
                qm6k: '3',
                qm7k: '4',
                qm8k: 'TBD',
              },
            },
            {
              label: 'HDMI Inputs',
              values: {
                s551g: '3',
                q651g: '3',
                qm6k: '4',
                qm7k: '4',
                qm8k: '4',
              },
            },
            {
              label: 'Version 2.1',
              values: {
                s551g: '—',
                q651g: '—',
                qm6k: '2',
                qm7k: '2',
                qm8k: '2',
              },
            },
            {
              label: 'Dolby Vision IQ',
              values: {
                s551g: '—',
                q651g: '—',
                qm6k: 'YES',
                qm7k: 'YES',
                qm8k: 'YES',
              },
            },
          ],
        },
      ]}
      priceSection={{
        rows: [
          {
            size: '43"',
            prices: {
              s551g: '$199',
              q651g: '$219',
              qm6k: '—',
              qm7k: '—',
              qm8k: '—',
            },
          },
          {
            size: '50"',
            prices: {
              s551g: '$239',
              q651g: '$259',
              qm6k: '—',
              qm7k: '—',
              qm8k: '—',
            },
          },
          {
            size: '55"',
            prices: {
              s551g: '$249',
              q651g: '$279',
              qm6k: '$449',
              qm7k: '$699',
              qm8k: '—',
            },
          },
          {
            size: '65"',
            prices: {
              s551g: '$369',
              q651g: '$379',
              qm6k: '$529',
              qm7k: '$999',
              qm8k: '$1299',
            },
          },
          {
            size: '75"',
            prices: {
              s551g: '$479',
              q651g: '$519',
              qm6k: '$799',
              qm7k: '$1299',
              qm8k: '$1999',
            },
          },
          {
            size: '85"',
            prices: {
              s551g: '—',
              q651g: '$849',
              qm6k: '$1099',
              qm7k: '$1799',
              qm8k: '$2199',
            },
          },
          {
            size: '98"',
            prices: {
              s551g: '—',
              q651g: '$1399',
              qm6k: '$1799',
              qm7k: '$2499',
              qm8k: '$3999',
            },
          },
        ],
      }}
    />
  );
}
