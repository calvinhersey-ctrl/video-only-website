import ComparisonTable from '@/components/ComparisonTable';

export const metadata = {
  title: 'Samsung F Series OLED TVs',
  description:
    'Compare Samsung S85F, S90F, and S95F OLED TVs. Side-by-side specs, features, and pricing.',
};

export default function SamsungOledPage() {
  return (
    <ComparisonTable
      title="Samsung F Series OLED TVs"
      subtitle="Compare Samsung S85F, S90F, and S95F OLED TVs"
      columns={[
        { key: 's85f', label: 'S85F' },
        { key: 's90f', label: 'S90F', badge: 'picture' },
        { key: 's95f', label: 'S95F', badge: 'premium' },
      ]}
      sections={[
        {
          title: 'Specifications',
          rows: [
            { label: 'Performance', values: { s85f: '92', s90f: '98', s95f: '100' } },
            { label: 'Panel Speed', values: { s85f: '120Hz', s90f: '120Hz', s95f: '120Hz' } },
            { label: 'Variable Refresh Rate', values: { s85f: '—', s90f: '144', s95f: '165' } },
            {
              label: 'Lighting',
              values: { s85f: 'Self Lit OLED', s90f: 'Self Lit OLED', s95f: 'Self Lit OLED' },
            },
            {
              label: 'Quantum Dot OLED',
              values: { s85f: '4 Color', s90f: '4 Color', s95f: '5 Color' },
            },
            {
              label: 'Brightness',
              values: { s85f: 'Standard', s90f: 'Bright', s95f: 'Super Bright' },
            },
            {
              label: 'Local Dimming',
              values: { s85f: 'Full Panel', s90f: 'Full Panel', s95f: 'Full Panel' },
            },
            {
              label: 'Anti Reflection Coating',
              values: { s85f: 'YES', s90f: 'YES', s95f: 'Matte' },
            },
            {
              label: 'AI Processor',
              values: {
                s85f: 'Deep Learning',
                s90f: 'Advanced Deep Learning',
                s95f: 'Advanced Deep Learning',
              },
            },
            {
              label: 'Audio Power',
              values: { s85f: '20 Watt', s90f: '40 Watt', s95f: '70 Watt' },
            },
            { label: 'Speakers', values: { s85f: '2', s90f: '3', s95f: '8' } },
            {
              label: 'Ambient Art Effects',
              values: { s85f: 'YES', s90f: 'YES', s95f: 'YES' },
            },
            {
              label: 'Remote Control Power',
              values: { s85f: 'Solar', s90f: 'Solar', s95f: 'Solar' },
            },
            {
              label: 'Voice Control of TV',
              values: { s85f: 'YES', s90f: 'YES', s95f: 'YES' },
            },
            { label: 'HDMI Inputs', values: { s85f: '4', s90f: '4', s95f: '4' } },
            { label: 'HDMI Version 2.1', values: { s85f: '4', s90f: '4', s95f: '4' } },
            { label: 'Connect Box', values: { s85f: '—', s90f: '—', s95f: 'YES' } },
          ],
        },
      ]}
      priceSection={{
        rows: [
          { size: '42"', prices: { s85f: '—', s90f: '$899 *', s95f: '—' } },
          { size: '48"', prices: { s85f: '—', s90f: '$999 *', s95f: '—' } },
          { size: '55"', prices: { s85f: '$999', s90f: '$1099', s95f: '$1999' } },
          { size: '65"', prices: { s85f: '$1199', s90f: '$1399', s95f: '$2499' } },
          { size: '77"', prices: { s85f: '$1599 *', s90f: '$1999 *', s95f: '$3499' } },
          { size: '83"', prices: { s85f: '$2299 *', s90f: '$2999 *', s95f: '$5299 *' } },
        ],
        footnote: 'Specifications slightly different for these models',
      }}
    />
  );
}
