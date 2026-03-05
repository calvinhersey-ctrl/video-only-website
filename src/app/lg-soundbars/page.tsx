import ComparisonTable from '@/components/ComparisonTable';

export const metadata = {
  title: 'LG TV Sound Systems',
  description:
    'Compare LG S40T, S60T, S80TR, SC9S, S90TR, and S95TR soundbars.',
};

export default function LgSoundbarsPage() {
  return (
    <ComparisonTable
      title="LG TV Sound Systems"
      subtitle="Compare LG S40T, S60T, S80TR, SC9S, S90TR, and S95TR soundbars"
      columns={[
        { key: 's40t', label: 'S40T' },
        { key: 's60t', label: 'S60T' },
        { key: 's80tr', label: 'S80TR' },
        { key: 'sc9s', label: 'SC9S' },
        { key: 's90tr', label: 'S90TR', badge: 'sound' },
        { key: 's95tr', label: 'S95TR', badge: 'premium' },
      ]}
      sections={[
        {
          title: 'Specifications',
          rows: [
            {
              label: 'Soundbar Width',
              values: {
                s40t: '29"',
                s60t: '34"',
                s80tr: '39"',
                sc9s: '38"',
                s90tr: '49"',
                s95tr: '49"',
              },
            },
            {
              label: 'Left Channel',
              values: {
                s40t: 'YES',
                s60t: 'YES',
                s80tr: 'YES',
                sc9s: 'YES',
                s90tr: 'YES',
                s95tr: 'YES',
              },
            },
            {
              label: 'Right Channel',
              values: {
                s40t: 'YES',
                s60t: 'YES',
                s80tr: 'YES',
                sc9s: 'YES',
                s90tr: 'YES',
                s95tr: 'YES',
              },
            },
            {
              label: 'Center Channel',
              values: {
                s40t: '—',
                s60t: 'YES',
                s80tr: 'YES',
                sc9s: 'YES',
                s90tr: 'YES',
                s95tr: 'YES',
              },
            },
            {
              label: 'Atmos Channel',
              values: {
                s40t: '—',
                s60t: '—',
                s80tr: 'YES',
                sc9s: 'YES',
                s90tr: 'YES',
                s95tr: 'YES',
              },
            },
            {
              label: 'Surround Channel',
              values: {
                s40t: '—',
                s60t: '—',
                s80tr: 'YES',
                sc9s: '—',
                s90tr: 'YES',
                s95tr: 'YES',
              },
            },
            {
              label: 'Rear Speakers',
              values: {
                s40t: '—',
                s60t: '—',
                s80tr: 'YES',
                sc9s: '—',
                s90tr: 'YES',
                s95tr: 'YES',
              },
            },
            {
              label: 'Powered Subwoofer',
              values: {
                s40t: '5"',
                s60t: '6"',
                s80tr: '8"',
                sc9s: '6"',
                s90tr: '8"',
                s95tr: '8"',
              },
            },
            {
              label: 'Meridian Audio Enhancement',
              values: {
                s40t: '—',
                s60t: 'YES',
                s80tr: 'YES',
                sc9s: 'YES',
                s90tr: 'YES',
                s95tr: 'YES',
              },
            },
            {
              label: 'HDMI Input',
              values: {
                s40t: '—',
                s60t: '—',
                s80tr: 'YES',
                sc9s: 'YES',
                s90tr: 'YES',
                s95tr: 'YES',
              },
            },
            {
              label: 'TV Symphony',
              values: {
                s40t: '—',
                s60t: '—',
                s80tr: 'YES',
                sc9s: 'YES',
                s90tr: 'YES',
                s95tr: 'YES',
              },
            },
            {
              label: 'WiFi with Music Apps',
              values: {
                s40t: '—',
                s60t: '—',
                s80tr: 'YES',
                sc9s: 'YES',
                s90tr: 'YES',
                s95tr: 'YES',
              },
            },
          ],
        },
        {
          title: 'Pricing',
          rows: [
            {
              label: 'Suggested Retail',
              values: {
                s40t: '$229',
                s60t: '$249',
                s80tr: '$849',
                sc9s: '$699',
                s90tr: '$1199',
                s95tr: '$1599',
              },
            },
            {
              label: 'Price with LG TV',
              values: {
                s40t: '—',
                s60t: '—',
                s80tr: '$749',
                sc9s: '$499',
                s90tr: '$1099',
                s95tr: '—',
              },
            },
          ],
        },
      ]}
    />
  );
}
