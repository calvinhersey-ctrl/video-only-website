import ComparisonTable from '@/components/ComparisonTable';

export const metadata = {
  title: 'Samsung F Series LCD TVs',
  description:
    'Compare Samsung U8000F, Q7F, Q8F, QN70F, QN80F, Frame LS03F, Frame Pro LS03FW, and QN90F LCD TVs.',
};

export default function SamsungLcdPage() {
  return (
    <ComparisonTable
      title="Samsung F Series LCD TVs"
      subtitle="Compare Samsung U8000F, Q7F, Q8F, QN70F, QN80F, Frame LS03F, Frame Pro LS03FW, and QN90F LCD TVs"
      columns={[
        { key: 'U8000F', label: 'U8000F' },
        { key: 'Q7F', label: 'Q7F' },
        { key: 'Q8F', label: 'Q8F' },
        { key: 'QN70F', label: 'QN70F' },
        { key: 'QN80F', label: 'QN80F' },
        { key: 'FrameLS03F', label: 'Frame LS03F' },
        { key: 'FrameProLS03FW', label: 'Frame Pro LS03FW' },
        { key: 'QN90F', label: 'QN90F', badge: 'premium' },
      ]}
      sections={[
        {
          title: 'Specifications',
          rows: [
            {
              label: 'Performance',
              values: {
                U8000F: '66',
                Q7F: '68',
                Q8F: '70',
                QN70F: '76',
                QN80F: '77',
                FrameLS03F: '73',
                FrameProLS03FW: '77',
                QN90F: '90',
              },
            },
            {
              label: 'Panel Speed',
              values: {
                U8000F: '60Hz',
                Q7F: '60Hz',
                Q8F: '120Hz',
                QN70F: '120Hz',
                QN80F: '120Hz',
                FrameLS03F: '120Hz',
                FrameProLS03FW: '120Hz',
                QN90F: '120Hz',
              },
            },
            {
              label: 'Variable Refresh Rate',
              values: {
                U8000F: '—',
                Q7F: '—',
                Q8F: '144',
                QN70F: '144',
                QN80F: '144',
                FrameLS03F: '144',
                FrameProLS03FW: '144',
                QN90F: '165',
              },
            },
            {
              label: 'Backlight',
              values: {
                U8000F: 'LED',
                Q7F: 'LED',
                Q8F: 'Edge LED',
                QN70F: 'Edge LED',
                QN80F: 'Full Array LED',
                FrameLS03F: 'Edge LED',
                FrameProLS03FW: 'Edge LED',
                QN90F: 'Full Array Mini LED',
              },
            },
            {
              label: 'Local Dimming',
              values: {
                U8000F: '—',
                Q7F: '—',
                Q8F: '—',
                QN70F: 'YES',
                QN80F: 'YES',
                FrameLS03F: '—',
                FrameProLS03FW: 'YES',
                QN90F: 'YES',
              },
            },
            {
              label: 'AI Processor',
              values: {
                U8000F: '—',
                Q7F: 'Learning',
                Q8F: 'Learning',
                QN70F: 'Deep Learning',
                QN80F: 'Deep Learning',
                FrameLS03F: 'Deep Learning',
                FrameProLS03FW: 'Advanced Deep Learning',
                QN90F: 'Advanced Deep Learning',
              },
            },
            {
              label: 'Anti Reflection Coating',
              values: {
                U8000F: '—',
                Q7F: '—',
                Q8F: '—',
                QN70F: '—',
                QN80F: '—',
                FrameLS03F: 'YES',
                FrameProLS03FW: 'YES',
                QN90F: 'YES',
              },
            },
            {
              label: 'Audio Power',
              values: {
                U8000F: '20W',
                Q7F: '20W',
                Q8F: '20W',
                QN70F: '20W',
                QN80F: '30W',
                FrameLS03F: '40W',
                FrameProLS03FW: '40W',
                QN90F: '60W',
              },
            },
            {
              label: 'Speakers',
              values: {
                U8000F: '2',
                Q7F: '2',
                Q8F: '2',
                QN70F: '2',
                QN80F: '4',
                FrameLS03F: '4',
                FrameProLS03FW: '4',
                QN90F: '8',
              },
            },
            {
              label: 'Dialogue Enhancer',
              values: {
                U8000F: '—',
                Q7F: '—',
                Q8F: 'YES',
                QN70F: 'YES',
                QN80F: 'YES',
                FrameLS03F: 'YES',
                FrameProLS03FW: 'YES',
                QN90F: 'YES',
              },
            },
            {
              label: 'Art Show',
              values: {
                U8000F: '—',
                Q7F: 'YES',
                Q8F: 'YES',
                QN70F: 'YES',
                QN80F: 'YES',
                FrameLS03F: 'YES',
                FrameProLS03FW: 'YES',
                QN90F: 'YES',
              },
            },
            {
              label: 'Full Art Store',
              values: {
                U8000F: '—',
                Q7F: '—',
                Q8F: '—',
                QN70F: '—',
                QN80F: '—',
                FrameLS03F: 'YES',
                FrameProLS03FW: 'YES',
                QN90F: '—',
              },
            },
            {
              label: 'Remote Control Power',
              values: {
                U8000F: 'Battery',
                Q7F: 'Solar',
                Q8F: 'Solar',
                QN70F: 'Solar',
                QN80F: 'Solar',
                FrameLS03F: 'Solar',
                FrameProLS03FW: 'Solar',
                QN90F: 'Solar',
              },
            },
            {
              label: 'Voice Control of TV',
              values: {
                U8000F: '—',
                Q7F: 'YES',
                Q8F: 'YES',
                QN70F: 'YES',
                QN80F: 'YES',
                FrameLS03F: 'YES',
                FrameProLS03FW: 'YES',
                QN90F: 'YES',
              },
            },
            {
              label: 'HDMI Inputs',
              values: {
                U8000F: '3',
                Q7F: '3',
                Q8F: '4',
                QN70F: '4',
                QN80F: '4',
                FrameLS03F: '4',
                FrameProLS03FW: '5',
                QN90F: '4',
              },
            },
            {
              label: 'HDMI Version 2.1',
              values: {
                U8000F: '—',
                Q7F: '—',
                Q8F: '4',
                QN70F: '4',
                QN80F: '4',
                FrameLS03F: '4',
                FrameProLS03FW: '5',
                QN90F: '4',
              },
            },
            {
              label: 'Connect Box',
              values: {
                U8000F: '—',
                Q7F: '—',
                Q8F: '—',
                QN70F: '—',
                QN80F: '—',
                FrameLS03F: 'YES',
                FrameProLS03FW: 'Wireless',
                QN90F: '—',
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
              U8000F: '$229',
              Q7F: '$349',
              Q8F: '$429 *',
              QN70F: '—',
              QN80F: '—',
              FrameLS03F: '$699 *',
              FrameProLS03FW: '—',
              QN90F: '$799 *',
            },
          },
          {
            size: '50"',
            prices: {
              U8000F: '$269',
              Q7F: '$379',
              Q8F: '$599 *',
              QN70F: '—',
              QN80F: '—',
              FrameLS03F: '$799 *',
              FrameProLS03FW: '—',
              QN90F: '$1099 *',
            },
          },
          {
            size: '55"',
            prices: {
              U8000F: '$349',
              Q7F: '$399',
              Q8F: '$599',
              QN70F: '$699',
              QN80F: '$799',
              FrameLS03F: '$899',
              FrameProLS03FW: '—',
              QN90F: '$1299',
            },
          },
          {
            size: '65"',
            prices: {
              U8000F: '$429',
              Q7F: '$469',
              Q8F: '$699',
              QN70F: '$899',
              QN80F: '$999',
              FrameLS03F: '$1199',
              FrameProLS03FW: '$1499',
              QN90F: '$1499',
            },
          },
          {
            size: '75"',
            prices: {
              U8000F: '$549',
              Q7F: '$699',
              Q8F: '$1099',
              QN70F: '$1199',
              QN80F: '$1499',
              FrameLS03F: '—',
              FrameProLS03FW: '$1999',
              QN90F: '$1799',
            },
          },
          {
            size: '85"',
            prices: {
              U8000F: '$899',
              Q7F: '$1099',
              Q8F: '$1499',
              QN70F: '$1699',
              QN80F: '$2199',
              FrameLS03F: '—',
              FrameProLS03FW: '$3299',
              QN90F: '$2299',
            },
          },
        ],
        footnote: 'Specifications slightly different for these models',
      }}
    />
  );
}
