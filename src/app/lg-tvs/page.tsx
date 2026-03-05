import ComparisonTable from '@/components/ComparisonTable';

export const metadata = {
  title: 'LG TV — A/5 Series',
  description:
    'Compare LG UA7700, QNED82A, QNED85A, QNED92A, OLEDB5, OLEDC5, and OLEDG5 TVs.',
};

export default function LGTVsPage() {
  return (
    <ComparisonTable
      title="LG TV — A/5 Series"
      subtitle="Compare LG UA7700, QNED82A, QNED85A, QNED92A, OLEDB5, OLEDC5, and OLEDG5 TVs."
      columns={[
        { key: 'ua7700', label: 'UA7700' },
        { key: 'qned82a', label: 'QNED82A' },
        { key: 'qned85a', label: 'QNED85A' },
        { key: 'qned92a', label: 'QNED92A' },
        { key: 'oledb5', label: 'OLEDB5' },
        { key: 'oledc5', label: 'OLEDC5', badge: 'picture' },
        { key: 'oledg5', label: 'OLEDG5', badge: 'premium' },
      ]}
      sections={[
        {
          title: 'Specifications',
          rows: [
            {
              label: 'Performance',
              values: {
                ua7700: '66',
                qned82a: '70',
                qned85a: '77',
                qned92a: '86',
                oledb5: '91',
                oledc5: '98',
                oledg5: '100',
              },
            },
            {
              label: 'Panel',
              values: {
                ua7700: 'LCD',
                qned82a: 'LCD',
                qned85a: 'LCD',
                qned92a: 'LCD',
                oledb5: '3 Color OLED',
                oledc5: '3 Color OLED',
                oledg5: '4 Color OLED',
              },
            },
            {
              label: 'Panel Speed',
              values: {
                ua7700: '60 Hz',
                qned82a: '60 Hz',
                qned85a: '120 Hz',
                qned92a: '120 Hz',
                oledb5: '120 Hz',
                oledc5: '120 Hz',
                oledg5: '120 Hz',
              },
            },
            {
              label: 'Variable Refresh Rate',
              values: {
                ua7700: '—',
                qned82a: '—',
                qned85a: '144 Hz',
                qned92a: '144 Hz',
                oledb5: '—',
                oledc5: '144 Hz',
                oledg5: '165 Hz',
              },
            },
            {
              label: 'Backlight',
              values: {
                ua7700: 'LED',
                qned82a: 'Edge LED',
                qned85a: 'Full Array LED',
                qned92a: 'Full Array Mini LED',
                oledb5: 'Self',
                oledc5: 'Bright Self',
                oledg5: 'Very Bright Self',
              },
            },
            {
              label: 'Local Dimming',
              values: {
                ua7700: '—',
                qned82a: 'Dimming',
                qned85a: 'Dimming',
                qned92a: 'Dimming Pro',
                oledb5: 'Full Panel',
                oledc5: 'Full Panel',
                oledg5: 'Full Panel',
              },
            },
            {
              label: 'Audio/Video Processor',
              values: {
                ua7700: 'α7',
                qned82a: 'α7',
                qned85a: 'α8',
                qned92a: 'α8',
                oledb5: 'α8',
                oledc5: 'α9',
                oledg5: 'α11',
              },
            },
            {
              label: 'Color Filter',
              values: {
                ua7700: 'Standard',
                qned82a: 'Dynamic',
                qned85a: 'Dynamic',
                qned92a: 'Dynamic Pro',
                oledb5: 'Perfect',
                oledc5: 'Perfect',
                oledg5: 'Perfect',
              },
            },
            {
              label: 'Dolby Vision',
              values: {
                ua7700: '—',
                qned82a: '—',
                qned85a: '—',
                qned92a: 'YES',
                oledb5: 'YES',
                oledc5: 'YES',
                oledg5: 'YES',
              },
            },
            {
              label: 'Full Color Viewing Angle',
              values: {
                ua7700: '—',
                qned82a: '—',
                qned85a: '—',
                qned92a: '—',
                oledb5: 'Wide',
                oledc5: 'Wide',
                oledg5: 'Full',
              },
            },
            {
              label: 'Anti Reflection',
              values: {
                ua7700: '—',
                qned82a: '—',
                qned85a: '—',
                qned92a: '—',
                oledb5: 'YES',
                oledc5: 'YES',
                oledg5: 'YES',
              },
            },
            {
              label: 'Smart TV',
              values: {
                ua7700: 'Web OS',
                qned82a: 'Web OS',
                qned85a: 'Web OS',
                qned92a: 'Web OS',
                oledb5: 'Web OS',
                oledc5: 'Web OS',
                oledg5: 'Web OS',
              },
            },
            {
              label: 'Magic Voice Remote',
              values: {
                ua7700: '—',
                qned82a: 'YES',
                qned85a: 'YES',
                qned92a: 'YES',
                oledb5: 'YES',
                oledc5: 'YES',
                oledg5: 'YES',
              },
            },
            {
              label: 'WiFi',
              values: {
                ua7700: '5',
                qned82a: '5',
                qned85a: '6E',
                qned92a: '6E',
                oledb5: '6E',
                oledc5: '6E',
                oledg5: '6E',
              },
            },
            {
              label: 'Speakers',
              values: {
                ua7700: '2',
                qned82a: '2',
                qned85a: '2',
                qned92a: '4',
                oledb5: '2',
                oledc5: '4',
                oledg5: '6',
              },
            },
            {
              label: 'HDMI Inputs',
              values: {
                ua7700: '3',
                qned82a: '3',
                qned85a: '4',
                qned92a: '4',
                oledb5: '4',
                oledc5: '4',
                oledg5: '4',
              },
            },
            {
              label: 'Version 2.1',
              values: {
                ua7700: '—',
                qned82a: '—',
                qned85a: '4',
                qned92a: '4',
                oledb5: '4',
                oledc5: '4',
                oledg5: '4',
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
              ua7700: '$229',
              qned82a: '$379',
              qned85a: '—',
              qned92a: '—',
              oledb5: '42": $899',
              oledc5: '—',
              oledg5: '—',
            },
          },
          {
            size: '50"',
            prices: {
              ua7700: '$269',
              qned82a: '$399',
              qned85a: '—',
              qned92a: '—',
              oledb5: '48": $999',
              oledc5: '—',
              oledg5: '—',
            },
          },
          {
            size: '55"',
            prices: {
              ua7700: '$299',
              qned82a: '$449',
              qned85a: '$799',
              qned92a: '—',
              oledb5: '55": $899',
              oledc5: '$1099',
              oledg5: '$1799',
            },
          },
          {
            size: '65"',
            prices: {
              ua7700: '$429',
              qned82a: '$549',
              qned85a: '$899',
              qned92a: '$1099',
              oledb5: '65": $1199',
              oledc5: '$1399',
              oledg5: '$2499',
            },
          },
          {
            size: '75"',
            prices: {
              ua7700: '$549',
              qned82a: '$749',
              qned85a: '$1099',
              qned92a: '$1699',
              oledb5: '77": $1799',
              oledc5: '$2299',
              oledg5: '$3499',
            },
          },
          {
            size: '86"',
            prices: {
              ua7700: '$899',
              qned82a: '$1299',
              qned85a: '$1599',
              qned92a: '$2199',
              oledb5: '83": $2699',
              oledc5: '$2999',
              oledg5: '$5299',
            },
          },
          {
            size: '100"',
            prices: {
              ua7700: '—',
              qned82a: '—',
              qned85a: '$3499',
              qned92a: '—',
              oledb5: '97": —',
              oledc5: '—',
              oledg5: '$19999',
            },
          },
        ],
        footnote:
          'OLED sizes are 42", 48", 55", 65", 77", 83", 97" — different from LCD sizes.',
      }}
    />
  );
}
