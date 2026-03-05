import ComparisonTable from '@/components/ComparisonTable';

export const metadata = {
  title: 'Sony TVs',
  description:
    'Compare Sony S30, X90L, XR70, XR90, A90K, XR80, and A95L TVs.',
};

export default function SonyTVsPage() {
  return (
    <ComparisonTable
      title="Sony TVs"
      subtitle="Compare Sony S30, X90L, XR70, XR90, A90K, XR80, and A95L TVs."
      columns={[
        { key: 's30', label: 'S30' },
        { key: 'x90l', label: 'X90L' },
        { key: 'xr70', label: 'XR70' },
        { key: 'xr90', label: 'XR90', badge: 'gaming' },
        { key: 'a90k', label: 'A90K' },
        { key: 'xr80', label: 'XR80', badge: 'picture' },
        { key: 'a95l', label: 'A95L', badge: 'premium' },
      ]}
      sections={[
        {
          title: 'Specifications',
          rows: [
            {
              label: 'Performance',
              values: {
                s30: '78',
                x90l: '90',
                xr70: '91',
                xr90: '96',
                a90k: '94',
                xr80: '97',
                a95l: '100',
              },
            },
            {
              label: 'Panel',
              values: {
                s30: 'LCD',
                x90l: 'LCD',
                xr70: 'LCD',
                xr90: 'LCD',
                a90k: 'OLED',
                xr80: 'OLED',
                a95l: 'OLED',
              },
            },
            {
              label: 'Panel Speed',
              values: {
                s30: '60 Hz',
                x90l: '120 Hz',
                xr70: '120 Hz',
                xr90: '120 Hz',
                a90k: '120 Hz',
                xr80: '120 Hz',
                a95l: '120 Hz',
              },
            },
            {
              label: 'Backlight',
              values: {
                s30: 'Direct',
                x90l: 'Full Array',
                xr70: 'Full Array Mini LED',
                xr90: 'Full Array Mini+ LED',
                a90k: 'OLED',
                xr80: 'OLED',
                a95l: 'QD OLED',
              },
            },
            {
              label: 'Video Processor',
              values: {
                s30: 'X1 Lite',
                x90l: 'XR Deep Learning',
                xr70: 'XR Deep Learning',
                xr90: 'XR Deep Learning',
                a90k: 'XR Deep Learning',
                xr80: 'XR Deep Learning',
                a95l: 'XR Deep Learning',
              },
            },
            {
              label: 'High Dynamic Range',
              values: {
                s30: '—',
                x90l: 'YES',
                xr70: 'YES',
                xr90: 'YES',
                a90k: 'YES',
                xr80: 'YES',
                a95l: 'YES',
              },
            },
            {
              label: 'Full Color Viewing Angle',
              values: {
                s30: '—',
                x90l: '—',
                xr70: '—',
                xr90: 'Wide',
                a90k: 'Very Wide',
                xr80: 'Very Wide',
                a95l: 'Full',
              },
            },
            {
              label: 'Anti Reflection',
              values: {
                s30: '—',
                x90l: '—',
                xr70: '—',
                xr90: 'YES',
                a90k: 'YES',
                xr80: 'YES',
                a95l: 'YES',
              },
            },
            {
              label: 'Google Smart TV',
              values: {
                s30: 'YES',
                x90l: 'YES',
                xr70: 'YES',
                xr90: 'YES',
                a90k: 'YES',
                xr80: 'YES',
                a95l: 'YES',
              },
            },
            {
              label: 'Remote Control with Voice',
              values: {
                s30: 'YES',
                x90l: 'YES',
                xr70: 'YES',
                xr90: 'YES',
                a90k: 'Illuminated',
                xr80: 'YES',
                a95l: 'Illuminated',
              },
            },
            {
              label: 'TV Microphone',
              values: {
                s30: 'YES',
                x90l: 'YES',
                xr70: 'YES',
                xr90: 'YES',
                a90k: 'YES',
                xr80: 'YES',
                a95l: 'YES',
              },
            },
            {
              label: 'Next Gen TV Tuner',
              values: {
                s30: '—',
                x90l: 'YES',
                xr70: '—',
                xr90: 'YES',
                a90k: 'YES',
                xr80: 'YES',
                a95l: 'YES',
              },
            },
            {
              label: 'Audio Power',
              values: {
                s30: '20W',
                x90l: '30W',
                xr70: '40W',
                xr90: '70W',
                a90k: '30W',
                xr80: '50W',
                a95l: '50W',
              },
            },
            {
              label: 'Speakers',
              values: {
                s30: '2',
                x90l: '4',
                xr70: '4',
                xr90: '8',
                a90k: '3 (Panel Sound)',
                xr80: '5 (Panel Sound)',
                a95l: '4 (Panel Sound)',
              },
            },
            {
              label: 'TV Center Channel Input',
              values: {
                s30: '—',
                x90l: 'YES',
                xr70: 'YES',
                xr90: 'YES',
                a90k: 'YES',
                xr80: 'YES',
                a95l: 'YES',
              },
            },
            {
              label: 'Adjustable Stand',
              values: {
                s30: '—',
                x90l: 'YES',
                xr70: 'YES',
                xr90: 'YES',
                a90k: 'YES',
                xr80: 'YES',
                a95l: 'YES',
              },
            },
            {
              label: 'HDMI Inputs',
              values: {
                s30: '4',
                x90l: '4',
                xr70: '4',
                xr90: '4',
                a90k: '4',
                xr80: '4',
                a95l: '4',
              },
            },
            {
              label: 'Version 2.1',
              values: {
                s30: '—',
                x90l: '2',
                xr70: '2',
                xr90: '2',
                a90k: '2',
                xr80: '2',
                a95l: '2',
              },
            },
            {
              label: 'Dolby Vision',
              values: {
                s30: '—',
                x90l: 'YES',
                xr70: 'YES',
                xr90: 'YES',
                a90k: 'YES',
                xr80: 'YES',
                a95l: 'YES',
              },
            },
          ],
        },
      ]}
      priceSection={{
        rows: [
          {
            size: '42"',
            prices: {
              s30: '—',
              x90l: '—',
              xr70: '—',
              xr90: '—',
              a90k: '$1299',
              xr80: '—',
              a95l: '—',
            },
          },
          {
            size: '43"',
            prices: {
              s30: '$499',
              x90l: '—',
              xr70: '—',
              xr90: '—',
              a90k: '—',
              xr80: '—',
              a95l: '—',
            },
          },
          {
            size: '48"',
            prices: {
              s30: '—',
              x90l: '—',
              xr70: '—',
              xr90: '—',
              a90k: '$1399',
              xr80: '—',
              a95l: '—',
            },
          },
          {
            size: '50"',
            prices: {
              s30: '$569',
              x90l: '—',
              xr70: '—',
              xr90: '—',
              a90k: '—',
              xr80: '—',
              a95l: '—',
            },
          },
          {
            size: '55"',
            prices: {
              s30: '$649',
              x90l: '$849',
              xr70: '$1099',
              xr90: '—',
              a90k: '—',
              xr80: '$1399',
              a95l: '$1999',
            },
          },
          {
            size: '65"',
            prices: {
              s30: '$749',
              x90l: '$849',
              xr70: '$1199',
              xr90: '$1999',
              a90k: '—',
              xr80: '$1699',
              a95l: '$2699',
            },
          },
          {
            size: '75"',
            prices: {
              s30: '$949',
              x90l: '$1199',
              xr70: '$1599',
              xr90: '$2599',
              a90k: '—',
              xr80: '$2499',
              a95l: '$4499',
            },
          },
          {
            size: '85"',
            prices: {
              s30: '$999',
              x90l: '$1399',
              xr70: '$2499',
              xr90: '$2999',
              a90k: '—',
              xr80: '—',
              a95l: '—',
            },
          },
          {
            size: '98"',
            prices: {
              s30: '—',
              x90l: '$3999',
              xr70: '—',
              xr90: '—',
              a90k: '—',
              xr80: '—',
              a95l: '—',
            },
          },
        ],
      }}
    />
  );
}
